(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function Hn(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ot(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=He(o)?vh(o):ot(o);if(r)for(const l in r)t[l]=r[l]}return t}else{if(He(e))return e;if(Te(e))return e}}const Fh=/;(?![^(]*\))/g,yh=/:([^]+)/,gh=/\/\*.*?\*\//gs;function vh(e){const t={};return e.replace(gh,"").split(Fh).forEach(n=>{if(n){const o=n.split(yh);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Le(e){let t="";if(He(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const o=Le(e[n]);o&&(t+=o+" ")}else if(Te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Ke(e){if(!e)return null;let{class:t,style:n}=e;return t&&!He(t)&&(e.class=Le(t)),n&&(e.style=ot(n)),e}const _h="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",bh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Yu=Hn(_h),xh=Hn(bh),wh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ch=Hn(wh);function Zu(e){return!!e||e===""}const as=e=>He(e)?e:e==null?"":se(e)||Te(e)&&(e.toString===tp||!ue(e.toString))?JSON.stringify(e,Gu,2):String(e),Gu=(e,t)=>t&&t.__v_isRef?Gu(e,t.value):es(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:ep(t)?{[`Set(${t.size})`]:[...t.values()]}:Te(t)&&!se(t)&&!np(t)?String(t):t,Ie=Object.freeze({}),Es=Object.freeze([]),mt=()=>{},Qu=()=>!1,kh=/^on[^a-z]/,Ho=e=>kh.test(e),vr=e=>e.startsWith("onUpdate:"),Ne=Object.assign,Ba=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Sh=Object.prototype.hasOwnProperty,_e=(e,t)=>Sh.call(e,t),se=Array.isArray,es=e=>jo(e)==="[object Map]",ep=e=>jo(e)==="[object Set]",Eh=e=>jo(e)==="[object RegExp]",ue=e=>typeof e=="function",He=e=>typeof e=="string",Ma=e=>typeof e=="symbol",Te=e=>e!==null&&typeof e=="object",Ha=e=>Te(e)&&ue(e.then)&&ue(e.catch),tp=Object.prototype.toString,jo=e=>tp.call(e),ja=e=>jo(e).slice(8,-1),np=e=>jo(e)==="[object Object]",Na=e=>He(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ir=Hn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$h=Hn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ah=/-(\w)/g,Kt=Hr(e=>e.replace(Ah,(t,n)=>n?n.toUpperCase():"")),Th=/\B([A-Z])/g,pn=Hr(e=>e.replace(Th,"-$1").toLowerCase()),is=Hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xn=Hr(e=>e?`on${is(e)}`:""),vo=(e,t)=>!Object.is(e,t),wn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_r=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ml=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Rh=e=>{const t=He(e)?Number(e):NaN;return isNaN(t)?e:t};let Bi;const sp=()=>Bi||(Bi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function br(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let xt;class op{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!t&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xt;try{return xt=this,t()}finally{xt=n}}else br("cannot run an inactive effect scope.")}on(){xt=this}off(){xt=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Oh(e){return new op(e)}function Ph(e,t=xt){t&&t.active&&t.effects.push(e)}function Da(){return xt}function rp(e){xt?xt.cleanups.push(e):br("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Va=e=>{const t=new Set(e);return t.w=0,t.n=0,t},lp=e=>(e.w&In)>0,ap=e=>(e.n&In)>0,Ih=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=In},Lh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];lp(r)&&!ap(r)?r.delete(e):t[n++]=r,r.w&=~In,r.n&=~In}t.length=n}},Hl=new WeakMap;let eo=0,In=1;const jl=30;let pt;const ts=Symbol("iterate"),Nl=Symbol("Map key iterate");class Ja{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ph(this,o)}run(){if(!this.active)return this.fn();let t=pt,n=En;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=pt,pt=this,En=!0,In=1<<++eo,eo<=jl?Ih(this):Mi(this),this.fn()}finally{eo<=jl&&Lh(this),In=1<<--eo,pt=this.parent,En=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pt===this?this.deferStop=!0:this.active&&(Mi(this),this.onStop&&this.onStop(),this.active=!1)}}function Mi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let En=!0;const ip=[];function us(){ip.push(En),En=!1}function ps(){const e=ip.pop();En=e===void 0?!0:e}function yt(e,t,n){if(En&&pt){let o=Hl.get(e);o||Hl.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Va()),cp(r,{effect:pt,target:e,type:t,key:n})}}function cp(e,t){let n=!1;eo<=jl?ap(e)||(e.n|=In,n=!lp(e)):n=!e.has(pt),n&&(e.add(pt),pt.deps.push(e),pt.onTrack&&pt.onTrack(Object.assign({effect:pt},t)))}function fn(e,t,n,o,r,l){const a=Hl.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(n==="length"&&se(e)){const u=Number(o);a.forEach((p,f)=>{(f==="length"||f>=u)&&i.push(p)})}else switch(n!==void 0&&i.push(a.get(n)),t){case"add":se(e)?Na(n)&&i.push(a.get("length")):(i.push(a.get(ts)),es(e)&&i.push(a.get(Nl)));break;case"delete":se(e)||(i.push(a.get(ts)),es(e)&&i.push(a.get(Nl)));break;case"set":es(e)&&i.push(a.get(ts));break}const c={target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:l};if(i.length===1)i[0]&&Dl(i[0],c);else{const u=[];for(const p of i)p&&u.push(...p);Dl(Va(u),c)}}function Dl(e,t){const n=se(e)?e:[...e];for(const o of n)o.computed&&Hi(o,t);for(const o of n)o.computed||Hi(o,t)}function Hi(e,t){(e!==pt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ne({effect:e},t)),e.scheduler?e.scheduler():e.run())}const Bh=Hn("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ma)),Mh=jr(),Hh=jr(!1,!0),jh=jr(!0),Nh=jr(!0,!0),ji=Dh();function Dh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=he(this);for(let l=0,a=this.length;l<a;l++)yt(o,"get",l+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){us();const o=he(this)[t].apply(this,n);return ps(),o}}),e}function Vh(e){const t=he(this);return yt(t,"has",e),t.hasOwnProperty(e)}function jr(e=!1,t=!1){return function(o,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&l===(e?t?gp:yp:t?Fp:mp).get(o))return o;const a=se(o);if(!e){if(a&&_e(ji,r))return Reflect.get(ji,r,l);if(r==="hasOwnProperty")return Vh}const i=Reflect.get(o,r,l);return(Ma(r)?up.has(r):Bh(r))||(e||yt(o,"get",r),t)?i:Ae(i)?a&&Na(r)?i:i.value:Te(i)?e?Wt(i):je(i):i}}const Jh=pp(),qh=pp(!0);function pp(e=!1){return function(n,o,r,l){let a=n[o];if(Ln(a)&&Ae(a)&&!Ae(r))return!1;if(!e&&(!xr(r)&&!Ln(r)&&(a=he(a),r=he(r)),!se(n)&&Ae(a)&&!Ae(r)))return a.value=r,!0;const i=se(n)&&Na(o)?Number(o)<n.length:_e(n,o),c=Reflect.set(n,o,r,l);return n===he(l)&&(i?vo(r,a)&&fn(n,"set",o,r,a):fn(n,"add",o,r)),c}}function Xh(e,t){const n=_e(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&fn(e,"delete",t,void 0,o),r}function Uh(e,t){const n=Reflect.has(e,t);return(!Ma(t)||!up.has(t))&&yt(e,"has",t),n}function Wh(e){return yt(e,"iterate",se(e)?"length":ts),Reflect.ownKeys(e)}const fp={get:Mh,set:Jh,deleteProperty:Xh,has:Uh,ownKeys:Wh},dp={get:jh,set(e,t){return br(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return br(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},zh=Ne({},fp,{get:Hh,set:qh}),Kh=Ne({},dp,{get:Nh}),qa=e=>e,Nr=e=>Reflect.getPrototypeOf(e);function Ko(e,t,n=!1,o=!1){e=e.__v_raw;const r=he(e),l=he(t);n||(t!==l&&yt(r,"get",t),yt(r,"get",l));const{has:a}=Nr(r),i=o?qa:n?Xa:_o;if(a.call(r,t))return i(e.get(t));if(a.call(r,l))return i(e.get(l));e!==r&&e.get(t)}function Yo(e,t=!1){const n=this.__v_raw,o=he(n),r=he(e);return t||(e!==r&&yt(o,"has",e),yt(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Zo(e,t=!1){return e=e.__v_raw,!t&&yt(he(e),"iterate",ts),Reflect.get(e,"size",e)}function Ni(e){e=he(e);const t=he(this);return Nr(t).has.call(t,e)||(t.add(e),fn(t,"add",e,e)),this}function Di(e,t){t=he(t);const n=he(this),{has:o,get:r}=Nr(n);let l=o.call(n,e);l?hp(n,o,e):(e=he(e),l=o.call(n,e));const a=r.call(n,e);return n.set(e,t),l?vo(t,a)&&fn(n,"set",e,t,a):fn(n,"add",e,t),this}function Vi(e){const t=he(this),{has:n,get:o}=Nr(t);let r=n.call(t,e);r?hp(t,n,e):(e=he(e),r=n.call(t,e));const l=o?o.call(t,e):void 0,a=t.delete(e);return r&&fn(t,"delete",e,void 0,l),a}function Ji(){const e=he(this),t=e.size!==0,n=es(e)?new Map(e):new Set(e),o=e.clear();return t&&fn(e,"clear",void 0,void 0,n),o}function Go(e,t){return function(o,r){const l=this,a=l.__v_raw,i=he(a),c=t?qa:e?Xa:_o;return!e&&yt(i,"iterate",ts),a.forEach((u,p)=>o.call(r,c(u),c(p),l))}}function Qo(e,t,n){return function(...o){const r=this.__v_raw,l=he(r),a=es(l),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=r[e](...o),p=n?qa:t?Xa:_o;return!t&&yt(l,"iterate",c?Nl:ts),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:i?[p(f[0]),p(f[1])]:p(f),done:d}},[Symbol.iterator](){return this}}}}function Fn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${is(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Yh(){const e={get(l){return Ko(this,l)},get size(){return Zo(this)},has:Yo,add:Ni,set:Di,delete:Vi,clear:Ji,forEach:Go(!1,!1)},t={get(l){return Ko(this,l,!1,!0)},get size(){return Zo(this)},has:Yo,add:Ni,set:Di,delete:Vi,clear:Ji,forEach:Go(!1,!0)},n={get(l){return Ko(this,l,!0)},get size(){return Zo(this,!0)},has(l){return Yo.call(this,l,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:Go(!0,!1)},o={get(l){return Ko(this,l,!0,!0)},get size(){return Zo(this,!0)},has(l){return Yo.call(this,l,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:Go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Qo(l,!1,!1),n[l]=Qo(l,!0,!1),t[l]=Qo(l,!1,!0),o[l]=Qo(l,!0,!0)}),[e,n,t,o]}const[Zh,Gh,Qh,em]=Yh();function Dr(e,t){const n=t?e?em:Qh:e?Gh:Zh;return(o,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(_e(n,r)&&r in o?n:o,r,l)}const tm={get:Dr(!1,!1)},nm={get:Dr(!1,!0)},sm={get:Dr(!0,!1)},om={get:Dr(!0,!0)};function hp(e,t,n){const o=he(n);if(o!==n&&t.call(e,o)){const r=ja(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const mp=new WeakMap,Fp=new WeakMap,yp=new WeakMap,gp=new WeakMap;function rm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lm(e){return e.__v_skip||!Object.isExtensible(e)?0:rm(ja(e))}function je(e){return Ln(e)?e:Vr(e,!1,fp,tm,mp)}function am(e){return Vr(e,!1,zh,nm,Fp)}function Wt(e){return Vr(e,!0,dp,sm,yp)}function Cs(e){return Vr(e,!0,Kh,om,gp)}function Vr(e,t,n,o,r){if(!Te(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const a=lm(e);if(a===0)return e;const i=new Proxy(e,a===2?o:n);return r.set(e,i),i}function ns(e){return Ln(e)?ns(e.__v_raw):!!(e&&e.__v_isReactive)}function Ln(e){return!!(e&&e.__v_isReadonly)}function xr(e){return!!(e&&e.__v_isShallow)}function Vl(e){return ns(e)||Ln(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Jr(e){return _r(e,"__v_skip",!0),e}const _o=e=>Te(e)?je(e):e,Xa=e=>Te(e)?Wt(e):e;function Ua(e){En&&pt&&(e=he(e),cp(e.dep||(e.dep=Va()),{target:e,type:"get",key:"value"}))}function Wa(e,t){e=he(e);const n=e.dep;n&&Dl(n,{target:e,type:"set",key:"value",newValue:t})}function Ae(e){return!!(e&&e.__v_isRef===!0)}function X(e){return vp(e,!1)}function Yt(e){return vp(e,!0)}function vp(e,t){return Ae(e)?e:new im(e,t)}class im{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:_o(t)}get value(){return Ua(this),this._value}set value(t){const n=this.__v_isShallow||xr(t)||Ln(t);t=n?t:he(t),vo(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_o(t),Wa(this,t))}}function k(e){return Ae(e)?e.value:e}const cm={get:(e,t,n)=>k(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function _p(e){return ns(e)?e:new Proxy(e,cm)}class um{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>Ua(this),()=>Wa(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function pm(e){return new um(e)}var bp;class fm{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[bp]=!1,this._dirty=!0,this.effect=new Ja(t,()=>{this._dirty||(this._dirty=!0,Wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=he(this);return Ua(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}bp="__v_isReadonly";function dm(e,t,n=!1){let o,r;const l=ue(e);l?(o=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,r=e.set);const a=new fm(o,r,l||!r,n);return t&&!n&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const ss=[];function cr(e){ss.push(e)}function ur(){ss.pop()}function I(e,...t){us();const n=ss.length?ss[ss.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=hm();if(o)cn(o,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:l})=>`at <${Qr(n,l.type)}>`).join(`
`),r]);else{const l=[`[Vue warn]: ${e}`,...t];r.length&&l.push(`
`,...mm(r)),console.warn(...l)}ps()}function hm(){let e=ss[ss.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function mm(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...Fm(n))}),t}function Fm({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,r=` at <${Qr(e.component,e.type,o)}`,l=">"+n;return e.props?[r,...ym(e.props),l]:[r+l]}function ym(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...xp(o,e[o]))}),n.length>3&&t.push(" ..."),t}function xp(e,t,n){return He(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Ae(t)?(t=xp(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):ue(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function gm(e,t){e!==void 0&&(typeof e!="number"?I(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&I(`${t} is NaN - the duration expression might be incorrect.`))}const za={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function cn(e,t,n,o){let r;try{r=o?e(...o):e()}catch(l){qr(l,t,n)}return r}function Pt(e,t,n,o){if(ue(e)){const l=cn(e,t,n,o);return l&&Ha(l)&&l.catch(a=>{qr(a,t,n)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Pt(e[l],t,n,o));return r}function qr(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let l=t.parent;const a=t.proxy,i=za[n];for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,a,i)===!1)return}l=l.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,a,i]);return}}vm(e,n,r,o)}function vm(e,t,n,o=!0){{const r=za[t];if(n&&cr(n),I(`Unhandled error${r?` during execution of ${r}`:""}`),n&&ur(),o)throw e;console.error(e)}}let bo=!1,Jl=!1;const st=[];let Xt=0;const $s=[];let qt=null,_n=0;const wp=Promise.resolve();let Ka=null;const _m=100;function Qe(e){const t=Ka||wp;return e?t.then(this?e.bind(this):e):t}function bm(e){let t=Xt+1,n=st.length;for(;t<n;){const o=t+n>>>1;xo(st[o])<e?t=o+1:n=o}return t}function Xr(e){(!st.length||!st.includes(e,bo&&e.allowRecurse?Xt+1:Xt))&&(e.id==null?st.push(e):st.splice(bm(e.id),0,e),Cp())}function Cp(){!bo&&!Jl&&(Jl=!0,Ka=wp.then(Ep))}function xm(e){const t=st.indexOf(e);t>Xt&&st.splice(t,1)}function kp(e){se(e)?$s.push(...e):(!qt||!qt.includes(e,e.allowRecurse?_n+1:_n))&&$s.push(e),Cp()}function qi(e,t=bo?Xt+1:0){for(e=e||new Map;t<st.length;t++){const n=st[t];if(n&&n.pre){if(Ya(e,n))continue;st.splice(t,1),t--,n()}}}function Sp(e){if($s.length){const t=[...new Set($s)];if($s.length=0,qt){qt.push(...t);return}for(qt=t,e=e||new Map,qt.sort((n,o)=>xo(n)-xo(o)),_n=0;_n<qt.length;_n++)Ya(e,qt[_n])||qt[_n]();qt=null,_n=0}}const xo=e=>e.id==null?1/0:e.id,wm=(e,t)=>{const n=xo(e)-xo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ep(e){Jl=!1,bo=!0,e=e||new Map,st.sort(wm);const t=n=>Ya(e,n);try{for(Xt=0;Xt<st.length;Xt++){const n=st[Xt];if(n&&n.active!==!1){if(t(n))continue;cn(n,null,14)}}}finally{Xt=0,st.length=0,Sp(e),bo=!1,Ka=null,(st.length||$s.length)&&Ep(e)}}function Ya(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>_m){const o=t.ownerInstance,r=o&&So(o.type);return I(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let $n=!1;const bs=new Set;sp().__VUE_HMR_RUNTIME__={createRecord:rl($p),rerender:rl(Sm),reload:rl(Em)};const cs=new Map;function Cm(e){const t=e.type.__hmrId;let n=cs.get(t);n||($p(t,e.type),n=cs.get(t)),n.instances.add(e)}function km(e){cs.get(e.type.__hmrId).instances.delete(e)}function $p(e,t){return cs.has(e)?!1:(cs.set(e,{initialDef:ro(t),instances:new Set}),!0)}function ro(e){return af(e)?e.__vccOpts:e}function Sm(e,t){const n=cs.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,ro(o.type).render=t),o.renderCache=[],$n=!0,o.update(),$n=!1}))}function Em(e,t){const n=cs.get(e);if(!n)return;t=ro(t),Xi(n.initialDef,t);const o=[...n.instances];for(const r of o){const l=ro(r.type);bs.has(l)||(l!==n.initialDef&&Xi(l,t),bs.add(l)),r.appContext.optionsCache.delete(r.type),r.ceReload?(bs.add(l),r.ceReload(t.styles),bs.delete(l)):r.parent?Xr(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}kp(()=>{for(const r of o)bs.delete(ro(r.type))})}function Xi(e,t){Ne(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function rl(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Ut,to=[],ql=!1;function No(e,...t){Ut?Ut.emit(e,...t):ql||to.push({event:e,args:t})}function Ap(e,t){var n,o;Ut=e,Ut?(Ut.enabled=!0,to.forEach(({event:r,args:l})=>Ut.emit(r,...l)),to=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Ap(l,t)}),setTimeout(()=>{Ut||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ql=!0,to=[])},3e3)):(ql=!0,to=[])}function $m(e,t){No("app:init",e,t,{Fragment:Se,Text:Jo,Comment:Ze,Static:pr})}function Am(e){No("app:unmount",e)}const Xl=Za("component:added"),Tp=Za("component:updated"),Tm=Za("component:removed"),Rm=e=>{Ut&&typeof Ut.cleanupBuffer=="function"&&!Ut.cleanupBuffer(e)&&Tm(e)};function Za(e){return t=>{No(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Om=Rp("perf:start"),Pm=Rp("perf:end");function Rp(e){return(t,n,o)=>{No(e,t.appContext.app,t.uid,t,n,o)}}function Im(e,t,n){No("component:emit",e.appContext.app,e,t,n)}function Lm(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Ie;{const{emitsOptions:p,propsOptions:[f]}=e;if(p)if(!(t in p))(!f||!(Xn(t)in f))&&I(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xn(t)}" prop.`);else{const d=p[t];ue(d)&&(d(...n)||I(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const l=t.startsWith("update:"),a=l&&t.slice(7);if(a&&a in o){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=o[p]||Ie;d&&(r=n.map(m=>He(m)?m.trim():m)),f&&(r=n.map(Ml))}Im(e,t,r);{const p=t.toLowerCase();p!==t&&o[Xn(p)]&&I(`Event "${p}" is emitted in component ${Qr(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${pn(t)}" instead of "${t}".`)}let i,c=o[i=Xn(t)]||o[i=Xn(Kt(t))];!c&&l&&(c=o[i=Xn(pn(t))]),c&&Pt(c,e,6,r);const u=o[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Pt(u,e,6,r)}}function Op(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const l=e.emits;let a={},i=!1;if(!ue(e)){const c=u=>{const p=Op(u,t,!0);p&&(i=!0,Ne(a,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!i?(Te(e)&&o.set(e,null),null):(se(l)?l.forEach(c=>a[c]=null):Ne(a,l),Te(e)&&o.set(e,a),a)}function Ur(e,t){return!e||!Ho(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,pn(t))||_e(e,t))}let ze=null,Wr=null;function wr(e){const t=ze;return ze=e,Wr=e&&e.type.__scopeId||null,t}function Bm(e){Wr=e}function Mm(){Wr=null}function de(e,t=ze,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&oc(-1);const l=wr(t);let a;try{a=e(...r)}finally{wr(l),o._d&&oc(1)}return Tp(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let Ul=!1;function Cr(){Ul=!0}function ll(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:l,propsOptions:[a],slots:i,attrs:c,emit:u,render:p,renderCache:f,data:d,setupState:m,ctx:F,inheritAttrs:g}=e;let v,w;const b=wr(e);Ul=!1;try{if(n.shapeFlag&4){const R=r||o;v=jt(p.call(R,R,f,l,m,d,F)),w=c}else{const R=t;c===l&&Cr(),v=jt(R.length>1?R(l,{get attrs(){return Cr(),c},slots:i,emit:u}):R(l,null)),w=t.props?c:jm(c)}}catch(R){ao.length=0,qr(R,e,1),v=z(Ze)}let x=v,C;if(v.patchFlag>0&&v.patchFlag&2048&&([x,C]=Hm(v)),w&&g!==!1){const R=Object.keys(w),{shapeFlag:L}=x;if(R.length){if(L&7)a&&R.some(vr)&&(w=Nm(w,a)),x=Dt(x,w);else if(!Ul&&x.type!==Ze){const V=Object.keys(c),T=[],N=[];for(let Y=0,ae=V.length;Y<ae;Y++){const U=V[Y];Ho(U)?vr(U)||T.push(U[2].toLowerCase()+U.slice(3)):N.push(U)}N.length&&I(`Extraneous non-props attributes (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),T.length&&I(`Extraneous non-emits event listeners (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Ui(x)||I("Runtime directive used on component with non-element root node. The directives will not function as intended."),x=Dt(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(Ui(x)||I("Component inside <Transition> renders non-element root node that cannot be animated."),x.transition=n.transition),C?C(x):v=x,wr(b),v}const Hm=e=>{const t=e.children,n=e.dynamicChildren,o=Pp(t);if(!o)return[e,void 0];const r=t.indexOf(o),l=n?n.indexOf(o):-1,a=i=>{t[r]=i,n&&(l>-1?n[l]=i:i.patchFlag>0&&(e.dynamicChildren=[...n,i]))};return[jt(o),a]};function Pp(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(Zt(o)){if(o.type!==Ze||o.children==="v-if"){if(t)return;t=o}}else return}return t}const jm=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ho(n))&&((t||(t={}))[n]=e[n]);return t},Nm=(e,t)=>{const n={};for(const o in e)(!vr(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n},Ui=e=>e.shapeFlag&7||e.type===Ze;function Dm(e,t,n){const{props:o,children:r,component:l}=e,{props:a,children:i,patchFlag:c}=t,u=l.emitsOptions;if((r||i)&&$n||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Wi(o,a,u):!!a;if(c&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const d=p[f];if(a[d]!==o[d]&&!Ur(u,d))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Wi(o,a,u):!0:!!a;return!1}function Wi(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const l=o[r];if(t[l]!==e[l]&&!Ur(n,l))return!0}return!1}function Vm({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ip=e=>e.__isSuspense;function Jm(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):kp(e)}function wt(e,t){if(!De)I("provide() can only be used inside setup().");else{let n=De.provides;const o=De.parent&&De.parent.provides;o===n&&(n=De.provides=Object.create(o)),n[e]=t}}function Z(e,t,n=!1){const o=De||ze;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ue(t)?t.call(o.proxy):t;I(`injection "${String(e)}" not found.`)}else I("inject() can only be used inside setup() or functional components.")}function fs(e,t){return Ga(e,null,t)}const er={};function ye(e,t,n){return ue(t)||I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ga(e,t,n)}function Ga(e,t,{immediate:n,deep:o,flush:r,onTrack:l,onTrigger:a}=Ie){t||(n!==void 0&&I('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&I('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=C=>{I("Invalid watch source: ",C,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Da()===(De==null?void 0:De.scope)?De:null;let u,p=!1,f=!1;if(Ae(e)?(u=()=>e.value,p=xr(e)):ns(e)?(u=()=>e,o=!0):se(e)?(f=!0,p=e.some(C=>ns(C)||xr(C)),u=()=>e.map(C=>{if(Ae(C))return C.value;if(ns(C))return Zn(C);if(ue(C))return cn(C,c,2);i(C)})):ue(e)?t?u=()=>cn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),Pt(e,c,3,[m])}:(u=mt,i(e)),t&&o){const C=u;u=()=>Zn(C())}let d,m=C=>{d=b.onStop=()=>{cn(C,c,4)}},F;if(ko)if(m=mt,t?n&&Pt(t,c,3,[u(),f?[]:void 0,m]):u(),r==="sync"){const C=KF();F=C.__watcherHandles||(C.__watcherHandles=[])}else return mt;let g=f?new Array(e.length).fill(er):er;const v=()=>{if(b.active)if(t){const C=b.run();(o||p||(f?C.some((R,L)=>vo(R,g[L])):vo(C,g)))&&(d&&d(),Pt(t,c,3,[C,g===er?void 0:f&&g[0]===er?[]:g,m]),g=C)}else b.run()};v.allowRecurse=!!t;let w;r==="sync"?w=v:r==="post"?w=()=>Ge(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),w=()=>Xr(v));const b=new Ja(u,w);b.onTrack=l,b.onTrigger=a,t?n?v():g=b.run():r==="post"?Ge(b.run.bind(b),c&&c.suspense):b.run();const x=()=>{b.stop(),c&&c.scope&&Ba(c.scope.effects,b)};return F&&F.push(x),x}function qm(e,t,n){const o=this.proxy,r=He(e)?e.includes(".")?Lp(o,e):()=>o[e]:e.bind(o,o);let l;ue(t)?l=t:(l=t.handler,n=t);const a=De;Ls(this);const i=Ga(r,l.bind(o),n);return a?Ls(a):rs(),i}function Lp(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Zn(e,t){if(!Te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))Zn(e.value,t);else if(se(e))for(let n=0;n<e.length;n++)Zn(e[n],t);else if(ep(e)||es(e))e.forEach(n=>{Zn(n,t)});else if(np(e))for(const n in e)Zn(e[n],t);return e}function Bp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ds(()=>{e.isMounted=!0}),Vo(()=>{e.isUnmounting=!0}),e}const At=[Function,Array],Xm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:At,onEnter:At,onAfterEnter:At,onEnterCancelled:At,onBeforeLeave:At,onLeave:At,onAfterLeave:At,onLeaveCancelled:At,onBeforeAppear:At,onAppear:At,onAfterAppear:At,onAppearCancelled:At},setup(e,{slots:t}){const n=$t(),o=Bp();let r;return()=>{const l=t.default&&Qa(t.default(),!0);if(!l||!l.length)return;let a=l[0];if(l.length>1){let g=!1;for(const v of l)if(v.type!==Ze){if(g){I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=v,g=!0}}const i=he(e),{mode:c}=i;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&I(`invalid <transition> mode: ${c}`),o.isLeaving)return al(a);const u=zi(a);if(!u)return al(a);const p=wo(u,i,o,n);Is(u,p);const f=n.subTree,d=f&&zi(f);let m=!1;const{getTransitionKey:F}=u.type;if(F){const g=F();r===void 0?r=g:g!==r&&(r=g,m=!0)}if(d&&d.type!==Ze&&(!kn(u,d)||m)){const g=wo(d,i,o,n);if(Is(d,g),c==="out-in")return o.isLeaving=!0,g.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},al(a);c==="in-out"&&u.type!==Ze&&(g.delayLeave=(v,w,b)=>{const x=Mp(o,d);x[String(d.key)]=d,v._leaveCb=()=>{w(),v._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=b})}return a}}},Um=Xm;function Mp(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function wo(e,t,n,o){const{appear:r,mode:l,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:F,onBeforeAppear:g,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=t,x=String(e.key),C=Mp(n,e),R=(T,N)=>{T&&Pt(T,o,9,N)},L=(T,N)=>{const Y=N[1];R(T,N),se(T)?T.every(ae=>ae.length<=1)&&Y():T.length<=1&&Y()},V={mode:l,persisted:a,beforeEnter(T){let N=i;if(!n.isMounted)if(r)N=g||i;else return;T._leaveCb&&T._leaveCb(!0);const Y=C[x];Y&&kn(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),R(N,[T])},enter(T){let N=c,Y=u,ae=p;if(!n.isMounted)if(r)N=v||c,Y=w||u,ae=b||p;else return;let U=!1;const ie=T._enterCb=Re=>{U||(U=!0,Re?R(ae,[T]):R(Y,[T]),V.delayedLeave&&V.delayedLeave(),T._enterCb=void 0)};N?L(N,[T,ie]):ie()},leave(T,N){const Y=String(e.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return N();R(f,[T]);let ae=!1;const U=T._leaveCb=ie=>{ae||(ae=!0,N(),ie?R(F,[T]):R(m,[T]),T._leaveCb=void 0,C[Y]===e&&delete C[Y])};C[Y]=e,d?L(d,[T,U]):U()},clone(T){return wo(T,t,n,o)}};return V}function al(e){if(Do(e))return e=Dt(e),e.children=null,e}function zi(e){return Do(e)?e.children?e.children[0]:void 0:e}function Is(e,t){e.shapeFlag&6&&e.component?Is(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qa(e,t=!1,n){let o=[],r=0;for(let l=0;l<e.length;l++){let a=e[l];const i=n==null?a.key:String(n)+String(a.key!=null?a.key:l);a.type===Se?(a.patchFlag&128&&r++,o=o.concat(Qa(a.children,t,i))):(t||a.type!==Ze)&&o.push(i!=null?Dt(a,{key:i}):a)}if(r>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function we(e){return ue(e)?{setup:e,name:e.name}:e}const As=e=>!!e.type.__asyncLoader,Do=e=>e.type.__isKeepAlive,Wm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=$t(),o=n.ctx;if(!o.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const r=new Map,l=new Set;let a=null;n.__v_cache=r;const i=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:f}}}=o,d=f("div");o.activate=(b,x,C,R,L)=>{const V=b.component;u(b,x,C,0,i),c(V.vnode,b,x,C,V,i,R,b.slotScopeIds,L),Ge(()=>{V.isDeactivated=!1,V.a&&wn(V.a);const T=b.props&&b.props.onVnodeMounted;T&&Tt(T,V.parent,b)},i),Xl(V)},o.deactivate=b=>{const x=b.component;u(b,d,null,1,i),Ge(()=>{x.da&&wn(x.da);const C=b.props&&b.props.onVnodeUnmounted;C&&Tt(C,x.parent,b),x.isDeactivated=!0},i),Xl(x)};function m(b){il(b),p(b,n,i,!0)}function F(b){r.forEach((x,C)=>{const R=So(x.type);R&&(!b||!b(R))&&g(C)})}function g(b){const x=r.get(b);!a||!kn(x,a)?m(x):a&&il(a),r.delete(b),l.delete(b)}ye(()=>[e.include,e.exclude],([b,x])=>{b&&F(C=>no(b,C)),x&&F(C=>!no(x,C))},{flush:"post",deep:!0});let v=null;const w=()=>{v!=null&&r.set(v,cl(n.subTree))};return ds(w),Kr(w),Vo(()=>{r.forEach(b=>{const{subTree:x,suspense:C}=n,R=cl(x);if(b.type===R.type&&b.key===R.key){il(R);const L=R.component.da;L&&Ge(L,C);return}m(b)})}),()=>{if(v=null,!t.default)return null;const b=t.default(),x=b[0];if(b.length>1)return I("KeepAlive should contain exactly one component child."),a=null,b;if(!Zt(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return a=null,x;let C=cl(x);const R=C.type,L=So(As(C)?C.type.__asyncResolved||{}:R),{include:V,exclude:T,max:N}=e;if(V&&(!L||!no(V,L))||T&&L&&no(T,L))return a=C,x;const Y=C.key==null?R:C.key,ae=r.get(Y);return C.el&&(C=Dt(C),x.shapeFlag&128&&(x.ssContent=C)),v=Y,ae?(C.el=ae.el,C.component=ae.component,C.transition&&Is(C,C.transition),C.shapeFlag|=512,l.delete(Y),l.add(Y)):(l.add(Y),N&&l.size>parseInt(N,10)&&g(l.values().next().value)),C.shapeFlag|=256,a=C,Ip(x.type)?x:C}}},Hp=Wm;function no(e,t){return se(e)?e.some(n=>no(n,t)):He(e)?e.split(",").includes(t):Eh(e)?e.test(t):!1}function jp(e,t){Dp(e,"a",t)}function Np(e,t){Dp(e,"da",t)}function Dp(e,t,n=De){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(zr(t,o,n),n){let r=n.parent;for(;r&&r.parent;)Do(r.parent.vnode)&&zm(o,t,n,r),r=r.parent}}function zm(e,t,n,o){const r=zr(t,e,o,!0);Yr(()=>{Ba(o[t],r)},n)}function il(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function cl(e){return e.shapeFlag&128?e.ssContent:e}function zr(e,t,n=De,o=!1){if(n){const r=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;us(),Ls(n);const i=Pt(t,n,e,a);return rs(),ps(),i});return o?r.unshift(l):r.push(l),l}else{const r=Xn(za[e].replace(/ hook$/,""));I(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const dn=e=>(t,n=De)=>(!ko||e==="sp")&&zr(e,(...o)=>t(...o),n),Km=dn("bm"),ds=dn("m"),Ym=dn("bu"),Kr=dn("u"),Vo=dn("bum"),Yr=dn("um"),Zm=dn("sp"),Gm=dn("rtg"),Qm=dn("rtc");function eF(e,t=De){zr("ec",e,t)}function Vp(e){$h(e)&&I("Do not use built-in directive ids as custom directive id: "+e)}function An(e,t){const n=ze;if(n===null)return I("withDirectives can only be used inside render functions."),e;const o=Gr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[a,i,c,u=Ie]=t[l];a&&(ue(a)&&(a={mounted:a,updated:a}),a.deep&&Zn(i),r.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return e}function jn(e,t,n,o){const r=e.dirs,l=t&&t.dirs;for(let a=0;a<r.length;a++){const i=r[a];l&&(i.oldValue=l[a].value);let c=i.dir[o];c&&(us(),Pt(c,n,8,[e.el,i,e,t]),ps())}}const Wl="components",tF="directives";function Bn(e,t){return Jp(Wl,e,!0,t)||e}const nF=Symbol();function kr(e){return Jp(tF,e)}function Jp(e,t,n=!0,o=!1){const r=ze||De;if(r){const l=r.type;if(e===Wl){const i=So(l,!1);if(i&&(i===t||i===Kt(t)||i===is(Kt(t))))return l}const a=Ki(r[e]||l[e],t)||Ki(r.appContext[e],t);if(!a&&o)return l;if(n&&!a){const i=e===Wl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";I(`Failed to resolve ${e.slice(0,-1)}: ${t}${i}`)}return a}else I(`resolve${is(e.slice(0,-1))} can only be used in render() or setup().`)}function Ki(e,t){return e&&(e[t]||e[Kt(t)]||e[is(Kt(t))])}function Hs(e,t,n,o){let r;const l=n&&n[o];if(se(e)||He(e)){r=new Array(e.length);for(let a=0,i=e.length;a<i;a++)r[a]=t(e[a],a,void 0,l&&l[a])}else if(typeof e=="number"){Number.isInteger(e)||I(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,l&&l[a])}else if(Te(e))if(e[Symbol.iterator])r=Array.from(e,(a,i)=>t(a,i,void 0,l&&l[i]));else{const a=Object.keys(e);r=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];r[i]=t(e[u],u,i,l&&l[i])}}else r=[];return n&&(n[o]=r),r}function gt(e,t,n={},o,r){if(ze.isCE||ze.parent&&As(ze.parent)&&ze.parent.isCE)return t!=="default"&&(n.name=t),z("slot",n,o&&o());let l=e[t];l&&l.length>1&&(I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),S();const a=l&&qp(l(n)),i=oe(Se,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),l&&l._c&&(l._d=!0),i}function qp(e){return e.some(t=>Zt(t)?!(t.type===Ze||t.type===Se&&!qp(t.children)):!0)?e:null}const zl=e=>e?of(e)?Gr(e)||e.proxy:zl(e.parent):null,os=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>Cs(e.props),$attrs:e=>Cs(e.attrs),$slots:e=>Cs(e.slots),$refs:e=>Cs(e.refs),$parent:e=>zl(e.parent),$root:e=>zl(e.root),$emit:e=>e.emit,$options:e=>ti(e),$forceUpdate:e=>e.f||(e.f=()=>Xr(e.update)),$nextTick:e=>e.n||(e.n=Qe.bind(e.proxy)),$watch:e=>qm.bind(e)}),ei=e=>e==="_"||e==="$",ul=(e,t)=>e!==Ie&&!e.__isScriptSetup&&_e(e,t),Xp={get({_:e},t){const{ctx:n,setupState:o,data:r,props:l,accessCache:a,type:i,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return l[t]}else{if(ul(o,t))return a[t]=1,o[t];if(r!==Ie&&_e(r,t))return a[t]=2,r[t];if((u=e.propsOptions[0])&&_e(u,t))return a[t]=3,l[t];if(n!==Ie&&_e(n,t))return a[t]=4,n[t];Kl&&(a[t]=0)}}const p=os[t];let f,d;if(p)return t==="$attrs"&&(yt(e,"get",t),Cr()),p(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(n!==Ie&&_e(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,_e(d,t))return d[t];ze&&(!He(t)||t.indexOf("__v")!==0)&&(r!==Ie&&ei(t[0])&&_e(r,t)?I(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===ze&&I(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:o,setupState:r,ctx:l}=e;return ul(r,t)?(r[t]=n,!0):r.__isScriptSetup&&_e(r,t)?(I(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Ie&&_e(o,t)?(o[t]=n,!0):_e(e.props,t)?(I(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(I(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:n}):l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:l}},a){let i;return!!n[a]||e!==Ie&&_e(e,a)||ul(t,a)||(i=l[0])&&_e(i,a)||_e(o,a)||_e(os,a)||_e(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Xp.ownKeys=e=>(I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function sF(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(os).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>os[n](e),set:mt})}),t}function oF(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:mt})})}function rF(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(o=>{if(!n.__isScriptSetup){if(ei(o[0])){I(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n[o],set:mt})}})}function lF(){const e=Object.create(null);return(t,n)=>{e[n]?I(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let Kl=!0;function aF(e){const t=ti(e),n=e.proxy,o=e.ctx;Kl=!1,t.beforeCreate&&Yi(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:a,watch:i,provide:c,inject:u,created:p,beforeMount:f,mounted:d,beforeUpdate:m,updated:F,activated:g,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:x,unmounted:C,render:R,renderTracked:L,renderTriggered:V,errorCaptured:T,serverPrefetch:N,expose:Y,inheritAttrs:ae,components:U,directives:ie,filters:Re}=t,Je=lF();{const[W]=e.propsOptions;if(W)for(const ne in W)Je("Props",ne)}if(u&&iF(u,o,Je,e.appContext.config.unwrapInjectedRef),a)for(const W in a){const ne=a[W];ue(ne)?(Object.defineProperty(o,W,{value:ne.bind(n),configurable:!0,enumerable:!0,writable:!0}),Je("Methods",W)):I(`Method "${W}" has type "${typeof ne}" in the component definition. Did you reference the function correctly?`)}if(r){ue(r)||I("The data option must be a function. Plain object usage is no longer supported.");const W=r.call(n,n);if(Ha(W)&&I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Te(W))I("data() should return an object.");else{e.data=je(W);for(const ne in W)Je("Data",ne),ei(ne[0])||Object.defineProperty(o,ne,{configurable:!0,enumerable:!0,get:()=>W[ne],set:mt})}}if(Kl=!0,l)for(const W in l){const ne=l[W],ge=ue(ne)?ne.bind(n,n):ue(ne.get)?ne.get.bind(n,n):mt;ge===mt&&I(`Computed property "${W}" has no getter.`);const Oe=!ue(ne)&&ue(ne.set)?ne.set.bind(n):()=>{I(`Write operation failed: computed property "${W}" is readonly.`)},vt=A({get:ge,set:Oe});Object.defineProperty(o,W,{enumerable:!0,configurable:!0,get:()=>vt.value,set:nt=>vt.value=nt}),Je("Computed",W)}if(i)for(const W in i)Up(i[W],o,n,W);if(c){const W=ue(c)?c.call(n):c;Reflect.ownKeys(W).forEach(ne=>{wt(ne,W[ne])})}p&&Yi(p,e,"c");function Be(W,ne){se(ne)?ne.forEach(ge=>W(ge.bind(n))):ne&&W(ne.bind(n))}if(Be(Km,f),Be(ds,d),Be(Ym,m),Be(Kr,F),Be(jp,g),Be(Np,v),Be(eF,T),Be(Qm,L),Be(Gm,V),Be(Vo,b),Be(Yr,C),Be(Zm,N),se(Y))if(Y.length){const W=e.exposed||(e.exposed={});Y.forEach(ne=>{Object.defineProperty(W,ne,{get:()=>n[ne],set:ge=>n[ne]=ge})})}else e.exposed||(e.exposed={});R&&e.render===mt&&(e.render=R),ae!=null&&(e.inheritAttrs=ae),U&&(e.components=U),ie&&(e.directives=ie)}function iF(e,t,n=mt,o=!1){se(e)&&(e=Yl(e));for(const r in e){const l=e[r];let a;Te(l)?"default"in l?a=Z(l.from||r,l.default,!0):a=Z(l.from||r):a=Z(l),Ae(a)?o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):(I(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[r]=a):t[r]=a,n("Inject",r)}}function Yi(e,t,n){Pt(se(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Up(e,t,n,o){const r=o.includes(".")?Lp(n,o):()=>n[o];if(He(e)){const l=t[e];ue(l)?ye(r,l):I(`Invalid watch handler specified by key "${e}"`,l)}else if(ue(e))ye(r,e.bind(n));else if(Te(e))if(se(e))e.forEach(l=>Up(l,t,n,o));else{const l=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(l)?ye(r,l,e):I(`Invalid watch handler specified by key "${e.handler}"`,l)}else I(`Invalid watch option: "${o}"`,e)}function ti(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,i=l.get(t);let c;return i?c=i:!r.length&&!n&&!o?c=t:(c={},r.length&&r.forEach(u=>Sr(c,u,a,!0)),Sr(c,t,a)),Te(t)&&l.set(t,c),c}function Sr(e,t,n,o=!1){const{mixins:r,extends:l}=t;l&&Sr(e,l,n,!0),r&&r.forEach(a=>Sr(e,a,n,!0));for(const a in t)if(o&&a==="expose")I('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=cF[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const cF={data:Zi,props:Un,emits:Un,methods:Un,computed:Un,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Un,directives:Un,watch:pF,provide:Zi,inject:uF};function Zi(e,t){return t?e?function(){return Ne(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function uF(e,t){return Un(Yl(e),Yl(t))}function Yl(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function it(e,t){return e?[...new Set([].concat(e,t))]:t}function Un(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function pF(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const o in t)n[o]=it(e[o],t[o]);return n}function fF(e,t,n,o=!1){const r={},l={};_r(l,Zr,1),e.propsDefaults=Object.create(null),Wp(e,t,r,l);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);Kp(t||{},r,e),n?e.props=o?r:am(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function dF(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function hF(e,t,n,o){const{props:r,attrs:l,vnode:{patchFlag:a}}=e,i=he(r),[c]=e.propsOptions;let u=!1;if(!dF(e)&&(o||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let d=p[f];if(Ur(e.emitsOptions,d))continue;const m=t[d];if(c)if(_e(l,d))m!==l[d]&&(l[d]=m,u=!0);else{const F=Kt(d);r[F]=Zl(c,i,F,m,e,!1)}else m!==l[d]&&(l[d]=m,u=!0)}}}else{Wp(e,t,r,l)&&(u=!0);let p;for(const f in i)(!t||!_e(t,f)&&((p=pn(f))===f||!_e(t,p)))&&(c?n&&(n[f]!==void 0||n[p]!==void 0)&&(r[f]=Zl(c,i,f,void 0,e,!0)):delete r[f]);if(l!==i)for(const f in l)(!t||!_e(t,f))&&(delete l[f],u=!0)}u&&fn(e,"set","$attrs"),Kp(t||{},r,e)}function Wp(e,t,n,o){const[r,l]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(ir(c))continue;const u=t[c];let p;r&&_e(r,p=Kt(c))?!l||!l.includes(p)?n[p]=u:(i||(i={}))[p]=u:Ur(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(l){const c=he(n),u=i||Ie;for(let p=0;p<l.length;p++){const f=l[p];n[f]=Zl(r,c,f,u[f],e,!_e(u,f))}}return a}function Zl(e,t,n,o,r,l){const a=e[n];if(a!=null){const i=_e(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:u}=r;n in u?o=u[n]:(Ls(r),o=u[n]=c.call(null,t),rs())}else o=c}a[0]&&(l&&!i?o=!1:a[1]&&(o===""||o===pn(n))&&(o=!0))}return o}function zp(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const l=e.props,a={},i=[];let c=!1;if(!ue(e)){const p=f=>{c=!0;const[d,m]=zp(f,t,!0);Ne(a,d),m&&i.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!c)return Te(e)&&o.set(e,Es),Es;if(se(l))for(let p=0;p<l.length;p++){He(l[p])||I("props must be strings when using array syntax.",l[p]);const f=Kt(l[p]);Gi(f)&&(a[f]=Ie)}else if(l){Te(l)||I("invalid props options",l);for(const p in l){const f=Kt(p);if(Gi(f)){const d=l[p],m=a[f]=se(d)||ue(d)?{type:d}:Object.assign({},d);if(m){const F=ec(Boolean,m.type),g=ec(String,m.type);m[0]=F>-1,m[1]=g<0||F<g,(F>-1||_e(m,"default"))&&i.push(f)}}}}const u=[a,i];return Te(e)&&o.set(e,u),u}function Gi(e){return e[0]!=="$"?!0:(I(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Gl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Qi(e,t){return Gl(e)===Gl(t)}function ec(e,t){return se(t)?t.findIndex(n=>Qi(n,e)):ue(t)&&Qi(t,e)?0:-1}function Kp(e,t,n){const o=he(t),r=n.propsOptions[0];for(const l in r){let a=r[l];a!=null&&mF(l,o[l],a,!_e(e,l)&&!_e(e,pn(l)))}}function mF(e,t,n,o){const{type:r,required:l,validator:a}=n;if(l&&o){I('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(r!=null&&r!==!0){let i=!1;const c=se(r)?r:[r],u=[];for(let p=0;p<c.length&&!i;p++){const{valid:f,expectedType:d}=yF(t,c[p]);u.push(d||""),i=f}if(!i){I(gF(e,t,u));return}}a&&!a(t)&&I('Invalid prop: custom validator check failed for prop "'+e+'".')}}const FF=Hn("String,Number,Boolean,Function,Symbol,BigInt");function yF(e,t){let n;const o=Gl(t);if(FF(o)){const r=typeof e;n=r===o.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else o==="Object"?n=Te(e):o==="Array"?n=se(e):o==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:o}}function gF(e,t,n){let o=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(is).join(" | ")}`;const r=n[0],l=ja(t),a=tc(t,r),i=tc(t,l);return n.length===1&&nc(r)&&!vF(r,l)&&(o+=` with value ${a}`),o+=`, got ${l} `,nc(l)&&(o+=`with value ${i}.`),o}function tc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function nc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function vF(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Yp=e=>e[0]==="_"||e==="$stable",ni=e=>se(e)?e.map(jt):[jt(e)],_F=(e,t,n)=>{if(t._n)return t;const o=de((...r)=>(De&&I(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),ni(t(...r))),n);return o._c=!1,o},Zp=(e,t,n)=>{const o=e._ctx;for(const r in e){if(Yp(r))continue;const l=e[r];if(ue(l))t[r]=_F(r,l,o);else if(l!=null){I(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const a=ni(l);t[r]=()=>a}}},Gp=(e,t)=>{Do(e.vnode)||I("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=ni(t);e.slots.default=()=>n},bF=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),_r(t,"_",n)):Zp(t,e.slots={})}else e.slots={},t&&Gp(e,t);_r(e.slots,Zr,1)},xF=(e,t,n)=>{const{vnode:o,slots:r}=e;let l=!0,a=Ie;if(o.shapeFlag&32){const i=t._;i?$n?Ne(r,t):n&&i===1?l=!1:(Ne(r,t),!n&&i===1&&delete r._):(l=!t.$stable,Zp(t,r)),a=t}else t&&(Gp(e,t),a={default:1});if(l)for(const i in r)!Yp(i)&&!(i in a)&&delete r[i]};function Qp(){return{app:null,config:{isNativeTag:Qu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wF=0;function CF(e,t){return function(o,r=null){ue(o)||(o=Object.assign({},o)),r!=null&&!Te(r)&&(I("root props passed to app.mount() must be an object."),r=null);const l=Qp(),a=new Set;let i=!1;const c=l.app={_uid:wF++,_component:o,_props:r,_container:null,_context:l,_instance:null,version:$r,get config(){return l.config},set config(u){I("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return a.has(u)?I("Plugin has already been applied to target app."):u&&ue(u.install)?(a.add(u),u.install(c,...p)):ue(u)?(a.add(u),u(c,...p)):I('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return l.mixins.includes(u)?I("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):l.mixins.push(u),c},component(u,p){return ta(u,l.config),p?(l.components[u]&&I(`Component "${u}" has already been registered in target app.`),l.components[u]=p,c):l.components[u]},directive(u,p){return Vp(u),p?(l.directives[u]&&I(`Directive "${u}" has already been registered in target app.`),l.directives[u]=p,c):l.directives[u]},mount(u,p,f){if(i)I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=z(o,r);return d.appContext=l,l.reload=()=>{e(Dt(d),u,f)},p&&t?t(d,u):e(d,u,f),i=!0,c._container=u,u.__vue_app__=c,c._instance=d.component,$m(c,$r),Gr(d.component)||d.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,Am(c),delete c._container.__vue_app__):I("Cannot unmount an app that is not mounted.")},provide(u,p){return u in l.provides&&I(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),l.provides[u]=p,c}};return c}}function Ql(e,t,n,o,r=!1){if(se(e)){e.forEach((d,m)=>Ql(d,t&&(se(t)?t[m]:t),n,o,r));return}if(As(o)&&!r)return;const l=o.shapeFlag&4?Gr(o.component)||o.component.proxy:o.el,a=r?null:l,{i,r:c}=e;if(!i){I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,p=i.refs===Ie?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(He(u)?(p[u]=null,_e(f,u)&&(f[u]=null)):Ae(u)&&(u.value=null)),ue(c))cn(c,i,12,[a,p]);else{const d=He(c),m=Ae(c);if(d||m){const F=()=>{if(e.f){const g=d?_e(f,c)?f[c]:p[c]:c.value;r?se(g)&&Ba(g,l):se(g)?g.includes(l)||g.push(l):d?(p[c]=[l],_e(f,c)&&(f[c]=p[c])):(c.value=[l],e.k&&(p[e.k]=c.value))}else d?(p[c]=a,_e(f,c)&&(f[c]=a)):m?(c.value=a,e.k&&(p[e.k]=a)):I("Invalid template ref type:",c,`(${typeof c})`)};a?(F.id=-1,Ge(F,n)):F()}else I("Invalid template ref type:",c,`(${typeof c})`)}}let Vs,Cn;function nn(e,t){e.appContext.config.performance&&Er()&&Cn.mark(`vue-${t}-${e.uid}`),Om(e,t,Er()?Cn.now():Date.now())}function sn(e,t){if(e.appContext.config.performance&&Er()){const n=`vue-${t}-${e.uid}`,o=n+":end";Cn.mark(o),Cn.measure(`<${Qr(e,e.type)}> ${t}`,n,o),Cn.clearMarks(n),Cn.clearMarks(o)}Pm(e,t,Er()?Cn.now():Date.now())}function Er(){return Vs!==void 0||(typeof window<"u"&&window.performance?(Vs=!0,Cn=window.performance):Vs=!1),Vs}function kF(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Ge=Jm;function SF(e){return EF(e)}function EF(e,t){kF();const n=sp();n.__VUE__=!0,Ap(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:o,remove:r,patchProp:l,createElement:a,createText:i,createComment:c,setText:u,setElementText:p,parentNode:f,nextSibling:d,setScopeId:m=mt,insertStaticContent:F}=e,g=(y,_,E,P=null,O=null,j=null,q=!1,H=null,D=$n?!1:!!_.dynamicChildren)=>{if(y===_)return;y&&!kn(y,_)&&(P=G(y),dt(y,O,j,!0),y=null),_.patchFlag===-2&&(D=!1,_.dynamicChildren=null);const{type:B,ref:ee,shapeFlag:Q}=_;switch(B){case Jo:v(y,_,E,P);break;case Ze:w(y,_,E,P);break;case pr:y==null?b(_,E,P,q):x(y,_,E,q);break;case Se:ie(y,_,E,P,O,j,q,H,D);break;default:Q&1?L(y,_,E,P,O,j,q,H,D):Q&6?Re(y,_,E,P,O,j,q,H,D):Q&64||Q&128?B.process(y,_,E,P,O,j,q,H,D,Ce):I("Invalid VNode type:",B,`(${typeof B})`)}ee!=null&&O&&Ql(ee,y&&y.ref,j,_||y,!_)},v=(y,_,E,P)=>{if(y==null)o(_.el=i(_.children),E,P);else{const O=_.el=y.el;_.children!==y.children&&u(O,_.children)}},w=(y,_,E,P)=>{y==null?o(_.el=c(_.children||""),E,P):_.el=y.el},b=(y,_,E,P)=>{[y.el,y.anchor]=F(y.children,_,E,P,y.el,y.anchor)},x=(y,_,E,P)=>{if(_.children!==y.children){const O=d(y.anchor);R(y),[_.el,_.anchor]=F(_.children,E,O,P)}else _.el=y.el,_.anchor=y.anchor},C=({el:y,anchor:_},E,P)=>{let O;for(;y&&y!==_;)O=d(y),o(y,E,P),y=O;o(_,E,P)},R=({el:y,anchor:_})=>{let E;for(;y&&y!==_;)E=d(y),r(y),y=E;r(_)},L=(y,_,E,P,O,j,q,H,D)=>{q=q||_.type==="svg",y==null?V(_,E,P,O,j,q,H,D):Y(y,_,O,j,q,H,D)},V=(y,_,E,P,O,j,q,H)=>{let D,B;const{type:ee,props:Q,shapeFlag:te,transition:fe,dirs:xe}=y;if(D=y.el=a(y.type,j,Q&&Q.is,Q),te&8?p(D,y.children):te&16&&N(y.children,D,null,P,O,j&&ee!=="foreignObject",q,H),xe&&jn(y,null,P,"created"),T(D,y,y.scopeId,q,P),Q){for(const Pe in Q)Pe!=="value"&&!ir(Pe)&&l(D,Pe,null,Q[Pe],j,y.children,P,O,J);"value"in Q&&l(D,"value",null,Q.value),(B=Q.onVnodeBeforeMount)&&Tt(B,P,y)}Object.defineProperty(D,"__vnode",{value:y,enumerable:!1}),Object.defineProperty(D,"__vueParentComponent",{value:P,enumerable:!1}),xe&&jn(y,null,P,"beforeMount");const Me=(!O||O&&!O.pendingBranch)&&fe&&!fe.persisted;Me&&fe.beforeEnter(D),o(D,_,E),((B=Q&&Q.onVnodeMounted)||Me||xe)&&Ge(()=>{B&&Tt(B,P,y),Me&&fe.enter(D),xe&&jn(y,null,P,"mounted")},O)},T=(y,_,E,P,O)=>{if(E&&m(y,E),P)for(let j=0;j<P.length;j++)m(y,P[j]);if(O){let j=O.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=Pp(j.children)||j),_===j){const q=O.vnode;T(y,q,q.scopeId,q.slotScopeIds,O.parent)}}},N=(y,_,E,P,O,j,q,H,D=0)=>{for(let B=D;B<y.length;B++){const ee=y[B]=H?bn(y[B]):jt(y[B]);g(null,ee,_,E,P,O,j,q,H)}},Y=(y,_,E,P,O,j,q)=>{const H=_.el=y.el;let{patchFlag:D,dynamicChildren:B,dirs:ee}=_;D|=y.patchFlag&16;const Q=y.props||Ie,te=_.props||Ie;let fe;E&&Nn(E,!1),(fe=te.onVnodeBeforeUpdate)&&Tt(fe,E,_,y),ee&&jn(_,y,E,"beforeUpdate"),E&&Nn(E,!0),$n&&(D=0,q=!1,B=null);const xe=O&&_.type!=="foreignObject";if(B?(ae(y.dynamicChildren,B,H,E,P,xe,j),E&&E.type.__hmrId&&lo(y,_)):q||ge(y,_,H,null,E,P,xe,j,!1),D>0){if(D&16)U(H,_,Q,te,E,P,O);else if(D&2&&Q.class!==te.class&&l(H,"class",null,te.class,O),D&4&&l(H,"style",Q.style,te.style,O),D&8){const Me=_.dynamicProps;for(let Pe=0;Pe<Me.length;Pe++){const qe=Me[Pe],Bt=Q[qe],Fs=te[qe];(Fs!==Bt||qe==="value")&&l(H,qe,Bt,Fs,O,y.children,E,P,J)}}D&1&&y.children!==_.children&&p(H,_.children)}else!q&&B==null&&U(H,_,Q,te,E,P,O);((fe=te.onVnodeUpdated)||ee)&&Ge(()=>{fe&&Tt(fe,E,_,y),ee&&jn(_,y,E,"updated")},P)},ae=(y,_,E,P,O,j,q)=>{for(let H=0;H<_.length;H++){const D=y[H],B=_[H],ee=D.el&&(D.type===Se||!kn(D,B)||D.shapeFlag&70)?f(D.el):E;g(D,B,ee,null,P,O,j,q,!0)}},U=(y,_,E,P,O,j,q)=>{if(E!==P){if(E!==Ie)for(const H in E)!ir(H)&&!(H in P)&&l(y,H,E[H],null,q,_.children,O,j,J);for(const H in P){if(ir(H))continue;const D=P[H],B=E[H];D!==B&&H!=="value"&&l(y,H,B,D,q,_.children,O,j,J)}"value"in P&&l(y,"value",E.value,P.value)}},ie=(y,_,E,P,O,j,q,H,D)=>{const B=_.el=y?y.el:i(""),ee=_.anchor=y?y.anchor:i("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:fe}=_;($n||Q&2048)&&(Q=0,D=!1,te=null),fe&&(H=H?H.concat(fe):fe),y==null?(o(B,E,P),o(ee,E,P),N(_.children,E,ee,O,j,q,H,D)):Q>0&&Q&64&&te&&y.dynamicChildren?(ae(y.dynamicChildren,te,E,O,j,q,H),O&&O.type.__hmrId?lo(y,_):(_.key!=null||O&&_===O.subTree)&&lo(y,_,!0)):ge(y,_,E,ee,O,j,q,H,D)},Re=(y,_,E,P,O,j,q,H,D)=>{_.slotScopeIds=H,y==null?_.shapeFlag&512?O.ctx.activate(_,E,P,q,D):Je(_,E,P,O,j,q,D):Be(y,_,D)},Je=(y,_,E,P,O,j,q)=>{const H=y.component=HF(y,P,O);if(H.type.__hmrId&&Cm(H),cr(y),nn(H,"mount"),Do(y)&&(H.ctx.renderer=Ce),nn(H,"init"),NF(H),sn(H,"init"),H.asyncDep){if(O&&O.registerDep(H,W),!y.el){const D=H.subTree=z(Ze);w(null,D,_,E)}return}W(H,y,_,E,O,j,q),ur(),sn(H,"mount")},Be=(y,_,E)=>{const P=_.component=y.component;if(Dm(y,_,E))if(P.asyncDep&&!P.asyncResolved){cr(_),ne(P,_,E),ur();return}else P.next=_,xm(P.update),P.update();else _.el=y.el,P.vnode=_},W=(y,_,E,P,O,j,q)=>{const H=()=>{if(y.isMounted){let{next:ee,bu:Q,u:te,parent:fe,vnode:xe}=y,Me=ee,Pe;cr(ee||y.vnode),Nn(y,!1),ee?(ee.el=xe.el,ne(y,ee,q)):ee=xe,Q&&wn(Q),(Pe=ee.props&&ee.props.onVnodeBeforeUpdate)&&Tt(Pe,fe,ee,xe),Nn(y,!0),nn(y,"render");const qe=ll(y);sn(y,"render");const Bt=y.subTree;y.subTree=qe,nn(y,"patch"),g(Bt,qe,f(Bt.el),G(Bt),y,O,j),sn(y,"patch"),ee.el=qe.el,Me===null&&Vm(y,qe.el),te&&Ge(te,O),(Pe=ee.props&&ee.props.onVnodeUpdated)&&Ge(()=>Tt(Pe,fe,ee,xe),O),Tp(y),ur()}else{let ee;const{el:Q,props:te}=_,{bm:fe,m:xe,parent:Me}=y,Pe=As(_);if(Nn(y,!1),fe&&wn(fe),!Pe&&(ee=te&&te.onVnodeBeforeMount)&&Tt(ee,Me,_),Nn(y,!0),Q&&ce){const qe=()=>{nn(y,"render"),y.subTree=ll(y),sn(y,"render"),nn(y,"hydrate"),ce(Q,y.subTree,y,O,null),sn(y,"hydrate")};Pe?_.type.__asyncLoader().then(()=>!y.isUnmounted&&qe()):qe()}else{nn(y,"render");const qe=y.subTree=ll(y);sn(y,"render"),nn(y,"patch"),g(null,qe,E,P,y,O,j),sn(y,"patch"),_.el=qe.el}if(xe&&Ge(xe,O),!Pe&&(ee=te&&te.onVnodeMounted)){const qe=_;Ge(()=>Tt(ee,Me,qe),O)}(_.shapeFlag&256||Me&&As(Me.vnode)&&Me.vnode.shapeFlag&256)&&y.a&&Ge(y.a,O),y.isMounted=!0,Xl(y),_=E=P=null}},D=y.effect=new Ja(H,()=>Xr(B),y.scope),B=y.update=()=>D.run();B.id=y.uid,Nn(y,!0),D.onTrack=y.rtc?ee=>wn(y.rtc,ee):void 0,D.onTrigger=y.rtg?ee=>wn(y.rtg,ee):void 0,B.ownerInstance=y,B()},ne=(y,_,E)=>{_.component=y;const P=y.vnode.props;y.vnode=_,y.next=null,hF(y,_.props,P,E),xF(y,_.children,E),us(),qi(),ps()},ge=(y,_,E,P,O,j,q,H,D=!1)=>{const B=y&&y.children,ee=y?y.shapeFlag:0,Q=_.children,{patchFlag:te,shapeFlag:fe}=_;if(te>0){if(te&128){vt(B,Q,E,P,O,j,q,H,D);return}else if(te&256){Oe(B,Q,E,P,O,j,q,H,D);return}}fe&8?(ee&16&&J(B,O,j),Q!==B&&p(E,Q)):ee&16?fe&16?vt(B,Q,E,P,O,j,q,H,D):J(B,O,j,!0):(ee&8&&p(E,""),fe&16&&N(Q,E,P,O,j,q,H,D))},Oe=(y,_,E,P,O,j,q,H,D)=>{y=y||Es,_=_||Es;const B=y.length,ee=_.length,Q=Math.min(B,ee);let te;for(te=0;te<Q;te++){const fe=_[te]=D?bn(_[te]):jt(_[te]);g(y[te],fe,E,null,O,j,q,H,D)}B>ee?J(y,O,j,!0,!1,Q):N(_,E,P,O,j,q,H,D,Q)},vt=(y,_,E,P,O,j,q,H,D)=>{let B=0;const ee=_.length;let Q=y.length-1,te=ee-1;for(;B<=Q&&B<=te;){const fe=y[B],xe=_[B]=D?bn(_[B]):jt(_[B]);if(kn(fe,xe))g(fe,xe,E,null,O,j,q,H,D);else break;B++}for(;B<=Q&&B<=te;){const fe=y[Q],xe=_[te]=D?bn(_[te]):jt(_[te]);if(kn(fe,xe))g(fe,xe,E,null,O,j,q,H,D);else break;Q--,te--}if(B>Q){if(B<=te){const fe=te+1,xe=fe<ee?_[fe].el:P;for(;B<=te;)g(null,_[B]=D?bn(_[B]):jt(_[B]),E,xe,O,j,q,H,D),B++}}else if(B>te)for(;B<=Q;)dt(y[B],O,j,!0),B++;else{const fe=B,xe=B,Me=new Map;for(B=xe;B<=te;B++){const at=_[B]=D?bn(_[B]):jt(_[B]);at.key!=null&&(Me.has(at.key)&&I("Duplicate keys found during update:",JSON.stringify(at.key),"Make sure keys are unique."),Me.set(at.key,B))}let Pe,qe=0;const Bt=te-xe+1;let Fs=!1,Pi=0;const Ds=new Array(Bt);for(B=0;B<Bt;B++)Ds[B]=0;for(B=fe;B<=Q;B++){const at=y[B];if(qe>=Bt){dt(at,O,j,!0);continue}let Jt;if(at.key!=null)Jt=Me.get(at.key);else for(Pe=xe;Pe<=te;Pe++)if(Ds[Pe-xe]===0&&kn(at,_[Pe])){Jt=Pe;break}Jt===void 0?dt(at,O,j,!0):(Ds[Jt-xe]=B+1,Jt>=Pi?Pi=Jt:Fs=!0,g(at,_[Jt],E,null,O,j,q,H,D),qe++)}const Ii=Fs?$F(Ds):Es;for(Pe=Ii.length-1,B=Bt-1;B>=0;B--){const at=xe+B,Jt=_[at],Li=at+1<ee?_[at+1].el:P;Ds[B]===0?g(null,Jt,E,Li,O,j,q,H,D):Fs&&(Pe<0||B!==Ii[Pe]?nt(Jt,E,Li,2):Pe--)}}},nt=(y,_,E,P,O=null)=>{const{el:j,type:q,transition:H,children:D,shapeFlag:B}=y;if(B&6){nt(y.component.subTree,_,E,P);return}if(B&128){y.suspense.move(_,E,P);return}if(B&64){q.move(y,_,E,Ce);return}if(q===Se){o(j,_,E);for(let Q=0;Q<D.length;Q++)nt(D[Q],_,E,P);o(y.anchor,_,E);return}if(q===pr){C(y,_,E);return}if(P!==2&&B&1&&H)if(P===0)H.beforeEnter(j),o(j,_,E),Ge(()=>H.enter(j),O);else{const{leave:Q,delayLeave:te,afterLeave:fe}=H,xe=()=>o(j,_,E),Me=()=>{Q(j,()=>{xe(),fe&&fe()})};te?te(j,xe,Me):Me()}else o(j,_,E)},dt=(y,_,E,P=!1,O=!1)=>{const{type:j,props:q,ref:H,children:D,dynamicChildren:B,shapeFlag:ee,patchFlag:Q,dirs:te}=y;if(H!=null&&Ql(H,null,E,y,!0),ee&256){_.ctx.deactivate(y);return}const fe=ee&1&&te,xe=!As(y);let Me;if(xe&&(Me=q&&q.onVnodeBeforeUnmount)&&Tt(Me,_,y),ee&6)K(y.component,E,P);else{if(ee&128){y.suspense.unmount(E,P);return}fe&&jn(y,null,_,"beforeUnmount"),ee&64?y.type.remove(y,_,E,O,Ce,P):B&&(j!==Se||Q>0&&Q&64)?J(B,_,E,!1,!0):(j===Se&&Q&384||!O&&ee&16)&&J(D,_,E),P&&mn(y)}(xe&&(Me=q&&q.onVnodeUnmounted)||fe)&&Ge(()=>{Me&&Tt(Me,_,y),fe&&jn(y,null,_,"unmounted")},E)},mn=y=>{const{type:_,el:E,anchor:P,transition:O}=y;if(_===Se){y.patchFlag>0&&y.patchFlag&2048&&O&&!O.persisted?y.children.forEach(q=>{q.type===Ze?r(q.el):mn(q)}):$(E,P);return}if(_===pr){R(y);return}const j=()=>{r(E),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(y.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:H}=O,D=()=>q(E,j);H?H(y.el,j,D):D()}else j()},$=(y,_)=>{let E;for(;y!==_;)E=d(y),r(y),y=E;r(_)},K=(y,_,E)=>{y.type.__hmrId&&km(y);const{bum:P,scope:O,update:j,subTree:q,um:H}=y;P&&wn(P),O.stop(),j&&(j.active=!1,dt(q,y,_,E)),H&&Ge(H,_),Ge(()=>{y.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),Rm(y)},J=(y,_,E,P=!1,O=!1,j=0)=>{for(let q=j;q<y.length;q++)dt(y[q],_,E,P,O)},G=y=>y.shapeFlag&6?G(y.component.subTree):y.shapeFlag&128?y.suspense.next():d(y.anchor||y.el),ve=(y,_,E)=>{y==null?_._vnode&&dt(_._vnode,null,null,!0):g(_._vnode||null,y,_,null,null,null,E),qi(),Sp(),_._vnode=y},Ce={p:g,um:dt,m:nt,r:mn,mt:Je,mc:N,pc:ge,pbc:ae,n:G,o:e};let pe,ce;return t&&([pe,ce]=t(Ce)),{render:ve,hydrate:pe,createApp:CF(ve,pe)}}function Nn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function lo(e,t,n=!1){const o=e.children,r=t.children;if(se(o)&&se(r))for(let l=0;l<o.length;l++){const a=o[l];let i=r[l];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[l]=bn(r[l]),i.el=a.el),n||lo(a,i)),i.type===Jo&&(i.el=a.el),i.type===Ze&&!i.el&&(i.el=a.el)}}function $F(e){const t=e.slice(),n=[0];let o,r,l,a,i;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){t[o]=r,n.push(o);continue}for(l=0,a=n.length-1;l<a;)i=l+a>>1,e[n[i]]<u?l=i+1:a=i;u<e[n[l]]&&(l>0&&(t[o]=n[l-1]),n[l]=o)}}for(l=n.length,a=n[l-1];l-- >0;)n[l]=a,a=t[a];return n}const AF=e=>e.__isTeleport,Ts=e=>e&&(e.disabled||e.disabled===""),sc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ea=(e,t)=>{const n=e&&e.to;if(He(n))if(t){const o=t(n);return o||I(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return I("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Ts(e)&&I(`Invalid Teleport target: ${n}`),n},TF={__isTeleport:!0,process(e,t,n,o,r,l,a,i,c,u){const{mc:p,pc:f,pbc:d,o:{insert:m,querySelector:F,createText:g,createComment:v}}=u,w=Ts(t.props);let{shapeFlag:b,children:x,dynamicChildren:C}=t;if($n&&(c=!1,C=null),e==null){const R=t.el=v("teleport start"),L=t.anchor=v("teleport end");m(R,n,o),m(L,n,o);const V=t.target=ea(t.props,F),T=t.targetAnchor=g("");V?(m(T,V),a=a||sc(V)):w||I("Invalid Teleport target on mount:",V,`(${typeof V})`);const N=(Y,ae)=>{b&16&&p(x,Y,ae,r,l,a,i,c)};w?N(n,L):V&&N(V,T)}else{t.el=e.el;const R=t.anchor=e.anchor,L=t.target=e.target,V=t.targetAnchor=e.targetAnchor,T=Ts(e.props),N=T?n:L,Y=T?R:V;if(a=a||sc(L),C?(d(e.dynamicChildren,C,N,r,l,a,i),lo(e,t,!0)):c||f(e,t,N,Y,r,l,a,i,!1),w)T||tr(t,n,R,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ae=t.target=ea(t.props,F);ae?tr(t,ae,null,u,0):I("Invalid Teleport target on update:",L,`(${typeof L})`)}else T&&tr(t,L,V,u,1)}ef(t)},remove(e,t,n,o,{um:r,o:{remove:l}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:p,target:f,props:d}=e;if(f&&l(p),(a||!Ts(d))&&(l(u),i&16))for(let m=0;m<c.length;m++){const F=c[m];r(F,t,n,!0,!!F.dynamicChildren)}},move:tr,hydrate:RF};function tr(e,t,n,{o:{insert:o},m:r},l=2){l===0&&o(e.targetAnchor,t,n);const{el:a,anchor:i,shapeFlag:c,children:u,props:p}=e,f=l===2;if(f&&o(a,t,n),(!f||Ts(p))&&c&16)for(let d=0;d<u.length;d++)r(u[d],t,n,2);f&&o(i,t,n)}function RF(e,t,n,o,r,l,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const p=t.target=ea(t.props,c);if(p){const f=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Ts(t.props))t.anchor=u(a(e),t,i(e),n,o,r,l),t.targetAnchor=f;else{t.anchor=a(e);let d=f;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,p._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(f,t,p,n,o,r,l)}ef(t)}return t.anchor&&a(t.anchor)}const OF=TF;function ef(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Se=Symbol("Fragment"),Jo=Symbol("Text"),Ze=Symbol("Comment"),pr=Symbol("Static"),ao=[];let Nt=null;function S(e=!1){ao.push(Nt=e?null:[])}function PF(){ao.pop(),Nt=ao[ao.length-1]||null}let Co=1;function oc(e){Co+=e}function tf(e){return e.dynamicChildren=Co>0?Nt||Es:null,PF(),Co>0&&Nt&&Nt.push(e),e}function M(e,t,n,o,r,l){return tf(s(e,t,n,o,r,l,!0))}function oe(e,t,n,o,r){return tf(z(e,t,n,o,r,!0))}function Zt(e){return e?e.__v_isVNode===!0:!1}function kn(e,t){return t.shapeFlag&6&&bs.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const IF=(...e)=>LF(...e),Zr="__vInternal",nf=({key:e})=>e??null,fr=({ref:e,ref_key:t,ref_for:n})=>e!=null?He(e)||Ae(e)||ue(e)?{i:ze,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,o=0,r=null,l=e===Se?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nf(t),ref:t&&fr(t),scopeId:Wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ze};return i?(si(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),c.key!==c.key&&I("VNode created with invalid key (NaN). VNode type:",c.type),Co>0&&!a&&Nt&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Nt.push(c),c}const z=IF;function LF(e,t=null,n=null,o=0,r=null,l=!1){if((!e||e===nF)&&(e||I(`Invalid vnode type when creating vnode: ${e}.`),e=Ze),Zt(e)){const i=Dt(e,t,!0);return n&&si(i,n),Co>0&&!l&&Nt&&(i.shapeFlag&6?Nt[Nt.indexOf(e)]=i:Nt.push(i)),i.patchFlag|=-2,i}if(af(e)&&(e=e.__vccOpts),t){t=Ue(t);let{class:i,style:c}=t;i&&!He(i)&&(t.class=Le(i)),Te(c)&&(Vl(c)&&!se(c)&&(c=Ne({},c)),t.style=ot(c))}const a=He(e)?1:Ip(e)?128:AF(e)?64:Te(e)?4:ue(e)?2:0;return a&4&&Vl(e)&&(e=he(e),I("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,t,n,o,r,a,l,!0)}function Ue(e){return e?Vl(e)||Zr in e?Ne({},e):e:null}function Dt(e,t,n=!1){const{props:o,ref:r,patchFlag:l,children:a}=e,i=t?et(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&nf(i),ref:t&&t.ref?n&&r?se(r)?r.concat(fr(t)):[r,fr(t)]:fr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&se(a)?a.map(sf):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function sf(e){const t=Dt(e);return se(e.children)&&(t.children=e.children.map(sf)),t}function h(e=" ",t=0){return z(Jo,null,e,t)}function Fe(e="",t=!1){return t?(S(),oe(Ze,null,e)):z(Ze,null,e)}function jt(e){return e==null||typeof e=="boolean"?z(Ze):se(e)?z(Se,null,e.slice()):typeof e=="object"?bn(e):z(Jo,null,String(e))}function bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function si(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),si(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Zr in t)?t._ctx=ze:r===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),o&64?(n=16,t=[h(t)]):n=8);e.children=t,e.shapeFlag|=n}function et(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Le([t.class,o.class]));else if(r==="style")t.style=ot([t.style,o.style]);else if(Ho(r)){const l=t[r],a=o[r];a&&l!==a&&!(se(l)&&l.includes(a))&&(t[r]=l?[].concat(l,a):a)}else r!==""&&(t[r]=o[r])}return t}function Tt(e,t,n,o=null){Pt(e,t,7,[n,o])}const BF=Qp();let MF=0;function HF(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||BF,l={uid:MF++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zp(o,r),emitsOptions:Op(o,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:o.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=sF(l),l.root=t?t.root:l,l.emit=Lm.bind(null,l),e.ce&&e.ce(l),l}let De=null;const $t=()=>De||ze,Ls=e=>{De=e,e.scope.on()},rs=()=>{De&&De.scope.off(),De=null},jF=Hn("slot,component");function ta(e,t){const n=t.isNativeTag||Qu;(jF(e)||n(e))&&I("Do not use built-in or reserved HTML elements as component id: "+e)}function of(e){return e.vnode.shapeFlag&4}let ko=!1;function NF(e,t=!1){ko=t;const{props:n,children:o}=e.vnode,r=of(e);fF(e,n,r,t),bF(e,o);const l=r?DF(e,t):void 0;return ko=!1,l}function DF(e,t){var n;const o=e.type;{if(o.name&&ta(o.name,e.appContext.config),o.components){const l=Object.keys(o.components);for(let a=0;a<l.length;a++)ta(l[a],e.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let a=0;a<l.length;a++)Vp(l[a])}o.compilerOptions&&VF()&&I('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Jr(new Proxy(e.ctx,Xp)),oF(e);const{setup:r}=o;if(r){const l=e.setupContext=r.length>1?lf(e):null;Ls(e),us();const a=cn(r,e,0,[Cs(e.props),l]);if(ps(),rs(),Ha(a)){if(a.then(rs,rs),t)return a.then(i=>{rc(e,i,t)}).catch(i=>{qr(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(n=o.name)!==null&&n!==void 0?n:"Anonymous";I(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else rc(e,a,t)}else rf(e,t)}function rc(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Te(t)?(Zt(t)&&I("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=_p(t),rF(e)):t!==void 0&&I(`setup() should return an object. Received: ${t===null?"null":typeof t}`),rf(e,n)}let na;const VF=()=>!na;function rf(e,t,n){const o=e.type;if(!e.render){if(!t&&na&&!o.render){const r=o.template||ti(e).template;if(r){nn(e,"compile");const{isCustomElement:l,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,u=Ne(Ne({isCustomElement:l,delimiters:i},a),c);o.render=na(r,u),sn(e,"compile")}}e.render=o.render||mt}Ls(e),us(),aF(e),ps(),rs(),!o.render&&e.render===mt&&!t&&(o.template?I('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):I("Component is missing template or render function."))}function JF(e){return new Proxy(e.attrs,{get(t,n){return Cr(),yt(e,"get","$attrs"),t[n]},set(){return I("setupContext.attrs is readonly."),!1},deleteProperty(){return I("setupContext.attrs is readonly."),!1}})}function lf(e){const t=o=>{if(e.exposed&&I("expose() should be called only once per setup()."),o!=null){let r=typeof o;r==="object"&&(se(o)?r="array":Ae(o)&&(r="ref")),r!=="object"&&I(`expose() should be passed a plain object, received ${r}.`)}e.exposed=o||{}};let n;return Object.freeze({get attrs(){return n||(n=JF(e))},get slots(){return Cs(e.slots)},get emit(){return(o,...r)=>e.emit(o,...r)},expose:t})}function Gr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(_p(Jr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in os)return os[n](e)},has(t,n){return n in t||n in os}}))}const qF=/(?:^|[-_])(\w)/g,XF=e=>e.replace(qF,t=>t.toUpperCase()).replace(/[-_]/g,"");function So(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function Qr(e,t,n=!1){let o=So(t);if(!o&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(o=r[1])}if(!o&&e&&e.parent){const r=l=>{for(const a in l)if(l[a]===t)return a};o=r(e.components||e.parent.type.components)||r(e.appContext.components)}return o?XF(o):n?"App":"Anonymous"}function af(e){return ue(e)&&"__vccOpts"in e}const A=(e,t)=>dm(e,t,ko);function UF(){return WF().slots}function WF(){const e=$t();return e||I("useContext() called without active instance."),e.setupContext||(e.setupContext=lf(e))}function Ye(e,t,n){const o=arguments.length;return o===2?Te(t)&&!se(t)?Zt(t)?z(e,null,[t]):z(e,t):z(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Zt(n)&&(n=[n]),z(e,t,n))}const zF=Symbol("ssrContext"),KF=()=>{{const e=Z(zF);return e||I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function pl(e){return!!(e&&e.__v_isShallow)}function YF(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},r={header(f){return Te(f)?f.__isVue?["div",e,"VueInstance"]:Ae(f)?["div",{},["span",e,p(f)],"<",i(f.value),">"]:ns(f)?["div",{},["span",e,pl(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Ln(f)?" (readonly)":""}`]:Ln(f)?["div",{},["span",e,pl(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...l(f.$)]}};function l(f){const d=[];f.type.props&&f.props&&d.push(a("props",he(f.props))),f.setupState!==Ie&&d.push(a("setup",f.setupState)),f.data!==Ie&&d.push(a("data",he(f.data)));const m=c(f,"computed");m&&d.push(a("computed",m));const F=c(f,"inject");return F&&d.push(a("injected",F)),d.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),d}function a(f,d){return d=Ne({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(m=>["div",{},["span",o,m+": "],i(d[m],!1)])]]:["span",{}]}function i(f,d=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",n,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Te(f)?["object",{object:d?he(f):f}]:["span",n,String(f)]}function c(f,d){const m=f.type;if(ue(m))return;const F={};for(const g in f.ctx)u(m,g,d)&&(F[g]=f.ctx[g]);return F}function u(f,d,m){const F=f[m];if(se(F)&&F.includes(d)||Te(F)&&d in F||f.extends&&u(f.extends,d,m)||f.mixins&&f.mixins.some(g=>u(g,d,m)))return!0}function p(f){return pl(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const $r="3.2.47",ZF="http://www.w3.org/2000/svg",zn=typeof document<"u"?document:null,lc=zn&&zn.createElement("template"),GF={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?zn.createElementNS(ZF,e):zn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>zn.createTextNode(e),createComment:e=>zn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,l){const a=n?n.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===l||!(r=r.nextSibling)););else{lc.innerHTML=o?`<svg>${e}</svg>`:e;const i=lc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function QF(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ey(e,t,n){const o=e.style,r=He(n);if(n&&!r){if(t&&!He(t))for(const l in t)n[l]==null&&sa(o,l,"");for(const l in n)sa(o,l,n[l])}else{const l=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const ty=/[^\\];\s*$/,ac=/\s*!important$/;function sa(e,t,n){if(se(n))n.forEach(o=>sa(e,t,o));else if(n==null&&(n=""),ty.test(n)&&I(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const o=ny(e,t);ac.test(n)?e.setProperty(pn(o),n.replace(ac,""),"important"):e[o]=n}}const ic=["Webkit","Moz","ms"],fl={};function ny(e,t){const n=fl[t];if(n)return n;let o=Kt(t);if(o!=="filter"&&o in e)return fl[t]=o;o=is(o);for(let r=0;r<ic.length;r++){const l=ic[r]+o;if(l in e)return fl[t]=l}return t}const cc="http://www.w3.org/1999/xlink";function sy(e,t,n,o,r){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(cc,t.slice(6,t.length)):e.setAttributeNS(cc,t,n);else{const l=Ch(t);n==null||l&&!Zu(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function oy(e,t,n,o,r,l,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,r,l),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Zu(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch(c){i||I(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}i&&e.removeAttribute(t)}function xs(e,t,n,o){e.addEventListener(t,n,o)}function ry(e,t,n,o){e.removeEventListener(t,n,o)}function ly(e,t,n,o,r=null){const l=e._vei||(e._vei={}),a=l[t];if(o&&a)a.value=o;else{const[i,c]=ay(t);if(o){const u=l[t]=uy(o,r);xs(e,i,u,c)}else a&&(ry(e,i,a,c),l[t]=void 0)}}const uc=/(?:Once|Passive|Capture)$/;function ay(e){let t;if(uc.test(e)){t={};let o;for(;o=e.match(uc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pn(e.slice(2)),t]}let dl=0;const iy=Promise.resolve(),cy=()=>dl||(iy.then(()=>dl=0),dl=Date.now());function uy(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Pt(py(o,n.value),t,5,[o])};return n.value=e,n.attached=cy(),n}function py(e,t){if(se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const pc=/^on[a-z]/,fy=(e,t,n,o,r=!1,l,a,i,c)=>{t==="class"?QF(e,o,r):t==="style"?ey(e,n,o):Ho(t)?vr(t)||ly(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):dy(e,t,o,r))?oy(e,t,o,l,a,i,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),sy(e,t,o,r))};function dy(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&pc.test(t)&&ue(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pc.test(t)&&He(n)?!1:t in e}const yn="transition",Js="animation",cf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hy=Ne({},Um.props,cf),Dn=(e,t=[])=>{se(e)?e.forEach(n=>n(...t)):e&&e(...t)},fc=e=>e?se(e)?e.some(t=>t.length>1):e.length>1:!1;function my(e){const t={};for(const U in e)U in cf||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:l=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:u=a,appearToClass:p=i,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,F=Fy(r),g=F&&F[0],v=F&&F[1],{onBeforeEnter:w,onEnter:b,onEnterCancelled:x,onLeave:C,onLeaveCancelled:R,onBeforeAppear:L=w,onAppear:V=b,onAppearCancelled:T=x}=t,N=(U,ie,Re)=>{vn(U,ie?p:i),vn(U,ie?u:a),Re&&Re()},Y=(U,ie)=>{U._isLeaving=!1,vn(U,f),vn(U,m),vn(U,d),ie&&ie()},ae=U=>(ie,Re)=>{const Je=U?V:b,Be=()=>N(ie,U,Re);Dn(Je,[ie,Be]),dc(()=>{vn(ie,U?c:l),on(ie,U?p:i),fc(Je)||hc(ie,o,g,Be)})};return Ne(t,{onBeforeEnter(U){Dn(w,[U]),on(U,l),on(U,a)},onBeforeAppear(U){Dn(L,[U]),on(U,c),on(U,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(U,ie){U._isLeaving=!0;const Re=()=>Y(U,ie);on(U,f),pf(),on(U,d),dc(()=>{U._isLeaving&&(vn(U,f),on(U,m),fc(C)||hc(U,o,v,Re))}),Dn(C,[U,Re])},onEnterCancelled(U){N(U,!1),Dn(x,[U])},onAppearCancelled(U){N(U,!0),Dn(T,[U])},onLeaveCancelled(U){Y(U),Dn(R,[U])}})}function Fy(e){if(e==null)return null;if(Te(e))return[hl(e.enter),hl(e.leave)];{const t=hl(e);return[t,t]}}function hl(e){const t=Rh(e);return gm(t,"<transition> explicit duration"),t}function on(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function vn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function dc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let yy=0;function hc(e,t,n,o){const r=e._endId=++yy,l=()=>{r===e._endId&&o()};if(n)return setTimeout(l,n);const{type:a,timeout:i,propCount:c}=uf(e,t);if(!a)return o();const u=a+"end";let p=0;const f=()=>{e.removeEventListener(u,d),l()},d=m=>{m.target===e&&++p>=c&&f()};setTimeout(()=>{p<c&&f()},i+1),e.addEventListener(u,d)}function uf(e,t){const n=window.getComputedStyle(e),o=F=>(n[F]||"").split(", "),r=o(`${yn}Delay`),l=o(`${yn}Duration`),a=mc(r,l),i=o(`${Js}Delay`),c=o(`${Js}Duration`),u=mc(i,c);let p=null,f=0,d=0;t===yn?a>0&&(p=yn,f=a,d=l.length):t===Js?u>0&&(p=Js,f=u,d=c.length):(f=Math.max(a,u),p=f>0?a>u?yn:Js:null,d=p?p===yn?l.length:c.length:0);const m=p===yn&&/\b(transform|all)(,|$)/.test(o(`${yn}Property`).toString());return{type:p,timeout:f,propCount:d,hasTransform:m}}function mc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Fc(n)+Fc(e[o])))}function Fc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function pf(){return document.body.offsetHeight}const ff=new WeakMap,df=new WeakMap,hf={name:"TransitionGroup",props:Ne({},hy,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=$t(),o=Bp();let r,l;return Kr(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!wy(r[0].el,n.vnode.el,a))return;r.forEach(_y),r.forEach(by);const i=r.filter(xy);pf(),i.forEach(c=>{const u=c.el,p=u.style;on(u,a),p.transform=p.webkitTransform=p.transitionDuration="";const f=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,vn(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=he(e),i=my(a);let c=a.tag||Se;r=l,l=t.default?Qa(t.default()):[];for(let u=0;u<l.length;u++){const p=l[u];p.key!=null?Is(p,wo(p,i,o,n)):I("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const p=r[u];Is(p,wo(p,i,o,n)),ff.set(p,p.el.getBoundingClientRect())}return z(c,null,l)}}},gy=e=>delete e.mode;hf.props;const vy=hf;function _y(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function by(e){df.set(e,e.el.getBoundingClientRect())}function xy(e){const t=ff.get(e),n=df.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${r}px)`,l.transitionDuration="0s",e}}function wy(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),n.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(o);const{hasTransform:l}=uf(o);return r.removeChild(o),l}const yc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?n=>wn(t,n):t};function Cy(e){e.target.composing=!0}function gc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ky={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=yc(r);const l=o||r.props&&r.props.type==="number";xs(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;n&&(i=i.trim()),l&&(i=Ml(i)),e._assign(i)}),n&&xs(e,"change",()=>{e.value=e.value.trim()}),t||(xs(e,"compositionstart",Cy),xs(e,"compositionend",gc),xs(e,"change",gc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},l){if(e._assign=yc(l),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(r||e.type==="number")&&Ml(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},Sy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vc=(e,t)=>n=>{if(!("key"in n))return;const o=pn(n.key);if(t.some(r=>r===o||Sy[r]===o))return e(n)},mf={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):qs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),qs(e,!0),o.enter(e)):o.leave(e,()=>{qs(e,!1)}):qs(e,t))},beforeUnmount(e,{value:t}){qs(e,t)}};function qs(e,t){e.style.display=t?e._vod:"none"}const Ey=Ne({patchProp:fy},GF);let _c;function $y(){return _c||(_c=SF(Ey))}const Ay=(...e)=>{const t=$y().createApp(...e);Ty(t),Ry(t);const{mount:n}=t;return t.mount=o=>{const r=Oy(o);if(!r)return;const l=t._component;!ue(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function Ty(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Yu(t)||xh(t),writable:!1})}function Ry(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){I("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return I(o),n},set(){I(o)}})}}function Oy(e){if(He(e)){const t=document.querySelector(e);return t||I(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&I('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Py(){YF()}Py();function oa(e,t={},n){for(const o in e){const r=e[o],l=n?`${n}:${o}`:o;typeof r=="object"&&r!==null?oa(r,t,l):typeof r=="function"&&(t[l]=r)}return t}const Iy={run:e=>e()},Ly=()=>Iy,Ff=typeof console.createTask<"u"?console.createTask:Ly;function By(e,t){const n=t.shift(),o=Ff(n);return e.reduce((r,l)=>r.then(()=>o.run(()=>l(...t))),Promise.resolve())}function My(e,t){const n=t.shift(),o=Ff(n);return Promise.all(e.map(r=>o.run(()=>r(...t))))}function ml(e,t){for(const n of[...e])n(t)}class Hy{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,o={}){if(!t||typeof n!="function")return()=>{};const r=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!o.allowDeprecated){let a=l.message;a||(a=`${r} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let o,r=(...l)=>(typeof o=="function"&&o(),o=void 0,r=void 0,n(...l));return o=this.hook(t,r),o}removeHook(t,n){if(this._hooks[t]){const o=this._hooks[t].indexOf(n);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const o=this._hooks[t]||[];delete this._hooks[t];for(const r of o)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=oa(t),o=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of o.splice(0,o.length))r()}}removeHooks(t){const n=oa(t);for(const o in n)this.removeHook(o,n[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(By,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(My,t,...n)}callHookWith(t,n,...o){const r=this._before||this._after?{name:n,args:o,context:{}}:void 0;this._before&&ml(this._before,r);const l=t(n in this._hooks?[...this._hooks[n]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&r&&ml(this._after,r)}):(this._after&&r&&ml(this._after,r),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function jy(){return new Hy}function Ny(e){return Array.isArray(e)?e:[e]}const yf=["title","script","style","noscript"],Dy=["base","meta","link","style","script","noscript"],Vy=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Jy=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],qy=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function gf(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ra(e){return gf(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Xy(e){let t=9;for(const n of e)for(let o=0;o<n.length;)t=Math.imul(t^n.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function vf(e,t){const{props:n,tag:o}=e;if(Jy.includes(o))return o;if(o==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];o==="meta"&&r.push("name","property","http-equiv");for(const l of r)if(typeof n[l]<"u"){const a=String(n[l]);return t&&!t(a)?!1:`${o}:${l}:${a}`}return!1}const bc=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e,nr=(e,t=!1,n)=>{const{tag:o,$el:r}=e;r&&(Object.entries(o.props).forEach(([l,a])=>{a=String(a);const i=`attr:${l}`;if(l==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${i}:${c}`;n&&n(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!l.startsWith("data-h-")&&n(e,i,()=>r.removeAttribute(l)),(t||r.getAttribute(l)!==a)&&r.setAttribute(l,a)}),yf.includes(o.tag)&&(o.textContent&&o.textContent!==r.textContent?r.textContent=o.textContent:o.innerHTML&&o.innerHTML!==r.innerHTML&&(r.innerHTML=o.innerHTML)))};let Xs=!1;async function _f(e,t={}){var d,m;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,r=(await e.resolveTags()).map(i);if(e.resolvedOptions.experimentalHashHydration&&(Xs=Xs||e._hash||!1,Xs)){const F=Xy(r.map(g=>g.tag._h));if(Xs===F)return;Xs=F}const l=e._popSideEffectQueue();e.headEntries().map(F=>F._sde).forEach(F=>{Object.entries(F).forEach(([g,v])=>{l[g]=v})});const a=(F,g,v)=>{g=`${F.renderId}:${g}`,F.entry&&(F.entry._sde[g]=v),delete l[g]};function i(F){const g=e.headEntries().find(w=>w._i===F._e),v={renderId:!F.key&&F._d?F._d:ra(F),$el:null,shouldRender:!0,tag:F,entry:g,markSideEffect:(w,b)=>a(v,w,b)};return v}const c=[],u={body:[],head:[]},p=F=>{e._elMap[F.renderId]=F.$el,c.push(F),a(F,"el",()=>{var g;(g=F.$el)==null||g.remove(),delete e._elMap[F.renderId]})};for(const F of r){if(await e.hooks.callHook("dom:beforeRenderTag",F),!F.shouldRender)continue;const{tag:g}=F;if(g.tag==="title"){o.title=g.textContent||"",c.push(F);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){F.$el=o[g.tag==="htmlAttrs"?"documentElement":"body"],nr(F,!1,a),c.push(F);continue}if(F.$el=e._elMap[F.renderId],!F.$el&&g.key&&(F.$el=o.querySelector(`${(d=g.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),F.$el){F.tag._d&&nr(F),p(F);continue}u[(m=g.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(F)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([F,g])=>{var w;if(!g.length)return;const v=(w=o==null?void 0:o[F])==null?void 0:w.children;if(v){for(const b of[...v].reverse()){const x=b.tagName.toLowerCase();if(!Dy.includes(x))continue;const C=b.getAttributeNames().reduce((T,N)=>({...T,[N]:b.getAttribute(N)}),{}),R={tag:x,props:C};b.innerHTML&&(R.innerHTML=b.innerHTML);const L=ra(R);let V=g.findIndex(T=>(T==null?void 0:T.renderId)===L);if(V===-1){const T=vf(R);V=g.findIndex(N=>(N==null?void 0:N.tag._d)&&N.tag._d===T)}if(V!==-1){const T=g[V];T.$el=b,nr(T),p(T),delete g[V]}}g.forEach(b=>{const x=b.tag.tagPosition||"head";f[x]=f[x]||o.createDocumentFragment(),b.$el||(b.$el=o.createElement(b.tag.tag),nr(b,!0)),f[x].appendChild(b.$el),p(b)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const F of c)await e.hooks.callHook("dom:renderTag",F);Object.values(l).forEach(F=>F())}let Fl=null;async function bf(e,t={}){function n(){return Fl=null,_f(e,t)}const o=t.delayFn||(r=>setTimeout(r,10));return Fl=Fl||new Promise(r=>o(()=>r(n())))}const Uy=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),bf(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}});function Wy(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const xc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in xc?xc[t]:10}const zy=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Ky(){return{hooks:{"tags:resolve":e=>{const t=n=>{var o;return(o=e.tags.find(r=>r._d===n))==null?void 0:o._p};for(const{prefix:n,offset:o}of zy)for(const r of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(n))){const l=t(r.tagPriority.replace(n,""));typeof l<"u"&&(r._p=l+o)}e.tags.sort((n,o)=>n._p-o._p).sort((n,o)=>wc(n)-wc(o))}}}}const Yy=()=>({hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(r=>r.tag==="titleTemplate");const o=t.findIndex(r=>r.tag==="title");if(o!==-1&&n!==-1){const r=bc(t[n].textContent,t[o].textContent);r!==null?t[o].textContent=r||t[o].textContent:delete t[o]}else if(n!==-1){const r=bc(t[n].textContent);r!==null&&(t[n].textContent=r,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}),Zy=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),Gy=["link","style","script","noscript"],Qy=()=>({hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=ra(e)),e.key&&Gy.includes(e.tag)&&(e._h=gf(e.key),e.props[`data-h-${e._h}`]="")}}}),Cc=["script","link","bodyAttrs"],eg=()=>{const e=(t,n)=>{const o={},r={};Object.entries(n.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?r[a]=i:o[a]=i});let l;return t==="dom"&&n.tag==="script"&&typeof o.src=="string"&&typeof r.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:r,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Cc.includes(n.tag)||!Object.entries(n.props).find(([o,r])=>o.startsWith("on")&&typeof r=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Cc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([l,a])=>l.startsWith("on")&&typeof a=="function"))return;const{props:n,eventHandlers:o,delayedSrc:r}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=n,t.tag._eventHandlers=o,t.tag._delayedSrc=r)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([r,l])=>{const a=`${t.tag._d||t.tag._p}:${r}`,i=r.slice(2).toLowerCase(),c=`data-h-${i}`;if(t.markSideEffect(a,()=>{}),n.hasAttribute(c))return;const u=l;n.setAttribute(c,""),o.addEventListener(i,u),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(i,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}},tg=["templateParams","htmlAttrs","bodyAttrs"],ng=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(n=>{e.props[n]&&(e.key=e.props[n],delete e.props[n])});const t=e.key?`${e.tag}:${e.key}`:vf(e);t&&(e._d=t)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const r=o._d||o._p,l=t[r];if(l){let a=o==null?void 0:o.tagDuplicateStrategy;if(!a&&tg.includes(o.tag)&&(a="merge"),a==="merge"){const c=l.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),t[r].props={...c,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}const i=Object.keys(o.props).length;if((i===0||i===1&&typeof o.props["data-h-key"]<"u")&&!o.innerHTML&&!o.textContent){delete t[r];return}}t[r]=o});const n=[];Object.values(t).forEach(o=>{const r=o._duped;delete o._duped,n.push(o),r&&n.push(...r)}),e.tags=n}}});function sr(e,t){function n(l){if(["s","pageTitle"].includes(l))return t.pageTitle;let a;return l.includes(".")?a=l.split(".").reduce((i,c)=>i&&i[c]||void 0,t):a=t[l],typeof a<"u"?a||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const a=n(l.slice(1));typeof a=="string"&&(e=e.replaceAll(new RegExp(`\\${l}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function sg(){return{hooks:{"tags:resolve":e=>{var l;const{tags:t}=e,n=(l=t.find(a=>a.tag==="title"))==null?void 0:l.textContent,o=t.findIndex(a=>a.tag==="templateParams"),r=o!==-1?t[o].props:{};r.pageTitle=r.pageTitle||n||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=sr(a.textContent,r);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=sr(a.props.content,r);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=sr(a.props.href,r);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?sr(c,r):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}const og=typeof window<"u";let xf;const rg=e=>xf=e,lg=()=>xf;async function ag(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await cg(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(o=>qy.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||yf.includes(n.tag))&&(n[o]=n.props[o]),delete n.props[o]}),["innerHTML","textContent"].forEach(o=>{if(n.tag==="script"&&typeof n[o]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[o]=JSON.parse(n[o])}catch{n[o]=""}typeof n[o]=="object"&&(n[o]=JSON.stringify(n[o]))}),n.props.class&&(n.props.class=ig(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(o=>({...n,props:{...n.props,content:o}})):n)}function ig(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function cg(e,t){for(const n of Object.keys(t)){const o=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=o?"true":"":String(t[n])==="false"&&(o?t[n]="false":delete t[n])}return t}const ug=10;async function pg(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,o])=>typeof o<"u"&&Vy.includes(n)).forEach(([n,o])=>{const r=Ny(o);t.push(...r.map(l=>ag(n,l)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,o)=>(n._e=e._i,n._p=(e._i<<ug)+o,n))}const fg=()=>[ng(),Ky(),sg(),Yy(),Qy(),eg(),Zy()],dg=(e={})=>[Uy({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function hg(e={}){const t=mg({...e,plugins:[...dg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Wy(t.resolvedOptions.document)),rg(t),t}function mg(e={}){let t=[],n={},o=0;const r=jy();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...fg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(i=>i.hooks&&r.addHooks(i.hooks)),e.document=e.document||(og?document:void 0);const l=()=>r.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return r},use(i){i.hooks&&r.addHooks(i.hooks)},push(i,c){const u={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),l(),{dispose(){t=t.filter(p=>p._i!==u._i?!0:(n={...n,...p._sde||{}},p._sde={},l(),!1))},patch(p){t=t.map(f=>(f._i===u._i&&(u.input=f.input=p,l()),f))}}},async resolveTags(){const i={tags:[],entries:[...t]};await r.callHook("entries:resolve",i);for(const c of i.entries){const u=c._t||(p=>p);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const p of await pg(c)){const f={tag:p,entry:c,resolvedOptions:a.resolvedOptions};await r.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await r.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...n};return n={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function Fg(e){return typeof e=="function"?e():k(e)}function Ar(e,t=""){if(e instanceof Promise)return e;const n=Fg(e);return!e||!n?n:Array.isArray(n)?n.map(o=>Ar(o,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,r])=>o==="titleTemplate"||o.startsWith("on")?[o,k(r)]:[o,Ar(r,o)])):n}const yg=$r.startsWith("3"),gg=typeof window<"u",wf="usehead";function oi(){return $t()&&Z(wf)||lg()}function vg(e){return{install(n){yg&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(wf,e))}}.install}function _g(e={}){const t=hg({...e,domDelayFn:n=>setTimeout(()=>Qe(()=>n()),10),plugins:[bg(),...(e==null?void 0:e.plugins)||[]]});return t.install=vg(t),t}const bg=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Ar(t.input)}}});function xg(e,t={}){const n=oi(),o=X(!1),r=X({});fs(()=>{r.value=o.value?{}:Ar(e)});const l=n.push(r.value,t);return ye(r,i=>{l.patch(i)}),$t()&&(Vo(()=>{l.dispose()}),Np(()=>{o.value=!0}),jp(()=>{o.value=!1})),l}function wg(e,t={}){return oi().push(e,t)}function ri(e,t={}){var o;const n=oi();if(n){const r=gg||!!((o=n.resolvedOptions)!=null&&o.document);return t.mode==="server"&&r||t.mode==="client"&&!r?void 0:r?xg(e,t):wg(e,t)}}const Cg=e=>ri({htmlAttrs:e});function kg(e,t){const n=_g(t||{}),o={unhead:n,install(r){$r.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,l){return n.push(r,l)},addEntry(r,l){return n.push(r,l)},addHeadObjs(r,l){return n.push(r,l)},addReactiveEntry(r,l){const a=ri(r,l);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,l){l?_f(n,{document:r}):bf(n,{delayFn:a=>setTimeout(()=>a(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=o.addHeadObjs,n.updateDOM=o.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const l of o.hooks["before:dom"])l()===!1&&(r.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const io=Symbol("v-click-clicks"),Kn=Symbol("v-click-clicks-elements"),la=Symbol("v-click-clicks-order-map"),co=Symbol("v-click-clicks-disabled"),Cf=Symbol("slidev-slide-scale"),re=Symbol("slidev-slidev-context"),Sg=Symbol("slidev-route"),Eg=Symbol("slidev-slide-context"),Wn="slidev-vclick-target",yl="slidev-vclick-hidden",$g="slidev-vclick-fade",gl="slidev-vclick-hidden-explicitly",Us="slidev-vclick-current",or="slidev-vclick-prior",Ag=["localhost","127.0.0.1"];let Tg=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function kf(e){return e=e??[],Array.isArray(e)?e:[e]}function aa(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Rg(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const r=[];let l=t;for(;l<n;)r.push(l),l+=o||1;return r}function Og(e){return e!=null}function Pg(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(Og))}const so={theme:"dracula",title:"React Shared",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Nunito Sans","Fira Code"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},hightlighter:"shiki"},Ee=so,Tn=Ee.aspectRatio??16/9,Rn=Ee.canvasWidth??980,li=Math.ceil(Rn/Tn),ai=A(()=>Pg(Ee.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Lt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const hs=je({page:0,clicks:0});let Ig=[],Lg=[];Lt(hs,"$syncUp",!0);Lt(hs,"$syncDown",!0);Lt(hs,"$paused",!1);Lt(hs,"$onSet",e=>Ig.push(e));Lt(hs,"$onPatch",e=>Lg.push(e));Lt(hs,"$patch",async()=>!1);function Sf(e,t,n=!1){const o=[];let r=!1,l=!1,a,i;const c=je(t);function u(m){o.push(m)}function p(m,F){c[m]!==F&&(clearTimeout(a),r=!0,c[m]=F,a=setTimeout(()=>r=!1,0))}function f(m){r||(clearTimeout(i),l=!0,Object.entries(m).forEach(([F,g])=>{c[F]=g}),i=setTimeout(()=>l=!1,0))}function d(m){let F;n?n&&window.addEventListener("storage",v=>{v&&v.key===m&&v.newValue&&f(JSON.parse(v.newValue))}):(F=new BroadcastChannel(m),F.addEventListener("message",v=>f(v.data)));function g(){!n&&F&&!l?F.postMessage(he(c)):n&&!l&&window.localStorage.setItem(m,JSON.stringify(c)),r||o.forEach(v=>v(c))}if(ye(c,g,{deep:!0}),n){const v=window.localStorage.getItem(m);v&&f(JSON.parse(v))}}return{init:d,onPatch:u,patch:p,state:c}}const{init:Bg,onPatch:Mg,patch:Ws,state:vl}=Sf(hs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ms=je({});let Hg=[],jg=[];Lt(ms,"$syncUp",!0);Lt(ms,"$syncDown",!0);Lt(ms,"$paused",!1);Lt(ms,"$onSet",e=>Hg.push(e));Lt(ms,"$onPatch",e=>jg.push(e));Lt(ms,"$patch",async()=>!1);const{init:Ng,onPatch:Dg,patch:Ef,state:Tr}=Sf(ms,{},!1),Vg="modulepreload",Jg=function(e){return"/react-shared-ppt/"+e},kc={},dr=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Jg(l),l in kc)return;kc[l]=!0;const a=l.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let p=r.length-1;p>=0;p--){const f=r[p];if(f.href===l&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Vg,a||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),a)return new Promise((p,f)=>{u.addEventListener("load",p),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var Sc;const Gt=typeof window<"u",qg=e=>typeof e<"u",Xg=Object.prototype.toString,Eo=e=>typeof e=="function",Ug=e=>typeof e=="number",$f=e=>typeof e=="string",ia=e=>Xg.call(e)==="[object Object]",ca=()=>+Date.now(),Rs=()=>{},Wg=Gt&&((Sc=window==null?void 0:window.navigator)==null?void 0:Sc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Qt(e){return typeof e=="function"?e():k(e)}function zg(e,t){function n(...o){return new Promise((r,l)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(l)})}return n}const Af=e=>e();function Kg(e=Af){const t=X(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...l)=>{t.value&&e(...l)};return{isActive:Wt(t),pause:n,resume:o,eventFilter:r}}function Yg(e){return e}function Zg(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?e:l+r}function Gg(e,t){let n,o,r;const l=X(!0),a=()=>{l.value=!0,r()};ye(e,a,{flush:"sync"});const i=Eo(t)?t:t.get,c=Eo(t)?void 0:t.set,u=pm((p,f)=>(o=p,r=f,{get(){return l.value&&(n=i(),l.value=!1),o(),n},set(d){c==null||c(d)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function en(e){return Da()?(rp(e),!0):!1}function Qg(e){if(!Ae(e))return je(e);const t=new Proxy({},{get(n,o,r){return k(Reflect.get(e.value,o,r))},set(n,o,r){return Ae(e.value[o])&&!Ae(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return je(t)}function Tf(e){return typeof e=="function"?A(e):X(e)}function ii(e,t=!0){$t()?ds(e):t?e():Qe(e)}function ev(e){$t()&&Yr(e)}function tv(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:r=!1}=n;let l=null;const a=X(!1);function i(){l&&(clearInterval(l),l=null)}function c(){a.value=!1,i()}function u(){const p=Qt(t);p<=0||(a.value=!0,r&&e(),i(),l=setInterval(e,p))}if(o&&Gt&&u(),Ae(t)||Eo(t)){const p=ye(t,()=>{a.value&&Gt&&u()});en(p)}return en(c),{isActive:a,pause:c,resume:u}}function nv(e,t,n={}){const{immediate:o=!0}=n,r=X(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function i(){r.value=!1,a()}function c(...u){a(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...u)},Qt(t))}return o&&(r.value=!0,Gt&&c()),en(i),{isPending:Wt(r),start:c,stop:i}}function Rf(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,r=Ae(e),l=X(e);function a(i){if(arguments.length)return l.value=i,l.value;{const c=Qt(n);return l.value=l.value===c?Qt(o):c,l.value}}return r?a:[l,a]}var Ec=Object.getOwnPropertySymbols,sv=Object.prototype.hasOwnProperty,ov=Object.prototype.propertyIsEnumerable,rv=(e,t)=>{var n={};for(var o in e)sv.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Ec)for(var o of Ec(e))t.indexOf(o)<0&&ov.call(e,o)&&(n[o]=e[o]);return n};function lv(e,t,n={}){const o=n,{eventFilter:r=Af}=o,l=rv(o,["eventFilter"]);return ye(e,zg(r,t),l)}var av=Object.defineProperty,iv=Object.defineProperties,cv=Object.getOwnPropertyDescriptors,Rr=Object.getOwnPropertySymbols,Of=Object.prototype.hasOwnProperty,Pf=Object.prototype.propertyIsEnumerable,$c=(e,t,n)=>t in e?av(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,uv=(e,t)=>{for(var n in t||(t={}))Of.call(t,n)&&$c(e,n,t[n]);if(Rr)for(var n of Rr(t))Pf.call(t,n)&&$c(e,n,t[n]);return e},pv=(e,t)=>iv(e,cv(t)),fv=(e,t)=>{var n={};for(var o in e)Of.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Rr)for(var o of Rr(e))t.indexOf(o)<0&&Pf.call(e,o)&&(n[o]=e[o]);return n};function dv(e,t,n={}){const o=n,{eventFilter:r}=o,l=fv(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Kg(r);return{stop:lv(e,t,pv(uv({},l),{eventFilter:a})),pause:i,resume:c,isActive:u}}function kt(e){var t;const n=Qt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const tt=Gt?window:void 0,If=Gt?window.document:void 0,hv=Gt?window.navigator:void 0;function be(...e){let t,n,o,r;if($f(e[0])||Array.isArray(e[0])?([n,o,r]=e,t=tt):[t,n,o,r]=e,!t)return Rs;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const l=[],a=()=>{l.forEach(p=>p()),l.length=0},i=(p,f,d,m)=>(p.addEventListener(f,d,m),()=>p.removeEventListener(f,d,m)),c=ye(()=>[kt(t),Qt(r)],([p,f])=>{a(),p&&l.push(...n.flatMap(d=>o.map(m=>i(p,d,m,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return en(u),u}let Ac=!1;function mv(e,t,n={}){const{window:o=tt,ignore:r=[],capture:l=!0,detectIframe:a=!1}=n;if(!o)return;Wg&&!Ac&&(Ac=!0,Array.from(o.document.body.children).forEach(d=>d.addEventListener("click",Rs)));let i=!0;const c=d=>r.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(F=>F===d.target||d.composedPath().includes(F));{const F=kt(m);return F&&(d.target===F||d.composedPath().includes(F))}}),p=[be(o,"click",d=>{const m=kt(e);if(!(!m||m===d.target||d.composedPath().includes(m))){if(d.detail===0&&(i=!c(d)),!i){i=!0;return}t(d)}},{passive:!0,capture:l}),be(o,"pointerdown",d=>{const m=kt(e);m&&(i=!d.composedPath().includes(m)&&!c(d))},{passive:!0}),a&&be(o,"blur",d=>{var m;const F=kt(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(F!=null&&F.contains(o.document.activeElement))&&t(d)})].filter(Boolean);return()=>p.forEach(d=>d())}const Fv=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function yv(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=tt,eventName:l="keydown",passive:a=!1}=o,i=Fv(t);return be(r,l,u=>{i(u)&&n(u)},a)}function gv(e={}){var t;const{window:n=tt}=e,o=(t=e.document)!=null?t:n==null?void 0:n.document,r=Gg(()=>null,()=>o==null?void 0:o.activeElement);return n&&(be(n,"blur",l=>{l.relatedTarget===null&&r.trigger()},!0),be(n,"focus",r.trigger,!0)),r}function qo(e,t=!1){const n=X(),o=()=>n.value=!!e();return o(),ii(o,t),n}function ws(e,t={}){const{window:n=tt}=t,o=qo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const l=X(!1),a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},i=()=>{o.value&&(a(),r=n.matchMedia(Tf(e).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",i):r.addListener(i))};return fs(i),en(()=>a()),l}const vv={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var _v=Object.defineProperty,Tc=Object.getOwnPropertySymbols,bv=Object.prototype.hasOwnProperty,xv=Object.prototype.propertyIsEnumerable,Rc=(e,t,n)=>t in e?_v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wv=(e,t)=>{for(var n in t||(t={}))bv.call(t,n)&&Rc(e,n,t[n]);if(Tc)for(var n of Tc(t))xv.call(t,n)&&Rc(e,n,t[n]);return e};function Cv(e,t={}){function n(i,c){let u=e[i];return c!=null&&(u=Zg(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=tt}=t;function r(i){return o?o.matchMedia(i).matches:!1}const l=i=>ws(`(min-width: ${n(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>l(c),enumerable:!0,configurable:!0}),i),{});return wv({greater(i){return ws(`(min-width: ${n(i,.1)})`,t)},greaterOrEqual:l,smaller(i){return ws(`(max-width: ${n(i,-.1)})`,t)},smallerOrEqual(i){return ws(`(max-width: ${n(i)})`,t)},between(i,c){return ws(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(i){return r(`(min-width: ${n(i,.1)})`)},isGreaterOrEqual(i){return r(`(min-width: ${n(i)})`)},isSmaller(i){return r(`(max-width: ${n(i,-.1)})`)},isSmallerOrEqual(i){return r(`(max-width: ${n(i)})`)},isInBetween(i,c){return r(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`)}},a)}function kv(e={}){const{navigator:t=hv,read:n=!1,source:o,copiedDuring:r=1500,legacy:l=!1}=e,a=["copy","cut"],i=qo(()=>t&&"clipboard"in t),c=A(()=>i.value||l),u=X(""),p=X(!1),f=nv(()=>p.value=!1,r);function d(){i.value?t.clipboard.readText().then(v=>{u.value=v}):u.value=g()}if(c.value&&n)for(const v of a)be(v,d);async function m(v=Qt(o)){c.value&&v!=null&&(i.value?await t.clipboard.writeText(v):F(v),u.value=v,p.value=!0,f.start())}function F(v){const w=document.createElement("textarea");w.value=v??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function g(){var v,w,b;return(b=(w=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:w.toString())!=null?b:""}return{isSupported:c,text:u,copied:p,copy:m}}function Sv(e){return JSON.parse(JSON.stringify(e))}const ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pa="__vueuse_ssr_handlers__";ua[pa]=ua[pa]||{};const Ev=ua[pa];function $v(e,t){return Ev[e]||t}function Av(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Tv=Object.defineProperty,Oc=Object.getOwnPropertySymbols,Rv=Object.prototype.hasOwnProperty,Ov=Object.prototype.propertyIsEnumerable,Pc=(e,t,n)=>t in e?Tv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ic=(e,t)=>{for(var n in t||(t={}))Rv.call(t,n)&&Pc(e,n,t[n]);if(Oc)for(var n of Oc(t))Ov.call(t,n)&&Pc(e,n,t[n]);return e};const Pv={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Lc="vueuse-storage";function Iv(e,t,n,o={}){var r;const{flush:l="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:f=tt,eventFilter:d,onError:m=T=>{console.error(T)}}=o,F=(p?Yt:X)(t);if(!n)try{n=$v("getDefaultStorage",()=>{var T;return(T=tt)==null?void 0:T.localStorage})()}catch(T){m(T)}if(!n)return F;const g=Qt(t),v=Av(g),w=(r=o.serializer)!=null?r:Pv[v],{pause:b,resume:x}=dv(F,()=>C(F.value),{flush:l,deep:a,eventFilter:d});return f&&i&&(be(f,"storage",V),be(f,Lc,L)),V(),F;function C(T){try{if(T==null)n.removeItem(e);else{const N=w.write(T),Y=n.getItem(e);Y!==N&&(n.setItem(e,N),f&&f.dispatchEvent(new CustomEvent(Lc,{detail:{key:e,oldValue:Y,newValue:N,storageArea:n}})))}}catch(N){m(N)}}function R(T){const N=T?T.newValue:n.getItem(e);if(N==null)return c&&g!==null&&n.setItem(e,w.write(g)),g;if(!T&&u){const Y=w.read(N);return Eo(u)?u(Y,g):v==="object"&&!Array.isArray(Y)?Ic(Ic({},g),Y):Y}else return typeof N!="string"?N:w.read(N)}function L(T){V(T.detail)}function V(T){if(!(T&&T.storageArea!==n)){if(T&&T.key==null){F.value=g;return}if(!(T&&T.key!==e)){b();try{F.value=R(T)}catch(N){m(N)}finally{T?Qe(x):x()}}}}}function Lv(e){return ws("(prefers-color-scheme: dark)",e)}var Bc=Object.getOwnPropertySymbols,Bv=Object.prototype.hasOwnProperty,Mv=Object.prototype.propertyIsEnumerable,Hv=(e,t)=>{var n={};for(var o in e)Bv.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Bc)for(var o of Bc(e))t.indexOf(o)<0&&Mv.call(e,o)&&(n[o]=e[o]);return n};function jv(e,t,n={}){const o=n,{window:r=tt}=o,l=Hv(o,["window"]);let a;const i=qo(()=>r&&"ResizeObserver"in r),c=()=>{a&&(a.disconnect(),a=void 0)},u=ye(()=>kt(e),f=>{c(),i.value&&r&&f&&(a=new ResizeObserver(t),a.observe(f,l))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return en(p),{isSupported:i,stop:p}}function Nv(e,t={}){const{immediate:n=!0,window:o=tt}=t,r=X(!1);let l=0,a=null;function i(p){if(!r.value||!o)return;const f=p-l;e({delta:f,timestamp:p}),l=p,a=o.requestAnimationFrame(i)}function c(){!r.value&&o&&(r.value=!0,a=o.requestAnimationFrame(i))}function u(){r.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return n&&c(),en(u),{isActive:Wt(r),pause:u,resume:c}}function Dv(e,t={width:0,height:0},n={}){const{window:o=tt,box:r="content-box"}=n,l=A(()=>{var c,u;return(u=(c=kt(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=X(t.width),i=X(t.height);return jv(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&l.value){const p=kt(e);if(p){const f=o.getComputedStyle(p);a.value=parseFloat(f.width),i.value=parseFloat(f.height)}}else if(u){const p=Array.isArray(u)?u:[u];a.value=p.reduce((f,{inlineSize:d})=>f+d,0),i.value=p.reduce((f,{blockSize:d})=>f+d,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},n),ye(()=>kt(e),c=>{a.value=c?t.width:0,i.value=c?t.height:0}),{width:a,height:i}}const Mc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Vv(e,t={}){const{document:n=If,autoExit:o=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),l=X(!1);let a=Mc[0];const i=qo(()=>{if(n){for(const g of Mc)if(g[1]in n)return a=g,!0}else return!1;return!1}),[c,u,p,,f]=a;async function d(){i.value&&(n!=null&&n[p]&&await n[u](),l.value=!1)}async function m(){if(!i.value)return;await d();const g=kt(r);g&&(await g[c](),l.value=!0)}async function F(){l.value?await d():await m()}return n&&be(n,f,()=>{l.value=!!(n!=null&&n[p])},!1),o&&en(d),{isSupported:i,isFullscreen:l,enter:m,exit:d,toggle:F}}function Jv(e,t,n={}){const{root:o,rootMargin:r="0px",threshold:l=.1,window:a=tt}=n,i=qo(()=>a&&"IntersectionObserver"in a);let c=Rs;const u=i.value?ye(()=>({el:kt(e),root:kt(o)}),({el:f,root:d})=>{if(c(),!f)return;const m=new IntersectionObserver(t,{root:d,rootMargin:r,threshold:l});m.observe(f),c=()=>{m.disconnect(),c=Rs}},{immediate:!0,flush:"post"}):Rs,p=()=>{c(),u()};return en(p),{isSupported:i,stop:p}}function Vt(e,t,n={}){const{window:o=tt}=n;return Iv(e,t,o==null?void 0:o.localStorage,n)}const qv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Xv(e={}){const{reactive:t=!1,target:n=tt,aliasMap:o=qv,passive:r=!0,onEventFired:l=Rs}=e,a=je(new Set),i={toJSON(){return{}},current:a},c=t?je(i):i,u=new Set,p=new Set;function f(g,v){g in c&&(t?c[g]=v:c[g].value=v)}function d(){a.clear();for(const g of p)f(g,!1)}function m(g,v){var w,b;const x=(w=g.key)==null?void 0:w.toLowerCase(),R=[(b=g.code)==null?void 0:b.toLowerCase(),x].filter(Boolean);x&&(v?a.add(x):a.delete(x));for(const L of R)p.add(L),f(L,v);x==="meta"&&!v?(u.forEach(L=>{a.delete(L),f(L,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&v&&[...a,...R].forEach(L=>u.add(L))}be(n,"keydown",g=>(m(g,!0),l(g)),{passive:r}),be(n,"keyup",g=>(m(g,!1),l(g)),{passive:r}),be("blur",d,{passive:!0}),be("focus",d,{passive:!0});const F=new Proxy(c,{get(g,v,w){if(typeof v!="string")return Reflect.get(g,v,w);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in c))if(/[+_-]/.test(v)){const x=v.split(/[+_-]/g).map(C=>C.trim());c[v]=A(()=>x.every(C=>k(F[C])))}else c[v]=X(!1);const b=Reflect.get(g,v,w);return t?k(b):b}});return F}function J9(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:l=tt,eventFilter:a}=e,i=X(r.x),c=X(r.y),u=X(null),p=g=>{t==="page"?(i.value=g.pageX,c.value=g.pageY):t==="client"?(i.value=g.clientX,c.value=g.clientY):t==="movement"&&(i.value=g.movementX,c.value=g.movementY),u.value="mouse"},f=()=>{i.value=r.x,c.value=r.y},d=g=>{if(g.touches.length>0){const v=g.touches[0];t==="page"?(i.value=v.pageX,c.value=v.pageY):t==="client"&&(i.value=v.clientX,c.value=v.clientY),u.value="touch"}},m=g=>a===void 0?p(g):a(()=>p(g),{}),F=g=>a===void 0?d(g):a(()=>d(g),{});return l&&(be(l,"mousemove",m,{passive:!0}),be(l,"dragover",m,{passive:!0}),n&&t!=="movement"&&(be(l,"touchstart",F,{passive:!0}),be(l,"touchmove",F,{passive:!0}),o&&be(l,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:u}}var an;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(an||(an={}));function Uv(e,t={}){const n=Tf(e),{threshold:o=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:a}=t,i=je({x:0,y:0}),c=(L,V)=>{i.x=L,i.y=V},u=je({x:0,y:0}),p=(L,V)=>{u.x=L,u.y=V},f=A(()=>i.x-u.x),d=A(()=>i.y-u.y),{max:m,abs:F}=Math,g=A(()=>m(F(f.value),F(d.value))>=o),v=X(!1),w=X(!1),b=A(()=>g.value?F(f.value)>F(d.value)?f.value>0?an.LEFT:an.RIGHT:d.value>0?an.UP:an.DOWN:an.NONE),x=L=>{var V,T,N;const Y=L.buttons===0,ae=L.buttons===1;return(N=(T=(V=t.pointerTypes)==null?void 0:V.includes(L.pointerType))!=null?T:Y||ae)!=null?N:!0},C=[be(e,"pointerdown",L=>{var V,T;if(!x(L))return;w.value=!0,(T=(V=n.value)==null?void 0:V.style)==null||T.setProperty("touch-action","none");const N=L.target;N==null||N.setPointerCapture(L.pointerId);const{clientX:Y,clientY:ae}=L;c(Y,ae),p(Y,ae),a==null||a(L)}),be(e,"pointermove",L=>{if(!x(L)||!w.value)return;const{clientX:V,clientY:T}=L;p(V,T),!v.value&&g.value&&(v.value=!0),v.value&&(r==null||r(L))}),be(e,"pointerup",L=>{var V,T;x(L)&&(v.value&&(l==null||l(L,b.value)),w.value=!1,v.value=!1,(T=(V=n.value)==null?void 0:V.style)==null||T.setProperty("touch-action","initial"))})],R=()=>C.forEach(L=>L());return{isSwiping:Wt(v),direction:Wt(b),posStart:Wt(i),posEnd:Wt(u),distanceX:f,distanceY:d,stop:R}}let Wv=0;function q9(e,t={}){const n=X(!1),{document:o=If,immediate:r=!0,manual:l=!1,id:a=`vueuse_styletag_${++Wv}`}=t,i=X(e);let c=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,t.media&&(f.media=t.media),o.head.appendChild(f)),!n.value&&(c=ye(i,d=>{f.textContent=d},{immediate:!0}),n.value=!0)},p=()=>{!o||!n.value||(c(),o.head.removeChild(o.getElementById(a)),n.value=!1)};return r&&!l&&ii(u),l||en(p),{id:a,css:i,unload:p,load:u,isLoaded:Wt(n)}}var zv=Object.defineProperty,Hc=Object.getOwnPropertySymbols,Kv=Object.prototype.hasOwnProperty,Yv=Object.prototype.propertyIsEnumerable,jc=(e,t,n)=>t in e?zv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zv=(e,t)=>{for(var n in t||(t={}))Kv.call(t,n)&&jc(e,n,t[n]);if(Hc)for(var n of Hc(t))Yv.call(t,n)&&jc(e,n,t[n]);return e};function X9(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:r="requestAnimationFrame",callback:l}=e,a=X(ca()+n),i=()=>a.value=ca()+n,c=l?()=>{i(),l(a.value)}:i,u=r==="requestAnimationFrame"?Nv(c,{immediate:o}):tv(c,r,{immediate:o});return t?Zv({timestamp:a},u):a}var Gv=Object.defineProperty,Nc=Object.getOwnPropertySymbols,Qv=Object.prototype.hasOwnProperty,e1=Object.prototype.propertyIsEnumerable,Dc=(e,t,n)=>t in e?Gv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t1=(e,t)=>{for(var n in t||(t={}))Qv.call(t,n)&&Dc(e,n,t[n]);if(Nc)for(var n of Nc(t))e1.call(t,n)&&Dc(e,n,t[n]);return e};const n1={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};t1({linear:Yg},n1);function zt(e,t,n,o={}){var r,l,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:f}=o,d=$t(),m=n||(d==null?void 0:d.emit)||((r=d==null?void 0:d.$emit)==null?void 0:r.bind(d))||((a=(l=d==null?void 0:d.proxy)==null?void 0:l.$emit)==null?void 0:a.bind(d==null?void 0:d.proxy));let F=u;t||(t="modelValue"),F=u||F||`update:${t.toString()}`;const g=w=>i?Eo(i)?i(w):Sv(w):w,v=()=>qg(e[t])?g(e[t]):f;if(c){const w=v(),b=X(w);return ye(()=>e[t],x=>b.value=g(x)),ye(b,x=>{(x!==e[t]||p)&&m(F,x)},{deep:p}),b}else return A({get(){return v()},set(w){m(F,w)}})}function U9({window:e=tt}={}){if(!e)return X(!1);const t=X(e.document.hasFocus());return be(e,"blur",()=>{t.value=!1}),be(e,"focus",()=>{t.value=!0}),t}function s1(e={}){const{window:t=tt,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=e,a=X(n),i=X(o),c=()=>{t&&(l?(a.value=t.innerWidth,i.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};return c(),ii(c),be("resize",c,{passive:!0}),r&&be("orientationchange",c,{passive:!0}),{width:a,height:i}}function o1(){return Lf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Lf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const r1=typeof Proxy=="function",l1="devtools-plugin:setup",a1="plugin:settings:set";let ys,fa;function i1(){var e;return ys!==void 0||(typeof window<"u"&&window.performance?(ys=!0,fa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ys=!0,fa=global.perf_hooks.performance):ys=!1),ys}function c1(){return i1()?fa.now():Date.now()}class u1{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const o={};if(t.settings)for(const a in t.settings){const i=t.settings[a];o[a]=i.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const a=localStorage.getItem(r),i=JSON.parse(a);Object.assign(l,i)}catch{}this.fallbacks={getSettings(){return l},setSettings(a){try{localStorage.setItem(r,JSON.stringify(a))}catch{}l=a},now(){return c1()}},n&&n.on(a1,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function p1(e,t){const n=e,o=Lf(),r=o1(),l=r1&&n.enableEarlyProxy;if(r&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))r.emit(l1,e,t);else{const a=l?new u1(n,r):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof window<"u";function f1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function _l(e,t){const n={};for(const o in t){const r=t[o];n[o]=Et(r)?r.map(e):e(r)}return n}const uo=()=>{},Et=Array.isArray;function ke(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const d1=/\/$/,h1=e=>e.replace(d1,"");function bl(e,t,n="/"){let o,r={},l="",a="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=t.slice(0,c),l=t.slice(c+1,i>-1?i:t.length),r=e(l)),i>-1&&(o=o||t.slice(0,i),a=t.slice(i,t.length)),o=y1(o??t,n),{fullPath:o+(l&&"?")+l+a,path:o,query:r,hash:a}}function m1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Vc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Jc(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&Mn(t.matched[o],n.matched[r])&&Bf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Bf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!F1(e[n],t[n]))return!1;return!0}function F1(e,t){return Et(e)?qc(e,t):Et(t)?qc(t,e):e===t}function qc(e,t){return Et(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function y1(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return ke(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r=n.length-1,l,a;for(l=0;l<o.length;l++)if(a=o[l],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var $o;(function(e){e.pop="pop",e.push="push"})($o||($o={}));var po;(function(e){e.back="back",e.forward="forward",e.unknown=""})(po||(po={}));function g1(e){if(!e)if(rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),h1(e)}const v1=/^[^#]+#/;function _1(e,t){return e.replace(v1,"#")+t}function b1(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const el=()=>({left:window.pageXOffset,top:window.pageYOffset});function x1(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(o&&l){ke(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{ke(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){ke(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=b1(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Xc(e,t){return(history.state?history.state.position-t:-1)+e}const da=new Map;function w1(e,t){da.set(e,t)}function C1(e){const t=da.get(e);return da.delete(e),t}let k1=()=>location.protocol+"//"+location.host;function Mf(e,t){const{pathname:n,search:o,hash:r}=t,l=e.indexOf("#");if(l>-1){let i=r.includes(e.slice(l))?e.slice(l).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),Vc(c,"")}return Vc(n,e)+o+r}function S1(e,t,n,o){let r=[],l=[],a=null;const i=({state:d})=>{const m=Mf(e,location),F=n.value,g=t.value;let v=0;if(d){if(n.value=m,t.value=d,a&&a===F){a=null;return}v=g?d.position-g.position:0}else o(m);r.forEach(w=>{w(n.value,F,{delta:v,type:$o.pop,direction:v?v>0?po.forward:po.back:po.unknown})})};function c(){a=n.value}function u(d){r.push(d);const m=()=>{const F=r.indexOf(d);F>-1&&r.splice(F,1)};return l.push(m),m}function p(){const{history:d}=window;d.state&&d.replaceState($e({},d.state,{scroll:el()}),"")}function f(){for(const d of l)d();l=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:f}}function Uc(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?el():null}}function E1(e){const{history:t,location:n}=window,o={value:Mf(e,n)},r={value:t.state};r.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,p){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:k1()+e+c;try{t[p?"replaceState":"pushState"](u,"",d),r.value=u}catch(m){ke("Error with push/replace State",m),n[p?"replace":"assign"](d)}}function a(c,u){const p=$e({},t.state,Uc(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});l(c,p,!0),o.value=c}function i(c,u){const p=$e({},r.value,t.state,{forward:c,scroll:el()});t.state||ke(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(p.current,p,!0);const f=$e({},Uc(o.value,c,null),{position:p.position+1},u);l(c,f,!1),o.value=c}return{location:o,state:r,push:i,replace:a}}function $1(e){e=g1(e);const t=E1(e),n=S1(e,t.state,t.location,t.replace);function o(l,a=!0){a||n.pauseListeners(),history.go(l)}const r=$e({location:"",base:e,go:o,createHref:_1.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function A1(e){return typeof e=="string"||e&&typeof e=="object"}function Hf(e){return typeof e=="string"||typeof e=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jf=Symbol("navigation failure");var Wc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Wc||(Wc={}));const T1={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${O1(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Bs(e,t){return $e(new Error(T1[e](t)),{type:e,[jf]:!0},t)}function tn(e,t){return e instanceof Error&&jf in e&&(t==null||!!(e.type&t))}const R1=["params","query","hash"];function O1(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of R1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const zc="[^/]+?",P1={sensitive:!1,strict:!1,start:!0,end:!0},I1=/[.+*?^${}()[\]/\\]/g;function L1(e,t){const n=$e({},P1,t),o=[];let r=n.start?"^":"";const l=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const d=u[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(I1,"\\$&"),m+=40;else if(d.type===1){const{value:F,repeatable:g,optional:v,regexp:w}=d;l.push({name:F,repeatable:g,optional:v});const b=w||zc;if(b!==zc){m+=10;try{new RegExp(`(${b})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${F}" (${b}): `+C.message)}}let x=g?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(x=v&&u.length<2?`(?:/${x})`:"/"+x),v&&(x+="?"),r+=x,m+=20,v&&(m+=-8),g&&(m+=-20),b===".*"&&(m+=-50)}p.push(m)}o.push(p)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function i(u){const p=u.match(a),f={};if(!p)return null;for(let d=1;d<p.length;d++){const m=p[d]||"",F=l[d-1];f[F.name]=m&&F.repeatable?m.split("/"):m}return f}function c(u){let p="",f=!1;for(const d of e){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const m of d)if(m.type===0)p+=m.value;else if(m.type===1){const{value:F,repeatable:g,optional:v}=m,w=F in u?u[F]:"";if(Et(w)&&!g)throw new Error(`Provided param "${F}" is an array but it is not repeatable (* or + modifiers)`);const b=Et(w)?w.join("/"):w;if(!b)if(v)d.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${F}"`);p+=b}}return p||"/"}return{re:a,score:o,keys:l,parse:i,stringify:c}}function B1(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function M1(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const l=B1(o[n],r[n]);if(l)return l;n++}if(Math.abs(r.length-o.length)===1){if(Kc(o))return 1;if(Kc(r))return-1}return r.length-o.length}function Kc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const H1={type:0,value:""},j1=/[a-zA-Z0-9_]/;function N1(e){if(!e)return[[]];if(e==="/")return[[H1]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,o=n;const r=[];let l;function a(){l&&r.push(l),l=[]}let i=0,c,u="",p="";function f(){u&&(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),n=1):d();break;case 4:d(),n=o;break;case 1:c==="("?n=2:j1.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),a(),r}function D1(e,t,n){const o=L1(N1(e.path),n);{const l=new Set;for(const a of o.keys)l.has(a.name)&&ke(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(a.name)}const r=$e(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function V1(e,t){const n=[],o=new Map;t=Gc({strict:!1,end:!0,sensitive:!1},t);function r(p){return o.get(p)}function l(p,f,d){const m=!d,F=J1(p);W1(F,f),F.aliasOf=d&&d.record;const g=Gc(t,p),v=[F];if("alias"in p){const x=typeof p.alias=="string"?[p.alias]:p.alias;for(const C of x)v.push($e({},F,{components:d?d.record.components:F.components,path:C,aliasOf:d?d.record:F}))}let w,b;for(const x of v){const{path:C}=x;if(f&&C[0]!=="/"){const R=f.record.path,L=R[R.length-1]==="/"?"":"/";x.path=f.record.path+(C&&L+C)}if(x.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=D1(x,f,g),f&&C[0]==="/"&&z1(w,f),d?(d.alias.push(w),U1(d,w)):(b=b||w,b!==w&&b.alias.push(w),m&&p.name&&!Zc(w)&&a(p.name)),F.children){const R=F.children;for(let L=0;L<R.length;L++)l(R[L],w,d&&d.children[L])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return b?()=>{a(b)}:uo}function a(p){if(Hf(p)){const f=o.get(p);f&&(o.delete(p),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(p);f>-1&&(n.splice(f,1),p.record.name&&o.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return n}function c(p){let f=0;for(;f<n.length&&M1(p,n[f])>=0&&(p.record.path!==n[f].record.path||!Nf(p,n[f]));)f++;n.splice(f,0,p),p.record.name&&!Zc(p)&&o.set(p.record.name,p)}function u(p,f){let d,m={},F,g;if("name"in p&&p.name){if(d=o.get(p.name),!d)throw Bs(1,{location:p});{const b=Object.keys(p.params||{}).filter(x=>!d.keys.find(C=>C.name===x));b.length&&ke(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=d.record.name,m=$e(Yc(f.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),p.params&&Yc(p.params,d.keys.map(b=>b.name))),F=d.stringify(m)}else if("path"in p)F=p.path,F.startsWith("/")||ke(`The Matcher cannot resolve relative paths but received "${F}". Unless you directly called \`matcher.resolve("${F}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),d=n.find(b=>b.re.test(F)),d&&(m=d.parse(F),g=d.record.name);else{if(d=f.name?o.get(f.name):n.find(b=>b.re.test(f.path)),!d)throw Bs(1,{location:p,currentLocation:f});g=d.record.name,m=$e({},f.params,p.params),F=d.stringify(m)}const v=[];let w=d;for(;w;)v.unshift(w.record),w=w.parent;return{name:g,path:F,params:m,matched:v,meta:X1(v)}}return e.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:r}}function Yc(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function J1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:q1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function q1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function Zc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function X1(e){return e.reduce((t,n)=>$e(t,n.meta),{})}function Gc(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function ha(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function U1(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(ha.bind(null,n)))return ke(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(ha.bind(null,n)))return ke(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function W1(e,t){t&&t.record.name&&!e.name&&!e.path&&ke(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function z1(e,t){for(const n of t.keys)if(!e.keys.find(ha.bind(null,n)))return ke(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function Nf(e,t){return t.children.some(n=>n===e||Nf(e,n))}const Df=/#/g,K1=/&/g,Y1=/\//g,Z1=/=/g,G1=/\?/g,Vf=/\+/g,Q1=/%5B/g,e0=/%5D/g,Jf=/%5E/g,t0=/%60/g,qf=/%7B/g,n0=/%7C/g,Xf=/%7D/g,s0=/%20/g;function ci(e){return encodeURI(""+e).replace(n0,"|").replace(Q1,"[").replace(e0,"]")}function o0(e){return ci(e).replace(qf,"{").replace(Xf,"}").replace(Jf,"^")}function ma(e){return ci(e).replace(Vf,"%2B").replace(s0,"+").replace(Df,"%23").replace(K1,"%26").replace(t0,"`").replace(qf,"{").replace(Xf,"}").replace(Jf,"^")}function r0(e){return ma(e).replace(Z1,"%3D")}function l0(e){return ci(e).replace(Df,"%23").replace(G1,"%3F")}function a0(e){return e==null?"":l0(e).replace(Y1,"%2F")}function Ao(e){try{return decodeURIComponent(""+e)}catch{ke(`Error decoding "${e}". Using original value`)}return""+e}function i0(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const l=o[r].replace(Vf," "),a=l.indexOf("="),i=Ao(a<0?l:l.slice(0,a)),c=a<0?null:Ao(l.slice(a+1));if(i in t){let u=t[i];Et(u)||(u=t[i]=[u]),u.push(c)}else t[i]=c}return t}function Qc(e){let t="";for(let n in e){const o=e[n];if(n=r0(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Et(o)?o.map(l=>l&&ma(l)):[o&&ma(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function c0(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Et(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const u0=Symbol("router view location matched"),eu=Symbol("router view depth"),ui=Symbol("router"),Uf=Symbol("route location"),Fa=Symbol("router view location");function zs(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function xn(e,t,n,o,r){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(Bs(4,{from:n,to:t})):f instanceof Error?i(f):A1(f)?i(Bs(2,{from:t,to:f})):(l&&o.enterCallbacks[r]===l&&typeof f=="function"&&l.push(f),a())},u=e.call(o&&o.instances[r],t,n,p0(c,t,n));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(d=>c._called?d:(ke(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){ke(f),i(new Error("Invalid navigation guard"));return}}p.catch(f=>i(f))})}function p0(e,t,n){let o=0;return function(){o++===1&&ke(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function xl(e,t,n,o){const r=[];for(const l of e){!l.components&&!l.children.length&&ke(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const a in l.components){let i=l.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw ke(`Component "${a}" in record with path "${l.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){ke(`Component "${a}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,ke(`Component "${a}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[a]))if(f0(i)){const u=(i.__vccOpts||i)[t];u&&r.push(xn(u,n,o,l,a))}else{let c=i();"catch"in c||(ke(`Component "${a}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const p=f1(u)?u.default:u;l.components[a]=p;const d=(p.__vccOpts||p)[t];return d&&xn(d,n,o,l,a)()}))}}}return r}function f0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tu(e){const t=Z(ui),n=Z(Uf),o=A(()=>t.resolve(k(e.to))),r=A(()=>{const{matched:c}=o.value,{length:u}=c,p=c[u-1],f=n.matched;if(!p||!f.length)return-1;const d=f.findIndex(Mn.bind(null,p));if(d>-1)return d;const m=nu(c[u-2]);return u>1&&nu(p)===m&&f[f.length-1].path!==m?f.findIndex(Mn.bind(null,c[u-2])):d}),l=A(()=>r.value>-1&&F0(n.params,o.value.params)),a=A(()=>r.value>-1&&r.value===n.matched.length-1&&Bf(n.params,o.value.params));function i(c={}){return m0(c)?t[k(e.replace)?"replace":"push"](k(e.to)).catch(uo):Promise.resolve()}if(rn){const c=$t();if(c){const u={route:o.value,isActive:l.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),fs(()=>{u.route=o.value,u.isActive=l.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:A(()=>o.value.href),isActive:l,isExactActive:a,navigate:i}}const d0=we({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tu,setup(e,{slots:t}){const n=je(tu(e)),{options:o}=Z(ui),r=A(()=>({[su(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[su(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Ye("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},l)}}}),h0=d0;function m0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function F0(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Et(r)||r.length!==o.length||o.some((l,a)=>l!==r[a]))return!1}return!0}function nu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const su=(e,t,n)=>e??t??n,y0=we({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){v0();const o=Z(Fa),r=A(()=>e.route||o.value),l=Z(eu,0),a=A(()=>{let u=k(l);const{matched:p}=r.value;let f;for(;(f=p[u])&&!f.components;)u++;return u}),i=A(()=>r.value.matched[a.value]);wt(eu,A(()=>a.value+1)),wt(u0,i),wt(Fa,r);const c=X();return ye(()=>[c.value,i.value,e.name],([u,p,f],[d,m,F])=>{p&&(p.instances[f]=u,m&&m!==p&&u&&u===d&&(p.leaveGuards.size||(p.leaveGuards=m.leaveGuards),p.updateGuards.size||(p.updateGuards=m.updateGuards))),u&&p&&(!m||!Mn(p,m)||!d)&&(p.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=r.value,p=e.name,f=i.value,d=f&&f.components[p];if(!d)return ou(n.default,{Component:d,route:u});const m=f.props[p],F=m?m===!0?u.params:typeof m=="function"?m(u):m:null,v=Ye(d,$e({},F,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[p]=null)},ref:c}));if(rn&&v.ref){const w={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Et(v.ref)?v.ref.map(x=>x.i):[v.ref.i]).forEach(x=>{x.__vrv_devtools=w})}return ou(n.default,{Component:v,route:u})||v}}});function ou(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const g0=y0;function v0(){const e=$t(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";ke(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Ks(e,t){const n=$e({},e,{matched:e.matched.map(o=>$0(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function rr(e){return{_custom:{display:e}}}let _0=0;function b0(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=_0++;p1({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((p,f)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ks(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:p,componentInstance:f})=>{if(f.__vrv_devtools){const d=f.__vrv_devtools;p.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Wf})}Et(f.__vrl_devtools)&&(f.__devtoolsApi=r,f.__vrl_devtools.forEach(d=>{let m=Yf,F="";d.isExactActive?(m=Kf,F="This is exactly active"):d.isActive&&(m=zf,F="This link is active"),p.tags.push({label:d.route.path,textColor:0,tooltip:F,backgroundColor:m})}))}),ye(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(i),r.sendInspectorState(i)});const l="router:navigations:"+o;r.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((p,f)=>{r.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:r.now(),data:{error:p},groupId:f.meta.__navigationId}})});let a=0;t.beforeEach((p,f)=>{const d={guard:rr("beforeEach"),from:Ks(f,"Current Location during this navigation"),to:Ks(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:a++}),r.addTimelineEvent({layerId:l,event:{time:r.now(),title:"Start of navigation",subtitle:p.fullPath,data:d,groupId:p.meta.__navigationId}})}),t.afterEach((p,f,d)=>{const m={guard:rr("afterEach")};d?(m.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},m.status=rr("❌")):m.status=rr("✅"),m.from=Ks(f,"Current Location during this navigation"),m.to=Ks(p,"Target location"),r.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:p.fullPath,time:r.now(),data:m,logType:d?"warning":"default",groupId:p.meta.__navigationId}})});const i="router-inspector:"+o;r.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let f=n.getRoutes().filter(d=>!d.parent);f.forEach(Qf),p.filter&&(f=f.filter(d=>ya(d,p.filter.toLowerCase()))),f.forEach(d=>Gf(d,t.currentRoute.value)),p.rootNodes=f.map(Zf)}let u;r.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===i&&c()}),r.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===i){const d=n.getRoutes().find(m=>m.record.__vd_id===p.nodeId);d&&(p.state={options:w0(d)})}}),r.sendInspectorTree(i),r.sendInspectorState(i)})}function x0(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function w0(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${x0(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Wf=15485081,zf=2450411,Kf=8702998,C0=2282478,Yf=16486972,k0=6710886;function Zf(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:C0}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Yf}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Wf}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Kf}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:zf}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:k0});let o=n.__vd_id;return o==null&&(o=String(S0++),n.__vd_id=o),{id:o,label:n.path,tags:t,children:e.children.map(Zf)}}let S0=0;const E0=/^\/(.*)\/([a-z]*)$/;function Gf(e,t){const n=t.matched.length&&Mn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(o=>Mn(o,e.record))),e.children.forEach(o=>Gf(o,t))}function Qf(e){e.__vd_match=!1,e.children.forEach(Qf)}function ya(e,t){const n=String(e.re).match(E0);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>ya(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),l=Ao(r);return!t.startsWith("/")&&(l.includes(t)||r.includes(t))||l.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>ya(a,t))}function $0(e,t){const n={};for(const o in e)t.includes(o)||(n[o]=e[o]);return n}function A0(e){const t=V1(e.routes,e),n=e.parseQuery||i0,o=e.stringifyQuery||Qc,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=zs(),a=zs(),i=zs(),c=Yt(gn);let u=gn;rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=_l.bind(null,$=>""+$),f=_l.bind(null,a0),d=_l.bind(null,Ao);function m($,K){let J,G;return Hf($)?(J=t.getRecordMatcher($),G=K):G=$,t.addRoute(G,J)}function F($){const K=t.getRecordMatcher($);K?t.removeRoute(K):ke(`Cannot remove non-existent route "${String($)}"`)}function g(){return t.getRoutes().map($=>$.record)}function v($){return!!t.getRecordMatcher($)}function w($,K){if(K=$e({},K||c.value),typeof $=="string"){const ce=bl(n,$,K.path),y=t.resolve({path:ce.path},K),_=r.createHref(ce.fullPath);return _.startsWith("//")?ke(`Location "${$}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):y.matched.length||ke(`No match found for location with path "${$}"`),$e(ce,y,{params:d(y.params),hash:Ao(ce.hash),redirectedFrom:void 0,href:_})}let J;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&ke(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),J=$e({},$,{path:bl(n,$.path,K.path).path});else{const ce=$e({},$.params);for(const y in ce)ce[y]==null&&delete ce[y];J=$e({},$,{params:f($.params)}),K.params=f(K.params)}const G=t.resolve(J,K),ve=$.hash||"";ve&&!ve.startsWith("#")&&ke(`A \`hash\` should always start with the character "#". Replace "${ve}" with "#${ve}".`),G.params=p(d(G.params));const Ce=m1(o,$e({},$,{hash:o0(ve),path:G.path})),pe=r.createHref(Ce);return pe.startsWith("//")?ke(`Location "${$}" resolved to "${pe}". A resolved location cannot start with multiple slashes.`):G.matched.length||ke(`No match found for location with path "${"path"in $?$.path:$}"`),$e({fullPath:Ce,hash:ve,query:o===Qc?c0($.query):$.query||{}},G,{redirectedFrom:void 0,href:pe})}function b($){return typeof $=="string"?bl(n,$,c.value.path):$e({},$)}function x($,K){if(u!==$)return Bs(8,{from:K,to:$})}function C($){return V($)}function R($){return C($e(b($),{replace:!0}))}function L($){const K=$.matched[$.matched.length-1];if(K&&K.redirect){const{redirect:J}=K;let G=typeof J=="function"?J($):J;if(typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=b(G):{path:G},G.params={}),!("path"in G)&&!("name"in G))throw ke(`Invalid redirect found:
${JSON.stringify(G,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return $e({query:$.query,hash:$.hash,params:"path"in G?{}:$.params},G)}}function V($,K){const J=u=w($),G=c.value,ve=$.state,Ce=$.force,pe=$.replace===!0,ce=L(J);if(ce)return V($e(b(ce),{state:typeof ce=="object"?$e({},ve,ce.state):ve,force:Ce,replace:pe}),K||J);const y=J;y.redirectedFrom=K;let _;return!Ce&&Jc(o,G,J)&&(_=Bs(16,{to:y,from:G}),Oe(G,G,!0,!1)),(_?Promise.resolve(_):N(y,G)).catch(E=>tn(E)?tn(E,2)?E:ge(E):W(E,y,G)).then(E=>{if(E){if(tn(E,2))return Jc(o,w(E.to),y)&&K&&(K._count=K._count?K._count+1:1)>10?(ke(`Detected an infinite redirection in a navigation guard when going from "${G.fullPath}" to "${y.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):V($e({replace:pe},b(E.to),{state:typeof E.to=="object"?$e({},ve,E.to.state):ve,force:Ce}),K||y)}else E=ae(y,G,!0,pe,ve);return Y(y,G,E),E})}function T($,K){const J=x($,K);return J?Promise.reject(J):Promise.resolve()}function N($,K){let J;const[G,ve,Ce]=T0($,K);J=xl(G.reverse(),"beforeRouteLeave",$,K);for(const ce of G)ce.leaveGuards.forEach(y=>{J.push(xn(y,$,K))});const pe=T.bind(null,$,K);return J.push(pe),gs(J).then(()=>{J=[];for(const ce of l.list())J.push(xn(ce,$,K));return J.push(pe),gs(J)}).then(()=>{J=xl(ve,"beforeRouteUpdate",$,K);for(const ce of ve)ce.updateGuards.forEach(y=>{J.push(xn(y,$,K))});return J.push(pe),gs(J)}).then(()=>{J=[];for(const ce of $.matched)if(ce.beforeEnter&&!K.matched.includes(ce))if(Et(ce.beforeEnter))for(const y of ce.beforeEnter)J.push(xn(y,$,K));else J.push(xn(ce.beforeEnter,$,K));return J.push(pe),gs(J)}).then(()=>($.matched.forEach(ce=>ce.enterCallbacks={}),J=xl(Ce,"beforeRouteEnter",$,K),J.push(pe),gs(J))).then(()=>{J=[];for(const ce of a.list())J.push(xn(ce,$,K));return J.push(pe),gs(J)}).catch(ce=>tn(ce,8)?ce:Promise.reject(ce))}function Y($,K,J){for(const G of i.list())G($,K,J)}function ae($,K,J,G,ve){const Ce=x($,K);if(Ce)return Ce;const pe=K===gn,ce=rn?history.state:{};J&&(G||pe?r.replace($.fullPath,$e({scroll:pe&&ce&&ce.scroll},ve)):r.push($.fullPath,ve)),c.value=$,Oe($,K,J,pe),ge()}let U;function ie(){U||(U=r.listen(($,K,J)=>{if(!mn.listening)return;const G=w($),ve=L(G);if(ve){V($e(ve,{replace:!0}),G).catch(uo);return}u=G;const Ce=c.value;rn&&w1(Xc(Ce.fullPath,J.delta),el()),N(G,Ce).catch(pe=>tn(pe,12)?pe:tn(pe,2)?(V(pe.to,G).then(ce=>{tn(ce,20)&&!J.delta&&J.type===$o.pop&&r.go(-1,!1)}).catch(uo),Promise.reject()):(J.delta&&r.go(-J.delta,!1),W(pe,G,Ce))).then(pe=>{pe=pe||ae(G,Ce,!1),pe&&(J.delta&&!tn(pe,8)?r.go(-J.delta,!1):J.type===$o.pop&&tn(pe,20)&&r.go(-1,!1)),Y(G,Ce,pe)}).catch(uo)}))}let Re=zs(),Je=zs(),Be;function W($,K,J){ge($);const G=Je.list();return G.length?G.forEach(ve=>ve($,K,J)):(ke("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function ne(){return Be&&c.value!==gn?Promise.resolve():new Promise(($,K)=>{Re.add([$,K])})}function ge($){return Be||(Be=!$,ie(),Re.list().forEach(([K,J])=>$?J($):K()),Re.reset()),$}function Oe($,K,J,G){const{scrollBehavior:ve}=e;if(!rn||!ve)return Promise.resolve();const Ce=!J&&C1(Xc($.fullPath,0))||(G||!J)&&history.state&&history.state.scroll||null;return Qe().then(()=>ve($,K,Ce)).then(pe=>pe&&x1(pe)).catch(pe=>W(pe,$,K))}const vt=$=>r.go($);let nt;const dt=new Set,mn={currentRoute:c,listening:!0,addRoute:m,removeRoute:F,hasRoute:v,getRoutes:g,resolve:w,options:e,push:C,replace:R,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:l.add,beforeResolve:a.add,afterEach:i.add,onError:Je.add,isReady:ne,install($){const K=this;$.component("RouterLink",h0),$.component("RouterView",g0),$.config.globalProperties.$router=K,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>k(c)}),rn&&!nt&&c.value===gn&&(nt=!0,C(r.location).catch(ve=>{ke("Unexpected error when starting the router:",ve)}));const J={};for(const ve in gn)J[ve]=A(()=>c.value[ve]);$.provide(ui,K),$.provide(Uf,je(J)),$.provide(Fa,c);const G=$.unmount;dt.add($),$.unmount=function(){dt.delete($),dt.size<1&&(u=gn,U&&U(),U=null,c.value=gn,nt=!1,Be=!1),G()},rn&&b0($,K,t)}};return mn}function gs(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function T0(e,t){const n=[],o=[],r=[],l=Math.max(t.matched.length,e.matched.length);for(let a=0;a<l;a++){const i=t.matched[a];i&&(e.matched.find(u=>Mn(u,i))?o.push(i):n.push(i));const c=e.matched[a];c&&(t.matched.find(u=>Mn(u,c))||r.push(c))}return[n,o,r]}const wl=X(!1),fo=X(!1),ks=X(!1),R0=X(!0),ga=Cv({xs:460,...vv}),ls=s1(),ed=Xv(),O0=A(()=>ls.height.value-ls.width.value/Tn>180),td=Vv(Gt?document.body:null),Os=gv(),P0=A(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Os.value)==null?void 0:e.tagName)||"")||((t=Os.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),I0=A(()=>{var e;return["BUTTON","A"].includes(((e=Os.value)==null?void 0:e.tagName)||"")});Vt("slidev-camera","default");Vt("slidev-mic","default");const hr=Vt("slidev-scale",0),ct=Vt("slidev-show-overview",!1),Cl=Vt("slidev-presenter-cursor",!0),ru=Vt("slidev-show-editor",!1);Vt("slidev-editor-width",Gt?window.innerWidth*.4:100);const nd=Rf(ct);function lu(e,t,n,o=r=>r){return e*o(.5-t*(.5-n))}function L0(e){return[-e[0],-e[1]]}function Ht(e,t){return[e[0]+t[0],e[1]+t[1]]}function Rt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Mt(e,t){return[e[0]*t,e[1]*t]}function B0(e,t){return[e[0]/t,e[1]/t]}function Ys(e){return[e[1],-e[0]]}function au(e,t){return e[0]*t[0]+e[1]*t[1]}function M0(e,t){return e[0]===t[0]&&e[1]===t[1]}function H0(e){return Math.hypot(e[0],e[1])}function j0(e){return e[0]*e[0]+e[1]*e[1]}function iu(e,t){return j0(Rt(e,t))}function sd(e){return B0(e,H0(e))}function N0(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Zs(e,t,n){let o=Math.sin(n),r=Math.cos(n),l=e[0]-t[0],a=e[1]-t[1],i=l*r-a*o,c=l*o+a*r;return[i+t[0],c+t[1]]}function va(e,t,n){return Ht(e,Mt(Rt(t,e),n))}function cu(e,t,n){return Ht(e,Mt(t,n))}var{min:vs,PI:D0}=Math,uu=.275,Gs=D0+1e-4;function V0(e,t={}){let{size:n=16,smoothing:o=.5,thinning:r=.5,simulatePressure:l=!0,easing:a=W=>W,start:i={},end:c={},last:u=!1}=t,{cap:p=!0,easing:f=W=>W*(2-W)}=i,{cap:d=!0,easing:m=W=>--W*W*W+1}=c;if(e.length===0||n<=0)return[];let F=e[e.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(n,F):i.taper,v=c.taper===!1?0:c.taper===!0?Math.max(n,F):c.taper,w=Math.pow(n*o,2),b=[],x=[],C=e.slice(0,10).reduce((W,ne)=>{let ge=ne.pressure;if(l){let Oe=vs(1,ne.distance/n),vt=vs(1,1-Oe);ge=vs(1,W+(vt-W)*(Oe*uu))}return(W+ge)/2},e[0].pressure),R=lu(n,r,e[e.length-1].pressure,a),L,V=e[0].vector,T=e[0].point,N=T,Y=T,ae=N,U=!1;for(let W=0;W<e.length;W++){let{pressure:ne}=e[W],{point:ge,vector:Oe,distance:vt,runningLength:nt}=e[W];if(W<e.length-1&&F-nt<3)continue;if(r){if(l){let Ce=vs(1,vt/n),pe=vs(1,1-Ce);ne=vs(1,C+(pe-C)*(Ce*uu))}R=lu(n,r,ne,a)}else R=n/2;L===void 0&&(L=R);let dt=nt<g?f(nt/g):1,mn=F-nt<v?m((F-nt)/v):1;R=Math.max(.01,R*Math.min(dt,mn));let $=(W<e.length-1?e[W+1]:e[W]).vector,K=W<e.length-1?au(Oe,$):1,J=au(Oe,V)<0&&!U,G=K!==null&&K<0;if(J||G){let Ce=Mt(Ys(V),R);for(let pe=1/13,ce=0;ce<=1;ce+=pe)Y=Zs(Rt(ge,Ce),ge,Gs*ce),b.push(Y),ae=Zs(Ht(ge,Ce),ge,Gs*-ce),x.push(ae);T=Y,N=ae,G&&(U=!0);continue}if(U=!1,W===e.length-1){let Ce=Mt(Ys(Oe),R);b.push(Rt(ge,Ce)),x.push(Ht(ge,Ce));continue}let ve=Mt(Ys(va($,Oe,K)),R);Y=Rt(ge,ve),(W<=1||iu(T,Y)>w)&&(b.push(Y),T=Y),ae=Ht(ge,ve),(W<=1||iu(N,ae)>w)&&(x.push(ae),N=ae),C=ne,V=Oe}let ie=e[0].point.slice(0,2),Re=e.length>1?e[e.length-1].point.slice(0,2):Ht(e[0].point,[1,1]),Je=[],Be=[];if(e.length===1){if(!(g||v)||u){let W=cu(ie,sd(Ys(Rt(ie,Re))),-(L||R)),ne=[];for(let ge=1/13,Oe=ge;Oe<=1;Oe+=ge)ne.push(Zs(W,ie,Gs*2*Oe));return ne}}else{if(!(g||v&&e.length===1))if(p)for(let ne=1/13,ge=ne;ge<=1;ge+=ne){let Oe=Zs(x[0],ie,Gs*ge);Je.push(Oe)}else{let ne=Rt(b[0],x[0]),ge=Mt(ne,.5),Oe=Mt(ne,.51);Je.push(Rt(ie,ge),Rt(ie,Oe),Ht(ie,Oe),Ht(ie,ge))}let W=Ys(L0(e[e.length-1].vector));if(v||g&&e.length===1)Be.push(Re);else if(d){let ne=cu(Re,W,R);for(let ge=1/29,Oe=ge;Oe<1;Oe+=ge)Be.push(Zs(ne,Re,Gs*3*Oe))}else Be.push(Ht(Re,Mt(W,R)),Ht(Re,Mt(W,R*.99)),Rt(Re,Mt(W,R*.99)),Rt(Re,Mt(W,R)))}return b.concat(Be,x.reverse(),Je)}function J0(e,t={}){var n;let{streamline:o=.5,size:r=16,last:l=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y:F,pressure:g=.5})=>[m,F,g]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let F=1;F<5;F++)i.push(va(i[0],m,F/4))}i.length===1&&(i=[...i,[...Ht(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,f=c[0],d=i.length-1;for(let m=1;m<i.length;m++){let F=l&&m===d?i[m].slice(0,2):va(f.point,i[m],a);if(M0(f.point,F))continue;let g=N0(F,f.point);if(p+=g,m<d&&!u){if(p<r)continue;u=!0}f={point:F,pressure:i[m][2]>=0?i[m][2]:.5,vector:sd(Rt(f.point,F)),distance:g,runningLength:p},c.push(f)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function q0(e,t={}){return V0(J0(e,t),t)}var X0=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let o=0,r=n.length;o<r;o++)n[o](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>t!==r)}}});function Or(e,t){return e-t}function U0(e){return e<0?-1:1}function Pr(e){return[Math.abs(e),U0(e)]}function od(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var W0=2,ln=W0,js=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*o,y:(e.pageY-r.top)*o,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const l=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",o.fill??"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(ln))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},z0=class extends js{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=q0(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[r,l],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(r,l,(r+c)/2,(l+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},K0=class extends js{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Pr(e.x-this.start.x),[o,r]=Pr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,a]=[this.start.x,this.start.x+t*n].sort(Or),[i,c]=[this.start.y,this.start.y+o*r].sort(Or);this.attr("cx",(l+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-l)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function rd(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),n.appendChild(o),n}var Y0=class extends js{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=od(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(rd(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let l=o/r;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+r*l,n=this.start.y+r):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Z0=class extends js{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Pr(e.x-this.start.x),[o,r]=Pr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,a]=[this.start.x,this.start.x+t*n].sort(Or),[i,c]=[this.start.y,this.start.y+o*r].sort(Or);this.attr("x",l),this.attr("y",i),this.attr("width",a-l),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function G0(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function Q0(e,t,n){let o=t.x,r=t.y,l=n.x-o,a=n.y-r;if(l!==0||a!==0){const i=((e.x-o)*l+(e.y-r)*a)/(l*l+a*a);i>1?(o=n.x,r=n.y):i>0&&(o+=l*i,r+=a*i)}return l=e.x-o,a=e.y-r,l*l+a*a}function e_(e,t){let n=e[0];const o=[n];let r;for(let l=1,a=e.length;l<a;l++)r=e[l],G0(r,n)>t&&(o.push(r),n=r);return n!==r&&r&&o.push(r),o}function _a(e,t,n,o,r){let l=o,a=0;for(let i=t+1;i<n;i++){const c=Q0(e[i],e[t],e[n]);c>l&&(a=i,l=c)}l>o&&(a-t>1&&_a(e,t,a,o,r),r.push(e[a]),n-a>1&&_a(e,a,n,o,r))}function t_(e,t){const n=e.length-1,o=[e[0]];return _a(e,0,n,t,o),o.push(e[n]),o}function pu(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:e_(e,o),e=t_(e,o),e}var n_=class extends js{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=od();const t=rd(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=pu(this.points,1,!0),this.count=0),this.attr("d",du(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",du(pu(this.points,1,!0))),!e.getTotalLength()))}};function s_(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(n**2+o**2),angle:Math.atan2(o,n)}}function fu(e,t,n,o){const r=t||e,l=n||e,a=.2,i=s_(r,l),c=i.angle+(o?Math.PI:0),u=i.length*a,p=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:p,y:f}}function o_(e,t,n){const o=fu(n[t-1],n[t-2],e),r=fu(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(ln)},${o.y.toFixed(ln)} ${r.x.toFixed(ln)},${r.y.toFixed(ln)} ${e.x.toFixed(ln)},${e.y.toFixed(ln)}`}function du(e){return e.reduce((t,n,o,r)=>o===0?`M ${n.x.toFixed(ln)},${n.y.toFixed(ln)}`:`${t} ${o_(n,o,r)}`,"")}var r_=class extends js{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const l=n[r];if(l.getTotalLength){const a=l.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=l.getPointAtLength(a*i/this.pathSubFactor),u=l.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,r=t.x1,l=t.x2,a=e.y1,i=e.y2,c=t.y1,u=t.y2,p=(n-o)*(c-u)-(a-i)*(r-l),f=(n*i-a*o)*(r-l)-(n-o)*(r*u-c*l),d=(n*i-a*o)*(c-u)-(a-i)*(r*u-c*l),m=(F,g,v)=>F>=g&&F<=v?!0:F>=v&&F<=g;if(p===0)return!1;{const F={x:f/p,y:d/p};return m(F.x,n,o)&&m(F.y,a,i)&&m(F.x,r,l)&&m(F.y,c,u)}}};function l_(e){return{draw:new n_(e),stylus:new z0(e),line:new Y0(e),rectangle:new Z0(e),ellipse:new K0(e),eraseLine:new r_(e)}}var a_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=X0(),this._models=l_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function i_(e){return new a_(e)}const ba=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Gn=Vt("slidev-drawing-enabled",!1);Vt("slidev-drawing-pinned",!1);const c_=X(!1),u_=X(!1),p_=X(!1),To=X(!1),Ss=Qg(Vt("slidev-drawing-brush",{color:ba[0],size:4,mode:"stylus"})),hu=X("stylus"),ld=A(()=>Ee.drawings.syncAll||Ct.value);let Ro=!1;const Qs=A({get(){return hu.value},set(e){hu.value=e,e==="arrow"?(Ss.mode="line",Ss.arrowEnd=!0):(Ss.mode=e,Ss.arrowEnd=!1)}}),f_=je({brush:Ss,acceptsInputTypes:A(()=>Gn.value&&(!Ee.drawings.presenterOnly||Ct.value)?void 0:["pen"]),coordinateTransform:!1}),ft=Jr(i_(f_));function d_(){ft.clear(),ld.value&&Ef(Ve.value,"")}function pi(){var e;u_.value=ft.canRedo(),c_.value=ft.canUndo(),p_.value=!!((e=ft.el)!=null&&e.children.length)}function h_(e){Ro=!0;const t=Tr[e||Ve.value];t!=null?ft.load(t):ft.clear(),pi(),Ro=!1}ft.on("changed",()=>{if(pi(),!Ro){const e=ft.dump(),t=Ve.value;(Tr[t]||"")!==e&&ld.value&&Ef(t,ft.dump())}});Dg(e=>{Ro=!0,e[Ve.value]!=null&&ft.load(e[Ve.value]||""),Ro=!1,pi()});Qe(()=>{ye(Ve,()=>{ft.mounted&&h_()},{immediate:!0})});ft.on("start",()=>To.value=!0);ft.on("end",()=>To.value=!1);window.addEventListener("keydown",e=>{if(!Gn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ft.redo():ft.undo():e.code==="Escape"?Gn.value=!1:e.code==="KeyL"&&t?Qs.value="line":e.code==="KeyA"&&t?Qs.value="arrow":e.code==="KeyS"&&t?Qs.value="stylus":e.code==="KeyR"&&t?Qs.value="rectangle":e.code==="KeyE"&&t?Qs.value="ellipse":e.code==="KeyC"&&t?d_():e.code.startsWith("Digit")&&t&&+e.code[5]<=ba.length?Ss.color=ba[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function We(...e){return A(()=>e.every(t=>Qt(t)))}function bt(e){return A(()=>!Qt(e))}const mu=Lv(),kl=Vt("slidev-color-schema","auto"),xa=A(()=>Ee.colorSchema!=="auto"),fi=A({get(){return xa.value?Ee.colorSchema==="dark":kl.value==="auto"?mu.value:kl.value==="dark"},set(e){xa.value||(kl.value=e===mu.value?"auto":e?"dark":"light")}}),ad=Rf(fi);Gt&&ye(fi,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const mr=X(1),Fr=A(()=>Xe.length-1),St=X(0),di=X(0);function m_(){St.value>mr.value&&(St.value-=1)}function F_(){St.value<Fr.value&&(St.value+=1)}function y_(){if(St.value>mr.value){let e=St.value-di.value;e<mr.value&&(e=mr.value),St.value=e}}function g_(){if(St.value<Fr.value){let e=St.value+di.value;e>Fr.value&&(e=Fr.value),St.value=e}}function v_(){const{escape:e,space:t,shift:n,left:o,right:r,up:l,down:a,enter:i,d:c,g:u,o:p}=ed;let f=[{name:"next_space",key:We(t,bt(n)),fn:On,autoRepeat:!0},{name:"prev_space",key:We(t,n),fn:Pn,autoRepeat:!0},{name:"next_right",key:We(r,bt(n),bt(ct)),fn:On,autoRepeat:!0},{name:"prev_left",key:We(o,bt(n),bt(ct)),fn:Pn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:On,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Pn,autoRepeat:!0},{name:"next_down",key:We(a,bt(ct)),fn:Po,autoRepeat:!0},{name:"prev_up",key:We(l,bt(ct)),fn:()=>Io(!1),autoRepeat:!0},{name:"next_shift",key:We(r,n),fn:Po,autoRepeat:!0},{name:"prev_shift",key:We(o,n),fn:()=>Io(!1),autoRepeat:!0},{name:"toggle_dark",key:We(c,bt(Gn)),fn:ad},{name:"toggle_overview",key:We(p,bt(Gn)),fn:nd},{name:"hide_overview",key:We(e,bt(Gn)),fn:()=>ct.value=!1},{name:"goto",key:We(u,bt(Gn)),fn:()=>ks.value=!ks.value},{name:"next_overview",key:We(r,ct),fn:F_},{name:"prev_overview",key:We(o,ct),fn:m_},{name:"up_overview",key:We(l,ct),fn:y_},{name:"down_overview",key:We(a,ct),fn:g_},{name:"goto_from_overview",key:We(i,ct),fn:()=>{Ms(St.value),ct.value=!1}}];const d=new Set(f.map(F=>F.name));if(f.filter(F=>F.name&&d.has(F.name)).length===0){const F=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(F),console.warn(F)}return f}const id=We(bt(P0),bt(I0),R0);function __(e,t,n=!1){typeof e=="string"&&(e=ed[e]);const o=We(e,id);let r=0,l;const a=()=>{if(clearTimeout(l),!o.value){r=0;return}n&&(l=setTimeout(a,Math.max(1e3-r*250,150)),r++),t()};return ye(o,a,{flush:"sync"})}function b_(e,t){return yv(e,n=>{id.value&&(n.repeat||t())})}function x_(){const e=v_();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&__(n.key,n.fn,n.autoRepeat)}),b_("f",()=>td.toggle())}const w_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C_=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),k_=[C_];function S_(e,t){return S(),M("svg",w_,k_)}const E_={name:"carbon-close",render:S_};function hi(e,t=""){var r,l;const n=["slidev-page",t],o=(l=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:l.no;return o!=null&&n.push(`slidev-page-${o}`),n.filter(Boolean).join(" ")}const $_=we({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;Z(re);const n=X(),o=Dv(n),r=A(()=>t.width?t.width:o.width.value),l=A(()=>t.width?t.width/Tn:o.height.value);t.width&&fs(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${l.value}px`)});const a=A(()=>r.value/l.value),i=A(()=>t.scale&&!un.value?t.scale:a.value<Tn?r.value/Rn:l.value*Tn/Rn),c=A(()=>({height:`${li}px`,width:`${Rn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=A(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return wt(Cf,i),(p,f)=>(S(),M("div",{id:"slide-container",ref_key:"root",ref:n,class:Le(k(u))},[s("div",{id:"slide-content",style:ot(k(c))},[gt(p.$slots,"default")],4),gt(p.$slots,"controls")],2))}});const le=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},cd=le($_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlideContainer.vue"]]),mi=we({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=zt(e,"clicks",t),o=zt(e,"clicksElements",t),r=zt(e,"clicksDisabled",t),l=zt(e,"clicksOrderMap",t);o.value.length=0,wt(Sg,e.route),wt(Eg,e.context),wt(io,n),wt(co,r),wt(Kn,o),wt(la,l)},render(){var e,t;return this.$props.is?Ye(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),A_=["innerHTML"],T_=we({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return Z(re),(t,n)=>k(Tr)[e.page]?(S(),M("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:k(Tr)[e.page]},null,8,A_)):Fe("v-if",!0)}}),R_=le(T_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),O_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},P_=["onClick"],I_=we({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;Z(re);const o=zt(n,"modelValue",t);function r(){o.value=!1}function l(m){Ms(m),r()}function a(m){return m===St.value}const i=ga.smaller("xs"),c=ga.smaller("sm"),u=4*16*2,p=2*16,f=A(()=>i.value?ls.width.value-u:c.value?(ls.width.value-u-p)/2:300),d=A(()=>Math.floor((ls.width.value-u)/(f.value+p)));return fs(()=>{St.value=Ve.value,di.value=d.value}),(m,F)=>{const g=E_;return S(),M(Se,null,[An(s("div",O_,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ot(`grid-template-columns: repeat(auto-fit,minmax(${k(f)}px,1fr))`)},[(S(!0),M(Se,null,Hs(k(Xe).slice(0,-1),(v,w)=>(S(),M("div",{key:v.path,class:"relative"},[s("div",{class:Le(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(w+1),"border-gray-400":!a(w+1)}]),style:ot(k(ai)),onClick:b=>l(+v.path)},[(S(),oe(cd,{key:v.path,width:k(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:de(()=>[z(k(mi),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:Le(k(hi)(v)),route:v,context:"overview"},null,8,["is","class","route"]),z(R_,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],14,P_),s("div",{class:"absolute top-0 opacity-50",style:ot(`left: ${k(f)+5}px`)},as(w+1),5)]))),128))],4)],512),[[mf,k(o)]]),k(o)?(S(),M("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[z(g)])):Fe("v-if",!0)],64)}}});const L_=le(I_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),B_="/react-shared-ppt/assets/logo-b72bde5d.png",M_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},H_=we({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;Z(re);const o=zt(n,"modelValue",t);function r(){o.value=!1}return(l,a)=>(S(),oe(Hp,null,[k(o)?(S(),M("div",M_,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>r())}),s("div",{class:Le(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[gt(l.$slots,"default")],2)])):Fe("v-if",!0)],1024))}}),j_=le(H_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Modal.vue"]]),N_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},D_=["innerHTML"],V_=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:B_,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),h("dev ")])])],-1),J_=we({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;Z(re);const o=zt(n,"modelValue",t),r=A(()=>typeof Ee.info=="string");return(l,a)=>(S(),oe(j_,{modelValue:k(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Ae(o)?o.value=i:null),class:"px-6 py-4"},{default:de(()=>[s("div",N_,[k(r)?(S(),M("div",{key:0,class:"mb-4",innerHTML:k(Ee).info},null,8,D_)):Fe("v-if",!0),V_])]),_:1},8,["modelValue"]))}});const q_=le(J_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/InfoDialog.vue"]]),X_=["disabled","onKeydown"],U_=we({__name:"Goto",setup(e){Z(re);const t=X(),n=X(""),o=A(()=>{if(n.value.startsWith("/"))return!!Xe.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=Cd.value}});function r(){o.value&&(n.value.startsWith("/")?Ms(n.value.substring(1)):Ms(+n.value)),l()}function l(){ks.value=!1}return ye(ks,async a=>{var i,c;a?(await Qe(),n.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),ye(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,i)=>(S(),M("div",{id:"slidev-goto-dialog",class:Le(["fixed right-5 bg-main transform transition-all",k(ks)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[An(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value=c),type:"text",disabled:!k(ks),class:Le(["outline-none bg-transparent",{"text-red-400":!k(o)&&n.value}]),placeholder:"Goto...",onKeydown:[vc(r,["enter"]),vc(l,["escape"])],onBlur:l},null,42,X_),[[ky,n.value]])],2))}}),W_=le(U_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Goto.vue"]]),z_=we({__name:"Controls",setup(e){Z(re);const t=Yt(),n=Yt();return(o,r)=>(S(),M(Se,null,[z(L_,{modelValue:k(ct),"onUpdate:modelValue":r[0]||(r[0]=l=>Ae(ct)?ct.value=l:null)},null,8,["modelValue"]),z(W_),k(t)?(S(),oe(k(t),{key:0})):Fe("v-if",!0),k(n)?(S(),oe(k(n),{key:1,modelValue:k(wl),"onUpdate:modelValue":r[1]||(r[1]=l=>Ae(wl)?wl.value=l:null)},null,8,["modelValue"])):Fe("v-if",!0),k(Ee).info?(S(),oe(q_,{key:2,modelValue:k(fo),"onUpdate:modelValue":r[2]||(r[2]=l=>Ae(fo)?fo.value=l:null)},null,8,["modelValue"])):Fe("v-if",!0)],64))}}),K_=le(z_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Controls.vue"]]),Y_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z_=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),G_=[Z_];function Q_(e,t){return S(),M("svg",Y_,G_)}const e8={name:"carbon-settings-adjust",render:Q_},t8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n8=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),s8=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),o8=[n8,s8];function r8(e,t){return S(),M("svg",t8,o8)}const l8={name:"carbon-information",render:r8},a8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i8=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),c8=[i8];function u8(e,t){return S(),M("svg",a8,c8)}const p8={name:"carbon-download",render:u8},f8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d8=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),h8=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),m8=[d8,h8];function F8(e,t){return S(),M("svg",f8,m8)}const y8={name:"carbon-user-speaker",render:F8},g8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v8=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),_8=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),b8=[v8,_8];function x8(e,t){return S(),M("svg",g8,b8)}const w8={name:"carbon-presentation-file",render:x8},C8={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},k8=s("g",{fill:"currentColor"},[s("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),s("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),S8=[k8];function E8(e,t){return S(),M("svg",C8,S8)}const $8={name:"ph-cursor-duotone",render:E8},A8={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},T8=s("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),R8=[T8];function O8(e,t){return S(),M("svg",A8,R8)}const ud={name:"ph-cursor-fill",render:O8},P8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I8=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),L8=[I8];function B8(e,t){return S(),M("svg",P8,L8)}const M8={name:"carbon-sun",render:B8},H8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j8=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),N8=[j8];function D8(e,t){return S(),M("svg",H8,N8)}const V8={name:"carbon-moon",render:D8},J8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},q8=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),X8=[q8];function U8(e,t){return S(),M("svg",J8,X8)}const W8={name:"carbon-apps",render:U8},z8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K8=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Y8=[K8];function Z8(e,t){return S(),M("svg",z8,Y8)}const G8={name:"carbon-arrow-right",render:Z8},Q8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e2=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),t2=[e2];function n2(e,t){return S(),M("svg",Q8,t2)}const s2={name:"carbon-arrow-left",render:n2},o2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r2=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),l2=[r2];function a2(e,t){return S(),M("svg",o2,l2)}const i2={name:"carbon-maximize",render:a2},c2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u2=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),p2=[u2];function f2(e,t){return S(),M("svg",c2,p2)}const d2={name:"carbon-minimize",render:f2},h2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m2=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),F2=[m2];function y2(e,t){return S(),M("svg",h2,F2)}const g2={name:"carbon-checkmark",render:y2},v2={class:"select-list"},_2={class:"title"},b2={class:"items"},x2=["onClick"],w2=we({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;Z(re);const o=zt(n,"modelValue",t,{passive:!0});return(r,l)=>{const a=g2;return S(),M("div",v2,[s("div",_2,as(e.title),1),s("div",b2,[(S(!0),M(Se,null,Hs(e.items,i=>(S(),M("div",{key:i.value,class:Le(["item",{active:k(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[z(a,{class:Le(["text-green-500",{"opacity-0":k(o)!==i.value}])},null,8,["class"]),h(" "+as(i.display||i.value),1)],10,x2))),128))])])}}});const C2=le(w2,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SelectList.vue"]]),k2={class:"text-sm"},S2=we({__name:"Settings",setup(e){Z(re);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(S(),M("div",k2,[z(C2,{modelValue:k(hr),"onUpdate:modelValue":o[0]||(o[0]=r=>Ae(hr)?hr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),E2=le(S2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Settings.vue"]]),$2={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},A2=we({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;Z(re);const o=zt(n,"modelValue",t,{passive:!0}),r=X();return mv(r,()=>{o.value=!1}),(l,a)=>(S(),M("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Le({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!k(o))},[gt(l.$slots,"button",{class:Le({disabled:e.disabled})})],2),(S(),oe(Hp,null,[k(o)?(S(),M("div",$2,[gt(l.$slots,"menu")])):Fe("v-if",!0)],1024))],512))}}),T2=le(A2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/MenuButton.vue"]]),R2={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},O2={__name:"VerticalDivider",setup(e){return Z(re),(t,n)=>(S(),M("div",R2))}},Sl=le(O2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),P2={render(){return[]}},I2={class:"slidev-icon-btn"},L2={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},B2={class:"my-auto"},M2={class:"opacity-50"},H2=we({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;Z(re);const n=ga.smaller("md"),{isFullscreen:o,toggle:r}=td,l=A(()=>Ca.value?`?password=${Ca.value}`:""),a=A(()=>`/presenter/${Ve.value}${l.value}`),i=A(()=>`/${Ve.value}${l.value}`),c=X(),u=()=>{c.value&&Os.value&&c.value.contains(Os.value)&&Os.value.blur()},p=A(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Yt();return Yt(),(d,m)=>{const F=d2,g=i2,v=s2,w=G8,b=W8,x=V8,C=M8,R=ud,L=$8,V=w8,T=Bn("RouterLink"),N=y8,Y=p8,ae=l8,U=e8;return S(),M("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",k(p)]),onMouseleave:u},[k(Vn)?Fe("v-if",!0):(S(),M("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...ie)=>k(r)&&k(r)(...ie))},[k(o)?(S(),oe(F,{key:0})):(S(),oe(g,{key:1}))])),s("button",{class:Le(["slidev-icon-btn",{disabled:!k(f6)}]),onClick:m[1]||(m[1]=(...ie)=>k(Pn)&&k(Pn)(...ie))},[z(v)],2),s("button",{class:Le(["slidev-icon-btn",{disabled:!k(p6)}]),title:"Next",onClick:m[2]||(m[2]=(...ie)=>k(On)&&k(On)(...ie))},[z(w)],2),k(Vn)?Fe("v-if",!0):(S(),M("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=ie=>k(nd)())},[z(b)])),k(xa)?Fe("v-if",!0):(S(),M("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=ie=>k(ad)())},[k(fi)?(S(),oe(x,{key:0})):(S(),oe(C,{key:1}))])),z(Sl),k(Vn)?Fe("v-if",!0):(S(),M(Se,{key:3},[!k(Ct)&&!k(n)&&k(f)?(S(),M(Se,{key:0},[z(k(f)),z(Sl)],64)):Fe("v-if",!0),k(Ct)?(S(),M("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=ie=>Cl.value=!k(Cl))},[k(Cl)?(S(),oe(R,{key:0})):(S(),oe(L,{key:1,class:"opacity-50"}))])):Fe("v-if",!0)],64)),Fe("v-if",!0),k(Vn)?Fe("v-if",!0):(S(),M(Se,{key:5},[k(Ct)?(S(),oe(T,{key:0,to:k(i),class:"slidev-icon-btn",title:"Play Mode"},{default:de(()=>[z(V)]),_:1},8,["to"])):Fe("v-if",!0),k(a6)?(S(),oe(T,{key:1,to:k(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:de(()=>[z(N)]),_:1},8,["to"])):Fe("v-if",!0),Fe("v-if",!0)],64)),(S(),M(Se,{key:6},[k(Ee).download?(S(),M("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...ie)=>k(ka)&&k(ka)(...ie))},[z(Y)])):Fe("v-if",!0)],64)),!k(Ct)&&k(Ee).info&&!k(Vn)?(S(),M("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=ie=>fo.value=!k(fo))},[z(ae)])):Fe("v-if",!0),!k(Ct)&&!k(Vn)?(S(),oe(T2,{key:8},{button:de(()=>[s("button",I2,[z(U)])]),menu:de(()=>[z(E2)]),_:1})):Fe("v-if",!0),k(Vn)?Fe("v-if",!0):(S(),oe(Sl,{key:9})),s("div",L2,[s("div",B2,[h(as(k(Ve))+" ",1),s("span",M2,"/ "+as(k(Cd)),1)])]),z(k(P2))],34)],512)}}}),j2=le(H2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/NavControls.vue"]]),pd={render(){return[]}},fd={render(){return[]}},N2={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},D2=we({__name:"PresenterMouse",setup(e){return Z(re),(t,n)=>{const o=ud;return k(vl).cursor?(S(),M("div",N2,[z(o,{class:"absolute",style:ot({left:`${k(vl).cursor.x}%`,top:`${k(vl).cursor.y}%`})},null,8,["style"])])):Fe("v-if",!0)}}}),V2=le(D2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),J2=we({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){Z(re),ye(ut,()=>{var n,o;(n=ut.value)!=null&&n.meta&&ut.value.meta.preload!==!1&&(ut.value.meta.__preloaded=!0),(o=El.value)!=null&&o.meta&&El.value.meta.preload!==!1&&(El.value.meta.__preloaded=!0)},{immediate:!0}),Yt();const t=A(()=>Xe.filter(n=>{var o;return((o=n.meta)==null?void 0:o.__preloaded)||n===ut.value}));return(n,o)=>(S(),M(Se,null,[Fe(" Global Bottom "),z(k(fd)),Fe(" Slides "),z(vy,et(k(m6),{id:"slideshow",tag:"div"}),{default:de(()=>[(S(!0),M(Se,null,Hs(k(t),r=>{var l;return An((S(),oe(k(mi),{key:r.path,is:r==null?void 0:r.component,clicks:r===k(ut)?k(Ot):0,"clicks-elements":((l=r.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Le(k(hi)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[mf,r===k(ut)]])}),128))]),_:1},16),Fe(" Global Top "),z(k(pd)),Fe("v-if",!0),k(Ct)?Fe("v-if",!0):(S(),oe(V2,{key:1}))],64))}});const q2=le(J2,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesShow.vue"]]),X2=we({__name:"PrintStyle",setup(e){Z(re);function t(n,{slots:o}){if(o.default)return Ye("style",o.default())}return(n,o)=>(S(),oe(t,null,{default:de(()=>[h(" @page { size: "+as(k(Rn))+"px "+as(k(li))+"px; margin: 0px; } ",1)]),_:1}))}}),dd=le(X2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintStyle.vue"]]),U2=we({__name:"Play",setup(e){Z(re),x_();const t=X();function n(l){var a;ru.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?On():Pn())}F6(t);const o=A(()=>O0.value||ru.value);Yt();const r=Yt();return(l,a)=>(S(),M(Se,null,[k(un)?(S(),oe(dd,{key:0})):Fe("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:ot(k(ai))},[z(cd,{class:"w-full h-full",style:ot({background:"var(--slidev-slide-container-background, black)"}),width:k(un)?k(ls).width.value:void 0,scale:k(hr),onPointerdown:n},{default:de(()=>[z(q2,{context:"slide"})]),controls:de(()=>[s("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[k(o)?"opacity-100 right-0":"opacity-0 p-2",k(To)?"pointer-events-none":""]])},[z(j2,{class:"m-auto",persist:k(o)},null,8,["persist"])],2),Fe("v-if",!0)]),_:1},8,["style","width","scale"]),Fe("v-if",!0)],4),z(K_)],64))}}),W2=le(U2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function hd(e){return typeof e>"u"||e===null}function z2(e){return typeof e=="object"&&e!==null}function K2(e){return Array.isArray(e)?e:hd(e)?[]:[e]}function Y2(e,t){var n,o,r,l;if(t)for(l=Object.keys(t),n=0,o=l.length;n<o;n+=1)r=l[n],e[r]=t[r];return e}function Z2(e,t){var n="",o;for(o=0;o<t;o+=1)n+=e;return n}function G2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Q2=hd,eb=z2,tb=K2,nb=Z2,sb=G2,ob=Y2,Fi={isNothing:Q2,isObject:eb,toArray:tb,repeat:nb,isNegativeZero:sb,extend:ob};function md(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),o+" "+n):o}function Oo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=md(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Oo.prototype=Object.create(Error.prototype);Oo.prototype.constructor=Oo;Oo.prototype.toString=function(t){return this.name+": "+md(this,t)};var Yn=Oo,rb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],lb=["scalar","sequence","mapping"];function ab(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(o){t[String(o)]=n})}),t}function ib(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(rb.indexOf(n)===-1)throw new Yn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=ab(t.styleAliases||null),lb.indexOf(this.kind)===-1)throw new Yn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var rt=ib;function Fu(e,t){var n=[];return e[t].forEach(function(o){var r=n.length;n.forEach(function(l,a){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(r=a)}),n[r]=o}),n}function cb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function o(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(o);return e}function wa(e){return this.extend(e)}wa.prototype.extend=function(t){var n=[],o=[];if(t instanceof rt)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Yn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(l){if(!(l instanceof rt))throw new Yn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Yn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Yn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof rt))throw new Yn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(wa.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(o),r.compiledImplicit=Fu(r,"implicit"),r.compiledExplicit=Fu(r,"explicit"),r.compiledTypeMap=cb(r.compiledImplicit,r.compiledExplicit),r};var ub=wa,pb=new rt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),fb=new rt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),db=new rt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),hb=new ub({explicit:[pb,fb,db]});function mb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Fb(){return null}function yb(e){return e===null}var gb=new rt("tag:yaml.org,2002:null",{kind:"scalar",resolve:mb,construct:Fb,predicate:yb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function vb(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function _b(e){return e==="true"||e==="True"||e==="TRUE"}function bb(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var xb=new rt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:vb,construct:_b,predicate:bb,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function wb(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Cb(e){return 48<=e&&e<=55}function kb(e){return 48<=e&&e<=57}function Sb(e){if(e===null)return!1;var t=e.length,n=0,o=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;o=!0}return o&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!wb(e.charCodeAt(n)))return!1;o=!0}return o&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!Cb(e.charCodeAt(n)))return!1;o=!0}return o&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!kb(e.charCodeAt(n)))return!1;o=!0}return!(!o||r==="_")}function Eb(e){var t=e,n=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function $b(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Fi.isNegativeZero(e)}var Ab=new rt("tag:yaml.org,2002:int",{kind:"scalar",resolve:Sb,construct:Eb,predicate:$b,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Tb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Rb(e){return!(e===null||!Tb.test(e)||e[e.length-1]==="_")}function Ob(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var Pb=/^[-+]?[0-9]+e/;function Ib(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Fi.isNegativeZero(e))return"-0.0";return n=e.toString(10),Pb.test(n)?n.replace("e",".e"):n}function Lb(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Fi.isNegativeZero(e))}var Bb=new rt("tag:yaml.org,2002:float",{kind:"scalar",resolve:Rb,construct:Ob,predicate:Lb,represent:Ib,defaultStyle:"lowercase"}),Mb=hb.extend({implicit:[gb,xb,Ab,Bb]}),Hb=Mb,Fd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),yd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function jb(e){return e===null?!1:Fd.exec(e)!==null||yd.exec(e)!==null}function Nb(e){var t,n,o,r,l,a,i,c=0,u=null,p,f,d;if(t=Fd.exec(e),t===null&&(t=yd.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,o,r));if(l=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],f=+(t[11]||0),u=(p*60+f)*6e4,t[9]==="-"&&(u=-u)),d=new Date(Date.UTC(n,o,r,l,a,i,c)),u&&d.setTime(d.getTime()-u),d}function Db(e){return e.toISOString()}var Vb=new rt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:jb,construct:Nb,instanceOf:Date,represent:Db});function Jb(e){return e==="<<"||e===null}var qb=new rt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Jb}),yi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Xb(e){if(e===null)return!1;var t,n,o=0,r=e.length,l=yi;for(n=0;n<r;n++)if(t=l.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Ub(e){var t,n,o=e.replace(/[\r\n=]/g,""),r=o.length,l=yi,a=0,i=[];for(t=0;t<r;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|l.indexOf(o.charAt(t));return n=r%4*6,n===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):n===18?(i.push(a>>10&255),i.push(a>>2&255)):n===12&&i.push(a>>4&255),new Uint8Array(i)}function Wb(e){var t="",n=0,o,r,l=e.length,a=yi;for(o=0;o<l;o++)o%3===0&&o&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[o];return r=l%3,r===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):r===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):r===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function zb(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Kb=new rt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Xb,construct:Ub,predicate:zb,represent:Wb}),Yb=Object.prototype.hasOwnProperty,Zb=Object.prototype.toString;function Gb(e){if(e===null)return!0;var t=[],n,o,r,l,a,i=e;for(n=0,o=i.length;n<o;n+=1){if(r=i[n],a=!1,Zb.call(r)!=="[object Object]")return!1;for(l in r)if(Yb.call(r,l))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function Qb(e){return e!==null?e:[]}var ex=new rt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Gb,construct:Qb}),tx=Object.prototype.toString;function nx(e){if(e===null)return!0;var t,n,o,r,l,a=e;for(l=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(o=a[t],tx.call(o)!=="[object Object]"||(r=Object.keys(o),r.length!==1))return!1;l[t]=[r[0],o[r[0]]]}return!0}function sx(e){if(e===null)return[];var t,n,o,r,l,a=e;for(l=new Array(a.length),t=0,n=a.length;t<n;t+=1)o=a[t],r=Object.keys(o),l[t]=[r[0],o[r[0]]];return l}var ox=new rt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:nx,construct:sx}),rx=Object.prototype.hasOwnProperty;function lx(e){if(e===null)return!0;var t,n=e;for(t in n)if(rx.call(n,t)&&n[t]!==null)return!1;return!0}function ax(e){return e!==null?e:{}}var ix=new rt("tag:yaml.org,2002:set",{kind:"mapping",resolve:lx,construct:ax});Hb.extend({implicit:[Vb,qb],explicit:[Kb,ex,ox,ix]});function yu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var cx=new Array(256),ux=new Array(256);for(var _s=0;_s<256;_s++)cx[_s]=yu(_s)?1:0,ux[_s]=yu(_s);function px(e){return Array.from(new Set(e))}function gu(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const r=[];let l=t;for(;l<n;)r.push(l),l+=o||1;return r}function gd(e,t){if(!t||t==="all"||t==="*")return gu(1,e+1);const n=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[r,l]=o.split("-",2);n.push(...gu(+r,l?+l+1:e+1))}return px(n).filter(o=>o<=e).sort((o,r)=>o-r)}function vd(e){const t=A(()=>e.value.path),n=A(()=>Xe.length-1),o=A(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=A(()=>tl(o.value)),l=A(()=>Xe.find(d=>d.path===`${o.value}`)),a=A(()=>{var d,m,F;return(F=(m=(d=l.value)==null?void 0:d.meta)==null?void 0:m.slide)==null?void 0:F.id}),i=A(()=>{var d,m;return((m=(d=l.value)==null?void 0:d.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),c=A(()=>Xe.find(d=>d.path===`${Math.min(Xe.length,o.value+1)}`)),u=A(()=>Xe.filter(d=>{var m,F;return(F=(m=d.meta)==null?void 0:m.slide)==null?void 0:F.title}).reduce((d,m)=>(gi(d,m),d),[])),p=A(()=>vi(u.value,l.value)),f=A(()=>_i(p.value));return{route:e,path:t,total:n,currentPage:o,currentPath:r,currentRoute:l,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:f,downloadPDF:ka,next:On,nextSlide:Po,openInEditor:y6,prev:Pn,prevSlide:Io}}function _d(e,t,n){const o=X(0);Qe(()=>{Ft.afterEach(async()=>{await Qe(),o.value+=1})});const r=A(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=A(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),a=A(()=>n.value<Xe.length-1||e.value<l.value),i=A(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:l,hasNext:a,hasPrev:i}}const fx=["id"],dx=we({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=zt(n,"clicksElements",t),r=A(()=>({height:`${li}px`,width:`${Rn}px`}));Yt();const l=A(()=>n.clicks),a=_d(l,n.nav.currentRoute,n.nav.currentPage),i=A(()=>`${n.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return wt(re,je({nav:{...n.nav,...a},configs:Ee,themeConfigs:A(()=>Ee.themeConfig)})),(c,u)=>{var p;return S(),M("div",{id:k(i),class:"print-slide-container",style:ot(k(r))},[z(k(fd)),z(k(mi),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":k(o),"onUpdate:clicksElements":u[0]||(u[0]=f=>Ae(o)?o.value=f:null),clicks:k(l),"clicks-disabled":!1,class:Le(k(hi)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),Fe("v-if",!0),z(k(pd))],12,fx)}}}),vu=le(dx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),hx=we({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const t=e;Z(re);const n=X(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=A(()=>t.route),r=vd(o);return(a,i)=>(S(),M(Se,null,[z(vu,{"clicks-elements":n.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>n.value=c),clicks:0,nav:k(r),route:k(o)},null,8,["clicks-elements","nav","route"]),k(ho)?Fe("v-if",!0):(S(!0),M(Se,{key:0},Hs(n.value.length,c=>(S(),oe(vu,{key:c,clicks:c,nav:k(r),route:k(o)},null,8,["clicks","nav","route"]))),128))],64))}}),mx=le(hx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Fx={id:"print-content"},yx=we({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;Z(re);const n=A(()=>t.width),o=A(()=>t.width/Tn),r=A(()=>n.value/o.value),l=A(()=>r.value<Tn?n.value/Rn:o.value*Tn/Rn);let a=Xe.slice(0,-1);It.value.query.range&&(a=gd(a.length,It.value.query.range).map(u=>a[u-1]));const i=A(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return wt(Cf,l),(c,u)=>(S(),M("div",{id:"print-container",class:Le(k(i))},[s("div",Fx,[(S(!0),M(Se,null,Hs(k(a),p=>(S(),oe(mx,{key:p.path,route:p},null,8,["route"]))),128))]),gt(c.$slots,"controls")],2))}});const gx=le(yx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintContainer.vue"]]),vx=we({__name:"Print",setup(e){return Z(re),fs(()=>{un?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(S(),M(Se,null,[k(un)?(S(),oe(dd,{key:0})):Fe("v-if",!0),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ot(k(ai))},[z(gx,{class:"w-full h-full",style:ot({background:"var(--slidev-slide-container-background, black)"}),width:k(ls).width.value},null,8,["style","width"])],4)],64))}});const _x=le(vx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Print.vue"]]);const bx={class:"slidev-layout end"},xx={__name:"end",setup(e){return Z(re),(t,n)=>(S(),M("div",bx," END "))}},wx=le(xx,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/end.vue"]]),Cx={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},kx=s("path",{fill:"currentColor",d:"M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"},null,-1),Sx=[kx];function Ex(e,t){return S(),M("svg",Cx,Sx)}const $x={name:"mdi-react",render:Ex},Ax={class:"slidev-layout cover"},Tx={class:"my-auto w-full"},Rx={__name:"cover",setup(e){return Z(re),(t,n)=>(S(),M("div",Ax,[s("div",Tx,[gt(t.$slots,"default")])]))}},Ox=le(Rx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/slidev-theme-dracula/layouts/cover.vue"]]);const bd=e=>(Bm("data-v-42c5a5a3"),e=e(),Mm(),e),Px=bd(()=>s("span",{class:"font-bold"},"Welcome to React",-1)),Ix=bd(()=>s("p",null,[h("Shared by "),s("a",{href:"mailto:siyuan.wang@capgemini.com",target:"_blank",rel:"noopener"},"siyuan.wang")],-1)),Lx={__name:"1",setup(e){const t={css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md"};return Z(re),(n,o)=>{const r=$x;return S(),oe(Ox,Ke(Ue(t)),{default:de(()=>[s("h1",null,[z(r,{class:"text-[#4EC5D4] font-normal animate-spin-slow"}),h(),Px]),Ix]),_:1},16)}}},Bx=le(Lx,[["__scopeId","data-v-42c5a5a3"],["__file","/@slidev/slides/1.md"]]),Mx=["href","innerHTML"],Hx=["href"],jx=we({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return Z(re),(t,n)=>{const o=Bn("RouterLink");return!k(un)&&e.title?(S(),oe(o,{key:0,to:String(e.to),onClick:n[0]||(n[0]=r=>r.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!k(un)&&!e.title?(S(),oe(o,{key:1,to:String(e.to),onClick:n[1]||(n[1]=r=>r.target.blur())},{default:de(()=>[gt(t.$slots,"default")]),_:3},8,["to"])):k(un)&&e.title?(S(),M("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,Mx)):(S(),M("a",{key:3,href:`#${e.to}`},[gt(t.$slots,"default")],8,Hx))}}}),Nx=le(jx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/Link.vue"]]),Dx=s("span",{class:"font-bold"},"Welcome to React",-1),Vx={key:1},Jx={key:2},qx={key:3},Xx={key:4},Ux={key:5},Wx={key:6},zx={key:7},Kx={key:8},Yx={key:9},Zx={key:10},Gx={key:11},Qx={key:12},ew={key:13},tw={key:14},nw=s("code",null,"HeroItem.tsx",-1),sw={key:15},ow={key:16},rw={key:17},lw={key:18},aw=we({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(t,n)=>{const o=Bn("mdi-react");return S(),M("div",null,[+e.no==1?(S(),M(Se,{key:0},[z(o,{class:"text-[#4EC5D4] font-normal animate-spin-slow"}),h(),Dx],64)):+e.no==2?(S(),M("p",Vx,"Lesson 1")):+e.no==3?(S(),M("p",Jx,"Schedule")):+e.no==4?(S(),M("p",qx,"Thinking")):+e.no==5?(S(),M("p",Xx,"What is React?")):+e.no==6?(S(),M("p",Ux,"What is JSX?")):+e.no==7?(S(),M("p",Wx,"JSX in React")):+e.no==8?(S(),M("p",zx,"React JSX vs Vue Template")):+e.no==9?(S(),M("p",Kx,"Heros with JSX")):+e.no==10?(S(),M("p",Yx,"Components")):+e.no==11?(S(),M("p",Zx,"Review components")):+e.no==12?(S(),M("p",Gx,"Component Definition (1/3)")):+e.no==13?(S(),M("p",Qx,"Component Definition (2/3)")):+e.no==14?(S(),M("p",ew,"Component Definition (3/3)")):+e.no==15?(S(),M("p",tw,[h("Review "),nw])):+e.no==16?(S(),M("p",sw,"Lifecycle")):+e.no==17?(S(),M("p",ow,"undefined")):+e.no==18?(S(),M("p",rw,"undefined")):+e.no==19?(S(),M("p",lw,"undefined")):Fe("v-if",!0)])}}}),iw=le(aw,[["__file","/@slidev/titles.md"]]),cw=we({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const t=e;Z(re);const n=A(()=>[...kf(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(o,r)=>{const l=Nx,a=Bn("TocList",!0);return e.list&&e.list.length>0?(S(),M("ol",{key:0,class:Le(k(n))},[(S(!0),M(Se,null,Hs(e.list,i=>(S(),M("li",{key:i.path,class:Le(["slidev-toc-item",[{"slidev-toc-item-active":i.active},{"slidev-toc-item-parent-active":i.activeParent}]])},[z(l,{to:i.path},{default:de(()=>[z(k(iw),{no:i.path},null,8,["no"])]),_:2},1032,["to"]),i.children.length>0?(S(),oe(a,{key:0,level:e.level+1,list:i.children,"list-class":e.listClass},null,8,["level","list","list-class"])):Fe("v-if",!0)],2))),128))],2)):Fe("v-if",!0)}}});const uw=le(cw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/TocList.vue"]]),pw=we({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const t=e,n=Z(re);function o(i,c=1){if(c>Number(t.maxDepth))return[];if(c<Number(t.minDepth)){const u=i.find(p=>p.active||p.activeParent);return u?o(u.children,c+1):[]}return i.map(u=>({...u,children:o(u.children,c+1)}))}function r(i){return i.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:r(c.children)}))}function l(i){const c=i.some(u=>u.active||u.activeParent||u.hasActiveParent);return i.filter(()=>c).map(u=>({...u,children:l(u.children)}))}const a=A(()=>{const i=n==null?void 0:n.nav.tree;if(!i)return[];let c=o(i);return t.mode==="onlyCurrentTree"?c=r(c):t.mode==="onlySiblings"&&(c=l(c)),c});return(i,c)=>{const u=uw;return S(),M("div",{class:"slidev-toc",style:ot(`column-count:${e.columns}`)},[z(u,{level:1,list:k(a),"list-class":e.listClass},null,8,["list","list-class"])],4)}}}),fw=le(pw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/Toc.vue"]]),dw={class:"slidev-layout center h-full grid place-content-center"},hw={class:"my-auto"},mw={__name:"center",setup(e){return Z(re),(t,n)=>(S(),M("div",dw,[s("div",hw,[gt(t.$slots,"default")])]))}},Fw=le(mw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/center.vue"]]),yw=s("h1",null,"Lesson 1",-1),gw={__name:"2",setup(e){const t={layout:"center",hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return Z(re),(n,o)=>{const r=fw;return S(),oe(Fw,Ke(Ue(t)),{default:de(()=>[yw,z(r)]),_:1},16)}}},vw=le(gw,[["__file","/@slidev/slides/2.md"]]),_w={class:"slidev-layout default"},bw={__name:"default",setup(e){return Z(re),(t,n)=>(S(),M("div",_w,[gt(t.$slots,"default")]))}},lt=le(bw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/default.vue"]]),xw=s("h1",null,"Schedule",-1),ww=s("p",null,"本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：",-1),Cw=s("div",{class:"mt-6"},null,-1),kw=s("h4",null,[s("strong",null,"基础"),h("和"),s("strong",null,"进阶"),h("：")],-1),Sw=s("ul",null,[s("li",null,"基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；"),s("li",null,"进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；")],-1),Ew=s("div",{class:"mt-5"},null,-1),$w=s("h4",null,"“副”作用：",-1),Aw=s("ul",null,[s("li",null,[h("适当普及 ES6+、Typescript 以及"),s("span",{class:"text-highlight"},"函数式编程"),h("；")]),s("li",null,"在每次课程的最后布置作业；"),s("li",null,"培训的最后，提供实战类的项目；")],-1),Tw=s("div",{class:"mt-5"},null,-1),Rw=s("h4",null,"真正的计划",-1),Ow=s("p",null,"课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；",-1),Pw={__name:"3",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./schedule.md"};return Z(re),(n,o)=>(S(),oe(lt,Ke(Ue(t)),{default:de(()=>[xw,ww,Cw,kw,Sw,Ew,$w,Aw,Tw,Rw,Ow]),_:1},16))}},Iw=le(Pw,[["__file","/@slidev/slides/3.md"]]),Lw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Bw=s("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),Mw=[Bw];function Hw(e,t){return S(),M("svg",Lw,Mw)}const jw={name:"ph-clipboard",render:Hw},Nw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Dw=s("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Vw=[Dw];function Jw(e,t){return S(),M("svg",Nw,Vw)}const qw={name:"ph-check-circle",render:Jw},Xw=["title"],Uw=we({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;Z(re);const n=Z(io),o=Z(Kn),r=Z(co);function l(f=5){const d=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",F=m.length;for(let g=0;g<f;g++)d.push(m.charAt(Math.floor(Math.random()*F)));return d.join("")}const a=X(),i=$t();ds(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,d=A(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(f||0)),t.ranges.length-1)),m=A(()=>t.ranges[d.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const F=l(),g=Rg(t.ranges.length-1).map(v=>F+v);o!=null&&o.value&&(o.value.push(...g),Yr(()=>g.forEach(v=>aa(o.value,v)),i))}fs(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const v of g){const w=Array.from(v.querySelectorAll(".line")),b=gd(w.length,m.value);if(w.forEach((x,C)=>{const R=b.includes(C+1);x.classList.toggle(Wn,!0),x.classList.toggle("highlighted",R),x.classList.toggle("dishonored",!R)}),t.maxHeight){const x=v.querySelector(".line.highlighted");x&&x.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=kv();function p(){var d,m;const f=(m=(d=a.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:m.textContent;f&&u(f)}return(f,d)=>{const m=qw,F=jw;return S(),M("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:ot({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[gt(f.$slots,"default"),k(Ee).codeCopy?(S(),M("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:k(c)?"Copied":"Copy",onClick:d[0]||(d[0]=g=>p())},[k(c)?(S(),oe(m,{key:0,class:"p-2 w-8 h-8"})):(S(),oe(F,{key:1,class:"p-2 w-8 h-8"}))],8,Xw)):Fe("v-if",!0)],4)}}}),hn=le(Uw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Ww=s("h1",null,"Thinking",-1),zw=s("p",null,"为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？",-1),Kw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"<!-- BlogPost.vue -->")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  <"),s("span",{style:{color:"#FF79C6"}},"h4"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"onClick"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},">{{ title }}</"),s("span",{style:{color:"#FF79C6"}},"h4"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"lang"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"ts"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  title"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," props "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"defineProps"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},">(["),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"title"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},"])")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," emits "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"defineEmits"),s("span",{style:{color:"#F8F8F2"}},"(["),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"click"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},"])")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"onClick"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"emits"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"click"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},", props.title)")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"<!-- BlogPost.vue -->")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  <"),s("span",{style:{color:"#FF79C6"}},"h4"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"onClick"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},">{{ title }}</"),s("span",{style:{color:"#FF79C6"}},"h4"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"lang"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"ts"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  title"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," props "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"defineProps"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},">(["),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"title"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},"])")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," emits "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"defineEmits"),s("span",{style:{color:"#F8F8F2"}},"(["),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"click"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},"])")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"onClick"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"emits"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"click"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},", props.title)")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}},">")])])])],-1),Yw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF5555","font-style":"italic","text-decoration":"underline"}},"BlogPost"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"title"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"My journey with Vue"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"onClick"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," />")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"onClick"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"title"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," console."),s("span",{style:{color:"#50FA7B"}},"log"),s("span",{style:{color:"#F8F8F2"}},"(title)")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF5555","font-style":"italic","text-decoration":"underline"}},"BlogPost"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"title"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"My journey with Vue"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"onClick"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," />")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"onClick"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"title"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," console."),s("span",{style:{color:"#50FA7B"}},"log"),s("span",{style:{color:"#F8F8F2"}},"(title)")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}},">")])])])],-1),Zw={__name:"4",setup(e){const t={transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./warm-up.md"};return Z(re),(n,o)=>{const r=hn;return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[Ww,zw,z(r,et({},{ranges:["3"]}),{default:de(()=>[Kw]),_:1},16),z(r,et({},{ranges:["2"]}),{default:de(()=>[Yw]),_:1},16)]),_:1},16)}}},Gw=le(Zw,[["__file","/@slidev/slides/4.md"]]),_u=["ul","ol"],Qw=we({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,c;const e=kr("click"),t=kr("after"),n=(u,p,f)=>An(u,[[p,f,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(i=this.$slots).default)==null?void 0:c.call(i);if(!o)return;o=kf(o);const r=(u,p=1)=>{let f=0;return[u.map(m=>{if(!Zt(m))return m;if(_u.includes(m.type)&&Array.isArray(m.children)){const[F,g]=a(m.children,p+1);return f+=g,Ye(m,{},[F])}return Ye(m)}),f]};let l=0;const a=(u,p=1)=>{let f=0;return[u.map(m=>{if(!Zt(m))return m;const F=f%this.every===0?e:t;let g,v=0;if(p<this.depth&&Array.isArray(m.children)){const[b,x]=r(m.children,p);g=Ye(m,{},[b]),v=x,f+=x+1}else g=Ye(m),f++;const w=this.at!=null?Number(this.at)+Math.floor(l/this.every)+p:(p-1-v).toString();return l++,n(g,F,typeof w=="string"&&!w.startsWith("-")?`+${w}`:w)}),f]};return o.length===1&&_u.includes(o[0].type)&&Array.isArray(o[0].children)?Ye(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),eC="/react-shared-ppt/assets/react-15d01e12.png",tC="/react-shared-ppt/assets/nextjs-3fe22fdd.png",nC="/react-shared-ppt/assets/remix-6950a405.png",sC="/react-shared-ppt/assets/umijs-ecd129e6.png",oC={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},rC=we({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return Z(re),(n,o)=>(S(),M("div",oC,[s("div",{class:Le(["col-left",t.class])},[gt(n.$slots,"default")],2),s("div",{class:Le(["col-right",t.class])},[gt(n.$slots,"right")],2)]))}}),lC=le(rC,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/two-cols.vue"]]),aC=s("h1",null,"What is React?",-1),iC=s("img",{src:eC,class:"w-100"},null,-1),cC={class:"w-100 mt-5"},uC=s("ul",null,[s("li",null,"React 是一个用于渲染用户界面（UI）的 JavaScript 工具库"),s("li",null,"用组件创建用户界面"),s("li",null,"用代码和标签编写组件"),s("li",null,"在任何地方添加交互"),s("li",null,"渐进式 JavaScript 框架"),s("li",null,"NextJs / Remix / UmiJs")],-1),pC=s("p",null,[h("Read more about "),s("a",{href:"https://react.dev/",target:"_blank",rel:"noopener"},"React")],-1),fC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," FC } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Video"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<{ video"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}}," }> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ({")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  video")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}) {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  const "),s("span",{style:{color:"#50FA7B"}},"onPlay"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," { console."),s("span",{style:{color:"#50FA7B"}},"log"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"Play video."),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},"); }")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"onClick"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{onPlay}"),s("span",{style:{color:"#FF79C6"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Thumbnail"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{video} "),s("span",{style:{color:"#FF79C6"}},"/>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"LikeButton"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{video} "),s("span",{style:{color:"#FF79C6"}},"/>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," FC } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Video"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<{ video"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}}," }> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ({")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  video")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}) {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  const "),s("span",{style:{color:"#50FA7B"}},"onPlay"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," { console."),s("span",{style:{color:"#50FA7B"}},"log"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"Play video."),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},"); }")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"onClick"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{onPlay}"),s("span",{style:{color:"#FF79C6"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Thumbnail"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{video} "),s("span",{style:{color:"#FF79C6"}},"/>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"LikeButton"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{video} "),s("span",{style:{color:"#FF79C6"}},"/>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),dC=s("img",{src:tC,class:"relative z-[2] w-full -mt-40"},null,-1),hC=s("img",{src:nC,class:"relative w-full z-[3] -mt-16"},null,-1),mC=s("img",{src:sC,class:"relative w-full z-[3] -mt-16"},null,-1),FC={__name:"5",setup(e){const t={clicks:9,layout:"two-cols",transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md"};return Z(re),(n,o)=>{const r=Qw,l=hn,a=kr("click");return S(),oe(lC,Ke(Ue(t)),{right:de(()=>[An((S(),M("div",null,[z(l,et({at:2},{ranges:["10,11","3-9,12-14","6,9","all"]}),{default:de(()=>[fC]),_:1},16)])),[[a,2]]),z(r,{at:"6"},{default:de(()=>[dC,hC,mC]),_:1})]),default:de(()=>[aC,iC,s("div",cC,[z(r,null,{default:de(()=>[uC]),_:1})]),pC]),_:1},16)}}},yC=le(FC,[["__file","/@slidev/slides/5.md"]]),gC=s("h1",null,"What is JSX?",-1),vC=s("p",null,"给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？",-1),_C=s("iframe",{src:"https://stackblitz.com/edit/jsx-native-js?embed=1&file=index.html&theme=dark",class:"w-full h-[calc(100%+5px)]"},null,-1),bC={__name:"6",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return Z(re),(n,o)=>(S(),oe(lt,Ke(Ue(t)),{default:de(()=>[gC,vC,Fe(" 对比：不用 JSX 怎么处理，用 JSX 怎么写 "),_C]),_:1},16))}},xC=le(bC,[["__file","/@slidev/slides/6.md"]]),wC=s("h1",null,"JSX in React",-1),CC=s("p",null,'JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。',-1),kC=s("h3",null,"一个 🌰 (例子)",-1),SC=s("div",{class:"h-2"},null,-1),EC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}},"({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),s("span",{style:{color:"#F8F8F2"}}," }) {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"className"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"btn__alert"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"style"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{{ width"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"20px"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}}," }} "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{() "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"alert"),s("span",{style:{color:"#F8F8F2"}},"(message)}>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      {children}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Toolbar"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"div"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"img"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"/public/images/react.png"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," />")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"message"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"我是糖炒 🌰"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        我是糖炒 🌰")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      </"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"div"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}},"({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),s("span",{style:{color:"#F8F8F2"}}," }) {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"className"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"btn__alert"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"style"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{{ width"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"20px"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}}," }} "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{() "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"alert"),s("span",{style:{color:"#F8F8F2"}},"(message)}>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      {children}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Toolbar"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"div"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"img"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"/public/images/react.png"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}}," />")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"message"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"我是糖炒 🌰"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        我是糖炒 🌰")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      </"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"div"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),$C={__name:"7",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return Z(re),(n,o)=>{const r=hn;return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[wC,CC,kC,SC,z(r,et({},{ranges:["all","1-7","9-18","2,6,10,17","3,5,11-12,16","13,15","4,14"]}),{default:de(()=>[EC]),_:1},16)]),_:1},16)}}},AC=le($C,[["__file","/@slidev/slides/7.md"]]),TC=s("h1",null,"React JSX vs Vue Template",-1),RC=s("p",null,[s("span",{class:"text-gray-400"},"下表为 React JSX 和 Vue Template 的异同。")],-1),OC=s("thead",null,[s("tr",null,[s("th",null,"对比"),s("th",null,"React"),s("th",null,"Vue")])],-1),PC=s("tr",null,[s("td",null,"组件调用"),s("td",null,"大驼峰"),s("td",null,"大驼峰、小驼峰、短横线均可")],-1),IC=s("tr",null,[s("td",null,"原生标签"),s("td",null,[s("strong",null,"必须"),h("闭合（包括自闭合）")]),s("td",null,"无区别")],-1),LC=s("tr",null,[s("td",null,"作用域"),s("td",null,"全局、函数和块级作用域"),s("td",null,"绑定到 Vue 组件实例、全局 Context 和 Slot context")],-1),BC=s("tr",null,[s("td",null,"变量、表达式"),s("td",null,[h("用 "),s("code",null,"{}"),h(" 表示")]),s("td",null,[h("用 "),s("code",null,"{{}}"),h(" 表示")])],-1),MC=s("tr",null,[s("td",null,"属性"),s("td",null,[h("小驼峰，"),s("em",null,"class 改为 className")]),s("td",null,"小驼峰、短横线命名均可")],-1),HC=s("tr",null,[s("td",null,"动态属性"),s("td",null,[h("参数后加 "),s("code",null,"{}")]),s("td",null,[h("参数前加 "),s("code",null,":")])],-1),jC=s("tr",null,[s("td",null,"事件"),s("td",null,[h("事件后加 "),s("code",null,"{}"),h("，值为函数")]),s("td",null,[h("事件前加 "),s("code",null,"v-on"),h(" 或 "),s("code",null,"@")])],-1),NC=s("td",null,[s("code",null,"v-for"),h(" / "),s("code",null,"v-if"),h(" / "),s("code",null,"v-show"),h(" …")],-1),DC=we({__name:"8",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};Z(re);const n=X(!1),o=()=>n.value=!n.value;return(r,l)=>{const a=Bn("uim-rocket");return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[TC,RC,s("table",null,[OC,s("tbody",null,[PC,IC,LC,BC,MC,HC,jC,s("tr",null,[s("td",null,[s("span",{class:Le({"text-highlight-2 ":n.value})},"动态渲染",2)]),s("td",null,[s("span",{class:Le({"text-highlight-2 ":n.value})},"一切皆为 JavaScript ",2)]),NC])])]),s("p",null,[s("span",{class:Le(["absolute left-[20px] bottom-[42px]",{"text-highlight-2 ":n.value}]),onClick:o},[z(a)],2)]),Fe(`
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
`)]),_:1},16)}}}),VC=le(DC,[["__file","/@slidev/slides/8.md"]]),JC=s("h1",null,"Heros with JSX",-1),qC=s("p",null,"接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。",-1),XC=s("iframe",{src:"https://stackblitz.com/edit/lesson-one-jsx?embed=1&file=App.tsx&theme=dark",class:"w-full h-[calc(100%+5px)]"},null,-1),UC={__name:"9",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return Z(re),(n,o)=>(S(),oe(lt,Ke(Ue(t)),{default:de(()=>[JC,qC,XC]),_:1},16))}},WC=le(UC,[["__file","/@slidev/slides/9.md"]]),zC=s("h1",null,"Components",-1),KC=s("p",null,[h("和 Vue 类似，React 也是以"),s("strong",null,"组件"),h("的形式构建页面。")],-1),YC={class:"flex gap-x-4"},ZC={class:"w-1/2"},GC=s("h3",null,"Class Component",-1),QC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"extends"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Component"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  inputRef "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"createRef"),s("span",{style:{color:"#F8F8F2"}},"();")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},"handleClick"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),s("span",{style:{color:"#F8F8F2"}},".inputRef.current."),s("span",{style:{color:"#50FA7B"}},"focus"),s("span",{style:{color:"#F8F8F2"}},"();")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},"render"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        <"),s("span",{style:{color:"#FF79C6"}},"input"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{"),s("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),s("span",{style:{color:"#F8F8F2"}},".inputRef} />")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        <"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{"),s("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),s("span",{style:{color:"#F8F8F2"}},".handleClick}>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          Focus the input")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        </"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      </>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"extends"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Component"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  inputRef "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"createRef"),s("span",{style:{color:"#F8F8F2"}},"();")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},"handleClick"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),s("span",{style:{color:"#F8F8F2"}},".inputRef.current."),s("span",{style:{color:"#50FA7B"}},"focus"),s("span",{style:{color:"#F8F8F2"}},"();")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},"render"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        <"),s("span",{style:{color:"#FF79C6"}},"input"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{"),s("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),s("span",{style:{color:"#F8F8F2"}},".inputRef} />")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        <"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{"),s("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),s("span",{style:{color:"#F8F8F2"}},".handleClick}>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          Focus the input")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        </"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      </>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),ek={class:"w-1/2"},tk=s("h3",null,"Function Component",-1),nk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"*"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," React "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," inputRef "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," React."),s("span",{style:{color:"#50FA7B"}},"useRef"),s("span",{style:{color:"#F8F8F2"}},"();")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," handleClick "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," inputRef.current."),s("span",{style:{color:"#50FA7B"}},"focus"),s("span",{style:{color:"#F8F8F2"}},"();")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"input"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{inputRef} />")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{handleClick}>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        Focus the input")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      </"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"*"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," React "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," inputRef "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," React."),s("span",{style:{color:"#50FA7B"}},"useRef"),s("span",{style:{color:"#F8F8F2"}},"();")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," handleClick "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," inputRef.current."),s("span",{style:{color:"#50FA7B"}},"focus"),s("span",{style:{color:"#F8F8F2"}},"();")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"input"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{inputRef} />")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{handleClick}>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        Focus the input")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      </"),s("span",{style:{color:"#FF79C6"}},"button"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),sk={__name:"10",setup(e){const t={clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md"};return Z(re),(n,o)=>{const r=hn;return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[zC,KC,s("div",YC,[s("div",ZC,[GC,z(r,et({},{ranges:["all","10,15","all","0"]}),{default:de(()=>[QC]),_:1},16)]),s("div",ek,[tk,z(r,et({at:0},{ranges:["all","8,13","0","all"]}),{default:de(()=>[nk]),_:1},16)])])]),_:1},16)}}},ok=le(sk,[["__file","/@slidev/slides/10.md"]]),rk=s("h1",null,"Review components",-1),lk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"*"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," React "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Empty"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"No Heros."),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Loading"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"Loading, fetching heros..."),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"unknown"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"JSX"),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Element"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"App"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," React."),s("span",{style:{color:"#50FA7B"}},"useState"),s("span",{style:{color:"#F8F8F2"}},"([]);")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"renderHero"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{item.id}>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.name}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.skills."),s("span",{style:{color:"#50FA7B"}},"join"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},", "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},")}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"ul"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"user-list"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      {loading "),s("span",{style:{color:"#FF79C6"}},"?"),s("span",{style:{color:"#F8F8F2"}}," <"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Loading"),s("span",{style:{color:"#F8F8F2"}}," /> "),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," heros.length "),s("span",{style:{color:"#FF79C6"}},"?"),s("span",{style:{color:"#F8F8F2"}}," ")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        heros."),s("span",{style:{color:"#50FA7B"}},"map"),s("span",{style:{color:"#F8F8F2"}},"(renderHero) "),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Empty"),s("span",{style:{color:"#F8F8F2"}},"()}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"ul"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"*"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," React "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Empty"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"No Heros."),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Loading"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"Loading, fetching heros..."),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"unknown"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"JSX"),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Element"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"App"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," React."),s("span",{style:{color:"#50FA7B"}},"useState"),s("span",{style:{color:"#F8F8F2"}},"([]);")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"renderHero"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{item.id}>")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.name}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.skills."),s("span",{style:{color:"#50FA7B"}},"join"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},", "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},")}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"ul"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"user-list"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      {loading "),s("span",{style:{color:"#FF79C6"}},"?"),s("span",{style:{color:"#F8F8F2"}}," <"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Loading"),s("span",{style:{color:"#F8F8F2"}}," /> "),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," heros.length "),s("span",{style:{color:"#FF79C6"}},"?"),s("span",{style:{color:"#F8F8F2"}}," ")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        heros."),s("span",{style:{color:"#50FA7B"}},"map"),s("span",{style:{color:"#F8F8F2"}},"(renderHero) "),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Empty"),s("span",{style:{color:"#F8F8F2"}},"()}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"ul"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),ak={__name:"11",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return Z(re),(n,o)=>{const r=hn;return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[rk,z(r,et({},{ranges:["all","3,19","4,18","9-14"]}),{default:de(()=>[lk]),_:1},16)]),_:1},16)}}},ik=le(ak,[["__file","/@slidev/slides/11.md"]]),ck=s("h1",null,"Component Definition (1/3)",-1),uk=s("p",null,[s("span",{class:"text-gradient-red"},"第一步：定义组件并导出")],-1),pk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),fk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," HeroItem "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"./HeroItem"),s("span",{style:{color:"#E9F284"}},"'")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"App"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"id"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"user-list"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#FF79C6"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      {"),s("span",{style:{color:"#6272A4"}},"/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */"),s("span",{style:{color:"#F8F8F2"}},"} <== "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"这是注释"),s("span",{style:{color:"#F8F8F2"}}," ")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      {"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"heros"),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"map"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"h"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," <"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{h.id} />)}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," HeroItem "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"./HeroItem"),s("span",{style:{color:"#E9F284"}},"'")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"App"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"id"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"user-list"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#FF79C6"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      {"),s("span",{style:{color:"#6272A4"}},"/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */"),s("span",{style:{color:"#F8F8F2"}},"} <== "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"这是注释"),s("span",{style:{color:"#F8F8F2"}}," ")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      {"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"heros"),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"map"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"h"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," <"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}},"{h.id} />)}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  );")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),dk=s("p",null,[s("span",{class:"text-gray-600"},"第二步：确定组件接受的属性 props")],-1),hk=s("p",null,[s("span",{class:"text-gray-600"},"第三步：组件内返回 JSX")],-1),mk={__name:"12",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return Z(re),(n,o)=>{const r=hn;return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[ck,uk,z(r,et({},{ranges:["none","3","5","all"]}),{default:de(()=>[pk]),_:1},16),z(r,et({at:2},{ranges:["none","7","6"]}),{default:de(()=>[fk]),_:1},16),dk,hk]),_:1},16)}}},Fk=le(mk,[["__file","/@slidev/slides/12.md"]]),yk=s("h1",null,"Component Definition (2/3)",-1),gk=s("p",null,[s("span",{class:"text-gray-600"},"第一步：定义组件并导出")],-1),vk=s("p",null,[s("span",{class:"text-gradient-red"},"第二步：声明组件接受的属性 props 以及类型")],-1),_k=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," { "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," FC } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  item"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    id"),s("span",{style:{color:"#FF79C6"}},"?:"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    skills"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},"[]")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"props"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," { "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," FC } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  item"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    id"),s("span",{style:{color:"#FF79C6"}},"?:"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    skills"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},"[]")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {}")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"props"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),bk=s("p",null,[s("span",{class:"text-gray-600"},"第三步：组件内返回 JSX")],-1),xk={__name:"13",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return Z(re),(n,o)=>{const r=hn;return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[yk,gk,vk,z(r,et({},{ranges:["all","4-10","2,13","12"]}),{default:de(()=>[_k]),_:1},16),bk]),_:1},16)}}},wk=le(xk,[["__file","/@slidev/slides/13.md"]]),Ck=s("h1",null,"Component Definition (3/3)",-1),kk=s("p",null,[s("span",{class:"text-gray-600"},"第一步：定义组件并导出")],-1),Sk=s("p",null,[s("span",{class:"text-gray-600"},"第二步：确定组件接受的属性 props")],-1),Ek=s("p",null,[s("span",{class:"text-gradient-red"},"第三步：组件内返回 JSX")],-1),$k=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.name}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.skills."),s("span",{style:{color:"#50FA7B"}},"join"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},", "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},")}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  )")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.name}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.skills."),s("span",{style:{color:"#50FA7B"}},"join"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},", "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},")}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  )")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),Ak={__name:"14",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return Z(re),(n,o)=>{const r=hn;return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[Ck,kk,Sk,Ek,z(r,et({},{ranges:["all","5-9"]}),{default:de(()=>[$k]),_:1},16)]),_:1},16)}}},Tk=le(Ak,[["__file","/@slidev/slides/14.md"]]),Rk=s("h1",null,[h("Review "),s("code",null,"HeroItem.tsx")],-1),Ok=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"*"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," React "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," { "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," FC } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  item"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    id"),s("span",{style:{color:"#FF79C6"}},"?:"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    skills"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},"[]")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.id}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.name}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.skills."),s("span",{style:{color:"#50FA7B"}},"join"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},", "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},")}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  )")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"*"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," React "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," { "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," FC } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  item"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    id"),s("span",{style:{color:"#FF79C6"}},"?:"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    name"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    skills"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},"[]")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"HeroItem"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," (")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    <"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.id}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.name}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      <"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">{item.skills."),s("span",{style:{color:"#50FA7B"}},"join"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},", "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},")}</"),s("span",{style:{color:"#FF79C6"}},"span"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    </"),s("span",{style:{color:"#FF79C6"}},"li"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  )")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),Pk={__name:"15",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return Z(re),(n,o)=>{const r=hn;return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[Rk,z(r,et({},{ranges:[""]}),{default:de(()=>[Ok]),_:1},16)]),_:1},16)}}},Ik=le(Pk,[["__file","/@slidev/slides/15.md"]]),Lk=s("h1",null,"Lifecycle",-1),Bk=s("p",null,[h("React 的"),s("strong",null,"类组件"),h("才会有生命周期，而"),s("strong",null,"函数式组件"),h("的生命周期已经弱化为 "),s("em",null,"hooks"),h("。")],-1),Mk=s("p",null,[h("版本 "),s("code",null,"v16.3"),h(" 是 React 生命周期的分界线；")],-1),Hk={class:"flex gap-x-4 h-[calc(100%-2.5rem-7rem)]"},jk={class:"w-1/2 text-center"},Nk=s("h3",null,"旧生命周期",-1),Dk=[Nk],Vk={class:"relative w-15 flex justify-center"},Jk=s("div",{class:"absolute top-[8px]"},"v16.3",-1),qk=s("div",{class:"absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"},null,-1),Xk=[Jk,qk],Uk={class:"w-1/2 text-center"},Wk=s("h3",null,"新生命周期",-1),zk=[Wk],Kk={__name:"16",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./lifecycle.md"};return Z(re),(n,o)=>{const r=kr("click");return S(),oe(lt,Ke(Ue(t)),{default:de(()=>[Lk,Bk,Mk,s("div",Hk,[An((S(),M("div",jk,Dk)),[[r,2]]),An((S(),M("div",Vk,Xk)),[[r,1]]),An((S(),M("div",Uk,zk)),[[r,2]])])]),_:1},16)}}},Yk=le(Kk,[["__file","/@slidev/slides/16.md"]]),Zk={__name:"17",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./hooks.md"};return Z(re),(n,o)=>(S(),oe(lt,Ke(Ue(t)),null,16))}},Gk=le(Zk,[["__file","/@slidev/slides/17.md"]]),Qk={__name:"18",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./ant-design.md"};return Z(re),(n,o)=>(S(),oe(lt,Ke(Ue(t)),null,16))}},e6=le(Qk,[["__file","/@slidev/slides/18.md"]]),t6={__name:"19",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./umijs.md"};return Z(re),(n,o)=>(S(),oe(lt,Ke(Ue(t)),null,16))}},n6=le(t6,[["__file","/@slidev/slides/19.md"]]),s6=[{path:"1",name:"page-1",component:Bx,meta:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md",slide:{raw:null,title:'<mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>',level:1,content:`# <mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>

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
</style>`,frontmatter:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md"},note:`大家好，我是王思远，目前是 RKS 项目的前端开发，很高兴能在这儿给大家分享关于 react 相关的培训。

首先，先和大家介绍关于我们这次的培训的目的和计划`,index:0,start:0,end:31,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/welcome-to-react.md",raw:`---
css: unocss
class: text-center
hideInToc: true
transition: slide-left
---

# <mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>

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
`,title:'<mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>',level:1,content:`# <mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>

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
</style>`,frontmatter:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:'<mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>'},note:`大家好，我是王思远，目前是 RKS 项目的前端开发，很高兴能在这儿给大家分享关于 react 相关的培训。

首先，先和大家介绍关于我们这次的培训的目的和计划`,index:0,start:0,end:31},inline:{raw:`---
src: ./pages/welcome-to-react.md
title: React Shared
theme: dracula
favicon: ./public/images/logo-react.ico
drawings:
  enabled: false
  persist: false
lineNumbers: false
highlighter: shiki
---
`,title:"React Shared",level:1,content:"",frontmatter:{title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},lineNumbers:!1,highlighter:"shiki"},index:0,start:0,end:12},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/welcome-to-react.md",noteHTML:`<p>大家好，我是王思远，目前是 RKS 项目的前端开发，很高兴能在这儿给大家分享关于 react 相关的培训。</p>
<p>首先，先和大家介绍关于我们这次的培训的目的和计划</p>
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:vw,meta:{layout:"center",hideInToc:!0,title:"Lesson 1",srcSequence:"./pages/lesson_1/index.md",slide:{raw:null,title:"Lesson 1",level:1,content:`# Lesson 1

<Toc />`,frontmatter:{layout:"center",hideInToc:!0,title:"Lesson 1",srcSequence:"./pages/lesson_1/index.md"},index:1,start:0,end:9,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
layout: 'center'
hideInToc: true
---

# Lesson 1

<Toc />
`,title:"Lesson 1",level:1,content:`# Lesson 1

<Toc />`,frontmatter:{layout:"center",hideInToc:!0,title:"Lesson 1"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/lesson_1/index.md
---

# Lesson One`,title:"Lesson One",level:1,content:"# Lesson One",frontmatter:{},index:1,start:12,end:17},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Iw,meta:{title:"Schedule",srcSequence:"./pages/lesson_1/index.md,./schedule.md",slide:{raw:`---
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

课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；`,frontmatter:{title:"Schedule",srcSequence:"./pages/lesson_1/index.md,./schedule.md"},index:2,start:0,end:25,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/schedule.md",raw:`---
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

课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；`,frontmatter:{title:"Schedule"},index:0,start:0,end:25},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/schedule.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Gw,meta:{transition:"slide-up",title:"Thinking",srcSequence:"./pages/lesson_1/index.md,./warm-up.md",slide:{raw:`---
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

接下来，我们进入这次培训的主题，React！`,index:3,start:0,end:45,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/warm-up.md",raw:`---
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
`,id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:yC,meta:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md",slide:{raw:`---
clicks: 9
layout: two-cols
transition: slide-up
---

# What is React?

<img src="/public/images/react.png" class="w-100" />

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
> The library for web and native user interfaces
这是 React 最新官网上的第一句话, 也是 React 的总纲
就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库

同时 React 还具有以下特点：
- 用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- 组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回 jsx，包括参数、方法等等和我们平时写的代码一样
- 允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- 和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看
-->
`,title:"What is React?",level:1,content:`# What is React?

<img src="/public/images/react.png" class="w-100" />

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

</template>`,frontmatter:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md"},note:`> The library for web and native user interfaces
这是 React 最新官网上的第一句话, 也是 React 的总纲
就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库

同时 React 还具有以下特点：
- 用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- 组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回 jsx，包括参数、方法等等和我们平时写的代码一样
- 允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- 和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看`,index:4,start:0,end:75,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-react.md",raw:`---
clicks: 9
layout: two-cols
transition: slide-up
---

# What is React?

<img src="/public/images/react.png" class="w-100" />

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
> The library for web and native user interfaces
这是 React 最新官网上的第一句话, 也是 React 的总纲
就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库

同时 React 还具有以下特点：
- 用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- 组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回 jsx，包括参数、方法等等和我们平时写的代码一样
- 允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- 和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看
-->
`,title:"What is React?",level:1,content:`# What is React?

<img src="/public/images/react.png" class="w-100" />

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

</template>`,frontmatter:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?"},note:`> The library for web and native user interfaces
这是 React 最新官网上的第一句话, 也是 React 的总纲
就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库

同时 React 还具有以下特点：
- 用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件
- 组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回 jsx，包括参数、方法等等和我们平时写的代码一样
- 允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上
- 和 Vue 一样，都是渐进式的 js 框架

提到渐进式框架，我想问下大家，渐进式是什么意思？

右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看`,index:0,start:0,end:75},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-react.md",noteHTML:`<blockquote>
<p>The library for web and native user interfaces
这是 React 最新官网上的第一句话, 也是 React 的总纲
就是 React 是一个用于渲染用户界面（UI）的 JavaScript 工具库</p>
</blockquote>
<p>同时 React 还具有以下特点：</p>
<ul>
<li>用户的界面都有一个一个的组件，比如右侧代码高亮的 Thumbnail 和 LikeButton 组件</li>
<li>组件都是用 ES6 或 Typescript 代码和标签编写，我们可以直接写成一个函数 Video 返回 jsx，包括参数、方法等等和我们平时写的代码一样</li>
<li>允许开发者在任何地方添加事件交互，比如我们可以在高亮的第一行声明一个函数方法，然后将其绑定到 div 标签上</li>
<li>和 Vue 一样，都是渐进式的 js 框架</li>
</ul>
<p>提到渐进式框架，我想问下大家，渐进式是什么意思？</p>
<p>右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看</p>
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:xC,meta:{title:"What is JSX?",srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
title: What is JSX?
---

# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?embed=1&file=index.html&theme=dark" class="w-full h-[calc(100%+5px)]" />

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
<iframe src="https://stackblitz.com/edit/jsx-native-js?embed=1&file=index.html&theme=dark" class="w-full h-[calc(100%+5px)]" />`,frontmatter:{title:"What is JSX?",srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},note:`React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

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

那如果我们用 React 实现的话，会是什么样子的呢？`,index:5,start:0,end:44,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
title: What is JSX?
---

# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?embed=1&file=index.html&theme=dark" class="w-full h-[calc(100%+5px)]" />

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
<iframe src="https://stackblitz.com/edit/jsx-native-js?embed=1&file=index.html&theme=dark" class="w-full h-[calc(100%+5px)]" />`,frontmatter:{title:"What is JSX?"},note:`React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

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
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:AC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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

（click) 这两部分表示的是类似于 Vue 的默认插槽，将 “我是糖炒 🌰” 传递给 AlertButton 组件作为它的子组件。`,index:6,start:44,end:96,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
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
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:VC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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
<\/script>`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},index:7,start:96,end:133,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
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
<\/script>`,frontmatter:{hideInToc:!0},index:2,start:96,end:133},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:WC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?embed=1&file=App.tsx&theme=dark" class="w-full h-[calc(100%+5px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。

-->`,title:"Heros with JSX",level:1,content:`# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?embed=1&file=App.tsx&theme=dark" class="w-full h-[calc(100%+5px)]" />`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},note:`有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。`,index:8,start:133,end:152,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?embed=1&file=App.tsx&theme=dark" class="w-full h-[calc(100%+5px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。

-->`,title:"Heros with JSX",level:1,content:`# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?embed=1&file=App.tsx&theme=dark" class="w-full h-[calc(100%+5px)]" />`,frontmatter:{hideInToc:!0},note:`有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。`,index:3,start:133,end:152},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:`<p>有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。</p>
<p>我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx =&gt; App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。</p>
<p>和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。</p>
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:ok,meta:{title:"Components",clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
title: Components
clicks: 3
---

# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2">

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

<div class="w-1/2">

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

<div class="w-1/2">

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

<div class="w-1/2">

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

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。`,index:9,start:0,end:78,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
title: Components
clicks: 3
---

# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2">

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

<div class="w-1/2">

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

<div class="w-1/2">

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

<div class="w-1/2">

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
`,id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:ik,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
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

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它，但是需要做些修改；

接下来，我为大家讲下如何去创建一个组件。
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

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它，但是需要做些修改；

接下来，我为大家讲下如何去创建一个组件。`,index:10,start:78,end:120,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
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

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它，但是需要做些修改；

接下来，我为大家讲下如何去创建一个组件。
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

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它，但是需要做些修改；

接下来，我为大家讲下如何去创建一个组件。`,index:1,start:78,end:120},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>再次回到之前的用 React 写的“英雄列表”</p>
<p>之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 实例化它。</p>
<p>（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它，但是需要做些修改；</p>
<p>接下来，我为大家讲下如何去创建一个组件。</p>
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Fk,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
hideInToc: true
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
`,title:"Component Definition (1/3)",level:1,content:`# Component Definition (1/3)

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

<span class="text-gray-600">第三步：组件内返回 JSX</span>`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"},note:`第一步，我们需要定义组件并且将它导出给别的组件使用；

（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；

（click）然后将 HeroItem 函数默认导出

（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。

（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号`,index:11,start:120,end:165,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
hideInToc: true
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
`,title:"Component Definition (1/3)",level:1,content:`# Component Definition (1/3)

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

<span class="text-gray-600">第三步：组件内返回 JSX</span>`,frontmatter:{hideInToc:!0},note:`第一步，我们需要定义组件并且将它导出给别的组件使用；

（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；

（click）然后将 HeroItem 函数默认导出

（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。

（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号`,index:2,start:120,end:165},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>第一步，我们需要定义组件并且将它导出给别的组件使用；</p>
<p>（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；</p>
<p>（click）然后将 HeroItem 函数默认导出</p>
<p>（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。</p>
<p>（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号</p>
`,id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:wk,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
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

<span class="text-gray-600">第三步：组件内返回 JSX</span>`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"},note:`第二步，声明组件接受的属性 props 并且定义它的类型

首先要确定 HeroItem 这个组件需要什么参数，（回到 Review Component），从这段代码中我们可以看出来，需要一个 item 对象，里面有 id/name/skills 三个属性

（再次回到 Component Definition 2/3）既然知道了 props 的结构，（click）那我们可以把 Props 的类型声明出来

（click）然后我们使用 React 提供给我的泛型 FunctionComponentFactory 来对 HeroItem 声明类型

（click）将 props 只需要作为函数的参数声明即可，（click）同时支持参数解构的方式

接下来就是最后一步了`,index:12,start:165,end:209,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
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

接下来就是最后一步了`,index:3,start:165,end:209},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>第二步，声明组件接受的属性 props 并且定义它的类型</p>
<p>首先要确定 HeroItem 这个组件需要什么参数，（回到 Review Component），从这段代码中我们可以看出来，需要一个 item 对象，里面有 id/name/skills 三个属性</p>
<p>（再次回到 Component Definition 2/3）既然知道了 props 的结构，（click）那我们可以把 Props 的类型声明出来</p>
<p>（click）然后我们使用 React 提供给我的泛型 FunctionComponentFactory 来对 HeroItem 声明类型</p>
<p>（click）将 props 只需要作为函数的参数声明即可，（click）同时支持参数解构的方式</p>
<p>接下来就是最后一步了</p>
`,id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Tk,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
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
\`\`\``,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"},note:`最后，我们需要在组件内部返回 JSX

我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。

至此，我们的组件就创建完成了。`,index:13,start:209,end:242,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
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

至此，我们的组件就创建完成了。`,index:4,start:209,end:242},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>最后，我们需要在组件内部返回 JSX</p>
<p>我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。</p>
<p>至此，我们的组件就创建完成了。</p>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Ik,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
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
\`\`\``,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"},note:`OK，最后这是全部 HeroItem 的代码。

到这块为止，大家有什么问题吗？（waiting 2min）`,index:14,start:242,end:280,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
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

到这块为止，大家有什么问题吗？（waiting 2min）`,index:5,start:242,end:280},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>OK，最后这是全部 HeroItem 的代码。</p>
<p>到这块为止，大家有什么问题吗？（waiting 2min）</p>
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Yk,meta:{title:"Lifecycle",srcSequence:"./pages/lesson_1/index.md,./lifecycle.md",slide:{raw:`---
title: Lifecycle
---

# Lifecycle

React 的**类组件**才会有生命周期，而**函数式组件**的生命周期已经弱化为 *hooks*。

版本 \`v16.3\` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

</div>

</div>

<!-- 
v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；
 -->`,title:"Lifecycle",level:1,content:`# Lifecycle

React 的**类组件**才会有生命周期，而**函数式组件**的生命周期已经弱化为 *hooks*。

版本 \`v16.3\` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

</div>

</div>`,frontmatter:{title:"Lifecycle",srcSequence:"./pages/lesson_1/index.md,./lifecycle.md"},note:"v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；",index:15,start:0,end:37,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/lifecycle.md",raw:`---
title: Lifecycle
---

# Lifecycle

React 的**类组件**才会有生命周期，而**函数式组件**的生命周期已经弱化为 *hooks*。

版本 \`v16.3\` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

</div>

</div>

<!-- 
v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；
 -->`,title:"Lifecycle",level:1,content:`# Lifecycle

React 的**类组件**才会有生命周期，而**函数式组件**的生命周期已经弱化为 *hooks*。

版本 \`v16.3\` 是 React 生命周期的分界线；

<div class="flex gap-x-4 h-[calc(100%-2.5rem-7rem)]">

<div class="w-1/2 text-center" v-click="2">

### 旧生命周期

</div>

<div class="relative w-15 flex justify-center" v-click="1">

<div class="absolute top-[8px]">v16.3</div>

<div class="absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"></div>

</div>

<div class="w-1/2 text-center" v-click="2">

### 新生命周期

</div>

</div>`,frontmatter:{title:"Lifecycle"},note:"v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；",index:0,start:0,end:37},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/lifecycle.md",noteHTML:`<p>v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期；</p>
`,id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Gk,meta:{srcSequence:"./pages/lesson_1/index.md,./hooks.md",slide:{raw:"",content:"",frontmatter:{srcSequence:"./pages/lesson_1/index.md,./hooks.md"},index:16,start:0,end:1,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",raw:"",content:"",frontmatter:{},index:0,start:0,end:1},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:e6,meta:{srcSequence:"./pages/lesson_1/index.md,./ant-design.md",slide:{raw:"",content:"",frontmatter:{srcSequence:"./pages/lesson_1/index.md,./ant-design.md"},index:17,start:0,end:1,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",raw:"",content:"",frontmatter:{},index:0,start:0,end:1},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:n6,meta:{srcSequence:"./pages/lesson_1/index.md,./umijs.md",slide:{raw:"",content:"",frontmatter:{srcSequence:"./pages/lesson_1/index.md,./umijs.md"},index:18,start:0,end:1,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",raw:"",content:"",frontmatter:{},index:0,start:0,end:1},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",component:wx,meta:{layout:"end"}}],Xe=s6,oo=[{name:"play",path:"/",component:W2,children:[...Xe]},{name:"print",path:"/print",component:_x},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!so.remote||so.remote===t.query.password)return!0;if(so.remote&&t.query.password===void 0){const n=prompt("Enter password");if(so.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};oo.push({path:"/presenter/print",component:()=>dr(()=>import("./PresenterPrint-ce015a52.js"),["assets/PresenterPrint-ce015a52.js","assets/NoteDisplay-3bf48f54.js"])}),oo.push({name:"notes",path:"/notes",component:()=>dr(()=>import("./NotesView-5b8ced00.js"),["assets/NotesView-5b8ced00.js","assets/NoteDisplay-3bf48f54.js"]),beforeEnter:e}),oo.push({name:"presenter",path:"/presenter/:no",component:()=>dr(()=>import("./Presenter-8d5a1da5.js"),["assets/Presenter-8d5a1da5.js","assets/NoteDisplay-3bf48f54.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),oo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Ft=A0({history:$1("/react-shared-ppt/"),routes:oo});function o6(e,t,{mode:n="replace"}={}){return A({get(){const o=Ft.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){Qe(()=>{Ft[k(n)]({query:{...Ft.currentRoute.value.query,[e]:o}})})}})}const xd=X(0);Qe(()=>{Ft.afterEach(async()=>{await Qe(),xd.value+=1})});const wd=X(0),It=A(()=>Ft.currentRoute.value),un=A(()=>It.value.query.print!==void 0),r6=A(()=>It.value.query.print==="clicks"),Vn=A(()=>It.value.query.embedded!==void 0),Ct=A(()=>It.value.path.startsWith("/presenter")),l6=A(()=>It.value.path.startsWith("/notes")),ho=A(()=>un.value&&!r6.value),Ca=A(()=>It.value.query.password),a6=A(()=>!Ct.value&&(!Ee.remote||Ca.value===Ee.remote)),bu=o6("clicks","0"),Cd=A(()=>Xe.length-1),i6=A(()=>It.value.path),Ve=A(()=>parseInt(i6.value.split(/\//g).slice(-1)[0])||1);A(()=>tl(Ve.value));const ut=A(()=>Xe.find(e=>e.path===`${Ve.value}`));A(()=>{var e,t,n;return(n=(t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});A(()=>{var e,t;return((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ve.value===1?"cover":"default")});const El=A(()=>Xe.find(e=>e.path===`${Math.min(Xe.length,Ve.value+1)}`)),c6=A(()=>Xe.find(e=>e.path===`${Math.max(1,Ve.value-1)}`)),u6=A(()=>{var e,t;return xd.value,((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ot=A({get(){if(ho.value)return 99999;let e=+(bu.value||0);return isNaN(e)&&(e=0),e},set(e){bu.value=e.toString()}}),Ir=A(()=>{var e,t;return+(((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.clicks)??u6.value.length)}),p6=A(()=>Ve.value<Xe.length-1||Ot.value<Ir.value),f6=A(()=>Ve.value>1||Ot.value>0),d6=A(()=>Xe.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(gi(e,t),e),[])),h6=A(()=>vi(d6.value,ut.value));A(()=>_i(h6.value));const m6=A(()=>_6(wd.value,ut.value,c6.value));ye(ut,(e,t)=>{wd.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function On(){Ir.value<=Ot.value?Po():Ot.value+=1}async function Pn(){Ot.value<=0?await Io():Ot.value-=1}function tl(e){return Ct.value?`/presenter/${e}`:`/${e}`}function Po(){const e=Math.min(Xe.length,Ve.value+1);return Ms(e)}async function Io(e=!0){const t=Math.max(1,Ve.value-1);await Ms(t),e&&Ir.value&&Ft.replace({query:{...It.value.query,clicks:Ir.value}})}function Ms(e,t){return Ft.push({path:tl(e),query:{...It.value.query,clicks:t}})}function F6(e){const t=X(0),{direction:n,distanceX:o,distanceY:r}=Uv(e,{onSwipeStart(l){l.pointerType==="touch"&&(To.value||(t.value=ca()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||To.value)return;const a=Math.abs(o.value),i=Math.abs(r.value);a/window.innerWidth>.3||a>100?n.value===an.LEFT?On():Pn():(i/window.innerHeight>.4||i>200)&&(n.value===an.DOWN?Io():Po())}})}async function ka(){const{saveAs:e}=await dr(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e($f(Ee.download)?Ee.download:Ee.exportFilename?`${Ee.exportFilename}.pdf`:"/react-shared-ppt/slidev-exported.pdf",`${Ee.title}.pdf`)}async function y6(e){var t,n;if(e==null){const o=(n=(t=ut.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function gi(e,t,n=1){var r,l,a,i,c;const o=(l=(r=t.meta)==null?void 0:r.slide)==null?void 0:l.level;o&&o>n&&e.length>0?gi(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function vi(e,t,n=!1,o){return e.map(r=>{const l={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return l.children.length>0&&(l.children=vi(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function _i(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:_i(n.children,t+1)}))}const g6={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function v6(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:g6[e.name]||e.name;if(n.includes("|")){const[o,r]=n.split("|").map(l=>l.trim());n=t?r:o}if(n)return{...e,name:n}}function _6(e,t,n){var r,l;let o=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=Ee.transition),v6(o,e<0)}function b6(){const e=Ee.titleTemplate.replace("%s",Ee.title||"Slidev");ri({title:e}),Cg(Ee.htmlAttrs),Bg(`${e} - shared`),Ng(`${e} - drawings`);const t=`${location.origin}_${Tg()}`;function n(){l6.value||!Ct.value&&!Ag.includes(location.host.split(":")[0])||(Ct.value?(Ws("page",+Ve.value),Ws("clicks",Ot.value)):(Ws("viewerPage",+Ve.value),Ws("viewerClicks",Ot.value)),Ws("lastUpdate",{id:t,type:Ct.value?"presenter":"viewer",time:new Date().getTime()}))}Ft.afterEach(n),ye(Ot,n),Mg(o=>{var l;Ft.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+Ve.value||+Ot.value!=+o.clicks)&&Ft.replace({path:tl(o.page),query:{...Ft.currentRoute.value.query,clicks:o.clicks||0}})})}const x6=we({__name:"App",setup(e){return Z(re),b6(),(t,n)=>{const o=Bn("RouterView"),r=Bn("StarportCarrier");return S(),M(Se,null,[z(o),z(r)],64)}}}),w6=le(x6,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/App.vue"]]);function $l(e){return e!==null&&typeof e=="object"}function Sa(e,t,n=".",o){if(!$l(t))return Sa(e,{},n,o);const r=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const a=e[l];a!=null&&(o&&o(r,l,a,n)||(Array.isArray(a)&&Array.isArray(r[l])?r[l]=[...a,...r[l]]:$l(a)&&$l(r[l])?r[l]=Sa(a,r[l],(n?`${n}.`:"")+l.toString(),o):r[l]=a))}return r}function C6(e){return(...t)=>t.reduce((n,o)=>Sa(n,o,"",e),{})}const k6=C6(),kd=1/60*1e3,S6=typeof performance<"u"?()=>performance.now():()=>Date.now(),Sd=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(S6()),kd);function E6(e){let t=[],n=[],o=0,r=!1,l=!1;const a=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const f=p&&r,d=f?t:n;return u&&a.add(c),d.indexOf(c)===-1&&(d.push(c),f&&r&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(r){l=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const p=t[u];p(c),a.has(p)&&(i.schedule(p),e())}r=!1,l&&(l=!1,i.process(c))}};return i}const $6=40;let Ea=!0,Lo=!1,$a=!1;const Ps={delta:0,timestamp:0},Xo=["read","update","preRender","render","postRender"],nl=Xo.reduce((e,t)=>(e[t]=E6(()=>Lo=!0),e),{}),Aa=Xo.reduce((e,t)=>{const n=nl[t];return e[t]=(o,r=!1,l=!1)=>(Lo||R6(),n.schedule(o,r,l)),e},{}),A6=Xo.reduce((e,t)=>(e[t]=nl[t].cancel,e),{});Xo.reduce((e,t)=>(e[t]=()=>nl[t].process(Ps),e),{});const T6=e=>nl[e].process(Ps),Ed=e=>{Lo=!1,Ps.delta=Ea?kd:Math.max(Math.min(e-Ps.timestamp,$6),1),Ps.timestamp=e,$a=!0,Xo.forEach(T6),$a=!1,Lo&&(Ea=!1,Sd(Ed))},R6=()=>{Lo=!0,Ea=!0,$a||Sd(Ed)},$d=()=>Ps;function Ad(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}var bi=function(){},Bo=function(){};bi=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Bo=function(e,t){if(!e)throw new Error(t)};const Ta=(e,t,n)=>Math.min(Math.max(n,e),t),Al=.001,O6=.01,xu=10,P6=.05,I6=1;function L6({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let r,l;bi(e<=xu*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=Ta(P6,I6,a),e=Ta(O6,xu,e/1e3),a<1?(r=u=>{const p=u*a,f=p*e,d=p-n,m=Ra(u,a),F=Math.exp(-f);return Al-d/m*F},l=u=>{const f=u*a*e,d=f*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,F=Math.exp(-f),g=Ra(Math.pow(u,2),a);return(-r(u)+Al>0?-1:1)*((d-m)*F)/g}):(r=u=>{const p=Math.exp(-u*e),f=(u-n)*e+1;return-Al+p*f},l=u=>{const p=Math.exp(-u*e),f=(n-u)*(e*e);return p*f});const i=5/e,c=M6(r,l,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const B6=12;function M6(e,t,n){let o=n;for(let r=1;r<B6;r++)o=o-e(o)/t(o);return o}function Ra(e,t){return e*Math.sqrt(1-t*t)}const H6=["duration","bounce"],j6=["stiffness","damping","mass"];function wu(e,t){return t.some(n=>e[n]!==void 0)}function N6(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!wu(e,j6)&&wu(e,H6)){const n=L6(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function xi(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:r}=e,l=Ad(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:u,velocity:p,duration:f,isResolvedFromDuration:d}=N6(l),m=Cu,F=Cu;function g(){const v=p?-(p/1e3):0,w=n-t,b=c/(2*Math.sqrt(i*u)),x=Math.sqrt(i/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),b<1){const C=Ra(x,b);m=R=>{const L=Math.exp(-b*x*R);return n-L*((v+b*x*w)/C*Math.sin(C*R)+w*Math.cos(C*R))},F=R=>{const L=Math.exp(-b*x*R);return b*x*L*(Math.sin(C*R)*(v+b*x*w)/C+w*Math.cos(C*R))-L*(Math.cos(C*R)*(v+b*x*w)-C*w*Math.sin(C*R))}}else if(b===1)m=C=>n-Math.exp(-x*C)*(w+(v+x*w)*C);else{const C=x*Math.sqrt(b*b-1);m=R=>{const L=Math.exp(-b*x*R),V=Math.min(C*R,300);return n-L*((v+b*x*w)*Math.sinh(V)+C*w*Math.cosh(V))/C}}}return g(),{next:v=>{const w=m(v);if(d)a.done=v>=f;else{const b=F(v)*1e3,x=Math.abs(b)<=o,C=Math.abs(n-w)<=r;a.done=x&&C}return a.value=a.done?n:w,a},flipTarget:()=>{p=-p,[t,n]=[n,t],g()}}}xi.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Cu=e=>0,Td=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},wi=(e,t,n)=>-n*e+n*t+e,Rd=(e,t)=>n=>Math.max(Math.min(n,t),e),mo=e=>e%1?Number(e.toFixed(5)):e,Mo=/(-)?([\d]*\.?[\d])+/g,Oa=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,D6=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Uo(e){return typeof e=="string"}const Wo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fo=Object.assign(Object.assign({},Wo),{transform:Rd(0,1)}),lr=Object.assign(Object.assign({},Wo),{default:1}),Ci=e=>({test:t=>Uo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Jn=Ci("deg"),yo=Ci("%"),me=Ci("px"),ku=Object.assign(Object.assign({},yo),{parse:e=>yo.parse(e)/100,transform:e=>yo.transform(e*100)}),ki=(e,t)=>n=>!!(Uo(n)&&D6.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Od=(e,t,n)=>o=>{if(!Uo(o))return o;const[r,l,a,i]=o.match(Mo);return{[e]:parseFloat(r),[t]:parseFloat(l),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Qn={test:ki("hsl","hue"),parse:Od("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+yo.transform(mo(t))+", "+yo.transform(mo(n))+", "+mo(Fo.transform(o))+")"},V6=Rd(0,255),Tl=Object.assign(Object.assign({},Wo),{transform:e=>Math.round(V6(e))}),Sn={test:ki("rgb","red"),parse:Od("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+Tl.transform(e)+", "+Tl.transform(t)+", "+Tl.transform(n)+", "+mo(Fo.transform(o))+")"};function J6(e){let t="",n="",o="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const Pa={test:ki("#"),parse:J6,transform:Sn.transform},ht={test:e=>Sn.test(e)||Pa.test(e)||Qn.test(e),parse:e=>Sn.test(e)?Sn.parse(e):Qn.test(e)?Qn.parse(e):Pa.parse(e),transform:e=>Uo(e)?e:e.hasOwnProperty("red")?Sn.transform(e):Qn.transform(e)},Pd="${c}",Id="${n}";function q6(e){var t,n,o,r;return isNaN(e)&&Uo(e)&&((n=(t=e.match(Mo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(o=e.match(Oa))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function Ld(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(Oa);o&&(n=o.length,e=e.replace(Oa,Pd),t.push(...o.map(ht.parse)));const r=e.match(Mo);return r&&(e=e.replace(Mo,Id),t.push(...r.map(Wo.parse))),{values:t,numColors:n,tokenised:e}}function Bd(e){return Ld(e).values}function Md(e){const{values:t,numColors:n,tokenised:o}=Ld(e),r=t.length;return l=>{let a=o;for(let i=0;i<r;i++)a=a.replace(i<n?Pd:Id,i<n?ht.transform(l[i]):mo(l[i]));return a}}const X6=e=>typeof e=="number"?0:e;function U6(e){const t=Bd(e);return Md(e)(t.map(X6))}const zo={test:q6,parse:Bd,createTransformer:Md,getAnimatableNone:U6},W6=new Set(["brightness","contrast","saturate","opacity"]);function z6(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Mo)||[];if(!o)return e;const r=n.replace(o,"");let l=W6.has(t)?1:0;return o!==n&&(l*=100),t+"("+l+r+")"}const K6=/([a-z-]*)\(.*?\)/g,Ia=Object.assign(Object.assign({},zo),{getAnimatableNone:e=>{const t=e.match(K6);return t?t.map(z6).join(" "):e}});function Rl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Su({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let r=0,l=0,a=0;if(!t)r=l=a=n;else{const i=n<.5?n*(1+t):n+t-n*t,c=2*n-i;r=Rl(c,i,e+1/3),l=Rl(c,i,e),a=Rl(c,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:o}}const Y6=(e,t,n)=>{const o=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-o)+o))},Z6=[Pa,Sn,Qn],Eu=e=>Z6.find(t=>t.test(e)),$u=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Hd=(e,t)=>{let n=Eu(e),o=Eu(t);Bo(!!n,$u(e)),Bo(!!o,$u(t));let r=n.parse(e),l=o.parse(t);n===Qn&&(r=Su(r),n=Sn),o===Qn&&(l=Su(l),o=Sn);const a=Object.assign({},r);return i=>{for(const c in a)c!=="alpha"&&(a[c]=Y6(r[c],l[c],i));return a.alpha=wi(r.alpha,l.alpha,i),n.transform(a)}},G6=e=>typeof e=="number",Q6=(e,t)=>n=>t(e(n)),jd=(...e)=>e.reduce(Q6);function Nd(e,t){return G6(e)?n=>wi(e,t,n):ht.test(e)?Hd(e,t):Vd(e,t)}const Dd=(e,t)=>{const n=[...e],o=n.length,r=e.map((l,a)=>Nd(l,t[a]));return l=>{for(let a=0;a<o;a++)n[a]=r[a](l);return n}},eS=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(o[r]=Nd(e[r],t[r]));return r=>{for(const l in o)n[l]=o[l](r);return n}};function Au(e){const t=zo.parse(e),n=t.length;let o=0,r=0,l=0;for(let a=0;a<n;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?l++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:l}}const Vd=(e,t)=>{const n=zo.createTransformer(t),o=Au(e),r=Au(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?jd(Dd(o.parsed,r.parsed),n):(bi(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},tS=(e,t)=>n=>wi(e,t,n);function nS(e){if(typeof e=="number")return tS;if(typeof e=="string")return ht.test(e)?Hd:Vd;if(Array.isArray(e))return Dd;if(typeof e=="object")return eS}function sS(e,t,n){const o=[],r=n||nS(e[0]),l=e.length-1;for(let a=0;a<l;a++){let i=r(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=jd(c,i)}o.push(i)}return o}function oS([e,t],[n]){return o=>n(Td(e,t,o))}function rS(e,t){const n=e.length,o=n-1;return r=>{let l=0,a=!1;if(r<=e[0]?a=!0:r>=e[o]&&(l=o-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>r||c===o);c++);l=c-1}const i=Td(e[l],e[l+1],r);return t[l](i)}}function Jd(e,t,{clamp:n=!0,ease:o,mixer:r}={}){const l=e.length;Bo(l===t.length,"Both input and output ranges must be the same length"),Bo(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=sS(t,o,r),i=l===2?oS(e,a):rS(e,a);return n?c=>i(Ta(e[0],e[l-1],c)):i}const sl=e=>t=>1-e(1-t),Si=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,lS=e=>t=>Math.pow(t,e),qd=e=>t=>t*t*((e+1)*t-e),aS=e=>{const t=qd(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Xd=1.525,iS=4/11,cS=8/11,uS=9/10,Ud=e=>e,Ei=lS(2),pS=sl(Ei),Wd=Si(Ei),zd=e=>1-Math.sin(Math.acos(e)),Kd=sl(zd),fS=Si(Kd),$i=qd(Xd),dS=sl($i),hS=Si($i),mS=aS(Xd),FS=4356/361,yS=35442/1805,gS=16061/1805,Lr=e=>{if(e===1||e===0)return e;const t=e*e;return e<iS?7.5625*t:e<cS?9.075*t-9.9*e+3.4:e<uS?FS*t-yS*e+gS:10.8*e*e-20.52*e+10.72},vS=sl(Lr),_S=e=>e<.5?.5*(1-Lr(1-e*2)):.5*Lr(e*2-1)+.5;function bS(e,t){return e.map(()=>t||Wd).splice(0,e.length-1)}function xS(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function wS(e,t){return e.map(n=>n*t)}function yr({from:e=0,to:t=1,ease:n,offset:o,duration:r=300}){const l={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=wS(o&&o.length===a.length?o:xS(a),r);function c(){return Jd(i,a,{ease:Array.isArray(n)?n:bS(a,n)})}let u=c();return{next:p=>(l.value=u(p),l.done=p>=r,l),flipTarget:()=>{a.reverse(),u=c()}}}function CS({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:l}){const a={done:!1,value:t};let i=n*e;const c=t+i,u=l===void 0?c:l(c);return u!==c&&(i=u-t),{next:p=>{const f=-i*Math.exp(-p/o);return a.done=!(f>r||f<-r),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const Tu={keyframes:yr,spring:xi,decay:CS};function kS(e){if(Array.isArray(e.to))return yr;if(Tu[e.type])return Tu[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?yr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?xi:yr}function Yd(e,t,n=0){return e-t-n}function SS(e,t,n=0,o=!0){return o?Yd(t+-e,t,n):t-(e-t)+n}function ES(e,t,n,o){return o?e>=t+n:e<=-n}const $S=e=>{const t=({delta:n})=>e(n);return{start:()=>Aa.update(t,!0),stop:()=>A6.update(t)}};function Zd(e){var t,n,{from:o,autoplay:r=!0,driver:l=$S,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:f,onComplete:d,onRepeat:m,onUpdate:F}=e,g=Ad(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=g,w,b=0,x=g.duration,C,R=!1,L=!0,V;const T=kS(g);!((n=(t=T).needsInterpolation)===null||n===void 0)&&n.call(t,o,v)&&(V=Jd([0,100],[o,v],{clamp:!1}),o=0,v=100);const N=T(Object.assign(Object.assign({},g),{from:o,to:v}));function Y(){b++,c==="reverse"?(L=b%2===0,a=SS(a,x,u,L)):(a=Yd(a,x,u),c==="mirror"&&N.flipTarget()),R=!1,m&&m()}function ae(){w.stop(),d&&d()}function U(Re){if(L||(Re=-Re),a+=Re,!R){const Je=N.next(Math.max(0,a));C=Je.value,V&&(C=V(C)),R=L?Je.done:a<=0}F==null||F(C),R&&(b===0&&(x??(x=a)),b<i?ES(a,x,u,L)&&Y():ae())}function ie(){p==null||p(),w=l(U),w.start()}return r&&ie(),{stop:()=>{f==null||f(),w.stop()}}}function Gd(e,t){return t?e*(1e3/t):0}function AS({from:e=0,velocity:t=0,min:n,max:o,power:r=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:f,onComplete:d,onStop:m}){let F;function g(x){return n!==void 0&&x<n||o!==void 0&&x>o}function v(x){return n===void 0?o:o===void 0||Math.abs(n-x)<Math.abs(o-x)?n:o}function w(x){F==null||F.stop(),F=Zd(Object.assign(Object.assign({},x),{driver:p,onUpdate:C=>{var R;f==null||f(C),(R=x.onUpdate)===null||R===void 0||R.call(x,C)},onComplete:d,onStop:m}))}function b(x){w(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},x))}if(g(e))b({from:e,velocity:t,to:v(e)});else{let x=r*t+e;typeof u<"u"&&(x=u(x));const C=v(x),R=C===n?-1:1;let L,V;const T=N=>{L=V,V=N,t=Gd(N-L,$d().delta),(R===1&&N>C||R===-1&&N<C)&&b({from:N,to:C,velocity:t})};w({type:"decay",from:e,velocity:t,timeConstant:l,power:r,restDelta:c,modifyTarget:u,onUpdate:g(x)?T:void 0})}return{stop:()=>F==null?void 0:F.stop()}}const Qd=(e,t)=>1-3*t+3*e,eh=(e,t)=>3*t-6*e,th=e=>3*e,Br=(e,t,n)=>((Qd(t,n)*e+eh(t,n))*e+th(t))*e,nh=(e,t,n)=>3*Qd(t,n)*e*e+2*eh(t,n)*e+th(t),TS=1e-7,RS=10;function OS(e,t,n,o,r){let l,a,i=0;do a=t+(n-t)/2,l=Br(a,o,r)-e,l>0?n=a:t=a;while(Math.abs(l)>TS&&++i<RS);return a}const PS=8,IS=.001;function LS(e,t,n,o){for(let r=0;r<PS;++r){const l=nh(t,n,o);if(l===0)return t;const a=Br(t,n,o)-e;t-=a/l}return t}const gr=11,ar=1/(gr-1);function BS(e,t,n,o){if(e===t&&n===o)return Ud;const r=new Float32Array(gr);for(let a=0;a<gr;++a)r[a]=Br(a*ar,e,n);function l(a){let i=0,c=1;const u=gr-1;for(;c!==u&&r[c]<=a;++c)i+=ar;--c;const p=(a-r[c])/(r[c+1]-r[c]),f=i+p*ar,d=nh(f,e,n);return d>=IS?LS(a,f,e,n):d===0?f:OS(a,i,i+ar,e,n)}return a=>a===0||a===1?a:Br(l(a),t,o)}const Ol={};class MS{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,n,o)}clear(){this.subscriptions.clear()}}const Ru=e=>!isNaN(parseFloat(e));class HS{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new MS,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:r}=$d();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),Aa.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Aa.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Ru(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Ru(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Gd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function jS(e){return new HS(e)}const{isArray:NS}=Array;function DS(){const e=X({}),t=o=>{const r=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?NS(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},n=(o,r,l)=>{if(e.value[o])return e.value[o];const a=jS(r);return a.onChange(i=>l[o]=i),e.value[o]=a,a};return ev(t),{motionValues:e,get:n,stop:t}}const VS=e=>Array.isArray(e),qn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Pl=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),JS=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Il=()=>({type:"keyframes",ease:"linear",duration:300}),qS=e=>({type:"keyframes",duration:800,values:e}),Ou={default:JS,x:qn,y:qn,z:qn,rotate:qn,rotateX:qn,rotateY:qn,rotateZ:qn,scaleX:Pl,scaleY:Pl,scale:Pl,backgroundColor:Il,color:Il,opacity:Il},sh=(e,t)=>{let n;return VS(t)?n=qS:n=Ou[e]||Ou.default,{to:t,...n(t)}},Pu={...Wo,transform:Math.round},oh={color:ht,backgroundColor:ht,outlineColor:ht,fill:ht,stroke:ht,borderColor:ht,borderTopColor:ht,borderRightColor:ht,borderBottomColor:ht,borderLeftColor:ht,borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,radius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,size:me,top:me,right:me,bottom:me,left:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:Jn,skewX:Jn,skewY:Jn,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:Fo,originX:ku,originY:ku,originZ:me,zIndex:Pu,filter:Ia,WebkitFilter:Ia,fillOpacity:Fo,strokeOpacity:Fo,numOctaves:Pu},Ai=e=>oh[e],rh=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function XS(e,t){let n=Ai(e);return n!==Ia&&(n=zo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const US={linear:Ud,easeIn:Ei,easeInOut:Wd,easeOut:pS,circIn:zd,circInOut:fS,circOut:Kd,backIn:$i,backInOut:hS,backOut:dS,anticipate:mS,bounceIn:vS,bounceInOut:_S,bounceOut:Lr},Iu=e=>{if(Array.isArray(e)){const[t,n,o,r]=e;return BS(t,n,o,r)}else if(typeof e=="string")return US[e];return e},WS=e=>Array.isArray(e)&&typeof e[0]!="number",Lu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&zo.test(t)&&!t.startsWith("url("));function zS(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function KS({ease:e,times:t,delay:n,...o}){const r={...o};return t&&(r.offset=t),e&&(r.ease=WS(e)?e.map(Iu):Iu(e)),n&&(r.elapsed=-n),r}function YS(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),zS(t),ZS(e)||(e={...e,...sh(n,t.to)}),{...t,...KS(e)}}function ZS({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:r,...l}){return!!Object.keys(l).length}function GS(e,t){return e[t]||e.default||e}function QS(e,t,n,o,r){const l=GS(o,e);let a=l.from===null||l.from===void 0?t.get():l.from;const i=Lu(e,n);a==="none"&&i&&typeof n=="string"&&(a=XS(e,n));const c=Lu(e,a);function u(f){const d={from:a,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return l.type==="inertia"||l.type==="decay"?AS({...d,...l}):Zd({...YS(l,d,e),onUpdate:m=>{d.onUpdate(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),f&&f()}})}function p(f){return t.set(n),o.onComplete&&o.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!c||!i||l.type===!1?p:u}function eE(){const{motionValues:e,stop:t,get:n}=DS();return{motionValues:e,stop:t,push:(r,l,a,i={},c)=>{const u=a[r],p=n(r,u,a);if(i&&i.immediate){p.set(l);return}const f=QS(r,p,l,i,c);p.start(f)}}}function tE(e,t={},{motionValues:n,push:o,stop:r}=eE()){const l=k(t),a=X(!1);ye(n,f=>{a.value=Object.values(f).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!l||!l[f])throw new Error(`The variant ${f} does not exist.`);return l[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([d,m])=>{if(d!=="transition")return new Promise(F=>o(d,m,e,f.transition||sh(d,f[d]),F))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const d=ia(f)?f:i(f);Object.entries(d).forEach(([m,F])=>{m!=="transition"&&o(m,F,e,{immediate:!0})})},leave:async f=>{let d;if(l&&(l.leave&&(d=l.leave),!l.leave&&l.initial&&(d=l.initial)),!d){f();return}await c(d),f()},stop:r}}const Ti=typeof window<"u",nE=()=>Ti&&window.onpointerdown===null,sE=()=>Ti&&window.ontouchstart===null,oE=()=>Ti&&window.onmousedown===null;function rE({target:e,state:t,variants:n,apply:o}){const r=k(n),l=X(!1),a=X(!1),i=X(!1),c=A(()=>{let p=[];return r&&(r.hovered&&(p=[...p,...Object.keys(r.hovered)]),r.tapped&&(p=[...p,...Object.keys(r.tapped)]),r.focused&&(p=[...p,...Object.keys(r.focused)])),p}),u=A(()=>{const p={};Object.assign(p,t.value),l.value&&r.hovered&&Object.assign(p,r.hovered),a.value&&r.tapped&&Object.assign(p,r.tapped),i.value&&r.focused&&Object.assign(p,r.focused);for(const f in p)c.value.includes(f)||delete p[f];return p});r.hovered&&(be(e,"mouseenter",()=>l.value=!0),be(e,"mouseleave",()=>{l.value=!1,a.value=!1}),be(e,"mouseout",()=>{l.value=!1,a.value=!1})),r.tapped&&(oE()&&(be(e,"mousedown",()=>a.value=!0),be(e,"mouseup",()=>a.value=!1)),nE()&&(be(e,"pointerdown",()=>a.value=!0),be(e,"pointerup",()=>a.value=!1)),sE()&&(be(e,"touchstart",()=>a.value=!0),be(e,"touchend",()=>a.value=!1))),r.focused&&(be(e,"focus",()=>i.value=!0),be(e,"blur",()=>i.value=!1)),ye(u,o)}function lE({set:e,target:t,apply:n,variants:o,variant:r}){const l=k(o);ye(()=>t,()=>{l&&(l.initial&&e("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function aE({state:e,apply:t}){ye(e,n=>{n&&t(n)},{immediate:!0})}function iE({target:e,variants:t,variant:n}){const o=k(t);o&&(o.visible||o.visibleOnce)&&Jv(e,([{isIntersecting:r}])=>{o.visible?r?n.value="visible":n.value="initial":o.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function cE(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&lE(e),t.syncVariants&&aE(e),t.visibilityHooks&&iE(e),t.eventListeners&&rE(e)}function lh(e={}){const t=je({...e}),n=X({});return ye(t,()=>{const o={};for(const[r,l]of Object.entries(t)){const a=Ai(r),i=rh(l,a);o[r]=i}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function Ri(e,t){ye(()=>kt(e),n=>{n&&t(n)},{immediate:!0})}const uE={x:"translateX",y:"translateY",z:"translateZ"};function ah(e={},t=!0){const n=je({...e}),o=X("");return ye(n,r=>{let l="",a=!1;if(t&&(r.x||r.y||r.z)){const i=[r.x||0,r.y||0,r.z||0].map(me.transform).join(",");l+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(r)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const u=Ai(i),p=rh(c,u);l+=`${uE[i]||i}(${p}) `}t&&!a&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const pE=["","X","Y","Z"],fE=["perspective","translate","scale","rotate","skew"],ih=["transformPerspective","x","y","z"];fE.forEach(e=>{pE.forEach(t=>{const n=e+t;ih.push(n)})});const dE=new Set(ih);function Oi(e){return dE.has(e)}const hE=new Set(["originX","originY","originZ"]);function ch(e){return hE.has(e)}function mE(e){const t={},n={};return Object.entries(e).forEach(([o,r])=>{Oi(o)||ch(o)?t[o]=r:n[o]=r}),{transform:t,style:n}}function uh(e){const{transform:t,style:n}=mE(e),{transform:o}=ah(t),{style:r}=lh(n);return o.value&&(r.value.transform=o.value),r.value}function FE(e,t){let n,o;const{state:r,style:l}=lh();return Ri(e,a=>{o=a;for(const i of Object.keys(oh))a.style[i]===null||a.style[i]===""||Oi(i)||ch(i)||(r[i]=a.style[i]);n&&Object.entries(n).forEach(([i,c])=>a.style[i]=c),t&&t(r)}),ye(l,a=>{if(!o){n=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:r}}function yE(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[l,a]=r.split("("),c=a.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function gE(e,t){Object.entries(yE(t)).forEach(([n,o])=>{const r=["x","y","z"];if(n==="translate3d"){if(o===0){r.forEach(l=>e[l]=0);return}o.forEach((l,a)=>e[r[a]]=l);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function vE(e,t){let n,o;const{state:r,transform:l}=ah();return Ri(e,a=>{o=a,a.style.transform&&gE(r,a.style.transform),n&&(a.style.transform=n),t&&t(r)}),ye(l,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:r}}function _E(e,t){const n=je({}),o=a=>Object.entries(a).forEach(([i,c])=>n[i]=c),{style:r}=FE(e,o),{transform:l}=vE(e,o);return ye(n,a=>{Object.entries(a).forEach(([i,c])=>{const u=Oi(i)?l:r;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),Ri(e,()=>t&&o(t)),{motionProperties:n,style:r,transform:l}}function bE(e={}){const t=k(e),n=X();return{state:A(()=>{if(n.value)return t[n.value]}),variant:n}}function ph(e,t={},n){const{motionProperties:o}=_E(e),{variant:r,state:l}=bE(t),a=tE(o,t),i={target:e,variant:r,variants:t,state:l,motionProperties:o,...a};return cE(i,n),i}const xE=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],wE=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&ia(n.variants)&&(t.value={...t.value,...n.variants}),xE.forEach(o=>{if(o==="delay"){if(n&&n[o]&&Ug(n[o])){const r=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&ia(n[o])&&(t.value[o]=n[o])}))},Ll=e=>({created:(n,o,r)=>{const l=o.value&&typeof o.value=="string"?o.value:r.key;l&&Ol[l]&&Ol[l].stop();const a=X(e||{});typeof o.value=="object"&&(a.value=o.value),wE(r,a);const i=ph(n,a);n.motionInstance=i,l&&(Ol[l]=i)},getSSRProps(n,o){let{initial:r}=n.value||o&&(o==null?void 0:o.props)||{};r=k(r);const l=k6((e==null?void 0:e.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:uh(l)}}}),CE={initial:{opacity:0},enter:{opacity:1}},kE={initial:{opacity:0},visible:{opacity:1}},SE={initial:{opacity:0},visibleOnce:{opacity:1}},EE={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},$E={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},AE={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},TE={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},RE={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},OE={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},PE={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},IE={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},LE={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},BE={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},ME={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},HE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},jE={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},NE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},DE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},VE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},JE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},qE={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},XE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},UE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},WE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},zE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},KE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},YE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},ZE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},GE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},QE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},La={__proto__:null,fade:CE,fadeVisible:kE,fadeVisibleOnce:SE,pop:EE,popVisible:$E,popVisibleOnce:AE,rollBottom:jE,rollLeft:TE,rollRight:PE,rollTop:BE,rollVisibleBottom:NE,rollVisibleLeft:RE,rollVisibleOnceBottom:DE,rollVisibleOnceLeft:OE,rollVisibleOnceRight:LE,rollVisibleOnceTop:HE,rollVisibleRight:IE,rollVisibleTop:ME,slideBottom:ZE,slideLeft:VE,slideRight:XE,slideTop:zE,slideVisibleBottom:GE,slideVisibleLeft:JE,slideVisibleOnceBottom:QE,slideVisibleOnceLeft:qE,slideVisibleOnceRight:WE,slideVisibleOnceTop:YE,slideVisibleRight:UE,slideVisibleTop:KE},e9=we({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const t=UF(),n=je({});if(!e.is&&!t.default)return()=>Ye("div",{});const o=A(()=>{let c;return e.preset&&(c=La[e.preset]),c}),r=A(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=A(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=A(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Yu(c)&&(c=Bn(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var f,d,m;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(d=u.variants)!=null&&d.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};Kr(()=>Object.entries(n).forEach(([u,p])=>c(p)))}return{slots:t,component:a,motionConfig:l,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var i;const r=uh(t.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:p})=>{const f=ph(p,t);n[u]=f},c);if(o){const c=Ye(o,void 0,e);return l(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,u)=>l(c,u))}});function t9(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const n9={install(e,t){if(e.directive("motion",Ll()),e.component("Motion",e9),!t||t&&!t.excludePresets)for(const n in La){const o=La[n];e.directive(`motion-${t9(n)}`,Ll(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,Ll(o))}}};var Bu;const go=typeof window<"u",s9=Object.prototype.toString,o9=e=>s9.call(e)==="[object Object]";go&&((Bu=window==null?void 0:window.navigator)!=null&&Bu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function r9(e){return Da()?(rp(e),!0):!1}function l9(e){var t;const n=k(e);return(t=n==null?void 0:n.$el)!=null?t:n}const a9=go?window:void 0,Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hu="__vueuse_ssr_handlers__";Mu[Hu]=Mu[Hu]||{};function i9(e,t={}){const{immediate:n=!0,window:o=a9}=t,r=X(!1);let l=null;function a(){!r.value||!o||(e(),l=o.requestAnimationFrame(a))}function i(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return n&&i(),r9(c),{isActive:r,pause:c,resume:i}}var ju;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ju||(ju={}));const ol="vue-starport-injection",fh="vue-starport-options",c9={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},dh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var u9=Object.defineProperty,Mr=Object.getOwnPropertySymbols,hh=Object.prototype.hasOwnProperty,mh=Object.prototype.propertyIsEnumerable,Nu=(e,t,n)=>t in e?u9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p9=(e,t)=>{for(var n in t||(t={}))hh.call(t,n)&&Nu(e,n,t[n]);if(Mr)for(var n of Mr(t))mh.call(t,n)&&Nu(e,n,t[n]);return e},Du=(e,t)=>{var n={};for(var o in e)hh.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Mr)for(var o of Mr(e))t.indexOf(o)<0&&mh.call(e,o)&&(n[o]=e[o]);return n};const f9=we({name:"StarportProxy",props:p9({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},dh),setup(e,t){const n=Z(ol),o=A(()=>n.getInstance(e.port,e.component)),r=X(),l=o.value.generateId(),a=X(!1);return o.value.isVisible||(o.value.land(),a.value=!0),ds(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=r.value,await Qe(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Vo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await Qe(),await Qe(),!o.value.el&&n.dispose(o.value.port))}),ye(()=>e,async()=>{o.value.props&&await Qe();const i=e,{props:c}=i,u=Du(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,p=Du(i,["initialProps","mountedProps"]),f=et(p,(a.value?u:c)||{});return Ye("div",et(f,{id:l,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?Ye(t.slots.default):void 0)}}});var d9=Object.defineProperty,h9=Object.defineProperties,m9=Object.getOwnPropertyDescriptors,Vu=Object.getOwnPropertySymbols,F9=Object.prototype.hasOwnProperty,y9=Object.prototype.propertyIsEnumerable,Ju=(e,t,n)=>t in e?d9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g9=(e,t)=>{for(var n in t||(t={}))F9.call(t,n)&&Ju(e,n,t[n]);if(Vu)for(var n of Vu(t))y9.call(t,n)&&Ju(e,n,t[n]);return e},v9=(e,t)=>h9(e,m9(t));const _9=we({name:"Starport",inheritAttrs:!0,props:dh,setup(e,t){const n=X(!1);return ds(()=>{if(n.value=!0,!Z(ol))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let l=r.type;return(!o9(l)||Zt(l))&&(l={render(){return o}}),Ye(f9,v9(g9({},e),{key:e.port,component:Jr(l),props:r.props}))}}});function b9(e){const t=je({height:0,width:0,left:0,top:0,update:o,listen:l,pause:a,margin:"0px",padding:"0px"}),n=go?document.documentElement||document.body:void 0;function o(){if(!go)return;const i=l9(e);if(!i)return;const{height:c,width:u,left:p,top:f}=i.getBoundingClientRect(),d=window.getComputedStyle(i),m=d.margin,F=d.padding;Object.assign(t,{height:c,width:u,left:p,top:n.scrollTop+f,margin:m,padding:F})}const r=i9(o,{immediate:!1});function l(){go&&(o(),r.resume())}function a(){r.pause()}return t}let x9=(e,t=21)=>(n=t)=>{let o="",r=n;for(;r--;)o+=e[Math.random()*e.length|0];return o};const qu=x9("abcdefghijklmnopqrstuvwxyz",5);function Xu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function w9(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var C9=Object.defineProperty,Uu=Object.getOwnPropertySymbols,k9=Object.prototype.hasOwnProperty,S9=Object.prototype.propertyIsEnumerable,Wu=(e,t,n)=>t in e?C9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bl=(e,t)=>{for(var n in t||(t={}))k9.call(t,n)&&Wu(e,n,t[n]);if(Uu)for(var n of Uu(t))S9.call(t,n)&&Wu(e,n,t[n]);return e};function E9(e,t,n={}){const o=w9(t),r=Xu(o)||qu(),l=X(),a=X(null),i=X(!1),c=X(!1),u=Oh(!0),p=X({}),f=A(()=>Bl(Bl(Bl({},c9),n),p.value)),d=X(0);let m;u.run(()=>{m=b9(l),ye(l,async w=>{w&&(c.value=!0),await Qe(),l.value||(c.value=!1)})});const F=Xu(e);function g(){return`starport-${r}-${F}-${qu()}`}const v=g();return je({el:l,id:v,port:e,props:a,rect:m,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:d,component:t,componentName:o,componentId:r,generateId:g,setLocalOptions(w={}){p.value=JSON.parse(JSON.stringify(w))},elRef(){return l},liftOff(){i.value&&(i.value=!1,d.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function $9(e){const t=je(new Map);function n(r,l){let a=t.get(r);return a||(a=E9(r,l,e),t.set(r,a)),a.component=l,a}function o(r){var l;(l=t.get(r))==null||l.scope.stop(),t.delete(r)}return{portMap:t,dispose:o,getInstance:n}}var A9=Object.defineProperty,T9=Object.defineProperties,R9=Object.getOwnPropertyDescriptors,zu=Object.getOwnPropertySymbols,O9=Object.prototype.hasOwnProperty,P9=Object.prototype.propertyIsEnumerable,Ku=(e,t,n)=>t in e?A9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I9=(e,t)=>{for(var n in t||(t={}))O9.call(t,n)&&Ku(e,n,t[n]);if(zu)for(var n of zu(t))P9.call(t,n)&&Ku(e,n,t[n]);return e},L9=(e,t)=>T9(e,R9(t));const B9=we({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=Z(ol);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=A(()=>t.getInstance(e.port,e.component)),o=A(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),r=A(()=>{const a=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?L9(I9({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),u)}),l={onTransitionend(a){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const a=!!(n.value.isLanded&&n.value.el);return Ye("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Ye(OF,{to:a?`#${o.value}`:"body",disabled:!a},Ye(n.value.component,et(l,n.value.props))))}}}),M9=we({name:"StarportCarrier",setup(e,{slots:t}){const n=$9(Z(fh,{}));return $t().appContext.app.provide(ol,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([l,{component:a}])=>Ye(B9,{key:l,port:l,component:a}))]}}});function H9(e={}){return{install(t){t.provide(fh,e),t.component("Starport",_9),t.component("StarportCarrier",M9)}}}function j9(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(n9),e.app.use(H9({keepAlive:!0}))}function _t(e,t,n){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??n}function N9(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,f,d,m,F,g;if(ho.value||(p=_t(n,co))!=null&&p.value)return;const o=_t(n,Kn),r=_t(n,io),l=_t(n,la),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=i?$g:yl;if(o&&!((d=o==null?void 0:o.value)!=null&&d.includes(t))&&o.value.push(t),n.value==null&&(n.value=(m=o==null?void 0:o.value)==null?void 0:m.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((F=o==null?void 0:o.value)==null?void 0:F.length)||0)+Number(n.value)),!(l!=null&&l.value.has(n.value)))l==null||l.value.set(n.value,[t]);else if(!((g=l==null?void 0:l.value.get(n.value))!=null&&g.includes(t))){const v=(l==null?void 0:l.value.get(n.value))||[];l==null||l.value.set(n.value,[t].concat(v))}t==null||t.classList.toggle(Wn,!0),r&&ye(r,()=>{const v=(r==null?void 0:r.value)??0,w=n.value!=null?v>=n.value:v>c;t.classList.contains(gl)||t.classList.toggle(u,!w),a!==!1&&a!==void 0&&t.classList.toggle(u,w),t.classList.toggle(Us,!1);const b=l==null?void 0:l.value.get(v);b==null||b.forEach((x,C)=>{x.classList.toggle(or,!1),C===b.length-1?x.classList.toggle(Us,!0):x.classList.toggle(or,!0)}),t.classList.contains(Us)||t.classList.toggle(or,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Wn,!1);const o=_t(n,Kn);o!=null&&o.value&&aa(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var i,c;if(ho.value||(i=_t(n,co))!=null&&i.value)return;const o=_t(n,Kn),r=_t(n,io),l=_t(n,la),a=o==null?void 0:o.value.length;n.value==null&&(n.value=o==null?void 0:o.value.length),l!=null&&l.value.has(n.value)?(c=l==null?void 0:l.value.get(n.value))==null||c.push(t):l==null||l.value.set(n.value,[t]),t==null||t.classList.toggle(Wn,!0),r&&ye(r,()=>{const u=(r.value??0)>=(n.value??a??0);t.classList.contains(gl)||t.classList.toggle(yl,!u),t.classList.toggle(Us,!1),t.classList.contains(Us)||t.classList.toggle(or,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Wn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,i,c;if(ho.value||(a=_t(n,co))!=null&&a.value)return;const o=_t(n,Kn),r=_t(n,io),l=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Wn,!0),r&&ye(r,()=>{const u=(r==null?void 0:r.value)??0,p=n.value!=null?u>=n.value:u>l;t.classList.toggle(yl,p),t.classList.toggle(gl,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Wn,!1);const o=_t(n,Kn);o!=null&&o.value&&aa(o.value,t)}})}}}function D9(e,t){const n=vd(e),o=_d(t,n.currentRoute,n.currentPage);return{nav:{...n,...o},configs:Ee,themeConfigs:A(()=>Ee.themeConfig)}}function V9(){return{install(e){const t=D9(It,Ot);e.provide(re,je(t))}}}const Ns=Ay(w6);Ns.use(Ft);Ns.use(kg());Ns.use(N9());Ns.use(V9());j9({app:Ns,router:Ft});Ns.mount("#app");export{q2 as $,i2 as A,X as B,X9 as C,ut as D,Le as E,Se as F,x_ as G,F6 as H,Ot as I,Ir as J,p6 as K,El as L,ds as M,je as N,J9 as O,U9 as P,ye as Q,de as R,cd as S,Ae as T,ct as U,L_ as V,Bm as W,Mm as X,To as Y,Cl as Z,le as _,re as a,hi as a0,mi as a1,Ve as a2,j2 as a3,W_ as a4,ri as b,Ee as c,we as d,dm as e,M as f,s as g,k as h,Z as i,Xe as j,Cd as k,h as l,z as m,ot as n,S as o,Fe as p,ai as q,Hs as r,Vt as s,as as t,q9 as u,A as v,vl as w,oe as x,td as y,d2 as z};
