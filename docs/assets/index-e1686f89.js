(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function Hn(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ot(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=je(s)?_h(s):ot(s);if(r)for(const l in r)t[l]=r[l]}return t}else{if(je(e))return e;if(Re(e))return e}}const gh=/;(?![^(]*\))/g,vh=/:([^]+)/,Fh=/\/\*.*?\*\//gs;function _h(e){const t={};return e.replace(Fh,"").split(gh).forEach(n=>{if(n){const s=n.split(vh);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ae(e){let t="";if(je(e))t=e;else if(oe(e))for(let n=0;n<e.length;n++){const s=Ae(e[n]);s&&(t+=s+" ")}else if(Re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Je(e){if(!e)return null;let{class:t,style:n}=e;return t&&!je(t)&&(e.class=Ae(t)),n&&(e.style=ot(n)),e}const bh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",wh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Yu=Hn(bh),xh=Hn(wh),kh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ch=Hn(kh);function Zu(e){return!!e||e===""}const ls=e=>je(e)?e:e==null?"":oe(e)||Re(e)&&(e.toString===tp||!pe(e.toString))?JSON.stringify(e,Gu,2):String(e),Gu=(e,t)=>t&&t.__v_isRef?Gu(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ep(t)?{[`Set(${t.size})`]:[...t.values()]}:Re(t)&&!oe(t)&&!np(t)?String(t):t,Me=Object.freeze({}),Ss=Object.freeze([]),ht=()=>{},Qu=()=>!1,Sh=/^on[^a-z]/,Ho=e=>Sh.test(e),Fr=e=>e.startsWith("onUpdate:"),Ne=Object.assign,Li=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Eh=Object.prototype.hasOwnProperty,_e=(e,t)=>Eh.call(e,t),oe=Array.isArray,Qn=e=>jo(e)==="[object Map]",ep=e=>jo(e)==="[object Set]",$h=e=>jo(e)==="[object RegExp]",pe=e=>typeof e=="function",je=e=>typeof e=="string",Hi=e=>typeof e=="symbol",Re=e=>e!==null&&typeof e=="object",ji=e=>Re(e)&&pe(e.then)&&pe(e.catch),tp=Object.prototype.toString,jo=e=>tp.call(e),Bi=e=>jo(e).slice(8,-1),np=e=>jo(e)==="[object Object]",Ni=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ar=Hn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Th=Hn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),jr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ah=/-(\w)/g,Kt=jr(e=>e.replace(Ah,(t,n)=>n?n.toUpperCase():"")),Rh=/\B([A-Z])/g,pn=jr(e=>e.replace(Rh,"-$1").toLowerCase()),is=jr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=jr(e=>e?`on${is(e)}`:""),vo=(e,t)=>!Object.is(e,t),wn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_r=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Hl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Oh=e=>{const t=je(e)?Number(e):NaN;return isNaN(t)?e:t};let La;const sp=()=>La||(La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function br(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let bt;class op{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!t&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=bt;try{return bt=this,t()}finally{bt=n}}else br("cannot run an inactive effect scope.")}on(){bt=this}off(){bt=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ph(e){return new op(e)}function Ih(e,t=bt){t&&t.active&&t.effects.push(e)}function Di(){return bt}function rp(e){bt?bt.cleanups.push(e):br("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Vi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},lp=e=>(e.w&Pn)>0,ip=e=>(e.n&Pn)>0,Mh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Pn},Lh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];lp(r)&&!ip(r)?r.delete(e):t[n++]=r,r.w&=~Pn,r.n&=~Pn}t.length=n}},jl=new WeakMap;let Qs=0,Pn=1;const Bl=30;let ut;const es=Symbol("iterate"),Nl=Symbol("Map key iterate");class Ui{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ih(this,s)}run(){if(!this.active)return this.fn();let t=ut,n=Sn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ut,ut=this,Sn=!0,Pn=1<<++Qs,Qs<=Bl?Mh(this):Ha(this),this.fn()}finally{Qs<=Bl&&Lh(this),Pn=1<<--Qs,ut=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(Ha(this),this.onStop&&this.onStop(),this.active=!1)}}function Ha(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Sn=!0;const ap=[];function cs(){ap.push(Sn),Sn=!1}function us(){const e=ap.pop();Sn=e===void 0?!0:e}function yt(e,t,n){if(Sn&&ut){let s=jl.get(e);s||jl.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Vi()),cp(r,{effect:ut,target:e,type:t,key:n})}}function cp(e,t){let n=!1;Qs<=Bl?ip(e)||(e.n|=Pn,n=!lp(e)):n=!e.has(ut),n&&(e.add(ut),ut.deps.push(e),ut.onTrack&&ut.onTrack(Object.assign({effect:ut},t)))}function dn(e,t,n,s,r,l){const i=jl.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&oe(e)){const u=Number(s);i.forEach((p,d)=>{(d==="length"||d>=u)&&a.push(p)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":oe(e)?Ni(n)&&a.push(i.get("length")):(a.push(i.get(es)),Qn(e)&&a.push(i.get(Nl)));break;case"delete":oe(e)||(a.push(i.get(es)),Qn(e)&&a.push(i.get(Nl)));break;case"set":Qn(e)&&a.push(i.get(es));break}const c={target:e,type:t,key:n,newValue:s,oldValue:r,oldTarget:l};if(a.length===1)a[0]&&Dl(a[0],c);else{const u=[];for(const p of a)p&&u.push(...p);Dl(Vi(u),c)}}function Dl(e,t){const n=oe(e)?e:[...e];for(const s of n)s.computed&&ja(s,t);for(const s of n)s.computed||ja(s,t)}function ja(e,t){(e!==ut||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ne({effect:e},t)),e.scheduler?e.scheduler():e.run())}const Hh=Hn("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Hi)),jh=Br(),Bh=Br(!1,!0),Nh=Br(!0),Dh=Br(!0,!0),Ba=Vh();function Vh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=he(this);for(let l=0,i=this.length;l<i;l++)yt(s,"get",l+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cs();const s=he(this)[t].apply(this,n);return us(),s}}),e}function Uh(e){const t=he(this);return yt(t,"has",e),t.hasOwnProperty(e)}function Br(e=!1,t=!1){return function(s,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&l===(e?t?vp:gp:t?yp:mp).get(s))return s;const i=oe(s);if(!e){if(i&&_e(Ba,r))return Reflect.get(Ba,r,l);if(r==="hasOwnProperty")return Uh}const a=Reflect.get(s,r,l);return(Hi(r)?up.has(r):Hh(r))||(e||yt(s,"get",r),t)?a:Te(a)?i&&Ni(r)?a:a.value:Re(a)?e?Xt(a):Be(a):a}}const Jh=pp(),qh=pp(!0);function pp(e=!1){return function(n,s,r,l){let i=n[s];if(In(i)&&Te(i)&&!Te(r))return!1;if(!e&&(!wr(r)&&!In(r)&&(i=he(i),r=he(r)),!oe(n)&&Te(i)&&!Te(r)))return i.value=r,!0;const a=oe(n)&&Ni(s)?Number(s)<n.length:_e(n,s),c=Reflect.set(n,s,r,l);return n===he(l)&&(a?vo(r,i)&&dn(n,"set",s,r,i):dn(n,"add",s,r)),c}}function Wh(e,t){const n=_e(e,t),s=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&dn(e,"delete",t,void 0,s),r}function Xh(e,t){const n=Reflect.has(e,t);return(!Hi(t)||!up.has(t))&&yt(e,"has",t),n}function zh(e){return yt(e,"iterate",oe(e)?"length":es),Reflect.ownKeys(e)}const dp={get:jh,set:Jh,deleteProperty:Wh,has:Xh,ownKeys:zh},fp={get:Nh,set(e,t){return br(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return br(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Kh=Ne({},dp,{get:Bh,set:qh}),Yh=Ne({},fp,{get:Dh}),Ji=e=>e,Nr=e=>Reflect.getPrototypeOf(e);function Ko(e,t,n=!1,s=!1){e=e.__v_raw;const r=he(e),l=he(t);n||(t!==l&&yt(r,"get",t),yt(r,"get",l));const{has:i}=Nr(r),a=s?Ji:n?qi:Fo;if(i.call(r,t))return a(e.get(t));if(i.call(r,l))return a(e.get(l));e!==r&&e.get(t)}function Yo(e,t=!1){const n=this.__v_raw,s=he(n),r=he(e);return t||(e!==r&&yt(s,"has",e),yt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Zo(e,t=!1){return e=e.__v_raw,!t&&yt(he(e),"iterate",es),Reflect.get(e,"size",e)}function Na(e){e=he(e);const t=he(this);return Nr(t).has.call(t,e)||(t.add(e),dn(t,"add",e,e)),this}function Da(e,t){t=he(t);const n=he(this),{has:s,get:r}=Nr(n);let l=s.call(n,e);l?hp(n,s,e):(e=he(e),l=s.call(n,e));const i=r.call(n,e);return n.set(e,t),l?vo(t,i)&&dn(n,"set",e,t,i):dn(n,"add",e,t),this}function Va(e){const t=he(this),{has:n,get:s}=Nr(t);let r=n.call(t,e);r?hp(t,n,e):(e=he(e),r=n.call(t,e));const l=s?s.call(t,e):void 0,i=t.delete(e);return r&&dn(t,"delete",e,void 0,l),i}function Ua(){const e=he(this),t=e.size!==0,n=Qn(e)?new Map(e):new Set(e),s=e.clear();return t&&dn(e,"clear",void 0,void 0,n),s}function Go(e,t){return function(s,r){const l=this,i=l.__v_raw,a=he(i),c=t?Ji:e?qi:Fo;return!e&&yt(a,"iterate",es),i.forEach((u,p)=>s.call(r,c(u),c(p),l))}}function Qo(e,t,n){return function(...s){const r=this.__v_raw,l=he(r),i=Qn(l),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=r[e](...s),p=n?Ji:t?qi:Fo;return!t&&yt(l,"iterate",c?Nl:es),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[p(d[0]),p(d[1])]:p(d),done:f}},[Symbol.iterator](){return this}}}}function mn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${is(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Zh(){const e={get(l){return Ko(this,l)},get size(){return Zo(this)},has:Yo,add:Na,set:Da,delete:Va,clear:Ua,forEach:Go(!1,!1)},t={get(l){return Ko(this,l,!1,!0)},get size(){return Zo(this)},has:Yo,add:Na,set:Da,delete:Va,clear:Ua,forEach:Go(!1,!0)},n={get(l){return Ko(this,l,!0)},get size(){return Zo(this,!0)},has(l){return Yo.call(this,l,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Go(!0,!1)},s={get(l){return Ko(this,l,!0,!0)},get size(){return Zo(this,!0)},has(l){return Yo.call(this,l,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Qo(l,!1,!1),n[l]=Qo(l,!0,!1),t[l]=Qo(l,!1,!0),s[l]=Qo(l,!0,!0)}),[e,n,t,s]}const[Gh,Qh,em,tm]=Zh();function Dr(e,t){const n=t?e?tm:em:e?Qh:Gh;return(s,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(_e(n,r)&&r in s?n:s,r,l)}const nm={get:Dr(!1,!1)},sm={get:Dr(!1,!0)},om={get:Dr(!0,!1)},rm={get:Dr(!0,!0)};function hp(e,t,n){const s=he(n);if(s!==n&&t.call(e,s)){const r=Bi(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const mp=new WeakMap,yp=new WeakMap,gp=new WeakMap,vp=new WeakMap;function lm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function im(e){return e.__v_skip||!Object.isExtensible(e)?0:lm(Bi(e))}function Be(e){return In(e)?e:Vr(e,!1,dp,nm,mp)}function am(e){return Vr(e,!1,Kh,sm,yp)}function Xt(e){return Vr(e,!0,fp,om,gp)}function xs(e){return Vr(e,!0,Yh,rm,vp)}function Vr(e,t,n,s,r){if(!Re(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const i=im(e);if(i===0)return e;const a=new Proxy(e,i===2?s:n);return r.set(e,a),a}function ts(e){return In(e)?ts(e.__v_raw):!!(e&&e.__v_isReactive)}function In(e){return!!(e&&e.__v_isReadonly)}function wr(e){return!!(e&&e.__v_isShallow)}function Vl(e){return ts(e)||In(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Ur(e){return _r(e,"__v_skip",!0),e}const Fo=e=>Re(e)?Be(e):e,qi=e=>Re(e)?Xt(e):e;function Wi(e){Sn&&ut&&(e=he(e),cp(e.dep||(e.dep=Vi()),{target:e,type:"get",key:"value"}))}function Xi(e,t){e=he(e);const n=e.dep;n&&Dl(n,{target:e,type:"set",key:"value",newValue:t})}function Te(e){return!!(e&&e.__v_isRef===!0)}function q(e){return Fp(e,!1)}function Yt(e){return Fp(e,!0)}function Fp(e,t){return Te(e)?e:new cm(e,t)}class cm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:Fo(t)}get value(){return Wi(this),this._value}set value(t){const n=this.__v_isShallow||wr(t)||In(t);t=n?t:he(t),vo(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Fo(t),Xi(this,t))}}function C(e){return Te(e)?e.value:e}const um={get:(e,t,n)=>C(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Te(r)&&!Te(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function _p(e){return ts(e)?e:new Proxy(e,um)}class pm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>Wi(this),()=>Xi(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function dm(e){return new pm(e)}var bp;class fm{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[bp]=!1,this._dirty=!0,this.effect=new Ui(t,()=>{this._dirty||(this._dirty=!0,Xi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=he(this);return Wi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}bp="__v_isReadonly";function hm(e,t,n=!1){let s,r;const l=pe(e);l?(s=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,r=e.set);const i=new fm(s,r,l||!r,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const ns=[];function cr(e){ns.push(e)}function ur(){ns.pop()}function I(e,...t){cs();const n=ns.length?ns[ns.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=mm();if(s)cn(s,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:l})=>`at <${Qr(n,l.type)}>`).join(`
`),r]);else{const l=[`[Vue warn]: ${e}`,...t];r.length&&l.push(`
`,...ym(r)),console.warn(...l)}us()}function mm(){let e=ns[ns.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function ym(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...gm(n))}),t}function gm({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${Qr(e.component,e.type,s)}`,l=">"+n;return e.props?[r,...vm(e.props),l]:[r+l]}function vm(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...wp(s,e[s]))}),n.length>3&&t.push(" ..."),t}function wp(e,t,n){return je(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Te(t)?(t=wp(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):pe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function Fm(e,t){e!==void 0&&(typeof e!="number"?I(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&I(`${t} is NaN - the duration expression might be incorrect.`))}const zi={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function cn(e,t,n,s){let r;try{r=s?e(...s):e()}catch(l){Jr(l,t,n)}return r}function Ot(e,t,n,s){if(pe(e)){const l=cn(e,t,n,s);return l&&ji(l)&&l.catch(i=>{Jr(i,t,n)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Ot(e[l],t,n,s));return r}function Jr(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,a=zi[n];for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,i,a)===!1)return}l=l.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,i,a]);return}}_m(e,n,r,s)}function _m(e,t,n,s=!0){{const r=zi[t];if(n&&cr(n),I(`Unhandled error${r?` during execution of ${r}`:""}`),n&&ur(),s)throw e;console.error(e)}}let _o=!1,Ul=!1;const st=[];let qt=0;const Es=[];let Jt=null,Fn=0;const xp=Promise.resolve();let Ki=null;const bm=100;function et(e){const t=Ki||xp;return e?t.then(this?e.bind(this):e):t}function wm(e){let t=qt+1,n=st.length;for(;t<n;){const s=t+n>>>1;bo(st[s])<e?t=s+1:n=s}return t}function qr(e){(!st.length||!st.includes(e,_o&&e.allowRecurse?qt+1:qt))&&(e.id==null?st.push(e):st.splice(wm(e.id),0,e),kp())}function kp(){!_o&&!Ul&&(Ul=!0,Ki=xp.then(Ep))}function xm(e){const t=st.indexOf(e);t>qt&&st.splice(t,1)}function Cp(e){oe(e)?Es.push(...e):(!Jt||!Jt.includes(e,e.allowRecurse?Fn+1:Fn))&&Es.push(e),kp()}function Ja(e,t=_o?qt+1:0){for(e=e||new Map;t<st.length;t++){const n=st[t];if(n&&n.pre){if(Yi(e,n))continue;st.splice(t,1),t--,n()}}}function Sp(e){if(Es.length){const t=[...new Set(Es)];if(Es.length=0,Jt){Jt.push(...t);return}for(Jt=t,e=e||new Map,Jt.sort((n,s)=>bo(n)-bo(s)),Fn=0;Fn<Jt.length;Fn++)Yi(e,Jt[Fn])||Jt[Fn]();Jt=null,Fn=0}}const bo=e=>e.id==null?1/0:e.id,km=(e,t)=>{const n=bo(e)-bo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ep(e){Ul=!1,_o=!0,e=e||new Map,st.sort(km);const t=n=>Yi(e,n);try{for(qt=0;qt<st.length;qt++){const n=st[qt];if(n&&n.active!==!1){if(t(n))continue;cn(n,null,14)}}}finally{qt=0,st.length=0,Sp(e),_o=!1,Ki=null,(st.length||Es.length)&&Ep(e)}}function Yi(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>bm){const s=t.ownerInstance,r=s&&Co(s.type);return I(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let En=!1;const _s=new Set;sp().__VUE_HMR_RUNTIME__={createRecord:rl($p),rerender:rl(Em),reload:rl($m)};const as=new Map;function Cm(e){const t=e.type.__hmrId;let n=as.get(t);n||($p(t,e.type),n=as.get(t)),n.instances.add(e)}function Sm(e){as.get(e.type.__hmrId).instances.delete(e)}function $p(e,t){return as.has(e)?!1:(as.set(e,{initialDef:oo(t),instances:new Set}),!0)}function oo(e){return id(e)?e.__vccOpts:e}function Em(e,t){const n=as.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,oo(s.type).render=t),s.renderCache=[],En=!0,s.update(),En=!1}))}function $m(e,t){const n=as.get(e);if(!n)return;t=oo(t),qa(n.initialDef,t);const s=[...n.instances];for(const r of s){const l=oo(r.type);_s.has(l)||(l!==n.initialDef&&qa(l,t),_s.add(l)),r.appContext.optionsCache.delete(r.type),r.ceReload?(_s.add(l),r.ceReload(t.styles),_s.delete(l)):r.parent?qr(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Cp(()=>{for(const r of s)_s.delete(oo(r.type))})}function qa(e,t){Ne(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function rl(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Wt,eo=[],Jl=!1;function Bo(e,...t){Wt?Wt.emit(e,...t):Jl||eo.push({event:e,args:t})}function Tp(e,t){var n,s;Wt=e,Wt?(Wt.enabled=!0,eo.forEach(({event:r,args:l})=>Wt.emit(r,...l)),eo=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Tp(l,t)}),setTimeout(()=>{Wt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Jl=!0,eo=[])},3e3)):(Jl=!0,eo=[])}function Tm(e,t){Bo("app:init",e,t,{Fragment:Se,Text:Vo,Comment:Ge,Static:pr})}function Am(e){Bo("app:unmount",e)}const ql=Zi("component:added"),Ap=Zi("component:updated"),Rm=Zi("component:removed"),Om=e=>{Wt&&typeof Wt.cleanupBuffer=="function"&&!Wt.cleanupBuffer(e)&&Rm(e)};function Zi(e){return t=>{Bo(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Pm=Rp("perf:start"),Im=Rp("perf:end");function Rp(e){return(t,n,s)=>{Bo(e,t.appContext.app,t.uid,t,n,s)}}function Mm(e,t,n){Bo("component:emit",e.appContext.app,e,t,n)}function Lm(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Me;{const{emitsOptions:p,propsOptions:[d]}=e;if(p)if(!(t in p))(!d||!(Jn(t)in d))&&I(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Jn(t)}" prop.`);else{const f=p[t];pe(f)&&(f(...n)||I(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in s){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:f}=s[p]||Me;f&&(r=n.map(h=>je(h)?h.trim():h)),d&&(r=n.map(Hl))}Mm(e,t,r);{const p=t.toLowerCase();p!==t&&s[Jn(p)]&&I(`Event "${p}" is emitted in component ${Qr(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${pn(t)}" instead of "${t}".`)}let a,c=s[a=Jn(t)]||s[a=Jn(Kt(t))];!c&&l&&(c=s[a=Jn(pn(t))]),c&&Ot(c,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ot(u,e,6,r)}}function Op(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const l=e.emits;let i={},a=!1;if(!pe(e)){const c=u=>{const p=Op(u,t,!0);p&&(a=!0,Ne(i,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!a?(Re(e)&&s.set(e,null),null):(oe(l)?l.forEach(c=>i[c]=null):Ne(i,l),Re(e)&&s.set(e,i),i)}function Wr(e,t){return!e||!Ho(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,pn(t))||_e(e,t))}let Ke=null,Xr=null;function xr(e){const t=Ke;return Ke=e,Xr=e&&e.type.__scopeId||null,t}function Hm(e){Xr=e}function jm(){Xr=null}function ue(e,t=Ke,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&oc(-1);const l=xr(t);let i;try{i=e(...r)}finally{xr(l),s._d&&oc(1)}return Ap(t),i};return s._n=!0,s._c=!0,s._d=!0,s}let Wl=!1;function kr(){Wl=!0}function ll(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:l,propsOptions:[i],slots:a,attrs:c,emit:u,render:p,renderCache:d,data:f,setupState:h,ctx:m,inheritAttrs:v}=e;let F,x;const b=xr(e);Wl=!1;try{if(n.shapeFlag&4){const R=r||s;F=Bt(p.call(R,R,d,l,h,f,m)),x=c}else{const R=t;c===l&&kr(),F=Bt(R.length>1?R(l,{get attrs(){return kr(),c},slots:a,emit:u}):R(l,null)),x=t.props?c:Nm(c)}}catch(R){lo.length=0,Jr(R,e,1),F=z(Ge)}let w=F,S;if(F.patchFlag>0&&F.patchFlag&2048&&([w,S]=Bm(F)),x&&v!==!1){const R=Object.keys(x),{shapeFlag:M}=w;if(R.length){if(M&7)i&&R.some(Fr)&&(x=Dm(x,i)),w=Dt(w,x);else if(!Wl&&w.type!==Ge){const V=Object.keys(c),A=[],N=[];for(let Z=0,ie=V.length;Z<ie;Z++){const W=V[Z];Ho(W)?Fr(W)||A.push(W[2].toLowerCase()+W.slice(3)):N.push(W)}N.length&&I(`Extraneous non-props attributes (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),A.length&&I(`Extraneous non-emits event listeners (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Wa(w)||I("Runtime directive used on component with non-element root node. The directives will not function as intended."),w=Dt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(Wa(w)||I("Component inside <Transition> renders non-element root node that cannot be animated."),w.transition=n.transition),S?S(w):F=w,xr(b),F}const Bm=e=>{const t=e.children,n=e.dynamicChildren,s=Pp(t);if(!s)return[e,void 0];const r=t.indexOf(s),l=n?n.indexOf(s):-1,i=a=>{t[r]=a,n&&(l>-1?n[l]=a:a.patchFlag>0&&(e.dynamicChildren=[...n,a]))};return[Bt(s),i]};function Pp(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(Zt(s)){if(s.type!==Ge||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Nm=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ho(n))&&((t||(t={}))[n]=e[n]);return t},Dm=(e,t)=>{const n={};for(const s in e)(!Fr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},Wa=e=>e.shapeFlag&7||e.type===Ge;function Vm(e,t,n){const{props:s,children:r,component:l}=e,{props:i,children:a,patchFlag:c}=t,u=l.emitsOptions;if((r||a)&&En||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xa(s,i,u):!!i;if(c&8){const p=t.dynamicProps;for(let d=0;d<p.length;d++){const f=p[d];if(i[f]!==s[f]&&!Wr(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Xa(s,i,u):!0:!!i;return!1}function Xa(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const l=s[r];if(t[l]!==e[l]&&!Wr(n,l))return!0}return!1}function Um({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ip=e=>e.__isSuspense;function Jm(e,t){t&&t.pendingBranch?oe(e)?t.effects.push(...e):t.effects.push(e):Cp(e)}function wt(e,t){if(!Ve)I("provide() can only be used inside setup().");else{let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[e]=t}}function Y(e,t,n=!1){const s=Ve||Ke;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&pe(t)?t.call(s.proxy):t;I(`injection "${String(e)}" not found.`)}else I("inject() can only be used inside setup() or functional components.")}function ps(e,t){return Gi(e,null,t)}const er={};function ge(e,t,n){return pe(t)||I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Gi(e,t,n)}function Gi(e,t,{immediate:n,deep:s,flush:r,onTrack:l,onTrigger:i}=Me){t||(n!==void 0&&I('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&I('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=S=>{I("Invalid watch source: ",S,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Di()===(Ve==null?void 0:Ve.scope)?Ve:null;let u,p=!1,d=!1;if(Te(e)?(u=()=>e.value,p=wr(e)):ts(e)?(u=()=>e,s=!0):oe(e)?(d=!0,p=e.some(S=>ts(S)||wr(S)),u=()=>e.map(S=>{if(Te(S))return S.value;if(ts(S))return Yn(S);if(pe(S))return cn(S,c,2);a(S)})):pe(e)?t?u=()=>cn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ot(e,c,3,[h])}:(u=ht,a(e)),t&&s){const S=u;u=()=>Yn(S())}let f,h=S=>{f=b.onStop=()=>{cn(S,c,4)}},m;if(ko)if(h=ht,t?n&&Ot(t,c,3,[u(),d?[]:void 0,h]):u(),r==="sync"){const S=Yy();m=S.__watcherHandles||(S.__watcherHandles=[])}else return ht;let v=d?new Array(e.length).fill(er):er;const F=()=>{if(b.active)if(t){const S=b.run();(s||p||(d?S.some((R,M)=>vo(R,v[M])):vo(S,v)))&&(f&&f(),Ot(t,c,3,[S,v===er?void 0:d&&v[0]===er?[]:v,h]),v=S)}else b.run()};F.allowRecurse=!!t;let x;r==="sync"?x=F:r==="post"?x=()=>Qe(F,c&&c.suspense):(F.pre=!0,c&&(F.id=c.uid),x=()=>qr(F));const b=new Ui(u,x);b.onTrack=l,b.onTrigger=i,t?n?F():v=b.run():r==="post"?Qe(b.run.bind(b),c&&c.suspense):b.run();const w=()=>{b.stop(),c&&c.scope&&Li(c.scope.effects,b)};return m&&m.push(w),w}function qm(e,t,n){const s=this.proxy,r=je(e)?e.includes(".")?Mp(s,e):()=>s[e]:e.bind(s,s);let l;pe(t)?l=t:(l=t.handler,n=t);const i=Ve;Is(this);const a=Gi(r,l.bind(s),n);return i?Is(i):os(),a}function Mp(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Yn(e,t){if(!Re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Te(e))Yn(e.value,t);else if(oe(e))for(let n=0;n<e.length;n++)Yn(e[n],t);else if(ep(e)||Qn(e))e.forEach(n=>{Yn(n,t)});else if(np(e))for(const n in e)Yn(e[n],t);return e}function Lp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ds(()=>{e.isMounted=!0}),Do(()=>{e.isUnmounting=!0}),e}const $t=[Function,Array],Wm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(e,{slots:t}){const n=Et(),s=Lp();let r;return()=>{const l=t.default&&Qi(t.default(),!0);if(!l||!l.length)return;let i=l[0];if(l.length>1){let v=!1;for(const F of l)if(F.type!==Ge){if(v){I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=F,v=!0}}const a=he(e),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&I(`invalid <transition> mode: ${c}`),s.isLeaving)return il(i);const u=za(i);if(!u)return il(i);const p=wo(u,a,s,n);Ps(u,p);const d=n.subTree,f=d&&za(d);let h=!1;const{getTransitionKey:m}=u.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,h=!0)}if(f&&f.type!==Ge&&(!kn(u,f)||h)){const v=wo(f,a,s,n);if(Ps(f,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},il(i);c==="in-out"&&u.type!==Ge&&(v.delayLeave=(F,x,b)=>{const w=Hp(s,f);w[String(f.key)]=f,F._leaveCb=()=>{x(),F._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=b})}return i}}},Xm=Wm;function Hp(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function wo(e,t,n,s){const{appear:r,mode:l,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:v,onAppear:F,onAfterAppear:x,onAppearCancelled:b}=t,w=String(e.key),S=Hp(n,e),R=(A,N)=>{A&&Ot(A,s,9,N)},M=(A,N)=>{const Z=N[1];R(A,N),oe(A)?A.every(ie=>ie.length<=1)&&Z():A.length<=1&&Z()},V={mode:l,persisted:i,beforeEnter(A){let N=a;if(!n.isMounted)if(r)N=v||a;else return;A._leaveCb&&A._leaveCb(!0);const Z=S[w];Z&&kn(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),R(N,[A])},enter(A){let N=c,Z=u,ie=p;if(!n.isMounted)if(r)N=F||c,Z=x||u,ie=b||p;else return;let W=!1;const ae=A._enterCb=Oe=>{W||(W=!0,Oe?R(ie,[A]):R(Z,[A]),V.delayedLeave&&V.delayedLeave(),A._enterCb=void 0)};N?M(N,[A,ae]):ae()},leave(A,N){const Z=String(e.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return N();R(d,[A]);let ie=!1;const W=A._leaveCb=ae=>{ie||(ie=!0,N(),ae?R(m,[A]):R(h,[A]),A._leaveCb=void 0,S[Z]===e&&delete S[Z])};S[Z]=e,f?M(f,[A,W]):W()},clone(A){return wo(A,t,n,s)}};return V}function il(e){if(No(e))return e=Dt(e),e.children=null,e}function za(e){return No(e)?e.children?e.children[0]:void 0:e}function Ps(e,t){e.shapeFlag&6&&e.component?Ps(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qi(e,t=!1,n){let s=[],r=0;for(let l=0;l<e.length;l++){let i=e[l];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:l);i.type===Se?(i.patchFlag&128&&r++,s=s.concat(Qi(i.children,t,a))):(t||i.type!==Ge)&&s.push(a!=null?Dt(i,{key:a}):i)}if(r>1)for(let l=0;l<s.length;l++)s[l].patchFlag=-2;return s}function we(e){return pe(e)?{setup:e,name:e.name}:e}const $s=e=>!!e.type.__asyncLoader,No=e=>e.type.__isKeepAlive,zm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Et(),s=n.ctx;if(!s.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const r=new Map,l=new Set;let i=null;n.__v_cache=r;const a=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:d}}}=s,f=d("div");s.activate=(b,w,S,R,M)=>{const V=b.component;u(b,w,S,0,a),c(V.vnode,b,w,S,V,a,R,b.slotScopeIds,M),Qe(()=>{V.isDeactivated=!1,V.a&&wn(V.a);const A=b.props&&b.props.onVnodeMounted;A&&Tt(A,V.parent,b)},a),ql(V)},s.deactivate=b=>{const w=b.component;u(b,f,null,1,a),Qe(()=>{w.da&&wn(w.da);const S=b.props&&b.props.onVnodeUnmounted;S&&Tt(S,w.parent,b),w.isDeactivated=!0},a),ql(w)};function h(b){al(b),p(b,n,a,!0)}function m(b){r.forEach((w,S)=>{const R=Co(w.type);R&&(!b||!b(R))&&v(S)})}function v(b){const w=r.get(b);!i||!kn(w,i)?h(w):i&&al(i),r.delete(b),l.delete(b)}ge(()=>[e.include,e.exclude],([b,w])=>{b&&m(S=>to(b,S)),w&&m(S=>!to(w,S))},{flush:"post",deep:!0});let F=null;const x=()=>{F!=null&&r.set(F,cl(n.subTree))};return ds(x),Kr(x),Do(()=>{r.forEach(b=>{const{subTree:w,suspense:S}=n,R=cl(w);if(b.type===R.type&&b.key===R.key){al(R);const M=R.component.da;M&&Qe(M,S);return}h(b)})}),()=>{if(F=null,!t.default)return null;const b=t.default(),w=b[0];if(b.length>1)return I("KeepAlive should contain exactly one component child."),i=null,b;if(!Zt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return i=null,w;let S=cl(w);const R=S.type,M=Co($s(S)?S.type.__asyncResolved||{}:R),{include:V,exclude:A,max:N}=e;if(V&&(!M||!to(V,M))||A&&M&&to(A,M))return i=S,w;const Z=S.key==null?R:S.key,ie=r.get(Z);return S.el&&(S=Dt(S),w.shapeFlag&128&&(w.ssContent=S)),F=Z,ie?(S.el=ie.el,S.component=ie.component,S.transition&&Ps(S,S.transition),S.shapeFlag|=512,l.delete(Z),l.add(Z)):(l.add(Z),N&&l.size>parseInt(N,10)&&v(l.values().next().value)),S.shapeFlag|=256,i=S,Ip(w.type)?w:S}}},jp=zm;function to(e,t){return oe(e)?e.some(n=>to(n,t)):je(e)?e.split(",").includes(t):$h(e)?e.test(t):!1}function Bp(e,t){Dp(e,"a",t)}function Np(e,t){Dp(e,"da",t)}function Dp(e,t,n=Ve){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(zr(t,s,n),n){let r=n.parent;for(;r&&r.parent;)No(r.parent.vnode)&&Km(s,t,n,r),r=r.parent}}function Km(e,t,n,s){const r=zr(t,e,s,!0);Yr(()=>{Li(s[t],r)},n)}function al(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function cl(e){return e.shapeFlag&128?e.ssContent:e}function zr(e,t,n=Ve,s=!1){if(n){const r=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;cs(),Is(n);const a=Ot(t,n,e,i);return os(),us(),a});return s?r.unshift(l):r.push(l),l}else{const r=Jn(zi[e].replace(/ hook$/,""));I(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const fn=e=>(t,n=Ve)=>(!ko||e==="sp")&&zr(e,(...s)=>t(...s),n),Ym=fn("bm"),ds=fn("m"),Zm=fn("bu"),Kr=fn("u"),Do=fn("bum"),Yr=fn("um"),Gm=fn("sp"),Qm=fn("rtg"),ey=fn("rtc");function ty(e,t=Ve){zr("ec",e,t)}function Vp(e){Th(e)&&I("Do not use built-in directive ids as custom directive id: "+e)}function $n(e,t){const n=Ke;if(n===null)return I("withDirectives can only be used inside render functions."),e;const s=Gr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[i,a,c,u=Me]=t[l];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Yn(a),r.push({dir:i,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function jn(e,t,n,s){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];l&&(a.oldValue=l[i].value);let c=a.dir[s];c&&(cs(),Ot(c,n,8,[e.el,a,e,t]),us())}}const Xl="components",ny="directives";function Mn(e,t){return Up(Xl,e,!0,t)||e}const sy=Symbol();function Cr(e){return Up(ny,e)}function Up(e,t,n=!0,s=!1){const r=Ke||Ve;if(r){const l=r.type;if(e===Xl){const a=Co(l,!1);if(a&&(a===t||a===Kt(t)||a===is(Kt(t))))return l}const i=Ka(r[e]||l[e],t)||Ka(r.appContext[e],t);if(!i&&s)return l;if(n&&!i){const a=e===Xl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";I(`Failed to resolve ${e.slice(0,-1)}: ${t}${a}`)}return i}else I(`resolve${is(e.slice(0,-1))} can only be used in render() or setup().`)}function Ka(e,t){return e&&(e[t]||e[Kt(t)]||e[is(Kt(t))])}function Hs(e,t,n,s){let r;const l=n&&n[s];if(oe(e)||je(e)){r=new Array(e.length);for(let i=0,a=e.length;i<a;i++)r[i]=t(e[i],i,void 0,l&&l[i])}else if(typeof e=="number"){Number.isInteger(e)||I(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,l&&l[i])}else if(Re(e))if(e[Symbol.iterator])r=Array.from(e,(i,a)=>t(i,a,void 0,l&&l[a]));else{const i=Object.keys(e);r=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const u=i[a];r[a]=t(e[u],u,a,l&&l[a])}}else r=[];return n&&(n[s]=r),r}function gt(e,t,n={},s,r){if(Ke.isCE||Ke.parent&&$s(Ke.parent)&&Ke.parent.isCE)return t!=="default"&&(n.name=t),z("slot",n,s&&s());let l=e[t];l&&l.length>1&&(I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),k();const i=l&&Jp(l(n)),a=se(Se,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),l&&l._c&&(l._d=!0),a}function Jp(e){return e.some(t=>Zt(t)?!(t.type===Ge||t.type===Se&&!Jp(t.children)):!0)?e:null}const zl=e=>e?od(e)?Gr(e)||e.proxy:zl(e.parent):null,ss=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>xs(e.props),$attrs:e=>xs(e.attrs),$slots:e=>xs(e.slots),$refs:e=>xs(e.refs),$parent:e=>zl(e.parent),$root:e=>zl(e.root),$emit:e=>e.emit,$options:e=>ta(e),$forceUpdate:e=>e.f||(e.f=()=>qr(e.update)),$nextTick:e=>e.n||(e.n=et.bind(e.proxy)),$watch:e=>qm.bind(e)}),ea=e=>e==="_"||e==="$",ul=(e,t)=>e!==Me&&!e.__isScriptSetup&&_e(e,t),qp={get({_:e},t){const{ctx:n,setupState:s,data:r,props:l,accessCache:i,type:a,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return l[t]}else{if(ul(s,t))return i[t]=1,s[t];if(r!==Me&&_e(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&_e(u,t))return i[t]=3,l[t];if(n!==Me&&_e(n,t))return i[t]=4,n[t];Kl&&(i[t]=0)}}const p=ss[t];let d,f;if(p)return t==="$attrs"&&(yt(e,"get",t),kr()),p(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Me&&_e(n,t))return i[t]=4,n[t];if(f=c.config.globalProperties,_e(f,t))return f[t];Ke&&(!je(t)||t.indexOf("__v")!==0)&&(r!==Me&&ea(t[0])&&_e(r,t)?I(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ke&&I(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:r,ctx:l}=e;return ul(r,t)?(r[t]=n,!0):r.__isScriptSetup&&_e(r,t)?(I(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==Me&&_e(s,t)?(s[t]=n,!0):_e(e.props,t)?(I(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(I(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:n}):l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:l}},i){let a;return!!n[i]||e!==Me&&_e(e,i)||ul(t,i)||(a=l[0])&&_e(a,i)||_e(s,i)||_e(ss,i)||_e(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};qp.ownKeys=e=>(I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function oy(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ss).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>ss[n](e),set:ht})}),t}function ry(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:ht})})}function ly(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(s=>{if(!n.__isScriptSetup){if(ea(s[0])){I(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:ht})}})}function iy(){const e=Object.create(null);return(t,n)=>{e[n]?I(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let Kl=!0;function ay(e){const t=ta(e),n=e.proxy,s=e.ctx;Kl=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:a,provide:c,inject:u,created:p,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:v,deactivated:F,beforeDestroy:x,beforeUnmount:b,destroyed:w,unmounted:S,render:R,renderTracked:M,renderTriggered:V,errorCaptured:A,serverPrefetch:N,expose:Z,inheritAttrs:ie,components:W,directives:ae,filters:Oe}=t,qe=iy();{const[X]=e.propsOptions;if(X)for(const ne in X)qe("Props",ne)}if(u&&cy(u,s,qe,e.appContext.config.unwrapInjectedRef),i)for(const X in i){const ne=i[X];pe(ne)?(Object.defineProperty(s,X,{value:ne.bind(n),configurable:!0,enumerable:!0,writable:!0}),qe("Methods",X)):I(`Method "${X}" has type "${typeof ne}" in the component definition. Did you reference the function correctly?`)}if(r){pe(r)||I("The data option must be a function. Plain object usage is no longer supported.");const X=r.call(n,n);if(ji(X)&&I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Re(X))I("data() should return an object.");else{e.data=Be(X);for(const ne in X)qe("Data",ne),ea(ne[0])||Object.defineProperty(s,ne,{configurable:!0,enumerable:!0,get:()=>X[ne],set:ht})}}if(Kl=!0,l)for(const X in l){const ne=l[X],ve=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):ht;ve===ht&&I(`Computed property "${X}" has no getter.`);const Pe=!pe(ne)&&pe(ne.set)?ne.set.bind(n):()=>{I(`Write operation failed: computed property "${X}" is readonly.`)},vt=T({get:ve,set:Pe});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>vt.value,set:nt=>vt.value=nt}),qe("Computed",X)}if(a)for(const X in a)Wp(a[X],s,n,X);if(c){const X=pe(c)?c.call(n):c;Reflect.ownKeys(X).forEach(ne=>{wt(ne,X[ne])})}p&&Ya(p,e,"c");function Le(X,ne){oe(ne)?ne.forEach(ve=>X(ve.bind(n))):ne&&X(ne.bind(n))}if(Le(Ym,d),Le(ds,f),Le(Zm,h),Le(Kr,m),Le(Bp,v),Le(Np,F),Le(ty,A),Le(ey,M),Le(Qm,V),Le(Do,b),Le(Yr,S),Le(Gm,N),oe(Z))if(Z.length){const X=e.exposed||(e.exposed={});Z.forEach(ne=>{Object.defineProperty(X,ne,{get:()=>n[ne],set:ve=>n[ne]=ve})})}else e.exposed||(e.exposed={});R&&e.render===ht&&(e.render=R),ie!=null&&(e.inheritAttrs=ie),W&&(e.components=W),ae&&(e.directives=ae)}function cy(e,t,n=ht,s=!1){oe(e)&&(e=Yl(e));for(const r in e){const l=e[r];let i;Re(l)?"default"in l?i=Y(l.from||r,l.default,!0):i=Y(l.from||r):i=Y(l),Te(i)?s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):(I(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[r]=i):t[r]=i,n("Inject",r)}}function Ya(e,t,n){Ot(oe(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wp(e,t,n,s){const r=s.includes(".")?Mp(n,s):()=>n[s];if(je(e)){const l=t[e];pe(l)?ge(r,l):I(`Invalid watch handler specified by key "${e}"`,l)}else if(pe(e))ge(r,e.bind(n));else if(Re(e))if(oe(e))e.forEach(l=>Wp(l,t,n,s));else{const l=pe(e.handler)?e.handler.bind(n):t[e.handler];pe(l)?ge(r,l,e):I(`Invalid watch handler specified by key "${e.handler}"`,l)}else I(`Invalid watch option: "${s}"`,e)}function ta(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,a=l.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>Sr(c,u,i,!0)),Sr(c,t,i)),Re(t)&&l.set(t,c),c}function Sr(e,t,n,s=!1){const{mixins:r,extends:l}=t;l&&Sr(e,l,n,!0),r&&r.forEach(i=>Sr(e,i,n,!0));for(const i in t)if(s&&i==="expose")I('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=uy[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const uy={data:Za,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:qn,directives:qn,watch:dy,provide:Za,inject:py};function Za(e,t){return t?e?function(){return Ne(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function py(e,t){return qn(Yl(e),Yl(t))}function Yl(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function it(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function dy(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const s in t)n[s]=it(e[s],t[s]);return n}function fy(e,t,n,s=!1){const r={},l={};_r(l,Zr,1),e.propsDefaults=Object.create(null),Xp(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);Kp(t||{},r,e),n?e.props=s?r:am(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function hy(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function my(e,t,n,s){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,a=he(r),[c]=e.propsOptions;let u=!1;if(!hy(e)&&(s||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let f=p[d];if(Wr(e.emitsOptions,f))continue;const h=t[f];if(c)if(_e(l,f))h!==l[f]&&(l[f]=h,u=!0);else{const m=Kt(f);r[m]=Zl(c,a,m,h,e,!1)}else h!==l[f]&&(l[f]=h,u=!0)}}}else{Xp(e,t,r,l)&&(u=!0);let p;for(const d in a)(!t||!_e(t,d)&&((p=pn(d))===d||!_e(t,p)))&&(c?n&&(n[d]!==void 0||n[p]!==void 0)&&(r[d]=Zl(c,a,d,void 0,e,!0)):delete r[d]);if(l!==a)for(const d in l)(!t||!_e(t,d))&&(delete l[d],u=!0)}u&&dn(e,"set","$attrs"),Kp(t||{},r,e)}function Xp(e,t,n,s){const[r,l]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(ar(c))continue;const u=t[c];let p;r&&_e(r,p=Kt(c))?!l||!l.includes(p)?n[p]=u:(a||(a={}))[p]=u:Wr(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(l){const c=he(n),u=a||Me;for(let p=0;p<l.length;p++){const d=l[p];n[d]=Zl(r,c,d,u[d],e,!_e(u,d))}}return i}function Zl(e,t,n,s,r,l){const i=e[n];if(i!=null){const a=_e(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&pe(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Is(r),s=u[n]=c.call(null,t),os())}else s=c}i[0]&&(l&&!a?s=!1:i[1]&&(s===""||s===pn(n))&&(s=!0))}return s}function zp(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const l=e.props,i={},a=[];let c=!1;if(!pe(e)){const p=d=>{c=!0;const[f,h]=zp(d,t,!0);Ne(i,f),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!c)return Re(e)&&s.set(e,Ss),Ss;if(oe(l))for(let p=0;p<l.length;p++){je(l[p])||I("props must be strings when using array syntax.",l[p]);const d=Kt(l[p]);Ga(d)&&(i[d]=Me)}else if(l){Re(l)||I("invalid props options",l);for(const p in l){const d=Kt(p);if(Ga(d)){const f=l[p],h=i[d]=oe(f)||pe(f)?{type:f}:Object.assign({},f);if(h){const m=ec(Boolean,h.type),v=ec(String,h.type);h[0]=m>-1,h[1]=v<0||m<v,(m>-1||_e(h,"default"))&&a.push(d)}}}}const u=[i,a];return Re(e)&&s.set(e,u),u}function Ga(e){return e[0]!=="$"?!0:(I(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Gl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Qa(e,t){return Gl(e)===Gl(t)}function ec(e,t){return oe(t)?t.findIndex(n=>Qa(n,e)):pe(t)&&Qa(t,e)?0:-1}function Kp(e,t,n){const s=he(t),r=n.propsOptions[0];for(const l in r){let i=r[l];i!=null&&yy(l,s[l],i,!_e(e,l)&&!_e(e,pn(l)))}}function yy(e,t,n,s){const{type:r,required:l,validator:i}=n;if(l&&s){I('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(r!=null&&r!==!0){let a=!1;const c=oe(r)?r:[r],u=[];for(let p=0;p<c.length&&!a;p++){const{valid:d,expectedType:f}=vy(t,c[p]);u.push(f||""),a=d}if(!a){I(Fy(e,t,u));return}}i&&!i(t)&&I('Invalid prop: custom validator check failed for prop "'+e+'".')}}const gy=Hn("String,Number,Boolean,Function,Symbol,BigInt");function vy(e,t){let n;const s=Gl(t);if(gy(s)){const r=typeof e;n=r===s.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else s==="Object"?n=Re(e):s==="Array"?n=oe(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function Fy(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(is).join(" | ")}`;const r=n[0],l=Bi(t),i=tc(t,r),a=tc(t,l);return n.length===1&&nc(r)&&!_y(r,l)&&(s+=` with value ${i}`),s+=`, got ${l} `,nc(l)&&(s+=`with value ${a}.`),s}function tc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function nc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function _y(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Yp=e=>e[0]==="_"||e==="$stable",na=e=>oe(e)?e.map(Bt):[Bt(e)],by=(e,t,n)=>{if(t._n)return t;const s=ue((...r)=>(Ve&&I(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),na(t(...r))),n);return s._c=!1,s},Zp=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Yp(r))continue;const l=e[r];if(pe(l))t[r]=by(r,l,s);else if(l!=null){I(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const i=na(l);t[r]=()=>i}}},Gp=(e,t)=>{No(e.vnode)||I("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=na(t);e.slots.default=()=>n},wy=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),_r(t,"_",n)):Zp(t,e.slots={})}else e.slots={},t&&Gp(e,t);_r(e.slots,Zr,1)},xy=(e,t,n)=>{const{vnode:s,slots:r}=e;let l=!0,i=Me;if(s.shapeFlag&32){const a=t._;a?En?Ne(r,t):n&&a===1?l=!1:(Ne(r,t),!n&&a===1&&delete r._):(l=!t.$stable,Zp(t,r)),i=t}else t&&(Gp(e,t),i={default:1});if(l)for(const a in r)!Yp(a)&&!(a in i)&&delete r[a]};function Qp(){return{app:null,config:{isNativeTag:Qu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ky=0;function Cy(e,t){return function(s,r=null){pe(s)||(s=Object.assign({},s)),r!=null&&!Re(r)&&(I("root props passed to app.mount() must be an object."),r=null);const l=Qp(),i=new Set;let a=!1;const c=l.app={_uid:ky++,_component:s,_props:r,_container:null,_context:l,_instance:null,version:$r,get config(){return l.config},set config(u){I("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return i.has(u)?I("Plugin has already been applied to target app."):u&&pe(u.install)?(i.add(u),u.install(c,...p)):pe(u)?(i.add(u),u(c,...p)):I('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return l.mixins.includes(u)?I("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):l.mixins.push(u),c},component(u,p){return ti(u,l.config),p?(l.components[u]&&I(`Component "${u}" has already been registered in target app.`),l.components[u]=p,c):l.components[u]},directive(u,p){return Vp(u),p?(l.directives[u]&&I(`Directive "${u}" has already been registered in target app.`),l.directives[u]=p,c):l.directives[u]},mount(u,p,d){if(a)I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=z(s,r);return f.appContext=l,l.reload=()=>{e(Dt(f),u,d)},p&&t?t(f,u):e(f,u,d),a=!0,c._container=u,u.__vue_app__=c,c._instance=f.component,Tm(c,$r),Gr(f.component)||f.component.proxy}},unmount(){a?(e(null,c._container),c._instance=null,Am(c),delete c._container.__vue_app__):I("Cannot unmount an app that is not mounted.")},provide(u,p){return u in l.provides&&I(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),l.provides[u]=p,c}};return c}}function Ql(e,t,n,s,r=!1){if(oe(e)){e.forEach((f,h)=>Ql(f,t&&(oe(t)?t[h]:t),n,s,r));return}if($s(s)&&!r)return;const l=s.shapeFlag&4?Gr(s.component)||s.component.proxy:s.el,i=r?null:l,{i:a,r:c}=e;if(!a){I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,p=a.refs===Me?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(je(u)?(p[u]=null,_e(d,u)&&(d[u]=null)):Te(u)&&(u.value=null)),pe(c))cn(c,a,12,[i,p]);else{const f=je(c),h=Te(c);if(f||h){const m=()=>{if(e.f){const v=f?_e(d,c)?d[c]:p[c]:c.value;r?oe(v)&&Li(v,l):oe(v)?v.includes(l)||v.push(l):f?(p[c]=[l],_e(d,c)&&(d[c]=p[c])):(c.value=[l],e.k&&(p[e.k]=c.value))}else f?(p[c]=i,_e(d,c)&&(d[c]=i)):h?(c.value=i,e.k&&(p[e.k]=i)):I("Invalid template ref type:",c,`(${typeof c})`)};i?(m.id=-1,Qe(m,n)):m()}else I("Invalid template ref type:",c,`(${typeof c})`)}}let Ds,xn;function nn(e,t){e.appContext.config.performance&&Er()&&xn.mark(`vue-${t}-${e.uid}`),Pm(e,t,Er()?xn.now():Date.now())}function sn(e,t){if(e.appContext.config.performance&&Er()){const n=`vue-${t}-${e.uid}`,s=n+":end";xn.mark(s),xn.measure(`<${Qr(e,e.type)}> ${t}`,n,s),xn.clearMarks(n),xn.clearMarks(s)}Im(e,t,Er()?xn.now():Date.now())}function Er(){return Ds!==void 0||(typeof window<"u"&&window.performance?(Ds=!0,xn=window.performance):Ds=!1),Ds}function Sy(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Qe=Jm;function Ey(e){return $y(e)}function $y(e,t){Sy();const n=sp();n.__VUE__=!0,Tp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:l,createElement:i,createText:a,createComment:c,setText:u,setElementText:p,parentNode:d,nextSibling:f,setScopeId:h=ht,insertStaticContent:m}=e,v=(y,_,E,P=null,O=null,B=null,J=!1,j=null,D=En?!1:!!_.dynamicChildren)=>{if(y===_)return;y&&!kn(y,_)&&(P=G(y),dt(y,O,B,!0),y=null),_.patchFlag===-2&&(D=!1,_.dynamicChildren=null);const{type:L,ref:ee,shapeFlag:Q}=_;switch(L){case Vo:F(y,_,E,P);break;case Ge:x(y,_,E,P);break;case pr:y==null?b(_,E,P,J):w(y,_,E,J);break;case Se:ae(y,_,E,P,O,B,J,j,D);break;default:Q&1?M(y,_,E,P,O,B,J,j,D):Q&6?Oe(y,_,E,P,O,B,J,j,D):Q&64||Q&128?L.process(y,_,E,P,O,B,J,j,D,ke):I("Invalid VNode type:",L,`(${typeof L})`)}ee!=null&&O&&Ql(ee,y&&y.ref,B,_||y,!_)},F=(y,_,E,P)=>{if(y==null)s(_.el=a(_.children),E,P);else{const O=_.el=y.el;_.children!==y.children&&u(O,_.children)}},x=(y,_,E,P)=>{y==null?s(_.el=c(_.children||""),E,P):_.el=y.el},b=(y,_,E,P)=>{[y.el,y.anchor]=m(y.children,_,E,P,y.el,y.anchor)},w=(y,_,E,P)=>{if(_.children!==y.children){const O=f(y.anchor);R(y),[_.el,_.anchor]=m(_.children,E,O,P)}else _.el=y.el,_.anchor=y.anchor},S=({el:y,anchor:_},E,P)=>{let O;for(;y&&y!==_;)O=f(y),s(y,E,P),y=O;s(_,E,P)},R=({el:y,anchor:_})=>{let E;for(;y&&y!==_;)E=f(y),r(y),y=E;r(_)},M=(y,_,E,P,O,B,J,j,D)=>{J=J||_.type==="svg",y==null?V(_,E,P,O,B,J,j,D):Z(y,_,O,B,J,j,D)},V=(y,_,E,P,O,B,J,j)=>{let D,L;const{type:ee,props:Q,shapeFlag:te,transition:fe,dirs:xe}=y;if(D=y.el=i(y.type,B,Q&&Q.is,Q),te&8?p(D,y.children):te&16&&N(y.children,D,null,P,O,B&&ee!=="foreignObject",J,j),xe&&jn(y,null,P,"created"),A(D,y,y.scopeId,J,P),Q){for(const Ie in Q)Ie!=="value"&&!ar(Ie)&&l(D,Ie,null,Q[Ie],B,y.children,P,O,U);"value"in Q&&l(D,"value",null,Q.value),(L=Q.onVnodeBeforeMount)&&Tt(L,P,y)}Object.defineProperty(D,"__vnode",{value:y,enumerable:!1}),Object.defineProperty(D,"__vueParentComponent",{value:P,enumerable:!1}),xe&&jn(y,null,P,"beforeMount");const He=(!O||O&&!O.pendingBranch)&&fe&&!fe.persisted;He&&fe.beforeEnter(D),s(D,_,E),((L=Q&&Q.onVnodeMounted)||He||xe)&&Qe(()=>{L&&Tt(L,P,y),He&&fe.enter(D),xe&&jn(y,null,P,"mounted")},O)},A=(y,_,E,P,O)=>{if(E&&h(y,E),P)for(let B=0;B<P.length;B++)h(y,P[B]);if(O){let B=O.subTree;if(B.patchFlag>0&&B.patchFlag&2048&&(B=Pp(B.children)||B),_===B){const J=O.vnode;A(y,J,J.scopeId,J.slotScopeIds,O.parent)}}},N=(y,_,E,P,O,B,J,j,D=0)=>{for(let L=D;L<y.length;L++){const ee=y[L]=j?_n(y[L]):Bt(y[L]);v(null,ee,_,E,P,O,B,J,j)}},Z=(y,_,E,P,O,B,J)=>{const j=_.el=y.el;let{patchFlag:D,dynamicChildren:L,dirs:ee}=_;D|=y.patchFlag&16;const Q=y.props||Me,te=_.props||Me;let fe;E&&Bn(E,!1),(fe=te.onVnodeBeforeUpdate)&&Tt(fe,E,_,y),ee&&jn(_,y,E,"beforeUpdate"),E&&Bn(E,!0),En&&(D=0,J=!1,L=null);const xe=O&&_.type!=="foreignObject";if(L?(ie(y.dynamicChildren,L,j,E,P,xe,B),E&&E.type.__hmrId&&ro(y,_)):J||ve(y,_,j,null,E,P,xe,B,!1),D>0){if(D&16)W(j,_,Q,te,E,P,O);else if(D&2&&Q.class!==te.class&&l(j,"class",null,te.class,O),D&4&&l(j,"style",Q.style,te.style,O),D&8){const He=_.dynamicProps;for(let Ie=0;Ie<He.length;Ie++){const We=He[Ie],Lt=Q[We],ms=te[We];(ms!==Lt||We==="value")&&l(j,We,Lt,ms,O,y.children,E,P,U)}}D&1&&y.children!==_.children&&p(j,_.children)}else!J&&L==null&&W(j,_,Q,te,E,P,O);((fe=te.onVnodeUpdated)||ee)&&Qe(()=>{fe&&Tt(fe,E,_,y),ee&&jn(_,y,E,"updated")},P)},ie=(y,_,E,P,O,B,J)=>{for(let j=0;j<_.length;j++){const D=y[j],L=_[j],ee=D.el&&(D.type===Se||!kn(D,L)||D.shapeFlag&70)?d(D.el):E;v(D,L,ee,null,P,O,B,J,!0)}},W=(y,_,E,P,O,B,J)=>{if(E!==P){if(E!==Me)for(const j in E)!ar(j)&&!(j in P)&&l(y,j,E[j],null,J,_.children,O,B,U);for(const j in P){if(ar(j))continue;const D=P[j],L=E[j];D!==L&&j!=="value"&&l(y,j,L,D,J,_.children,O,B,U)}"value"in P&&l(y,"value",E.value,P.value)}},ae=(y,_,E,P,O,B,J,j,D)=>{const L=_.el=y?y.el:a(""),ee=_.anchor=y?y.anchor:a("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:fe}=_;(En||Q&2048)&&(Q=0,D=!1,te=null),fe&&(j=j?j.concat(fe):fe),y==null?(s(L,E,P),s(ee,E,P),N(_.children,E,ee,O,B,J,j,D)):Q>0&&Q&64&&te&&y.dynamicChildren?(ie(y.dynamicChildren,te,E,O,B,J,j),O&&O.type.__hmrId?ro(y,_):(_.key!=null||O&&_===O.subTree)&&ro(y,_,!0)):ve(y,_,E,ee,O,B,J,j,D)},Oe=(y,_,E,P,O,B,J,j,D)=>{_.slotScopeIds=j,y==null?_.shapeFlag&512?O.ctx.activate(_,E,P,J,D):qe(_,E,P,O,B,J,D):Le(y,_,D)},qe=(y,_,E,P,O,B,J)=>{const j=y.component=By(y,P,O);if(j.type.__hmrId&&Cm(j),cr(y),nn(j,"mount"),No(y)&&(j.ctx.renderer=ke),nn(j,"init"),Dy(j),sn(j,"init"),j.asyncDep){if(O&&O.registerDep(j,X),!y.el){const D=j.subTree=z(Ge);x(null,D,_,E)}return}X(j,y,_,E,O,B,J),ur(),sn(j,"mount")},Le=(y,_,E)=>{const P=_.component=y.component;if(Vm(y,_,E))if(P.asyncDep&&!P.asyncResolved){cr(_),ne(P,_,E),ur();return}else P.next=_,xm(P.update),P.update();else _.el=y.el,P.vnode=_},X=(y,_,E,P,O,B,J)=>{const j=()=>{if(y.isMounted){let{next:ee,bu:Q,u:te,parent:fe,vnode:xe}=y,He=ee,Ie;cr(ee||y.vnode),Bn(y,!1),ee?(ee.el=xe.el,ne(y,ee,J)):ee=xe,Q&&wn(Q),(Ie=ee.props&&ee.props.onVnodeBeforeUpdate)&&Tt(Ie,fe,ee,xe),Bn(y,!0),nn(y,"render");const We=ll(y);sn(y,"render");const Lt=y.subTree;y.subTree=We,nn(y,"patch"),v(Lt,We,d(Lt.el),G(Lt),y,O,B),sn(y,"patch"),ee.el=We.el,He===null&&Um(y,We.el),te&&Qe(te,O),(Ie=ee.props&&ee.props.onVnodeUpdated)&&Qe(()=>Tt(Ie,fe,ee,xe),O),Ap(y),ur()}else{let ee;const{el:Q,props:te}=_,{bm:fe,m:xe,parent:He}=y,Ie=$s(_);if(Bn(y,!1),fe&&wn(fe),!Ie&&(ee=te&&te.onVnodeBeforeMount)&&Tt(ee,He,_),Bn(y,!0),Q&&ce){const We=()=>{nn(y,"render"),y.subTree=ll(y),sn(y,"render"),nn(y,"hydrate"),ce(Q,y.subTree,y,O,null),sn(y,"hydrate")};Ie?_.type.__asyncLoader().then(()=>!y.isUnmounted&&We()):We()}else{nn(y,"render");const We=y.subTree=ll(y);sn(y,"render"),nn(y,"patch"),v(null,We,E,P,y,O,B),sn(y,"patch"),_.el=We.el}if(xe&&Qe(xe,O),!Ie&&(ee=te&&te.onVnodeMounted)){const We=_;Qe(()=>Tt(ee,He,We),O)}(_.shapeFlag&256||He&&$s(He.vnode)&&He.vnode.shapeFlag&256)&&y.a&&Qe(y.a,O),y.isMounted=!0,ql(y),_=E=P=null}},D=y.effect=new Ui(j,()=>qr(L),y.scope),L=y.update=()=>D.run();L.id=y.uid,Bn(y,!0),D.onTrack=y.rtc?ee=>wn(y.rtc,ee):void 0,D.onTrigger=y.rtg?ee=>wn(y.rtg,ee):void 0,L.ownerInstance=y,L()},ne=(y,_,E)=>{_.component=y;const P=y.vnode.props;y.vnode=_,y.next=null,my(y,_.props,P,E),xy(y,_.children,E),cs(),Ja(),us()},ve=(y,_,E,P,O,B,J,j,D=!1)=>{const L=y&&y.children,ee=y?y.shapeFlag:0,Q=_.children,{patchFlag:te,shapeFlag:fe}=_;if(te>0){if(te&128){vt(L,Q,E,P,O,B,J,j,D);return}else if(te&256){Pe(L,Q,E,P,O,B,J,j,D);return}}fe&8?(ee&16&&U(L,O,B),Q!==L&&p(E,Q)):ee&16?fe&16?vt(L,Q,E,P,O,B,J,j,D):U(L,O,B,!0):(ee&8&&p(E,""),fe&16&&N(Q,E,P,O,B,J,j,D))},Pe=(y,_,E,P,O,B,J,j,D)=>{y=y||Ss,_=_||Ss;const L=y.length,ee=_.length,Q=Math.min(L,ee);let te;for(te=0;te<Q;te++){const fe=_[te]=D?_n(_[te]):Bt(_[te]);v(y[te],fe,E,null,O,B,J,j,D)}L>ee?U(y,O,B,!0,!1,Q):N(_,E,P,O,B,J,j,D,Q)},vt=(y,_,E,P,O,B,J,j,D)=>{let L=0;const ee=_.length;let Q=y.length-1,te=ee-1;for(;L<=Q&&L<=te;){const fe=y[L],xe=_[L]=D?_n(_[L]):Bt(_[L]);if(kn(fe,xe))v(fe,xe,E,null,O,B,J,j,D);else break;L++}for(;L<=Q&&L<=te;){const fe=y[Q],xe=_[te]=D?_n(_[te]):Bt(_[te]);if(kn(fe,xe))v(fe,xe,E,null,O,B,J,j,D);else break;Q--,te--}if(L>Q){if(L<=te){const fe=te+1,xe=fe<ee?_[fe].el:P;for(;L<=te;)v(null,_[L]=D?_n(_[L]):Bt(_[L]),E,xe,O,B,J,j,D),L++}}else if(L>te)for(;L<=Q;)dt(y[L],O,B,!0),L++;else{const fe=L,xe=L,He=new Map;for(L=xe;L<=te;L++){const lt=_[L]=D?_n(_[L]):Bt(_[L]);lt.key!=null&&(He.has(lt.key)&&I("Duplicate keys found during update:",JSON.stringify(lt.key),"Make sure keys are unique."),He.set(lt.key,L))}let Ie,We=0;const Lt=te-xe+1;let ms=!1,Pa=0;const Ns=new Array(Lt);for(L=0;L<Lt;L++)Ns[L]=0;for(L=fe;L<=Q;L++){const lt=y[L];if(We>=Lt){dt(lt,O,B,!0);continue}let Ut;if(lt.key!=null)Ut=He.get(lt.key);else for(Ie=xe;Ie<=te;Ie++)if(Ns[Ie-xe]===0&&kn(lt,_[Ie])){Ut=Ie;break}Ut===void 0?dt(lt,O,B,!0):(Ns[Ut-xe]=L+1,Ut>=Pa?Pa=Ut:ms=!0,v(lt,_[Ut],E,null,O,B,J,j,D),We++)}const Ia=ms?Ty(Ns):Ss;for(Ie=Ia.length-1,L=Lt-1;L>=0;L--){const lt=xe+L,Ut=_[lt],Ma=lt+1<ee?_[lt+1].el:P;Ns[L]===0?v(null,Ut,E,Ma,O,B,J,j,D):ms&&(Ie<0||L!==Ia[Ie]?nt(Ut,E,Ma,2):Ie--)}}},nt=(y,_,E,P,O=null)=>{const{el:B,type:J,transition:j,children:D,shapeFlag:L}=y;if(L&6){nt(y.component.subTree,_,E,P);return}if(L&128){y.suspense.move(_,E,P);return}if(L&64){J.move(y,_,E,ke);return}if(J===Se){s(B,_,E);for(let Q=0;Q<D.length;Q++)nt(D[Q],_,E,P);s(y.anchor,_,E);return}if(J===pr){S(y,_,E);return}if(P!==2&&L&1&&j)if(P===0)j.beforeEnter(B),s(B,_,E),Qe(()=>j.enter(B),O);else{const{leave:Q,delayLeave:te,afterLeave:fe}=j,xe=()=>s(B,_,E),He=()=>{Q(B,()=>{xe(),fe&&fe()})};te?te(B,xe,He):He()}else s(B,_,E)},dt=(y,_,E,P=!1,O=!1)=>{const{type:B,props:J,ref:j,children:D,dynamicChildren:L,shapeFlag:ee,patchFlag:Q,dirs:te}=y;if(j!=null&&Ql(j,null,E,y,!0),ee&256){_.ctx.deactivate(y);return}const fe=ee&1&&te,xe=!$s(y);let He;if(xe&&(He=J&&J.onVnodeBeforeUnmount)&&Tt(He,_,y),ee&6)K(y.component,E,P);else{if(ee&128){y.suspense.unmount(E,P);return}fe&&jn(y,null,_,"beforeUnmount"),ee&64?y.type.remove(y,_,E,O,ke,P):L&&(B!==Se||Q>0&&Q&64)?U(L,_,E,!1,!0):(B===Se&&Q&384||!O&&ee&16)&&U(D,_,E),P&&hn(y)}(xe&&(He=J&&J.onVnodeUnmounted)||fe)&&Qe(()=>{He&&Tt(He,_,y),fe&&jn(y,null,_,"unmounted")},E)},hn=y=>{const{type:_,el:E,anchor:P,transition:O}=y;if(_===Se){y.patchFlag>0&&y.patchFlag&2048&&O&&!O.persisted?y.children.forEach(J=>{J.type===Ge?r(J.el):hn(J)}):$(E,P);return}if(_===pr){R(y);return}const B=()=>{r(E),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(y.shapeFlag&1&&O&&!O.persisted){const{leave:J,delayLeave:j}=O,D=()=>J(E,B);j?j(y.el,B,D):D()}else B()},$=(y,_)=>{let E;for(;y!==_;)E=f(y),r(y),y=E;r(_)},K=(y,_,E)=>{y.type.__hmrId&&Sm(y);const{bum:P,scope:O,update:B,subTree:J,um:j}=y;P&&wn(P),O.stop(),B&&(B.active=!1,dt(J,y,_,E)),j&&Qe(j,_),Qe(()=>{y.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),Om(y)},U=(y,_,E,P=!1,O=!1,B=0)=>{for(let J=B;J<y.length;J++)dt(y[J],_,E,P,O)},G=y=>y.shapeFlag&6?G(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),Fe=(y,_,E)=>{y==null?_._vnode&&dt(_._vnode,null,null,!0):v(_._vnode||null,y,_,null,null,null,E),Ja(),Sp(),_._vnode=y},ke={p:v,um:dt,m:nt,r:hn,mt:qe,mc:N,pc:ve,pbc:ie,n:G,o:e};let de,ce;return t&&([de,ce]=t(ke)),{render:Fe,hydrate:de,createApp:Cy(Fe,de)}}function Bn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ro(e,t,n=!1){const s=e.children,r=t.children;if(oe(s)&&oe(r))for(let l=0;l<s.length;l++){const i=s[l];let a=r[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[l]=_n(r[l]),a.el=i.el),n||ro(i,a)),a.type===Vo&&(a.el=i.el),a.type===Ge&&!a.el&&(a.el=i.el)}}function Ty(e){const t=e.slice(),n=[0];let s,r,l,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(l=0,i=n.length-1;l<i;)a=l+i>>1,e[n[a]]<u?l=a+1:i=a;u<e[n[l]]&&(l>0&&(t[s]=n[l-1]),n[l]=s)}}for(l=n.length,i=n[l-1];l-- >0;)n[l]=i,i=t[i];return n}const Ay=e=>e.__isTeleport,Ts=e=>e&&(e.disabled||e.disabled===""),sc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ei=(e,t)=>{const n=e&&e.to;if(je(n))if(t){const s=t(n);return s||I(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return I("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Ts(e)&&I(`Invalid Teleport target: ${n}`),n},Ry={__isTeleport:!0,process(e,t,n,s,r,l,i,a,c,u){const{mc:p,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:v,createComment:F}}=u,x=Ts(t.props);let{shapeFlag:b,children:w,dynamicChildren:S}=t;if(En&&(c=!1,S=null),e==null){const R=t.el=F("teleport start"),M=t.anchor=F("teleport end");h(R,n,s),h(M,n,s);const V=t.target=ei(t.props,m),A=t.targetAnchor=v("");V?(h(A,V),i=i||sc(V)):x||I("Invalid Teleport target on mount:",V,`(${typeof V})`);const N=(Z,ie)=>{b&16&&p(w,Z,ie,r,l,i,a,c)};x?N(n,M):V&&N(V,A)}else{t.el=e.el;const R=t.anchor=e.anchor,M=t.target=e.target,V=t.targetAnchor=e.targetAnchor,A=Ts(e.props),N=A?n:M,Z=A?R:V;if(i=i||sc(M),S?(f(e.dynamicChildren,S,N,r,l,i,a),ro(e,t,!0)):c||d(e,t,N,Z,r,l,i,a,!1),x)A||tr(t,n,R,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ie=t.target=ei(t.props,m);ie?tr(t,ie,null,u,0):I("Invalid Teleport target on update:",M,`(${typeof M})`)}else A&&tr(t,M,V,u,1)}ed(t)},remove(e,t,n,s,{um:r,o:{remove:l}},i){const{shapeFlag:a,children:c,anchor:u,targetAnchor:p,target:d,props:f}=e;if(d&&l(p),(i||!Ts(f))&&(l(u),a&16))for(let h=0;h<c.length;h++){const m=c[h];r(m,t,n,!0,!!m.dynamicChildren)}},move:tr,hydrate:Oy};function tr(e,t,n,{o:{insert:s},m:r},l=2){l===0&&s(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:u,props:p}=e,d=l===2;if(d&&s(i,t,n),(!d||Ts(p))&&c&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);d&&s(a,t,n)}function Oy(e,t,n,s,r,l,{o:{nextSibling:i,parentNode:a,querySelector:c}},u){const p=t.target=ei(t.props,c);if(p){const d=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Ts(t.props))t.anchor=u(i(e),t,a(e),n,s,r,l),t.targetAnchor=d;else{t.anchor=i(e);let f=d;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,p._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(d,t,p,n,s,r,l)}ed(t)}return t.anchor&&i(t.anchor)}const Py=Ry;function ed(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Se=Symbol("Fragment"),Vo=Symbol("Text"),Ge=Symbol("Comment"),pr=Symbol("Static"),lo=[];let Nt=null;function k(e=!1){lo.push(Nt=e?null:[])}function Iy(){lo.pop(),Nt=lo[lo.length-1]||null}let xo=1;function oc(e){xo+=e}function td(e){return e.dynamicChildren=xo>0?Nt||Ss:null,Iy(),xo>0&&Nt&&Nt.push(e),e}function H(e,t,n,s,r,l){return td(o(e,t,n,s,r,l,!0))}function se(e,t,n,s,r){return td(z(e,t,n,s,r,!0))}function Zt(e){return e?e.__v_isVNode===!0:!1}function kn(e,t){return t.shapeFlag&6&&_s.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const My=(...e)=>Ly(...e),Zr="__vInternal",nd=({key:e})=>e??null,dr=({ref:e,ref_key:t,ref_for:n})=>e!=null?je(e)||Te(e)||pe(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function o(e,t=null,n=null,s=0,r=null,l=e===Se?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nd(t),ref:t&&dr(t),scopeId:Xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ke};return a?(sa(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),c.key!==c.key&&I("VNode created with invalid key (NaN). VNode type:",c.type),xo>0&&!i&&Nt&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Nt.push(c),c}const z=My;function Ly(e,t=null,n=null,s=0,r=null,l=!1){if((!e||e===sy)&&(e||I(`Invalid vnode type when creating vnode: ${e}.`),e=Ge),Zt(e)){const a=Dt(e,t,!0);return n&&sa(a,n),xo>0&&!l&&Nt&&(a.shapeFlag&6?Nt[Nt.indexOf(e)]=a:Nt.push(a)),a.patchFlag|=-2,a}if(id(e)&&(e=e.__vccOpts),t){t=De(t);let{class:a,style:c}=t;a&&!je(a)&&(t.class=Ae(a)),Re(c)&&(Vl(c)&&!oe(c)&&(c=Ne({},c)),t.style=ot(c))}const i=je(e)?1:Ip(e)?128:Ay(e)?64:Re(e)?4:pe(e)?2:0;return i&4&&Vl(e)&&(e=he(e),I("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),o(e,t,n,s,r,i,l,!0)}function De(e){return e?Vl(e)||Zr in e?Ne({},e):e:null}function Dt(e,t,n=!1){const{props:s,ref:r,patchFlag:l,children:i}=e,a=t?Pt(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&nd(a),ref:t&&t.ref?n&&r?oe(r)?r.concat(dr(t)):[r,dr(t)]:dr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&oe(i)?i.map(sd):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function sd(e){const t=Dt(e);return oe(e.children)&&(t.children=e.children.map(sd)),t}function g(e=" ",t=0){return z(Vo,null,e,t)}function ye(e="",t=!1){return t?(k(),se(Ge,null,e)):z(Ge,null,e)}function Bt(e){return e==null||typeof e=="boolean"?z(Ge):oe(e)?z(Se,null,e.slice()):typeof e=="object"?_n(e):z(Vo,null,String(e))}function _n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function sa(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(oe(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),sa(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Zr in t)?t._ctx=Ke:r===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),s&64?(n=16,t=[g(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pt(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ae([t.class,s.class]));else if(r==="style")t.style=ot([t.style,s.style]);else if(Ho(r)){const l=t[r],i=s[r];i&&l!==i&&!(oe(l)&&l.includes(i))&&(t[r]=l?[].concat(l,i):i)}else r!==""&&(t[r]=s[r])}return t}function Tt(e,t,n,s=null){Ot(e,t,7,[n,s])}const Hy=Qp();let jy=0;function By(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Hy,l={uid:jy++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zp(s,r),emitsOptions:Op(s,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=oy(l),l.root=t?t.root:l,l.emit=Lm.bind(null,l),e.ce&&e.ce(l),l}let Ve=null;const Et=()=>Ve||Ke,Is=e=>{Ve=e,e.scope.on()},os=()=>{Ve&&Ve.scope.off(),Ve=null},Ny=Hn("slot,component");function ti(e,t){const n=t.isNativeTag||Qu;(Ny(e)||n(e))&&I("Do not use built-in or reserved HTML elements as component id: "+e)}function od(e){return e.vnode.shapeFlag&4}let ko=!1;function Dy(e,t=!1){ko=t;const{props:n,children:s}=e.vnode,r=od(e);fy(e,n,r,t),wy(e,s);const l=r?Vy(e,t):void 0;return ko=!1,l}function Vy(e,t){var n;const s=e.type;{if(s.name&&ti(s.name,e.appContext.config),s.components){const l=Object.keys(s.components);for(let i=0;i<l.length;i++)ti(l[i],e.appContext.config)}if(s.directives){const l=Object.keys(s.directives);for(let i=0;i<l.length;i++)Vp(l[i])}s.compilerOptions&&Uy()&&I('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Ur(new Proxy(e.ctx,qp)),ry(e);const{setup:r}=s;if(r){const l=e.setupContext=r.length>1?ld(e):null;Is(e),cs();const i=cn(r,e,0,[xs(e.props),l]);if(us(),os(),ji(i)){if(i.then(os,os),t)return i.then(a=>{rc(e,a,t)}).catch(a=>{Jr(a,e,0)});if(e.asyncDep=i,!e.suspense){const a=(n=s.name)!==null&&n!==void 0?n:"Anonymous";I(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else rc(e,i,t)}else rd(e,t)}function rc(e,t,n){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Re(t)?(Zt(t)&&I("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=_p(t),ly(e)):t!==void 0&&I(`setup() should return an object. Received: ${t===null?"null":typeof t}`),rd(e,n)}let ni;const Uy=()=>!ni;function rd(e,t,n){const s=e.type;if(!e.render){if(!t&&ni&&!s.render){const r=s.template||ta(e).template;if(r){nn(e,"compile");const{isCustomElement:l,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Ne(Ne({isCustomElement:l,delimiters:a},i),c);s.render=ni(r,u),sn(e,"compile")}}e.render=s.render||ht}Is(e),cs(),ay(e),us(),os(),!s.render&&e.render===ht&&!t&&(s.template?I('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):I("Component is missing template or render function."))}function Jy(e){return new Proxy(e.attrs,{get(t,n){return kr(),yt(e,"get","$attrs"),t[n]},set(){return I("setupContext.attrs is readonly."),!1},deleteProperty(){return I("setupContext.attrs is readonly."),!1}})}function ld(e){const t=s=>{if(e.exposed&&I("expose() should be called only once per setup()."),s!=null){let r=typeof s;r==="object"&&(oe(s)?r="array":Te(s)&&(r="ref")),r!=="object"&&I(`expose() should be passed a plain object, received ${r}.`)}e.exposed=s||{}};let n;return Object.freeze({get attrs(){return n||(n=Jy(e))},get slots(){return xs(e.slots)},get emit(){return(s,...r)=>e.emit(s,...r)},expose:t})}function Gr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(_p(Ur(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ss)return ss[n](e)},has(t,n){return n in t||n in ss}}))}const qy=/(?:^|[-_])(\w)/g,Wy=e=>e.replace(qy,t=>t.toUpperCase()).replace(/[-_]/g,"");function Co(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function Qr(e,t,n=!1){let s=Co(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=l=>{for(const i in l)if(l[i]===t)return i};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?Wy(s):n?"App":"Anonymous"}function id(e){return pe(e)&&"__vccOpts"in e}const T=(e,t)=>hm(e,t,ko);function Xy(){return zy().slots}function zy(){const e=Et();return e||I("useContext() called without active instance."),e.setupContext||(e.setupContext=ld(e))}function Ze(e,t,n){const s=arguments.length;return s===2?Re(t)&&!oe(t)?Zt(t)?z(e,null,[t]):z(e,t):z(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zt(n)&&(n=[n]),z(e,t,n))}const Ky=Symbol("ssrContext"),Yy=()=>{{const e=Y(Ky);return e||I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function pl(e){return!!(e&&e.__v_isShallow)}function Zy(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(d){return Re(d)?d.__isVue?["div",e,"VueInstance"]:Te(d)?["div",{},["span",e,p(d)],"<",a(d.value),">"]:ts(d)?["div",{},["span",e,pl(d)?"ShallowReactive":"Reactive"],"<",a(d),`>${In(d)?" (readonly)":""}`]:In(d)?["div",{},["span",e,pl(d)?"ShallowReadonly":"Readonly"],"<",a(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...l(d.$)]}};function l(d){const f=[];d.type.props&&d.props&&f.push(i("props",he(d.props))),d.setupState!==Me&&f.push(i("setup",d.setupState)),d.data!==Me&&f.push(i("data",he(d.data)));const h=c(d,"computed");h&&f.push(i("computed",h));const m=c(d,"inject");return m&&f.push(i("injected",m)),f.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function i(d,f){return f=Ne({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",s,h+": "],a(f[h],!1)])]]:["span",{}]}function a(d,f=!0){return typeof d=="number"?["span",t,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",s,d]:Re(d)?["object",{object:f?he(d):d}]:["span",n,String(d)]}function c(d,f){const h=d.type;if(pe(h))return;const m={};for(const v in d.ctx)u(h,v,f)&&(m[v]=d.ctx[v]);return m}function u(d,f,h){const m=d[h];if(oe(m)&&m.includes(f)||Re(m)&&f in m||d.extends&&u(d.extends,f,h)||d.mixins&&d.mixins.some(v=>u(v,f,h)))return!0}function p(d){return pl(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const $r="3.2.47",Gy="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,lc=Xn&&Xn.createElement("template"),Qy={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Xn.createElementNS(Gy,e):Xn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,l){const i=n?n.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===l||!(r=r.nextSibling)););else{lc.innerHTML=s?`<svg>${e}</svg>`:e;const a=lc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function eg(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function tg(e,t,n){const s=e.style,r=je(n);if(n&&!r){if(t&&!je(t))for(const l in t)n[l]==null&&si(s,l,"");for(const l in n)si(s,l,n[l])}else{const l=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=l)}}const ng=/[^\\];\s*$/,ic=/\s*!important$/;function si(e,t,n){if(oe(n))n.forEach(s=>si(e,t,s));else if(n==null&&(n=""),ng.test(n)&&I(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=sg(e,t);ic.test(n)?e.setProperty(pn(s),n.replace(ic,""),"important"):e[s]=n}}const ac=["Webkit","Moz","ms"],dl={};function sg(e,t){const n=dl[t];if(n)return n;let s=Kt(t);if(s!=="filter"&&s in e)return dl[t]=s;s=is(s);for(let r=0;r<ac.length;r++){const l=ac[r]+s;if(l in e)return dl[t]=l}return t}const cc="http://www.w3.org/1999/xlink";function og(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(cc,t.slice(6,t.length)):e.setAttributeNS(cc,t,n);else{const l=Ch(t);n==null||l&&!Zu(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function rg(e,t,n,s,r,l,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,l),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Zu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch(c){a||I(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&e.removeAttribute(t)}function bs(e,t,n,s){e.addEventListener(t,n,s)}function lg(e,t,n,s){e.removeEventListener(t,n,s)}function ig(e,t,n,s,r=null){const l=e._vei||(e._vei={}),i=l[t];if(s&&i)i.value=s;else{const[a,c]=ag(t);if(s){const u=l[t]=pg(s,r);bs(e,a,u,c)}else i&&(lg(e,a,i,c),l[t]=void 0)}}const uc=/(?:Once|Passive|Capture)$/;function ag(e){let t;if(uc.test(e)){t={};let s;for(;s=e.match(uc);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pn(e.slice(2)),t]}let fl=0;const cg=Promise.resolve(),ug=()=>fl||(cg.then(()=>fl=0),fl=Date.now());function pg(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ot(dg(s,n.value),t,5,[s])};return n.value=e,n.attached=ug(),n}function dg(e,t){if(oe(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const pc=/^on[a-z]/,fg=(e,t,n,s,r=!1,l,i,a,c)=>{t==="class"?eg(e,s,r):t==="style"?tg(e,n,s):Ho(t)?Fr(t)||ig(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hg(e,t,s,r))?rg(e,t,s,l,i,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),og(e,t,s,r))};function hg(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&pc.test(t)&&pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pc.test(t)&&je(n)?!1:t in e}const yn="transition",Vs="animation",ad={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mg=Ne({},Xm.props,ad),Nn=(e,t=[])=>{oe(e)?e.forEach(n=>n(...t)):e&&e(...t)},dc=e=>e?oe(e)?e.some(t=>t.length>1):e.length>1:!1;function yg(e){const t={};for(const W in e)W in ad||(t[W]=e[W]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:l=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:u=i,appearToClass:p=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,m=gg(r),v=m&&m[0],F=m&&m[1],{onBeforeEnter:x,onEnter:b,onEnterCancelled:w,onLeave:S,onLeaveCancelled:R,onBeforeAppear:M=x,onAppear:V=b,onAppearCancelled:A=w}=t,N=(W,ae,Oe)=>{vn(W,ae?p:a),vn(W,ae?u:i),Oe&&Oe()},Z=(W,ae)=>{W._isLeaving=!1,vn(W,d),vn(W,h),vn(W,f),ae&&ae()},ie=W=>(ae,Oe)=>{const qe=W?V:b,Le=()=>N(ae,W,Oe);Nn(qe,[ae,Le]),fc(()=>{vn(ae,W?c:l),on(ae,W?p:a),dc(qe)||hc(ae,s,v,Le)})};return Ne(t,{onBeforeEnter(W){Nn(x,[W]),on(W,l),on(W,i)},onBeforeAppear(W){Nn(M,[W]),on(W,c),on(W,u)},onEnter:ie(!1),onAppear:ie(!0),onLeave(W,ae){W._isLeaving=!0;const Oe=()=>Z(W,ae);on(W,d),ud(),on(W,f),fc(()=>{W._isLeaving&&(vn(W,d),on(W,h),dc(S)||hc(W,s,F,Oe))}),Nn(S,[W,Oe])},onEnterCancelled(W){N(W,!1),Nn(w,[W])},onAppearCancelled(W){N(W,!0),Nn(A,[W])},onLeaveCancelled(W){Z(W),Nn(R,[W])}})}function gg(e){if(e==null)return null;if(Re(e))return[hl(e.enter),hl(e.leave)];{const t=hl(e);return[t,t]}}function hl(e){const t=Oh(e);return Fm(t,"<transition> explicit duration"),t}function on(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function vn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function fc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let vg=0;function hc(e,t,n,s){const r=e._endId=++vg,l=()=>{r===e._endId&&s()};if(n)return setTimeout(l,n);const{type:i,timeout:a,propCount:c}=cd(e,t);if(!i)return s();const u=i+"end";let p=0;const d=()=>{e.removeEventListener(u,f),l()},f=h=>{h.target===e&&++p>=c&&d()};setTimeout(()=>{p<c&&d()},a+1),e.addEventListener(u,f)}function cd(e,t){const n=window.getComputedStyle(e),s=m=>(n[m]||"").split(", "),r=s(`${yn}Delay`),l=s(`${yn}Duration`),i=mc(r,l),a=s(`${Vs}Delay`),c=s(`${Vs}Duration`),u=mc(a,c);let p=null,d=0,f=0;t===yn?i>0&&(p=yn,d=i,f=l.length):t===Vs?u>0&&(p=Vs,d=u,f=c.length):(d=Math.max(i,u),p=d>0?i>u?yn:Vs:null,f=p?p===yn?l.length:c.length:0);const h=p===yn&&/\b(transform|all)(,|$)/.test(s(`${yn}Property`).toString());return{type:p,timeout:d,propCount:f,hasTransform:h}}function mc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>yc(n)+yc(e[s])))}function yc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ud(){return document.body.offsetHeight}const pd=new WeakMap,dd=new WeakMap,fd={name:"TransitionGroup",props:Ne({},mg,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Et(),s=Lp();let r,l;return Kr(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!kg(r[0].el,n.vnode.el,i))return;r.forEach(bg),r.forEach(wg);const a=r.filter(xg);ud(),a.forEach(c=>{const u=c.el,p=u.style;on(u,i),p.transform=p.webkitTransform=p.transitionDuration="";const d=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,vn(u,i))};u.addEventListener("transitionend",d)})}),()=>{const i=he(e),a=yg(i);let c=i.tag||Se;r=l,l=t.default?Qi(t.default()):[];for(let u=0;u<l.length;u++){const p=l[u];p.key!=null?Ps(p,wo(p,a,s,n)):I("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const p=r[u];Ps(p,wo(p,a,s,n)),pd.set(p,p.el.getBoundingClientRect())}return z(c,null,l)}}},Fg=e=>delete e.mode;fd.props;const _g=fd;function bg(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function wg(e){dd.set(e,e.el.getBoundingClientRect())}function xg(e){const t=pd.get(e),n=dd.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${s}px,${r}px)`,l.transitionDuration="0s",e}}function kg(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:l}=cd(s);return r.removeChild(s),l}const gc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return oe(t)?n=>wn(t,n):t};function Cg(e){e.target.composing=!0}function vc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Sg={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=gc(r);const l=s||r.props&&r.props.type==="number";bs(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),l&&(a=Hl(a)),e._assign(a)}),n&&bs(e,"change",()=>{e.value=e.value.trim()}),t||(bs(e,"compositionstart",Cg),bs(e,"compositionend",vc),bs(e,"change",vc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},l){if(e._assign=gc(l),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Hl(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},Eg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fc=(e,t)=>n=>{if(!("key"in n))return;const s=pn(n.key);if(t.some(r=>r===s||Eg[r]===s))return e(n)},hd={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Us(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Us(e,!0),s.enter(e)):s.leave(e,()=>{Us(e,!1)}):Us(e,t))},beforeUnmount(e,{value:t}){Us(e,t)}};function Us(e,t){e.style.display=t?e._vod:"none"}const $g=Ne({patchProp:fg},Qy);let _c;function Tg(){return _c||(_c=Ey($g))}const Ag=(...e)=>{const t=Tg().createApp(...e);Rg(t),Og(t);const{mount:n}=t;return t.mount=s=>{const r=Pg(s);if(!r)return;const l=t._component;!pe(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Rg(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Yu(t)||xh(t),writable:!1})}function Og(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){I("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return I(s),n},set(){I(s)}})}}function Pg(e){if(je(e)){const t=document.querySelector(e);return t||I(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&I('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Ig(){Zy()}Ig();function oi(e,t={},n){for(const s in e){const r=e[s],l=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?oi(r,t,l):typeof r=="function"&&(t[l]=r)}return t}const Mg={run:e=>e()},Lg=()=>Mg,md=typeof console.createTask<"u"?console.createTask:Lg;function Hg(e,t){const n=t.shift(),s=md(n);return e.reduce((r,l)=>r.then(()=>s.run(()=>l(...t))),Promise.resolve())}function jg(e,t){const n=t.shift(),s=md(n);return Promise.all(e.map(r=>s.run(()=>r(...t))))}function ml(e,t){for(const n of[...e])n(t)}class Bg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const r=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!s.allowDeprecated){let i=l.message;i||(i=`${r} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,r=(...l)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...l));return s=this.hook(t,r),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const r of s)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=oi(t),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(t){const n=oi(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Hg,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(jg,t,...n)}callHookWith(t,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&ml(this._before,r);const l=t(n in this._hooks?[...this._hooks[n]]:[],s);return l instanceof Promise?l.finally(()=>{this._after&&r&&ml(this._after,r)}):(this._after&&r&&ml(this._after,r),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Ng(){return new Bg}function Dg(e){return Array.isArray(e)?e:[e]}const yd=["title","script","style","noscript"],Vg=["base","meta","link","style","script","noscript"],Ug=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Jg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],qg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function gd(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ri(e){return gd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Wg(e){let t=9;for(const n of e)for(let s=0;s<n.length;)t=Math.imul(t^n.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function vd(e,t){const{props:n,tag:s}=e;if(Jg.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const l of r)if(typeof n[l]<"u"){const i=String(n[l]);return t&&!t(i)?!1:`${s}:${l}:${i}`}return!1}const bc=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e,nr=(e,t=!1,n)=>{const{tag:s,$el:r}=e;r&&(Object.entries(s.props).forEach(([l,i])=>{i=String(i);const a=`attr:${l}`;if(l==="class"){if(!i)return;for(const c of i.split(" ")){const u=`${a}:${c}`;n&&n(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!l.startsWith("data-h-")&&n(e,a,()=>r.removeAttribute(l)),(t||r.getAttribute(l)!==i)&&r.setAttribute(l,i)}),yd.includes(s.tag)&&(s.textContent&&s.textContent!==r.textContent?r.textContent=s.textContent:s.innerHTML&&s.innerHTML!==r.innerHTML&&(r.innerHTML=s.innerHTML)))};let Js=!1;async function Fd(e,t={}){var f,h;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=t.document||e.resolvedOptions.document||window.document,r=(await e.resolveTags()).map(a);if(e.resolvedOptions.experimentalHashHydration&&(Js=Js||e._hash||!1,Js)){const m=Wg(r.map(v=>v.tag._h));if(Js===m)return;Js=m}const l=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([v,F])=>{l[v]=F})});const i=(m,v,F)=>{v=`${m.renderId}:${v}`,m.entry&&(m.entry._sde[v]=F),delete l[v]};function a(m){const v=e.headEntries().find(x=>x._i===m._e),F={renderId:!m.key&&m._d?m._d:ri(m),$el:null,shouldRender:!0,tag:m,entry:v,markSideEffect:(x,b)=>i(F,x,b)};return F}const c=[],u={body:[],head:[]},p=m=>{e._elMap[m.renderId]=m.$el,c.push(m),i(m,"el",()=>{var v;(v=m.$el)==null||v.remove(),delete e._elMap[m.renderId]})};for(const m of r){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:v}=m;if(v.tag==="title"){s.title=v.textContent||"",c.push(m);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){m.$el=s[v.tag==="htmlAttrs"?"documentElement":"body"],nr(m,!1,i),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&v.key&&(m.$el=s.querySelector(`${(f=v.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)),m.$el){m.tag._d&&nr(m),p(m);continue}u[(h=v.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,v])=>{var x;if(!v.length)return;const F=(x=s==null?void 0:s[m])==null?void 0:x.children;if(F){for(const b of[...F].reverse()){const w=b.tagName.toLowerCase();if(!Vg.includes(w))continue;const S=b.getAttributeNames().reduce((A,N)=>({...A,[N]:b.getAttribute(N)}),{}),R={tag:w,props:S};b.innerHTML&&(R.innerHTML=b.innerHTML);const M=ri(R);let V=v.findIndex(A=>(A==null?void 0:A.renderId)===M);if(V===-1){const A=vd(R);V=v.findIndex(N=>(N==null?void 0:N.tag._d)&&N.tag._d===A)}if(V!==-1){const A=v[V];A.$el=b,nr(A),p(A),delete v[V]}}v.forEach(b=>{const w=b.tag.tagPosition||"head";d[w]=d[w]||s.createDocumentFragment(),b.$el||(b.$el=s.createElement(b.tag.tag),nr(b,!0)),d[w].appendChild(b.$el),p(b)})}}),d.head&&s.head.appendChild(d.head),d.bodyOpen&&s.body.insertBefore(d.bodyOpen,s.body.firstChild),d.bodyClose&&s.body.appendChild(d.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(l).forEach(m=>m())}let yl=null;async function _d(e,t={}){function n(){return yl=null,Fd(e,t)}const s=t.delayFn||(r=>setTimeout(r,10));return yl=yl||new Promise(r=>s(()=>r(n())))}const Xg=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),_d(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}});function zg(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const wc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function xc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in wc?wc[t]:10}const Kg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Yg(){return{hooks:{"tags:resolve":e=>{const t=n=>{var s;return(s=e.tags.find(r=>r._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of Kg)for(const r of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(n))){const l=t(r.tagPriority.replace(n,""));typeof l<"u"&&(r._p=l+s)}e.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>xc(n)-xc(s))}}}}const Zg=()=>({hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(r=>r.tag==="titleTemplate");const s=t.findIndex(r=>r.tag==="title");if(s!==-1&&n!==-1){const r=bc(t[n].textContent,t[s].textContent);r!==null?t[s].textContent=r||t[s].textContent:delete t[s]}else if(n!==-1){const r=bc(t[n].textContent);r!==null&&(t[n].textContent=r,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}),Gg=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),Qg=["link","style","script","noscript"],ev=()=>({hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=ri(e)),e.key&&Qg.includes(e.tag)&&(e._h=gd(e.key),e.props[`data-h-${e._h}`]="")}}}),kc=["script","link","bodyAttrs"],tv=()=>{const e=(t,n)=>{const s={},r={};Object.entries(n.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?r[i]=a:s[i]=a});let l;return t==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof r.onload<"u"&&(l=s.src,delete s.src),{props:s,eventHandlers:r,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!kc.includes(n.tag)||!Object.entries(n.props).find(([s,r])=>s.startsWith("on")&&typeof r=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!kc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([l,i])=>l.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:s,delayedSrc:r}=e("dom",t.tag);Object.keys(s).length&&(t.tag.props=n,t.tag._eventHandlers=s,t.tag._delayedSrc=r)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([r,l])=>{const i=`${t.tag._d||t.tag._p}:${r}`,a=r.slice(2).toLowerCase(),c=`data-h-${a}`;if(t.markSideEffect(i,()=>{}),n.hasAttribute(c))return;const u=l;n.setAttribute(c,""),s.addEventListener(a,u),t.entry&&(t.entry._sde[i]=()=>{s.removeEventListener(a,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}},nv=["templateParams","htmlAttrs","bodyAttrs"],sv=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(n=>{e.props[n]&&(e.key=e.props[n],delete e.props[n])});const t=e.key?`${e.tag}:${e.key}`:vd(e);t&&(e._d=t)},"tags:resolve":function(e){const t={};e.tags.forEach(s=>{const r=s._d||s._p,l=t[r];if(l){let i=s==null?void 0:s.tagDuplicateStrategy;if(!i&&nv.includes(s.tag)&&(i="merge"),i==="merge"){const c=l.props;["class","style"].forEach(u=>{s.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),s.props[u]=`${c[u]} ${s.props[u]}`)}),t[r].props={...c,...s.props};return}else if(s._e===l._e){l._duped=l._duped||[],s._d=`${l._d}:${l._duped.length+1}`,l._duped.push(s);return}const a=Object.keys(s.props).length;if((a===0||a===1&&typeof s.props["data-h-key"]<"u")&&!s.innerHTML&&!s.textContent){delete t[r];return}}t[r]=s});const n=[];Object.values(t).forEach(s=>{const r=s._duped;delete s._duped,n.push(s),r&&n.push(...r)}),e.tags=n}}});function sr(e,t){function n(l){if(["s","pageTitle"].includes(l))return t.pageTitle;let i;return l.includes(".")?i=l.split(".").reduce((a,c)=>a&&a[c]||void 0,t):i=t[l],typeof i<"u"?i||"":!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const i=n(l.slice(1));typeof i=="string"&&(e=e.replaceAll(new RegExp(`\\${l}(\\W|$)`,"g"),`${i}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function ov(){return{hooks:{"tags:resolve":e=>{var l;const{tags:t}=e,n=(l=t.find(i=>i.tag==="title"))==null?void 0:l.textContent,s=t.findIndex(i=>i.tag==="templateParams"),r=s!==-1?t[s].props:{};r.pageTitle=r.pageTitle||n||"";for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=sr(i.textContent,r);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=sr(i.props.content,r);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=sr(i.props.href,r);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(a,c)=>typeof c=="string"?sr(c,r):c)}catch{}e.tags=t.filter(i=>i.tag!=="templateParams")}}}}const rv=typeof window<"u";let bd;const lv=e=>bd=e,iv=()=>bd;async function av(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await uv(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(s=>qg.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||yd.includes(n.tag))&&(n[s]=n.props[s]),delete n.props[s]}),["innerHTML","textContent"].forEach(s=>{if(n.tag==="script"&&typeof n[s]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[s]=JSON.parse(n[s])}catch{n[s]=""}typeof n[s]=="object"&&(n[s]=JSON.stringify(n[s]))}),n.props.class&&(n.props.class=cv(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n)}function cv(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function uv(e,t){for(const n of Object.keys(t)){const s=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=s?"true":"":String(t[n])==="false"&&(s?t[n]="false":delete t[n])}return t}const pv=10;async function dv(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,s])=>typeof s<"u"&&Ug.includes(n)).forEach(([n,s])=>{const r=Dg(s);t.push(...r.map(l=>av(n,l)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,s)=>(n._e=e._i,n._p=(e._i<<pv)+s,n))}const fv=()=>[sv(),Yg(),ov(),Zg(),ev(),tv(),Gg()],hv=(e={})=>[Xg({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function mv(e={}){const t=yv({...e,plugins:[...hv(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=zg(t.resolvedOptions.document)),lv(t),t}function yv(e={}){let t=[],n={},s=0;const r=Ng();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...fv(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks)),e.document=e.document||(rv?document:void 0);const l=()=>r.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,c){const u={_i:s++,input:a,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),l(),{dispose(){t=t.filter(p=>p._i!==u._i?!0:(n={...n,...p._sde||{}},p._sde={},l(),!1))},patch(p){t=t.map(d=>(d._i===u._i&&(u.input=d.input=p,l()),d))}}},async resolveTags(){const a={tags:[],entries:[...t]};await r.callHook("entries:resolve",a);for(const c of a.entries){const u=c._t||(p=>p);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const p of await dv(c)){const d={tag:p,entry:c,resolvedOptions:i.resolvedOptions};await r.callHook("tag:normalise",d),a.tags.push(d.tag)}}return await r.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return i.hooks.callHook("init",i),i}function gv(e){return typeof e=="function"?e():C(e)}function Tr(e,t=""){if(e instanceof Promise)return e;const n=gv(e);return!e||!n?n:Array.isArray(n)?n.map(s=>Tr(s,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,r])=>s==="titleTemplate"||s.startsWith("on")?[s,C(r)]:[s,Tr(r,s)])):n}const vv=$r.startsWith("3"),Fv=typeof window<"u",wd="usehead";function oa(){return Et()&&Y(wd)||iv()}function _v(e){return{install(n){vv&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(wd,e))}}.install}function bv(e={}){const t=mv({...e,domDelayFn:n=>setTimeout(()=>et(()=>n()),10),plugins:[wv(),...(e==null?void 0:e.plugins)||[]]});return t.install=_v(t),t}const wv=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Tr(t.input)}}});function xv(e,t={}){const n=oa(),s=q(!1),r=q({});ps(()=>{r.value=s.value?{}:Tr(e)});const l=n.push(r.value,t);return ge(r,a=>{l.patch(a)}),Et()&&(Do(()=>{l.dispose()}),Np(()=>{s.value=!0}),Bp(()=>{s.value=!1})),l}function kv(e,t={}){return oa().push(e,t)}function ra(e,t={}){var s;const n=oa();if(n){const r=Fv||!!((s=n.resolvedOptions)!=null&&s.document);return t.mode==="server"&&r||t.mode==="client"&&!r?void 0:r?xv(e,t):kv(e,t)}}const Cv=e=>ra({htmlAttrs:e});function Sv(e,t){const n=bv(t||{}),s={unhead:n,install(r){$r.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,l){return n.push(r,l)},addEntry(r,l){return n.push(r,l)},addHeadObjs(r,l){return n.push(r,l)},addReactiveEntry(r,l){const i=ra(r,l);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,l){l?Fd(n,{document:r}):_d(n,{delayFn:i=>setTimeout(()=>i(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=s.addHeadObjs,n.updateDOM=s.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const l of s.hooks["before:dom"])l()===!1&&(r.shouldRender=!1)}),e&&s.addHeadObjs(e),s}const io=Symbol("v-click-clicks"),zn=Symbol("v-click-clicks-elements"),li=Symbol("v-click-clicks-order-map"),ao=Symbol("v-click-clicks-disabled"),xd=Symbol("slidev-slide-scale"),re=Symbol("slidev-slidev-context"),Ev=Symbol("slidev-route"),$v=Symbol("slidev-slide-context"),Wn="slidev-vclick-target",gl="slidev-vclick-hidden",Tv="slidev-vclick-fade",vl="slidev-vclick-hidden-explicitly",qs="slidev-vclick-current",or="slidev-vclick-prior",Av=["localhost","127.0.0.1"];let Rv=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function kd(e){return e=e??[],Array.isArray(e)?e:[e]}function ii(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Ov(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let l=t;for(;l<n;)r.push(l),l+=s||1;return r}function Pv(e){return e!=null}function Iv(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Pv))}const no={theme:"dracula",title:"React Shared",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Nunito Sans","Fira Code"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},hightlighter:"shiki"},Ee=no,Tn=Ee.aspectRatio??16/9,An=Ee.canvasWidth??980,la=Math.ceil(An/Tn),ia=T(()=>Iv(Ee.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Mt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const fs=Be({page:0,clicks:0});let Mv=[],Lv=[];Mt(fs,"$syncUp",!0);Mt(fs,"$syncDown",!0);Mt(fs,"$paused",!1);Mt(fs,"$onSet",e=>Mv.push(e));Mt(fs,"$onPatch",e=>Lv.push(e));Mt(fs,"$patch",async()=>!1);function Cd(e,t,n=!1){const s=[];let r=!1,l=!1,i,a;const c=Be(t);function u(h){s.push(h)}function p(h,m){c[h]!==m&&(clearTimeout(i),r=!0,c[h]=m,i=setTimeout(()=>r=!1,0))}function d(h){r||(clearTimeout(a),l=!0,Object.entries(h).forEach(([m,v])=>{c[m]=v}),a=setTimeout(()=>l=!1,0))}function f(h){let m;n?n&&window.addEventListener("storage",F=>{F&&F.key===h&&F.newValue&&d(JSON.parse(F.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",F=>d(F.data)));function v(){!n&&m&&!l?m.postMessage(he(c)):n&&!l&&window.localStorage.setItem(h,JSON.stringify(c)),r||s.forEach(F=>F(c))}if(ge(c,v,{deep:!0}),n){const F=window.localStorage.getItem(h);F&&d(JSON.parse(F))}}return{init:f,onPatch:u,patch:p,state:c}}const{init:Hv,onPatch:jv,patch:Ws,state:Fl}=Cd(fs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),hs=Be({});let Bv=[],Nv=[];Mt(hs,"$syncUp",!0);Mt(hs,"$syncDown",!0);Mt(hs,"$paused",!1);Mt(hs,"$onSet",e=>Bv.push(e));Mt(hs,"$onPatch",e=>Nv.push(e));Mt(hs,"$patch",async()=>!1);const{init:Dv,onPatch:Vv,patch:Sd,state:Ar}=Cd(hs,{},!1),Uv="modulepreload",Jv=function(e){return"/react-shared-ppt/"+e},Cc={},fr=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Jv(l),l in Cc)return;Cc[l]=!0;const i=l.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!s)for(let p=r.length-1;p>=0;p--){const d=r[p];if(d.href===l&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${a}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Uv,i||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),i)return new Promise((p,d)=>{u.addEventListener("load",p),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var Sc;const Gt=typeof window<"u",qv=e=>typeof e<"u",Wv=Object.prototype.toString,So=e=>typeof e=="function",Xv=e=>typeof e=="number",Ed=e=>typeof e=="string",ai=e=>Wv.call(e)==="[object Object]",ci=()=>+Date.now(),As=()=>{},zv=Gt&&((Sc=window==null?void 0:window.navigator)==null?void 0:Sc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Qt(e){return typeof e=="function"?e():C(e)}function Kv(e,t){function n(...s){return new Promise((r,l)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(l)})}return n}const $d=e=>e();function Yv(e=$d){const t=q(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...l)=>{t.value&&e(...l)};return{isActive:Xt(t),pause:n,resume:s,eventFilter:r}}function Zv(e){return e}function Gv(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(s.length),l=parseFloat(s)+t;return Number.isNaN(l)?e:l+r}function Qv(e,t){let n,s,r;const l=q(!0),i=()=>{l.value=!0,r()};ge(e,i,{flush:"sync"});const a=So(t)?t:t.get,c=So(t)?void 0:t.set,u=dm((p,d)=>(s=p,r=d,{get(){return l.value&&(n=a(),l.value=!1),s(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function en(e){return Di()?(rp(e),!0):!1}function eF(e){if(!Te(e))return Be(e);const t=new Proxy({},{get(n,s,r){return C(Reflect.get(e.value,s,r))},set(n,s,r){return Te(e.value[s])&&!Te(r)?e.value[s].value=r:e.value[s]=r,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(t)}function Td(e){return typeof e=="function"?T(e):q(e)}function aa(e,t=!0){Et()?ds(e):t?e():et(e)}function tF(e){Et()&&Yr(e)}function nF(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:r=!1}=n;let l=null;const i=q(!1);function a(){l&&(clearInterval(l),l=null)}function c(){i.value=!1,a()}function u(){const p=Qt(t);p<=0||(i.value=!0,r&&e(),a(),l=setInterval(e,p))}if(s&&Gt&&u(),Te(t)||So(t)){const p=ge(t,()=>{i.value&&Gt&&u()});en(p)}return en(c),{isActive:i,pause:c,resume:u}}function sF(e,t,n={}){const{immediate:s=!0}=n,r=q(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function a(){r.value=!1,i()}function c(...u){i(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...u)},Qt(t))}return s&&(r.value=!0,Gt&&c()),en(a),{isPending:Xt(r),start:c,stop:a}}function Ad(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=Te(e),l=q(e);function i(a){if(arguments.length)return l.value=a,l.value;{const c=Qt(n);return l.value=l.value===c?Qt(s):c,l.value}}return r?i:[l,i]}var Ec=Object.getOwnPropertySymbols,oF=Object.prototype.hasOwnProperty,rF=Object.prototype.propertyIsEnumerable,lF=(e,t)=>{var n={};for(var s in e)oF.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Ec)for(var s of Ec(e))t.indexOf(s)<0&&rF.call(e,s)&&(n[s]=e[s]);return n};function iF(e,t,n={}){const s=n,{eventFilter:r=$d}=s,l=lF(s,["eventFilter"]);return ge(e,Kv(r,t),l)}var aF=Object.defineProperty,cF=Object.defineProperties,uF=Object.getOwnPropertyDescriptors,Rr=Object.getOwnPropertySymbols,Rd=Object.prototype.hasOwnProperty,Od=Object.prototype.propertyIsEnumerable,$c=(e,t,n)=>t in e?aF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pF=(e,t)=>{for(var n in t||(t={}))Rd.call(t,n)&&$c(e,n,t[n]);if(Rr)for(var n of Rr(t))Od.call(t,n)&&$c(e,n,t[n]);return e},dF=(e,t)=>cF(e,uF(t)),fF=(e,t)=>{var n={};for(var s in e)Rd.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Rr)for(var s of Rr(e))t.indexOf(s)<0&&Od.call(e,s)&&(n[s]=e[s]);return n};function hF(e,t,n={}){const s=n,{eventFilter:r}=s,l=fF(s,["eventFilter"]),{eventFilter:i,pause:a,resume:c,isActive:u}=Yv(r);return{stop:iF(e,t,dF(pF({},l),{eventFilter:i})),pause:a,resume:c,isActive:u}}function kt(e){var t;const n=Qt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const tt=Gt?window:void 0,Pd=Gt?window.document:void 0,mF=Gt?window.navigator:void 0;function be(...e){let t,n,s,r;if(Ed(e[0])||Array.isArray(e[0])?([n,s,r]=e,t=tt):[t,n,s,r]=e,!t)return As;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const l=[],i=()=>{l.forEach(p=>p()),l.length=0},a=(p,d,f,h)=>(p.addEventListener(d,f,h),()=>p.removeEventListener(d,f,h)),c=ge(()=>[kt(t),Qt(r)],([p,d])=>{i(),p&&l.push(...n.flatMap(f=>s.map(h=>a(p,f,h,d))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return en(u),u}let Tc=!1;function yF(e,t,n={}){const{window:s=tt,ignore:r=[],capture:l=!0,detectIframe:i=!1}=n;if(!s)return;zv&&!Tc&&(Tc=!0,Array.from(s.document.body.children).forEach(f=>f.addEventListener("click",As)));let a=!0;const c=f=>r.some(h=>{if(typeof h=="string")return Array.from(s.document.querySelectorAll(h)).some(m=>m===f.target||f.composedPath().includes(m));{const m=kt(h);return m&&(f.target===m||f.composedPath().includes(m))}}),p=[be(s,"click",f=>{const h=kt(e);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(a=!c(f)),!a){a=!0;return}t(f)}},{passive:!0,capture:l}),be(s,"pointerdown",f=>{const h=kt(e);h&&(a=!f.composedPath().includes(h)&&!c(f))},{passive:!0}),i&&be(s,"blur",f=>{var h;const m=kt(e);((h=s.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(s.document.activeElement))&&t(f)})].filter(Boolean);return()=>p.forEach(f=>f())}const gF=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function vF(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=tt,eventName:l="keydown",passive:i=!1}=s,a=gF(t);return be(r,l,u=>{a(u)&&n(u)},i)}function FF(e={}){var t;const{window:n=tt}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,r=Qv(()=>null,()=>s==null?void 0:s.activeElement);return n&&(be(n,"blur",l=>{l.relatedTarget===null&&r.trigger()},!0),be(n,"focus",r.trigger,!0)),r}function Uo(e,t=!1){const n=q(),s=()=>n.value=!!e();return s(),aa(s,t),n}function ws(e,t={}){const{window:n=tt}=t,s=Uo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const l=q(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},a=()=>{s.value&&(i(),r=n.matchMedia(Td(e).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",a):r.addListener(a))};return ps(a),en(()=>i()),l}const _F={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var bF=Object.defineProperty,Ac=Object.getOwnPropertySymbols,wF=Object.prototype.hasOwnProperty,xF=Object.prototype.propertyIsEnumerable,Rc=(e,t,n)=>t in e?bF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kF=(e,t)=>{for(var n in t||(t={}))wF.call(t,n)&&Rc(e,n,t[n]);if(Ac)for(var n of Ac(t))xF.call(t,n)&&Rc(e,n,t[n]);return e};function CF(e,t={}){function n(a,c){let u=e[a];return c!=null&&(u=Gv(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=tt}=t;function r(a){return s?s.matchMedia(a).matches:!1}const l=a=>ws(`(min-width: ${n(a)})`,t),i=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>l(c),enumerable:!0,configurable:!0}),a),{});return kF({greater(a){return ws(`(min-width: ${n(a,.1)})`,t)},greaterOrEqual:l,smaller(a){return ws(`(max-width: ${n(a,-.1)})`,t)},smallerOrEqual(a){return ws(`(max-width: ${n(a)})`,t)},between(a,c){return ws(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(a){return r(`(min-width: ${n(a,.1)})`)},isGreaterOrEqual(a){return r(`(min-width: ${n(a)})`)},isSmaller(a){return r(`(max-width: ${n(a,-.1)})`)},isSmallerOrEqual(a){return r(`(max-width: ${n(a)})`)},isInBetween(a,c){return r(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`)}},i)}function SF(e={}){const{navigator:t=mF,read:n=!1,source:s,copiedDuring:r=1500,legacy:l=!1}=e,i=["copy","cut"],a=Uo(()=>t&&"clipboard"in t),c=T(()=>a.value||l),u=q(""),p=q(!1),d=sF(()=>p.value=!1,r);function f(){a.value?t.clipboard.readText().then(F=>{u.value=F}):u.value=v()}if(c.value&&n)for(const F of i)be(F,f);async function h(F=Qt(s)){c.value&&F!=null&&(a.value?await t.clipboard.writeText(F):m(F),u.value=F,p.value=!0,d.start())}function m(F){const x=document.createElement("textarea");x.value=F??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function v(){var F,x,b;return(b=(x=(F=document==null?void 0:document.getSelection)==null?void 0:F.call(document))==null?void 0:x.toString())!=null?b:""}return{isSupported:c,text:u,copied:p,copy:h}}function EF(e){return JSON.parse(JSON.stringify(e))}const ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pi="__vueuse_ssr_handlers__";ui[pi]=ui[pi]||{};const $F=ui[pi];function TF(e,t){return $F[e]||t}function AF(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var RF=Object.defineProperty,Oc=Object.getOwnPropertySymbols,OF=Object.prototype.hasOwnProperty,PF=Object.prototype.propertyIsEnumerable,Pc=(e,t,n)=>t in e?RF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ic=(e,t)=>{for(var n in t||(t={}))OF.call(t,n)&&Pc(e,n,t[n]);if(Oc)for(var n of Oc(t))PF.call(t,n)&&Pc(e,n,t[n]);return e};const IF={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Mc="vueuse-storage";function MF(e,t,n,s={}){var r;const{flush:l="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:d=tt,eventFilter:f,onError:h=A=>{console.error(A)}}=s,m=(p?Yt:q)(t);if(!n)try{n=TF("getDefaultStorage",()=>{var A;return(A=tt)==null?void 0:A.localStorage})()}catch(A){h(A)}if(!n)return m;const v=Qt(t),F=AF(v),x=(r=s.serializer)!=null?r:IF[F],{pause:b,resume:w}=hF(m,()=>S(m.value),{flush:l,deep:i,eventFilter:f});return d&&a&&(be(d,"storage",V),be(d,Mc,M)),V(),m;function S(A){try{if(A==null)n.removeItem(e);else{const N=x.write(A),Z=n.getItem(e);Z!==N&&(n.setItem(e,N),d&&d.dispatchEvent(new CustomEvent(Mc,{detail:{key:e,oldValue:Z,newValue:N,storageArea:n}})))}}catch(N){h(N)}}function R(A){const N=A?A.newValue:n.getItem(e);if(N==null)return c&&v!==null&&n.setItem(e,x.write(v)),v;if(!A&&u){const Z=x.read(N);return So(u)?u(Z,v):F==="object"&&!Array.isArray(Z)?Ic(Ic({},v),Z):Z}else return typeof N!="string"?N:x.read(N)}function M(A){V(A.detail)}function V(A){if(!(A&&A.storageArea!==n)){if(A&&A.key==null){m.value=v;return}if(!(A&&A.key!==e)){b();try{m.value=R(A)}catch(N){h(N)}finally{A?et(w):w()}}}}}function LF(e){return ws("(prefers-color-scheme: dark)",e)}var Lc=Object.getOwnPropertySymbols,HF=Object.prototype.hasOwnProperty,jF=Object.prototype.propertyIsEnumerable,BF=(e,t)=>{var n={};for(var s in e)HF.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Lc)for(var s of Lc(e))t.indexOf(s)<0&&jF.call(e,s)&&(n[s]=e[s]);return n};function NF(e,t,n={}){const s=n,{window:r=tt}=s,l=BF(s,["window"]);let i;const a=Uo(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},u=ge(()=>kt(e),d=>{c(),a.value&&r&&d&&(i=new ResizeObserver(t),i.observe(d,l))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return en(p),{isSupported:a,stop:p}}function DF(e,t={}){const{immediate:n=!0,window:s=tt}=t,r=q(!1);let l=0,i=null;function a(p){if(!r.value||!s)return;const d=p-l;e({delta:d,timestamp:p}),l=p,i=s.requestAnimationFrame(a)}function c(){!r.value&&s&&(r.value=!0,i=s.requestAnimationFrame(a))}function u(){r.value=!1,i!=null&&s&&(s.cancelAnimationFrame(i),i=null)}return n&&c(),en(u),{isActive:Xt(r),pause:u,resume:c}}function VF(e,t={width:0,height:0},n={}){const{window:s=tt,box:r="content-box"}=n,l=T(()=>{var c,u;return(u=(c=kt(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),i=q(t.width),a=q(t.height);return NF(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&l.value){const p=kt(e);if(p){const d=s.getComputedStyle(p);i.value=parseFloat(d.width),a.value=parseFloat(d.height)}}else if(u){const p=Array.isArray(u)?u:[u];i.value=p.reduce((d,{inlineSize:f})=>d+f,0),a.value=p.reduce((d,{blockSize:f})=>d+f,0)}else i.value=c.contentRect.width,a.value=c.contentRect.height},n),ge(()=>kt(e),c=>{i.value=c?t.width:0,a.value=c?t.height:0}),{width:i,height:a}}const Hc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function UF(e,t={}){const{document:n=Pd,autoExit:s=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),l=q(!1);let i=Hc[0];const a=Uo(()=>{if(n){for(const v of Hc)if(v[1]in n)return i=v,!0}else return!1;return!1}),[c,u,p,,d]=i;async function f(){a.value&&(n!=null&&n[p]&&await n[u](),l.value=!1)}async function h(){if(!a.value)return;await f();const v=kt(r);v&&(await v[c](),l.value=!0)}async function m(){l.value?await f():await h()}return n&&be(n,d,()=>{l.value=!!(n!=null&&n[p])},!1),s&&en(f),{isSupported:a,isFullscreen:l,enter:h,exit:f,toggle:m}}function JF(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:l=.1,window:i=tt}=n,a=Uo(()=>i&&"IntersectionObserver"in i);let c=As;const u=a.value?ge(()=>({el:kt(e),root:kt(s)}),({el:d,root:f})=>{if(c(),!d)return;const h=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:l});h.observe(d),c=()=>{h.disconnect(),c=As}},{immediate:!0,flush:"post"}):As,p=()=>{c(),u()};return en(p),{isSupported:a,stop:p}}function Vt(e,t,n={}){const{window:s=tt}=n;return MF(e,t,s==null?void 0:s.localStorage,n)}const qF={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function WF(e={}){const{reactive:t=!1,target:n=tt,aliasMap:s=qF,passive:r=!0,onEventFired:l=As}=e,i=Be(new Set),a={toJSON(){return{}},current:i},c=t?Be(a):a,u=new Set,p=new Set;function d(v,F){v in c&&(t?c[v]=F:c[v].value=F)}function f(){i.clear();for(const v of p)d(v,!1)}function h(v,F){var x,b;const w=(x=v.key)==null?void 0:x.toLowerCase(),R=[(b=v.code)==null?void 0:b.toLowerCase(),w].filter(Boolean);w&&(F?i.add(w):i.delete(w));for(const M of R)p.add(M),d(M,F);w==="meta"&&!F?(u.forEach(M=>{i.delete(M),d(M,!1)}),u.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&F&&[...i,...R].forEach(M=>u.add(M))}be(n,"keydown",v=>(h(v,!0),l(v)),{passive:r}),be(n,"keyup",v=>(h(v,!1),l(v)),{passive:r}),be("blur",f,{passive:!0}),be("focus",f,{passive:!0});const m=new Proxy(c,{get(v,F,x){if(typeof F!="string")return Reflect.get(v,F,x);if(F=F.toLowerCase(),F in s&&(F=s[F]),!(F in c))if(/[+_-]/.test(F)){const w=F.split(/[+_-]/g).map(S=>S.trim());c[F]=T(()=>w.every(S=>C(m[S])))}else c[F]=q(!1);const b=Reflect.get(v,F,x);return t?C(b):b}});return m}function tT(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:l=tt,eventFilter:i}=e,a=q(r.x),c=q(r.y),u=q(null),p=v=>{t==="page"?(a.value=v.pageX,c.value=v.pageY):t==="client"?(a.value=v.clientX,c.value=v.clientY):t==="movement"&&(a.value=v.movementX,c.value=v.movementY),u.value="mouse"},d=()=>{a.value=r.x,c.value=r.y},f=v=>{if(v.touches.length>0){const F=v.touches[0];t==="page"?(a.value=F.pageX,c.value=F.pageY):t==="client"&&(a.value=F.clientX,c.value=F.clientY),u.value="touch"}},h=v=>i===void 0?p(v):i(()=>p(v),{}),m=v=>i===void 0?f(v):i(()=>f(v),{});return l&&(be(l,"mousemove",h,{passive:!0}),be(l,"dragover",h,{passive:!0}),n&&t!=="movement"&&(be(l,"touchstart",m,{passive:!0}),be(l,"touchmove",m,{passive:!0}),s&&be(l,"touchend",d,{passive:!0}))),{x:a,y:c,sourceType:u}}var an;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(an||(an={}));function XF(e,t={}){const n=Td(e),{threshold:s=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:i}=t,a=Be({x:0,y:0}),c=(M,V)=>{a.x=M,a.y=V},u=Be({x:0,y:0}),p=(M,V)=>{u.x=M,u.y=V},d=T(()=>a.x-u.x),f=T(()=>a.y-u.y),{max:h,abs:m}=Math,v=T(()=>h(m(d.value),m(f.value))>=s),F=q(!1),x=q(!1),b=T(()=>v.value?m(d.value)>m(f.value)?d.value>0?an.LEFT:an.RIGHT:f.value>0?an.UP:an.DOWN:an.NONE),w=M=>{var V,A,N;const Z=M.buttons===0,ie=M.buttons===1;return(N=(A=(V=t.pointerTypes)==null?void 0:V.includes(M.pointerType))!=null?A:Z||ie)!=null?N:!0},S=[be(e,"pointerdown",M=>{var V,A;if(!w(M))return;x.value=!0,(A=(V=n.value)==null?void 0:V.style)==null||A.setProperty("touch-action","none");const N=M.target;N==null||N.setPointerCapture(M.pointerId);const{clientX:Z,clientY:ie}=M;c(Z,ie),p(Z,ie),i==null||i(M)}),be(e,"pointermove",M=>{if(!w(M)||!x.value)return;const{clientX:V,clientY:A}=M;p(V,A),!F.value&&v.value&&(F.value=!0),F.value&&(r==null||r(M))}),be(e,"pointerup",M=>{var V,A;w(M)&&(F.value&&(l==null||l(M,b.value)),x.value=!1,F.value=!1,(A=(V=n.value)==null?void 0:V.style)==null||A.setProperty("touch-action","initial"))})],R=()=>S.forEach(M=>M());return{isSwiping:Xt(F),direction:Xt(b),posStart:Xt(a),posEnd:Xt(u),distanceX:d,distanceY:f,stop:R}}let zF=0;function nT(e,t={}){const n=q(!1),{document:s=Pd,immediate:r=!0,manual:l=!1,id:i=`vueuse_styletag_${++zF}`}=t,a=q(e);let c=()=>{};const u=()=>{if(!s)return;const d=s.getElementById(i)||s.createElement("style");d.isConnected||(d.type="text/css",d.id=i,t.media&&(d.media=t.media),s.head.appendChild(d)),!n.value&&(c=ge(a,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},p=()=>{!s||!n.value||(c(),s.head.removeChild(s.getElementById(i)),n.value=!1)};return r&&!l&&aa(u),l||en(p),{id:i,css:a,unload:p,load:u,isLoaded:Xt(n)}}var KF=Object.defineProperty,jc=Object.getOwnPropertySymbols,YF=Object.prototype.hasOwnProperty,ZF=Object.prototype.propertyIsEnumerable,Bc=(e,t,n)=>t in e?KF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,GF=(e,t)=>{for(var n in t||(t={}))YF.call(t,n)&&Bc(e,n,t[n]);if(jc)for(var n of jc(t))ZF.call(t,n)&&Bc(e,n,t[n]);return e};function sT(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:r="requestAnimationFrame",callback:l}=e,i=q(ci()+n),a=()=>i.value=ci()+n,c=l?()=>{a(),l(i.value)}:a,u=r==="requestAnimationFrame"?DF(c,{immediate:s}):nF(c,r,{immediate:s});return t?GF({timestamp:i},u):i}var QF=Object.defineProperty,Nc=Object.getOwnPropertySymbols,e1=Object.prototype.hasOwnProperty,t1=Object.prototype.propertyIsEnumerable,Dc=(e,t,n)=>t in e?QF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,n1=(e,t)=>{for(var n in t||(t={}))e1.call(t,n)&&Dc(e,n,t[n]);if(Nc)for(var n of Nc(t))t1.call(t,n)&&Dc(e,n,t[n]);return e};const s1={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};n1({linear:Zv},s1);function zt(e,t,n,s={}){var r,l,i;const{clone:a=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:d}=s,f=Et(),h=n||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((i=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:i.bind(f==null?void 0:f.proxy));let m=u;t||(t="modelValue"),m=u||m||`update:${t.toString()}`;const v=x=>a?So(a)?a(x):EF(x):x,F=()=>qv(e[t])?v(e[t]):d;if(c){const x=F(),b=q(x);return ge(()=>e[t],w=>b.value=v(w)),ge(b,w=>{(w!==e[t]||p)&&h(m,w)},{deep:p}),b}else return T({get(){return F()},set(x){h(m,x)}})}function oT({window:e=tt}={}){if(!e)return q(!1);const t=q(e.document.hasFocus());return be(e,"blur",()=>{t.value=!1}),be(e,"focus",()=>{t.value=!0}),t}function o1(e={}){const{window:t=tt,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=e,i=q(n),a=q(s),c=()=>{t&&(l?(i.value=t.innerWidth,a.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return c(),aa(c),be("resize",c,{passive:!0}),r&&be("orientationchange",c,{passive:!0}),{width:i,height:a}}function r1(){return Id().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Id(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const l1=typeof Proxy=="function",i1="devtools-plugin:setup",a1="plugin:settings:set";let ys,di;function c1(){var e;return ys!==void 0||(typeof window<"u"&&window.performance?(ys=!0,di=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ys=!0,di=global.perf_hooks.performance):ys=!1),ys}function u1(){return c1()?di.now():Date.now()}class p1{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const i in t.settings){const a=t.settings[i];s[i]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},s);try{const i=localStorage.getItem(r),a=JSON.parse(i);Object.assign(l,a)}catch{}this.fallbacks={getSettings(){return l},setSettings(i){try{localStorage.setItem(r,JSON.stringify(i))}catch{}l=i},now(){return u1()}},n&&n.on(a1,(i,a)=>{i===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(i,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(i,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function d1(e,t){const n=e,s=Id(),r=r1(),l=l1&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))r.emit(i1,e,t);else{const i=l?new p1(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof window<"u";function f1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function _l(e,t){const n={};for(const s in t){const r=t[s];n[s]=St(r)?r.map(e):e(r)}return n}const co=()=>{},St=Array.isArray;function Ce(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const h1=/\/$/,m1=e=>e.replace(h1,"");function bl(e,t,n="/"){let s,r={},l="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),l=t.slice(c+1,a>-1?a:t.length),r=e(l)),a>-1&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=v1(s??t,n),{fullPath:s+(l&&"?")+l+i,path:s,query:r,hash:i}}function y1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Vc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Uc(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ln(t.matched[s],n.matched[r])&&Md(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ln(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Md(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!g1(e[n],t[n]))return!1;return!0}function g1(e,t){return St(e)?Jc(e,t):St(t)?Jc(t,e):e===t}function Jc(e,t){return St(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function v1(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ce(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,l,i;for(l=0;l<s.length;l++)if(i=s[l],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(l-(l===s.length?1:0)).join("/")}var Eo;(function(e){e.pop="pop",e.push="push"})(Eo||(Eo={}));var uo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(uo||(uo={}));function F1(e){if(!e)if(rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),m1(e)}const _1=/^[^#]+#/;function b1(e,t){return e.replace(_1,"#")+t}function w1(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const el=()=>({left:window.pageXOffset,top:window.pageYOffset});function x1(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(s&&l){Ce(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ce(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){Ce(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=w1(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function qc(e,t){return(history.state?history.state.position-t:-1)+e}const fi=new Map;function k1(e,t){fi.set(e,t)}function C1(e){const t=fi.get(e);return fi.delete(e),t}let S1=()=>location.protocol+"//"+location.host;function Ld(e,t){const{pathname:n,search:s,hash:r}=t,l=e.indexOf("#");if(l>-1){let a=r.includes(e.slice(l))?e.slice(l).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Vc(c,"")}return Vc(n,e)+s+r}function E1(e,t,n,s){let r=[],l=[],i=null;const a=({state:f})=>{const h=Ld(e,location),m=n.value,v=t.value;let F=0;if(f){if(n.value=h,t.value=f,i&&i===m){i=null;return}F=v?f.position-v.position:0}else s(h);r.forEach(x=>{x(n.value,m,{delta:F,type:Eo.pop,direction:F?F>0?uo.forward:uo.back:uo.unknown})})};function c(){i=n.value}function u(f){r.push(f);const h=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return l.push(h),h}function p(){const{history:f}=window;f.state&&f.replaceState($e({},f.state,{scroll:el()}),"")}function d(){for(const f of l)f();l=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:d}}function Wc(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?el():null}}function $1(e){const{history:t,location:n}=window,s={value:Ld(e,n)},r={value:t.state};r.value||l(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,p){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:S1()+e+c;try{t[p?"replaceState":"pushState"](u,"",f),r.value=u}catch(h){Ce("Error with push/replace State",h),n[p?"replace":"assign"](f)}}function i(c,u){const p=$e({},t.state,Wc(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});l(c,p,!0),s.value=c}function a(c,u){const p=$e({},r.value,t.state,{forward:c,scroll:el()});t.state||Ce(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(p.current,p,!0);const d=$e({},Wc(s.value,c,null),{position:p.position+1},u);l(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:i}}function T1(e){e=F1(e);const t=$1(e),n=E1(e,t.state,t.location,t.replace);function s(l,i=!0){i||n.pauseListeners(),history.go(l)}const r=$e({location:"",base:e,go:s,createHref:b1.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function A1(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&Ce(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),T1(e)}function R1(e){return typeof e=="string"||e&&typeof e=="object"}function Hd(e){return typeof e=="string"||typeof e=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jd=Symbol("navigation failure");var Xc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Xc||(Xc={}));const O1={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${I1(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ms(e,t){return $e(new Error(O1[e](t)),{type:e,[jd]:!0},t)}function tn(e,t){return e instanceof Error&&jd in e&&(t==null||!!(e.type&t))}const P1=["params","query","hash"];function I1(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of P1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const zc="[^/]+?",M1={sensitive:!1,strict:!1,start:!0,end:!0},L1=/[.+*?^${}()[\]/\\]/g;function H1(e,t){const n=$e({},M1,t),s=[];let r=n.start?"^":"";const l=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const f=u[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(L1,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:v,optional:F,regexp:x}=f;l.push({name:m,repeatable:v,optional:F});const b=x||zc;if(b!==zc){h+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+S.message)}}let w=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(w=F&&u.length<2?`(?:/${w})`:"/"+w),F&&(w+="?"),r+=w,h+=20,F&&(h+=-8),v&&(h+=-20),b===".*"&&(h+=-50)}p.push(h)}s.push(p)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(u){const p=u.match(i),d={};if(!p)return null;for(let f=1;f<p.length;f++){const h=p[f]||"",m=l[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function c(u){let p="",d=!1;for(const f of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const h of f)if(h.type===0)p+=h.value;else if(h.type===1){const{value:m,repeatable:v,optional:F}=h,x=m in u?u[m]:"";if(St(x)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=St(x)?x.join("/"):x;if(!b)if(F)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);p+=b}}return p||"/"}return{re:i,score:s,keys:l,parse:a,stringify:c}}function j1(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function B1(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const l=j1(s[n],r[n]);if(l)return l;n++}if(Math.abs(r.length-s.length)===1){if(Kc(s))return 1;if(Kc(r))return-1}return r.length-s.length}function Kc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const N1={type:0,value:""},D1=/[a-zA-Z0-9_]/;function V1(e){if(!e)return[[]];if(e==="/")return[[N1]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const r=[];let l;function i(){l&&r.push(l),l=[]}let a=0,c,u="",p="";function d(){u&&(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),i()):c===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:D1.test(c)?f():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),r}function U1(e,t,n){const s=H1(V1(e.path),n);{const l=new Set;for(const i of s.keys)l.has(i.name)&&Ce(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(i.name)}const r=$e(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function J1(e,t){const n=[],s=new Map;t=Gc({strict:!1,end:!0,sensitive:!1},t);function r(p){return s.get(p)}function l(p,d,f){const h=!f,m=q1(p);K1(m,d),m.aliasOf=f&&f.record;const v=Gc(t,p),F=[m];if("alias"in p){const w=typeof p.alias=="string"?[p.alias]:p.alias;for(const S of w)F.push($e({},m,{components:f?f.record.components:m.components,path:S,aliasOf:f?f.record:m}))}let x,b;for(const w of F){const{path:S}=w;if(d&&S[0]!=="/"){const R=d.record.path,M=R[R.length-1]==="/"?"":"/";w.path=d.record.path+(S&&M+S)}if(w.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=U1(w,d,v),d&&S[0]==="/"&&Y1(x,d),f?(f.alias.push(x),z1(f,x)):(b=b||x,b!==x&&b.alias.push(x),h&&p.name&&!Zc(x)&&i(p.name)),m.children){const R=m.children;for(let M=0;M<R.length;M++)l(R[M],x,f&&f.children[M])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return b?()=>{i(b)}:co}function i(p){if(Hd(p)){const d=s.get(p);d&&(s.delete(p),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(p);d>-1&&(n.splice(d,1),p.record.name&&s.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function a(){return n}function c(p){let d=0;for(;d<n.length&&B1(p,n[d])>=0&&(p.record.path!==n[d].record.path||!Bd(p,n[d]));)d++;n.splice(d,0,p),p.record.name&&!Zc(p)&&s.set(p.record.name,p)}function u(p,d){let f,h={},m,v;if("name"in p&&p.name){if(f=s.get(p.name),!f)throw Ms(1,{location:p});{const b=Object.keys(p.params||{}).filter(w=>!f.keys.find(S=>S.name===w));b.length&&Ce(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=f.record.name,h=$e(Yc(d.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),p.params&&Yc(p.params,f.keys.map(b=>b.name))),m=f.stringify(h)}else if("path"in p)m=p.path,m.startsWith("/")||Ce(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(b=>b.re.test(m)),f&&(h=f.parse(m),v=f.record.name);else{if(f=d.name?s.get(d.name):n.find(b=>b.re.test(d.path)),!f)throw Ms(1,{location:p,currentLocation:d});v=f.record.name,h=$e({},d.params,p.params),m=f.stringify(h)}const F=[];let x=f;for(;x;)F.unshift(x.record),x=x.parent;return{name:v,path:m,params:h,matched:F,meta:X1(F)}}return e.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function Yc(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function q1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:W1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function W1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Zc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function X1(e){return e.reduce((t,n)=>$e(t,n.meta),{})}function Gc(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function hi(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function z1(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(hi.bind(null,n)))return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(hi.bind(null,n)))return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function K1(e,t){t&&t.record.name&&!e.name&&!e.path&&Ce(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Y1(e,t){for(const n of t.keys)if(!e.keys.find(hi.bind(null,n)))return Ce(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function Bd(e,t){return t.children.some(n=>n===e||Bd(e,n))}const Nd=/#/g,Z1=/&/g,G1=/\//g,Q1=/=/g,e_=/\?/g,Dd=/\+/g,t_=/%5B/g,n_=/%5D/g,Vd=/%5E/g,s_=/%60/g,Ud=/%7B/g,o_=/%7C/g,Jd=/%7D/g,r_=/%20/g;function ca(e){return encodeURI(""+e).replace(o_,"|").replace(t_,"[").replace(n_,"]")}function l_(e){return ca(e).replace(Ud,"{").replace(Jd,"}").replace(Vd,"^")}function mi(e){return ca(e).replace(Dd,"%2B").replace(r_,"+").replace(Nd,"%23").replace(Z1,"%26").replace(s_,"`").replace(Ud,"{").replace(Jd,"}").replace(Vd,"^")}function i_(e){return mi(e).replace(Q1,"%3D")}function a_(e){return ca(e).replace(Nd,"%23").replace(e_,"%3F")}function c_(e){return e==null?"":a_(e).replace(G1,"%2F")}function $o(e){try{return decodeURIComponent(""+e)}catch{Ce(`Error decoding "${e}". Using original value`)}return""+e}function u_(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const l=s[r].replace(Dd," "),i=l.indexOf("="),a=$o(i<0?l:l.slice(0,i)),c=i<0?null:$o(l.slice(i+1));if(a in t){let u=t[a];St(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Qc(e){let t="";for(let n in e){const s=e[n];if(n=i_(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(St(s)?s.map(l=>l&&mi(l)):[s&&mi(s)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function p_(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=St(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const d_=Symbol("router view location matched"),eu=Symbol("router view depth"),ua=Symbol("router"),qd=Symbol("route location"),yi=Symbol("router view location");function Xs(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function bn(e,t,n,s,r){const l=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const c=d=>{d===!1?a(Ms(4,{from:n,to:t})):d instanceof Error?a(d):R1(d)?a(Ms(2,{from:t,to:d})):(l&&s.enterCallbacks[r]===l&&typeof d=="function"&&l.push(d),i())},u=e.call(s&&s.instances[r],t,n,f_(c,t,n));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(f=>c._called?f:(Ce(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ce(d),a(new Error("Invalid navigation guard"));return}}p.catch(d=>a(d))})}function f_(e,t,n){let s=0;return function(){s++===1&&Ce(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function wl(e,t,n,s){const r=[];for(const l of e){!l.components&&!l.children.length&&Ce(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const i in l.components){let a=l.components[i];{if(!a||typeof a!="object"&&typeof a!="function")throw Ce(`Component "${i}" in record with path "${l.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){Ce(`Component "${i}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,Ce(`Component "${i}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(h_(a)){const u=(a.__vccOpts||a)[t];u&&r.push(bn(u,n,s,l,i))}else{let c=a();"catch"in c||(Ce(`Component "${i}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const p=f1(u)?u.default:u;l.components[i]=p;const f=(p.__vccOpts||p)[t];return f&&bn(f,n,s,l,i)()}))}}}return r}function h_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tu(e){const t=Y(ua),n=Y(qd),s=T(()=>t.resolve(C(e.to))),r=T(()=>{const{matched:c}=s.value,{length:u}=c,p=c[u-1],d=n.matched;if(!p||!d.length)return-1;const f=d.findIndex(Ln.bind(null,p));if(f>-1)return f;const h=nu(c[u-2]);return u>1&&nu(p)===h&&d[d.length-1].path!==h?d.findIndex(Ln.bind(null,c[u-2])):f}),l=T(()=>r.value>-1&&v_(n.params,s.value.params)),i=T(()=>r.value>-1&&r.value===n.matched.length-1&&Md(n.params,s.value.params));function a(c={}){return g_(c)?t[C(e.replace)?"replace":"push"](C(e.to)).catch(co):Promise.resolve()}if(rn){const c=Et();if(c){const u={route:s.value,isActive:l.value,isExactActive:i.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),ps(()=>{u.route=s.value,u.isActive=l.value,u.isExactActive=i.value},{flush:"post"})}}return{route:s,href:T(()=>s.value.href),isActive:l,isExactActive:i,navigate:a}}const m_=we({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tu,setup(e,{slots:t}){const n=Be(tu(e)),{options:s}=Y(ua),r=T(()=>({[su(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[su(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},l)}}}),y_=m_;function g_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function v_(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!St(r)||r.length!==s.length||s.some((l,i)=>l!==r[i]))return!1}return!0}function nu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const su=(e,t,n)=>e??t??n,F_=we({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){b_();const s=Y(yi),r=T(()=>e.route||s.value),l=Y(eu,0),i=T(()=>{let u=C(l);const{matched:p}=r.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),a=T(()=>r.value.matched[i.value]);wt(eu,T(()=>i.value+1)),wt(d_,a),wt(yi,r);const c=q();return ge(()=>[c.value,a.value,e.name],([u,p,d],[f,h,m])=>{p&&(p.instances[d]=u,h&&h!==p&&u&&u===f&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!Ln(p,h)||!f)&&(p.enterCallbacks[d]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,p=e.name,d=a.value,f=d&&d.components[p];if(!f)return ou(n.default,{Component:f,route:u});const h=d.props[p],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,F=Ze(f,$e({},m,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[p]=null)},ref:c}));if(rn&&F.ref){const x={depth:i.value,name:d.name,path:d.path,meta:d.meta};(St(F.ref)?F.ref.map(w=>w.i):[F.ref.i]).forEach(w=>{w.__vrv_devtools=x})}return ou(n.default,{Component:F,route:u})||F}}});function ou(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const __=F_;function b_(){const e=Et(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";Ce(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function zs(e,t){const n=$e({},e,{matched:e.matched.map(s=>A_(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function rr(e){return{_custom:{display:e}}}let w_=0;function x_(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=w_++;d1({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((p,d)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:zs(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:p,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;p.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Wd})}St(d.__vrl_devtools)&&(d.__devtoolsApi=r,d.__vrl_devtools.forEach(f=>{let h=Kd,m="";f.isExactActive?(h=zd,m="This is exactly active"):f.isActive&&(h=Xd,m="This link is active"),p.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),ge(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const l="router:navigations:"+s;r.addTimelineLayer({id:l,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((p,d)=>{r.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:r.now(),data:{error:p},groupId:d.meta.__navigationId}})});let i=0;t.beforeEach((p,d)=>{const f={guard:rr("beforeEach"),from:zs(d,"Current Location during this navigation"),to:zs(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:i++}),r.addTimelineEvent({layerId:l,event:{time:r.now(),title:"Start of navigation",subtitle:p.fullPath,data:f,groupId:p.meta.__navigationId}})}),t.afterEach((p,d,f)=>{const h={guard:rr("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=rr("❌")):h.status=rr("✅"),h.from=zs(d,"Current Location during this navigation"),h.to=zs(p,"Target location"),r.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:p.fullPath,time:r.now(),data:h,logType:f?"warning":"default",groupId:p.meta.__navigationId}})});const a="router-inspector:"+s;r.addInspector({id:a,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(Gd),p.filter&&(d=d.filter(f=>gi(f,p.filter.toLowerCase()))),d.forEach(f=>Zd(f,t.currentRoute.value)),p.rootNodes=d.map(Yd)}let u;r.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===a&&c()}),r.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===a){const f=n.getRoutes().find(h=>h.record.__vd_id===p.nodeId);f&&(p.state={options:C_(f)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function k_(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function C_(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${k_(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Wd=15485081,Xd=2450411,zd=8702998,S_=2282478,Kd=16486972,E_=6710886;function Yd(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:S_}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Kd}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Wd}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:zd}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Xd}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:E_});let s=n.__vd_id;return s==null&&(s=String($_++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(Yd)}}let $_=0;const T_=/^\/(.*)\/([a-z]*)$/;function Zd(e,t){const n=t.matched.length&&Ln(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>Ln(s,e.record))),e.children.forEach(s=>Zd(s,t))}function Gd(e){e.__vd_match=!1,e.children.forEach(Gd)}function gi(e,t){const n=String(e.re).match(T_);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>gi(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),l=$o(r);return!t.startsWith("/")&&(l.includes(t)||r.includes(t))||l.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>gi(i,t))}function A_(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function R_(e){const t=J1(e.routes,e),n=e.parseQuery||u_,s=e.stringifyQuery||Qc,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Xs(),i=Xs(),a=Xs(),c=Yt(gn);let u=gn;rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=_l.bind(null,$=>""+$),d=_l.bind(null,c_),f=_l.bind(null,$o);function h($,K){let U,G;return Hd($)?(U=t.getRecordMatcher($),G=K):G=$,t.addRoute(G,U)}function m($){const K=t.getRecordMatcher($);K?t.removeRoute(K):Ce(`Cannot remove non-existent route "${String($)}"`)}function v(){return t.getRoutes().map($=>$.record)}function F($){return!!t.getRecordMatcher($)}function x($,K){if(K=$e({},K||c.value),typeof $=="string"){const ce=bl(n,$,K.path),y=t.resolve({path:ce.path},K),_=r.createHref(ce.fullPath);return _.startsWith("//")?Ce(`Location "${$}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):y.matched.length||Ce(`No match found for location with path "${$}"`),$e(ce,y,{params:f(y.params),hash:$o(ce.hash),redirectedFrom:void 0,href:_})}let U;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&Ce(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),U=$e({},$,{path:bl(n,$.path,K.path).path});else{const ce=$e({},$.params);for(const y in ce)ce[y]==null&&delete ce[y];U=$e({},$,{params:d($.params)}),K.params=d(K.params)}const G=t.resolve(U,K),Fe=$.hash||"";Fe&&!Fe.startsWith("#")&&Ce(`A \`hash\` should always start with the character "#". Replace "${Fe}" with "#${Fe}".`),G.params=p(f(G.params));const ke=y1(s,$e({},$,{hash:l_(Fe),path:G.path})),de=r.createHref(ke);return de.startsWith("//")?Ce(`Location "${$}" resolved to "${de}". A resolved location cannot start with multiple slashes.`):G.matched.length||Ce(`No match found for location with path "${"path"in $?$.path:$}"`),$e({fullPath:ke,hash:Fe,query:s===Qc?p_($.query):$.query||{}},G,{redirectedFrom:void 0,href:de})}function b($){return typeof $=="string"?bl(n,$,c.value.path):$e({},$)}function w($,K){if(u!==$)return Ms(8,{from:K,to:$})}function S($){return V($)}function R($){return S($e(b($),{replace:!0}))}function M($){const K=$.matched[$.matched.length-1];if(K&&K.redirect){const{redirect:U}=K;let G=typeof U=="function"?U($):U;if(typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=b(G):{path:G},G.params={}),!("path"in G)&&!("name"in G))throw Ce(`Invalid redirect found:
${JSON.stringify(G,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return $e({query:$.query,hash:$.hash,params:"path"in G?{}:$.params},G)}}function V($,K){const U=u=x($),G=c.value,Fe=$.state,ke=$.force,de=$.replace===!0,ce=M(U);if(ce)return V($e(b(ce),{state:typeof ce=="object"?$e({},Fe,ce.state):Fe,force:ke,replace:de}),K||U);const y=U;y.redirectedFrom=K;let _;return!ke&&Uc(s,G,U)&&(_=Ms(16,{to:y,from:G}),Pe(G,G,!0,!1)),(_?Promise.resolve(_):N(y,G)).catch(E=>tn(E)?tn(E,2)?E:ve(E):X(E,y,G)).then(E=>{if(E){if(tn(E,2))return Uc(s,x(E.to),y)&&K&&(K._count=K._count?K._count+1:1)>10?(Ce(`Detected an infinite redirection in a navigation guard when going from "${G.fullPath}" to "${y.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):V($e({replace:de},b(E.to),{state:typeof E.to=="object"?$e({},Fe,E.to.state):Fe,force:ke}),K||y)}else E=ie(y,G,!0,de,Fe);return Z(y,G,E),E})}function A($,K){const U=w($,K);return U?Promise.reject(U):Promise.resolve()}function N($,K){let U;const[G,Fe,ke]=O_($,K);U=wl(G.reverse(),"beforeRouteLeave",$,K);for(const ce of G)ce.leaveGuards.forEach(y=>{U.push(bn(y,$,K))});const de=A.bind(null,$,K);return U.push(de),gs(U).then(()=>{U=[];for(const ce of l.list())U.push(bn(ce,$,K));return U.push(de),gs(U)}).then(()=>{U=wl(Fe,"beforeRouteUpdate",$,K);for(const ce of Fe)ce.updateGuards.forEach(y=>{U.push(bn(y,$,K))});return U.push(de),gs(U)}).then(()=>{U=[];for(const ce of $.matched)if(ce.beforeEnter&&!K.matched.includes(ce))if(St(ce.beforeEnter))for(const y of ce.beforeEnter)U.push(bn(y,$,K));else U.push(bn(ce.beforeEnter,$,K));return U.push(de),gs(U)}).then(()=>($.matched.forEach(ce=>ce.enterCallbacks={}),U=wl(ke,"beforeRouteEnter",$,K),U.push(de),gs(U))).then(()=>{U=[];for(const ce of i.list())U.push(bn(ce,$,K));return U.push(de),gs(U)}).catch(ce=>tn(ce,8)?ce:Promise.reject(ce))}function Z($,K,U){for(const G of a.list())G($,K,U)}function ie($,K,U,G,Fe){const ke=w($,K);if(ke)return ke;const de=K===gn,ce=rn?history.state:{};U&&(G||de?r.replace($.fullPath,$e({scroll:de&&ce&&ce.scroll},Fe)):r.push($.fullPath,Fe)),c.value=$,Pe($,K,U,de),ve()}let W;function ae(){W||(W=r.listen(($,K,U)=>{if(!hn.listening)return;const G=x($),Fe=M(G);if(Fe){V($e(Fe,{replace:!0}),G).catch(co);return}u=G;const ke=c.value;rn&&k1(qc(ke.fullPath,U.delta),el()),N(G,ke).catch(de=>tn(de,12)?de:tn(de,2)?(V(de.to,G).then(ce=>{tn(ce,20)&&!U.delta&&U.type===Eo.pop&&r.go(-1,!1)}).catch(co),Promise.reject()):(U.delta&&r.go(-U.delta,!1),X(de,G,ke))).then(de=>{de=de||ie(G,ke,!1),de&&(U.delta&&!tn(de,8)?r.go(-U.delta,!1):U.type===Eo.pop&&tn(de,20)&&r.go(-1,!1)),Z(G,ke,de)}).catch(co)}))}let Oe=Xs(),qe=Xs(),Le;function X($,K,U){ve($);const G=qe.list();return G.length?G.forEach(Fe=>Fe($,K,U)):(Ce("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function ne(){return Le&&c.value!==gn?Promise.resolve():new Promise(($,K)=>{Oe.add([$,K])})}function ve($){return Le||(Le=!$,ae(),Oe.list().forEach(([K,U])=>$?U($):K()),Oe.reset()),$}function Pe($,K,U,G){const{scrollBehavior:Fe}=e;if(!rn||!Fe)return Promise.resolve();const ke=!U&&C1(qc($.fullPath,0))||(G||!U)&&history.state&&history.state.scroll||null;return et().then(()=>Fe($,K,ke)).then(de=>de&&x1(de)).catch(de=>X(de,$,K))}const vt=$=>r.go($);let nt;const dt=new Set,hn={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:F,getRoutes:v,resolve:x,options:e,push:S,replace:R,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:l.add,beforeResolve:i.add,afterEach:a.add,onError:qe.add,isReady:ne,install($){const K=this;$.component("RouterLink",y_),$.component("RouterView",__),$.config.globalProperties.$router=K,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>C(c)}),rn&&!nt&&c.value===gn&&(nt=!0,S(r.location).catch(Fe=>{Ce("Unexpected error when starting the router:",Fe)}));const U={};for(const Fe in gn)U[Fe]=T(()=>c.value[Fe]);$.provide(ua,K),$.provide(qd,Be(U)),$.provide(yi,c);const G=$.unmount;dt.add($),$.unmount=function(){dt.delete($),dt.size<1&&(u=gn,W&&W(),W=null,c.value=gn,nt=!1,Le=!1),G()},rn&&x_($,K,t)}};return hn}function gs(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function O_(e,t){const n=[],s=[],r=[],l=Math.max(t.matched.length,e.matched.length);for(let i=0;i<l;i++){const a=t.matched[i];a&&(e.matched.find(u=>Ln(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>Ln(u,c))||r.push(c))}return[n,s,r]}const xl=q(!1),po=q(!1),ks=q(!1),P_=q(!0),vi=CF({xs:460,..._F}),rs=o1(),Qd=WF(),I_=T(()=>rs.height.value-rs.width.value/Tn>180),ef=UF(Gt?document.body:null),Rs=FF(),M_=T(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Rs.value)==null?void 0:e.tagName)||"")||((t=Rs.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),L_=T(()=>{var e;return["BUTTON","A"].includes(((e=Rs.value)==null?void 0:e.tagName)||"")});Vt("slidev-camera","default");Vt("slidev-mic","default");const hr=Vt("slidev-scale",0),at=Vt("slidev-show-overview",!1),kl=Vt("slidev-presenter-cursor",!0),ru=Vt("slidev-show-editor",!1);Vt("slidev-editor-width",Gt?window.innerWidth*.4:100);const tf=Ad(at);function lu(e,t,n,s=r=>r){return e*s(.5-t*(.5-n))}function H_(e){return[-e[0],-e[1]]}function jt(e,t){return[e[0]+t[0],e[1]+t[1]]}function At(e,t){return[e[0]-t[0],e[1]-t[1]]}function Ht(e,t){return[e[0]*t,e[1]*t]}function j_(e,t){return[e[0]/t,e[1]/t]}function Ks(e){return[e[1],-e[0]]}function iu(e,t){return e[0]*t[0]+e[1]*t[1]}function B_(e,t){return e[0]===t[0]&&e[1]===t[1]}function N_(e){return Math.hypot(e[0],e[1])}function D_(e){return e[0]*e[0]+e[1]*e[1]}function au(e,t){return D_(At(e,t))}function nf(e){return j_(e,N_(e))}function V_(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ys(e,t,n){let s=Math.sin(n),r=Math.cos(n),l=e[0]-t[0],i=e[1]-t[1],a=l*r-i*s,c=l*s+i*r;return[a+t[0],c+t[1]]}function Fi(e,t,n){return jt(e,Ht(At(t,e),n))}function cu(e,t,n){return jt(e,Ht(t,n))}var{min:vs,PI:U_}=Math,uu=.275,Zs=U_+1e-4;function J_(e,t={}){let{size:n=16,smoothing:s=.5,thinning:r=.5,simulatePressure:l=!0,easing:i=X=>X,start:a={},end:c={},last:u=!1}=t,{cap:p=!0,easing:d=X=>X*(2-X)}=a,{cap:f=!0,easing:h=X=>--X*X*X+1}=c;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,v=a.taper===!1?0:a.taper===!0?Math.max(n,m):a.taper,F=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,x=Math.pow(n*s,2),b=[],w=[],S=e.slice(0,10).reduce((X,ne)=>{let ve=ne.pressure;if(l){let Pe=vs(1,ne.distance/n),vt=vs(1,1-Pe);ve=vs(1,X+(vt-X)*(Pe*uu))}return(X+ve)/2},e[0].pressure),R=lu(n,r,e[e.length-1].pressure,i),M,V=e[0].vector,A=e[0].point,N=A,Z=A,ie=N,W=!1;for(let X=0;X<e.length;X++){let{pressure:ne}=e[X],{point:ve,vector:Pe,distance:vt,runningLength:nt}=e[X];if(X<e.length-1&&m-nt<3)continue;if(r){if(l){let ke=vs(1,vt/n),de=vs(1,1-ke);ne=vs(1,S+(de-S)*(ke*uu))}R=lu(n,r,ne,i)}else R=n/2;M===void 0&&(M=R);let dt=nt<v?d(nt/v):1,hn=m-nt<F?h((m-nt)/F):1;R=Math.max(.01,R*Math.min(dt,hn));let $=(X<e.length-1?e[X+1]:e[X]).vector,K=X<e.length-1?iu(Pe,$):1,U=iu(Pe,V)<0&&!W,G=K!==null&&K<0;if(U||G){let ke=Ht(Ks(V),R);for(let de=1/13,ce=0;ce<=1;ce+=de)Z=Ys(At(ve,ke),ve,Zs*ce),b.push(Z),ie=Ys(jt(ve,ke),ve,Zs*-ce),w.push(ie);A=Z,N=ie,G&&(W=!0);continue}if(W=!1,X===e.length-1){let ke=Ht(Ks(Pe),R);b.push(At(ve,ke)),w.push(jt(ve,ke));continue}let Fe=Ht(Ks(Fi($,Pe,K)),R);Z=At(ve,Fe),(X<=1||au(A,Z)>x)&&(b.push(Z),A=Z),ie=jt(ve,Fe),(X<=1||au(N,ie)>x)&&(w.push(ie),N=ie),S=ne,V=Pe}let ae=e[0].point.slice(0,2),Oe=e.length>1?e[e.length-1].point.slice(0,2):jt(e[0].point,[1,1]),qe=[],Le=[];if(e.length===1){if(!(v||F)||u){let X=cu(ae,nf(Ks(At(ae,Oe))),-(M||R)),ne=[];for(let ve=1/13,Pe=ve;Pe<=1;Pe+=ve)ne.push(Ys(X,ae,Zs*2*Pe));return ne}}else{if(!(v||F&&e.length===1))if(p)for(let ne=1/13,ve=ne;ve<=1;ve+=ne){let Pe=Ys(w[0],ae,Zs*ve);qe.push(Pe)}else{let ne=At(b[0],w[0]),ve=Ht(ne,.5),Pe=Ht(ne,.51);qe.push(At(ae,ve),At(ae,Pe),jt(ae,Pe),jt(ae,ve))}let X=Ks(H_(e[e.length-1].vector));if(F||v&&e.length===1)Le.push(Oe);else if(f){let ne=cu(Oe,X,R);for(let ve=1/29,Pe=ve;Pe<1;Pe+=ve)Le.push(Ys(ne,Oe,Zs*3*Pe))}else Le.push(jt(Oe,Ht(X,R)),jt(Oe,Ht(X,R*.99)),At(Oe,Ht(X,R*.99)),At(Oe,Ht(X,R)))}return b.concat(Le,w.reverse(),qe)}function q_(e,t={}){var n;let{streamline:s=.5,size:r=16,last:l=!1}=t;if(e.length===0)return[];let i=.15+(1-s)*.85,a=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:v=.5})=>[h,m,v]);if(a.length===2){let h=a[1];a=a.slice(0,-1);for(let m=1;m<5;m++)a.push(Fi(a[0],h,m/4))}a.length===1&&(a=[...a,[...jt(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,d=c[0],f=a.length-1;for(let h=1;h<a.length;h++){let m=l&&h===f?a[h].slice(0,2):Fi(d.point,a[h],i);if(B_(d.point,m))continue;let v=V_(m,d.point);if(p+=v,h<f&&!u){if(p<r)continue;u=!0}d={point:m,pressure:a[h][2]>=0?a[h][2]:.5,vector:nf(At(d.point,m)),distance:v,runningLength:p},c.push(d)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function W_(e,t={}){return J_(q_(e,t),t)}var X_=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,r=n.length;s<r;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(r=>t!==r)}}});function Or(e,t){return e-t}function z_(e){return e<0?-1:1}function Pr(e){return[Math.abs(e),z_(e)]}function sf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var K_=2,ln=K_,js=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*s,y:(e.pageY-r.top)*s,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const l=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*s,y:l.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(ln))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Y_=class extends js{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=W_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[r,l],i,a)=>{const[c,u]=a[(i+1)%a.length];return s.push(r,l,(r+c)/2,(l+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},Z_=class extends js{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Pr(e.x-this.start.x),[s,r]=Pr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,s);t=l,s=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Or),[a,c]=[this.start.y,this.start.y+s*r].sort(Or);this.attr("cx",(l+i)/2),this.attr("cy",(a+c)/2),this.attr("rx",(i-l)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function of(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),n.appendChild(s),n}var G_=class extends js{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=sf(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(of(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let l=s/r;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+r*l,n=this.start.y+r):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Q_=class extends js{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Pr(e.x-this.start.x),[s,r]=Pr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,s);t=l,s=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Or),[a,c]=[this.start.y,this.start.y+s*r].sort(Or);this.attr("x",l),this.attr("y",a),this.attr("width",i-l),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function e0(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function t0(e,t,n){let s=t.x,r=t.y,l=n.x-s,i=n.y-r;if(l!==0||i!==0){const a=((e.x-s)*l+(e.y-r)*i)/(l*l+i*i);a>1?(s=n.x,r=n.y):a>0&&(s+=l*a,r+=i*a)}return l=e.x-s,i=e.y-r,l*l+i*i}function n0(e,t){let n=e[0];const s=[n];let r;for(let l=1,i=e.length;l<i;l++)r=e[l],e0(r,n)>t&&(s.push(r),n=r);return n!==r&&r&&s.push(r),s}function _i(e,t,n,s,r){let l=s,i=0;for(let a=t+1;a<n;a++){const c=t0(e[a],e[t],e[n]);c>l&&(i=a,l=c)}l>s&&(i-t>1&&_i(e,t,i,s,r),r.push(e[i]),n-i>1&&_i(e,i,n,s,r))}function s0(e,t){const n=e.length-1,s=[e[0]];return _i(e,0,n,t,s),s.push(e[n]),s}function pu(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:n0(e,s),e=s0(e,s),e}var o0=class extends js{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=sf();const t=of(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=pu(this.points,1,!0),this.count=0),this.attr("d",fu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",fu(pu(this.points,1,!0))),!e.getTotalLength()))}};function r0(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function du(e,t,n,s){const r=t||e,l=n||e,i=.2,a=r0(r,l),c=a.angle+(s?Math.PI:0),u=a.length*i,p=e.x+Math.cos(c)*u,d=e.y+Math.sin(c)*u;return{x:p,y:d}}function l0(e,t,n){const s=du(n[t-1],n[t-2],e),r=du(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(ln)},${s.y.toFixed(ln)} ${r.x.toFixed(ln)},${r.y.toFixed(ln)} ${e.x.toFixed(ln)},${e.y.toFixed(ln)}`}function fu(e){return e.reduce((t,n,s,r)=>s===0?`M ${n.x.toFixed(ln)},${n.y.toFixed(ln)}`:`${t} ${l0(n,s,r)}`,"")}var i0=class extends js{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const l=n[r];if(l.getTotalLength){const i=l.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=l.getPointAtLength(i*a/this.pathSubFactor),u=l.getPointAtLength(i*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:a,element:s||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,r=t.x1,l=t.x2,i=e.y1,a=e.y2,c=t.y1,u=t.y2,p=(n-s)*(c-u)-(i-a)*(r-l),d=(n*a-i*s)*(r-l)-(n-s)*(r*u-c*l),f=(n*a-i*s)*(c-u)-(i-a)*(r*u-c*l),h=(m,v,F)=>m>=v&&m<=F?!0:m>=F&&m<=v;if(p===0)return!1;{const m={x:d/p,y:f/p};return h(m.x,n,s)&&h(m.y,i,a)&&h(m.x,r,l)&&h(m.y,c,u)}}};function a0(e){return{draw:new o0(e),stylus:new Y_(e),line:new G_(e),rectangle:new Q_(e),ellipse:new Z_(e),eraseLine:new i0(e)}}var c0=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=X_(),this._models=a0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function u0(e){return new c0(e)}const bi=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Zn=Vt("slidev-drawing-enabled",!1);Vt("slidev-drawing-pinned",!1);const p0=q(!1),d0=q(!1),f0=q(!1),To=q(!1),Cs=eF(Vt("slidev-drawing-brush",{color:bi[0],size:4,mode:"stylus"})),hu=q("stylus"),rf=T(()=>Ee.drawings.syncAll||xt.value);let Ao=!1;const Gs=T({get(){return hu.value},set(e){hu.value=e,e==="arrow"?(Cs.mode="line",Cs.arrowEnd=!0):(Cs.mode=e,Cs.arrowEnd=!1)}}),h0=Be({brush:Cs,acceptsInputTypes:T(()=>Zn.value&&(!Ee.drawings.presenterOnly||xt.value)?void 0:["pen"]),coordinateTransform:!1}),pt=Ur(u0(h0));function m0(){pt.clear(),rf.value&&Sd(Ue.value,"")}function pa(){var e;d0.value=pt.canRedo(),p0.value=pt.canUndo(),f0.value=!!((e=pt.el)!=null&&e.children.length)}function y0(e){Ao=!0;const t=Ar[e||Ue.value];t!=null?pt.load(t):pt.clear(),pa(),Ao=!1}pt.on("changed",()=>{if(pa(),!Ao){const e=pt.dump(),t=Ue.value;(Ar[t]||"")!==e&&rf.value&&Sd(t,pt.dump())}});Vv(e=>{Ao=!0,e[Ue.value]!=null&&pt.load(e[Ue.value]||""),Ao=!1,pa()});et(()=>{ge(Ue,()=>{pt.mounted&&y0()},{immediate:!0})});pt.on("start",()=>To.value=!0);pt.on("end",()=>To.value=!1);window.addEventListener("keydown",e=>{if(!Zn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?pt.redo():pt.undo():e.code==="Escape"?Zn.value=!1:e.code==="KeyL"&&t?Gs.value="line":e.code==="KeyA"&&t?Gs.value="arrow":e.code==="KeyS"&&t?Gs.value="stylus":e.code==="KeyR"&&t?Gs.value="rectangle":e.code==="KeyE"&&t?Gs.value="ellipse":e.code==="KeyC"&&t?m0():e.code.startsWith("Digit")&&t&&+e.code[5]<=bi.length?Cs.color=bi[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function ze(...e){return T(()=>e.every(t=>Qt(t)))}function _t(e){return T(()=>!Qt(e))}const mu=LF(),Cl=Vt("slidev-color-schema","auto"),wi=T(()=>Ee.colorSchema!=="auto"),da=T({get(){return wi.value?Ee.colorSchema==="dark":Cl.value==="auto"?mu.value:Cl.value==="dark"},set(e){wi.value||(Cl.value=e===mu.value?"auto":e?"dark":"light")}}),lf=Ad(da);Gt&&ge(da,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const mr=q(1),yr=T(()=>Xe.length-1),Ct=q(0),fa=q(0);function g0(){Ct.value>mr.value&&(Ct.value-=1)}function v0(){Ct.value<yr.value&&(Ct.value+=1)}function F0(){if(Ct.value>mr.value){let e=Ct.value-fa.value;e<mr.value&&(e=mr.value),Ct.value=e}}function _0(){if(Ct.value<yr.value){let e=Ct.value+fa.value;e>yr.value&&(e=yr.value),Ct.value=e}}function b0(){const{escape:e,space:t,shift:n,left:s,right:r,up:l,down:i,enter:a,d:c,g:u,o:p}=Qd;let d=[{name:"next_space",key:ze(t,_t(n)),fn:Rn,autoRepeat:!0},{name:"prev_space",key:ze(t,n),fn:On,autoRepeat:!0},{name:"next_right",key:ze(r,_t(n),_t(at)),fn:Rn,autoRepeat:!0},{name:"prev_left",key:ze(s,_t(n),_t(at)),fn:On,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Rn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:On,autoRepeat:!0},{name:"next_down",key:ze(i,_t(at)),fn:Oo,autoRepeat:!0},{name:"prev_up",key:ze(l,_t(at)),fn:()=>Po(!1),autoRepeat:!0},{name:"next_shift",key:ze(r,n),fn:Oo,autoRepeat:!0},{name:"prev_shift",key:ze(s,n),fn:()=>Po(!1),autoRepeat:!0},{name:"toggle_dark",key:ze(c,_t(Zn)),fn:lf},{name:"toggle_overview",key:ze(p,_t(Zn)),fn:tf},{name:"hide_overview",key:ze(e,_t(Zn)),fn:()=>at.value=!1},{name:"goto",key:ze(u,_t(Zn)),fn:()=>ks.value=!ks.value},{name:"next_overview",key:ze(r,at),fn:v0},{name:"prev_overview",key:ze(s,at),fn:g0},{name:"up_overview",key:ze(l,at),fn:F0},{name:"down_overview",key:ze(i,at),fn:_0},{name:"goto_from_overview",key:ze(a,at),fn:()=>{Ls(Ct.value),at.value=!1}}];const f=new Set(d.map(m=>m.name));if(d.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return d}const af=ze(_t(M_),_t(L_),P_);function w0(e,t,n=!1){typeof e=="string"&&(e=Qd[e]);const s=ze(e,af);let r=0,l;const i=()=>{if(clearTimeout(l),!s.value){r=0;return}n&&(l=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return ge(s,i,{flush:"sync"})}function x0(e,t){return vF(e,n=>{af.value&&(n.repeat||t())})}function k0(){const e=b0();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&w0(n.key,n.fn,n.autoRepeat)}),x0("f",()=>ef.toggle())}const C0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S0=o("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),E0=[S0];function $0(e,t){return k(),H("svg",C0,E0)}const T0={name:"carbon-close",render:$0};function ha(e,t=""){var r,l;const n=["slidev-page",t],s=(l=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:l.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const A0=we({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;Y(re);const n=q(),s=VF(n),r=T(()=>t.width?t.width:s.width.value),l=T(()=>t.width?t.width/Tn:s.height.value);t.width&&ps(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${l.value}px`)});const i=T(()=>r.value/l.value),a=T(()=>t.scale&&!un.value?t.scale:i.value<Tn?r.value/An:l.value*Tn/An),c=T(()=>({height:`${la}px`,width:`${An}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),u=T(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return wt(xd,a),(p,d)=>(k(),H("div",{id:"slide-container",ref_key:"root",ref:n,class:Ae(C(u))},[o("div",{id:"slide-content",style:ot(C(c))},[gt(p.$slots,"default")],4),gt(p.$slots,"controls")],2))}});const le=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},cf=le(A0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlideContainer.vue"]]),ma=we({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=zt(e,"clicks",t),s=zt(e,"clicksElements",t),r=zt(e,"clicksDisabled",t),l=zt(e,"clicksOrderMap",t);s.value.length=0,wt(Ev,e.route),wt($v,e.context),wt(io,n),wt(ao,r),wt(zn,s),wt(li,l)},render(){var e,t;return this.$props.is?Ze(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),R0=["innerHTML"],O0=we({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return Y(re),(t,n)=>C(Ar)[e.page]?(k(),H("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(Ar)[e.page]},null,8,R0)):ye("v-if",!0)}}),P0=le(O0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),I0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},M0=["onClick"],L0=we({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;Y(re);const s=zt(n,"modelValue",t);function r(){s.value=!1}function l(h){Ls(h),r()}function i(h){return h===Ct.value}const a=vi.smaller("xs"),c=vi.smaller("sm"),u=4*16*2,p=2*16,d=T(()=>a.value?rs.width.value-u:c.value?(rs.width.value-u-p)/2:300),f=T(()=>Math.floor((rs.width.value-u)/(d.value+p)));return ps(()=>{Ct.value=Ue.value,fa.value=f.value}),(h,m)=>{const v=T0;return k(),H(Se,null,[$n(o("div",I0,[o("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ot(`grid-template-columns: repeat(auto-fit,minmax(${C(d)}px,1fr))`)},[(k(!0),H(Se,null,Hs(C(Xe).slice(0,-1),(F,x)=>(k(),H("div",{key:F.path,class:"relative"},[o("div",{class:Ae(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(x+1),"border-gray-400":!i(x+1)}]),style:ot(C(ia)),onClick:b=>l(+F.path)},[(k(),se(cf,{key:F.path,width:C(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:ue(()=>[z(C(ma),{is:F==null?void 0:F.component,"clicks-disabled":!0,class:Ae(C(ha)(F)),route:F,context:"overview"},null,8,["is","class","route"]),z(P0,{page:+F.path},null,8,["page"])]),_:2},1032,["width"]))],14,M0),o("div",{class:"absolute top-0 opacity-50",style:ot(`left: ${C(d)+5}px`)},ls(x+1),5)]))),128))],4)],512),[[hd,C(s)]]),C(s)?(k(),H("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[z(v)])):ye("v-if",!0)],64)}}});const H0=le(L0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),j0="/react-shared-ppt/assets/logo-b72bde5d.png",B0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},N0=we({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;Y(re);const s=zt(n,"modelValue",t);function r(){s.value=!1}return(l,i)=>(k(),se(jp,null,[C(s)?(k(),H("div",B0,[o("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=a=>r())}),o("div",{class:Ae(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[gt(l.$slots,"default")],2)])):ye("v-if",!0)],1024))}}),D0=le(N0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Modal.vue"]]),V0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},U0=["innerHTML"],J0=o("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[o("div",{class:"flex gap-1 children:my-auto"},[o("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),o("img",{class:"w-5 h-5",src:j0,alt:"Slidev"}),o("div",{style:{color:"#2082A6"}},[o("b",null,"Sli"),g("dev ")])])],-1),q0=we({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;Y(re);const s=zt(n,"modelValue",t),r=T(()=>typeof Ee.info=="string");return(l,i)=>(k(),se(D0,{modelValue:C(s),"onUpdate:modelValue":i[0]||(i[0]=a=>Te(s)?s.value=a:null),class:"px-6 py-4"},{default:ue(()=>[o("div",V0,[C(r)?(k(),H("div",{key:0,class:"mb-4",innerHTML:C(Ee).info},null,8,U0)):ye("v-if",!0),J0])]),_:1},8,["modelValue"]))}});const W0=le(q0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/InfoDialog.vue"]]),X0=["disabled","onKeydown"],z0=we({__name:"Goto",setup(e){Y(re);const t=q(),n=q(""),s=T(()=>{if(n.value.startsWith("/"))return!!Xe.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=Cf.value}});function r(){s.value&&(n.value.startsWith("/")?Ls(n.value.substring(1)):Ls(+n.value)),l()}function l(){ks.value=!1}return ge(ks,async i=>{var a,c;i?(await et(),n.value="",(a=t.value)==null||a.focus()):(c=t.value)==null||c.blur()}),ge(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,a)=>(k(),H("div",{id:"slidev-goto-dialog",class:Ae(["fixed right-5 bg-main transform transition-all",C(ks)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[$n(o("input",{ref_key:"input",ref:t,"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),type:"text",disabled:!C(ks),class:Ae(["outline-none bg-transparent",{"text-red-400":!C(s)&&n.value}]),placeholder:"Goto...",onKeydown:[Fc(r,["enter"]),Fc(l,["escape"])],onBlur:l},null,42,X0),[[Sg,n.value]])],2))}}),K0=le(z0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Goto.vue"]]),Y0=we({__name:"Controls",setup(e){Y(re);const t=Yt(),n=Yt();return(s,r)=>(k(),H(Se,null,[z(H0,{modelValue:C(at),"onUpdate:modelValue":r[0]||(r[0]=l=>Te(at)?at.value=l:null)},null,8,["modelValue"]),z(K0),C(t)?(k(),se(C(t),{key:0})):ye("v-if",!0),C(n)?(k(),se(C(n),{key:1,modelValue:C(xl),"onUpdate:modelValue":r[1]||(r[1]=l=>Te(xl)?xl.value=l:null)},null,8,["modelValue"])):ye("v-if",!0),C(Ee).info?(k(),se(W0,{key:2,modelValue:C(po),"onUpdate:modelValue":r[2]||(r[2]=l=>Te(po)?po.value=l:null)},null,8,["modelValue"])):ye("v-if",!0)],64))}}),Z0=le(Y0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Controls.vue"]]),G0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q0=o("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),eb=[Q0];function tb(e,t){return k(),H("svg",G0,eb)}const nb={name:"carbon-settings-adjust",render:tb},sb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ob=o("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),rb=o("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),lb=[ob,rb];function ib(e,t){return k(),H("svg",sb,lb)}const ab={name:"carbon-information",render:ib},cb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ub=o("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),pb=[ub];function db(e,t){return k(),H("svg",cb,pb)}const fb={name:"carbon-download",render:db},hb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mb=o("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),yb=o("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),gb=[mb,yb];function vb(e,t){return k(),H("svg",hb,gb)}const Fb={name:"carbon-user-speaker",render:vb},_b={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bb=o("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),wb=o("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),xb=[bb,wb];function kb(e,t){return k(),H("svg",_b,xb)}const Cb={name:"carbon-presentation-file",render:kb},Sb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Eb=o("g",{fill:"currentColor"},[o("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),o("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),$b=[Eb];function Tb(e,t){return k(),H("svg",Sb,$b)}const Ab={name:"ph-cursor-duotone",render:Tb},Rb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ob=o("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Pb=[Ob];function Ib(e,t){return k(),H("svg",Rb,Pb)}const uf={name:"ph-cursor-fill",render:Ib},Mb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lb=o("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Hb=[Lb];function jb(e,t){return k(),H("svg",Mb,Hb)}const Bb={name:"carbon-sun",render:jb},Nb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Db=o("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Vb=[Db];function Ub(e,t){return k(),H("svg",Nb,Vb)}const Jb={name:"carbon-moon",render:Ub},qb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wb=o("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Xb=[Wb];function zb(e,t){return k(),H("svg",qb,Xb)}const Kb={name:"carbon-apps",render:zb},Yb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zb=o("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Gb=[Zb];function Qb(e,t){return k(),H("svg",Yb,Gb)}const e8={name:"carbon-arrow-right",render:Qb},t8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n8=o("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),s8=[n8];function o8(e,t){return k(),H("svg",t8,s8)}const r8={name:"carbon-arrow-left",render:o8},l8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i8=o("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),a8=[i8];function c8(e,t){return k(),H("svg",l8,a8)}const u8={name:"carbon-maximize",render:c8},p8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d8=o("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),f8=[d8];function h8(e,t){return k(),H("svg",p8,f8)}const m8={name:"carbon-minimize",render:h8},y8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},g8=o("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),v8=[g8];function F8(e,t){return k(),H("svg",y8,v8)}const _8={name:"carbon-checkmark",render:F8},b8={class:"select-list"},w8={class:"title"},x8={class:"items"},k8=["onClick"],C8=we({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;Y(re);const s=zt(n,"modelValue",t,{passive:!0});return(r,l)=>{const i=_8;return k(),H("div",b8,[o("div",w8,ls(e.title),1),o("div",x8,[(k(!0),H(Se,null,Hs(e.items,a=>(k(),H("div",{key:a.value,class:Ae(["item",{active:C(s)===a.value}]),onClick:()=>{var c;s.value=a.value,(c=a.onClick)==null||c.call(a)}},[z(i,{class:Ae(["text-green-500",{"opacity-0":C(s)!==a.value}])},null,8,["class"]),g(" "+ls(a.display||a.value),1)],10,k8))),128))])])}}});const S8=le(C8,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SelectList.vue"]]),E8={class:"text-sm"},$8=we({__name:"Settings",setup(e){Y(re);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(k(),H("div",E8,[z(S8,{modelValue:C(hr),"onUpdate:modelValue":s[0]||(s[0]=r=>Te(hr)?hr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),T8=le($8,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Settings.vue"]]),A8={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},R8=we({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;Y(re);const s=zt(n,"modelValue",t,{passive:!0}),r=q();return yF(r,()=>{s.value=!1}),(l,i)=>(k(),H("div",{ref_key:"el",ref:r,class:"flex relative"},[o("button",{class:Ae({disabled:e.disabled}),onClick:i[0]||(i[0]=a=>s.value=!C(s))},[gt(l.$slots,"button",{class:Ae({disabled:e.disabled})})],2),(k(),se(jp,null,[C(s)?(k(),H("div",A8,[gt(l.$slots,"menu")])):ye("v-if",!0)],1024))],512))}}),O8=le(R8,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/MenuButton.vue"]]),P8={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},I8={__name:"VerticalDivider",setup(e){return Y(re),(t,n)=>(k(),H("div",P8))}},Sl=le(I8,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),M8={render(){return[]}},L8={class:"slidev-icon-btn"},H8={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},j8={class:"my-auto"},B8={class:"opacity-50"},N8=we({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;Y(re);const n=vi.smaller("md"),{isFullscreen:s,toggle:r}=ef,l=T(()=>ki.value?`?password=${ki.value}`:""),i=T(()=>`/presenter/${Ue.value}${l.value}`),a=T(()=>`/${Ue.value}${l.value}`),c=q(),u=()=>{c.value&&Rs.value&&c.value.contains(Rs.value)&&Rs.value.blur()},p=T(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Yt();return Yt(),(f,h)=>{const m=m8,v=u8,F=r8,x=e8,b=Kb,w=Jb,S=Bb,R=uf,M=Ab,V=Cb,A=Mn("RouterLink"),N=Fb,Z=fb,ie=ab,W=nb;return k(),H("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[o("div",{class:Ae(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(p)]),onMouseleave:u},[C(Dn)?ye("v-if",!0):(k(),H("button",{key:0,class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...ae)=>C(r)&&C(r)(...ae))},[C(s)?(k(),se(m,{key:0})):(k(),se(v,{key:1}))])),o("button",{class:Ae(["slidev-icon-btn",{disabled:!C(kS)}]),onClick:h[1]||(h[1]=(...ae)=>C(On)&&C(On)(...ae))},[z(F)],2),o("button",{class:Ae(["slidev-icon-btn",{disabled:!C(xS)}]),title:"Next",onClick:h[2]||(h[2]=(...ae)=>C(Rn)&&C(Rn)(...ae))},[z(x)],2),C(Dn)?ye("v-if",!0):(k(),H("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=ae=>C(tf)())},[z(b)])),C(wi)?ye("v-if",!0):(k(),H("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=ae=>C(lf)())},[C(da)?(k(),se(w,{key:0})):(k(),se(S,{key:1}))])),z(Sl),C(Dn)?ye("v-if",!0):(k(),H(Se,{key:3},[!C(xt)&&!C(n)&&C(d)?(k(),H(Se,{key:0},[z(C(d)),z(Sl)],64)):ye("v-if",!0),C(xt)?(k(),H("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=ae=>kl.value=!C(kl))},[C(kl)?(k(),se(R,{key:0})):(k(),se(M,{key:1,class:"opacity-50"}))])):ye("v-if",!0)],64)),ye("v-if",!0),C(Dn)?ye("v-if",!0):(k(),H(Se,{key:5},[C(xt)?(k(),se(A,{key:0,to:C(a),class:"slidev-icon-btn",title:"Play Mode"},{default:ue(()=>[z(V)]),_:1},8,["to"])):ye("v-if",!0),C(FS)?(k(),se(A,{key:1,to:C(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:ue(()=>[z(N)]),_:1},8,["to"])):ye("v-if",!0),ye("v-if",!0)],64)),(k(),H(Se,{key:6},[C(Ee).download?(k(),H("button",{key:0,class:"slidev-icon-btn",onClick:h[8]||(h[8]=(...ae)=>C(Ci)&&C(Ci)(...ae))},[z(Z)])):ye("v-if",!0)],64)),!C(xt)&&C(Ee).info&&!C(Dn)?(k(),H("button",{key:7,class:"slidev-icon-btn",onClick:h[9]||(h[9]=ae=>po.value=!C(po))},[z(ie)])):ye("v-if",!0),!C(xt)&&!C(Dn)?(k(),se(O8,{key:8},{button:ue(()=>[o("button",L8,[z(W)])]),menu:ue(()=>[z(T8)]),_:1})):ye("v-if",!0),C(Dn)?ye("v-if",!0):(k(),se(Sl,{key:9})),o("div",H8,[o("div",j8,[g(ls(C(Ue))+" ",1),o("span",B8,"/ "+ls(C(Cf)),1)])]),z(C(M8))],34)],512)}}}),D8=le(N8,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/NavControls.vue"]]),pf={render(){return[]}},df={render(){return[]}},V8={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},U8=we({__name:"PresenterMouse",setup(e){return Y(re),(t,n)=>{const s=uf;return C(Fl).cursor?(k(),H("div",V8,[z(s,{class:"absolute",style:ot({left:`${C(Fl).cursor.x}%`,top:`${C(Fl).cursor.y}%`})},null,8,["style"])])):ye("v-if",!0)}}}),J8=le(U8,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),q8=we({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){Y(re),ge(ct,()=>{var n,s;(n=ct.value)!=null&&n.meta&&ct.value.meta.preload!==!1&&(ct.value.meta.__preloaded=!0),(s=El.value)!=null&&s.meta&&El.value.meta.preload!==!1&&(El.value.meta.__preloaded=!0)},{immediate:!0}),Yt();const t=T(()=>Xe.filter(n=>{var s;return((s=n.meta)==null?void 0:s.__preloaded)||n===ct.value}));return(n,s)=>(k(),H(Se,null,[ye(" Global Bottom "),z(C(df)),ye(" Slides "),z(_g,Pt(C(ES),{id:"slideshow",tag:"div"}),{default:ue(()=>[(k(!0),H(Se,null,Hs(C(t),r=>{var l;return $n((k(),se(C(ma),{key:r.path,is:r==null?void 0:r.component,clicks:r===C(ct)?C(Rt):0,"clicks-elements":((l=r.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Ae(C(ha)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[hd,r===C(ct)]])}),128))]),_:1},16),ye(" Global Top "),z(C(pf)),ye("v-if",!0),C(xt)?ye("v-if",!0):(k(),se(J8,{key:1}))],64))}});const W8=le(q8,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesShow.vue"]]),X8=we({__name:"PrintStyle",setup(e){Y(re);function t(n,{slots:s}){if(s.default)return Ze("style",s.default())}return(n,s)=>(k(),se(t,null,{default:ue(()=>[g(" @page { size: "+ls(C(An))+"px "+ls(C(la))+"px; margin: 0px; } ",1)]),_:1}))}}),ff=le(X8,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintStyle.vue"]]),z8=we({__name:"Play",setup(e){Y(re),k0();const t=q();function n(l){var i;ru.value||((i=l.target)==null?void 0:i.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Rn():On())}$S(t);const s=T(()=>I_.value||ru.value);Yt();const r=Yt();return(l,i)=>(k(),H(Se,null,[C(un)?(k(),se(ff,{key:0})):ye("v-if",!0),o("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:ot(C(ia))},[z(cf,{class:"w-full h-full",style:ot({background:"var(--slidev-slide-container-background, black)"}),width:C(un)?C(rs).width.value:void 0,scale:C(hr),onPointerdown:n},{default:ue(()=>[z(W8,{context:"slide"})]),controls:ue(()=>[o("div",{class:Ae(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(s)?"opacity-100 right-0":"opacity-0 p-2",C(To)?"pointer-events-none":""]])},[z(D8,{class:"m-auto",persist:C(s)},null,8,["persist"])],2),ye("v-if",!0)]),_:1},8,["style","width","scale"]),ye("v-if",!0)],4),z(Z0)],64))}}),K8=le(z8,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function hf(e){return typeof e>"u"||e===null}function Y8(e){return typeof e=="object"&&e!==null}function Z8(e){return Array.isArray(e)?e:hf(e)?[]:[e]}function G8(e,t){var n,s,r,l;if(t)for(l=Object.keys(t),n=0,s=l.length;n<s;n+=1)r=l[n],e[r]=t[r];return e}function Q8(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function e2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var t2=hf,n2=Y8,s2=Z8,o2=Q8,r2=e2,l2=G8,ya={isNothing:t2,isObject:n2,toArray:s2,repeat:o2,isNegativeZero:r2,extend:l2};function mf(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function Ro(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=mf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ro.prototype=Object.create(Error.prototype);Ro.prototype.constructor=Ro;Ro.prototype.toString=function(t){return this.name+": "+mf(this,t)};var Kn=Ro,i2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],a2=["scalar","sequence","mapping"];function c2(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function u2(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(i2.indexOf(n)===-1)throw new Kn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=c2(t.styleAliases||null),a2.indexOf(this.kind)===-1)throw new Kn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var rt=u2;function yu(e,t){var n=[];return e[t].forEach(function(s){var r=n.length;n.forEach(function(l,i){l.tag===s.tag&&l.kind===s.kind&&l.multi===s.multi&&(r=i)}),n[r]=s}),n}function p2(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function xi(e){return this.extend(e)}xi.prototype.extend=function(t){var n=[],s=[];if(t instanceof rt)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new Kn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(l){if(!(l instanceof rt))throw new Kn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Kn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Kn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(l){if(!(l instanceof rt))throw new Kn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(xi.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=yu(r,"implicit"),r.compiledExplicit=yu(r,"explicit"),r.compiledTypeMap=p2(r.compiledImplicit,r.compiledExplicit),r};var d2=xi,f2=new rt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),h2=new rt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),m2=new rt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),y2=new d2({explicit:[f2,h2,m2]});function g2(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function v2(){return null}function F2(e){return e===null}var _2=new rt("tag:yaml.org,2002:null",{kind:"scalar",resolve:g2,construct:v2,predicate:F2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function b2(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function w2(e){return e==="true"||e==="True"||e==="TRUE"}function x2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var k2=new rt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:b2,construct:w2,predicate:x2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function C2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function S2(e){return 48<=e&&e<=55}function E2(e){return 48<=e&&e<=57}function $2(e){if(e===null)return!1;var t=e.length,n=0,s=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;s=!0}return s&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!C2(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!S2(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!E2(e.charCodeAt(n)))return!1;s=!0}return!(!s||r==="_")}function T2(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function A2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ya.isNegativeZero(e)}var R2=new rt("tag:yaml.org,2002:int",{kind:"scalar",resolve:$2,construct:T2,predicate:A2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),O2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function P2(e){return!(e===null||!O2.test(e)||e[e.length-1]==="_")}function I2(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var M2=/^[-+]?[0-9]+e/;function L2(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ya.isNegativeZero(e))return"-0.0";return n=e.toString(10),M2.test(n)?n.replace("e",".e"):n}function H2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ya.isNegativeZero(e))}var j2=new rt("tag:yaml.org,2002:float",{kind:"scalar",resolve:P2,construct:I2,predicate:H2,represent:L2,defaultStyle:"lowercase"}),B2=y2.extend({implicit:[_2,k2,R2,j2]}),N2=B2,yf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),gf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function D2(e){return e===null?!1:yf.exec(e)!==null||gf.exec(e)!==null}function V2(e){var t,n,s,r,l,i,a,c=0,u=null,p,d,f;if(t=yf.exec(e),t===null&&(t=gf.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,s,r));if(l=+t[4],i=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],d=+(t[11]||0),u=(p*60+d)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,s,r,l,i,a,c)),u&&f.setTime(f.getTime()-u),f}function U2(e){return e.toISOString()}var J2=new rt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:D2,construct:V2,instanceOf:Date,represent:U2});function q2(e){return e==="<<"||e===null}var W2=new rt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:q2}),ga=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function X2(e){if(e===null)return!1;var t,n,s=0,r=e.length,l=ga;for(n=0;n<r;n++)if(t=l.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function z2(e){var t,n,s=e.replace(/[\r\n=]/g,""),r=s.length,l=ga,i=0,a=[];for(t=0;t<r;t++)t%4===0&&t&&(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)),i=i<<6|l.indexOf(s.charAt(t));return n=r%4*6,n===0?(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)):n===18?(a.push(i>>10&255),a.push(i>>2&255)):n===12&&a.push(i>>4&255),new Uint8Array(a)}function K2(e){var t="",n=0,s,r,l=e.length,i=ga;for(s=0;s<l;s++)s%3===0&&s&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[s];return r=l%3,r===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):r===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):r===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function Y2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Z2=new rt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:X2,construct:z2,predicate:Y2,represent:K2}),G2=Object.prototype.hasOwnProperty,Q2=Object.prototype.toString;function ew(e){if(e===null)return!0;var t=[],n,s,r,l,i,a=e;for(n=0,s=a.length;n<s;n+=1){if(r=a[n],i=!1,Q2.call(r)!=="[object Object]")return!1;for(l in r)if(G2.call(r,l))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function tw(e){return e!==null?e:[]}var nw=new rt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:ew,construct:tw}),sw=Object.prototype.toString;function ow(e){if(e===null)return!0;var t,n,s,r,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(s=i[t],sw.call(s)!=="[object Object]"||(r=Object.keys(s),r.length!==1))return!1;l[t]=[r[0],s[r[0]]]}return!0}function rw(e){if(e===null)return[];var t,n,s,r,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1)s=i[t],r=Object.keys(s),l[t]=[r[0],s[r[0]]];return l}var lw=new rt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:ow,construct:rw}),iw=Object.prototype.hasOwnProperty;function aw(e){if(e===null)return!0;var t,n=e;for(t in n)if(iw.call(n,t)&&n[t]!==null)return!1;return!0}function cw(e){return e!==null?e:{}}var uw=new rt("tag:yaml.org,2002:set",{kind:"mapping",resolve:aw,construct:cw});N2.extend({implicit:[J2,W2],explicit:[Z2,nw,lw,uw]});function gu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var pw=new Array(256),dw=new Array(256);for(var Fs=0;Fs<256;Fs++)pw[Fs]=gu(Fs)?1:0,dw[Fs]=gu(Fs);function fw(e){return Array.from(new Set(e))}function vu(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let l=t;for(;l<n;)r.push(l),l+=s||1;return r}function vf(e,t){if(!t||t==="all"||t==="*")return vu(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[r,l]=s.split("-",2);n.push(...vu(+r,l?+l+1:e+1))}return fw(n).filter(s=>s<=e).sort((s,r)=>s-r)}function Ff(e){const t=T(()=>e.value.path),n=T(()=>Xe.length-1),s=T(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=T(()=>tl(s.value)),l=T(()=>Xe.find(f=>f.path===`${s.value}`)),i=T(()=>{var f,h,m;return(m=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),a=T(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(s.value===1?"cover":"default")}),c=T(()=>Xe.find(f=>f.path===`${Math.min(Xe.length,s.value+1)}`)),u=T(()=>Xe.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(va(f,h),f),[])),p=T(()=>Fa(u.value,l.value)),d=T(()=>_a(p.value));return{route:e,path:t,total:n,currentPage:s,currentPath:r,currentRoute:l,currentSlideId:i,currentLayout:a,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:d,downloadPDF:Ci,next:Rn,nextSlide:Oo,openInEditor:TS,prev:On,prevSlide:Po}}function _f(e,t,n){const s=q(0);et(()=>{mt.afterEach(async()=>{await et(),s.value+=1})});const r=T(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=T(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),i=T(()=>n.value<Xe.length-1||e.value<l.value),a=T(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:l,hasNext:i,hasPrev:a}}const hw=["id"],mw=we({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=zt(n,"clicksElements",t),r=T(()=>({height:`${la}px`,width:`${An}px`}));Yt();const l=T(()=>n.clicks),i=_f(l,n.nav.currentRoute,n.nav.currentPage),a=T(()=>`${n.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return wt(re,Be({nav:{...n.nav,...i},configs:Ee,themeConfigs:T(()=>Ee.themeConfig)})),(c,u)=>{var p;return k(),H("div",{id:C(a),class:"print-slide-container",style:ot(C(r))},[z(C(df)),z(C(ma),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":C(s),"onUpdate:clicksElements":u[0]||(u[0]=d=>Te(s)?s.value=d:null),clicks:C(l),"clicks-disabled":!1,class:Ae(C(ha)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),ye("v-if",!0),z(C(pf))],12,hw)}}}),Fu=le(mw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),yw=we({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const t=e;Y(re);const n=q(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),s=T(()=>t.route),r=Ff(s);return(i,a)=>(k(),H(Se,null,[z(Fu,{"clicks-elements":n.value,"onUpdate:clicksElements":a[0]||(a[0]=c=>n.value=c),clicks:0,nav:C(r),route:C(s)},null,8,["clicks-elements","nav","route"]),C(fo)?ye("v-if",!0):(k(!0),H(Se,{key:0},Hs(n.value.length,c=>(k(),se(Fu,{key:c,clicks:c,nav:C(r),route:C(s)},null,8,["clicks","nav","route"]))),128))],64))}}),gw=le(yw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlide.vue"]]),vw={id:"print-content"},Fw=we({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;Y(re);const n=T(()=>t.width),s=T(()=>t.width/Tn),r=T(()=>n.value/s.value),l=T(()=>r.value<Tn?n.value/An:s.value*Tn/An);let i=Xe.slice(0,-1);It.value.query.range&&(i=vf(i.length,It.value.query.range).map(u=>i[u-1]));const a=T(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return wt(xd,l),(c,u)=>(k(),H("div",{id:"print-container",class:Ae(C(a))},[o("div",vw,[(k(!0),H(Se,null,Hs(C(i),p=>(k(),se(gw,{key:p.path,route:p},null,8,["route"]))),128))]),gt(c.$slots,"controls")],2))}});const _w=le(Fw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintContainer.vue"]]),bw=we({__name:"Print",setup(e){return Y(re),ps(()=>{un?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(k(),H(Se,null,[C(un)?(k(),se(ff,{key:0})):ye("v-if",!0),o("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ot(C(ia))},[z(_w,{class:"w-full h-full",style:ot({background:"var(--slidev-slide-container-background, black)"}),width:C(rs).width.value},null,8,["style","width"])],4)],64))}});const ww=le(bw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Print.vue"]]);const xw={class:"slidev-layout end"},kw={__name:"end",setup(e){return Y(re),(t,n)=>(k(),H("div",xw," END "))}},Cw=le(kw,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/end.vue"]]),Sw={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ew=o("path",{fill:"currentColor",d:"M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"},null,-1),$w=[Ew];function Tw(e,t){return k(),H("svg",Sw,$w)}const Aw={name:"mdi-react",render:Tw},Rw={class:"slidev-layout cover"},Ow={class:"my-auto w-full"},Pw={__name:"cover",setup(e){return Y(re),(t,n)=>(k(),H("div",Rw,[o("div",Ow,[gt(t.$slots,"default")])]))}},Iw=le(Pw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/slidev-theme-dracula/layouts/cover.vue"]]);const bf=e=>(Hm("data-v-42c5a5a3"),e=e(),jm(),e),Mw=bf(()=>o("span",{class:"font-bold"},"Welcome to React",-1)),Lw=bf(()=>o("p",null,[g("Shared by "),o("a",{href:"mailto:siyuan.wang@capgemini.com",target:"_blank",rel:"noopener"},"siyuan.wang")],-1)),Hw={__name:"1",setup(e){const t={css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md"};return Y(re),(n,s)=>{const r=Aw;return k(),se(Iw,Je(De(t)),{default:ue(()=>[o("h1",null,[z(r,{class:"text-[#4EC5D4] font-normal animate-spin-slow"}),g(),Mw]),Lw]),_:1},16)}}},jw=le(Hw,[["__scopeId","data-v-42c5a5a3"],["__file","/@slidev/slides/1.md"]]),Bw=["href","innerHTML"],Nw=["href"],Dw=we({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return Y(re),(t,n)=>{const s=Mn("RouterLink");return!C(un)&&e.title?(k(),se(s,{key:0,to:String(e.to),onClick:n[0]||(n[0]=r=>r.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!C(un)&&!e.title?(k(),se(s,{key:1,to:String(e.to),onClick:n[1]||(n[1]=r=>r.target.blur())},{default:ue(()=>[gt(t.$slots,"default")]),_:3},8,["to"])):C(un)&&e.title?(k(),H("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,Bw)):(k(),H("a",{key:3,href:`#${e.to}`},[gt(t.$slots,"default")],8,Nw))}}}),Vw=le(Dw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/Link.vue"]]),Uw=o("span",{class:"font-bold"},"Welcome to React",-1),Jw={key:1},qw={key:2},Ww={key:3},Xw={key:4},zw={key:5},Kw={key:6},Yw={key:7},Zw={key:8},Gw={key:9},Qw={key:10},ex={key:11},tx={key:12},nx={key:13},sx={key:14},ox={key:15},rx={key:16},lx={key:17},ix={key:18},ax={key:19},cx={key:20},ux={key:21},px=we({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(t,n)=>{const s=Mn("mdi-react");return k(),H("div",null,[+e.no==1?(k(),H(Se,{key:0},[z(s,{class:"text-[#4EC5D4] font-normal animate-spin-slow"}),g(),Uw],64)):+e.no==2?(k(),H("p",Jw,"Lesson 1")):+e.no==3?(k(),H("p",qw,"Schedule")):+e.no==4?(k(),H("p",Ww,"Thinking")):+e.no==5?(k(),H("p",Xw,"What is React?")):+e.no==6?(k(),H("p",zw,"What is JSX?")):+e.no==7?(k(),H("p",Kw,"JSX in React")):+e.no==8?(k(),H("p",Yw,"React JSX vs Vue Template")):+e.no==9?(k(),H("p",Zw,"Heros with JSX")):+e.no==10?(k(),H("p",Gw,"Components")):+e.no==11?(k(),H("p",Qw,"Review components")):+e.no==12?(k(),H("p",ex,"Lifecycle")):+e.no==13?(k(),H("p",tx,"Hooks")):+e.no==14?(k(),H("p",nx,"Ant Design")):+e.no==15?(k(),H("p",sx,"UmiJS")):+e.no==16?(k(),H("p",ox,"Homework")):+e.no==17?(k(),H("p",rx,"State Hooks")):+e.no==18?(k(),H("p",lx,"Context Hooks")):+e.no==19?(k(),H("p",ix,"Ref Hooks")):+e.no==20?(k(),H("p",ax,"Effect Hooks")):+e.no==21?(k(),H("p",cx,"Performance Hooks")):+e.no==22?(k(),H("p",ux,"Other Hooks")):ye("v-if",!0)])}}}),dx=le(px,[["__file","/@slidev/titles.md"]]),fx=we({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const t=e;Y(re);const n=T(()=>[...kd(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(s,r)=>{const l=Vw,i=Mn("TocList",!0);return e.list&&e.list.length>0?(k(),H("ol",{key:0,class:Ae(C(n))},[(k(!0),H(Se,null,Hs(e.list,a=>(k(),H("li",{key:a.path,class:Ae(["slidev-toc-item",[{"slidev-toc-item-active":a.active},{"slidev-toc-item-parent-active":a.activeParent}]])},[z(l,{to:a.path},{default:ue(()=>[z(C(dx),{no:a.path},null,8,["no"])]),_:2},1032,["to"]),a.children.length>0?(k(),se(i,{key:0,level:e.level+1,list:a.children,"list-class":e.listClass},null,8,["level","list","list-class"])):ye("v-if",!0)],2))),128))],2)):ye("v-if",!0)}}});const hx=le(fx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/TocList.vue"]]),mx=we({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const t=e,n=Y(re);function s(a,c=1){if(c>Number(t.maxDepth))return[];if(c<Number(t.minDepth)){const u=a.find(p=>p.active||p.activeParent);return u?s(u.children,c+1):[]}return a.map(u=>({...u,children:s(u.children,c+1)}))}function r(a){return a.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:r(c.children)}))}function l(a){const c=a.some(u=>u.active||u.activeParent||u.hasActiveParent);return a.filter(()=>c).map(u=>({...u,children:l(u.children)}))}const i=T(()=>{const a=n==null?void 0:n.nav.tree;if(!a)return[];let c=s(a);return t.mode==="onlyCurrentTree"?c=r(c):t.mode==="onlySiblings"&&(c=l(c)),c});return(a,c)=>{const u=hx;return k(),H("div",{class:"slidev-toc",style:ot(`column-count:${e.columns}`)},[z(u,{level:1,list:C(i),"list-class":e.listClass},null,8,["list","list-class"])],4)}}}),yx=le(mx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/Toc.vue"]]),gx={class:"slidev-layout center h-full grid place-content-center"},vx={class:"my-auto"},Fx={__name:"center",setup(e){return Y(re),(t,n)=>(k(),H("div",gx,[o("div",vx,[gt(t.$slots,"default")])]))}},_x=le(Fx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/center.vue"]]),bx=o("h1",null,"Lesson 1",-1),wx={__name:"2",setup(e){const t={layout:"center",hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return Y(re),(n,s)=>{const r=yx;return k(),se(_x,Je(De(t)),{default:ue(()=>[bx,z(r)]),_:1},16)}}},xx=le(wx,[["__file","/@slidev/slides/2.md"]]),kx={class:"slidev-layout default"},Cx={__name:"default",setup(e){return Y(re),(t,n)=>(k(),H("div",kx,[gt(t.$slots,"default")]))}},Ye=le(Cx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/default.vue"]]),Sx=o("h1",null,"Schedule",-1),Ex=o("p",null,"本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：",-1),$x=o("div",{class:"mt-6"},null,-1),Tx=o("h4",null,[o("strong",null,"基础"),g("和"),o("strong",null,"进阶"),g("：")],-1),Ax=o("ul",null,[o("li",null,"基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；"),o("li",null,"进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；")],-1),Rx=o("div",{class:"mt-5"},null,-1),Ox=o("h4",null,"“副”作用：",-1),Px=o("ul",null,[o("li",null,[g("适当普及 ES6+、Typescript 以及"),o("span",{class:"text-highlight"},"函数式编程"),g("；")]),o("li",null,"在每次课程的最后布置作业；"),o("li",null,"培训的最后，提供实战类的项目；")],-1),Ix=o("div",{class:"mt-5"},null,-1),Mx=o("h4",null,"真正的计划",-1),Lx=o("p",null,"课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；",-1),Hx={__name:"3",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./schedule.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[Sx,Ex,$x,Tx,Ax,Rx,Ox,Px,Ix,Mx,Lx]),_:1},16))}},jx=le(Hx,[["__file","/@slidev/slides/3.md"]]),Bx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Nx=o("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),Dx=[Nx];function Vx(e,t){return k(),H("svg",Bx,Dx)}const Ux={name:"ph-clipboard",render:Vx},Jx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qx=o("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Wx=[qx];function Xx(e,t){return k(),H("svg",Jx,Wx)}const zx={name:"ph-check-circle",render:Xx},Kx=["title"],Yx=we({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;Y(re);const n=Y(io),s=Y(zn),r=Y(ao);function l(d=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let v=0;v<d;v++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const i=q(),a=Et();ds(()=>{const d=t.at==null?s==null?void 0:s.value.length:t.at,f=T(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(d||0)),t.ranges.length-1)),h=T(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const m=l(),v=Ov(t.ranges.length-1).map(F=>m+F);s!=null&&s.value&&(s.value.push(...v),Yr(()=>v.forEach(F=>ii(s.value,F)),a))}ps(()=>{if(!i.value)return;const v=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const F of v){const x=Array.from(F.querySelectorAll(".line")),b=vf(x.length,h.value);if(x.forEach((w,S)=>{const R=b.includes(S+1);w.classList.toggle(Wn,!0),w.classList.toggle("highlighted",R),w.classList.toggle("dishonored",!R)}),t.maxHeight){const w=F.querySelector(".line.highlighted");w&&w.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=SF();function p(){var f,h;const d=(h=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;d&&u(d)}return(d,f)=>{const h=zx,m=Ux;return k(),H("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:ot({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[gt(d.$slots,"default"),C(Ee).codeCopy?(k(),H("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(c)?"Copied":"Copy",onClick:f[0]||(f[0]=v=>p())},[C(c)?(k(),se(h,{key:0,class:"p-2 w-8 h-8"})):(k(),se(m,{key:1,class:"p-2 w-8 h-8"}))],8,Kx)):ye("v-if",!0)],4)}}}),Jo=le(Yx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Zx=o("h1",null,"Thinking",-1),Gx=o("p",null,"为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？",-1),Qx=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#6272A4"}},"<!-- BlogPost.vue -->")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FF79C6"}},"template"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  <"),o("span",{style:{color:"#FF79C6"}},"h4"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"onClick"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},">{{ title }}</"),o("span",{style:{color:"#FF79C6"}},"h4"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"</"),o("span",{style:{color:"#FF79C6"}},"template"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FF79C6"}},"script"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"lang"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"ts"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"type"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  title"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," props "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"defineProps"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),o("span",{style:{color:"#F8F8F2"}},">(["),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"title"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},"])")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," emits "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"defineEmits"),o("span",{style:{color:"#F8F8F2"}},"(["),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"click"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},"])")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"onClick"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"emits"),o("span",{style:{color:"#F8F8F2"}},"("),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"click"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},", props.title)")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"</"),o("span",{style:{color:"#FF79C6"}},"script"),o("span",{style:{color:"#F8F8F2"}},">")])])]),o("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#6272A4"}},"<!-- BlogPost.vue -->")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FF79C6"}},"template"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  <"),o("span",{style:{color:"#FF79C6"}},"h4"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"onClick"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},">{{ title }}</"),o("span",{style:{color:"#FF79C6"}},"h4"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"</"),o("span",{style:{color:"#FF79C6"}},"template"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FF79C6"}},"script"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"lang"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"ts"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"type"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  title"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," props "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"defineProps"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),o("span",{style:{color:"#F8F8F2"}},">(["),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"title"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},"])")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," emits "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"defineEmits"),o("span",{style:{color:"#F8F8F2"}},"(["),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"click"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},"])")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"onClick"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"emits"),o("span",{style:{color:"#F8F8F2"}},"("),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"click"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},", props.title)")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"</"),o("span",{style:{color:"#FF79C6"}},"script"),o("span",{style:{color:"#F8F8F2"}},">")])])])],-1),ek=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FF79C6"}},"template"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF5555","font-style":"italic","text-decoration":"underline"}},"BlogPost"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"title"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"My journey with Vue"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"onClick"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," />")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"</"),o("span",{style:{color:"#FF79C6"}},"template"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FF79C6"}},"script"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"onClick"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," ("),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"title"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),o("span",{style:{color:"#F8F8F2"}},") "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," console."),o("span",{style:{color:"#50FA7B"}},"log"),o("span",{style:{color:"#F8F8F2"}},"(title)")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"</"),o("span",{style:{color:"#FF79C6"}},"script"),o("span",{style:{color:"#F8F8F2"}},">")])])]),o("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FF79C6"}},"template"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF5555","font-style":"italic","text-decoration":"underline"}},"BlogPost"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"title"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"My journey with Vue"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"@click"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"onClick"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," />")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"</"),o("span",{style:{color:"#FF79C6"}},"template"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#FF79C6"}},"script"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"setup"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"onClick"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," ("),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"title"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),o("span",{style:{color:"#F8F8F2"}},") "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," console."),o("span",{style:{color:"#50FA7B"}},"log"),o("span",{style:{color:"#F8F8F2"}},"(title)")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"</"),o("span",{style:{color:"#FF79C6"}},"script"),o("span",{style:{color:"#F8F8F2"}},">")])])])],-1),tk={__name:"4",setup(e){const t={transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./warm-up.md"};return Y(re),(n,s)=>{const r=Jo;return k(),se(Ye,Je(De(t)),{default:ue(()=>[Zx,Gx,z(r,Pt({},{ranges:["3"]}),{default:ue(()=>[Qx]),_:1},16),z(r,Pt({},{ranges:["2"]}),{default:ue(()=>[ek]),_:1},16)]),_:1},16)}}},nk=le(tk,[["__file","/@slidev/slides/4.md"]]),_u=["ul","ol"],wf=we({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var a,c;const e=Cr("click"),t=Cr("after"),n=(u,p,d)=>$n(u,[[p,d,"",{hide:this.hide,fade:this.fade}]]);let s=(c=(a=this.$slots).default)==null?void 0:c.call(a);if(!s)return;s=kd(s);const r=(u,p=1)=>{let d=0;return[u.map(h=>{if(!Zt(h))return h;if(_u.includes(h.type)&&Array.isArray(h.children)){const[m,v]=i(h.children,p+1);return d+=v,Ze(h,{},[m])}return Ze(h)}),d]};let l=0;const i=(u,p=1)=>{let d=0;return[u.map(h=>{if(!Zt(h))return h;const m=d%this.every===0?e:t;let v,F=0;if(p<this.depth&&Array.isArray(h.children)){const[b,w]=r(h.children,p);v=Ze(h,{},[b]),F=w,d+=w+1}else v=Ze(h),d++;const x=this.at!=null?Number(this.at)+Math.floor(l/this.every)+p:(p-1-F).toString();return l++,n(v,m,typeof x=="string"&&!x.startsWith("-")?`+${x}`:x)}),d]};return s.length===1&&_u.includes(s[0].type)&&Array.isArray(s[0].children)?Ze(s[0],{},[i(s[0].children)[0]]):i(s)[0]}}),sk="/react-shared-ppt/assets/nextjs-3fe22fdd.png",ok="/react-shared-ppt/assets/remix-6950a405.png",rk="/react-shared-ppt/assets/umijs-ecd129e6.png",lk={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},ik=we({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return Y(re),(n,s)=>(k(),H("div",lk,[o("div",{class:Ae(["col-left",t.class])},[gt(n.$slots,"default")],2),o("div",{class:Ae(["col-right",t.class])},[gt(n.$slots,"right")],2)]))}}),ak=le(ik,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/two-cols.vue"]]),ck=o("h1",null,"What is React?",-1),uk=o("div",{class:"flex items-center justify-center mr-4 py-4 bg-black rounded"},[o("p",null,[o("span",{class:"text-gradient-red text-[36px]"},"f(state) = UI")])],-1),pk={class:"w-100 mt-5"},dk=o("ul",null,[o("li",null,"React 是一个用于渲染用户界面（UI）的 JavaScript 工具库"),o("li",null,"用组件创建用户界面"),o("li",null,"用代码和标签编写组件"),o("li",null,"在任何地方添加交互"),o("li",null,"渐进式 JavaScript 框架"),o("li",null,"NextJs / Remix / UmiJs")],-1),fk=o("p",null,[g("Read more about "),o("a",{href:"https://react.dev/",target:"_blank",rel:"noopener"},"React")],-1),hk=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"import"),o("span",{style:{color:"#F8F8F2"}}," { "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," FC } "),o("span",{style:{color:"#FF79C6"}},"from"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"react"),o("span",{style:{color:"#E9F284"}},"'")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Video"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),o("span",{style:{color:"#F8F8F2"}},"<{ video"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),o("span",{style:{color:"#F8F8F2"}}," }> "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," ({")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  video")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}) {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  const "),o("span",{style:{color:"#50FA7B"}},"onPlay"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," { console."),o("span",{style:{color:"#50FA7B"}},"log"),o("span",{style:{color:"#F8F8F2"}},"("),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"Play video."),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},"); }")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#50FA7B"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"onClick"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{onPlay}"),o("span",{style:{color:"#FF79C6"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"Thumbnail"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{video} "),o("span",{style:{color:"#FF79C6"}},"/>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"LikeButton"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{video} "),o("span",{style:{color:"#FF79C6"}},"/>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"import"),o("span",{style:{color:"#F8F8F2"}}," { "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," FC } "),o("span",{style:{color:"#FF79C6"}},"from"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"react"),o("span",{style:{color:"#E9F284"}},"'")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Video"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),o("span",{style:{color:"#F8F8F2"}},"<{ video"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),o("span",{style:{color:"#F8F8F2"}}," }> "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," ({")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  video")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}) {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  const "),o("span",{style:{color:"#50FA7B"}},"onPlay"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," { console."),o("span",{style:{color:"#50FA7B"}},"log"),o("span",{style:{color:"#F8F8F2"}},"("),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"Play video."),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},"); }")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#50FA7B"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"onClick"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{onPlay}"),o("span",{style:{color:"#FF79C6"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"Thumbnail"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{video} "),o("span",{style:{color:"#FF79C6"}},"/>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"LikeButton"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{video} "),o("span",{style:{color:"#FF79C6"}},"/>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),mk=o("img",{src:sk,class:"relative z-[2] w-full -mt-40"},null,-1),yk=o("img",{src:ok,class:"relative w-full z-[3] -mt-16"},null,-1),gk=o("img",{src:rk,class:"relative w-full z-[3] -mt-16"},null,-1),vk={__name:"5",setup(e){const t={clicks:9,layout:"two-cols",transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md"};return Y(re),(n,s)=>{const r=wf,l=Jo,i=Cr("click");return k(),se(ak,Je(De(t)),{right:ue(()=>[$n((k(),H("div",null,[z(l,Pt({at:2},{ranges:["10,11","3-9,12-14","6,9","all"]}),{default:ue(()=>[hk]),_:1},16)])),[[i,2]]),z(r,{at:"6"},{default:ue(()=>[mk,yk,gk]),_:1})]),default:ue(()=>[ck,uk,o("div",pk,[z(r,null,{default:ue(()=>[dk]),_:1})]),fk]),_:1},16)}}},Fk=le(vk,[["__file","/@slidev/slides/5.md"]]),_k=o("h1",null,"What is JSX?",-1),bk=o("p",null,"给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？",-1),wk=o("iframe",{src:"https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark",class:"w-full h-[calc(100%+5px)]"},null,-1),xk={__name:"6",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[_k,bk,ye(" 对比：不用 JSX 怎么处理，用 JSX 怎么写 "),wk]),_:1},16))}},kk=le(xk,[["__file","/@slidev/slides/6.md"]]),Ck=o("h1",null,"JSX in React",-1),Sk=o("p",null,'JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。',-1),Ek=o("h3",null,"一个 🌰 (例子)",-1),$k=o("div",{class:"h-2"},null,-1),Tk=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"function"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}},"({ "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),o("span",{style:{color:"#F8F8F2"}},", "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),o("span",{style:{color:"#F8F8F2"}}," }) {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"className"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"btn__alert"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"style"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{{ width"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"20px"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}}," }} "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{() "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"alert"),o("span",{style:{color:"#F8F8F2"}},"(message)}>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      {children}")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"export"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"default"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"function"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Toolbar"),o("span",{style:{color:"#F8F8F2"}},"() {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF79C6"}},"div"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"img"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"/public/images/react.png"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," />")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"message"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"我是糖炒 🌰"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        我是糖炒 🌰")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      </"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FF79C6"}},"div"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"function"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}},"({ "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),o("span",{style:{color:"#F8F8F2"}},", "),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),o("span",{style:{color:"#F8F8F2"}}," }) {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"className"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"btn__alert"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"style"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{{ width"),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"20px"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}}," }} "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{() "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"alert"),o("span",{style:{color:"#F8F8F2"}},"(message)}>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      {children}")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"export"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"default"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"function"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Toolbar"),o("span",{style:{color:"#F8F8F2"}},"() {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF79C6"}},"div"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"img"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"/public/images/react.png"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}}," />")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"message"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"我是糖炒 🌰"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        我是糖炒 🌰")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      </"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FF79C6"}},"div"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),Ak={__name:"7",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return Y(re),(n,s)=>{const r=Jo;return k(),se(Ye,Je(De(t)),{default:ue(()=>[Ck,Sk,Ek,$k,z(r,Pt({},{ranges:["all","1-7","9-18","2,6,10,17","3,5,11-12,16","13,15","4,14"]}),{default:ue(()=>[Tk]),_:1},16)]),_:1},16)}}},Rk=le(Ak,[["__file","/@slidev/slides/7.md"]]),Ok=o("h1",null,"React JSX vs Vue Template",-1),Pk=o("p",null,[o("span",{class:"text-gray-400"},"下表为 React JSX 和 Vue Template 的异同。")],-1),Ik=o("thead",null,[o("tr",null,[o("th",null,"对比"),o("th",null,"React"),o("th",null,"Vue")])],-1),Mk=o("tr",null,[o("td",null,"组件调用"),o("td",null,"大驼峰"),o("td",null,"大驼峰、小驼峰、短横线均可")],-1),Lk=o("tr",null,[o("td",null,"原生标签"),o("td",null,[o("strong",null,"必须"),g("闭合（包括自闭合）")]),o("td",null,"无区别")],-1),Hk=o("tr",null,[o("td",null,"作用域"),o("td",null,"全局、函数和块级作用域"),o("td",null,"绑定到 Vue 组件实例、全局 Context 和 Slot context")],-1),jk=o("tr",null,[o("td",null,"变量、表达式"),o("td",null,[g("用 "),o("code",null,"{}"),g(" 表示")]),o("td",null,[g("用 "),o("code",null,"{{}}"),g(" 表示")])],-1),Bk=o("tr",null,[o("td",null,"属性"),o("td",null,[g("小驼峰，"),o("em",null,"class 改为 className")]),o("td",null,"小驼峰、短横线命名均可")],-1),Nk=o("tr",null,[o("td",null,"动态属性"),o("td",null,[g("参数后加 "),o("code",null,"{}")]),o("td",null,[g("参数前加 "),o("code",null,":")])],-1),Dk=o("tr",null,[o("td",null,"事件"),o("td",null,[g("事件后加 "),o("code",null,"{}"),g("，值为函数")]),o("td",null,[g("事件前加 "),o("code",null,"v-on"),g(" 或 "),o("code",null,"@")])],-1),Vk=o("td",null,[o("code",null,"v-for"),g(" / "),o("code",null,"v-if"),g(" / "),o("code",null,"v-show"),g(" …")],-1),Uk=we({__name:"8",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};Y(re);const n=q(!1),s=()=>n.value=!n.value;return(r,l)=>{const i=Mn("uim-rocket");return k(),se(Ye,Je(De(t)),{default:ue(()=>[Ok,Pk,o("table",null,[Ik,o("tbody",null,[Mk,Lk,Hk,jk,Bk,Nk,Dk,o("tr",null,[o("td",null,[o("span",{class:Ae({"text-highlight-2 ":n.value})},"动态渲染",2)]),o("td",null,[o("span",{class:Ae({"text-highlight-2 ":n.value})},"一切皆为 JavaScript ",2)]),Vk])])]),o("p",null,[o("span",{class:Ae(["absolute left-[20px] bottom-[42px]",{"text-highlight-2 ":n.value}]),onClick:s},[z(i)],2)]),ye(`
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
`)]),_:1},16)}}}),Jk=le(Uk,[["__file","/@slidev/slides/8.md"]]),qk=o("h1",null,"Heros with JSX",-1),Wk=o("p",null,"接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。",-1),Xk=o("iframe",{src:"https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark",class:"w-full h-[calc(100%+5px)]"},null,-1),zk={__name:"9",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[qk,Wk,Xk]),_:1},16))}},Kk=le(zk,[["__file","/@slidev/slides/9.md"]]),Yk=o("h1",null,"Components",-1),Zk=o("p",null,[g("和 Vue 类似，React 也是以"),o("strong",null,"组件"),g("的形式构建页面。")],-1),Gk={class:"flex gap-x-4"},Qk={class:"w-1/2"},eC=o("h3",null,"Class Component",-1),tC=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"import"),o("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),o("span",{style:{color:"#FF79C6"}},"from"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"react"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"export"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"default"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"class"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"extends"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Component"),o("span",{style:{color:"#F8F8F2"}}," {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  inputRef "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"createRef"),o("span",{style:{color:"#F8F8F2"}},"();")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#50FA7B"}},"handleClick"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),o("span",{style:{color:"#F8F8F2"}},".inputRef.current."),o("span",{style:{color:"#50FA7B"}},"focus"),o("span",{style:{color:"#F8F8F2"}},"();")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#50FA7B"}},"render"),o("span",{style:{color:"#F8F8F2"}},"() {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        <"),o("span",{style:{color:"#FF79C6"}},"input"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{"),o("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),o("span",{style:{color:"#F8F8F2"}},".inputRef} />")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        <"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{"),o("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),o("span",{style:{color:"#F8F8F2"}},".handleClick}>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"          Focus the input")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        </"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      </>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  }")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"import"),o("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),o("span",{style:{color:"#FF79C6"}},"from"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"react"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"export"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"default"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"class"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"extends"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Component"),o("span",{style:{color:"#F8F8F2"}}," {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  inputRef "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"createRef"),o("span",{style:{color:"#F8F8F2"}},"();")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#50FA7B"}},"handleClick"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),o("span",{style:{color:"#F8F8F2"}},".inputRef.current."),o("span",{style:{color:"#50FA7B"}},"focus"),o("span",{style:{color:"#F8F8F2"}},"();")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#50FA7B"}},"render"),o("span",{style:{color:"#F8F8F2"}},"() {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        <"),o("span",{style:{color:"#FF79C6"}},"input"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{"),o("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),o("span",{style:{color:"#F8F8F2"}},".inputRef} />")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        <"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{"),o("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),o("span",{style:{color:"#F8F8F2"}},".handleClick}>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"          Focus the input")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        </"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      </>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  }")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),nC={class:"w-1/2"},sC=o("h3",null,"Function Component",-1),oC=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"import"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#BD93F9"}},"*"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," React "),o("span",{style:{color:"#FF79C6"}},"from"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"react"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"export"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"default"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"function"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}},"() {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," inputRef "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," React."),o("span",{style:{color:"#50FA7B"}},"useRef"),o("span",{style:{color:"#F8F8F2"}},"();")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," handleClick "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," inputRef.current."),o("span",{style:{color:"#50FA7B"}},"focus"),o("span",{style:{color:"#F8F8F2"}},"();")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"input"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{inputRef} />")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{handleClick}>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        Focus the input")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      </"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"import"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#BD93F9"}},"*"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," React "),o("span",{style:{color:"#FF79C6"}},"from"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"react"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"export"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"default"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"function"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"AlertButton"),o("span",{style:{color:"#F8F8F2"}},"() {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," inputRef "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," React."),o("span",{style:{color:"#50FA7B"}},"useRef"),o("span",{style:{color:"#F8F8F2"}},"();")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," handleClick "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," inputRef.current."),o("span",{style:{color:"#50FA7B"}},"focus"),o("span",{style:{color:"#F8F8F2"}},"();")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"input"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{inputRef} />")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{handleClick}>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        Focus the input")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      </"),o("span",{style:{color:"#FF79C6"}},"button"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),rC={__name:"10",setup(e){const t={clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md"};return Y(re),(n,s)=>{const r=Jo;return k(),se(Ye,Je(De(t)),{default:ue(()=>[Yk,Zk,o("div",Gk,[o("div",Qk,[eC,z(r,Pt({},{ranges:["all","10,15","all","0"]}),{default:ue(()=>[tC]),_:1},16)]),o("div",nC,[sC,z(r,Pt({at:0},{ranges:["all","8,13","0","all"]}),{default:ue(()=>[oC]),_:1},16)])])]),_:1},16)}}},lC=le(rC,[["__file","/@slidev/slides/10.md"]]),iC=o("h1",null,"Review components",-1),aC=o("pre",{class:"shiki-container"},[o("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"import"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#BD93F9"}},"*"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," React "),o("span",{style:{color:"#FF79C6"}},"from"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"react"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Empty"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"No Heros."),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Loading"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"Loading, fetching heros..."),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"unknown"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"JSX"),o("span",{style:{color:"#F8F8F2"}},"."),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Element"),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"export"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"default"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"function"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"App"),o("span",{style:{color:"#F8F8F2"}},"() {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," React."),o("span",{style:{color:"#50FA7B"}},"useState"),o("span",{style:{color:"#F8F8F2"}},"([]);")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"renderHero"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," ("),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),o("span",{style:{color:"#F8F8F2"}},") "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF79C6"}},"li"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{item.id}>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"span"),o("span",{style:{color:"#F8F8F2"}},">{item.name}</"),o("span",{style:{color:"#FF79C6"}},"span"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"span"),o("span",{style:{color:"#F8F8F2"}},">{item.skills."),o("span",{style:{color:"#50FA7B"}},"join"),o("span",{style:{color:"#F8F8F2"}},"("),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},", "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},")}</"),o("span",{style:{color:"#FF79C6"}},"span"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FF79C6"}},"li"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF79C6"}},"ul"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"user-list"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      {loading "),o("span",{style:{color:"#FF79C6"}},"?"),o("span",{style:{color:"#F8F8F2"}}," <"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Loading"),o("span",{style:{color:"#F8F8F2"}}," /> "),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," heros.length "),o("span",{style:{color:"#FF79C6"}},"?"),o("span",{style:{color:"#F8F8F2"}}," ")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        heros."),o("span",{style:{color:"#50FA7B"}},"map"),o("span",{style:{color:"#F8F8F2"}},"(renderHero) "),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Empty"),o("span",{style:{color:"#F8F8F2"}},"()}")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FF79C6"}},"ul"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])]),o("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"import"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#BD93F9"}},"*"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," React "),o("span",{style:{color:"#FF79C6"}},"from"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"react"),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Empty"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"No Heros."),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Loading"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," () "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},"Loading, fetching heros..."),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"unknown"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"as"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"JSX"),o("span",{style:{color:"#F8F8F2"}},"."),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Element"),o("span",{style:{color:"#F8F8F2"}},";")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#FF79C6"}},"export"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"default"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"function"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"App"),o("span",{style:{color:"#F8F8F2"}},"() {")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," React."),o("span",{style:{color:"#50FA7B"}},"useState"),o("span",{style:{color:"#F8F8F2"}},"([]);")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"const"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"renderHero"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}}," ("),o("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),o("span",{style:{color:"#F8F8F2"}},") "),o("span",{style:{color:"#FF79C6"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF79C6"}},"li"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#F8F8F2"}},"{item.id}>")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"span"),o("span",{style:{color:"#F8F8F2"}},">{item.name}</"),o("span",{style:{color:"#FF79C6"}},"span"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      <"),o("span",{style:{color:"#FF79C6"}},"span"),o("span",{style:{color:"#F8F8F2"}},">{item.skills."),o("span",{style:{color:"#50FA7B"}},"join"),o("span",{style:{color:"#F8F8F2"}},"("),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F1FA8C"}},", "),o("span",{style:{color:"#E9F284"}},"'"),o("span",{style:{color:"#F8F8F2"}},")}</"),o("span",{style:{color:"#FF79C6"}},"span"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FF79C6"}},"li"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"}),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#FF79C6"}},"return"),o("span",{style:{color:"#F8F8F2"}}," (")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    <"),o("span",{style:{color:"#FF79C6"}},"ul"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),o("span",{style:{color:"#FF79C6"}},"="),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F1FA8C"}},"user-list"),o("span",{style:{color:"#E9F284"}},'"'),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"      {loading "),o("span",{style:{color:"#FF79C6"}},"?"),o("span",{style:{color:"#F8F8F2"}}," <"),o("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Loading"),o("span",{style:{color:"#F8F8F2"}}," /> "),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," heros.length "),o("span",{style:{color:"#FF79C6"}},"?"),o("span",{style:{color:"#F8F8F2"}}," ")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"        heros."),o("span",{style:{color:"#50FA7B"}},"map"),o("span",{style:{color:"#F8F8F2"}},"(renderHero) "),o("span",{style:{color:"#FF79C6"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#50FA7B"}},"Empty"),o("span",{style:{color:"#F8F8F2"}},"()}")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"    </"),o("span",{style:{color:"#FF79C6"}},"ul"),o("span",{style:{color:"#F8F8F2"}},">")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  );")]),g(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),cC={__name:"11",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return Y(re),(n,s)=>{const r=Jo;return k(),se(Ye,Je(De(t)),{default:ue(()=>[iC,z(r,Pt({},{ranges:["all","3,19","4,18","9-14"]}),{default:ue(()=>[aC]),_:1},16)]),_:1},16)}}},uC=le(cC,[["__file","/@slidev/slides/11.md"]]),pC="/react-shared-ppt/assets/old-lifecycle-fb958309.webp",dC="/react-shared-ppt/assets/new-lifecycle-469c3870.webp",fC=o("h1",null,"Lifecycle",-1),hC=o("p",null,[g("React 的"),o("strong",null,"类组件"),g("有生命周期，而"),o("strong",null,"函数式组件"),g("的生命周期是 "),o("em",null,"hooks"),g("。")],-1),mC=o("p",null,[g("版本 "),o("code",null,"v16.3"),g(" 是 React 生命周期的分界线；")],-1),yC={class:"flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]"},gC={class:"w-1/2 text-center"},vC=o("h3",null,"旧生命周期",-1),FC=o("img",{src:pC,class:"mt-4"},null,-1),_C=[vC,FC],bC={class:"relative w-15 flex justify-center"},wC=o("div",{class:"absolute top-[8px]"},"v16.3",-1),xC=o("div",{class:"absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"},null,-1),kC=[wC,xC],CC={class:"w-1/2 text-center"},SC=o("h3",null,"新生命周期",-1),EC=o("img",{src:dC,class:"mt-4"},null,-1),$C=[SC,EC],TC=o("p",null,[o("a",{href:"https://juejin.cn/post/6914112105964634119",target:"_blank"},[o("a",{href:"https://juejin.cn/post/6914112105964634119",target:"_blank",rel:"noopener"},"https://juejin.cn/post/6914112105964634119")])],-1),AC={__name:"12",setup(e){const t={clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md"};return Y(re),(n,s)=>{const r=Cr("click");return k(),se(Ye,Je(De(t)),{default:ue(()=>[fC,hC,mC,o("div",yC,[$n((k(),H("div",gC,_C)),[[r,2]]),$n((k(),H("div",bC,kC)),[[r,1]]),$n((k(),H("div",CC,$C)),[[r,2]])]),TC]),_:1},16)}}},RC=le(AC,[["__file","/@slidev/slides/12.md"]]),OC=we({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return z(wf,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),PC=o("h1",null,"Hooks",-1),IC=o("p",null,"也称钩子，在 React 中 Hooks 分为两类：",-1),MC=o("p",null,[g("React 提供了很多内置 Hooks，主要有"),o("strong",null,"六种"),g("：")],-1),LC=o("ul",null,[o("li",null,[g("(2) "),o("a",{href:"/#/16"},"状态 Hooks"),g(" - "),o("code",null,"useState"),g("；")]),o("li",null,[g("(1) "),o("a",{href:"/#/17"},"上下文 Hooks"),g(" - "),o("code",null,"useContext"),g("；")]),o("li",null,[g("(2) "),o("a",{href:"/#/18"},"引用 Hooks"),g(" - "),o("code",null,"useRef"),g("；")]),o("li",null,[g("(3) "),o("a",{href:"/#/19"},"副作用 Hooks"),g(" - "),o("code",null,"useEffect"),g("；")]),o("li",null,[g("(4) "),o("a",{href:"/#/20"},"性能 Hooks"),g(" - "),o("code",null,"useMemo"),g("；")]),o("li",null,[g("(3) "),o("a",{href:"/#/21"},"其他 Hooks"),g(" - "),o("code",null,"useId"),g("；")])],-1),HC=o("p",null,"自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。",-1),jC={__name:"13",setup(e){const t={clicks:2,srcSequence:"./pages/lesson_1/index.md,./hooks.md"},n=Y(re);return(s,r)=>{const l=OC;return k(),se(Ye,Je(De(t)),{default:ue(()=>[PC,IC,o("ul",null,[o("li",null,[o("span",{class:Ae({"text-gradient-red":C(n).nav.clicks===1})},"内置 Built-in hooks；",2)]),o("li",null,[o("span",{class:Ae({"text-gradient-red":C(n).nav.clicks===2})},"自定义 Custom hooks",2),g("；")])]),z(l,{at:"0"},{default:ue(()=>[MC,LC]),_:1}),z(l,{at:"1"},{default:ue(()=>[HC]),_:1})]),_:1},16)}}},BC=le(jC,[["__file","/@slidev/slides/13.md"]]),NC=o("h1",null,"Ant Design",-1),DC=o("p",null,[o("a",{href:"https://ant.design/docs/spec/introduce-cn",target:"_blank",rel:"noopener"},"https://ant.design/docs/spec/introduce-cn")],-1),VC={__name:"14",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./ant-design.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[NC,DC]),_:1},16))}},UC=le(VC,[["__file","/@slidev/slides/14.md"]]),JC=o("h1",null,"UmiJS",-1),qC=o("p",null,[o("a",{href:"https://umijs.org/docs/introduce/introduce",target:"_blank",rel:"noopener"},"https://umijs.org/docs/introduce/introduce")],-1),WC={__name:"15",setup(e){const t={clicks:2,srcSequence:"./pages/lesson_1/index.md,./umijs.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[JC,qC]),_:1},16))}},XC=le(WC,[["__file","/@slidev/slides/15.md"]]),zC=o("h1",null,"Homework",-1),KC={__name:"16",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./homework.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[zC]),_:1},16))}},YC=le(KC,[["__file","/@slidev/slides/16.md"]]),ZC=o("h1",null,"State Hooks",-1),GC={__name:"17",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[ZC]),_:1},16))}},QC=le(GC,[["__file","/@slidev/slides/17.md"]]),eS=o("h1",null,"Context Hooks",-1),tS={__name:"18",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[eS]),_:1},16))}},nS=le(tS,[["__file","/@slidev/slides/18.md"]]),sS=o("h1",null,"Ref Hooks",-1),oS={__name:"19",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[sS]),_:1},16))}},rS=le(oS,[["__file","/@slidev/slides/19.md"]]),lS=o("h1",null,"Effect Hooks",-1),iS={__name:"20",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[lS]),_:1},16))}},aS=le(iS,[["__file","/@slidev/slides/20.md"]]),cS=o("h1",null,"Performance Hooks",-1),uS={__name:"21",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[cS]),_:1},16))}},pS=le(uS,[["__file","/@slidev/slides/21.md"]]),dS=o("h1",null,"Other Hooks",-1),fS={__name:"22",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return Y(re),(n,s)=>(k(),se(Ye,Je(De(t)),{default:ue(()=>[dS]),_:1},16))}},hS=le(fS,[["__file","/@slidev/slides/22.md"]]),mS=[{path:"1",name:"page-1",component:jw,meta:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md",slide:{raw:null,title:'<mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>',level:1,content:`# <mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>

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
routerMode: 'hash'
lineNumbers: false
highlighter: shiki
---
`,title:"React Shared",level:1,content:"",frontmatter:{title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki"},index:0,start:0,end:13},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/welcome-to-react.md",noteHTML:`<p>大家好，我是王思远，目前是 RKS 项目的前端开发，很高兴能在这儿给大家分享关于 react 相关的培训。</p>
<p>首先，先和大家介绍关于我们这次的培训的目的和计划</p>
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:xx,meta:{layout:"center",hideInToc:!0,title:"Lesson 1",srcSequence:"./pages/lesson_1/index.md",slide:{raw:null,title:"Lesson 1",level:1,content:`# Lesson 1

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

# Lesson One`,title:"Lesson One",level:1,content:"# Lesson One",frontmatter:{},index:1,start:13,end:18},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:jx,meta:{title:"Schedule",srcSequence:"./pages/lesson_1/index.md,./schedule.md",slide:{raw:`---
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

课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；`,frontmatter:{title:"Schedule"},index:0,start:0,end:25},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/schedule.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:nk,meta:{transition:"slide-up",title:"Thinking",srcSequence:"./pages/lesson_1/index.md,./warm-up.md",slide:{raw:`---
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
`,id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Fk,meta:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md",slide:{raw:`---
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

（click）右边列出来是目前官方推荐和社区十分活跃的比较成熟的应用级脚手架，大家有兴趣的可以后续看看`,index:4,start:0,end:79,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-react.md",raw:`---
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
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:kk,meta:{title:"What is JSX?",srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
title: What is JSX?
---

# What is JSX?

给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？

<!-- 对比：不用 JSX 怎么处理，用 JSX 怎么写 -->
<iframe src="https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark" class="w-full h-[calc(100%+5px)]" />

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
<iframe src="https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark" class="w-full h-[calc(100%+5px)]" />`,frontmatter:{title:"What is JSX?",srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},note:`React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

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
<iframe src="https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark" class="w-full h-[calc(100%+5px)]" />

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
<iframe src="https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark" class="w-full h-[calc(100%+5px)]" />`,frontmatter:{title:"What is JSX?"},note:`React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？

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
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Rk,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Jk,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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
<\/script>`,frontmatter:{hideInToc:!0},index:2,start:96,end:133},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Kk,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%+5px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。

-->`,title:"Heros with JSX",level:1,content:`# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%+5px)]" />`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},note:`有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。`,index:8,start:133,end:152,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%+5px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。

-->`,title:"Heros with JSX",level:1,content:`# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%+5px)]" />`,frontmatter:{hideInToc:!0},note:`有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。`,index:3,start:133,end:152},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:`<p>有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。</p>
<p>我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx =&gt; App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。</p>
<p>和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。</p>
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:lC,meta:{title:"Components",clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
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
`,id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:uC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
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

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。`,index:10,start:78,end:118,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
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
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:RC,meta:{title:"Lifecycle",clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md",slide:{raw:`---
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

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount`,index:11,start:0,end:57,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/lifecycle.md",raw:`---
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
`,id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:BC,meta:{title:"Hooks",clicks:2,srcSequence:"./pages/lesson_1/index.md,./hooks.md",slide:{raw:`---
title: Hooks
clicks: 2
---

# Hooks

也称钩子，在 React 中 Hooks 分为两类：

- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >内置 Built-in hooks；</span>
- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义 Custom hooks</span>；

<v-click at="0">

React 提供了很多内置 Hooks，主要有**六种**：

- (2) <a href="/#/16">状态 Hooks</a> - \`useState\`；
- (1) <a href="/#/17">上下文 Hooks</a> - \`useContext\`；
- (2) <a href="/#/18">引用 Hooks</a> - \`useRef\`；
- (3) <a href="/#/19">副作用 Hooks</a> - \`useEffect\`；
- (4) <a href="/#/20">性能 Hooks</a> - \`useMemo\`；
- (3) <a href="/#/21">其他 Hooks</a> - \`useId\`；

</v-click>

<v-click at="1">

自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。

</v-click>
`,title:"Hooks",level:1,content:`# Hooks

也称钩子，在 React 中 Hooks 分为两类：

- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >内置 Built-in hooks；</span>
- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义 Custom hooks</span>；

<v-click at="0">

React 提供了很多内置 Hooks，主要有**六种**：

- (2) <a href="/#/16">状态 Hooks</a> - \`useState\`；
- (1) <a href="/#/17">上下文 Hooks</a> - \`useContext\`；
- (2) <a href="/#/18">引用 Hooks</a> - \`useRef\`；
- (3) <a href="/#/19">副作用 Hooks</a> - \`useEffect\`；
- (4) <a href="/#/20">性能 Hooks</a> - \`useMemo\`；
- (3) <a href="/#/21">其他 Hooks</a> - \`useId\`；

</v-click>

<v-click at="1">

自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。

</v-click>`,frontmatter:{title:"Hooks",clicks:2,srcSequence:"./pages/lesson_1/index.md,./hooks.md"},index:12,start:0,end:31,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",raw:`---
title: Hooks
clicks: 2
---

# Hooks

也称钩子，在 React 中 Hooks 分为两类：

- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >内置 Built-in hooks；</span>
- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义 Custom hooks</span>；

<v-click at="0">

React 提供了很多内置 Hooks，主要有**六种**：

- (2) <a href="/#/16">状态 Hooks</a> - \`useState\`；
- (1) <a href="/#/17">上下文 Hooks</a> - \`useContext\`；
- (2) <a href="/#/18">引用 Hooks</a> - \`useRef\`；
- (3) <a href="/#/19">副作用 Hooks</a> - \`useEffect\`；
- (4) <a href="/#/20">性能 Hooks</a> - \`useMemo\`；
- (3) <a href="/#/21">其他 Hooks</a> - \`useId\`；

</v-click>

<v-click at="1">

自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。

</v-click>
`,title:"Hooks",level:1,content:`# Hooks

也称钩子，在 React 中 Hooks 分为两类：

- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >内置 Built-in hooks；</span>
- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义 Custom hooks</span>；

<v-click at="0">

React 提供了很多内置 Hooks，主要有**六种**：

- (2) <a href="/#/16">状态 Hooks</a> - \`useState\`；
- (1) <a href="/#/17">上下文 Hooks</a> - \`useContext\`；
- (2) <a href="/#/18">引用 Hooks</a> - \`useRef\`；
- (3) <a href="/#/19">副作用 Hooks</a> - \`useEffect\`；
- (4) <a href="/#/20">性能 Hooks</a> - \`useMemo\`；
- (3) <a href="/#/21">其他 Hooks</a> - \`useId\`；

</v-click>

<v-click at="1">

自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。

</v-click>`,frontmatter:{title:"Hooks",clicks:2},index:0,start:0,end:31},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:UC,meta:{title:"Ant Design",srcSequence:"./pages/lesson_1/index.md,./ant-design.md",slide:{raw:`---
title: Ant Design
---

# Ant Design

https://ant.design/docs/spec/introduce-cn`,title:"Ant Design",level:1,content:`# Ant Design

https://ant.design/docs/spec/introduce-cn`,frontmatter:{title:"Ant Design",srcSequence:"./pages/lesson_1/index.md,./ant-design.md"},index:13,start:0,end:7,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",raw:`---
title: Ant Design
---

# Ant Design

https://ant.design/docs/spec/introduce-cn`,title:"Ant Design",level:1,content:`# Ant Design

https://ant.design/docs/spec/introduce-cn`,frontmatter:{title:"Ant Design"},index:0,start:0,end:7},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:XC,meta:{title:"UmiJS",clicks:2,srcSequence:"./pages/lesson_1/index.md,./umijs.md",slide:{raw:`---
title: UmiJS
clicks: 2
---

# UmiJS

https://umijs.org/docs/introduce/introduce`,title:"UmiJS",level:1,content:`# UmiJS

https://umijs.org/docs/introduce/introduce`,frontmatter:{title:"UmiJS",clicks:2,srcSequence:"./pages/lesson_1/index.md,./umijs.md"},index:14,start:0,end:8,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",raw:`---
title: UmiJS
clicks: 2
---

# UmiJS

https://umijs.org/docs/introduce/introduce`,title:"UmiJS",level:1,content:`# UmiJS

https://umijs.org/docs/introduce/introduce`,frontmatter:{title:"UmiJS",clicks:2},index:0,start:0,end:8},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:YC,meta:{title:"Homework",srcSequence:"./pages/lesson_1/index.md,./homework.md",slide:{raw:`---
title: Homework
---

# Homework`,title:"Homework",level:1,content:"# Homework",frontmatter:{title:"Homework",srcSequence:"./pages/lesson_1/index.md,./homework.md"},index:15,start:0,end:5,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/homework.md",raw:`---
title: Homework
---

# Homework`,title:"Homework",level:1,content:"# Homework",frontmatter:{title:"Homework"},index:0,start:0,end:5},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/homework.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:QC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# State Hooks
`,title:"State Hooks",level:1,content:"# State Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:16,start:70,end:76,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# State Hooks
`,title:"State Hooks",level:1,content:"# State Hooks",frontmatter:{hideInToc:!0},index:11,start:70,end:76},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:nS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# Context Hooks
`,title:"Context Hooks",level:1,content:"# Context Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:17,start:76,end:82,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# Context Hooks
`,title:"Context Hooks",level:1,content:"# Context Hooks",frontmatter:{hideInToc:!0},index:12,start:76,end:82},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:rS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# Ref Hooks
`,title:"Ref Hooks",level:1,content:"# Ref Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:18,start:82,end:88,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# Ref Hooks
`,title:"Ref Hooks",level:1,content:"# Ref Hooks",frontmatter:{hideInToc:!0},index:13,start:82,end:88},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:aS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# Effect Hooks
`,title:"Effect Hooks",level:1,content:"# Effect Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:19,start:88,end:94,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# Effect Hooks
`,title:"Effect Hooks",level:1,content:"# Effect Hooks",frontmatter:{hideInToc:!0},index:14,start:88,end:94},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:pS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# Performance Hooks
`,title:"Performance Hooks",level:1,content:"# Performance Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:20,start:94,end:100,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# Performance Hooks
`,title:"Performance Hooks",level:1,content:"# Performance Hooks",frontmatter:{hideInToc:!0},index:15,start:94,end:100},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:hS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# Other Hooks`,title:"Other Hooks",level:1,content:"# Other Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:21,start:100,end:105,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# Other Hooks`,title:"Other Hooks",level:1,content:"# Other Hooks",frontmatter:{hideInToc:!0},index:16,start:100,end:105},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",component:Cw,meta:{layout:"end"}}],Xe=mS,so=[{name:"play",path:"/",component:K8,children:[...Xe]},{name:"print",path:"/print",component:ww},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!no.remote||no.remote===t.query.password)return!0;if(no.remote&&t.query.password===void 0){const n=prompt("Enter password");if(no.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};so.push({path:"/presenter/print",component:()=>fr(()=>import("./PresenterPrint-46bcfc23.js"),["assets/PresenterPrint-46bcfc23.js","assets/NoteDisplay-8e6c42ca.js"])}),so.push({name:"notes",path:"/notes",component:()=>fr(()=>import("./NotesView-32f5fec0.js"),["assets/NotesView-32f5fec0.js","assets/NoteDisplay-8e6c42ca.js"]),beforeEnter:e}),so.push({name:"presenter",path:"/presenter/:no",component:()=>fr(()=>import("./Presenter-4198abf8.js"),["assets/Presenter-4198abf8.js","assets/NoteDisplay-8e6c42ca.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),so.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const mt=R_({history:A1("/react-shared-ppt/"),routes:so});function yS(e,t,{mode:n="replace"}={}){return T({get(){const s=mt.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){et(()=>{mt[C(n)]({query:{...mt.currentRoute.value.query,[e]:s}})})}})}const xf=q(0);et(()=>{mt.afterEach(async()=>{await et(),xf.value+=1})});const kf=q(0),It=T(()=>mt.currentRoute.value),un=T(()=>It.value.query.print!==void 0),gS=T(()=>It.value.query.print==="clicks"),Dn=T(()=>It.value.query.embedded!==void 0),xt=T(()=>It.value.path.startsWith("/presenter")),vS=T(()=>It.value.path.startsWith("/notes")),fo=T(()=>un.value&&!gS.value),ki=T(()=>It.value.query.password),FS=T(()=>!xt.value&&(!Ee.remote||ki.value===Ee.remote)),bu=yS("clicks","0"),Cf=T(()=>Xe.length-1),_S=T(()=>It.value.path),Ue=T(()=>parseInt(_S.value.split(/\//g).slice(-1)[0])||1);T(()=>tl(Ue.value));const ct=T(()=>Xe.find(e=>e.path===`${Ue.value}`));T(()=>{var e,t,n;return(n=(t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});T(()=>{var e,t;return((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ue.value===1?"cover":"default")});const El=T(()=>Xe.find(e=>e.path===`${Math.min(Xe.length,Ue.value+1)}`)),bS=T(()=>Xe.find(e=>e.path===`${Math.max(1,Ue.value-1)}`)),wS=T(()=>{var e,t;return xf.value,((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Rt=T({get(){if(fo.value)return 99999;let e=+(bu.value||0);return isNaN(e)&&(e=0),e},set(e){bu.value=e.toString()}}),Ir=T(()=>{var e,t;return+(((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.clicks)??wS.value.length)}),xS=T(()=>Ue.value<Xe.length-1||Rt.value<Ir.value),kS=T(()=>Ue.value>1||Rt.value>0),CS=T(()=>Xe.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(va(e,t),e),[])),SS=T(()=>Fa(CS.value,ct.value));T(()=>_a(SS.value));const ES=T(()=>OS(kf.value,ct.value,bS.value));ge(ct,(e,t)=>{kf.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Rn(){Ir.value<=Rt.value?Oo():Rt.value+=1}async function On(){Rt.value<=0?await Po():Rt.value-=1}function tl(e){return xt.value?`/presenter/${e}`:`/${e}`}function Oo(){const e=Math.min(Xe.length,Ue.value+1);return Ls(e)}async function Po(e=!0){const t=Math.max(1,Ue.value-1);await Ls(t),e&&Ir.value&&mt.replace({query:{...It.value.query,clicks:Ir.value}})}function Ls(e,t){return mt.push({path:tl(e),query:{...It.value.query,clicks:t}})}function $S(e){const t=q(0),{direction:n,distanceX:s,distanceY:r}=XF(e,{onSwipeStart(l){l.pointerType==="touch"&&(To.value||(t.value=ci()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||To.value)return;const i=Math.abs(s.value),a=Math.abs(r.value);i/window.innerWidth>.3||i>100?n.value===an.LEFT?Rn():On():(a/window.innerHeight>.4||a>200)&&(n.value===an.DOWN?Po():Oo())}})}async function Ci(){const{saveAs:e}=await fr(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(Ed(Ee.download)?Ee.download:Ee.exportFilename?`${Ee.exportFilename}.pdf`:"/react-shared-ppt/slidev-exported.pdf",`${Ee.title}.pdf`)}async function TS(e){var t,n;if(e==null){const s=(n=(t=ct.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function va(e,t,n=1){var r,l,i,a,c;const s=(l=(r=t.meta)==null?void 0:r.slide)==null?void 0:l.level;s&&s>n&&e.length>0?va(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((i=t.meta)!=null&&i.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function Fa(e,t,n=!1,s){return e.map(r=>{const l={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return l.children.length>0&&(l.children=Fa(l.children,t,l.active||l.hasActiveParent,l)),s&&(l.active||l.activeParent)&&(s.activeParent=!0),l})}function _a(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:_a(n.children,t+1)}))}const AS={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function RS(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:AS[e.name]||e.name;if(n.includes("|")){const[s,r]=n.split("|").map(l=>l.trim());n=t?r:s}if(n)return{...e,name:n}}function OS(e,t,n){var r,l;let s=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return s||(s=Ee.transition),RS(s,e<0)}function PS(){const e=Ee.titleTemplate.replace("%s",Ee.title||"Slidev");ra({title:e}),Cv(Ee.htmlAttrs),Hv(`${e} - shared`),Dv(`${e} - drawings`);const t=`${location.origin}_${Rv()}`;function n(){vS.value||!xt.value&&!Av.includes(location.host.split(":")[0])||(xt.value?(Ws("page",+Ue.value),Ws("clicks",Rt.value)):(Ws("viewerPage",+Ue.value),Ws("viewerClicks",Rt.value)),Ws("lastUpdate",{id:t,type:xt.value?"presenter":"viewer",time:new Date().getTime()}))}mt.afterEach(n),ge(Rt,n),jv(s=>{var l;mt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=s.lastUpdate)==null?void 0:l.type)==="presenter"&&(+s.page!=+Ue.value||+Rt.value!=+s.clicks)&&mt.replace({path:tl(s.page),query:{...mt.currentRoute.value.query,clicks:s.clicks||0}})})}const IS=we({__name:"App",setup(e){return Y(re),PS(),(t,n)=>{const s=Mn("RouterView"),r=Mn("StarportCarrier");return k(),H(Se,null,[z(s),z(r)],64)}}}),MS=le(IS,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/App.vue"]]);function $l(e){return e!==null&&typeof e=="object"}function Si(e,t,n=".",s){if(!$l(t))return Si(e,{},n,s);const r=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const i=e[l];i!=null&&(s&&s(r,l,i,n)||(Array.isArray(i)&&Array.isArray(r[l])?r[l]=[...i,...r[l]]:$l(i)&&$l(r[l])?r[l]=Si(i,r[l],(n?`${n}.`:"")+l.toString(),s):r[l]=i))}return r}function LS(e){return(...t)=>t.reduce((n,s)=>Si(n,s,"",e),{})}const HS=LS(),Sf=1/60*1e3,jS=typeof performance<"u"?()=>performance.now():()=>Date.now(),Ef=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(jS()),Sf);function BS(e){let t=[],n=[],s=0,r=!1,l=!1;const i=new WeakSet,a={schedule:(c,u=!1,p=!1)=>{const d=p&&r,f=d?t:n;return u&&i.add(c),f.indexOf(c)===-1&&(f.push(c),d&&r&&(s=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),i.delete(c)},process:c=>{if(r){l=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let u=0;u<s;u++){const p=t[u];p(c),i.has(p)&&(a.schedule(p),e())}r=!1,l&&(l=!1,a.process(c))}};return a}const NS=40;let Ei=!0,Io=!1,$i=!1;const Os={delta:0,timestamp:0},qo=["read","update","preRender","render","postRender"],nl=qo.reduce((e,t)=>(e[t]=BS(()=>Io=!0),e),{}),Ti=qo.reduce((e,t)=>{const n=nl[t];return e[t]=(s,r=!1,l=!1)=>(Io||US(),n.schedule(s,r,l)),e},{}),DS=qo.reduce((e,t)=>(e[t]=nl[t].cancel,e),{});qo.reduce((e,t)=>(e[t]=()=>nl[t].process(Os),e),{});const VS=e=>nl[e].process(Os),$f=e=>{Io=!1,Os.delta=Ei?Sf:Math.max(Math.min(e-Os.timestamp,NS),1),Os.timestamp=e,$i=!0,qo.forEach(VS),$i=!1,Io&&(Ei=!1,Ef($f))},US=()=>{Io=!0,Ei=!0,$i||Ef($f)},Tf=()=>Os;function Af(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}var ba=function(){},Mo=function(){};ba=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Mo=function(e,t){if(!e)throw new Error(t)};const Ai=(e,t,n)=>Math.min(Math.max(n,e),t),Tl=.001,JS=.01,wu=10,qS=.05,WS=1;function XS({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let r,l;ba(e<=wu*1e3,"Spring duration must be 10 seconds or less");let i=1-t;i=Ai(qS,WS,i),e=Ai(JS,wu,e/1e3),i<1?(r=u=>{const p=u*i,d=p*e,f=p-n,h=Ri(u,i),m=Math.exp(-d);return Tl-f/h*m},l=u=>{const d=u*i*e,f=d*n+n,h=Math.pow(i,2)*Math.pow(u,2)*e,m=Math.exp(-d),v=Ri(Math.pow(u,2),i);return(-r(u)+Tl>0?-1:1)*((f-h)*m)/v}):(r=u=>{const p=Math.exp(-u*e),d=(u-n)*e+1;return-Tl+p*d},l=u=>{const p=Math.exp(-u*e),d=(n-u)*(e*e);return p*d});const a=5/e,c=KS(r,l,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*s;return{stiffness:u,damping:i*2*Math.sqrt(s*u),duration:e}}}const zS=12;function KS(e,t,n){let s=n;for(let r=1;r<zS;r++)s=s-e(s)/t(s);return s}function Ri(e,t){return e*Math.sqrt(1-t*t)}const YS=["duration","bounce"],ZS=["stiffness","damping","mass"];function xu(e,t){return t.some(n=>e[n]!==void 0)}function GS(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!xu(e,ZS)&&xu(e,YS)){const n=XS(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function wa(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:r}=e,l=Af(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:p,duration:d,isResolvedFromDuration:f}=GS(l),h=ku,m=ku;function v(){const F=p?-(p/1e3):0,x=n-t,b=c/(2*Math.sqrt(a*u)),w=Math.sqrt(a/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),b<1){const S=Ri(w,b);h=R=>{const M=Math.exp(-b*w*R);return n-M*((F+b*w*x)/S*Math.sin(S*R)+x*Math.cos(S*R))},m=R=>{const M=Math.exp(-b*w*R);return b*w*M*(Math.sin(S*R)*(F+b*w*x)/S+x*Math.cos(S*R))-M*(Math.cos(S*R)*(F+b*w*x)-S*x*Math.sin(S*R))}}else if(b===1)h=S=>n-Math.exp(-w*S)*(x+(F+w*x)*S);else{const S=w*Math.sqrt(b*b-1);h=R=>{const M=Math.exp(-b*w*R),V=Math.min(S*R,300);return n-M*((F+b*w*x)*Math.sinh(V)+S*x*Math.cosh(V))/S}}}return v(),{next:F=>{const x=h(F);if(f)i.done=F>=d;else{const b=m(F)*1e3,w=Math.abs(b)<=s,S=Math.abs(n-x)<=r;i.done=w&&S}return i.value=i.done?n:x,i},flipTarget:()=>{p=-p,[t,n]=[n,t],v()}}}wa.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ku=e=>0,Rf=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},xa=(e,t,n)=>-n*e+n*t+e,Of=(e,t)=>n=>Math.max(Math.min(n,t),e),ho=e=>e%1?Number(e.toFixed(5)):e,Lo=/(-)?([\d]*\.?[\d])+/g,Oi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,QS=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wo(e){return typeof e=="string"}const Xo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},mo=Object.assign(Object.assign({},Xo),{transform:Of(0,1)}),lr=Object.assign(Object.assign({},Xo),{default:1}),ka=e=>({test:t=>Wo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Vn=ka("deg"),yo=ka("%"),me=ka("px"),Cu=Object.assign(Object.assign({},yo),{parse:e=>yo.parse(e)/100,transform:e=>yo.transform(e*100)}),Ca=(e,t)=>n=>!!(Wo(n)&&QS.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Pf=(e,t,n)=>s=>{if(!Wo(s))return s;const[r,l,i,a]=s.match(Lo);return{[e]:parseFloat(r),[t]:parseFloat(l),[n]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},Gn={test:Ca("hsl","hue"),parse:Pf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+yo.transform(ho(t))+", "+yo.transform(ho(n))+", "+ho(mo.transform(s))+")"},eE=Of(0,255),Al=Object.assign(Object.assign({},Xo),{transform:e=>Math.round(eE(e))}),Cn={test:Ca("rgb","red"),parse:Pf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Al.transform(e)+", "+Al.transform(t)+", "+Al.transform(n)+", "+ho(mo.transform(s))+")"};function tE(e){let t="",n="",s="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Pi={test:Ca("#"),parse:tE,transform:Cn.transform},ft={test:e=>Cn.test(e)||Pi.test(e)||Gn.test(e),parse:e=>Cn.test(e)?Cn.parse(e):Gn.test(e)?Gn.parse(e):Pi.parse(e),transform:e=>Wo(e)?e:e.hasOwnProperty("red")?Cn.transform(e):Gn.transform(e)},If="${c}",Mf="${n}";function nE(e){var t,n,s,r;return isNaN(e)&&Wo(e)&&((n=(t=e.match(Lo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(s=e.match(Oi))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function Lf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(Oi);s&&(n=s.length,e=e.replace(Oi,If),t.push(...s.map(ft.parse)));const r=e.match(Lo);return r&&(e=e.replace(Lo,Mf),t.push(...r.map(Xo.parse))),{values:t,numColors:n,tokenised:e}}function Hf(e){return Lf(e).values}function jf(e){const{values:t,numColors:n,tokenised:s}=Lf(e),r=t.length;return l=>{let i=s;for(let a=0;a<r;a++)i=i.replace(a<n?If:Mf,a<n?ft.transform(l[a]):ho(l[a]));return i}}const sE=e=>typeof e=="number"?0:e;function oE(e){const t=Hf(e);return jf(e)(t.map(sE))}const zo={test:nE,parse:Hf,createTransformer:jf,getAnimatableNone:oE},rE=new Set(["brightness","contrast","saturate","opacity"]);function lE(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Lo)||[];if(!s)return e;const r=n.replace(s,"");let l=rE.has(t)?1:0;return s!==n&&(l*=100),t+"("+l+r+")"}const iE=/([a-z-]*)\(.*?\)/g,Ii=Object.assign(Object.assign({},zo),{getAnimatableNone:e=>{const t=e.match(iE);return t?t.map(lE).join(" "):e}});function Rl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Su({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,l=0,i=0;if(!t)r=l=i=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;r=Rl(c,a,e+1/3),l=Rl(c,a,e),i=Rl(c,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(i*255),alpha:s}}const aE=(e,t,n)=>{const s=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-s)+s))},cE=[Pi,Cn,Gn],Eu=e=>cE.find(t=>t.test(e)),$u=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Bf=(e,t)=>{let n=Eu(e),s=Eu(t);Mo(!!n,$u(e)),Mo(!!s,$u(t));let r=n.parse(e),l=s.parse(t);n===Gn&&(r=Su(r),n=Cn),s===Gn&&(l=Su(l),s=Cn);const i=Object.assign({},r);return a=>{for(const c in i)c!=="alpha"&&(i[c]=aE(r[c],l[c],a));return i.alpha=xa(r.alpha,l.alpha,a),n.transform(i)}},uE=e=>typeof e=="number",pE=(e,t)=>n=>t(e(n)),Nf=(...e)=>e.reduce(pE);function Df(e,t){return uE(e)?n=>xa(e,t,n):ft.test(e)?Bf(e,t):Uf(e,t)}const Vf=(e,t)=>{const n=[...e],s=n.length,r=e.map((l,i)=>Df(l,t[i]));return l=>{for(let i=0;i<s;i++)n[i]=r[i](l);return n}},dE=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=Df(e[r],t[r]));return r=>{for(const l in s)n[l]=s[l](r);return n}};function Tu(e){const t=zo.parse(e),n=t.length;let s=0,r=0,l=0;for(let i=0;i<n;i++)s||typeof t[i]=="number"?s++:t[i].hue!==void 0?l++:r++;return{parsed:t,numNumbers:s,numRGB:r,numHSL:l}}const Uf=(e,t)=>{const n=zo.createTransformer(t),s=Tu(e),r=Tu(t);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?Nf(Vf(s.parsed,r.parsed),n):(ba(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?t:e}`)},fE=(e,t)=>n=>xa(e,t,n);function hE(e){if(typeof e=="number")return fE;if(typeof e=="string")return ft.test(e)?Bf:Uf;if(Array.isArray(e))return Vf;if(typeof e=="object")return dE}function mE(e,t,n){const s=[],r=n||hE(e[0]),l=e.length-1;for(let i=0;i<l;i++){let a=r(e[i],e[i+1]);if(t){const c=Array.isArray(t)?t[i]:t;a=Nf(c,a)}s.push(a)}return s}function yE([e,t],[n]){return s=>n(Rf(e,t,s))}function gE(e,t){const n=e.length,s=n-1;return r=>{let l=0,i=!1;if(r<=e[0]?i=!0:r>=e[s]&&(l=s-1,i=!0),!i){let c=1;for(;c<n&&!(e[c]>r||c===s);c++);l=c-1}const a=Rf(e[l],e[l+1],r);return t[l](a)}}function Jf(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const l=e.length;Mo(l===t.length,"Both input and output ranges must be the same length"),Mo(!s||!Array.isArray(s)||s.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=mE(t,s,r),a=l===2?yE(e,i):gE(e,i);return n?c=>a(Ai(e[0],e[l-1],c)):a}const sl=e=>t=>1-e(1-t),Sa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,vE=e=>t=>Math.pow(t,e),qf=e=>t=>t*t*((e+1)*t-e),FE=e=>{const t=qf(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Wf=1.525,_E=4/11,bE=8/11,wE=9/10,Xf=e=>e,Ea=vE(2),xE=sl(Ea),zf=Sa(Ea),Kf=e=>1-Math.sin(Math.acos(e)),Yf=sl(Kf),kE=Sa(Yf),$a=qf(Wf),CE=sl($a),SE=Sa($a),EE=FE(Wf),$E=4356/361,TE=35442/1805,AE=16061/1805,Mr=e=>{if(e===1||e===0)return e;const t=e*e;return e<_E?7.5625*t:e<bE?9.075*t-9.9*e+3.4:e<wE?$E*t-TE*e+AE:10.8*e*e-20.52*e+10.72},RE=sl(Mr),OE=e=>e<.5?.5*(1-Mr(1-e*2)):.5*Mr(e*2-1)+.5;function PE(e,t){return e.map(()=>t||zf).splice(0,e.length-1)}function IE(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function ME(e,t){return e.map(n=>n*t)}function gr({from:e=0,to:t=1,ease:n,offset:s,duration:r=300}){const l={done:!1,value:e},i=Array.isArray(t)?t:[e,t],a=ME(s&&s.length===i.length?s:IE(i),r);function c(){return Jf(a,i,{ease:Array.isArray(n)?n:PE(i,n)})}let u=c();return{next:p=>(l.value=u(p),l.done=p>=r,l),flipTarget:()=>{i.reverse(),u=c()}}}function LE({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:l}){const i={done:!1,value:t};let a=n*e;const c=t+a,u=l===void 0?c:l(c);return u!==c&&(a=u-t),{next:p=>{const d=-a*Math.exp(-p/s);return i.done=!(d>r||d<-r),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const Au={keyframes:gr,spring:wa,decay:LE};function HE(e){if(Array.isArray(e.to))return gr;if(Au[e.type])return Au[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?gr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?wa:gr}function Zf(e,t,n=0){return e-t-n}function jE(e,t,n=0,s=!0){return s?Zf(t+-e,t,n):t-(e-t)+n}function BE(e,t,n,s){return s?e>=t+n:e<=-n}const NE=e=>{const t=({delta:n})=>e(n);return{start:()=>Ti.update(t,!0),stop:()=>DS.update(t)}};function Gf(e){var t,n,{from:s,autoplay:r=!0,driver:l=NE,elapsed:i=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:d,onComplete:f,onRepeat:h,onUpdate:m}=e,v=Af(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:F}=v,x,b=0,w=v.duration,S,R=!1,M=!0,V;const A=HE(v);!((n=(t=A).needsInterpolation)===null||n===void 0)&&n.call(t,s,F)&&(V=Jf([0,100],[s,F],{clamp:!1}),s=0,F=100);const N=A(Object.assign(Object.assign({},v),{from:s,to:F}));function Z(){b++,c==="reverse"?(M=b%2===0,i=jE(i,w,u,M)):(i=Zf(i,w,u),c==="mirror"&&N.flipTarget()),R=!1,h&&h()}function ie(){x.stop(),f&&f()}function W(Oe){if(M||(Oe=-Oe),i+=Oe,!R){const qe=N.next(Math.max(0,i));S=qe.value,V&&(S=V(S)),R=M?qe.done:i<=0}m==null||m(S),R&&(b===0&&(w??(w=i)),b<a?BE(i,w,u,M)&&Z():ie())}function ae(){p==null||p(),x=l(W),x.start()}return r&&ae(),{stop:()=>{d==null||d(),x.stop()}}}function Qf(e,t){return t?e*(1e3/t):0}function DE({from:e=0,velocity:t=0,min:n,max:s,power:r=.8,timeConstant:l=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:d,onComplete:f,onStop:h}){let m;function v(w){return n!==void 0&&w<n||s!==void 0&&w>s}function F(w){return n===void 0?s:s===void 0||Math.abs(n-w)<Math.abs(s-w)?n:s}function x(w){m==null||m.stop(),m=Gf(Object.assign(Object.assign({},w),{driver:p,onUpdate:S=>{var R;d==null||d(S),(R=w.onUpdate)===null||R===void 0||R.call(w,S)},onComplete:f,onStop:h}))}function b(w){x(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:c},w))}if(v(e))b({from:e,velocity:t,to:F(e)});else{let w=r*t+e;typeof u<"u"&&(w=u(w));const S=F(w),R=S===n?-1:1;let M,V;const A=N=>{M=V,V=N,t=Qf(N-M,Tf().delta),(R===1&&N>S||R===-1&&N<S)&&b({from:N,to:S,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:l,power:r,restDelta:c,modifyTarget:u,onUpdate:v(w)?A:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const eh=(e,t)=>1-3*t+3*e,th=(e,t)=>3*t-6*e,nh=e=>3*e,Lr=(e,t,n)=>((eh(t,n)*e+th(t,n))*e+nh(t))*e,sh=(e,t,n)=>3*eh(t,n)*e*e+2*th(t,n)*e+nh(t),VE=1e-7,UE=10;function JE(e,t,n,s,r){let l,i,a=0;do i=t+(n-t)/2,l=Lr(i,s,r)-e,l>0?n=i:t=i;while(Math.abs(l)>VE&&++a<UE);return i}const qE=8,WE=.001;function XE(e,t,n,s){for(let r=0;r<qE;++r){const l=sh(t,n,s);if(l===0)return t;const i=Lr(t,n,s)-e;t-=i/l}return t}const vr=11,ir=1/(vr-1);function zE(e,t,n,s){if(e===t&&n===s)return Xf;const r=new Float32Array(vr);for(let i=0;i<vr;++i)r[i]=Lr(i*ir,e,n);function l(i){let a=0,c=1;const u=vr-1;for(;c!==u&&r[c]<=i;++c)a+=ir;--c;const p=(i-r[c])/(r[c+1]-r[c]),d=a+p*ir,f=sh(d,e,n);return f>=WE?XE(i,d,e,n):f===0?d:JE(i,a,a+ir,e,n)}return i=>i===0||i===1?i:Lr(l(i),t,s)}const Ol={};class KE{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,n,s)}clear(){this.subscriptions.clear()}}const Ru=e=>!isNaN(parseFloat(e));class YE{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new KE,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:r}=Tf();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),Ti.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ti.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Ru(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Ru(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Qf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function ZE(e){return new YE(e)}const{isArray:GE}=Array;function QE(){const e=q({}),t=s=>{const r=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};s?GE(s)?s.forEach(r):r(s):Object.keys(e.value).forEach(r)},n=(s,r,l)=>{if(e.value[s])return e.value[s];const i=ZE(r);return i.onChange(a=>l[s]=a),e.value[s]=i,i};return tF(t),{motionValues:e,get:n,stop:t}}const e6=e=>Array.isArray(e),Un=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Pl=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),t6=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Il=()=>({type:"keyframes",ease:"linear",duration:300}),n6=e=>({type:"keyframes",duration:800,values:e}),Ou={default:t6,x:Un,y:Un,z:Un,rotate:Un,rotateX:Un,rotateY:Un,rotateZ:Un,scaleX:Pl,scaleY:Pl,scale:Pl,backgroundColor:Il,color:Il,opacity:Il},oh=(e,t)=>{let n;return e6(t)?n=n6:n=Ou[e]||Ou.default,{to:t,...n(t)}},Pu={...Xo,transform:Math.round},rh={color:ft,backgroundColor:ft,outlineColor:ft,fill:ft,stroke:ft,borderColor:ft,borderTopColor:ft,borderRightColor:ft,borderBottomColor:ft,borderLeftColor:ft,borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,radius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,size:me,top:me,right:me,bottom:me,left:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,rotate:Vn,rotateX:Vn,rotateY:Vn,rotateZ:Vn,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:Vn,skewX:Vn,skewY:Vn,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:mo,originX:Cu,originY:Cu,originZ:me,zIndex:Pu,filter:Ii,WebkitFilter:Ii,fillOpacity:mo,strokeOpacity:mo,numOctaves:Pu},Ta=e=>rh[e],lh=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function s6(e,t){let n=Ta(e);return n!==Ii&&(n=zo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const o6={linear:Xf,easeIn:Ea,easeInOut:zf,easeOut:xE,circIn:Kf,circInOut:kE,circOut:Yf,backIn:$a,backInOut:SE,backOut:CE,anticipate:EE,bounceIn:RE,bounceInOut:OE,bounceOut:Mr},Iu=e=>{if(Array.isArray(e)){const[t,n,s,r]=e;return zE(t,n,s,r)}else if(typeof e=="string")return o6[e];return e},r6=e=>Array.isArray(e)&&typeof e[0]!="number",Mu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&zo.test(t)&&!t.startsWith("url("));function l6(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function i6({ease:e,times:t,delay:n,...s}){const r={...s};return t&&(r.offset=t),e&&(r.ease=r6(e)?e.map(Iu):Iu(e)),n&&(r.elapsed=-n),r}function a6(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),l6(t),c6(e)||(e={...e,...oh(n,t.to)}),{...t,...i6(e)}}function c6({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:r,...l}){return!!Object.keys(l).length}function u6(e,t){return e[t]||e.default||e}function p6(e,t,n,s,r){const l=u6(s,e);let i=l.from===null||l.from===void 0?t.get():l.from;const a=Mu(e,n);i==="none"&&a&&typeof n=="string"&&(i=s6(e,n));const c=Mu(e,i);function u(d){const f={from:i,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return l.type==="inertia"||l.type==="decay"?DE({...f,...l}):Gf({...a6(l,f,e),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),d&&d()}})}function p(d){return t.set(n),s.onComplete&&s.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!c||!a||l.type===!1?p:u}function d6(){const{motionValues:e,stop:t,get:n}=QE();return{motionValues:e,stop:t,push:(r,l,i,a={},c)=>{const u=i[r],p=n(r,u,i);if(a&&a.immediate){p.set(l);return}const d=p6(r,p,l,a,c);p.start(d)}}}function f6(e,t={},{motionValues:n,push:s,stop:r}=d6()){const l=C(t),i=q(!1);ge(n,d=>{i.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const a=d=>{if(!l||!l[d])throw new Error(`The variant ${d} does not exist.`);return l[d]},c=d=>(typeof d=="string"&&(d=a(d)),Promise.all(Object.entries(d).map(([f,h])=>{if(f!=="transition")return new Promise(m=>s(f,h,e,d.transition||oh(f,d[f]),m))}).filter(Boolean)));return{isAnimating:i,apply:c,set:d=>{const f=ai(d)?d:a(d);Object.entries(f).forEach(([h,m])=>{h!=="transition"&&s(h,m,e,{immediate:!0})})},leave:async d=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){d();return}await c(f),d()},stop:r}}const Aa=typeof window<"u",h6=()=>Aa&&window.onpointerdown===null,m6=()=>Aa&&window.ontouchstart===null,y6=()=>Aa&&window.onmousedown===null;function g6({target:e,state:t,variants:n,apply:s}){const r=C(n),l=q(!1),i=q(!1),a=q(!1),c=T(()=>{let p=[];return r&&(r.hovered&&(p=[...p,...Object.keys(r.hovered)]),r.tapped&&(p=[...p,...Object.keys(r.tapped)]),r.focused&&(p=[...p,...Object.keys(r.focused)])),p}),u=T(()=>{const p={};Object.assign(p,t.value),l.value&&r.hovered&&Object.assign(p,r.hovered),i.value&&r.tapped&&Object.assign(p,r.tapped),a.value&&r.focused&&Object.assign(p,r.focused);for(const d in p)c.value.includes(d)||delete p[d];return p});r.hovered&&(be(e,"mouseenter",()=>l.value=!0),be(e,"mouseleave",()=>{l.value=!1,i.value=!1}),be(e,"mouseout",()=>{l.value=!1,i.value=!1})),r.tapped&&(y6()&&(be(e,"mousedown",()=>i.value=!0),be(e,"mouseup",()=>i.value=!1)),h6()&&(be(e,"pointerdown",()=>i.value=!0),be(e,"pointerup",()=>i.value=!1)),m6()&&(be(e,"touchstart",()=>i.value=!0),be(e,"touchend",()=>i.value=!1))),r.focused&&(be(e,"focus",()=>a.value=!0),be(e,"blur",()=>a.value=!1)),ge(u,s)}function v6({set:e,target:t,apply:n,variants:s,variant:r}){const l=C(s);ge(()=>t,()=>{l&&(l.initial&&e("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function F6({state:e,apply:t}){ge(e,n=>{n&&t(n)},{immediate:!0})}function _6({target:e,variants:t,variant:n}){const s=C(t);s&&(s.visible||s.visibleOnce)&&JF(e,([{isIntersecting:r}])=>{s.visible?r?n.value="visible":n.value="initial":s.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function b6(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&v6(e),t.syncVariants&&F6(e),t.visibilityHooks&&_6(e),t.eventListeners&&g6(e)}function ih(e={}){const t=Be({...e}),n=q({});return ge(t,()=>{const s={};for(const[r,l]of Object.entries(t)){const i=Ta(r),a=lh(l,i);s[r]=a}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}function Ra(e,t){ge(()=>kt(e),n=>{n&&t(n)},{immediate:!0})}const w6={x:"translateX",y:"translateY",z:"translateZ"};function ah(e={},t=!0){const n=Be({...e}),s=q("");return ge(n,r=>{let l="",i=!1;if(t&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(me.transform).join(",");l+=`translate3d(${a}) `,i=!0}for(const[a,c]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=Ta(a),p=lh(c,u);l+=`${w6[a]||a}(${p}) `}t&&!i&&(l+="translateZ(0px) "),s.value=l.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}const x6=["","X","Y","Z"],k6=["perspective","translate","scale","rotate","skew"],ch=["transformPerspective","x","y","z"];k6.forEach(e=>{x6.forEach(t=>{const n=e+t;ch.push(n)})});const C6=new Set(ch);function Oa(e){return C6.has(e)}const S6=new Set(["originX","originY","originZ"]);function uh(e){return S6.has(e)}function E6(e){const t={},n={};return Object.entries(e).forEach(([s,r])=>{Oa(s)||uh(s)?t[s]=r:n[s]=r}),{transform:t,style:n}}function ph(e){const{transform:t,style:n}=E6(e),{transform:s}=ah(t),{style:r}=ih(n);return s.value&&(r.value.transform=s.value),r.value}function $6(e,t){let n,s;const{state:r,style:l}=ih();return Ra(e,i=>{s=i;for(const a of Object.keys(rh))i.style[a]===null||i.style[a]===""||Oa(a)||uh(a)||(r[a]=i.style[a]);n&&Object.entries(n).forEach(([a,c])=>i.style[a]=c),t&&t(r)}),ge(l,i=>{if(!s){n=i;return}for(const a in i)s.style[a]=i[a]},{immediate:!0}),{style:r}}function T6(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,r)=>{if(!r)return s;const[l,i]=r.split("("),c=i.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...s,[l]:u}},{})}function A6(e,t){Object.entries(T6(t)).forEach(([n,s])=>{const r=["x","y","z"];if(n==="translate3d"){if(s===0){r.forEach(l=>e[l]=0);return}s.forEach((l,i)=>e[r[i]]=l);return}if(s=parseFloat(s),n==="translateX"){e.x=s;return}if(n==="translateY"){e.y=s;return}if(n==="translateZ"){e.z=s;return}e[n]=s})}function R6(e,t){let n,s;const{state:r,transform:l}=ah();return Ra(e,i=>{s=i,i.style.transform&&A6(r,i.style.transform),n&&(i.style.transform=n),t&&t(r)}),ge(l,i=>{if(!s){n=i;return}s.style.transform=i},{immediate:!0}),{transform:r}}function O6(e,t){const n=Be({}),s=i=>Object.entries(i).forEach(([a,c])=>n[a]=c),{style:r}=$6(e,s),{transform:l}=R6(e,s);return ge(n,i=>{Object.entries(i).forEach(([a,c])=>{const u=Oa(a)?l:r;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),Ra(e,()=>t&&s(t)),{motionProperties:n,style:r,transform:l}}function P6(e={}){const t=C(e),n=q();return{state:T(()=>{if(n.value)return t[n.value]}),variant:n}}function dh(e,t={},n){const{motionProperties:s}=O6(e),{variant:r,state:l}=P6(t),i=f6(s,t),a={target:e,variant:r,variants:t,state:l,motionProperties:s,...i};return b6(a,n),a}const I6=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],M6=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&ai(n.variants)&&(t.value={...t.value,...n.variants}),I6.forEach(s=>{if(s==="delay"){if(n&&n[s]&&Xv(n[s])){const r=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&ai(n[s])&&(t.value[s]=n[s])}))},Ml=e=>({created:(n,s,r)=>{const l=s.value&&typeof s.value=="string"?s.value:r.key;l&&Ol[l]&&Ol[l].stop();const i=q(e||{});typeof s.value=="object"&&(i.value=s.value),M6(r,i);const a=dh(n,i);n.motionInstance=a,l&&(Ol[l]=a)},getSSRProps(n,s){let{initial:r}=n.value||s&&(s==null?void 0:s.props)||{};r=C(r);const l=HS((e==null?void 0:e.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:ph(l)}}}),L6={initial:{opacity:0},enter:{opacity:1}},H6={initial:{opacity:0},visible:{opacity:1}},j6={initial:{opacity:0},visibleOnce:{opacity:1}},B6={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},N6={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},D6={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},V6={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},U6={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},J6={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},q6={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},W6={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},X6={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},z6={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},K6={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Y6={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Z6={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},G6={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Q6={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},e$={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},t$={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},n$={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},s$={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},o$={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},r$={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},l$={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},i$={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},a$={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},c$={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},u$={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},p$={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Mi={__proto__:null,fade:L6,fadeVisible:H6,fadeVisibleOnce:j6,pop:B6,popVisible:N6,popVisibleOnce:D6,rollBottom:Z6,rollLeft:V6,rollRight:q6,rollTop:z6,rollVisibleBottom:G6,rollVisibleLeft:U6,rollVisibleOnceBottom:Q6,rollVisibleOnceLeft:J6,rollVisibleOnceRight:X6,rollVisibleOnceTop:Y6,rollVisibleRight:W6,rollVisibleTop:K6,slideBottom:c$,slideLeft:e$,slideRight:s$,slideTop:l$,slideVisibleBottom:u$,slideVisibleLeft:t$,slideVisibleOnceBottom:p$,slideVisibleOnceLeft:n$,slideVisibleOnceRight:r$,slideVisibleOnceTop:a$,slideVisibleRight:o$,slideVisibleTop:i$},d$=we({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=Xy(),n=Be({});if(!e.is&&!t.default)return()=>Ze("div",{});const s=T(()=>{let c;return e.preset&&(c=Mi[e.preset]),c}),r=T(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=T(()=>{const c={...r.value,...s.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),i=T(()=>{if(!e.is)return;let c=e.is;return typeof i.value=="string"&&!Yu(c)&&(c=Mn(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var d,f,h;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Kr(()=>Object.entries(n).forEach(([u,p])=>c(p)))}return{slots:t,component:i,motionConfig:l,instances:n}},render({slots:e,motionConfig:t,instances:n,component:s}){var a;const r=ph(t.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:p})=>{const d=dh(p,t);n[u]=d},c);if(s){const c=Ze(s,void 0,e);return l(c,0),c}return(((a=e.default)==null?void 0:a.call(e))||[]).map((c,u)=>l(c,u))}});function f$(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const h$={install(e,t){if(e.directive("motion",Ml()),e.component("Motion",d$),!t||t&&!t.excludePresets)for(const n in Mi){const s=Mi[n];e.directive(`motion-${f$(n)}`,Ml(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Ml(s))}}};var Lu;const go=typeof window<"u",m$=Object.prototype.toString,y$=e=>m$.call(e)==="[object Object]";go&&((Lu=window==null?void 0:window.navigator)!=null&&Lu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function g$(e){return Di()?(rp(e),!0):!1}function v$(e){var t;const n=C(e);return(t=n==null?void 0:n.$el)!=null?t:n}const F$=go?window:void 0,Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ju="__vueuse_ssr_handlers__";Hu[ju]=Hu[ju]||{};function _$(e,t={}){const{immediate:n=!0,window:s=F$}=t,r=q(!1);let l=null;function i(){!r.value||!s||(e(),l=s.requestAnimationFrame(i))}function a(){!r.value&&s&&(r.value=!0,i())}function c(){r.value=!1,l!=null&&s&&(s.cancelAnimationFrame(l),l=null)}return n&&a(),g$(c),{isActive:r,pause:c,resume:a}}var Bu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Bu||(Bu={}));const ol="vue-starport-injection",fh="vue-starport-options",b$={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},hh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var w$=Object.defineProperty,Hr=Object.getOwnPropertySymbols,mh=Object.prototype.hasOwnProperty,yh=Object.prototype.propertyIsEnumerable,Nu=(e,t,n)=>t in e?w$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x$=(e,t)=>{for(var n in t||(t={}))mh.call(t,n)&&Nu(e,n,t[n]);if(Hr)for(var n of Hr(t))yh.call(t,n)&&Nu(e,n,t[n]);return e},Du=(e,t)=>{var n={};for(var s in e)mh.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Hr)for(var s of Hr(e))t.indexOf(s)<0&&yh.call(e,s)&&(n[s]=e[s]);return n};const k$=we({name:"StarportProxy",props:x$({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},hh),setup(e,t){const n=Y(ol),s=T(()=>n.getInstance(e.port,e.component)),r=q(),l=s.value.generateId(),i=q(!1);return s.value.isVisible||(s.value.land(),i.value=!0),ds(async()=>{if(s.value.el){console.error(`[Vue Starport] Multiple proxies of "${s.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(s.value.el=r.value,await et(),i.value=!0,s.value.rect.update(),s.value.rect.width===0||s.value.rect.height===0){const a=s.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${s.value.componentName}" (port "${e.port}") has no ${a} on initial render, have you set the size for it?`),console.warn("element:",s.value.el),console.warn("rect:",s.value.rect)}}),Do(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,i.value=!1,!s.value.options.keepAlive&&(await et(),await et(),!s.value.el&&n.dispose(s.value.port))}),ge(()=>e,async()=>{s.value.props&&await et();const a=e,{props:c}=a,u=Du(a,["props"]);s.value.props=c||{},s.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:u}=a,p=Du(a,["initialProps","mountedProps"]),d=Pt(p,(i.value?u:c)||{});return Ze("div",Pt(d,{id:l,ref:r,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?Ze(t.slots.default):void 0)}}});var C$=Object.defineProperty,S$=Object.defineProperties,E$=Object.getOwnPropertyDescriptors,Vu=Object.getOwnPropertySymbols,$$=Object.prototype.hasOwnProperty,T$=Object.prototype.propertyIsEnumerable,Uu=(e,t,n)=>t in e?C$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A$=(e,t)=>{for(var n in t||(t={}))$$.call(t,n)&&Uu(e,n,t[n]);if(Vu)for(var n of Vu(t))T$.call(t,n)&&Uu(e,n,t[n]);return e},R$=(e,t)=>S$(e,E$(t));const O$=we({name:"Starport",inheritAttrs:!0,props:hh,setup(e,t){const n=q(!1);return ds(()=>{if(n.value=!0,!Y(ol))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,a;const s=(a=(i=t.slots).default)==null?void 0:a.call(i);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const r=s[0];let l=r.type;return(!y$(l)||Zt(l))&&(l={render(){return s}}),Ze(k$,R$(A$({},e),{key:e.port,component:Ur(l),props:r.props}))}}});function P$(e){const t=Be({height:0,width:0,left:0,top:0,update:s,listen:l,pause:i,margin:"0px",padding:"0px"}),n=go?document.documentElement||document.body:void 0;function s(){if(!go)return;const a=v$(e);if(!a)return;const{height:c,width:u,left:p,top:d}=a.getBoundingClientRect(),f=window.getComputedStyle(a),h=f.margin,m=f.padding;Object.assign(t,{height:c,width:u,left:p,top:n.scrollTop+d,margin:h,padding:m})}const r=_$(s,{immediate:!1});function l(){go&&(s(),r.resume())}function i(){r.pause()}return t}let I$=(e,t=21)=>(n=t)=>{let s="",r=n;for(;r--;)s+=e[Math.random()*e.length|0];return s};const Ju=I$("abcdefghijklmnopqrstuvwxyz",5);function qu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function M$(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var L$=Object.defineProperty,Wu=Object.getOwnPropertySymbols,H$=Object.prototype.hasOwnProperty,j$=Object.prototype.propertyIsEnumerable,Xu=(e,t,n)=>t in e?L$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ll=(e,t)=>{for(var n in t||(t={}))H$.call(t,n)&&Xu(e,n,t[n]);if(Wu)for(var n of Wu(t))j$.call(t,n)&&Xu(e,n,t[n]);return e};function B$(e,t,n={}){const s=M$(t),r=qu(s)||Ju(),l=q(),i=q(null),a=q(!1),c=q(!1),u=Ph(!0),p=q({}),d=T(()=>Ll(Ll(Ll({},b$),n),p.value)),f=q(0);let h;u.run(()=>{h=P$(l),ge(l,async x=>{x&&(c.value=!0),await et(),l.value||(c.value=!1)})});const m=qu(e);function v(){return`starport-${r}-${m}-${Ju()}`}const F=v();return Be({el:l,id:F,port:e,props:i,rect:h,scope:u,isLanded:a,isVisible:c,options:d,liftOffTime:f,component:t,componentName:s,componentId:r,generateId:v,setLocalOptions(x={}){p.value=JSON.parse(JSON.stringify(x))},elRef(){return l},liftOff(){a.value&&(a.value=!1,f.value=Date.now(),h.listen())},land(){a.value||(a.value=!0,h.pause())}})}function N$(e){const t=Be(new Map);function n(r,l){let i=t.get(r);return i||(i=B$(r,l,e),t.set(r,i)),i.component=l,i}function s(r){var l;(l=t.get(r))==null||l.scope.stop(),t.delete(r)}return{portMap:t,dispose:s,getInstance:n}}var D$=Object.defineProperty,V$=Object.defineProperties,U$=Object.getOwnPropertyDescriptors,zu=Object.getOwnPropertySymbols,J$=Object.prototype.hasOwnProperty,q$=Object.prototype.propertyIsEnumerable,Ku=(e,t,n)=>t in e?D$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W$=(e,t)=>{for(var n in t||(t={}))J$.call(t,n)&&Ku(e,n,t[n]);if(zu)for(var n of zu(t))q$.call(t,n)&&Ku(e,n,t[n]);return e},X$=(e,t)=>V$(e,U$(t));const z$=we({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=Y(ol);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=T(()=>t.getInstance(e.port,e.component)),s=T(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),r=T(()=>{const i=Date.now()-n.value.liftOffTime,a=Math.max(0,n.value.options.duration-i),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?X$(W$({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:n.value.options.easing}),u)}),l={onTransitionend(i){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const i=!!(n.value.isLanded&&n.value.el);return Ze("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Ze(Py,{to:i?`#${s.value}`:"body",disabled:!i},Ze(n.value.component,Pt(l,n.value.props))))}}}),K$=we({name:"StarportCarrier",setup(e,{slots:t}){const n=N$(Y(fh,{}));return Et().appContext.app.provide(ol,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([l,{component:i}])=>Ze(z$,{key:l,port:l,component:i}))]}}});function Y$(e={}){return{install(t){t.provide(fh,e),t.component("Starport",O$),t.component("StarportCarrier",K$)}}}function Z$(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(h$),e.app.use(Y$({keepAlive:!0}))}function Ft(e,t,n){var s;return((s=e.instance)==null?void 0:s.$).provides[t]??n}function G$(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,d,f,h,m,v;if(fo.value||(p=Ft(n,ao))!=null&&p.value)return;const s=Ft(n,zn),r=Ft(n,io),l=Ft(n,li),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,a=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((d=s==null?void 0:s.value)==null?void 0:d.length)||0,u=a?Tv:gl;if(s&&!((f=s==null?void 0:s.value)!=null&&f.includes(t))&&s.value.push(t),n.value==null&&(n.value=(h=s==null?void 0:s.value)==null?void 0:h.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((m=s==null?void 0:s.value)==null?void 0:m.length)||0)+Number(n.value)),!(l!=null&&l.value.has(n.value)))l==null||l.value.set(n.value,[t]);else if(!((v=l==null?void 0:l.value.get(n.value))!=null&&v.includes(t))){const F=(l==null?void 0:l.value.get(n.value))||[];l==null||l.value.set(n.value,[t].concat(F))}t==null||t.classList.toggle(Wn,!0),r&&ge(r,()=>{const F=(r==null?void 0:r.value)??0,x=n.value!=null?F>=n.value:F>c;t.classList.contains(vl)||t.classList.toggle(u,!x),i!==!1&&i!==void 0&&t.classList.toggle(u,x),t.classList.toggle(qs,!1);const b=l==null?void 0:l.value.get(F);b==null||b.forEach((w,S)=>{w.classList.toggle(or,!1),S===b.length-1?w.classList.toggle(qs,!0):w.classList.toggle(or,!0)}),t.classList.contains(qs)||t.classList.toggle(or,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Wn,!1);const s=Ft(n,zn);s!=null&&s.value&&ii(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var a,c;if(fo.value||(a=Ft(n,ao))!=null&&a.value)return;const s=Ft(n,zn),r=Ft(n,io),l=Ft(n,li),i=s==null?void 0:s.value.length;n.value==null&&(n.value=s==null?void 0:s.value.length),l!=null&&l.value.has(n.value)?(c=l==null?void 0:l.value.get(n.value))==null||c.push(t):l==null||l.value.set(n.value,[t]),t==null||t.classList.toggle(Wn,!0),r&&ge(r,()=>{const u=(r.value??0)>=(n.value??i??0);t.classList.contains(vl)||t.classList.toggle(gl,!u),t.classList.toggle(qs,!1),t.classList.contains(qs)||t.classList.toggle(or,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Wn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,a,c;if(fo.value||(i=Ft(n,ao))!=null&&i.value)return;const s=Ft(n,zn),r=Ft(n,io),l=((a=s==null?void 0:s.value)==null?void 0:a.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(Wn,!0),r&&ge(r,()=>{const u=(r==null?void 0:r.value)??0,p=n.value!=null?u>=n.value:u>l;t.classList.toggle(gl,p),t.classList.toggle(vl,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Wn,!1);const s=Ft(n,zn);s!=null&&s.value&&ii(s.value,t)}})}}}function Q$(e,t){const n=Ff(e),s=_f(t,n.currentRoute,n.currentPage);return{nav:{...n,...s},configs:Ee,themeConfigs:T(()=>Ee.themeConfig)}}function eT(){return{install(e){const t=Q$(It,Rt);e.provide(re,Be(t))}}}const Bs=Ag(MS);Bs.use(mt);Bs.use(Sv());Bs.use(G$());Bs.use(eT());Z$({app:Bs,router:mt});Bs.mount("#app");export{W8 as $,u8 as A,q as B,sT as C,ct as D,Ae as E,Se as F,k0 as G,$S as H,Rt as I,Ir as J,xS as K,El as L,ds as M,Be as N,tT as O,oT as P,ge as Q,ue as R,cf as S,Te as T,at as U,H0 as V,Hm as W,jm as X,To as Y,kl as Z,le as _,re as a,ha as a0,ma as a1,D8 as a2,Ue as a3,K0 as a4,ra as b,Ee as c,we as d,hm as e,H as f,o as g,C as h,Y as i,Xe as j,Cf as k,g as l,z as m,ot as n,k as o,ye as p,ia as q,Hs as r,Vt as s,ls as t,nT as u,T as v,Fl as w,se as x,ef as y,m8 as z};
