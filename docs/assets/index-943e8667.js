(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function Bn(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function ot(e){if(re(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Me(o)?kh(o):ot(o);if(r)for(const l in r)t[l]=r[l]}return t}else{if(Me(e))return e;if(Te(e))return e}}const vh=/;(?![^(]*\))/g,_h=/:([^]+)/,bh=/\/\*.*?\*\//gs;function kh(e){const t={};return e.replace(bh,"").split(vh).forEach(n=>{if(n){const o=n.split(_h);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Se(e){let t="";if(Me(e))t=e;else if(re(e))for(let n=0;n<e.length;n++){const o=Se(e[n]);o&&(t+=o+" ")}else if(Te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Je(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Me(t)&&(e.class=Se(t)),n&&(e.style=ot(n)),e}const xh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",wh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Zu=Bn(xh),Ch=Bn(wh),Sh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eh=Bn(Sh);function Gu(e){return!!e||e===""}const ls=e=>Me(e)?e:e==null?"":re(e)||Te(e)&&(e.toString===np||!pe(e.toString))?JSON.stringify(e,Qu,2):String(e),Qu=(e,t)=>t&&t.__v_isRef?Qu(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:tp(t)?{[`Set(${t.size})`]:[...t.values()]}:Te(t)&&!re(t)&&!sp(t)?String(t):t,Ie=Object.freeze({}),Ss=Object.freeze([]),ht=()=>{},ep=()=>!1,$h=/^on[^a-z]/,Bo=e=>$h.test(e),vr=e=>e.startsWith("onUpdate:"),Ne=Object.assign,Bi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Rh=Object.prototype.hasOwnProperty,be=(e,t)=>Rh.call(e,t),re=Array.isArray,Qn=e=>Mo(e)==="[object Map]",tp=e=>Mo(e)==="[object Set]",Ah=e=>Mo(e)==="[object RegExp]",pe=e=>typeof e=="function",Me=e=>typeof e=="string",Mi=e=>typeof e=="symbol",Te=e=>e!==null&&typeof e=="object",ji=e=>Te(e)&&pe(e.then)&&pe(e.catch),np=Object.prototype.toString,Mo=e=>np.call(e),Ni=e=>Mo(e).slice(8,-1),sp=e=>Mo(e)==="[object Object]",Di=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ar=Bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Th=Bn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Mr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Oh=/-(\w)/g,Yt=Mr(e=>e.replace(Oh,(t,n)=>n?n.toUpperCase():"")),Ph=/\B([A-Z])/g,dn=Mr(e=>e.replace(Ph,"-$1").toLowerCase()),is=Mr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=Mr(e=>e?`on${is(e)}`:""),go=(e,t)=>!Object.is(e,t),xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_r=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ml=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Lh=e=>{const t=Me(e)?Number(e):NaN;return isNaN(t)?e:t};let Ba;const op=()=>Ba||(Ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function br(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let kt;class rp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!t&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=kt;try{return kt=this,t()}finally{kt=n}}else br("cannot run an inactive effect scope.")}on(){kt=this}off(){kt=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ih(e){return new rp(e)}function Hh(e,t=kt){t&&t.active&&t.effects.push(e)}function Vi(){return kt}function lp(e){kt?kt.cleanups.push(e):br("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Ui=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ip=e=>(e.w&Ln)>0,ap=e=>(e.n&Ln)>0,Bh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ln},Mh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];ip(r)&&!ap(r)?r.delete(e):t[n++]=r,r.w&=~Ln,r.n&=~Ln}t.length=n}},jl=new WeakMap;let Qs=0,Ln=1;const Nl=30;let ut;const es=Symbol("iterate"),Dl=Symbol("Map key iterate");class Ji{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hh(this,o)}run(){if(!this.active)return this.fn();let t=ut,n=En;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ut,ut=this,En=!0,Ln=1<<++Qs,Qs<=Nl?Bh(this):Ma(this),this.fn()}finally{Qs<=Nl&&Mh(this),Ln=1<<--Qs,ut=this.parent,En=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let En=!0;const cp=[];function cs(){cp.push(En),En=!1}function us(){const e=cp.pop();En=e===void 0?!0:e}function yt(e,t,n){if(En&&ut){let o=jl.get(e);o||jl.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=Ui()),up(r,{effect:ut,target:e,type:t,key:n})}}function up(e,t){let n=!1;Qs<=Nl?ap(e)||(e.n|=Ln,n=!ip(e)):n=!e.has(ut),n&&(e.add(ut),ut.deps.push(e),ut.onTrack&&ut.onTrack(Object.assign({effect:ut},t)))}function fn(e,t,n,o,r,l){const i=jl.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&re(e)){const u=Number(o);i.forEach((p,d)=>{(d==="length"||d>=u)&&a.push(p)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":re(e)?Di(n)&&a.push(i.get("length")):(a.push(i.get(es)),Qn(e)&&a.push(i.get(Dl)));break;case"delete":re(e)||(a.push(i.get(es)),Qn(e)&&a.push(i.get(Dl)));break;case"set":Qn(e)&&a.push(i.get(es));break}const c={target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:l};if(a.length===1)a[0]&&Vl(a[0],c);else{const u=[];for(const p of a)p&&u.push(...p);Vl(Ui(u),c)}}function Vl(e,t){const n=re(e)?e:[...e];for(const o of n)o.computed&&ja(o,t);for(const o of n)o.computed||ja(o,t)}function ja(e,t){(e!==ut||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ne({effect:e},t)),e.scheduler?e.scheduler():e.run())}const jh=Bn("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mi)),Nh=jr(),Dh=jr(!1,!0),Vh=jr(!0),Uh=jr(!0,!0),Na=Jh();function Jh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=he(this);for(let l=0,i=this.length;l<i;l++)yt(o,"get",l+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cs();const o=he(this)[t].apply(this,n);return us(),o}}),e}function qh(e){const t=he(this);return yt(t,"has",e),t.hasOwnProperty(e)}function jr(e=!1,t=!1){return function(o,r,l){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&l===(e?t?vp:gp:t?Fp:yp).get(o))return o;const i=re(o);if(!e){if(i&&be(Na,r))return Reflect.get(Na,r,l);if(r==="hasOwnProperty")return qh}const a=Reflect.get(o,r,l);return(Mi(r)?pp.has(r):jh(r))||(e||yt(o,"get",r),t)?a:Ae(a)?i&&Di(r)?a:a.value:Te(a)?e?zt(a):je(a):a}}const Wh=dp(),Xh=dp(!0);function dp(e=!1){return function(n,o,r,l){let i=n[o];if(In(i)&&Ae(i)&&!Ae(r))return!1;if(!e&&(!kr(r)&&!In(r)&&(i=he(i),r=he(r)),!re(n)&&Ae(i)&&!Ae(r)))return i.value=r,!0;const a=re(n)&&Di(o)?Number(o)<n.length:be(n,o),c=Reflect.set(n,o,r,l);return n===he(l)&&(a?go(r,i)&&fn(n,"set",o,r,i):fn(n,"add",o,r)),c}}function zh(e,t){const n=be(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&fn(e,"delete",t,void 0,o),r}function Kh(e,t){const n=Reflect.has(e,t);return(!Mi(t)||!pp.has(t))&&yt(e,"has",t),n}function Yh(e){return yt(e,"iterate",re(e)?"length":es),Reflect.ownKeys(e)}const fp={get:Nh,set:Wh,deleteProperty:zh,has:Kh,ownKeys:Yh},hp={get:Vh,set(e,t){return br(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return br(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Zh=Ne({},fp,{get:Dh,set:Xh}),Gh=Ne({},hp,{get:Uh}),qi=e=>e,Nr=e=>Reflect.getPrototypeOf(e);function Ko(e,t,n=!1,o=!1){e=e.__v_raw;const r=he(e),l=he(t);n||(t!==l&&yt(r,"get",t),yt(r,"get",l));const{has:i}=Nr(r),a=o?qi:n?Wi:vo;if(i.call(r,t))return a(e.get(t));if(i.call(r,l))return a(e.get(l));e!==r&&e.get(t)}function Yo(e,t=!1){const n=this.__v_raw,o=he(n),r=he(e);return t||(e!==r&&yt(o,"has",e),yt(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Zo(e,t=!1){return e=e.__v_raw,!t&&yt(he(e),"iterate",es),Reflect.get(e,"size",e)}function Da(e){e=he(e);const t=he(this);return Nr(t).has.call(t,e)||(t.add(e),fn(t,"add",e,e)),this}function Va(e,t){t=he(t);const n=he(this),{has:o,get:r}=Nr(n);let l=o.call(n,e);l?mp(n,o,e):(e=he(e),l=o.call(n,e));const i=r.call(n,e);return n.set(e,t),l?go(t,i)&&fn(n,"set",e,t,i):fn(n,"add",e,t),this}function Ua(e){const t=he(this),{has:n,get:o}=Nr(t);let r=n.call(t,e);r?mp(t,n,e):(e=he(e),r=n.call(t,e));const l=o?o.call(t,e):void 0,i=t.delete(e);return r&&fn(t,"delete",e,void 0,l),i}function Ja(){const e=he(this),t=e.size!==0,n=Qn(e)?new Map(e):new Set(e),o=e.clear();return t&&fn(e,"clear",void 0,void 0,n),o}function Go(e,t){return function(o,r){const l=this,i=l.__v_raw,a=he(i),c=t?qi:e?Wi:vo;return!e&&yt(a,"iterate",es),i.forEach((u,p)=>o.call(r,c(u),c(p),l))}}function Qo(e,t,n){return function(...o){const r=this.__v_raw,l=he(r),i=Qn(l),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=r[e](...o),p=n?qi:t?Wi:vo;return!t&&yt(l,"iterate",c?Dl:es),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[p(d[0]),p(d[1])]:p(d),done:f}},[Symbol.iterator](){return this}}}}function yn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${is(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Qh(){const e={get(l){return Ko(this,l)},get size(){return Zo(this)},has:Yo,add:Da,set:Va,delete:Ua,clear:Ja,forEach:Go(!1,!1)},t={get(l){return Ko(this,l,!1,!0)},get size(){return Zo(this)},has:Yo,add:Da,set:Va,delete:Ua,clear:Ja,forEach:Go(!1,!0)},n={get(l){return Ko(this,l,!0)},get size(){return Zo(this,!0)},has(l){return Yo.call(this,l,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Go(!0,!1)},o={get(l){return Ko(this,l,!0,!0)},get size(){return Zo(this,!0)},has(l){return Yo.call(this,l,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Qo(l,!1,!1),n[l]=Qo(l,!0,!1),t[l]=Qo(l,!1,!0),o[l]=Qo(l,!0,!0)}),[e,n,t,o]}const[em,tm,nm,sm]=Qh();function Dr(e,t){const n=t?e?sm:nm:e?tm:em;return(o,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(be(n,r)&&r in o?n:o,r,l)}const om={get:Dr(!1,!1)},rm={get:Dr(!1,!0)},lm={get:Dr(!0,!1)},im={get:Dr(!0,!0)};function mp(e,t,n){const o=he(n);if(o!==n&&t.call(e,o)){const r=Ni(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const yp=new WeakMap,Fp=new WeakMap,gp=new WeakMap,vp=new WeakMap;function am(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(e){return e.__v_skip||!Object.isExtensible(e)?0:am(Ni(e))}function je(e){return In(e)?e:Vr(e,!1,fp,om,yp)}function um(e){return Vr(e,!1,Zh,rm,Fp)}function zt(e){return Vr(e,!0,hp,lm,gp)}function xs(e){return Vr(e,!0,Gh,im,vp)}function Vr(e,t,n,o,r){if(!Te(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=r.get(e);if(l)return l;const i=cm(e);if(i===0)return e;const a=new Proxy(e,i===2?o:n);return r.set(e,a),a}function ts(e){return In(e)?ts(e.__v_raw):!!(e&&e.__v_isReactive)}function In(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function Ul(e){return ts(e)||In(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Ur(e){return _r(e,"__v_skip",!0),e}const vo=e=>Te(e)?je(e):e,Wi=e=>Te(e)?zt(e):e;function Xi(e){En&&ut&&(e=he(e),up(e.dep||(e.dep=Ui()),{target:e,type:"get",key:"value"}))}function zi(e,t){e=he(e);const n=e.dep;n&&Vl(n,{target:e,type:"set",key:"value",newValue:t})}function Ae(e){return!!(e&&e.__v_isRef===!0)}function W(e){return _p(e,!1)}function Zt(e){return _p(e,!0)}function _p(e,t){return Ae(e)?e:new pm(e,t)}class pm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:vo(t)}get value(){return Xi(this),this._value}set value(t){const n=this.__v_isShallow||kr(t)||In(t);t=n?t:he(t),go(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:vo(t),zi(this,t))}}function w(e){return Ae(e)?e.value:e}const dm={get:(e,t,n)=>w(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function bp(e){return ts(e)?e:new Proxy(e,dm)}class fm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>Xi(this),()=>zi(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function hm(e){return new fm(e)}var kp;class mm{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[kp]=!1,this._dirty=!0,this.effect=new Ji(t,()=>{this._dirty||(this._dirty=!0,zi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=he(this);return Xi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}kp="__v_isReadonly";function ym(e,t,n=!1){let o,r;const l=pe(e);l?(o=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,r=e.set);const i=new mm(o,r,l||!r,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const ns=[];function cr(e){ns.push(e)}function ur(){ns.pop()}function L(e,...t){cs();const n=ns.length?ns[ns.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=Fm();if(o)un(o,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:l})=>`at <${Qr(n,l.type)}>`).join(`
`),r]);else{const l=[`[Vue warn]: ${e}`,...t];r.length&&l.push(`
`,...gm(r)),console.warn(...l)}us()}function Fm(){let e=ns[ns.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function gm(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...vm(n))}),t}function vm({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,r=` at <${Qr(e.component,e.type,o)}`,l=">"+n;return e.props?[r,..._m(e.props),l]:[r+l]}function _m(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...xp(o,e[o]))}),n.length>3&&t.push(" ..."),t}function xp(e,t,n){return Me(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Ae(t)?(t=xp(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):pe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function bm(e,t){e!==void 0&&(typeof e!="number"?L(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&L(`${t} is NaN - the duration expression might be incorrect.`))}const Ki={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function un(e,t,n,o){let r;try{r=o?e(...o):e()}catch(l){Jr(l,t,n)}return r}function Pt(e,t,n,o){if(pe(e)){const l=un(e,t,n,o);return l&&ji(l)&&l.catch(i=>{Jr(i,t,n)}),l}const r=[];for(let l=0;l<e.length;l++)r.push(Pt(e[l],t,n,o));return r}function Jr(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,a=Ki[n];for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,i,a)===!1)return}l=l.parent}const c=t.appContext.config.errorHandler;if(c){un(c,null,10,[e,i,a]);return}}km(e,n,r,o)}function km(e,t,n,o=!0){{const r=Ki[t];if(n&&cr(n),L(`Unhandled error${r?` during execution of ${r}`:""}`),n&&ur(),o)throw e;console.error(e)}}let _o=!1,Jl=!1;const st=[];let Wt=0;const Es=[];let qt=null,_n=0;const wp=Promise.resolve();let Yi=null;const xm=100;function et(e){const t=Yi||wp;return e?t.then(this?e.bind(this):e):t}function wm(e){let t=Wt+1,n=st.length;for(;t<n;){const o=t+n>>>1;bo(st[o])<e?t=o+1:n=o}return t}function qr(e){(!st.length||!st.includes(e,_o&&e.allowRecurse?Wt+1:Wt))&&(e.id==null?st.push(e):st.splice(wm(e.id),0,e),Cp())}function Cp(){!_o&&!Jl&&(Jl=!0,Yi=wp.then($p))}function Cm(e){const t=st.indexOf(e);t>Wt&&st.splice(t,1)}function Sp(e){re(e)?Es.push(...e):(!qt||!qt.includes(e,e.allowRecurse?_n+1:_n))&&Es.push(e),Cp()}function qa(e,t=_o?Wt+1:0){for(e=e||new Map;t<st.length;t++){const n=st[t];if(n&&n.pre){if(Zi(e,n))continue;st.splice(t,1),t--,n()}}}function Ep(e){if(Es.length){const t=[...new Set(Es)];if(Es.length=0,qt){qt.push(...t);return}for(qt=t,e=e||new Map,qt.sort((n,o)=>bo(n)-bo(o)),_n=0;_n<qt.length;_n++)Zi(e,qt[_n])||qt[_n]();qt=null,_n=0}}const bo=e=>e.id==null?1/0:e.id,Sm=(e,t)=>{const n=bo(e)-bo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function $p(e){Jl=!1,_o=!0,e=e||new Map,st.sort(Sm);const t=n=>Zi(e,n);try{for(Wt=0;Wt<st.length;Wt++){const n=st[Wt];if(n&&n.active!==!1){if(t(n))continue;un(n,null,14)}}}finally{Wt=0,st.length=0,Ep(e),_o=!1,Yi=null,(st.length||Es.length)&&$p(e)}}function Zi(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>xm){const o=t.ownerInstance,r=o&&Co(o.type);return L(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let $n=!1;const _s=new Set;op().__VUE_HMR_RUNTIME__={createRecord:ll(Rp),rerender:ll(Rm),reload:ll(Am)};const as=new Map;function Em(e){const t=e.type.__hmrId;let n=as.get(t);n||(Rp(t,e.type),n=as.get(t)),n.instances.add(e)}function $m(e){as.get(e.type.__hmrId).instances.delete(e)}function Rp(e,t){return as.has(e)?!1:(as.set(e,{initialDef:oo(t),instances:new Set}),!0)}function oo(e){return ad(e)?e.__vccOpts:e}function Rm(e,t){const n=as.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,oo(o.type).render=t),o.renderCache=[],$n=!0,o.update(),$n=!1}))}function Am(e,t){const n=as.get(e);if(!n)return;t=oo(t),Wa(n.initialDef,t);const o=[...n.instances];for(const r of o){const l=oo(r.type);_s.has(l)||(l!==n.initialDef&&Wa(l,t),_s.add(l)),r.appContext.optionsCache.delete(r.type),r.ceReload?(_s.add(l),r.ceReload(t.styles),_s.delete(l)):r.parent?qr(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Sp(()=>{for(const r of o)_s.delete(oo(r.type))})}function Wa(e,t){Ne(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function ll(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xt,eo=[],ql=!1;function jo(e,...t){Xt?Xt.emit(e,...t):ql||eo.push({event:e,args:t})}function Ap(e,t){var n,o;Xt=e,Xt?(Xt.enabled=!0,eo.forEach(({event:r,args:l})=>Xt.emit(r,...l)),eo=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Ap(l,t)}),setTimeout(()=>{Xt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ql=!0,eo=[])},3e3)):(ql=!0,eo=[])}function Tm(e,t){jo("app:init",e,t,{Fragment:Ee,Text:Vo,Comment:Ge,Static:pr})}function Om(e){jo("app:unmount",e)}const Wl=Gi("component:added"),Tp=Gi("component:updated"),Pm=Gi("component:removed"),Lm=e=>{Xt&&typeof Xt.cleanupBuffer=="function"&&!Xt.cleanupBuffer(e)&&Pm(e)};function Gi(e){return t=>{jo(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Im=Op("perf:start"),Hm=Op("perf:end");function Op(e){return(t,n,o)=>{jo(e,t.appContext.app,t.uid,t,n,o)}}function Bm(e,t,n){jo("component:emit",e.appContext.app,e,t,n)}function Mm(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Ie;{const{emitsOptions:p,propsOptions:[d]}=e;if(p)if(!(t in p))(!d||!(Jn(t)in d))&&L(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Jn(t)}" prop.`);else{const f=p[t];pe(f)&&(f(...n)||L(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in o){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:f}=o[p]||Ie;f&&(r=n.map(m=>Me(m)?m.trim():m)),d&&(r=n.map(Ml))}Bm(e,t,r);{const p=t.toLowerCase();p!==t&&o[Jn(p)]&&L(`Event "${p}" is emitted in component ${Qr(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${dn(t)}" instead of "${t}".`)}let a,c=o[a=Jn(t)]||o[a=Jn(Yt(t))];!c&&l&&(c=o[a=Jn(dn(t))]),c&&Pt(c,e,6,r);const u=o[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Pt(u,e,6,r)}}function Pp(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const l=e.emits;let i={},a=!1;if(!pe(e)){const c=u=>{const p=Pp(u,t,!0);p&&(a=!0,Ne(i,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!a?(Te(e)&&o.set(e,null),null):(re(l)?l.forEach(c=>i[c]=null):Ne(i,l),Te(e)&&o.set(e,i),i)}function Wr(e,t){return!e||!Bo(t)?!1:(t=t.slice(2).replace(/Once$/,""),be(e,t[0].toLowerCase()+t.slice(1))||be(e,dn(t))||be(e,t))}let Ke=null,Xr=null;function xr(e){const t=Ke;return Ke=e,Xr=e&&e.type.__scopeId||null,t}function jm(e){Xr=e}function Nm(){Xr=null}function ne(e,t=Ke,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&rc(-1);const l=xr(t);let i;try{i=e(...r)}finally{xr(l),o._d&&rc(1)}return Tp(t),i};return o._n=!0,o._c=!0,o._d=!0,o}let Xl=!1;function wr(){Xl=!0}function il(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:l,propsOptions:[i],slots:a,attrs:c,emit:u,render:p,renderCache:d,data:f,setupState:m,ctx:y,inheritAttrs:g}=e;let v,x;const b=xr(e);Xl=!1;try{if(n.shapeFlag&4){const T=r||o;v=Nt(p.call(T,T,d,l,m,f,y)),x=c}else{const T=t;c===l&&wr(),v=Nt(T.length>1?T(l,{get attrs(){return wr(),c},slots:a,emit:u}):T(l,null)),x=t.props?c:Vm(c)}}catch(T){lo.length=0,Jr(T,e,1),v=J(Ge)}let k=v,S;if(v.patchFlag>0&&v.patchFlag&2048&&([k,S]=Dm(v)),x&&g!==!1){const T=Object.keys(x),{shapeFlag:I}=k;if(T.length){if(I&7)i&&T.some(vr)&&(x=Um(x,i)),k=Vt(k,x);else if(!Xl&&k.type!==Ge){const V=Object.keys(c),A=[],N=[];for(let Z=0,ae=V.length;Z<ae;Z++){const X=V[Z];Bo(X)?vr(X)||A.push(X[2].toLowerCase()+X.slice(3)):N.push(X)}N.length&&L(`Extraneous non-props attributes (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),A.length&&L(`Extraneous non-emits event listeners (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Xa(k)||L("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=Vt(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(Xa(k)||L("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=n.transition),S?S(k):v=k,xr(b),v}const Dm=e=>{const t=e.children,n=e.dynamicChildren,o=Lp(t);if(!o)return[e,void 0];const r=t.indexOf(o),l=n?n.indexOf(o):-1,i=a=>{t[r]=a,n&&(l>-1?n[l]=a:a.patchFlag>0&&(e.dynamicChildren=[...n,a]))};return[Nt(o),i]};function Lp(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(Gt(o)){if(o.type!==Ge||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Vm=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bo(n))&&((t||(t={}))[n]=e[n]);return t},Um=(e,t)=>{const n={};for(const o in e)(!vr(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n},Xa=e=>e.shapeFlag&7||e.type===Ge;function Jm(e,t,n){const{props:o,children:r,component:l}=e,{props:i,children:a,patchFlag:c}=t,u=l.emitsOptions;if((r||a)&&$n||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?za(o,i,u):!!i;if(c&8){const p=t.dynamicProps;for(let d=0;d<p.length;d++){const f=p[d];if(i[f]!==o[f]&&!Wr(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?za(o,i,u):!0:!!i;return!1}function za(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const l=o[r];if(t[l]!==e[l]&&!Wr(n,l))return!0}return!1}function qm({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ip=e=>e.__isSuspense;function Wm(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):Sp(e)}function xt(e,t){if(!Ve)L("provide() can only be used inside setup().");else{let n=Ve.provides;const o=Ve.parent&&Ve.parent.provides;o===n&&(n=Ve.provides=Object.create(o)),n[e]=t}}function K(e,t,n=!1){const o=Ve||Ke;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&pe(t)?t.call(o.proxy):t;L(`injection "${String(e)}" not found.`)}else L("inject() can only be used inside setup() or functional components.")}function ps(e,t){return Qi(e,null,t)}const er={};function Fe(e,t,n){return pe(t)||L("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Qi(e,t,n)}function Qi(e,t,{immediate:n,deep:o,flush:r,onTrack:l,onTrigger:i}=Ie){t||(n!==void 0&&L('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&L('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const a=S=>{L("Invalid watch source: ",S,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Vi()===(Ve==null?void 0:Ve.scope)?Ve:null;let u,p=!1,d=!1;if(Ae(e)?(u=()=>e.value,p=kr(e)):ts(e)?(u=()=>e,o=!0):re(e)?(d=!0,p=e.some(S=>ts(S)||kr(S)),u=()=>e.map(S=>{if(Ae(S))return S.value;if(ts(S))return Yn(S);if(pe(S))return un(S,c,2);a(S)})):pe(e)?t?u=()=>un(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return f&&f(),Pt(e,c,3,[m])}:(u=ht,a(e)),t&&o){const S=u;u=()=>Yn(S())}let f,m=S=>{f=b.onStop=()=>{un(S,c,4)}},y;if(wo)if(m=ht,t?n&&Pt(t,c,3,[u(),d?[]:void 0,m]):u(),r==="sync"){const S=Gy();y=S.__watcherHandles||(S.__watcherHandles=[])}else return ht;let g=d?new Array(e.length).fill(er):er;const v=()=>{if(b.active)if(t){const S=b.run();(o||p||(d?S.some((T,I)=>go(T,g[I])):go(S,g)))&&(f&&f(),Pt(t,c,3,[S,g===er?void 0:d&&g[0]===er?[]:g,m]),g=S)}else b.run()};v.allowRecurse=!!t;let x;r==="sync"?x=v:r==="post"?x=()=>Qe(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),x=()=>qr(v));const b=new Ji(u,x);b.onTrack=l,b.onTrigger=i,t?n?v():g=b.run():r==="post"?Qe(b.run.bind(b),c&&c.suspense):b.run();const k=()=>{b.stop(),c&&c.scope&&Bi(c.scope.effects,b)};return y&&y.push(k),k}function Xm(e,t,n){const o=this.proxy,r=Me(e)?e.includes(".")?Hp(o,e):()=>o[e]:e.bind(o,o);let l;pe(t)?l=t:(l=t.handler,n=t);const i=Ve;Ls(this);const a=Qi(r,l.bind(o),n);return i?Ls(i):os(),a}function Hp(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Yn(e,t){if(!Te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))Yn(e.value,t);else if(re(e))for(let n=0;n<e.length;n++)Yn(e[n],t);else if(tp(e)||Qn(e))e.forEach(n=>{Yn(n,t)});else if(sp(e))for(const n in e)Yn(e[n],t);return e}function Bp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ds(()=>{e.isMounted=!0}),Do(()=>{e.isUnmounting=!0}),e}const Rt=[Function,Array],zm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},setup(e,{slots:t}){const n=$t(),o=Bp();let r;return()=>{const l=t.default&&ea(t.default(),!0);if(!l||!l.length)return;let i=l[0];if(l.length>1){let g=!1;for(const v of l)if(v.type!==Ge){if(g){L("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=v,g=!0}}const a=he(e),{mode:c}=a;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&L(`invalid <transition> mode: ${c}`),o.isLeaving)return al(i);const u=Ka(i);if(!u)return al(i);const p=ko(u,a,o,n);Ps(u,p);const d=n.subTree,f=d&&Ka(d);let m=!1;const{getTransitionKey:y}=u.type;if(y){const g=y();r===void 0?r=g:g!==r&&(r=g,m=!0)}if(f&&f.type!==Ge&&(!Cn(u,f)||m)){const g=ko(f,a,o,n);if(Ps(f,g),c==="out-in")return o.isLeaving=!0,g.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},al(i);c==="in-out"&&u.type!==Ge&&(g.delayLeave=(v,x,b)=>{const k=Mp(o,f);k[String(f.key)]=f,v._leaveCb=()=>{x(),v._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=b})}return i}}},Km=zm;function Mp(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function ko(e,t,n,o){const{appear:r,mode:l,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:g,onAppear:v,onAfterAppear:x,onAppearCancelled:b}=t,k=String(e.key),S=Mp(n,e),T=(A,N)=>{A&&Pt(A,o,9,N)},I=(A,N)=>{const Z=N[1];T(A,N),re(A)?A.every(ae=>ae.length<=1)&&Z():A.length<=1&&Z()},V={mode:l,persisted:i,beforeEnter(A){let N=a;if(!n.isMounted)if(r)N=g||a;else return;A._leaveCb&&A._leaveCb(!0);const Z=S[k];Z&&Cn(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),T(N,[A])},enter(A){let N=c,Z=u,ae=p;if(!n.isMounted)if(r)N=v||c,Z=x||u,ae=b||p;else return;let X=!1;const ce=A._enterCb=Oe=>{X||(X=!0,Oe?T(ae,[A]):T(Z,[A]),V.delayedLeave&&V.delayedLeave(),A._enterCb=void 0)};N?I(N,[A,ce]):ce()},leave(A,N){const Z=String(e.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return N();T(d,[A]);let ae=!1;const X=A._leaveCb=ce=>{ae||(ae=!0,N(),ce?T(y,[A]):T(m,[A]),A._leaveCb=void 0,S[Z]===e&&delete S[Z])};S[Z]=e,f?I(f,[A,X]):X()},clone(A){return ko(A,t,n,o)}};return V}function al(e){if(No(e))return e=Vt(e),e.children=null,e}function Ka(e){return No(e)?e.children?e.children[0]:void 0:e}function Ps(e,t){e.shapeFlag&6&&e.component?Ps(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ea(e,t=!1,n){let o=[],r=0;for(let l=0;l<e.length;l++){let i=e[l];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:l);i.type===Ee?(i.patchFlag&128&&r++,o=o.concat(ea(i.children,t,a))):(t||i.type!==Ge)&&o.push(a!=null?Vt(i,{key:a}):i)}if(r>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function ge(e){return pe(e)?{setup:e,name:e.name}:e}const $s=e=>!!e.type.__asyncLoader,No=e=>e.type.__isKeepAlive,Ym={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=$t(),o=n.ctx;if(!o.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const r=new Map,l=new Set;let i=null;n.__v_cache=r;const a=n.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:d}}}=o,f=d("div");o.activate=(b,k,S,T,I)=>{const V=b.component;u(b,k,S,0,a),c(V.vnode,b,k,S,V,a,T,b.slotScopeIds,I),Qe(()=>{V.isDeactivated=!1,V.a&&xn(V.a);const A=b.props&&b.props.onVnodeMounted;A&&At(A,V.parent,b)},a),Wl(V)},o.deactivate=b=>{const k=b.component;u(b,f,null,1,a),Qe(()=>{k.da&&xn(k.da);const S=b.props&&b.props.onVnodeUnmounted;S&&At(S,k.parent,b),k.isDeactivated=!0},a),Wl(k)};function m(b){cl(b),p(b,n,a,!0)}function y(b){r.forEach((k,S)=>{const T=Co(k.type);T&&(!b||!b(T))&&g(S)})}function g(b){const k=r.get(b);!i||!Cn(k,i)?m(k):i&&cl(i),r.delete(b),l.delete(b)}Fe(()=>[e.include,e.exclude],([b,k])=>{b&&y(S=>to(b,S)),k&&y(S=>!to(k,S))},{flush:"post",deep:!0});let v=null;const x=()=>{v!=null&&r.set(v,ul(n.subTree))};return ds(x),Kr(x),Do(()=>{r.forEach(b=>{const{subTree:k,suspense:S}=n,T=ul(k);if(b.type===T.type&&b.key===T.key){cl(T);const I=T.component.da;I&&Qe(I,S);return}m(b)})}),()=>{if(v=null,!t.default)return null;const b=t.default(),k=b[0];if(b.length>1)return L("KeepAlive should contain exactly one component child."),i=null,b;if(!Gt(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return i=null,k;let S=ul(k);const T=S.type,I=Co($s(S)?S.type.__asyncResolved||{}:T),{include:V,exclude:A,max:N}=e;if(V&&(!I||!to(V,I))||A&&I&&to(A,I))return i=S,k;const Z=S.key==null?T:S.key,ae=r.get(Z);return S.el&&(S=Vt(S),k.shapeFlag&128&&(k.ssContent=S)),v=Z,ae?(S.el=ae.el,S.component=ae.component,S.transition&&Ps(S,S.transition),S.shapeFlag|=512,l.delete(Z),l.add(Z)):(l.add(Z),N&&l.size>parseInt(N,10)&&g(l.values().next().value)),S.shapeFlag|=256,i=S,Ip(k.type)?k:S}}},jp=Ym;function to(e,t){return re(e)?e.some(n=>to(n,t)):Me(e)?e.split(",").includes(t):Ah(e)?e.test(t):!1}function Np(e,t){Vp(e,"a",t)}function Dp(e,t){Vp(e,"da",t)}function Vp(e,t,n=Ve){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(zr(t,o,n),n){let r=n.parent;for(;r&&r.parent;)No(r.parent.vnode)&&Zm(o,t,n,r),r=r.parent}}function Zm(e,t,n,o){const r=zr(t,e,o,!0);Yr(()=>{Bi(o[t],r)},n)}function cl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ul(e){return e.shapeFlag&128?e.ssContent:e}function zr(e,t,n=Ve,o=!1){if(n){const r=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;cs(),Ls(n);const a=Pt(t,n,e,i);return os(),us(),a});return o?r.unshift(l):r.push(l),l}else{const r=Jn(Ki[e].replace(/ hook$/,""));L(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const hn=e=>(t,n=Ve)=>(!wo||e==="sp")&&zr(e,(...o)=>t(...o),n),Gm=hn("bm"),ds=hn("m"),Qm=hn("bu"),Kr=hn("u"),Do=hn("bum"),Yr=hn("um"),ey=hn("sp"),ty=hn("rtg"),ny=hn("rtc");function sy(e,t=Ve){zr("ec",e,t)}function Up(e){Th(e)&&L("Do not use built-in directive ids as custom directive id: "+e)}function Rn(e,t){const n=Ke;if(n===null)return L("withDirectives can only be used inside render functions."),e;const o=Gr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[i,a,c,u=Ie]=t[l];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Yn(a),r.push({dir:i,instance:o,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function Mn(e,t,n,o){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];l&&(a.oldValue=l[i].value);let c=a.dir[o];c&&(cs(),Pt(c,n,8,[e.el,a,e,t]),us())}}const zl="components",oy="directives";function Lt(e,t){return Jp(zl,e,!0,t)||e}const ry=Symbol();function Cr(e){return Jp(oy,e)}function Jp(e,t,n=!0,o=!1){const r=Ke||Ve;if(r){const l=r.type;if(e===zl){const a=Co(l,!1);if(a&&(a===t||a===Yt(t)||a===is(Yt(t))))return l}const i=Ya(r[e]||l[e],t)||Ya(r.appContext[e],t);if(!i&&o)return l;if(n&&!i){const a=e===zl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";L(`Failed to resolve ${e.slice(0,-1)}: ${t}${a}`)}return i}else L(`resolve${is(e.slice(0,-1))} can only be used in render() or setup().`)}function Ya(e,t){return e&&(e[t]||e[Yt(t)]||e[is(Yt(t))])}function Bs(e,t,n,o){let r;const l=n&&n[o];if(re(e)||Me(e)){r=new Array(e.length);for(let i=0,a=e.length;i<a;i++)r[i]=t(e[i],i,void 0,l&&l[i])}else if(typeof e=="number"){Number.isInteger(e)||L(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,l&&l[i])}else if(Te(e))if(e[Symbol.iterator])r=Array.from(e,(i,a)=>t(i,a,void 0,l&&l[a]));else{const i=Object.keys(e);r=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const u=i[a];r[a]=t(e[u],u,a,l&&l[a])}}else r=[];return n&&(n[o]=r),r}function Ft(e,t,n={},o,r){if(Ke.isCE||Ke.parent&&$s(Ke.parent)&&Ke.parent.isCE)return t!=="default"&&(n.name=t),J("slot",n,o&&o());let l=e[t];l&&l.length>1&&(L("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),C();const i=l&&qp(l(n)),a=te(Ee,{key:n.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),l&&l._c&&(l._d=!0),a}function qp(e){return e.some(t=>Gt(t)?!(t.type===Ge||t.type===Ee&&!qp(t.children)):!0)?e:null}const Kl=e=>e?rd(e)?Gr(e)||e.proxy:Kl(e.parent):null,ss=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>xs(e.props),$attrs:e=>xs(e.attrs),$slots:e=>xs(e.slots),$refs:e=>xs(e.refs),$parent:e=>Kl(e.parent),$root:e=>Kl(e.root),$emit:e=>e.emit,$options:e=>na(e),$forceUpdate:e=>e.f||(e.f=()=>qr(e.update)),$nextTick:e=>e.n||(e.n=et.bind(e.proxy)),$watch:e=>Xm.bind(e)}),ta=e=>e==="_"||e==="$",pl=(e,t)=>e!==Ie&&!e.__isScriptSetup&&be(e,t),Wp={get({_:e},t){const{ctx:n,setupState:o,data:r,props:l,accessCache:i,type:a,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return l[t]}else{if(pl(o,t))return i[t]=1,o[t];if(r!==Ie&&be(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&be(u,t))return i[t]=3,l[t];if(n!==Ie&&be(n,t))return i[t]=4,n[t];Yl&&(i[t]=0)}}const p=ss[t];let d,f;if(p)return t==="$attrs"&&(yt(e,"get",t),wr()),p(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Ie&&be(n,t))return i[t]=4,n[t];if(f=c.config.globalProperties,be(f,t))return f[t];Ke&&(!Me(t)||t.indexOf("__v")!==0)&&(r!==Ie&&ta(t[0])&&be(r,t)?L(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ke&&L(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:o,setupState:r,ctx:l}=e;return pl(r,t)?(r[t]=n,!0):r.__isScriptSetup&&be(r,t)?(L(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Ie&&be(o,t)?(o[t]=n,!0):be(e.props,t)?(L(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(L(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:n}):l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:l}},i){let a;return!!n[i]||e!==Ie&&be(e,i)||pl(t,i)||(a=l[0])&&be(a,i)||be(o,i)||be(ss,i)||be(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:be(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};Wp.ownKeys=e=>(L("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function ly(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ss).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>ss[n](e),set:ht})}),t}function iy(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:ht})})}function ay(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(o=>{if(!n.__isScriptSetup){if(ta(o[0])){L(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n[o],set:ht})}})}function cy(){const e=Object.create(null);return(t,n)=>{e[n]?L(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let Yl=!0;function uy(e){const t=na(e),n=e.proxy,o=e.ctx;Yl=!1,t.beforeCreate&&Za(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:a,provide:c,inject:u,created:p,beforeMount:d,mounted:f,beforeUpdate:m,updated:y,activated:g,deactivated:v,beforeDestroy:x,beforeUnmount:b,destroyed:k,unmounted:S,render:T,renderTracked:I,renderTriggered:V,errorCaptured:A,serverPrefetch:N,expose:Z,inheritAttrs:ae,components:X,directives:ce,filters:Oe}=t,qe=cy();{const[z]=e.propsOptions;if(z)for(const oe in z)qe("Props",oe)}if(u&&py(u,o,qe,e.appContext.config.unwrapInjectedRef),i)for(const z in i){const oe=i[z];pe(oe)?(Object.defineProperty(o,z,{value:oe.bind(n),configurable:!0,enumerable:!0,writable:!0}),qe("Methods",z)):L(`Method "${z}" has type "${typeof oe}" in the component definition. Did you reference the function correctly?`)}if(r){pe(r)||L("The data option must be a function. Plain object usage is no longer supported.");const z=r.call(n,n);if(ji(z)&&L("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Te(z))L("data() should return an object.");else{e.data=je(z);for(const oe in z)qe("Data",oe),ta(oe[0])||Object.defineProperty(o,oe,{configurable:!0,enumerable:!0,get:()=>z[oe],set:ht})}}if(Yl=!0,l)for(const z in l){const oe=l[z],ve=pe(oe)?oe.bind(n,n):pe(oe.get)?oe.get.bind(n,n):ht;ve===ht&&L(`Computed property "${z}" has no getter.`);const Pe=!pe(oe)&&pe(oe.set)?oe.set.bind(n):()=>{L(`Write operation failed: computed property "${z}" is readonly.`)},vt=R({get:ve,set:Pe});Object.defineProperty(o,z,{enumerable:!0,configurable:!0,get:()=>vt.value,set:nt=>vt.value=nt}),qe("Computed",z)}if(a)for(const z in a)Xp(a[z],o,n,z);if(c){const z=pe(c)?c.call(n):c;Reflect.ownKeys(z).forEach(oe=>{xt(oe,z[oe])})}p&&Za(p,e,"c");function He(z,oe){re(oe)?oe.forEach(ve=>z(ve.bind(n))):oe&&z(oe.bind(n))}if(He(Gm,d),He(ds,f),He(Qm,m),He(Kr,y),He(Np,g),He(Dp,v),He(sy,A),He(ny,I),He(ty,V),He(Do,b),He(Yr,S),He(ey,N),re(Z))if(Z.length){const z=e.exposed||(e.exposed={});Z.forEach(oe=>{Object.defineProperty(z,oe,{get:()=>n[oe],set:ve=>n[oe]=ve})})}else e.exposed||(e.exposed={});T&&e.render===ht&&(e.render=T),ae!=null&&(e.inheritAttrs=ae),X&&(e.components=X),ce&&(e.directives=ce)}function py(e,t,n=ht,o=!1){re(e)&&(e=Zl(e));for(const r in e){const l=e[r];let i;Te(l)?"default"in l?i=K(l.from||r,l.default,!0):i=K(l.from||r):i=K(l),Ae(i)?o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):(L(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[r]=i):t[r]=i,n("Inject",r)}}function Za(e,t,n){Pt(re(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xp(e,t,n,o){const r=o.includes(".")?Hp(n,o):()=>n[o];if(Me(e)){const l=t[e];pe(l)?Fe(r,l):L(`Invalid watch handler specified by key "${e}"`,l)}else if(pe(e))Fe(r,e.bind(n));else if(Te(e))if(re(e))e.forEach(l=>Xp(l,t,n,o));else{const l=pe(e.handler)?e.handler.bind(n):t[e.handler];pe(l)?Fe(r,l,e):L(`Invalid watch handler specified by key "${e.handler}"`,l)}else L(`Invalid watch option: "${o}"`,e)}function na(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,a=l.get(t);let c;return a?c=a:!r.length&&!n&&!o?c=t:(c={},r.length&&r.forEach(u=>Sr(c,u,i,!0)),Sr(c,t,i)),Te(t)&&l.set(t,c),c}function Sr(e,t,n,o=!1){const{mixins:r,extends:l}=t;l&&Sr(e,l,n,!0),r&&r.forEach(i=>Sr(e,i,n,!0));for(const i in t)if(o&&i==="expose")L('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=dy[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const dy={data:Ga,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:qn,directives:qn,watch:hy,provide:Ga,inject:fy};function Ga(e,t){return t?e?function(){return Ne(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function fy(e,t){return qn(Zl(e),Zl(t))}function Zl(e){if(re(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function it(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function hy(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const o in t)n[o]=it(e[o],t[o]);return n}function my(e,t,n,o=!1){const r={},l={};_r(l,Zr,1),e.propsDefaults=Object.create(null),zp(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);Yp(t||{},r,e),n?e.props=o?r:um(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function yy(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Fy(e,t,n,o){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,a=he(r),[c]=e.propsOptions;let u=!1;if(!yy(e)&&(o||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let f=p[d];if(Wr(e.emitsOptions,f))continue;const m=t[f];if(c)if(be(l,f))m!==l[f]&&(l[f]=m,u=!0);else{const y=Yt(f);r[y]=Gl(c,a,y,m,e,!1)}else m!==l[f]&&(l[f]=m,u=!0)}}}else{zp(e,t,r,l)&&(u=!0);let p;for(const d in a)(!t||!be(t,d)&&((p=dn(d))===d||!be(t,p)))&&(c?n&&(n[d]!==void 0||n[p]!==void 0)&&(r[d]=Gl(c,a,d,void 0,e,!0)):delete r[d]);if(l!==a)for(const d in l)(!t||!be(t,d))&&(delete l[d],u=!0)}u&&fn(e,"set","$attrs"),Yp(t||{},r,e)}function zp(e,t,n,o){const[r,l]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(ar(c))continue;const u=t[c];let p;r&&be(r,p=Yt(c))?!l||!l.includes(p)?n[p]=u:(a||(a={}))[p]=u:Wr(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,i=!0)}if(l){const c=he(n),u=a||Ie;for(let p=0;p<l.length;p++){const d=l[p];n[d]=Gl(r,c,d,u[d],e,!be(u,d))}}return i}function Gl(e,t,n,o,r,l){const i=e[n];if(i!=null){const a=be(i,"default");if(a&&o===void 0){const c=i.default;if(i.type!==Function&&pe(c)){const{propsDefaults:u}=r;n in u?o=u[n]:(Ls(r),o=u[n]=c.call(null,t),os())}else o=c}i[0]&&(l&&!a?o=!1:i[1]&&(o===""||o===dn(n))&&(o=!0))}return o}function Kp(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const l=e.props,i={},a=[];let c=!1;if(!pe(e)){const p=d=>{c=!0;const[f,m]=Kp(d,t,!0);Ne(i,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!c)return Te(e)&&o.set(e,Ss),Ss;if(re(l))for(let p=0;p<l.length;p++){Me(l[p])||L("props must be strings when using array syntax.",l[p]);const d=Yt(l[p]);Qa(d)&&(i[d]=Ie)}else if(l){Te(l)||L("invalid props options",l);for(const p in l){const d=Yt(p);if(Qa(d)){const f=l[p],m=i[d]=re(f)||pe(f)?{type:f}:Object.assign({},f);if(m){const y=tc(Boolean,m.type),g=tc(String,m.type);m[0]=y>-1,m[1]=g<0||y<g,(y>-1||be(m,"default"))&&a.push(d)}}}}const u=[i,a];return Te(e)&&o.set(e,u),u}function Qa(e){return e[0]!=="$"?!0:(L(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Ql(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ec(e,t){return Ql(e)===Ql(t)}function tc(e,t){return re(t)?t.findIndex(n=>ec(n,e)):pe(t)&&ec(t,e)?0:-1}function Yp(e,t,n){const o=he(t),r=n.propsOptions[0];for(const l in r){let i=r[l];i!=null&&gy(l,o[l],i,!be(e,l)&&!be(e,dn(l)))}}function gy(e,t,n,o){const{type:r,required:l,validator:i}=n;if(l&&o){L('Missing required prop: "'+e+'"');return}if(!(t==null&&!n.required)){if(r!=null&&r!==!0){let a=!1;const c=re(r)?r:[r],u=[];for(let p=0;p<c.length&&!a;p++){const{valid:d,expectedType:f}=_y(t,c[p]);u.push(f||""),a=d}if(!a){L(by(e,t,u));return}}i&&!i(t)&&L('Invalid prop: custom validator check failed for prop "'+e+'".')}}const vy=Bn("String,Number,Boolean,Function,Symbol,BigInt");function _y(e,t){let n;const o=Ql(t);if(vy(o)){const r=typeof e;n=r===o.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else o==="Object"?n=Te(e):o==="Array"?n=re(e):o==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:o}}function by(e,t,n){let o=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(is).join(" | ")}`;const r=n[0],l=Ni(t),i=nc(t,r),a=nc(t,l);return n.length===1&&sc(r)&&!ky(r,l)&&(o+=` with value ${i}`),o+=`, got ${l} `,sc(l)&&(o+=`with value ${a}.`),o}function nc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function sc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function ky(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Zp=e=>e[0]==="_"||e==="$stable",sa=e=>re(e)?e.map(Nt):[Nt(e)],xy=(e,t,n)=>{if(t._n)return t;const o=ne((...r)=>(Ve&&L(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),sa(t(...r))),n);return o._c=!1,o},Gp=(e,t,n)=>{const o=e._ctx;for(const r in e){if(Zp(r))continue;const l=e[r];if(pe(l))t[r]=xy(r,l,o);else if(l!=null){L(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const i=sa(l);t[r]=()=>i}}},Qp=(e,t)=>{No(e.vnode)||L("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=sa(t);e.slots.default=()=>n},wy=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),_r(t,"_",n)):Gp(t,e.slots={})}else e.slots={},t&&Qp(e,t);_r(e.slots,Zr,1)},Cy=(e,t,n)=>{const{vnode:o,slots:r}=e;let l=!0,i=Ie;if(o.shapeFlag&32){const a=t._;a?$n?Ne(r,t):n&&a===1?l=!1:(Ne(r,t),!n&&a===1&&delete r._):(l=!t.$stable,Gp(t,r)),i=t}else t&&(Qp(e,t),i={default:1});if(l)for(const a in r)!Zp(a)&&!(a in i)&&delete r[a]};function ed(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sy=0;function Ey(e,t){return function(o,r=null){pe(o)||(o=Object.assign({},o)),r!=null&&!Te(r)&&(L("root props passed to app.mount() must be an object."),r=null);const l=ed(),i=new Set;let a=!1;const c=l.app={_uid:Sy++,_component:o,_props:r,_container:null,_context:l,_instance:null,version:$r,get config(){return l.config},set config(u){L("app.config cannot be replaced. Modify individual options instead.")},use(u,...p){return i.has(u)?L("Plugin has already been applied to target app."):u&&pe(u.install)?(i.add(u),u.install(c,...p)):pe(u)?(i.add(u),u(c,...p)):L('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return l.mixins.includes(u)?L("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):l.mixins.push(u),c},component(u,p){return ni(u,l.config),p?(l.components[u]&&L(`Component "${u}" has already been registered in target app.`),l.components[u]=p,c):l.components[u]},directive(u,p){return Up(u),p?(l.directives[u]&&L(`Directive "${u}" has already been registered in target app.`),l.directives[u]=p,c):l.directives[u]},mount(u,p,d){if(a)L("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&L("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=J(o,r);return f.appContext=l,l.reload=()=>{e(Vt(f),u,d)},p&&t?t(f,u):e(f,u,d),a=!0,c._container=u,u.__vue_app__=c,c._instance=f.component,Tm(c,$r),Gr(f.component)||f.component.proxy}},unmount(){a?(e(null,c._container),c._instance=null,Om(c),delete c._container.__vue_app__):L("Cannot unmount an app that is not mounted.")},provide(u,p){return u in l.provides&&L(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),l.provides[u]=p,c}};return c}}function ei(e,t,n,o,r=!1){if(re(e)){e.forEach((f,m)=>ei(f,t&&(re(t)?t[m]:t),n,o,r));return}if($s(o)&&!r)return;const l=o.shapeFlag&4?Gr(o.component)||o.component.proxy:o.el,i=r?null:l,{i:a,r:c}=e;if(!a){L("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,p=a.refs===Ie?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(Me(u)?(p[u]=null,be(d,u)&&(d[u]=null)):Ae(u)&&(u.value=null)),pe(c))un(c,a,12,[i,p]);else{const f=Me(c),m=Ae(c);if(f||m){const y=()=>{if(e.f){const g=f?be(d,c)?d[c]:p[c]:c.value;r?re(g)&&Bi(g,l):re(g)?g.includes(l)||g.push(l):f?(p[c]=[l],be(d,c)&&(d[c]=p[c])):(c.value=[l],e.k&&(p[e.k]=c.value))}else f?(p[c]=i,be(d,c)&&(d[c]=i)):m?(c.value=i,e.k&&(p[e.k]=i)):L("Invalid template ref type:",c,`(${typeof c})`)};i?(y.id=-1,Qe(y,n)):y()}else L("Invalid template ref type:",c,`(${typeof c})`)}}let Ds,wn;function sn(e,t){e.appContext.config.performance&&Er()&&wn.mark(`vue-${t}-${e.uid}`),Im(e,t,Er()?wn.now():Date.now())}function on(e,t){if(e.appContext.config.performance&&Er()){const n=`vue-${t}-${e.uid}`,o=n+":end";wn.mark(o),wn.measure(`<${Qr(e,e.type)}> ${t}`,n,o),wn.clearMarks(n),wn.clearMarks(o)}Hm(e,t,Er()?wn.now():Date.now())}function Er(){return Ds!==void 0||(typeof window<"u"&&window.performance?(Ds=!0,wn=window.performance):Ds=!1),Ds}function $y(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Qe=Wm;function Ry(e){return Ay(e)}function Ay(e,t){$y();const n=op();n.__VUE__=!0,Ap(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:o,remove:r,patchProp:l,createElement:i,createText:a,createComment:c,setText:u,setElementText:p,parentNode:d,nextSibling:f,setScopeId:m=ht,insertStaticContent:y}=e,g=(F,_,E,P=null,O=null,j=null,q=!1,M=null,D=$n?!1:!!_.dynamicChildren)=>{if(F===_)return;F&&!Cn(F,_)&&(P=G(F),dt(F,O,j,!0),F=null),_.patchFlag===-2&&(D=!1,_.dynamicChildren=null);const{type:H,ref:ee,shapeFlag:Q}=_;switch(H){case Vo:v(F,_,E,P);break;case Ge:x(F,_,E,P);break;case pr:F==null?b(_,E,P,q):k(F,_,E,q);break;case Ee:ce(F,_,E,P,O,j,q,M,D);break;default:Q&1?I(F,_,E,P,O,j,q,M,D):Q&6?Oe(F,_,E,P,O,j,q,M,D):Q&64||Q&128?H.process(F,_,E,P,O,j,q,M,D,we):L("Invalid VNode type:",H,`(${typeof H})`)}ee!=null&&O&&ei(ee,F&&F.ref,j,_||F,!_)},v=(F,_,E,P)=>{if(F==null)o(_.el=a(_.children),E,P);else{const O=_.el=F.el;_.children!==F.children&&u(O,_.children)}},x=(F,_,E,P)=>{F==null?o(_.el=c(_.children||""),E,P):_.el=F.el},b=(F,_,E,P)=>{[F.el,F.anchor]=y(F.children,_,E,P,F.el,F.anchor)},k=(F,_,E,P)=>{if(_.children!==F.children){const O=f(F.anchor);T(F),[_.el,_.anchor]=y(_.children,E,O,P)}else _.el=F.el,_.anchor=F.anchor},S=({el:F,anchor:_},E,P)=>{let O;for(;F&&F!==_;)O=f(F),o(F,E,P),F=O;o(_,E,P)},T=({el:F,anchor:_})=>{let E;for(;F&&F!==_;)E=f(F),r(F),F=E;r(_)},I=(F,_,E,P,O,j,q,M,D)=>{q=q||_.type==="svg",F==null?V(_,E,P,O,j,q,M,D):Z(F,_,O,j,q,M,D)},V=(F,_,E,P,O,j,q,M)=>{let D,H;const{type:ee,props:Q,shapeFlag:se,transition:fe,dirs:xe}=F;if(D=F.el=i(F.type,j,Q&&Q.is,Q),se&8?p(D,F.children):se&16&&N(F.children,D,null,P,O,j&&ee!=="foreignObject",q,M),xe&&Mn(F,null,P,"created"),A(D,F,F.scopeId,q,P),Q){for(const Le in Q)Le!=="value"&&!ar(Le)&&l(D,Le,null,Q[Le],j,F.children,P,O,U);"value"in Q&&l(D,"value",null,Q.value),(H=Q.onVnodeBeforeMount)&&At(H,P,F)}Object.defineProperty(D,"__vnode",{value:F,enumerable:!1}),Object.defineProperty(D,"__vueParentComponent",{value:P,enumerable:!1}),xe&&Mn(F,null,P,"beforeMount");const Be=(!O||O&&!O.pendingBranch)&&fe&&!fe.persisted;Be&&fe.beforeEnter(D),o(D,_,E),((H=Q&&Q.onVnodeMounted)||Be||xe)&&Qe(()=>{H&&At(H,P,F),Be&&fe.enter(D),xe&&Mn(F,null,P,"mounted")},O)},A=(F,_,E,P,O)=>{if(E&&m(F,E),P)for(let j=0;j<P.length;j++)m(F,P[j]);if(O){let j=O.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=Lp(j.children)||j),_===j){const q=O.vnode;A(F,q,q.scopeId,q.slotScopeIds,O.parent)}}},N=(F,_,E,P,O,j,q,M,D=0)=>{for(let H=D;H<F.length;H++){const ee=F[H]=M?bn(F[H]):Nt(F[H]);g(null,ee,_,E,P,O,j,q,M)}},Z=(F,_,E,P,O,j,q)=>{const M=_.el=F.el;let{patchFlag:D,dynamicChildren:H,dirs:ee}=_;D|=F.patchFlag&16;const Q=F.props||Ie,se=_.props||Ie;let fe;E&&jn(E,!1),(fe=se.onVnodeBeforeUpdate)&&At(fe,E,_,F),ee&&Mn(_,F,E,"beforeUpdate"),E&&jn(E,!0),$n&&(D=0,q=!1,H=null);const xe=O&&_.type!=="foreignObject";if(H?(ae(F.dynamicChildren,H,M,E,P,xe,j),E&&E.type.__hmrId&&ro(F,_)):q||ve(F,_,M,null,E,P,xe,j,!1),D>0){if(D&16)X(M,_,Q,se,E,P,O);else if(D&2&&Q.class!==se.class&&l(M,"class",null,se.class,O),D&4&&l(M,"style",Q.style,se.style,O),D&8){const Be=_.dynamicProps;for(let Le=0;Le<Be.length;Le++){const We=Be[Le],Bt=Q[We],ms=se[We];(ms!==Bt||We==="value")&&l(M,We,Bt,ms,O,F.children,E,P,U)}}D&1&&F.children!==_.children&&p(M,_.children)}else!q&&H==null&&X(M,_,Q,se,E,P,O);((fe=se.onVnodeUpdated)||ee)&&Qe(()=>{fe&&At(fe,E,_,F),ee&&Mn(_,F,E,"updated")},P)},ae=(F,_,E,P,O,j,q)=>{for(let M=0;M<_.length;M++){const D=F[M],H=_[M],ee=D.el&&(D.type===Ee||!Cn(D,H)||D.shapeFlag&70)?d(D.el):E;g(D,H,ee,null,P,O,j,q,!0)}},X=(F,_,E,P,O,j,q)=>{if(E!==P){if(E!==Ie)for(const M in E)!ar(M)&&!(M in P)&&l(F,M,E[M],null,q,_.children,O,j,U);for(const M in P){if(ar(M))continue;const D=P[M],H=E[M];D!==H&&M!=="value"&&l(F,M,H,D,q,_.children,O,j,U)}"value"in P&&l(F,"value",E.value,P.value)}},ce=(F,_,E,P,O,j,q,M,D)=>{const H=_.el=F?F.el:a(""),ee=_.anchor=F?F.anchor:a("");let{patchFlag:Q,dynamicChildren:se,slotScopeIds:fe}=_;($n||Q&2048)&&(Q=0,D=!1,se=null),fe&&(M=M?M.concat(fe):fe),F==null?(o(H,E,P),o(ee,E,P),N(_.children,E,ee,O,j,q,M,D)):Q>0&&Q&64&&se&&F.dynamicChildren?(ae(F.dynamicChildren,se,E,O,j,q,M),O&&O.type.__hmrId?ro(F,_):(_.key!=null||O&&_===O.subTree)&&ro(F,_,!0)):ve(F,_,E,ee,O,j,q,M,D)},Oe=(F,_,E,P,O,j,q,M,D)=>{_.slotScopeIds=M,F==null?_.shapeFlag&512?O.ctx.activate(_,E,P,q,D):qe(_,E,P,O,j,q,D):He(F,_,D)},qe=(F,_,E,P,O,j,q)=>{const M=F.component=Dy(F,P,O);if(M.type.__hmrId&&Em(M),cr(F),sn(M,"mount"),No(F)&&(M.ctx.renderer=we),sn(M,"init"),Uy(M),on(M,"init"),M.asyncDep){if(O&&O.registerDep(M,z),!F.el){const D=M.subTree=J(Ge);x(null,D,_,E)}return}z(M,F,_,E,O,j,q),ur(),on(M,"mount")},He=(F,_,E)=>{const P=_.component=F.component;if(Jm(F,_,E))if(P.asyncDep&&!P.asyncResolved){cr(_),oe(P,_,E),ur();return}else P.next=_,Cm(P.update),P.update();else _.el=F.el,P.vnode=_},z=(F,_,E,P,O,j,q)=>{const M=()=>{if(F.isMounted){let{next:ee,bu:Q,u:se,parent:fe,vnode:xe}=F,Be=ee,Le;cr(ee||F.vnode),jn(F,!1),ee?(ee.el=xe.el,oe(F,ee,q)):ee=xe,Q&&xn(Q),(Le=ee.props&&ee.props.onVnodeBeforeUpdate)&&At(Le,fe,ee,xe),jn(F,!0),sn(F,"render");const We=il(F);on(F,"render");const Bt=F.subTree;F.subTree=We,sn(F,"patch"),g(Bt,We,d(Bt.el),G(Bt),F,O,j),on(F,"patch"),ee.el=We.el,Be===null&&qm(F,We.el),se&&Qe(se,O),(Le=ee.props&&ee.props.onVnodeUpdated)&&Qe(()=>At(Le,fe,ee,xe),O),Tp(F),ur()}else{let ee;const{el:Q,props:se}=_,{bm:fe,m:xe,parent:Be}=F,Le=$s(_);if(jn(F,!1),fe&&xn(fe),!Le&&(ee=se&&se.onVnodeBeforeMount)&&At(ee,Be,_),jn(F,!0),Q&&ue){const We=()=>{sn(F,"render"),F.subTree=il(F),on(F,"render"),sn(F,"hydrate"),ue(Q,F.subTree,F,O,null),on(F,"hydrate")};Le?_.type.__asyncLoader().then(()=>!F.isUnmounted&&We()):We()}else{sn(F,"render");const We=F.subTree=il(F);on(F,"render"),sn(F,"patch"),g(null,We,E,P,F,O,j),on(F,"patch"),_.el=We.el}if(xe&&Qe(xe,O),!Le&&(ee=se&&se.onVnodeMounted)){const We=_;Qe(()=>At(ee,Be,We),O)}(_.shapeFlag&256||Be&&$s(Be.vnode)&&Be.vnode.shapeFlag&256)&&F.a&&Qe(F.a,O),F.isMounted=!0,Wl(F),_=E=P=null}},D=F.effect=new Ji(M,()=>qr(H),F.scope),H=F.update=()=>D.run();H.id=F.uid,jn(F,!0),D.onTrack=F.rtc?ee=>xn(F.rtc,ee):void 0,D.onTrigger=F.rtg?ee=>xn(F.rtg,ee):void 0,H.ownerInstance=F,H()},oe=(F,_,E)=>{_.component=F;const P=F.vnode.props;F.vnode=_,F.next=null,Fy(F,_.props,P,E),Cy(F,_.children,E),cs(),qa(),us()},ve=(F,_,E,P,O,j,q,M,D=!1)=>{const H=F&&F.children,ee=F?F.shapeFlag:0,Q=_.children,{patchFlag:se,shapeFlag:fe}=_;if(se>0){if(se&128){vt(H,Q,E,P,O,j,q,M,D);return}else if(se&256){Pe(H,Q,E,P,O,j,q,M,D);return}}fe&8?(ee&16&&U(H,O,j),Q!==H&&p(E,Q)):ee&16?fe&16?vt(H,Q,E,P,O,j,q,M,D):U(H,O,j,!0):(ee&8&&p(E,""),fe&16&&N(Q,E,P,O,j,q,M,D))},Pe=(F,_,E,P,O,j,q,M,D)=>{F=F||Ss,_=_||Ss;const H=F.length,ee=_.length,Q=Math.min(H,ee);let se;for(se=0;se<Q;se++){const fe=_[se]=D?bn(_[se]):Nt(_[se]);g(F[se],fe,E,null,O,j,q,M,D)}H>ee?U(F,O,j,!0,!1,Q):N(_,E,P,O,j,q,M,D,Q)},vt=(F,_,E,P,O,j,q,M,D)=>{let H=0;const ee=_.length;let Q=F.length-1,se=ee-1;for(;H<=Q&&H<=se;){const fe=F[H],xe=_[H]=D?bn(_[H]):Nt(_[H]);if(Cn(fe,xe))g(fe,xe,E,null,O,j,q,M,D);else break;H++}for(;H<=Q&&H<=se;){const fe=F[Q],xe=_[se]=D?bn(_[se]):Nt(_[se]);if(Cn(fe,xe))g(fe,xe,E,null,O,j,q,M,D);else break;Q--,se--}if(H>Q){if(H<=se){const fe=se+1,xe=fe<ee?_[fe].el:P;for(;H<=se;)g(null,_[H]=D?bn(_[H]):Nt(_[H]),E,xe,O,j,q,M,D),H++}}else if(H>se)for(;H<=Q;)dt(F[H],O,j,!0),H++;else{const fe=H,xe=H,Be=new Map;for(H=xe;H<=se;H++){const lt=_[H]=D?bn(_[H]):Nt(_[H]);lt.key!=null&&(Be.has(lt.key)&&L("Duplicate keys found during update:",JSON.stringify(lt.key),"Make sure keys are unique."),Be.set(lt.key,H))}let Le,We=0;const Bt=se-xe+1;let ms=!1,La=0;const Ns=new Array(Bt);for(H=0;H<Bt;H++)Ns[H]=0;for(H=fe;H<=Q;H++){const lt=F[H];if(We>=Bt){dt(lt,O,j,!0);continue}let Jt;if(lt.key!=null)Jt=Be.get(lt.key);else for(Le=xe;Le<=se;Le++)if(Ns[Le-xe]===0&&Cn(lt,_[Le])){Jt=Le;break}Jt===void 0?dt(lt,O,j,!0):(Ns[Jt-xe]=H+1,Jt>=La?La=Jt:ms=!0,g(lt,_[Jt],E,null,O,j,q,M,D),We++)}const Ia=ms?Ty(Ns):Ss;for(Le=Ia.length-1,H=Bt-1;H>=0;H--){const lt=xe+H,Jt=_[lt],Ha=lt+1<ee?_[lt+1].el:P;Ns[H]===0?g(null,Jt,E,Ha,O,j,q,M,D):ms&&(Le<0||H!==Ia[Le]?nt(Jt,E,Ha,2):Le--)}}},nt=(F,_,E,P,O=null)=>{const{el:j,type:q,transition:M,children:D,shapeFlag:H}=F;if(H&6){nt(F.component.subTree,_,E,P);return}if(H&128){F.suspense.move(_,E,P);return}if(H&64){q.move(F,_,E,we);return}if(q===Ee){o(j,_,E);for(let Q=0;Q<D.length;Q++)nt(D[Q],_,E,P);o(F.anchor,_,E);return}if(q===pr){S(F,_,E);return}if(P!==2&&H&1&&M)if(P===0)M.beforeEnter(j),o(j,_,E),Qe(()=>M.enter(j),O);else{const{leave:Q,delayLeave:se,afterLeave:fe}=M,xe=()=>o(j,_,E),Be=()=>{Q(j,()=>{xe(),fe&&fe()})};se?se(j,xe,Be):Be()}else o(j,_,E)},dt=(F,_,E,P=!1,O=!1)=>{const{type:j,props:q,ref:M,children:D,dynamicChildren:H,shapeFlag:ee,patchFlag:Q,dirs:se}=F;if(M!=null&&ei(M,null,E,F,!0),ee&256){_.ctx.deactivate(F);return}const fe=ee&1&&se,xe=!$s(F);let Be;if(xe&&(Be=q&&q.onVnodeBeforeUnmount)&&At(Be,_,F),ee&6)Y(F.component,E,P);else{if(ee&128){F.suspense.unmount(E,P);return}fe&&Mn(F,null,_,"beforeUnmount"),ee&64?F.type.remove(F,_,E,O,we,P):H&&(j!==Ee||Q>0&&Q&64)?U(H,_,E,!1,!0):(j===Ee&&Q&384||!O&&ee&16)&&U(D,_,E),P&&mn(F)}(xe&&(Be=q&&q.onVnodeUnmounted)||fe)&&Qe(()=>{Be&&At(Be,_,F),fe&&Mn(F,null,_,"unmounted")},E)},mn=F=>{const{type:_,el:E,anchor:P,transition:O}=F;if(_===Ee){F.patchFlag>0&&F.patchFlag&2048&&O&&!O.persisted?F.children.forEach(q=>{q.type===Ge?r(q.el):mn(q)}):$(E,P);return}if(_===pr){T(F);return}const j=()=>{r(E),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(F.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:M}=O,D=()=>q(E,j);M?M(F.el,j,D):D()}else j()},$=(F,_)=>{let E;for(;F!==_;)E=f(F),r(F),F=E;r(_)},Y=(F,_,E)=>{F.type.__hmrId&&$m(F);const{bum:P,scope:O,update:j,subTree:q,um:M}=F;P&&xn(P),O.stop(),j&&(j.active=!1,dt(q,F,_,E)),M&&Qe(M,_),Qe(()=>{F.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&F.asyncDep&&!F.asyncResolved&&F.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),Lm(F)},U=(F,_,E,P=!1,O=!1,j=0)=>{for(let q=j;q<F.length;q++)dt(F[q],_,E,P,O)},G=F=>F.shapeFlag&6?G(F.component.subTree):F.shapeFlag&128?F.suspense.next():f(F.anchor||F.el),_e=(F,_,E)=>{F==null?_._vnode&&dt(_._vnode,null,null,!0):g(_._vnode||null,F,_,null,null,null,E),qa(),Ep(),_._vnode=F},we={p:g,um:dt,m:nt,r:mn,mt:qe,mc:N,pc:ve,pbc:ae,n:G,o:e};let de,ue;return t&&([de,ue]=t(we)),{render:_e,hydrate:de,createApp:Ey(_e,de)}}function jn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ro(e,t,n=!1){const o=e.children,r=t.children;if(re(o)&&re(r))for(let l=0;l<o.length;l++){const i=o[l];let a=r[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[l]=bn(r[l]),a.el=i.el),n||ro(i,a)),a.type===Vo&&(a.el=i.el),a.type===Ge&&!a.el&&(a.el=i.el)}}function Ty(e){const t=e.slice(),n=[0];let o,r,l,i,a;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){t[o]=r,n.push(o);continue}for(l=0,i=n.length-1;l<i;)a=l+i>>1,e[n[a]]<u?l=a+1:i=a;u<e[n[l]]&&(l>0&&(t[o]=n[l-1]),n[l]=o)}}for(l=n.length,i=n[l-1];l-- >0;)n[l]=i,i=t[i];return n}const Oy=e=>e.__isTeleport,Rs=e=>e&&(e.disabled||e.disabled===""),oc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ti=(e,t)=>{const n=e&&e.to;if(Me(n))if(t){const o=t(n);return o||L(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return L("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Rs(e)&&L(`Invalid Teleport target: ${n}`),n},Py={__isTeleport:!0,process(e,t,n,o,r,l,i,a,c,u){const{mc:p,pc:d,pbc:f,o:{insert:m,querySelector:y,createText:g,createComment:v}}=u,x=Rs(t.props);let{shapeFlag:b,children:k,dynamicChildren:S}=t;if($n&&(c=!1,S=null),e==null){const T=t.el=v("teleport start"),I=t.anchor=v("teleport end");m(T,n,o),m(I,n,o);const V=t.target=ti(t.props,y),A=t.targetAnchor=g("");V?(m(A,V),i=i||oc(V)):x||L("Invalid Teleport target on mount:",V,`(${typeof V})`);const N=(Z,ae)=>{b&16&&p(k,Z,ae,r,l,i,a,c)};x?N(n,I):V&&N(V,A)}else{t.el=e.el;const T=t.anchor=e.anchor,I=t.target=e.target,V=t.targetAnchor=e.targetAnchor,A=Rs(e.props),N=A?n:I,Z=A?T:V;if(i=i||oc(I),S?(f(e.dynamicChildren,S,N,r,l,i,a),ro(e,t,!0)):c||d(e,t,N,Z,r,l,i,a,!1),x)A||tr(t,n,T,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ae=t.target=ti(t.props,y);ae?tr(t,ae,null,u,0):L("Invalid Teleport target on update:",I,`(${typeof I})`)}else A&&tr(t,I,V,u,1)}td(t)},remove(e,t,n,o,{um:r,o:{remove:l}},i){const{shapeFlag:a,children:c,anchor:u,targetAnchor:p,target:d,props:f}=e;if(d&&l(p),(i||!Rs(f))&&(l(u),a&16))for(let m=0;m<c.length;m++){const y=c[m];r(y,t,n,!0,!!y.dynamicChildren)}},move:tr,hydrate:Ly};function tr(e,t,n,{o:{insert:o},m:r},l=2){l===0&&o(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:u,props:p}=e,d=l===2;if(d&&o(i,t,n),(!d||Rs(p))&&c&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);d&&o(a,t,n)}function Ly(e,t,n,o,r,l,{o:{nextSibling:i,parentNode:a,querySelector:c}},u){const p=t.target=ti(t.props,c);if(p){const d=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Rs(t.props))t.anchor=u(i(e),t,a(e),n,o,r,l),t.targetAnchor=d;else{t.anchor=i(e);let f=d;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,p._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(d,t,p,n,o,r,l)}td(t)}return t.anchor&&i(t.anchor)}const Iy=Py;function td(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ee=Symbol("Fragment"),Vo=Symbol("Text"),Ge=Symbol("Comment"),pr=Symbol("Static"),lo=[];let Dt=null;function C(e=!1){lo.push(Dt=e?null:[])}function Hy(){lo.pop(),Dt=lo[lo.length-1]||null}let xo=1;function rc(e){xo+=e}function nd(e){return e.dynamicChildren=xo>0?Dt||Ss:null,Hy(),xo>0&&Dt&&Dt.push(e),e}function B(e,t,n,o,r,l){return nd(s(e,t,n,o,r,l,!0))}function te(e,t,n,o,r){return nd(J(e,t,n,o,r,!0))}function Gt(e){return e?e.__v_isVNode===!0:!1}function Cn(e,t){return t.shapeFlag&6&&_s.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const By=(...e)=>My(...e),Zr="__vInternal",sd=({key:e})=>e??null,dr=({ref:e,ref_key:t,ref_for:n})=>e!=null?Me(e)||Ae(e)||pe(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,o=0,r=null,l=e===Ee?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sd(t),ref:t&&dr(t),scopeId:Xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ke};return a?(oa(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),c.key!==c.key&&L("VNode created with invalid key (NaN). VNode type:",c.type),xo>0&&!i&&Dt&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Dt.push(c),c}const J=By;function My(e,t=null,n=null,o=0,r=null,l=!1){if((!e||e===ry)&&(e||L(`Invalid vnode type when creating vnode: ${e}.`),e=Ge),Gt(e)){const a=Vt(e,t,!0);return n&&oa(a,n),xo>0&&!l&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(e)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(ad(e)&&(e=e.__vccOpts),t){t=De(t);let{class:a,style:c}=t;a&&!Me(a)&&(t.class=Se(a)),Te(c)&&(Ul(c)&&!re(c)&&(c=Ne({},c)),t.style=ot(c))}const i=Me(e)?1:Ip(e)?128:Oy(e)?64:Te(e)?4:pe(e)?2:0;return i&4&&Ul(e)&&(e=he(e),L("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,t,n,o,r,i,l,!0)}function De(e){return e?Ul(e)||Zr in e?Ne({},e):e:null}function Vt(e,t,n=!1){const{props:o,ref:r,patchFlag:l,children:i}=e,a=t?gt(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&sd(a),ref:t&&t.ref?n&&r?re(r)?r.concat(dr(t)):[r,dr(t)]:dr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&re(i)?i.map(od):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function od(e){const t=Vt(e);return re(e.children)&&(t.children=e.children.map(od)),t}function h(e=" ",t=0){return J(Vo,null,e,t)}function me(e="",t=!1){return t?(C(),te(Ge,null,e)):J(Ge,null,e)}function Nt(e){return e==null||typeof e=="boolean"?J(Ge):re(e)?J(Ee,null,e.slice()):typeof e=="object"?bn(e):J(Vo,null,String(e))}function bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function oa(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(re(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),oa(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Zr in t)?t._ctx=Ke:r===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),o&64?(n=16,t=[h(t)]):n=8);e.children=t,e.shapeFlag|=n}function gt(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Se([t.class,o.class]));else if(r==="style")t.style=ot([t.style,o.style]);else if(Bo(r)){const l=t[r],i=o[r];i&&l!==i&&!(re(l)&&l.includes(i))&&(t[r]=l?[].concat(l,i):i)}else r!==""&&(t[r]=o[r])}return t}function At(e,t,n,o=null){Pt(e,t,7,[n,o])}const jy=ed();let Ny=0;function Dy(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||jy,l={uid:Ny++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kp(o,r),emitsOptions:Pp(o,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:o.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=ly(l),l.root=t?t.root:l,l.emit=Mm.bind(null,l),e.ce&&e.ce(l),l}let Ve=null;const $t=()=>Ve||Ke,Ls=e=>{Ve=e,e.scope.on()},os=()=>{Ve&&Ve.scope.off(),Ve=null},Vy=Bn("slot,component");function ni(e,t){const n=t.isNativeTag||ep;(Vy(e)||n(e))&&L("Do not use built-in or reserved HTML elements as component id: "+e)}function rd(e){return e.vnode.shapeFlag&4}let wo=!1;function Uy(e,t=!1){wo=t;const{props:n,children:o}=e.vnode,r=rd(e);my(e,n,r,t),wy(e,o);const l=r?Jy(e,t):void 0;return wo=!1,l}function Jy(e,t){var n;const o=e.type;{if(o.name&&ni(o.name,e.appContext.config),o.components){const l=Object.keys(o.components);for(let i=0;i<l.length;i++)ni(l[i],e.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let i=0;i<l.length;i++)Up(l[i])}o.compilerOptions&&qy()&&L('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Ur(new Proxy(e.ctx,Wp)),iy(e);const{setup:r}=o;if(r){const l=e.setupContext=r.length>1?id(e):null;Ls(e),cs();const i=un(r,e,0,[xs(e.props),l]);if(us(),os(),ji(i)){if(i.then(os,os),t)return i.then(a=>{lc(e,a,t)}).catch(a=>{Jr(a,e,0)});if(e.asyncDep=i,!e.suspense){const a=(n=o.name)!==null&&n!==void 0?n:"Anonymous";L(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else lc(e,i,t)}else ld(e,t)}function lc(e,t,n){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Te(t)?(Gt(t)&&L("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=bp(t),ay(e)):t!==void 0&&L(`setup() should return an object. Received: ${t===null?"null":typeof t}`),ld(e,n)}let si;const qy=()=>!si;function ld(e,t,n){const o=e.type;if(!e.render){if(!t&&si&&!o.render){const r=o.template||na(e).template;if(r){sn(e,"compile");const{isCustomElement:l,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=o,u=Ne(Ne({isCustomElement:l,delimiters:a},i),c);o.render=si(r,u),on(e,"compile")}}e.render=o.render||ht}Ls(e),cs(),uy(e),us(),os(),!o.render&&e.render===ht&&!t&&(o.template?L('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):L("Component is missing template or render function."))}function Wy(e){return new Proxy(e.attrs,{get(t,n){return wr(),yt(e,"get","$attrs"),t[n]},set(){return L("setupContext.attrs is readonly."),!1},deleteProperty(){return L("setupContext.attrs is readonly."),!1}})}function id(e){const t=o=>{if(e.exposed&&L("expose() should be called only once per setup()."),o!=null){let r=typeof o;r==="object"&&(re(o)?r="array":Ae(o)&&(r="ref")),r!=="object"&&L(`expose() should be passed a plain object, received ${r}.`)}e.exposed=o||{}};let n;return Object.freeze({get attrs(){return n||(n=Wy(e))},get slots(){return xs(e.slots)},get emit(){return(o,...r)=>e.emit(o,...r)},expose:t})}function Gr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(bp(Ur(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ss)return ss[n](e)},has(t,n){return n in t||n in ss}}))}const Xy=/(?:^|[-_])(\w)/g,zy=e=>e.replace(Xy,t=>t.toUpperCase()).replace(/[-_]/g,"");function Co(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function Qr(e,t,n=!1){let o=Co(t);if(!o&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(o=r[1])}if(!o&&e&&e.parent){const r=l=>{for(const i in l)if(l[i]===t)return i};o=r(e.components||e.parent.type.components)||r(e.appContext.components)}return o?zy(o):n?"App":"Anonymous"}function ad(e){return pe(e)&&"__vccOpts"in e}const R=(e,t)=>ym(e,t,wo);function Ky(){return Yy().slots}function Yy(){const e=$t();return e||L("useContext() called without active instance."),e.setupContext||(e.setupContext=id(e))}function Ze(e,t,n){const o=arguments.length;return o===2?Te(t)&&!re(t)?Gt(t)?J(e,null,[t]):J(e,t):J(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Gt(n)&&(n=[n]),J(e,t,n))}const Zy=Symbol("ssrContext"),Gy=()=>{{const e=K(Zy);return e||L("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function dl(e){return!!(e&&e.__v_isShallow)}function Qy(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},r={header(d){return Te(d)?d.__isVue?["div",e,"VueInstance"]:Ae(d)?["div",{},["span",e,p(d)],"<",a(d.value),">"]:ts(d)?["div",{},["span",e,dl(d)?"ShallowReactive":"Reactive"],"<",a(d),`>${In(d)?" (readonly)":""}`]:In(d)?["div",{},["span",e,dl(d)?"ShallowReadonly":"Readonly"],"<",a(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...l(d.$)]}};function l(d){const f=[];d.type.props&&d.props&&f.push(i("props",he(d.props))),d.setupState!==Ie&&f.push(i("setup",d.setupState)),d.data!==Ie&&f.push(i("data",he(d.data)));const m=c(d,"computed");m&&f.push(i("computed",m));const y=c(d,"inject");return y&&f.push(i("injected",y)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function i(d,f){return f=Ne({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",o,m+": "],a(f[m],!1)])]]:["span",{}]}function a(d,f=!0){return typeof d=="number"?["span",t,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",o,d]:Te(d)?["object",{object:f?he(d):d}]:["span",n,String(d)]}function c(d,f){const m=d.type;if(pe(m))return;const y={};for(const g in d.ctx)u(m,g,f)&&(y[g]=d.ctx[g]);return y}function u(d,f,m){const y=d[m];if(re(y)&&y.includes(f)||Te(y)&&f in y||d.extends&&u(d.extends,f,m)||d.mixins&&d.mixins.some(g=>u(g,f,m)))return!0}function p(d){return dl(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const $r="3.2.47",eF="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,ic=Xn&&Xn.createElement("template"),tF={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?Xn.createElementNS(eF,e):Xn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,l){const i=n?n.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===l||!(r=r.nextSibling)););else{ic.innerHTML=o?`<svg>${e}</svg>`:e;const a=ic.content;if(o){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function nF(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function sF(e,t,n){const o=e.style,r=Me(n);if(n&&!r){if(t&&!Me(t))for(const l in t)n[l]==null&&oi(o,l,"");for(const l in n)oi(o,l,n[l])}else{const l=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=l)}}const oF=/[^\\];\s*$/,ac=/\s*!important$/;function oi(e,t,n){if(re(n))n.forEach(o=>oi(e,t,o));else if(n==null&&(n=""),oF.test(n)&&L(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const o=rF(e,t);ac.test(n)?e.setProperty(dn(o),n.replace(ac,""),"important"):e[o]=n}}const cc=["Webkit","Moz","ms"],fl={};function rF(e,t){const n=fl[t];if(n)return n;let o=Yt(t);if(o!=="filter"&&o in e)return fl[t]=o;o=is(o);for(let r=0;r<cc.length;r++){const l=cc[r]+o;if(l in e)return fl[t]=l}return t}const uc="http://www.w3.org/1999/xlink";function lF(e,t,n,o,r){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(uc,t.slice(6,t.length)):e.setAttributeNS(uc,t,n);else{const l=Eh(t);n==null||l&&!Gu(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function iF(e,t,n,o,r,l,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,r,l),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Gu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch(c){a||L(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,c)}a&&e.removeAttribute(t)}function bs(e,t,n,o){e.addEventListener(t,n,o)}function aF(e,t,n,o){e.removeEventListener(t,n,o)}function cF(e,t,n,o,r=null){const l=e._vei||(e._vei={}),i=l[t];if(o&&i)i.value=o;else{const[a,c]=uF(t);if(o){const u=l[t]=fF(o,r);bs(e,a,u,c)}else i&&(aF(e,a,i,c),l[t]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function uF(e){let t;if(pc.test(e)){t={};let o;for(;o=e.match(pc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):dn(e.slice(2)),t]}let hl=0;const pF=Promise.resolve(),dF=()=>hl||(pF.then(()=>hl=0),hl=Date.now());function fF(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Pt(hF(o,n.value),t,5,[o])};return n.value=e,n.attached=dF(),n}function hF(e,t){if(re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const dc=/^on[a-z]/,mF=(e,t,n,o,r=!1,l,i,a,c)=>{t==="class"?nF(e,o,r):t==="style"?sF(e,n,o):Bo(t)?vr(t)||cF(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yF(e,t,o,r))?iF(e,t,o,l,i,a,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),lF(e,t,o,r))};function yF(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&dc.test(t)&&pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||dc.test(t)&&Me(n)?!1:t in e}const Fn="transition",Vs="animation",cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},FF=Ne({},Km.props,cd),Nn=(e,t=[])=>{re(e)?e.forEach(n=>n(...t)):e&&e(...t)},fc=e=>e?re(e)?e.some(t=>t.length>1):e.length>1:!1;function gF(e){const t={};for(const X in e)X in cd||(t[X]=e[X]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:l=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:u=i,appearToClass:p=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,y=vF(r),g=y&&y[0],v=y&&y[1],{onBeforeEnter:x,onEnter:b,onEnterCancelled:k,onLeave:S,onLeaveCancelled:T,onBeforeAppear:I=x,onAppear:V=b,onAppearCancelled:A=k}=t,N=(X,ce,Oe)=>{vn(X,ce?p:a),vn(X,ce?u:i),Oe&&Oe()},Z=(X,ce)=>{X._isLeaving=!1,vn(X,d),vn(X,m),vn(X,f),ce&&ce()},ae=X=>(ce,Oe)=>{const qe=X?V:b,He=()=>N(ce,X,Oe);Nn(qe,[ce,He]),hc(()=>{vn(ce,X?c:l),rn(ce,X?p:a),fc(qe)||mc(ce,o,g,He)})};return Ne(t,{onBeforeEnter(X){Nn(x,[X]),rn(X,l),rn(X,i)},onBeforeAppear(X){Nn(I,[X]),rn(X,c),rn(X,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(X,ce){X._isLeaving=!0;const Oe=()=>Z(X,ce);rn(X,d),pd(),rn(X,f),hc(()=>{X._isLeaving&&(vn(X,d),rn(X,m),fc(S)||mc(X,o,v,Oe))}),Nn(S,[X,Oe])},onEnterCancelled(X){N(X,!1),Nn(k,[X])},onAppearCancelled(X){N(X,!0),Nn(A,[X])},onLeaveCancelled(X){Z(X),Nn(T,[X])}})}function vF(e){if(e==null)return null;if(Te(e))return[ml(e.enter),ml(e.leave)];{const t=ml(e);return[t,t]}}function ml(e){const t=Lh(e);return bm(t,"<transition> explicit duration"),t}function rn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function vn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function hc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _F=0;function mc(e,t,n,o){const r=e._endId=++_F,l=()=>{r===e._endId&&o()};if(n)return setTimeout(l,n);const{type:i,timeout:a,propCount:c}=ud(e,t);if(!i)return o();const u=i+"end";let p=0;const d=()=>{e.removeEventListener(u,f),l()},f=m=>{m.target===e&&++p>=c&&d()};setTimeout(()=>{p<c&&d()},a+1),e.addEventListener(u,f)}function ud(e,t){const n=window.getComputedStyle(e),o=y=>(n[y]||"").split(", "),r=o(`${Fn}Delay`),l=o(`${Fn}Duration`),i=yc(r,l),a=o(`${Vs}Delay`),c=o(`${Vs}Duration`),u=yc(a,c);let p=null,d=0,f=0;t===Fn?i>0&&(p=Fn,d=i,f=l.length):t===Vs?u>0&&(p=Vs,d=u,f=c.length):(d=Math.max(i,u),p=d>0?i>u?Fn:Vs:null,f=p?p===Fn?l.length:c.length:0);const m=p===Fn&&/\b(transform|all)(,|$)/.test(o(`${Fn}Property`).toString());return{type:p,timeout:d,propCount:f,hasTransform:m}}function yc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Fc(n)+Fc(e[o])))}function Fc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function pd(){return document.body.offsetHeight}const dd=new WeakMap,fd=new WeakMap,hd={name:"TransitionGroup",props:Ne({},FF,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=$t(),o=Bp();let r,l;return Kr(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!SF(r[0].el,n.vnode.el,i))return;r.forEach(xF),r.forEach(wF);const a=r.filter(CF);pd(),a.forEach(c=>{const u=c.el,p=u.style;rn(u,i),p.transform=p.webkitTransform=p.transitionDuration="";const d=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,vn(u,i))};u.addEventListener("transitionend",d)})}),()=>{const i=he(e),a=gF(i);let c=i.tag||Ee;r=l,l=t.default?ea(t.default()):[];for(let u=0;u<l.length;u++){const p=l[u];p.key!=null?Ps(p,ko(p,a,o,n)):L("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const p=r[u];Ps(p,ko(p,a,o,n)),dd.set(p,p.el.getBoundingClientRect())}return J(c,null,l)}}},bF=e=>delete e.mode;hd.props;const kF=hd;function xF(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function wF(e){fd.set(e,e.el.getBoundingClientRect())}function CF(e){const t=dd.get(e),n=fd.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${r}px)`,l.transitionDuration="0s",e}}function SF(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&o.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(o);const{hasTransform:l}=ud(o);return r.removeChild(o),l}const gc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return re(t)?n=>xn(t,n):t};function EF(e){e.target.composing=!0}function vc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const $F={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=gc(r);const l=o||r.props&&r.props.type==="number";bs(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),l&&(a=Ml(a)),e._assign(a)}),n&&bs(e,"change",()=>{e.value=e.value.trim()}),t||(bs(e,"compositionstart",EF),bs(e,"compositionend",vc),bs(e,"change",vc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},l){if(e._assign=gc(l),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(r||e.type==="number")&&Ml(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},RF={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_c=(e,t)=>n=>{if(!("key"in n))return;const o=dn(n.key);if(t.some(r=>r===o||RF[r]===o))return e(n)},md={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Us(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Us(e,!0),o.enter(e)):o.leave(e,()=>{Us(e,!1)}):Us(e,t))},beforeUnmount(e,{value:t}){Us(e,t)}};function Us(e,t){e.style.display=t?e._vod:"none"}const AF=Ne({patchProp:mF},tF);let bc;function TF(){return bc||(bc=Ry(AF))}const OF=(...e)=>{const t=TF().createApp(...e);PF(t),LF(t);const{mount:n}=t;return t.mount=o=>{const r=IF(o);if(!r)return;const l=t._component;!pe(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function PF(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Zu(t)||Ch(t),writable:!1})}function LF(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){L("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return L(o),n},set(){L(o)}})}}function IF(e){if(Me(e)){const t=document.querySelector(e);return t||L(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&L('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function HF(){Qy()}HF();function ri(e,t={},n){for(const o in e){const r=e[o],l=n?`${n}:${o}`:o;typeof r=="object"&&r!==null?ri(r,t,l):typeof r=="function"&&(t[l]=r)}return t}const BF={run:e=>e()},MF=()=>BF,yd=typeof console.createTask<"u"?console.createTask:MF;function jF(e,t){const n=t.shift(),o=yd(n);return e.reduce((r,l)=>r.then(()=>o.run(()=>l(...t))),Promise.resolve())}function NF(e,t){const n=t.shift(),o=yd(n);return Promise.all(e.map(r=>o.run(()=>r(...t))))}function yl(e,t){for(const n of[...e])n(t)}class DF{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,o={}){if(!t||typeof n!="function")return()=>{};const r=t;let l;for(;this._deprecatedHooks[t];)l=this._deprecatedHooks[t],t=l.to;if(l&&!o.allowDeprecated){let i=l.message;i||(i=`${r} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let o,r=(...l)=>(typeof o=="function"&&o(),o=void 0,r=void 0,n(...l));return o=this.hook(t,r),o}removeHook(t,n){if(this._hooks[t]){const o=this._hooks[t].indexOf(n);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const o=this._hooks[t]||[];delete this._hooks[t];for(const r of o)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=ri(t),o=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of o.splice(0,o.length))r()}}removeHooks(t){const n=ri(t);for(const o in n)this.removeHook(o,n[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(jF,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(NF,t,...n)}callHookWith(t,n,...o){const r=this._before||this._after?{name:n,args:o,context:{}}:void 0;this._before&&yl(this._before,r);const l=t(n in this._hooks?[...this._hooks[n]]:[],o);return l instanceof Promise?l.finally(()=>{this._after&&r&&yl(this._after,r)}):(this._after&&r&&yl(this._after,r),l)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function VF(){return new DF}function UF(e){return Array.isArray(e)?e:[e]}const Fd=["title","script","style","noscript"],JF=["base","meta","link","style","script","noscript"],qF=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],WF=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],XF=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function gd(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function li(e){return gd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function zF(e){let t=9;for(const n of e)for(let o=0;o<n.length;)t=Math.imul(t^n.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function vd(e,t){const{props:n,tag:o}=e;if(WF.includes(o))return o;if(o==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];o==="meta"&&r.push("name","property","http-equiv");for(const l of r)if(typeof n[l]<"u"){const i=String(n[l]);return t&&!t(i)?!1:`${o}:${l}:${i}`}return!1}const kc=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e,nr=(e,t=!1,n)=>{const{tag:o,$el:r}=e;r&&(Object.entries(o.props).forEach(([l,i])=>{i=String(i);const a=`attr:${l}`;if(l==="class"){if(!i)return;for(const c of i.split(" ")){const u=`${a}:${c}`;n&&n(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!l.startsWith("data-h-")&&n(e,a,()=>r.removeAttribute(l)),(t||r.getAttribute(l)!==i)&&r.setAttribute(l,i)}),Fd.includes(o.tag)&&(o.textContent&&o.textContent!==r.textContent?r.textContent=o.textContent:o.innerHTML&&o.innerHTML!==r.innerHTML&&(r.innerHTML=o.innerHTML)))};let Js=!1;async function _d(e,t={}){var f,m;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,r=(await e.resolveTags()).map(a);if(e.resolvedOptions.experimentalHashHydration&&(Js=Js||e._hash||!1,Js)){const y=zF(r.map(g=>g.tag._h));if(Js===y)return;Js=y}const l=e._popSideEffectQueue();e.headEntries().map(y=>y._sde).forEach(y=>{Object.entries(y).forEach(([g,v])=>{l[g]=v})});const i=(y,g,v)=>{g=`${y.renderId}:${g}`,y.entry&&(y.entry._sde[g]=v),delete l[g]};function a(y){const g=e.headEntries().find(x=>x._i===y._e),v={renderId:!y.key&&y._d?y._d:li(y),$el:null,shouldRender:!0,tag:y,entry:g,markSideEffect:(x,b)=>i(v,x,b)};return v}const c=[],u={body:[],head:[]},p=y=>{e._elMap[y.renderId]=y.$el,c.push(y),i(y,"el",()=>{var g;(g=y.$el)==null||g.remove(),delete e._elMap[y.renderId]})};for(const y of r){if(await e.hooks.callHook("dom:beforeRenderTag",y),!y.shouldRender)continue;const{tag:g}=y;if(g.tag==="title"){o.title=g.textContent||"",c.push(y);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){y.$el=o[g.tag==="htmlAttrs"?"documentElement":"body"],nr(y,!1,i),c.push(y);continue}if(y.$el=e._elMap[y.renderId],!y.$el&&g.key&&(y.$el=o.querySelector(`${(f=g.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),y.$el){y.tag._d&&nr(y),p(y);continue}u[(m=g.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(y)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([y,g])=>{var x;if(!g.length)return;const v=(x=o==null?void 0:o[y])==null?void 0:x.children;if(v){for(const b of[...v].reverse()){const k=b.tagName.toLowerCase();if(!JF.includes(k))continue;const S=b.getAttributeNames().reduce((A,N)=>({...A,[N]:b.getAttribute(N)}),{}),T={tag:k,props:S};b.innerHTML&&(T.innerHTML=b.innerHTML);const I=li(T);let V=g.findIndex(A=>(A==null?void 0:A.renderId)===I);if(V===-1){const A=vd(T);V=g.findIndex(N=>(N==null?void 0:N.tag._d)&&N.tag._d===A)}if(V!==-1){const A=g[V];A.$el=b,nr(A),p(A),delete g[V]}}g.forEach(b=>{const k=b.tag.tagPosition||"head";d[k]=d[k]||o.createDocumentFragment(),b.$el||(b.$el=o.createElement(b.tag.tag),nr(b,!0)),d[k].appendChild(b.$el),p(b)})}}),d.head&&o.head.appendChild(d.head),d.bodyOpen&&o.body.insertBefore(d.bodyOpen,o.body.firstChild),d.bodyClose&&o.body.appendChild(d.bodyClose);for(const y of c)await e.hooks.callHook("dom:renderTag",y);Object.values(l).forEach(y=>y())}let Fl=null;async function bd(e,t={}){function n(){return Fl=null,_d(e,t)}const o=t.delayFn||(r=>setTimeout(r,10));return Fl=Fl||new Promise(r=>o(()=>r(n())))}const KF=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),bd(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}});function YF(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const xc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in xc?xc[t]:10}const ZF=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function GF(){return{hooks:{"tags:resolve":e=>{const t=n=>{var o;return(o=e.tags.find(r=>r._d===n))==null?void 0:o._p};for(const{prefix:n,offset:o}of ZF)for(const r of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(n))){const l=t(r.tagPriority.replace(n,""));typeof l<"u"&&(r._p=l+o)}e.tags.sort((n,o)=>n._p-o._p).sort((n,o)=>wc(n)-wc(o))}}}}const QF=()=>({hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(r=>r.tag==="titleTemplate");const o=t.findIndex(r=>r.tag==="title");if(o!==-1&&n!==-1){const r=kc(t[n].textContent,t[o].textContent);r!==null?t[o].textContent=r||t[o].textContent:delete t[o]}else if(n!==-1){const r=kc(t[n].textContent);r!==null&&(t[n].textContent=r,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}),eg=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),tg=["link","style","script","noscript"],ng=()=>({hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=li(e)),e.key&&tg.includes(e.tag)&&(e._h=gd(e.key),e.props[`data-h-${e._h}`]="")}}}),Cc=["script","link","bodyAttrs"],sg=()=>{const e=(t,n)=>{const o={},r={};Object.entries(n.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?r[i]=a:o[i]=a});let l;return t==="dom"&&n.tag==="script"&&typeof o.src=="string"&&typeof r.onload<"u"&&(l=o.src,delete o.src),{props:o,eventHandlers:r,delayedSrc:l}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Cc.includes(n.tag)||!Object.entries(n.props).find(([o,r])=>o.startsWith("on")&&typeof r=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Cc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([l,i])=>l.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:o,delayedSrc:r}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=n,t.tag._eventHandlers=o,t.tag._delayedSrc=r)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([r,l])=>{const i=`${t.tag._d||t.tag._p}:${r}`,a=r.slice(2).toLowerCase(),c=`data-h-${a}`;if(t.markSideEffect(i,()=>{}),n.hasAttribute(c))return;const u=l;n.setAttribute(c,""),o.addEventListener(a,u),t.entry&&(t.entry._sde[i]=()=>{o.removeEventListener(a,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}},og=["templateParams","htmlAttrs","bodyAttrs"],rg=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(n=>{e.props[n]&&(e.key=e.props[n],delete e.props[n])});const t=e.key?`${e.tag}:${e.key}`:vd(e);t&&(e._d=t)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const r=o._d||o._p,l=t[r];if(l){let i=o==null?void 0:o.tagDuplicateStrategy;if(!i&&og.includes(o.tag)&&(i="merge"),i==="merge"){const c=l.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),t[r].props={...c,...o.props};return}else if(o._e===l._e){l._duped=l._duped||[],o._d=`${l._d}:${l._duped.length+1}`,l._duped.push(o);return}const a=Object.keys(o.props).length;if((a===0||a===1&&typeof o.props["data-h-key"]<"u")&&!o.innerHTML&&!o.textContent){delete t[r];return}}t[r]=o});const n=[];Object.values(t).forEach(o=>{const r=o._duped;delete o._duped,n.push(o),r&&n.push(...r)}),e.tags=n}}});function sr(e,t){function n(l){if(["s","pageTitle"].includes(l))return t.pageTitle;let i;return l.includes(".")?i=l.split(".").reduce((a,c)=>a&&a[c]||void 0,t):i=t[l],typeof i<"u"?i||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const i=n(l.slice(1));typeof i=="string"&&(e=e.replaceAll(new RegExp(`\\${l}(\\W|$)`,"g"),`${i}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function lg(){return{hooks:{"tags:resolve":e=>{var l;const{tags:t}=e,n=(l=t.find(i=>i.tag==="title"))==null?void 0:l.textContent,o=t.findIndex(i=>i.tag==="templateParams"),r=o!==-1?t[o].props:{};r.pageTitle=r.pageTitle||n||"";for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=sr(i.textContent,r);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=sr(i.props.content,r);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=sr(i.props.href,r);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(a,c)=>typeof c=="string"?sr(c,r):c)}catch{}e.tags=t.filter(i=>i.tag!=="templateParams")}}}}const ig=typeof window<"u";let kd;const ag=e=>kd=e,cg=()=>kd;async function ug(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await dg(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(o=>XF.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Fd.includes(n.tag))&&(n[o]=n.props[o]),delete n.props[o]}),["innerHTML","textContent"].forEach(o=>{if(n.tag==="script"&&typeof n[o]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[o]=JSON.parse(n[o])}catch{n[o]=""}typeof n[o]=="object"&&(n[o]=JSON.stringify(n[o]))}),n.props.class&&(n.props.class=pg(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(o=>({...n,props:{...n.props,content:o}})):n)}function pg(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function dg(e,t){for(const n of Object.keys(t)){const o=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=o?"true":"":String(t[n])==="false"&&(o?t[n]="false":delete t[n])}return t}const fg=10;async function hg(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,o])=>typeof o<"u"&&qF.includes(n)).forEach(([n,o])=>{const r=UF(o);t.push(...r.map(l=>ug(n,l)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,o)=>(n._e=e._i,n._p=(e._i<<fg)+o,n))}const mg=()=>[rg(),GF(),lg(),QF(),ng(),sg(),eg()],yg=(e={})=>[KF({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function Fg(e={}){const t=gg({...e,plugins:[...yg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=YF(t.resolvedOptions.document)),ag(t),t}function gg(e={}){let t=[],n={},o=0;const r=VF();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...mg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks)),e.document=e.document||(ig?document:void 0);const l=()=>r.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,c){const u={_i:o++,input:a,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),l(),{dispose(){t=t.filter(p=>p._i!==u._i?!0:(n={...n,...p._sde||{}},p._sde={},l(),!1))},patch(p){t=t.map(d=>(d._i===u._i&&(u.input=d.input=p,l()),d))}}},async resolveTags(){const a={tags:[],entries:[...t]};await r.callHook("entries:resolve",a);for(const c of a.entries){const u=c._t||(p=>p);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const p of await hg(c)){const d={tag:p,entry:c,resolvedOptions:i.resolvedOptions};await r.callHook("tag:normalise",d),a.tags.push(d.tag)}}return await r.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return i.hooks.callHook("init",i),i}function vg(e){return typeof e=="function"?e():w(e)}function Rr(e,t=""){if(e instanceof Promise)return e;const n=vg(e);return!e||!n?n:Array.isArray(n)?n.map(o=>Rr(o,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,r])=>o==="titleTemplate"||o.startsWith("on")?[o,w(r)]:[o,Rr(r,o)])):n}const _g=$r.startsWith("3"),bg=typeof window<"u",xd="usehead";function ra(){return $t()&&K(xd)||cg()}function kg(e){return{install(n){_g&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(xd,e))}}.install}function xg(e={}){const t=Fg({...e,domDelayFn:n=>setTimeout(()=>et(()=>n()),10),plugins:[wg(),...(e==null?void 0:e.plugins)||[]]});return t.install=kg(t),t}const wg=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Rr(t.input)}}});function Cg(e,t={}){const n=ra(),o=W(!1),r=W({});ps(()=>{r.value=o.value?{}:Rr(e)});const l=n.push(r.value,t);return Fe(r,a=>{l.patch(a)}),$t()&&(Do(()=>{l.dispose()}),Dp(()=>{o.value=!0}),Np(()=>{o.value=!1})),l}function Sg(e,t={}){return ra().push(e,t)}function la(e,t={}){var o;const n=ra();if(n){const r=bg||!!((o=n.resolvedOptions)!=null&&o.document);return t.mode==="server"&&r||t.mode==="client"&&!r?void 0:r?Cg(e,t):Sg(e,t)}}const Eg=e=>la({htmlAttrs:e});function $g(e,t){const n=xg(t||{}),o={unhead:n,install(r){$r.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,l){return n.push(r,l)},addEntry(r,l){return n.push(r,l)},addHeadObjs(r,l){return n.push(r,l)},addReactiveEntry(r,l){const i=la(r,l);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,l){l?_d(n,{document:r}):bd(n,{delayFn:i=>setTimeout(()=>i(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=o.addHeadObjs,n.updateDOM=o.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const l of o.hooks["before:dom"])l()===!1&&(r.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const io=Symbol("v-click-clicks"),zn=Symbol("v-click-clicks-elements"),ii=Symbol("v-click-clicks-order-map"),ao=Symbol("v-click-clicks-disabled"),wd=Symbol("slidev-slide-scale"),le=Symbol("slidev-slidev-context"),Rg=Symbol("slidev-route"),Ag=Symbol("slidev-slide-context"),Wn="slidev-vclick-target",gl="slidev-vclick-hidden",Tg="slidev-vclick-fade",vl="slidev-vclick-hidden-explicitly",qs="slidev-vclick-current",or="slidev-vclick-prior",Og=["localhost","127.0.0.1"];let Pg=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function Cd(e){return e=e??[],Array.isArray(e)?e:[e]}function ai(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Lg(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const r=[];let l=t;for(;l<n;)r.push(l),l+=o||1;return r}function Ig(e){return e!=null}function Hg(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(Ig))}const no={theme:"dracula",title:"React Shared",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Nunito Sans","Fira Code"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},hightlighter:"shiki"},$e=no,An=$e.aspectRatio??16/9,Tn=$e.canvasWidth??980,ia=Math.ceil(Tn/An),aa=R(()=>Hg($e.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Ht(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const fs=je({page:0,clicks:0});let Bg=[],Mg=[];Ht(fs,"$syncUp",!0);Ht(fs,"$syncDown",!0);Ht(fs,"$paused",!1);Ht(fs,"$onSet",e=>Bg.push(e));Ht(fs,"$onPatch",e=>Mg.push(e));Ht(fs,"$patch",async()=>!1);function Sd(e,t,n=!1){const o=[];let r=!1,l=!1,i,a;const c=je(t);function u(m){o.push(m)}function p(m,y){c[m]!==y&&(clearTimeout(i),r=!0,c[m]=y,i=setTimeout(()=>r=!1,0))}function d(m){r||(clearTimeout(a),l=!0,Object.entries(m).forEach(([y,g])=>{c[y]=g}),a=setTimeout(()=>l=!1,0))}function f(m){let y;n?n&&window.addEventListener("storage",v=>{v&&v.key===m&&v.newValue&&d(JSON.parse(v.newValue))}):(y=new BroadcastChannel(m),y.addEventListener("message",v=>d(v.data)));function g(){!n&&y&&!l?y.postMessage(he(c)):n&&!l&&window.localStorage.setItem(m,JSON.stringify(c)),r||o.forEach(v=>v(c))}if(Fe(c,g,{deep:!0}),n){const v=window.localStorage.getItem(m);v&&d(JSON.parse(v))}}return{init:f,onPatch:u,patch:p,state:c}}const{init:jg,onPatch:Ng,patch:Ws,state:_l}=Sd(fs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),hs=je({});let Dg=[],Vg=[];Ht(hs,"$syncUp",!0);Ht(hs,"$syncDown",!0);Ht(hs,"$paused",!1);Ht(hs,"$onSet",e=>Dg.push(e));Ht(hs,"$onPatch",e=>Vg.push(e));Ht(hs,"$patch",async()=>!1);const{init:Ug,onPatch:Jg,patch:Ed,state:Ar}=Sd(hs,{},!1),qg="modulepreload",Wg=function(e){return"/react-shared-ppt/"+e},Sc={},fr=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Wg(l),l in Sc)return;Sc[l]=!0;const i=l.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!o)for(let p=r.length-1;p>=0;p--){const d=r[p];if(d.href===l&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${a}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":qg,i||(u.as="script",u.crossOrigin=""),u.href=l,document.head.appendChild(u),i)return new Promise((p,d)=>{u.addEventListener("load",p),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var Ec;const Qt=typeof window<"u",Xg=e=>typeof e<"u",zg=Object.prototype.toString,So=e=>typeof e=="function",Kg=e=>typeof e=="number",$d=e=>typeof e=="string",ci=e=>zg.call(e)==="[object Object]",ui=()=>+Date.now(),As=()=>{},Yg=Qt&&((Ec=window==null?void 0:window.navigator)==null?void 0:Ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function en(e){return typeof e=="function"?e():w(e)}function Zg(e,t){function n(...o){return new Promise((r,l)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(l)})}return n}const Rd=e=>e();function Gg(e=Rd){const t=W(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...l)=>{t.value&&e(...l)};return{isActive:zt(t),pause:n,resume:o,eventFilter:r}}function Qg(e){return e}function ev(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?e:l+r}function tv(e,t){let n,o,r;const l=W(!0),i=()=>{l.value=!0,r()};Fe(e,i,{flush:"sync"});const a=So(t)?t:t.get,c=So(t)?void 0:t.set,u=hm((p,d)=>(o=p,r=d,{get(){return l.value&&(n=a(),l.value=!1),o(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function tn(e){return Vi()?(lp(e),!0):!1}function nv(e){if(!Ae(e))return je(e);const t=new Proxy({},{get(n,o,r){return w(Reflect.get(e.value,o,r))},set(n,o,r){return Ae(e.value[o])&&!Ae(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return je(t)}function Ad(e){return typeof e=="function"?R(e):W(e)}function ca(e,t=!0){$t()?ds(e):t?e():et(e)}function sv(e){$t()&&Yr(e)}function ov(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:r=!1}=n;let l=null;const i=W(!1);function a(){l&&(clearInterval(l),l=null)}function c(){i.value=!1,a()}function u(){const p=en(t);p<=0||(i.value=!0,r&&e(),a(),l=setInterval(e,p))}if(o&&Qt&&u(),Ae(t)||So(t)){const p=Fe(t,()=>{i.value&&Qt&&u()});tn(p)}return tn(c),{isActive:i,pause:c,resume:u}}function rv(e,t,n={}){const{immediate:o=!0}=n,r=W(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function a(){r.value=!1,i()}function c(...u){i(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,e(...u)},en(t))}return o&&(r.value=!0,Qt&&c()),tn(a),{isPending:zt(r),start:c,stop:a}}function Td(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,r=Ae(e),l=W(e);function i(a){if(arguments.length)return l.value=a,l.value;{const c=en(n);return l.value=l.value===c?en(o):c,l.value}}return r?i:[l,i]}var $c=Object.getOwnPropertySymbols,lv=Object.prototype.hasOwnProperty,iv=Object.prototype.propertyIsEnumerable,av=(e,t)=>{var n={};for(var o in e)lv.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&$c)for(var o of $c(e))t.indexOf(o)<0&&iv.call(e,o)&&(n[o]=e[o]);return n};function cv(e,t,n={}){const o=n,{eventFilter:r=Rd}=o,l=av(o,["eventFilter"]);return Fe(e,Zg(r,t),l)}var uv=Object.defineProperty,pv=Object.defineProperties,dv=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertySymbols,Od=Object.prototype.hasOwnProperty,Pd=Object.prototype.propertyIsEnumerable,Rc=(e,t,n)=>t in e?uv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fv=(e,t)=>{for(var n in t||(t={}))Od.call(t,n)&&Rc(e,n,t[n]);if(Tr)for(var n of Tr(t))Pd.call(t,n)&&Rc(e,n,t[n]);return e},hv=(e,t)=>pv(e,dv(t)),mv=(e,t)=>{var n={};for(var o in e)Od.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Tr)for(var o of Tr(e))t.indexOf(o)<0&&Pd.call(e,o)&&(n[o]=e[o]);return n};function yv(e,t,n={}){const o=n,{eventFilter:r}=o,l=mv(o,["eventFilter"]),{eventFilter:i,pause:a,resume:c,isActive:u}=Gg(r);return{stop:cv(e,t,hv(fv({},l),{eventFilter:i})),pause:a,resume:c,isActive:u}}function Ct(e){var t;const n=en(e);return(t=n==null?void 0:n.$el)!=null?t:n}const tt=Qt?window:void 0,Ld=Qt?window.document:void 0,Fv=Qt?window.navigator:void 0;function ke(...e){let t,n,o,r;if($d(e[0])||Array.isArray(e[0])?([n,o,r]=e,t=tt):[t,n,o,r]=e,!t)return As;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const l=[],i=()=>{l.forEach(p=>p()),l.length=0},a=(p,d,f,m)=>(p.addEventListener(d,f,m),()=>p.removeEventListener(d,f,m)),c=Fe(()=>[Ct(t),en(r)],([p,d])=>{i(),p&&l.push(...n.flatMap(f=>o.map(m=>a(p,f,m,d))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return tn(u),u}let Ac=!1;function gv(e,t,n={}){const{window:o=tt,ignore:r=[],capture:l=!0,detectIframe:i=!1}=n;if(!o)return;Yg&&!Ac&&(Ac=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",As)));let a=!0;const c=f=>r.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(y=>y===f.target||f.composedPath().includes(y));{const y=Ct(m);return y&&(f.target===y||f.composedPath().includes(y))}}),p=[ke(o,"click",f=>{const m=Ct(e);if(!(!m||m===f.target||f.composedPath().includes(m))){if(f.detail===0&&(a=!c(f)),!a){a=!0;return}t(f)}},{passive:!0,capture:l}),ke(o,"pointerdown",f=>{const m=Ct(e);m&&(a=!f.composedPath().includes(m)&&!c(f))},{passive:!0}),i&&ke(o,"blur",f=>{var m;const y=Ct(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(y!=null&&y.contains(o.document.activeElement))&&t(f)})].filter(Boolean);return()=>p.forEach(f=>f())}const vv=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function _v(...e){let t,n,o={};e.length===3?(t=e[0],n=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],o=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=tt,eventName:l="keydown",passive:i=!1}=o,a=vv(t);return ke(r,l,u=>{a(u)&&n(u)},i)}function bv(e={}){var t;const{window:n=tt}=e,o=(t=e.document)!=null?t:n==null?void 0:n.document,r=tv(()=>null,()=>o==null?void 0:o.activeElement);return n&&(ke(n,"blur",l=>{l.relatedTarget===null&&r.trigger()},!0),ke(n,"focus",r.trigger,!0)),r}function Uo(e,t=!1){const n=W(),o=()=>n.value=!!e();return o(),ca(o,t),n}function ks(e,t={}){const{window:n=tt}=t,o=Uo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const l=W(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},a=()=>{o.value&&(i(),r=n.matchMedia(Ad(e).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",a):r.addListener(a))};return ps(a),tn(()=>i()),l}const kv={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var xv=Object.defineProperty,Tc=Object.getOwnPropertySymbols,wv=Object.prototype.hasOwnProperty,Cv=Object.prototype.propertyIsEnumerable,Oc=(e,t,n)=>t in e?xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sv=(e,t)=>{for(var n in t||(t={}))wv.call(t,n)&&Oc(e,n,t[n]);if(Tc)for(var n of Tc(t))Cv.call(t,n)&&Oc(e,n,t[n]);return e};function Ev(e,t={}){function n(a,c){let u=e[a];return c!=null&&(u=ev(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=tt}=t;function r(a){return o?o.matchMedia(a).matches:!1}const l=a=>ks(`(min-width: ${n(a)})`,t),i=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>l(c),enumerable:!0,configurable:!0}),a),{});return Sv({greater(a){return ks(`(min-width: ${n(a,.1)})`,t)},greaterOrEqual:l,smaller(a){return ks(`(max-width: ${n(a,-.1)})`,t)},smallerOrEqual(a){return ks(`(max-width: ${n(a)})`,t)},between(a,c){return ks(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(a){return r(`(min-width: ${n(a,.1)})`)},isGreaterOrEqual(a){return r(`(min-width: ${n(a)})`)},isSmaller(a){return r(`(max-width: ${n(a,-.1)})`)},isSmallerOrEqual(a){return r(`(max-width: ${n(a)})`)},isInBetween(a,c){return r(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`)}},i)}function $v(e={}){const{navigator:t=Fv,read:n=!1,source:o,copiedDuring:r=1500,legacy:l=!1}=e,i=["copy","cut"],a=Uo(()=>t&&"clipboard"in t),c=R(()=>a.value||l),u=W(""),p=W(!1),d=rv(()=>p.value=!1,r);function f(){a.value?t.clipboard.readText().then(v=>{u.value=v}):u.value=g()}if(c.value&&n)for(const v of i)ke(v,f);async function m(v=en(o)){c.value&&v!=null&&(a.value?await t.clipboard.writeText(v):y(v),u.value=v,p.value=!0,d.start())}function y(v){const x=document.createElement("textarea");x.value=v??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function g(){var v,x,b;return(b=(x=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:x.toString())!=null?b:""}return{isSupported:c,text:u,copied:p,copy:m}}function Rv(e){return JSON.parse(JSON.stringify(e))}const pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},di="__vueuse_ssr_handlers__";pi[di]=pi[di]||{};const Av=pi[di];function Tv(e,t){return Av[e]||t}function Ov(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Pv=Object.defineProperty,Pc=Object.getOwnPropertySymbols,Lv=Object.prototype.hasOwnProperty,Iv=Object.prototype.propertyIsEnumerable,Lc=(e,t,n)=>t in e?Pv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ic=(e,t)=>{for(var n in t||(t={}))Lv.call(t,n)&&Lc(e,n,t[n]);if(Pc)for(var n of Pc(t))Iv.call(t,n)&&Lc(e,n,t[n]);return e};const Hv={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Hc="vueuse-storage";function Bv(e,t,n,o={}){var r;const{flush:l="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:d=tt,eventFilter:f,onError:m=A=>{console.error(A)}}=o,y=(p?Zt:W)(t);if(!n)try{n=Tv("getDefaultStorage",()=>{var A;return(A=tt)==null?void 0:A.localStorage})()}catch(A){m(A)}if(!n)return y;const g=en(t),v=Ov(g),x=(r=o.serializer)!=null?r:Hv[v],{pause:b,resume:k}=yv(y,()=>S(y.value),{flush:l,deep:i,eventFilter:f});return d&&a&&(ke(d,"storage",V),ke(d,Hc,I)),V(),y;function S(A){try{if(A==null)n.removeItem(e);else{const N=x.write(A),Z=n.getItem(e);Z!==N&&(n.setItem(e,N),d&&d.dispatchEvent(new CustomEvent(Hc,{detail:{key:e,oldValue:Z,newValue:N,storageArea:n}})))}}catch(N){m(N)}}function T(A){const N=A?A.newValue:n.getItem(e);if(N==null)return c&&g!==null&&n.setItem(e,x.write(g)),g;if(!A&&u){const Z=x.read(N);return So(u)?u(Z,g):v==="object"&&!Array.isArray(Z)?Ic(Ic({},g),Z):Z}else return typeof N!="string"?N:x.read(N)}function I(A){V(A.detail)}function V(A){if(!(A&&A.storageArea!==n)){if(A&&A.key==null){y.value=g;return}if(!(A&&A.key!==e)){b();try{y.value=T(A)}catch(N){m(N)}finally{A?et(k):k()}}}}}function Mv(e){return ks("(prefers-color-scheme: dark)",e)}var Bc=Object.getOwnPropertySymbols,jv=Object.prototype.hasOwnProperty,Nv=Object.prototype.propertyIsEnumerable,Dv=(e,t)=>{var n={};for(var o in e)jv.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Bc)for(var o of Bc(e))t.indexOf(o)<0&&Nv.call(e,o)&&(n[o]=e[o]);return n};function Vv(e,t,n={}){const o=n,{window:r=tt}=o,l=Dv(o,["window"]);let i;const a=Uo(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},u=Fe(()=>Ct(e),d=>{c(),a.value&&r&&d&&(i=new ResizeObserver(t),i.observe(d,l))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return tn(p),{isSupported:a,stop:p}}function Uv(e,t={}){const{immediate:n=!0,window:o=tt}=t,r=W(!1);let l=0,i=null;function a(p){if(!r.value||!o)return;const d=p-l;e({delta:d,timestamp:p}),l=p,i=o.requestAnimationFrame(a)}function c(){!r.value&&o&&(r.value=!0,i=o.requestAnimationFrame(a))}function u(){r.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return n&&c(),tn(u),{isActive:zt(r),pause:u,resume:c}}function Jv(e,t={width:0,height:0},n={}){const{window:o=tt,box:r="content-box"}=n,l=R(()=>{var c,u;return(u=(c=Ct(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),i=W(t.width),a=W(t.height);return Vv(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&l.value){const p=Ct(e);if(p){const d=o.getComputedStyle(p);i.value=parseFloat(d.width),a.value=parseFloat(d.height)}}else if(u){const p=Array.isArray(u)?u:[u];i.value=p.reduce((d,{inlineSize:f})=>d+f,0),a.value=p.reduce((d,{blockSize:f})=>d+f,0)}else i.value=c.contentRect.width,a.value=c.contentRect.height},n),Fe(()=>Ct(e),c=>{i.value=c?t.width:0,a.value=c?t.height:0}),{width:i,height:a}}const Mc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function qv(e,t={}){const{document:n=Ld,autoExit:o=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),l=W(!1);let i=Mc[0];const a=Uo(()=>{if(n){for(const g of Mc)if(g[1]in n)return i=g,!0}else return!1;return!1}),[c,u,p,,d]=i;async function f(){a.value&&(n!=null&&n[p]&&await n[u](),l.value=!1)}async function m(){if(!a.value)return;await f();const g=Ct(r);g&&(await g[c](),l.value=!0)}async function y(){l.value?await f():await m()}return n&&ke(n,d,()=>{l.value=!!(n!=null&&n[p])},!1),o&&tn(f),{isSupported:a,isFullscreen:l,enter:m,exit:f,toggle:y}}function Wv(e,t,n={}){const{root:o,rootMargin:r="0px",threshold:l=.1,window:i=tt}=n,a=Uo(()=>i&&"IntersectionObserver"in i);let c=As;const u=a.value?Fe(()=>({el:Ct(e),root:Ct(o)}),({el:d,root:f})=>{if(c(),!d)return;const m=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:l});m.observe(d),c=()=>{m.disconnect(),c=As}},{immediate:!0,flush:"post"}):As,p=()=>{c(),u()};return tn(p),{isSupported:a,stop:p}}function Ut(e,t,n={}){const{window:o=tt}=n;return Bv(e,t,o==null?void 0:o.localStorage,n)}const Xv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function zv(e={}){const{reactive:t=!1,target:n=tt,aliasMap:o=Xv,passive:r=!0,onEventFired:l=As}=e,i=je(new Set),a={toJSON(){return{}},current:i},c=t?je(a):a,u=new Set,p=new Set;function d(g,v){g in c&&(t?c[g]=v:c[g].value=v)}function f(){i.clear();for(const g of p)d(g,!1)}function m(g,v){var x,b;const k=(x=g.key)==null?void 0:x.toLowerCase(),T=[(b=g.code)==null?void 0:b.toLowerCase(),k].filter(Boolean);k&&(v?i.add(k):i.delete(k));for(const I of T)p.add(I),d(I,v);k==="meta"&&!v?(u.forEach(I=>{i.delete(I),d(I,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&v&&[...i,...T].forEach(I=>u.add(I))}ke(n,"keydown",g=>(m(g,!0),l(g)),{passive:r}),ke(n,"keyup",g=>(m(g,!1),l(g)),{passive:r}),ke("blur",f,{passive:!0}),ke("focus",f,{passive:!0});const y=new Proxy(c,{get(g,v,x){if(typeof v!="string")return Reflect.get(g,v,x);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in c))if(/[+_-]/.test(v)){const k=v.split(/[+_-]/g).map(S=>S.trim());c[v]=R(()=>k.every(S=>w(y[S])))}else c[v]=W(!1);const b=Reflect.get(g,v,x);return t?w(b):b}});return y}function gR(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:l=tt,eventFilter:i}=e,a=W(r.x),c=W(r.y),u=W(null),p=g=>{t==="page"?(a.value=g.pageX,c.value=g.pageY):t==="client"?(a.value=g.clientX,c.value=g.clientY):t==="movement"&&(a.value=g.movementX,c.value=g.movementY),u.value="mouse"},d=()=>{a.value=r.x,c.value=r.y},f=g=>{if(g.touches.length>0){const v=g.touches[0];t==="page"?(a.value=v.pageX,c.value=v.pageY):t==="client"&&(a.value=v.clientX,c.value=v.clientY),u.value="touch"}},m=g=>i===void 0?p(g):i(()=>p(g),{}),y=g=>i===void 0?f(g):i(()=>f(g),{});return l&&(ke(l,"mousemove",m,{passive:!0}),ke(l,"dragover",m,{passive:!0}),n&&t!=="movement"&&(ke(l,"touchstart",y,{passive:!0}),ke(l,"touchmove",y,{passive:!0}),o&&ke(l,"touchend",d,{passive:!0}))),{x:a,y:c,sourceType:u}}var cn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(cn||(cn={}));function Kv(e,t={}){const n=Ad(e),{threshold:o=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:i}=t,a=je({x:0,y:0}),c=(I,V)=>{a.x=I,a.y=V},u=je({x:0,y:0}),p=(I,V)=>{u.x=I,u.y=V},d=R(()=>a.x-u.x),f=R(()=>a.y-u.y),{max:m,abs:y}=Math,g=R(()=>m(y(d.value),y(f.value))>=o),v=W(!1),x=W(!1),b=R(()=>g.value?y(d.value)>y(f.value)?d.value>0?cn.LEFT:cn.RIGHT:f.value>0?cn.UP:cn.DOWN:cn.NONE),k=I=>{var V,A,N;const Z=I.buttons===0,ae=I.buttons===1;return(N=(A=(V=t.pointerTypes)==null?void 0:V.includes(I.pointerType))!=null?A:Z||ae)!=null?N:!0},S=[ke(e,"pointerdown",I=>{var V,A;if(!k(I))return;x.value=!0,(A=(V=n.value)==null?void 0:V.style)==null||A.setProperty("touch-action","none");const N=I.target;N==null||N.setPointerCapture(I.pointerId);const{clientX:Z,clientY:ae}=I;c(Z,ae),p(Z,ae),i==null||i(I)}),ke(e,"pointermove",I=>{if(!k(I)||!x.value)return;const{clientX:V,clientY:A}=I;p(V,A),!v.value&&g.value&&(v.value=!0),v.value&&(r==null||r(I))}),ke(e,"pointerup",I=>{var V,A;k(I)&&(v.value&&(l==null||l(I,b.value)),x.value=!1,v.value=!1,(A=(V=n.value)==null?void 0:V.style)==null||A.setProperty("touch-action","initial"))})],T=()=>S.forEach(I=>I());return{isSwiping:zt(v),direction:zt(b),posStart:zt(a),posEnd:zt(u),distanceX:d,distanceY:f,stop:T}}let Yv=0;function vR(e,t={}){const n=W(!1),{document:o=Ld,immediate:r=!0,manual:l=!1,id:i=`vueuse_styletag_${++Yv}`}=t,a=W(e);let c=()=>{};const u=()=>{if(!o)return;const d=o.getElementById(i)||o.createElement("style");d.isConnected||(d.type="text/css",d.id=i,t.media&&(d.media=t.media),o.head.appendChild(d)),!n.value&&(c=Fe(a,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},p=()=>{!o||!n.value||(c(),o.head.removeChild(o.getElementById(i)),n.value=!1)};return r&&!l&&ca(u),l||tn(p),{id:i,css:a,unload:p,load:u,isLoaded:zt(n)}}var Zv=Object.defineProperty,jc=Object.getOwnPropertySymbols,Gv=Object.prototype.hasOwnProperty,Qv=Object.prototype.propertyIsEnumerable,Nc=(e,t,n)=>t in e?Zv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,e1=(e,t)=>{for(var n in t||(t={}))Gv.call(t,n)&&Nc(e,n,t[n]);if(jc)for(var n of jc(t))Qv.call(t,n)&&Nc(e,n,t[n]);return e};function _R(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:r="requestAnimationFrame",callback:l}=e,i=W(ui()+n),a=()=>i.value=ui()+n,c=l?()=>{a(),l(i.value)}:a,u=r==="requestAnimationFrame"?Uv(c,{immediate:o}):ov(c,r,{immediate:o});return t?e1({timestamp:i},u):i}var t1=Object.defineProperty,Dc=Object.getOwnPropertySymbols,n1=Object.prototype.hasOwnProperty,s1=Object.prototype.propertyIsEnumerable,Vc=(e,t,n)=>t in e?t1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o1=(e,t)=>{for(var n in t||(t={}))n1.call(t,n)&&Vc(e,n,t[n]);if(Dc)for(var n of Dc(t))s1.call(t,n)&&Vc(e,n,t[n]);return e};const r1={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};o1({linear:Qg},r1);function Kt(e,t,n,o={}){var r,l,i;const{clone:a=!1,passive:c=!1,eventName:u,deep:p=!1,defaultValue:d}=o,f=$t(),m=n||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((i=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:i.bind(f==null?void 0:f.proxy));let y=u;t||(t="modelValue"),y=u||y||`update:${t.toString()}`;const g=x=>a?So(a)?a(x):Rv(x):x,v=()=>Xg(e[t])?g(e[t]):d;if(c){const x=v(),b=W(x);return Fe(()=>e[t],k=>b.value=g(k)),Fe(b,k=>{(k!==e[t]||p)&&m(y,k)},{deep:p}),b}else return R({get(){return v()},set(x){m(y,x)}})}function bR({window:e=tt}={}){if(!e)return W(!1);const t=W(e.document.hasFocus());return ke(e,"blur",()=>{t.value=!1}),ke(e,"focus",()=>{t.value=!0}),t}function l1(e={}){const{window:t=tt,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=e,i=W(n),a=W(o),c=()=>{t&&(l?(i.value=t.innerWidth,a.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return c(),ca(c),ke("resize",c,{passive:!0}),r&&ke("orientationchange",c,{passive:!0}),{width:i,height:a}}function i1(){return Id().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Id(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const a1=typeof Proxy=="function",c1="devtools-plugin:setup",u1="plugin:settings:set";let ys,fi;function p1(){var e;return ys!==void 0||(typeof window<"u"&&window.performance?(ys=!0,fi=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ys=!0,fi=global.perf_hooks.performance):ys=!1),ys}function d1(){return p1()?fi.now():Date.now()}class f1{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const o={};if(t.settings)for(const i in t.settings){const a=t.settings[i];o[i]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const i=localStorage.getItem(r),a=JSON.parse(i);Object.assign(l,a)}catch{}this.fallbacks={getSettings(){return l},setSettings(i){try{localStorage.setItem(r,JSON.stringify(i))}catch{}l=i},now(){return d1()}},n&&n.on(u1,(i,a)=>{i===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(i,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(i,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function h1(e,t){const n=e,o=Id(),r=i1(),l=a1&&n.enableEarlyProxy;if(r&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))r.emit(c1,e,t);else{const i=l?new f1(n,r):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof window<"u";function m1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Re=Object.assign;function bl(e,t){const n={};for(const o in t){const r=t[o];n[o]=Et(r)?r.map(e):e(r)}return n}const co=()=>{},Et=Array.isArray;function Ce(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const y1=/\/$/,F1=e=>e.replace(y1,"");function kl(e,t,n="/"){let o,r={},l="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(o=t.slice(0,c),l=t.slice(c+1,a>-1?a:t.length),r=e(l)),a>-1&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=_1(o??t,n),{fullPath:o+(l&&"?")+l+i,path:o,query:r,hash:i}}function g1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Uc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Jc(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&Hn(t.matched[o],n.matched[r])&&Hd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Hn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!v1(e[n],t[n]))return!1;return!0}function v1(e,t){return Et(e)?qc(e,t):Et(t)?qc(t,e):e===t}function qc(e,t){return Et(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function _1(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ce(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r=n.length-1,l,i;for(l=0;l<o.length;l++)if(i=o[l],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var Eo;(function(e){e.pop="pop",e.push="push"})(Eo||(Eo={}));var uo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(uo||(uo={}));function b1(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),F1(e)}const k1=/^[^#]+#/;function x1(e,t){return e.replace(k1,"#")+t}function w1(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const el=()=>({left:window.pageXOffset,top:window.pageYOffset});function C1(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(o&&l){Ce(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ce(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){Ce(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=w1(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Wc(e,t){return(history.state?history.state.position-t:-1)+e}const hi=new Map;function S1(e,t){hi.set(e,t)}function E1(e){const t=hi.get(e);return hi.delete(e),t}let $1=()=>location.protocol+"//"+location.host;function Bd(e,t){const{pathname:n,search:o,hash:r}=t,l=e.indexOf("#");if(l>-1){let a=r.includes(e.slice(l))?e.slice(l).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Uc(c,"")}return Uc(n,e)+o+r}function R1(e,t,n,o){let r=[],l=[],i=null;const a=({state:f})=>{const m=Bd(e,location),y=n.value,g=t.value;let v=0;if(f){if(n.value=m,t.value=f,i&&i===y){i=null;return}v=g?f.position-g.position:0}else o(m);r.forEach(x=>{x(n.value,y,{delta:v,type:Eo.pop,direction:v?v>0?uo.forward:uo.back:uo.unknown})})};function c(){i=n.value}function u(f){r.push(f);const m=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return l.push(m),m}function p(){const{history:f}=window;f.state&&f.replaceState(Re({},f.state,{scroll:el()}),"")}function d(){for(const f of l)f();l=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:d}}function Xc(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?el():null}}function A1(e){const{history:t,location:n}=window,o={value:Bd(e,n)},r={value:t.state};r.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,p){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:$1()+e+c;try{t[p?"replaceState":"pushState"](u,"",f),r.value=u}catch(m){Ce("Error with push/replace State",m),n[p?"replace":"assign"](f)}}function i(c,u){const p=Re({},t.state,Xc(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});l(c,p,!0),o.value=c}function a(c,u){const p=Re({},r.value,t.state,{forward:c,scroll:el()});t.state||Ce(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(p.current,p,!0);const d=Re({},Xc(o.value,c,null),{position:p.position+1},u);l(c,d,!1),o.value=c}return{location:o,state:r,push:a,replace:i}}function T1(e){e=b1(e);const t=A1(e),n=R1(e,t.state,t.location,t.replace);function o(l,i=!0){i||n.pauseListeners(),history.go(l)}const r=Re({location:"",base:e,go:o,createHref:x1.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function O1(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&Ce(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),T1(e)}function P1(e){return typeof e=="string"||e&&typeof e=="object"}function Md(e){return typeof e=="string"||typeof e=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jd=Symbol("navigation failure");var zc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(zc||(zc={}));const L1={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${H1(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Is(e,t){return Re(new Error(L1[e](t)),{type:e,[jd]:!0},t)}function nn(e,t){return e instanceof Error&&jd in e&&(t==null||!!(e.type&t))}const I1=["params","query","hash"];function H1(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of I1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const Kc="[^/]+?",B1={sensitive:!1,strict:!1,start:!0,end:!0},M1=/[.+*?^${}()[\]/\\]/g;function j1(e,t){const n=Re({},B1,t),o=[];let r=n.start?"^":"";const l=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(M1,"\\$&"),m+=40;else if(f.type===1){const{value:y,repeatable:g,optional:v,regexp:x}=f;l.push({name:y,repeatable:g,optional:v});const b=x||Kc;if(b!==Kc){m+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${y}" (${b}): `+S.message)}}let k=g?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(k=v&&u.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),r+=k,m+=20,v&&(m+=-8),g&&(m+=-20),b===".*"&&(m+=-50)}p.push(m)}o.push(p)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(u){const p=u.match(i),d={};if(!p)return null;for(let f=1;f<p.length;f++){const m=p[f]||"",y=l[f-1];d[y.name]=m&&y.repeatable?m.split("/"):m}return d}function c(u){let p="",d=!1;for(const f of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const m of f)if(m.type===0)p+=m.value;else if(m.type===1){const{value:y,repeatable:g,optional:v}=m,x=y in u?u[y]:"";if(Et(x)&&!g)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const b=Et(x)?x.join("/"):x;if(!b)if(v)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);p+=b}}return p||"/"}return{re:i,score:o,keys:l,parse:a,stringify:c}}function N1(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function D1(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const l=N1(o[n],r[n]);if(l)return l;n++}if(Math.abs(r.length-o.length)===1){if(Yc(o))return 1;if(Yc(r))return-1}return r.length-o.length}function Yc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const V1={type:0,value:""},U1=/[a-zA-Z0-9_]/;function J1(e){if(!e)return[[]];if(e==="/")return[[V1]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,o=n;const r=[];let l;function i(){l&&r.push(l),l=[]}let a=0,c,u="",p="";function d(){u&&(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),i()):c===":"?(d(),n=1):f();break;case 4:f(),n=o;break;case 1:c==="("?n=2:U1.test(c)?f():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),r}function q1(e,t,n){const o=j1(J1(e.path),n);{const l=new Set;for(const i of o.keys)l.has(i.name)&&Ce(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(i.name)}const r=Re(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function W1(e,t){const n=[],o=new Map;t=Qc({strict:!1,end:!0,sensitive:!1},t);function r(p){return o.get(p)}function l(p,d,f){const m=!f,y=X1(p);Z1(y,d),y.aliasOf=f&&f.record;const g=Qc(t,p),v=[y];if("alias"in p){const k=typeof p.alias=="string"?[p.alias]:p.alias;for(const S of k)v.push(Re({},y,{components:f?f.record.components:y.components,path:S,aliasOf:f?f.record:y}))}let x,b;for(const k of v){const{path:S}=k;if(d&&S[0]!=="/"){const T=d.record.path,I=T[T.length-1]==="/"?"":"/";k.path=d.record.path+(S&&I+S)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=q1(k,d,g),d&&S[0]==="/"&&G1(x,d),f?(f.alias.push(x),Y1(f,x)):(b=b||x,b!==x&&b.alias.push(x),m&&p.name&&!Gc(x)&&i(p.name)),y.children){const T=y.children;for(let I=0;I<T.length;I++)l(T[I],x,f&&f.children[I])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return b?()=>{i(b)}:co}function i(p){if(Md(p)){const d=o.get(p);d&&(o.delete(p),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(p);d>-1&&(n.splice(d,1),p.record.name&&o.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function a(){return n}function c(p){let d=0;for(;d<n.length&&D1(p,n[d])>=0&&(p.record.path!==n[d].record.path||!Nd(p,n[d]));)d++;n.splice(d,0,p),p.record.name&&!Gc(p)&&o.set(p.record.name,p)}function u(p,d){let f,m={},y,g;if("name"in p&&p.name){if(f=o.get(p.name),!f)throw Is(1,{location:p});{const b=Object.keys(p.params||{}).filter(k=>!f.keys.find(S=>S.name===k));b.length&&Ce(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=f.record.name,m=Re(Zc(d.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),p.params&&Zc(p.params,f.keys.map(b=>b.name))),y=f.stringify(m)}else if("path"in p)y=p.path,y.startsWith("/")||Ce(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(b=>b.re.test(y)),f&&(m=f.parse(y),g=f.record.name);else{if(f=d.name?o.get(d.name):n.find(b=>b.re.test(d.path)),!f)throw Is(1,{location:p,currentLocation:d});g=f.record.name,m=Re({},d.params,p.params),y=f.stringify(m)}const v=[];let x=f;for(;x;)v.unshift(x.record),x=x.parent;return{name:g,path:y,params:m,matched:v,meta:K1(v)}}return e.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function Zc(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function X1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:z1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function z1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function Gc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function K1(e){return e.reduce((t,n)=>Re(t,n.meta),{})}function Qc(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function mi(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function Y1(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(mi.bind(null,n)))return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(mi.bind(null,n)))return Ce(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function Z1(e,t){t&&t.record.name&&!e.name&&!e.path&&Ce(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function G1(e,t){for(const n of t.keys)if(!e.keys.find(mi.bind(null,n)))return Ce(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function Nd(e,t){return t.children.some(n=>n===e||Nd(e,n))}const Dd=/#/g,Q1=/&/g,e_=/\//g,t_=/=/g,n_=/\?/g,Vd=/\+/g,s_=/%5B/g,o_=/%5D/g,Ud=/%5E/g,r_=/%60/g,Jd=/%7B/g,l_=/%7C/g,qd=/%7D/g,i_=/%20/g;function ua(e){return encodeURI(""+e).replace(l_,"|").replace(s_,"[").replace(o_,"]")}function a_(e){return ua(e).replace(Jd,"{").replace(qd,"}").replace(Ud,"^")}function yi(e){return ua(e).replace(Vd,"%2B").replace(i_,"+").replace(Dd,"%23").replace(Q1,"%26").replace(r_,"`").replace(Jd,"{").replace(qd,"}").replace(Ud,"^")}function c_(e){return yi(e).replace(t_,"%3D")}function u_(e){return ua(e).replace(Dd,"%23").replace(n_,"%3F")}function p_(e){return e==null?"":u_(e).replace(e_,"%2F")}function $o(e){try{return decodeURIComponent(""+e)}catch{Ce(`Error decoding "${e}". Using original value`)}return""+e}function d_(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const l=o[r].replace(Vd," "),i=l.indexOf("="),a=$o(i<0?l:l.slice(0,i)),c=i<0?null:$o(l.slice(i+1));if(a in t){let u=t[a];Et(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function eu(e){let t="";for(let n in e){const o=e[n];if(n=c_(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Et(o)?o.map(l=>l&&yi(l)):[o&&yi(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function f_(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Et(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const h_=Symbol("router view location matched"),tu=Symbol("router view depth"),tl=Symbol("router"),Wd=Symbol("route location"),Fi=Symbol("router view location");function Xs(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function kn(e,t,n,o,r){const l=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const c=d=>{d===!1?a(Is(4,{from:n,to:t})):d instanceof Error?a(d):P1(d)?a(Is(2,{from:t,to:d})):(l&&o.enterCallbacks[r]===l&&typeof d=="function"&&l.push(d),i())},u=e.call(o&&o.instances[r],t,n,m_(c,t,n));let p=Promise.resolve(u);if(e.length<3&&(p=p.then(c)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)p=p.then(f=>c._called?f:(Ce(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ce(d),a(new Error("Invalid navigation guard"));return}}p.catch(d=>a(d))})}function m_(e,t,n){let o=0;return function(){o++===1&&Ce(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function xl(e,t,n,o){const r=[];for(const l of e){!l.components&&!l.children.length&&Ce(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const i in l.components){let a=l.components[i];{if(!a||typeof a!="object"&&typeof a!="function")throw Ce(`Component "${i}" in record with path "${l.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){Ce(`Component "${i}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,Ce(`Component "${i}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(y_(a)){const u=(a.__vccOpts||a)[t];u&&r.push(kn(u,n,o,l,i))}else{let c=a();"catch"in c||(Ce(`Component "${i}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const p=m1(u)?u.default:u;l.components[i]=p;const f=(p.__vccOpts||p)[t];return f&&kn(f,n,o,l,i)()}))}}}return r}function y_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function nu(e){const t=K(tl),n=K(Wd),o=R(()=>t.resolve(w(e.to))),r=R(()=>{const{matched:c}=o.value,{length:u}=c,p=c[u-1],d=n.matched;if(!p||!d.length)return-1;const f=d.findIndex(Hn.bind(null,p));if(f>-1)return f;const m=su(c[u-2]);return u>1&&su(p)===m&&d[d.length-1].path!==m?d.findIndex(Hn.bind(null,c[u-2])):f}),l=R(()=>r.value>-1&&__(n.params,o.value.params)),i=R(()=>r.value>-1&&r.value===n.matched.length-1&&Hd(n.params,o.value.params));function a(c={}){return v_(c)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(co):Promise.resolve()}if(ln){const c=$t();if(c){const u={route:o.value,isActive:l.value,isExactActive:i.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),ps(()=>{u.route=o.value,u.isActive=l.value,u.isExactActive=i.value},{flush:"post"})}}return{route:o,href:R(()=>o.value.href),isActive:l,isExactActive:i,navigate:a}}const F_=ge({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nu,setup(e,{slots:t}){const n=je(nu(e)),{options:o}=K(tl),r=R(()=>({[ou(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[ou(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},l)}}}),g_=F_;function v_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function __(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Et(r)||r.length!==o.length||o.some((l,i)=>l!==r[i]))return!1}return!0}function su(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ou=(e,t,n)=>e??t??n,b_=ge({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){x_();const o=K(Fi),r=R(()=>e.route||o.value),l=K(tu,0),i=R(()=>{let u=w(l);const{matched:p}=r.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),a=R(()=>r.value.matched[i.value]);xt(tu,R(()=>i.value+1)),xt(h_,a),xt(Fi,r);const c=W();return Fe(()=>[c.value,a.value,e.name],([u,p,d],[f,m,y])=>{p&&(p.instances[d]=u,m&&m!==p&&u&&u===f&&(p.leaveGuards.size||(p.leaveGuards=m.leaveGuards),p.updateGuards.size||(p.updateGuards=m.updateGuards))),u&&p&&(!m||!Hn(p,m)||!f)&&(p.enterCallbacks[d]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=r.value,p=e.name,d=a.value,f=d&&d.components[p];if(!f)return ru(n.default,{Component:f,route:u});const m=d.props[p],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,v=Ze(f,Re({},y,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[p]=null)},ref:c}));if(ln&&v.ref){const x={depth:i.value,name:d.name,path:d.path,meta:d.meta};(Et(v.ref)?v.ref.map(k=>k.i):[v.ref.i]).forEach(k=>{k.__vrv_devtools=x})}return ru(n.default,{Component:v,route:u})||v}}});function ru(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const k_=b_;function x_(){const e=$t(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const n=t==="KeepAlive"?"keep-alive":"transition";Ce(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function zs(e,t){const n=Re({},e,{matched:e.matched.map(o=>O_(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function rr(e){return{_custom:{display:e}}}let w_=0;function C_(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=w_++;h1({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((p,d)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:zs(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:p,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;p.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Xd})}Et(d.__vrl_devtools)&&(d.__devtoolsApi=r,d.__vrl_devtools.forEach(f=>{let m=Yd,y="";f.isExactActive?(m=Kd,y="This is exactly active"):f.isActive&&(m=zd,y="This link is active"),p.tags.push({label:f.route.path,textColor:0,tooltip:y,backgroundColor:m})}))}),Fe(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(a),r.sendInspectorState(a)});const l="router:navigations:"+o;r.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((p,d)=>{r.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:r.now(),data:{error:p},groupId:d.meta.__navigationId}})});let i=0;t.beforeEach((p,d)=>{const f={guard:rr("beforeEach"),from:zs(d,"Current Location during this navigation"),to:zs(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:i++}),r.addTimelineEvent({layerId:l,event:{time:r.now(),title:"Start of navigation",subtitle:p.fullPath,data:f,groupId:p.meta.__navigationId}})}),t.afterEach((p,d,f)=>{const m={guard:rr("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=rr("❌")):m.status=rr("✅"),m.from=zs(d,"Current Location during this navigation"),m.to=zs(p,"Target location"),r.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:p.fullPath,time:r.now(),data:m,logType:f?"warning":"default",groupId:p.meta.__navigationId}})});const a="router-inspector:"+o;r.addInspector({id:a,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const p=u;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(Qd),p.filter&&(d=d.filter(f=>gi(f,p.filter.toLowerCase()))),d.forEach(f=>Gd(f,t.currentRoute.value)),p.rootNodes=d.map(Zd)}let u;r.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===a&&c()}),r.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===a){const f=n.getRoutes().find(m=>m.record.__vd_id===p.nodeId);f&&(p.state={options:E_(f)})}}),r.sendInspectorTree(a),r.sendInspectorState(a)})}function S_(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function E_(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${S_(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Xd=15485081,zd=2450411,Kd=8702998,$_=2282478,Yd=16486972,R_=6710886;function Zd(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:$_}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Yd}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Xd}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Kd}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:zd}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:R_});let o=n.__vd_id;return o==null&&(o=String(A_++),n.__vd_id=o),{id:o,label:n.path,tags:t,children:e.children.map(Zd)}}let A_=0;const T_=/^\/(.*)\/([a-z]*)$/;function Gd(e,t){const n=t.matched.length&&Hn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(o=>Hn(o,e.record))),e.children.forEach(o=>Gd(o,t))}function Qd(e){e.__vd_match=!1,e.children.forEach(Qd)}function gi(e,t){const n=String(e.re).match(T_);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>gi(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),l=$o(r);return!t.startsWith("/")&&(l.includes(t)||r.includes(t))||l.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>gi(i,t))}function O_(e,t){const n={};for(const o in e)t.includes(o)||(n[o]=e[o]);return n}function P_(e){const t=W1(e.routes,e),n=e.parseQuery||d_,o=e.stringifyQuery||eu,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Xs(),i=Xs(),a=Xs(),c=Zt(gn);let u=gn;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=bl.bind(null,$=>""+$),d=bl.bind(null,p_),f=bl.bind(null,$o);function m($,Y){let U,G;return Md($)?(U=t.getRecordMatcher($),G=Y):G=$,t.addRoute(G,U)}function y($){const Y=t.getRecordMatcher($);Y?t.removeRoute(Y):Ce(`Cannot remove non-existent route "${String($)}"`)}function g(){return t.getRoutes().map($=>$.record)}function v($){return!!t.getRecordMatcher($)}function x($,Y){if(Y=Re({},Y||c.value),typeof $=="string"){const ue=kl(n,$,Y.path),F=t.resolve({path:ue.path},Y),_=r.createHref(ue.fullPath);return _.startsWith("//")?Ce(`Location "${$}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):F.matched.length||Ce(`No match found for location with path "${$}"`),Re(ue,F,{params:f(F.params),hash:$o(ue.hash),redirectedFrom:void 0,href:_})}let U;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&Ce(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),U=Re({},$,{path:kl(n,$.path,Y.path).path});else{const ue=Re({},$.params);for(const F in ue)ue[F]==null&&delete ue[F];U=Re({},$,{params:d($.params)}),Y.params=d(Y.params)}const G=t.resolve(U,Y),_e=$.hash||"";_e&&!_e.startsWith("#")&&Ce(`A \`hash\` should always start with the character "#". Replace "${_e}" with "#${_e}".`),G.params=p(f(G.params));const we=g1(o,Re({},$,{hash:a_(_e),path:G.path})),de=r.createHref(we);return de.startsWith("//")?Ce(`Location "${$}" resolved to "${de}". A resolved location cannot start with multiple slashes.`):G.matched.length||Ce(`No match found for location with path "${"path"in $?$.path:$}"`),Re({fullPath:we,hash:_e,query:o===eu?f_($.query):$.query||{}},G,{redirectedFrom:void 0,href:de})}function b($){return typeof $=="string"?kl(n,$,c.value.path):Re({},$)}function k($,Y){if(u!==$)return Is(8,{from:Y,to:$})}function S($){return V($)}function T($){return S(Re(b($),{replace:!0}))}function I($){const Y=$.matched[$.matched.length-1];if(Y&&Y.redirect){const{redirect:U}=Y;let G=typeof U=="function"?U($):U;if(typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=b(G):{path:G},G.params={}),!("path"in G)&&!("name"in G))throw Ce(`Invalid redirect found:
${JSON.stringify(G,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Re({query:$.query,hash:$.hash,params:"path"in G?{}:$.params},G)}}function V($,Y){const U=u=x($),G=c.value,_e=$.state,we=$.force,de=$.replace===!0,ue=I(U);if(ue)return V(Re(b(ue),{state:typeof ue=="object"?Re({},_e,ue.state):_e,force:we,replace:de}),Y||U);const F=U;F.redirectedFrom=Y;let _;return!we&&Jc(o,G,U)&&(_=Is(16,{to:F,from:G}),Pe(G,G,!0,!1)),(_?Promise.resolve(_):N(F,G)).catch(E=>nn(E)?nn(E,2)?E:ve(E):z(E,F,G)).then(E=>{if(E){if(nn(E,2))return Jc(o,x(E.to),F)&&Y&&(Y._count=Y._count?Y._count+1:1)>10?(Ce(`Detected an infinite redirection in a navigation guard when going from "${G.fullPath}" to "${F.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):V(Re({replace:de},b(E.to),{state:typeof E.to=="object"?Re({},_e,E.to.state):_e,force:we}),Y||F)}else E=ae(F,G,!0,de,_e);return Z(F,G,E),E})}function A($,Y){const U=k($,Y);return U?Promise.reject(U):Promise.resolve()}function N($,Y){let U;const[G,_e,we]=L_($,Y);U=xl(G.reverse(),"beforeRouteLeave",$,Y);for(const ue of G)ue.leaveGuards.forEach(F=>{U.push(kn(F,$,Y))});const de=A.bind(null,$,Y);return U.push(de),Fs(U).then(()=>{U=[];for(const ue of l.list())U.push(kn(ue,$,Y));return U.push(de),Fs(U)}).then(()=>{U=xl(_e,"beforeRouteUpdate",$,Y);for(const ue of _e)ue.updateGuards.forEach(F=>{U.push(kn(F,$,Y))});return U.push(de),Fs(U)}).then(()=>{U=[];for(const ue of $.matched)if(ue.beforeEnter&&!Y.matched.includes(ue))if(Et(ue.beforeEnter))for(const F of ue.beforeEnter)U.push(kn(F,$,Y));else U.push(kn(ue.beforeEnter,$,Y));return U.push(de),Fs(U)}).then(()=>($.matched.forEach(ue=>ue.enterCallbacks={}),U=xl(we,"beforeRouteEnter",$,Y),U.push(de),Fs(U))).then(()=>{U=[];for(const ue of i.list())U.push(kn(ue,$,Y));return U.push(de),Fs(U)}).catch(ue=>nn(ue,8)?ue:Promise.reject(ue))}function Z($,Y,U){for(const G of a.list())G($,Y,U)}function ae($,Y,U,G,_e){const we=k($,Y);if(we)return we;const de=Y===gn,ue=ln?history.state:{};U&&(G||de?r.replace($.fullPath,Re({scroll:de&&ue&&ue.scroll},_e)):r.push($.fullPath,_e)),c.value=$,Pe($,Y,U,de),ve()}let X;function ce(){X||(X=r.listen(($,Y,U)=>{if(!mn.listening)return;const G=x($),_e=I(G);if(_e){V(Re(_e,{replace:!0}),G).catch(co);return}u=G;const we=c.value;ln&&S1(Wc(we.fullPath,U.delta),el()),N(G,we).catch(de=>nn(de,12)?de:nn(de,2)?(V(de.to,G).then(ue=>{nn(ue,20)&&!U.delta&&U.type===Eo.pop&&r.go(-1,!1)}).catch(co),Promise.reject()):(U.delta&&r.go(-U.delta,!1),z(de,G,we))).then(de=>{de=de||ae(G,we,!1),de&&(U.delta&&!nn(de,8)?r.go(-U.delta,!1):U.type===Eo.pop&&nn(de,20)&&r.go(-1,!1)),Z(G,we,de)}).catch(co)}))}let Oe=Xs(),qe=Xs(),He;function z($,Y,U){ve($);const G=qe.list();return G.length?G.forEach(_e=>_e($,Y,U)):(Ce("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function oe(){return He&&c.value!==gn?Promise.resolve():new Promise(($,Y)=>{Oe.add([$,Y])})}function ve($){return He||(He=!$,ce(),Oe.list().forEach(([Y,U])=>$?U($):Y()),Oe.reset()),$}function Pe($,Y,U,G){const{scrollBehavior:_e}=e;if(!ln||!_e)return Promise.resolve();const we=!U&&E1(Wc($.fullPath,0))||(G||!U)&&history.state&&history.state.scroll||null;return et().then(()=>_e($,Y,we)).then(de=>de&&C1(de)).catch(de=>z(de,$,Y))}const vt=$=>r.go($);let nt;const dt=new Set,mn={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:v,getRoutes:g,resolve:x,options:e,push:S,replace:T,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:l.add,beforeResolve:i.add,afterEach:a.add,onError:qe.add,isReady:oe,install($){const Y=this;$.component("RouterLink",g_),$.component("RouterView",k_),$.config.globalProperties.$router=Y,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>w(c)}),ln&&!nt&&c.value===gn&&(nt=!0,S(r.location).catch(_e=>{Ce("Unexpected error when starting the router:",_e)}));const U={};for(const _e in gn)U[_e]=R(()=>c.value[_e]);$.provide(tl,Y),$.provide(Wd,je(U)),$.provide(Fi,c);const G=$.unmount;dt.add($),$.unmount=function(){dt.delete($),dt.size<1&&(u=gn,X&&X(),X=null,c.value=gn,nt=!1,He=!1),G()},ln&&C_($,Y,t)}};return mn}function Fs(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function L_(e,t){const n=[],o=[],r=[],l=Math.max(t.matched.length,e.matched.length);for(let i=0;i<l;i++){const a=t.matched[i];a&&(e.matched.find(u=>Hn(u,a))?o.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>Hn(u,c))||r.push(c))}return[n,o,r]}function pa(){return K(tl)}const wl=W(!1),po=W(!1),ws=W(!1),I_=W(!0),vi=Ev({xs:460,...kv}),rs=l1(),ef=zv(),H_=R(()=>rs.height.value-rs.width.value/An>180),tf=qv(Qt?document.body:null),Ts=bv(),B_=R(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Ts.value)==null?void 0:e.tagName)||"")||((t=Ts.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),M_=R(()=>{var e;return["BUTTON","A"].includes(((e=Ts.value)==null?void 0:e.tagName)||"")});Ut("slidev-camera","default");Ut("slidev-mic","default");const hr=Ut("slidev-scale",0),at=Ut("slidev-show-overview",!1),Cl=Ut("slidev-presenter-cursor",!0),lu=Ut("slidev-show-editor",!1);Ut("slidev-editor-width",Qt?window.innerWidth*.4:100);const nf=Td(at);function iu(e,t,n,o=r=>r){return e*o(.5-t*(.5-n))}function j_(e){return[-e[0],-e[1]]}function jt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Tt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Mt(e,t){return[e[0]*t,e[1]*t]}function N_(e,t){return[e[0]/t,e[1]/t]}function Ks(e){return[e[1],-e[0]]}function au(e,t){return e[0]*t[0]+e[1]*t[1]}function D_(e,t){return e[0]===t[0]&&e[1]===t[1]}function V_(e){return Math.hypot(e[0],e[1])}function U_(e){return e[0]*e[0]+e[1]*e[1]}function cu(e,t){return U_(Tt(e,t))}function sf(e){return N_(e,V_(e))}function J_(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ys(e,t,n){let o=Math.sin(n),r=Math.cos(n),l=e[0]-t[0],i=e[1]-t[1],a=l*r-i*o,c=l*o+i*r;return[a+t[0],c+t[1]]}function _i(e,t,n){return jt(e,Mt(Tt(t,e),n))}function uu(e,t,n){return jt(e,Mt(t,n))}var{min:gs,PI:q_}=Math,pu=.275,Zs=q_+1e-4;function W_(e,t={}){let{size:n=16,smoothing:o=.5,thinning:r=.5,simulatePressure:l=!0,easing:i=z=>z,start:a={},end:c={},last:u=!1}=t,{cap:p=!0,easing:d=z=>z*(2-z)}=a,{cap:f=!0,easing:m=z=>--z*z*z+1}=c;if(e.length===0||n<=0)return[];let y=e[e.length-1].runningLength,g=a.taper===!1?0:a.taper===!0?Math.max(n,y):a.taper,v=c.taper===!1?0:c.taper===!0?Math.max(n,y):c.taper,x=Math.pow(n*o,2),b=[],k=[],S=e.slice(0,10).reduce((z,oe)=>{let ve=oe.pressure;if(l){let Pe=gs(1,oe.distance/n),vt=gs(1,1-Pe);ve=gs(1,z+(vt-z)*(Pe*pu))}return(z+ve)/2},e[0].pressure),T=iu(n,r,e[e.length-1].pressure,i),I,V=e[0].vector,A=e[0].point,N=A,Z=A,ae=N,X=!1;for(let z=0;z<e.length;z++){let{pressure:oe}=e[z],{point:ve,vector:Pe,distance:vt,runningLength:nt}=e[z];if(z<e.length-1&&y-nt<3)continue;if(r){if(l){let we=gs(1,vt/n),de=gs(1,1-we);oe=gs(1,S+(de-S)*(we*pu))}T=iu(n,r,oe,i)}else T=n/2;I===void 0&&(I=T);let dt=nt<g?d(nt/g):1,mn=y-nt<v?m((y-nt)/v):1;T=Math.max(.01,T*Math.min(dt,mn));let $=(z<e.length-1?e[z+1]:e[z]).vector,Y=z<e.length-1?au(Pe,$):1,U=au(Pe,V)<0&&!X,G=Y!==null&&Y<0;if(U||G){let we=Mt(Ks(V),T);for(let de=1/13,ue=0;ue<=1;ue+=de)Z=Ys(Tt(ve,we),ve,Zs*ue),b.push(Z),ae=Ys(jt(ve,we),ve,Zs*-ue),k.push(ae);A=Z,N=ae,G&&(X=!0);continue}if(X=!1,z===e.length-1){let we=Mt(Ks(Pe),T);b.push(Tt(ve,we)),k.push(jt(ve,we));continue}let _e=Mt(Ks(_i($,Pe,Y)),T);Z=Tt(ve,_e),(z<=1||cu(A,Z)>x)&&(b.push(Z),A=Z),ae=jt(ve,_e),(z<=1||cu(N,ae)>x)&&(k.push(ae),N=ae),S=oe,V=Pe}let ce=e[0].point.slice(0,2),Oe=e.length>1?e[e.length-1].point.slice(0,2):jt(e[0].point,[1,1]),qe=[],He=[];if(e.length===1){if(!(g||v)||u){let z=uu(ce,sf(Ks(Tt(ce,Oe))),-(I||T)),oe=[];for(let ve=1/13,Pe=ve;Pe<=1;Pe+=ve)oe.push(Ys(z,ce,Zs*2*Pe));return oe}}else{if(!(g||v&&e.length===1))if(p)for(let oe=1/13,ve=oe;ve<=1;ve+=oe){let Pe=Ys(k[0],ce,Zs*ve);qe.push(Pe)}else{let oe=Tt(b[0],k[0]),ve=Mt(oe,.5),Pe=Mt(oe,.51);qe.push(Tt(ce,ve),Tt(ce,Pe),jt(ce,Pe),jt(ce,ve))}let z=Ks(j_(e[e.length-1].vector));if(v||g&&e.length===1)He.push(Oe);else if(f){let oe=uu(Oe,z,T);for(let ve=1/29,Pe=ve;Pe<1;Pe+=ve)He.push(Ys(oe,Oe,Zs*3*Pe))}else He.push(jt(Oe,Mt(z,T)),jt(Oe,Mt(z,T*.99)),Tt(Oe,Mt(z,T*.99)),Tt(Oe,Mt(z,T)))}return b.concat(He,k.reverse(),qe)}function X_(e,t={}){var n;let{streamline:o=.5,size:r=16,last:l=!1}=t;if(e.length===0)return[];let i=.15+(1-o)*.85,a=Array.isArray(e[0])?e:e.map(({x:m,y,pressure:g=.5})=>[m,y,g]);if(a.length===2){let m=a[1];a=a.slice(0,-1);for(let y=1;y<5;y++)a.push(_i(a[0],m,y/4))}a.length===1&&(a=[...a,[...jt(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,d=c[0],f=a.length-1;for(let m=1;m<a.length;m++){let y=l&&m===f?a[m].slice(0,2):_i(d.point,a[m],i);if(D_(d.point,y))continue;let g=J_(y,d.point);if(p+=g,m<f&&!u){if(p<r)continue;u=!0}d={point:y,pressure:a[m][2]>=0?a[m][2]:.5,vector:sf(Tt(d.point,y)),distance:g,runningLength:p},c.push(d)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function z_(e,t={}){return W_(X_(e,t),t)}var K_=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let o=0,r=n.length;o<r;o++)n[o](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>t!==r)}}});function Or(e,t){return e-t}function Y_(e){return e<0?-1:1}function Pr(e){return[Math.abs(e),Y_(e)]}function of(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Z_=2,an=Z_,Ms=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*o,y:(e.pageY-r.top)*o,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const l=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",o.fill??"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(an))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},G_=class extends Ms{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=z_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[r,l],i,a)=>{const[c,u]=a[(i+1)%a.length];return o.push(r,l,(r+c)/2,(l+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Q_=class extends Ms{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Pr(e.x-this.start.x),[o,r]=Pr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Or),[a,c]=[this.start.y,this.start.y+o*r].sort(Or);this.attr("cx",(l+i)/2),this.attr("cy",(a+c)/2),this.attr("rx",(i-l)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function rf(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),n.appendChild(o),n}var e0=class extends Ms{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=of(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(rf(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let l=o/r;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+r*l,n=this.start.y+r):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},t0=class extends Ms{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Pr(e.x-this.start.x),[o,r]=Pr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Or),[a,c]=[this.start.y,this.start.y+o*r].sort(Or);this.attr("x",l),this.attr("y",a),this.attr("width",i-l),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function n0(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function s0(e,t,n){let o=t.x,r=t.y,l=n.x-o,i=n.y-r;if(l!==0||i!==0){const a=((e.x-o)*l+(e.y-r)*i)/(l*l+i*i);a>1?(o=n.x,r=n.y):a>0&&(o+=l*a,r+=i*a)}return l=e.x-o,i=e.y-r,l*l+i*i}function o0(e,t){let n=e[0];const o=[n];let r;for(let l=1,i=e.length;l<i;l++)r=e[l],n0(r,n)>t&&(o.push(r),n=r);return n!==r&&r&&o.push(r),o}function bi(e,t,n,o,r){let l=o,i=0;for(let a=t+1;a<n;a++){const c=s0(e[a],e[t],e[n]);c>l&&(i=a,l=c)}l>o&&(i-t>1&&bi(e,t,i,o,r),r.push(e[i]),n-i>1&&bi(e,i,n,o,r))}function r0(e,t){const n=e.length-1,o=[e[0]];return bi(e,0,n,t,o),o.push(e[n]),o}function du(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:o0(e,o),e=r0(e,o),e}var l0=class extends Ms{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=of();const t=rf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=du(this.points,1,!0),this.count=0),this.attr("d",hu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",hu(du(this.points,1,!0))),!e.getTotalLength()))}};function i0(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(n**2+o**2),angle:Math.atan2(o,n)}}function fu(e,t,n,o){const r=t||e,l=n||e,i=.2,a=i0(r,l),c=a.angle+(o?Math.PI:0),u=a.length*i,p=e.x+Math.cos(c)*u,d=e.y+Math.sin(c)*u;return{x:p,y:d}}function a0(e,t,n){const o=fu(n[t-1],n[t-2],e),r=fu(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(an)},${o.y.toFixed(an)} ${r.x.toFixed(an)},${r.y.toFixed(an)} ${e.x.toFixed(an)},${e.y.toFixed(an)}`}function hu(e){return e.reduce((t,n,o,r)=>o===0?`M ${n.x.toFixed(an)},${n.y.toFixed(an)}`:`${t} ${a0(n,o,r)}`,"")}var c0=class extends Ms{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const l=n[r];if(l.getTotalLength){const i=l.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=l.getPointAtLength(i*a/this.pathSubFactor),u=l.getPointAtLength(i*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:a,element:o||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,r=t.x1,l=t.x2,i=e.y1,a=e.y2,c=t.y1,u=t.y2,p=(n-o)*(c-u)-(i-a)*(r-l),d=(n*a-i*o)*(r-l)-(n-o)*(r*u-c*l),f=(n*a-i*o)*(c-u)-(i-a)*(r*u-c*l),m=(y,g,v)=>y>=g&&y<=v?!0:y>=v&&y<=g;if(p===0)return!1;{const y={x:d/p,y:f/p};return m(y.x,n,o)&&m(y.y,i,a)&&m(y.x,r,l)&&m(y.y,c,u)}}};function u0(e){return{draw:new l0(e),stylus:new G_(e),line:new e0(e),rectangle:new t0(e),ellipse:new Q_(e),eraseLine:new c0(e)}}var p0=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=K_(),this._models=u0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function d0(e){return new p0(e)}const ki=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Zn=Ut("slidev-drawing-enabled",!1);Ut("slidev-drawing-pinned",!1);const f0=W(!1),h0=W(!1),m0=W(!1),Ro=W(!1),Cs=nv(Ut("slidev-drawing-brush",{color:ki[0],size:4,mode:"stylus"})),mu=W("stylus"),lf=R(()=>$e.drawings.syncAll||wt.value);let Ao=!1;const Gs=R({get(){return mu.value},set(e){mu.value=e,e==="arrow"?(Cs.mode="line",Cs.arrowEnd=!0):(Cs.mode=e,Cs.arrowEnd=!1)}}),y0=je({brush:Cs,acceptsInputTypes:R(()=>Zn.value&&(!$e.drawings.presenterOnly||wt.value)?void 0:["pen"]),coordinateTransform:!1}),pt=Ur(d0(y0));function F0(){pt.clear(),lf.value&&Ed(Ue.value,"")}function da(){var e;h0.value=pt.canRedo(),f0.value=pt.canUndo(),m0.value=!!((e=pt.el)!=null&&e.children.length)}function g0(e){Ao=!0;const t=Ar[e||Ue.value];t!=null?pt.load(t):pt.clear(),da(),Ao=!1}pt.on("changed",()=>{if(da(),!Ao){const e=pt.dump(),t=Ue.value;(Ar[t]||"")!==e&&lf.value&&Ed(t,pt.dump())}});Jg(e=>{Ao=!0,e[Ue.value]!=null&&pt.load(e[Ue.value]||""),Ao=!1,da()});et(()=>{Fe(Ue,()=>{pt.mounted&&g0()},{immediate:!0})});pt.on("start",()=>Ro.value=!0);pt.on("end",()=>Ro.value=!1);window.addEventListener("keydown",e=>{if(!Zn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?pt.redo():pt.undo():e.code==="Escape"?Zn.value=!1:e.code==="KeyL"&&t?Gs.value="line":e.code==="KeyA"&&t?Gs.value="arrow":e.code==="KeyS"&&t?Gs.value="stylus":e.code==="KeyR"&&t?Gs.value="rectangle":e.code==="KeyE"&&t?Gs.value="ellipse":e.code==="KeyC"&&t?F0():e.code.startsWith("Digit")&&t&&+e.code[5]<=ki.length?Cs.color=ki[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function ze(...e){return R(()=>e.every(t=>en(t)))}function bt(e){return R(()=>!en(e))}const yu=Mv(),Sl=Ut("slidev-color-schema","auto"),xi=R(()=>$e.colorSchema!=="auto"),fa=R({get(){return xi.value?$e.colorSchema==="dark":Sl.value==="auto"?yu.value:Sl.value==="dark"},set(e){xi.value||(Sl.value=e===yu.value?"auto":e?"dark":"light")}}),af=Td(fa);Qt&&Fe(fa,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const mr=W(1),yr=R(()=>Xe.length-1),St=W(0),ha=W(0);function v0(){St.value>mr.value&&(St.value-=1)}function _0(){St.value<yr.value&&(St.value+=1)}function b0(){if(St.value>mr.value){let e=St.value-ha.value;e<mr.value&&(e=mr.value),St.value=e}}function k0(){if(St.value<yr.value){let e=St.value+ha.value;e>yr.value&&(e=yr.value),St.value=e}}function x0(){const{escape:e,space:t,shift:n,left:o,right:r,up:l,down:i,enter:a,d:c,g:u,o:p}=ef;let d=[{name:"next_space",key:ze(t,bt(n)),fn:On,autoRepeat:!0},{name:"prev_space",key:ze(t,n),fn:Pn,autoRepeat:!0},{name:"next_right",key:ze(r,bt(n),bt(at)),fn:On,autoRepeat:!0},{name:"prev_left",key:ze(o,bt(n),bt(at)),fn:Pn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:On,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Pn,autoRepeat:!0},{name:"next_down",key:ze(i,bt(at)),fn:Oo,autoRepeat:!0},{name:"prev_up",key:ze(l,bt(at)),fn:()=>Po(!1),autoRepeat:!0},{name:"next_shift",key:ze(r,n),fn:Oo,autoRepeat:!0},{name:"prev_shift",key:ze(o,n),fn:()=>Po(!1),autoRepeat:!0},{name:"toggle_dark",key:ze(c,bt(Zn)),fn:af},{name:"toggle_overview",key:ze(p,bt(Zn)),fn:nf},{name:"hide_overview",key:ze(e,bt(Zn)),fn:()=>at.value=!1},{name:"goto",key:ze(u,bt(Zn)),fn:()=>ws.value=!ws.value},{name:"next_overview",key:ze(r,at),fn:_0},{name:"prev_overview",key:ze(o,at),fn:v0},{name:"up_overview",key:ze(l,at),fn:b0},{name:"down_overview",key:ze(i,at),fn:k0},{name:"goto_from_overview",key:ze(a,at),fn:()=>{Hs(St.value),at.value=!1}}];const f=new Set(d.map(y=>y.name));if(d.filter(y=>y.name&&f.has(y.name)).length===0){const y=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(y),console.warn(y)}return d}const cf=ze(bt(B_),bt(M_),I_);function w0(e,t,n=!1){typeof e=="string"&&(e=ef[e]);const o=ze(e,cf);let r=0,l;const i=()=>{if(clearTimeout(l),!o.value){r=0;return}n&&(l=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return Fe(o,i,{flush:"sync"})}function C0(e,t){return _v(e,n=>{cf.value&&(n.repeat||t())})}function S0(){const e=x0();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&w0(n.key,n.fn,n.autoRepeat)}),C0("f",()=>tf.toggle())}const E0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$0=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),R0=[$0];function A0(e,t){return C(),B("svg",E0,R0)}const T0={name:"carbon-close",render:A0};function ma(e,t=""){var r,l;const n=["slidev-page",t],o=(l=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:l.no;return o!=null&&n.push(`slidev-page-${o}`),n.filter(Boolean).join(" ")}const O0=ge({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;K(le);const n=W(),o=Jv(n),r=R(()=>t.width?t.width:o.width.value),l=R(()=>t.width?t.width/An:o.height.value);t.width&&ps(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${l.value}px`)});const i=R(()=>r.value/l.value),a=R(()=>t.scale&&!pn.value?t.scale:i.value<An?r.value/Tn:l.value*An/Tn),c=R(()=>({height:`${ia}px`,width:`${Tn}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),u=R(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return xt(wd,a),(p,d)=>(C(),B("div",{id:"slide-container",ref_key:"root",ref:n,class:Se(w(u))},[s("div",{id:"slide-content",style:ot(w(c))},[Ft(p.$slots,"default")],4),Ft(p.$slots,"controls")],2))}});const ie=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},uf=ie(O0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlideContainer.vue"]]),ya=ge({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Kt(e,"clicks",t),o=Kt(e,"clicksElements",t),r=Kt(e,"clicksDisabled",t),l=Kt(e,"clicksOrderMap",t);o.value.length=0,xt(Rg,e.route),xt(Ag,e.context),xt(io,n),xt(ao,r),xt(zn,o),xt(ii,l)},render(){var e,t;return this.$props.is?Ze(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),P0=["innerHTML"],L0=ge({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return K(le),(t,n)=>w(Ar)[e.page]?(C(),B("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Ar)[e.page]},null,8,P0)):me("v-if",!0)}}),I0=ie(L0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),H0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},B0=["onClick"],M0=ge({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;K(le);const o=Kt(n,"modelValue",t);function r(){o.value=!1}function l(m){Hs(m),r()}function i(m){return m===St.value}const a=vi.smaller("xs"),c=vi.smaller("sm"),u=4*16*2,p=2*16,d=R(()=>a.value?rs.width.value-u:c.value?(rs.width.value-u-p)/2:300),f=R(()=>Math.floor((rs.width.value-u)/(d.value+p)));return ps(()=>{St.value=Ue.value,ha.value=f.value}),(m,y)=>{const g=T0;return C(),B(Ee,null,[Rn(s("div",H0,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ot(`grid-template-columns: repeat(auto-fit,minmax(${w(d)}px,1fr))`)},[(C(!0),B(Ee,null,Bs(w(Xe).slice(0,-1),(v,x)=>(C(),B("div",{key:v.path,class:"relative"},[s("div",{class:Se(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(x+1),"border-gray-400":!i(x+1)}]),style:ot(w(aa)),onClick:b=>l(+v.path)},[(C(),te(uf,{key:v.path,width:w(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:ne(()=>[J(w(ya),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:Se(w(ma)(v)),route:v,context:"overview"},null,8,["is","class","route"]),J(I0,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],14,B0),s("div",{class:"absolute top-0 opacity-50",style:ot(`left: ${w(d)+5}px`)},ls(x+1),5)]))),128))],4)],512),[[md,w(o)]]),w(o)?(C(),B("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[J(g)])):me("v-if",!0)],64)}}});const j0=ie(M0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),N0="/react-shared-ppt/assets/logo-b72bde5d.png",D0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},V0=ge({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;K(le);const o=Kt(n,"modelValue",t);function r(){o.value=!1}return(l,i)=>(C(),te(jp,null,[w(o)?(C(),B("div",D0,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=a=>r())}),s("div",{class:Se(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Ft(l.$slots,"default")],2)])):me("v-if",!0)],1024))}}),U0=ie(V0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Modal.vue"]]),J0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},q0=["innerHTML"],W0=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:N0,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),h("dev ")])])],-1),X0=ge({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;K(le);const o=Kt(n,"modelValue",t),r=R(()=>typeof $e.info=="string");return(l,i)=>(C(),te(U0,{modelValue:w(o),"onUpdate:modelValue":i[0]||(i[0]=a=>Ae(o)?o.value=a:null),class:"px-6 py-4"},{default:ne(()=>[s("div",J0,[w(r)?(C(),B("div",{key:0,class:"mb-4",innerHTML:w($e).info},null,8,q0)):me("v-if",!0),W0])]),_:1},8,["modelValue"]))}});const z0=ie(X0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/InfoDialog.vue"]]),K0=["disabled","onKeydown"],Y0=ge({__name:"Goto",setup(e){K(le);const t=W(),n=W(""),o=R(()=>{if(n.value.startsWith("/"))return!!Xe.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=Ef.value}});function r(){o.value&&(n.value.startsWith("/")?Hs(n.value.substring(1)):Hs(+n.value)),l()}function l(){ws.value=!1}return Fe(ws,async i=>{var a,c;i?(await et(),n.value="",(a=t.value)==null||a.focus()):(c=t.value)==null||c.blur()}),Fe(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,a)=>(C(),B("div",{id:"slidev-goto-dialog",class:Se(["fixed right-5 bg-main transform transition-all",w(ws)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Rn(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),type:"text",disabled:!w(ws),class:Se(["outline-none bg-transparent",{"text-red-400":!w(o)&&n.value}]),placeholder:"Goto...",onKeydown:[_c(r,["enter"]),_c(l,["escape"])],onBlur:l},null,42,K0),[[$F,n.value]])],2))}}),Z0=ie(Y0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Goto.vue"]]),G0=ge({__name:"Controls",setup(e){K(le);const t=Zt(),n=Zt();return(o,r)=>(C(),B(Ee,null,[J(j0,{modelValue:w(at),"onUpdate:modelValue":r[0]||(r[0]=l=>Ae(at)?at.value=l:null)},null,8,["modelValue"]),J(Z0),w(t)?(C(),te(w(t),{key:0})):me("v-if",!0),w(n)?(C(),te(w(n),{key:1,modelValue:w(wl),"onUpdate:modelValue":r[1]||(r[1]=l=>Ae(wl)?wl.value=l:null)},null,8,["modelValue"])):me("v-if",!0),w($e).info?(C(),te(z0,{key:2,modelValue:w(po),"onUpdate:modelValue":r[2]||(r[2]=l=>Ae(po)?po.value=l:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),Q0=ie(G0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Controls.vue"]]),e8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t8=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),n8=[t8];function s8(e,t){return C(),B("svg",e8,n8)}const o8={name:"carbon-settings-adjust",render:s8},r8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l8=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),i8=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),a8=[l8,i8];function c8(e,t){return C(),B("svg",r8,a8)}const u8={name:"carbon-information",render:c8},p8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d8=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),f8=[d8];function h8(e,t){return C(),B("svg",p8,f8)}const m8={name:"carbon-download",render:h8},y8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F8=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),g8=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),v8=[F8,g8];function _8(e,t){return C(),B("svg",y8,v8)}const b8={name:"carbon-user-speaker",render:_8},k8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x8=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),w8=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),C8=[x8,w8];function S8(e,t){return C(),B("svg",k8,C8)}const E8={name:"carbon-presentation-file",render:S8},$8={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},R8=s("g",{fill:"currentColor"},[s("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),s("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),A8=[R8];function T8(e,t){return C(),B("svg",$8,A8)}const O8={name:"ph-cursor-duotone",render:T8},P8={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},L8=s("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),I8=[L8];function H8(e,t){return C(),B("svg",P8,I8)}const pf={name:"ph-cursor-fill",render:H8},B8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M8=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),j8=[M8];function N8(e,t){return C(),B("svg",B8,j8)}const D8={name:"carbon-sun",render:N8},V8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U8=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),J8=[U8];function q8(e,t){return C(),B("svg",V8,J8)}const W8={name:"carbon-moon",render:q8},X8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z8=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),K8=[z8];function Y8(e,t){return C(),B("svg",X8,K8)}const Z8={name:"carbon-apps",render:Y8},G8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q8=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),e2=[Q8];function t2(e,t){return C(),B("svg",G8,e2)}const n2={name:"carbon-arrow-right",render:t2},s2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o2=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),r2=[o2];function l2(e,t){return C(),B("svg",s2,r2)}const i2={name:"carbon-arrow-left",render:l2},a2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c2=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),u2=[c2];function p2(e,t){return C(),B("svg",a2,u2)}const d2={name:"carbon-maximize",render:p2},f2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h2=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),m2=[h2];function y2(e,t){return C(),B("svg",f2,m2)}const F2={name:"carbon-minimize",render:y2},g2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v2=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),_2=[v2];function b2(e,t){return C(),B("svg",g2,_2)}const k2={name:"carbon-checkmark",render:b2},x2={class:"select-list"},w2={class:"title"},C2={class:"items"},S2=["onClick"],E2=ge({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;K(le);const o=Kt(n,"modelValue",t,{passive:!0});return(r,l)=>{const i=k2;return C(),B("div",x2,[s("div",w2,ls(e.title),1),s("div",C2,[(C(!0),B(Ee,null,Bs(e.items,a=>(C(),B("div",{key:a.value,class:Se(["item",{active:w(o)===a.value}]),onClick:()=>{var c;o.value=a.value,(c=a.onClick)==null||c.call(a)}},[J(i,{class:Se(["text-green-500",{"opacity-0":w(o)!==a.value}])},null,8,["class"]),h(" "+ls(a.display||a.value),1)],10,S2))),128))])])}}});const $2=ie(E2,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SelectList.vue"]]),R2={class:"text-sm"},A2=ge({__name:"Settings",setup(e){K(le);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(C(),B("div",R2,[J($2,{modelValue:w(hr),"onUpdate:modelValue":o[0]||(o[0]=r=>Ae(hr)?hr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),T2=ie(A2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Settings.vue"]]),O2={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},P2=ge({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;K(le);const o=Kt(n,"modelValue",t,{passive:!0}),r=W();return gv(r,()=>{o.value=!1}),(l,i)=>(C(),B("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Se({disabled:e.disabled}),onClick:i[0]||(i[0]=a=>o.value=!w(o))},[Ft(l.$slots,"button",{class:Se({disabled:e.disabled})})],2),(C(),te(jp,null,[w(o)?(C(),B("div",O2,[Ft(l.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),L2=ie(P2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/MenuButton.vue"]]),I2={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},H2={__name:"VerticalDivider",setup(e){return K(le),(t,n)=>(C(),B("div",I2))}},El=ie(H2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),B2={render(){return[]}},M2={class:"slidev-icon-btn"},j2={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},N2={class:"my-auto"},D2={class:"opacity-50"},V2=ge({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;K(le);const n=vi.smaller("md"),{isFullscreen:o,toggle:r}=tf,l=R(()=>Ci.value?`?password=${Ci.value}`:""),i=R(()=>`/presenter/${Ue.value}${l.value}`),a=R(()=>`/${Ue.value}${l.value}`),c=W(),u=()=>{c.value&&Ts.value&&c.value.contains(Ts.value)&&Ts.value.blur()},p=R(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Zt();return Zt(),(f,m)=>{const y=F2,g=d2,v=i2,x=n2,b=Z8,k=W8,S=D8,T=pf,I=O8,V=E8,A=Lt("RouterLink"),N=b8,Z=m8,ae=u8,X=o8;return C(),B("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:Se(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(p)]),onMouseleave:u},[w(Dn)?me("v-if",!0):(C(),B("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...ce)=>w(r)&&w(r)(...ce))},[w(o)?(C(),te(y,{key:0})):(C(),te(g,{key:1}))])),s("button",{class:Se(["slidev-icon-btn",{disabled:!w(DS)}]),onClick:m[1]||(m[1]=(...ce)=>w(Pn)&&w(Pn)(...ce))},[J(v)],2),s("button",{class:Se(["slidev-icon-btn",{disabled:!w(NS)}]),title:"Next",onClick:m[2]||(m[2]=(...ce)=>w(On)&&w(On)(...ce))},[J(x)],2),w(Dn)?me("v-if",!0):(C(),B("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=ce=>w(nf)())},[J(b)])),w(xi)?me("v-if",!0):(C(),B("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=ce=>w(af)())},[w(fa)?(C(),te(k,{key:0})):(C(),te(S,{key:1}))])),J(El),w(Dn)?me("v-if",!0):(C(),B(Ee,{key:3},[!w(wt)&&!w(n)&&w(d)?(C(),B(Ee,{key:0},[J(w(d)),J(El)],64)):me("v-if",!0),w(wt)?(C(),B("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=ce=>Cl.value=!w(Cl))},[w(Cl)?(C(),te(T,{key:0})):(C(),te(I,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),me("v-if",!0),w(Dn)?me("v-if",!0):(C(),B(Ee,{key:5},[w(wt)?(C(),te(A,{key:0,to:w(a),class:"slidev-icon-btn",title:"Play Mode"},{default:ne(()=>[J(V)]),_:1},8,["to"])):me("v-if",!0),w(HS)?(C(),te(A,{key:1,to:w(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:ne(()=>[J(N)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(C(),B(Ee,{key:6},[w($e).download?(C(),B("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...ce)=>w(Si)&&w(Si)(...ce))},[J(Z)])):me("v-if",!0)],64)),!w(wt)&&w($e).info&&!w(Dn)?(C(),B("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=ce=>po.value=!w(po))},[J(ae)])):me("v-if",!0),!w(wt)&&!w(Dn)?(C(),te(L2,{key:8},{button:ne(()=>[s("button",M2,[J(X)])]),menu:ne(()=>[J(T2)]),_:1})):me("v-if",!0),w(Dn)?me("v-if",!0):(C(),te(El,{key:9})),s("div",j2,[s("div",N2,[h(ls(w(Ue))+" ",1),s("span",D2,"/ "+ls(w(Ef)),1)])]),J(w(B2))],34)],512)}}}),U2=ie(V2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/NavControls.vue"]]),df={render(){return[]}},ff={render(){return[]}},J2={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},q2=ge({__name:"PresenterMouse",setup(e){return K(le),(t,n)=>{const o=pf;return w(_l).cursor?(C(),B("div",J2,[J(o,{class:"absolute",style:ot({left:`${w(_l).cursor.x}%`,top:`${w(_l).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),W2=ie(q2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),X2=ge({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){K(le),Fe(ct,()=>{var n,o;(n=ct.value)!=null&&n.meta&&ct.value.meta.preload!==!1&&(ct.value.meta.__preloaded=!0),(o=$l.value)!=null&&o.meta&&$l.value.meta.preload!==!1&&($l.value.meta.__preloaded=!0)},{immediate:!0}),Zt();const t=R(()=>Xe.filter(n=>{var o;return((o=n.meta)==null?void 0:o.__preloaded)||n===ct.value}));return(n,o)=>(C(),B(Ee,null,[me(" Global Bottom "),J(w(ff)),me(" Slides "),J(kF,gt(w(JS),{id:"slideshow",tag:"div"}),{default:ne(()=>[(C(!0),B(Ee,null,Bs(w(t),r=>{var l;return Rn((C(),te(w(ya),{key:r.path,is:r==null?void 0:r.component,clicks:r===w(ct)?w(Ot):0,"clicks-elements":((l=r.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Se(w(ma)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[md,r===w(ct)]])}),128))]),_:1},16),me(" Global Top "),J(w(df)),me("v-if",!0),w(wt)?me("v-if",!0):(C(),te(W2,{key:1}))],64))}});const z2=ie(X2,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesShow.vue"]]),K2=ge({__name:"PrintStyle",setup(e){K(le);function t(n,{slots:o}){if(o.default)return Ze("style",o.default())}return(n,o)=>(C(),te(t,null,{default:ne(()=>[h(" @page { size: "+ls(w(Tn))+"px "+ls(w(ia))+"px; margin: 0px; } ",1)]),_:1}))}}),hf=ie(K2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Y2=ge({__name:"Play",setup(e){K(le),S0();const t=W();function n(l){var i;lu.value||((i=l.target)==null?void 0:i.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?On():Pn())}qS(t);const o=R(()=>H_.value||lu.value);Zt();const r=Zt();return(l,i)=>(C(),B(Ee,null,[w(pn)?(C(),te(hf,{key:0})):me("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:ot(w(aa))},[J(uf,{class:"w-full h-full",style:ot({background:"var(--slidev-slide-container-background, black)"}),width:w(pn)?w(rs).width.value:void 0,scale:w(hr),onPointerdown:n},{default:ne(()=>[J(z2,{context:"slide"})]),controls:ne(()=>[s("div",{class:Se(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(o)?"opacity-100 right-0":"opacity-0 p-2",w(Ro)?"pointer-events-none":""]])},[J(U2,{class:"m-auto",persist:w(o)},null,8,["persist"])],2),me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),J(Q0)],64))}}),Z2=ie(Y2,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function mf(e){return typeof e>"u"||e===null}function G2(e){return typeof e=="object"&&e!==null}function Q2(e){return Array.isArray(e)?e:mf(e)?[]:[e]}function eb(e,t){var n,o,r,l;if(t)for(l=Object.keys(t),n=0,o=l.length;n<o;n+=1)r=l[n],e[r]=t[r];return e}function tb(e,t){var n="",o;for(o=0;o<t;o+=1)n+=e;return n}function nb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var sb=mf,ob=G2,rb=Q2,lb=tb,ib=nb,ab=eb,Fa={isNothing:sb,isObject:ob,toArray:rb,repeat:lb,isNegativeZero:ib,extend:ab};function yf(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),o+" "+n):o}function To(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=yf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}To.prototype=Object.create(Error.prototype);To.prototype.constructor=To;To.prototype.toString=function(t){return this.name+": "+yf(this,t)};var Kn=To,cb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ub=["scalar","sequence","mapping"];function pb(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(o){t[String(o)]=n})}),t}function db(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(cb.indexOf(n)===-1)throw new Kn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=pb(t.styleAliases||null),ub.indexOf(this.kind)===-1)throw new Kn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var rt=db;function Fu(e,t){var n=[];return e[t].forEach(function(o){var r=n.length;n.forEach(function(l,i){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(r=i)}),n[r]=o}),n}function fb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function o(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(o);return e}function wi(e){return this.extend(e)}wi.prototype.extend=function(t){var n=[],o=[];if(t instanceof rt)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Kn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(l){if(!(l instanceof rt))throw new Kn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Kn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Kn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof rt))throw new Kn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(wi.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(o),r.compiledImplicit=Fu(r,"implicit"),r.compiledExplicit=Fu(r,"explicit"),r.compiledTypeMap=fb(r.compiledImplicit,r.compiledExplicit),r};var hb=wi,mb=new rt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),yb=new rt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Fb=new rt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),gb=new hb({explicit:[mb,yb,Fb]});function vb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function _b(){return null}function bb(e){return e===null}var kb=new rt("tag:yaml.org,2002:null",{kind:"scalar",resolve:vb,construct:_b,predicate:bb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function xb(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function wb(e){return e==="true"||e==="True"||e==="TRUE"}function Cb(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Sb=new rt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:xb,construct:wb,predicate:Cb,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Eb(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function $b(e){return 48<=e&&e<=55}function Rb(e){return 48<=e&&e<=57}function Ab(e){if(e===null)return!1;var t=e.length,n=0,o=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;o=!0}return o&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!Eb(e.charCodeAt(n)))return!1;o=!0}return o&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!$b(e.charCodeAt(n)))return!1;o=!0}return o&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!Rb(e.charCodeAt(n)))return!1;o=!0}return!(!o||r==="_")}function Tb(e){var t=e,n=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function Ob(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Fa.isNegativeZero(e)}var Pb=new rt("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ab,construct:Tb,predicate:Ob,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Lb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ib(e){return!(e===null||!Lb.test(e)||e[e.length-1]==="_")}function Hb(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var Bb=/^[-+]?[0-9]+e/;function Mb(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Fa.isNegativeZero(e))return"-0.0";return n=e.toString(10),Bb.test(n)?n.replace("e",".e"):n}function jb(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Fa.isNegativeZero(e))}var Nb=new rt("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ib,construct:Hb,predicate:jb,represent:Mb,defaultStyle:"lowercase"}),Db=gb.extend({implicit:[kb,Sb,Pb,Nb]}),Vb=Db,Ff=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),gf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Ub(e){return e===null?!1:Ff.exec(e)!==null||gf.exec(e)!==null}function Jb(e){var t,n,o,r,l,i,a,c=0,u=null,p,d,f;if(t=Ff.exec(e),t===null&&(t=gf.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,o,r));if(l=+t[4],i=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],d=+(t[11]||0),u=(p*60+d)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,o,r,l,i,a,c)),u&&f.setTime(f.getTime()-u),f}function qb(e){return e.toISOString()}var Wb=new rt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Ub,construct:Jb,instanceOf:Date,represent:qb});function Xb(e){return e==="<<"||e===null}var zb=new rt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Xb}),ga=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Kb(e){if(e===null)return!1;var t,n,o=0,r=e.length,l=ga;for(n=0;n<r;n++)if(t=l.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Yb(e){var t,n,o=e.replace(/[\r\n=]/g,""),r=o.length,l=ga,i=0,a=[];for(t=0;t<r;t++)t%4===0&&t&&(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)),i=i<<6|l.indexOf(o.charAt(t));return n=r%4*6,n===0?(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)):n===18?(a.push(i>>10&255),a.push(i>>2&255)):n===12&&a.push(i>>4&255),new Uint8Array(a)}function Zb(e){var t="",n=0,o,r,l=e.length,i=ga;for(o=0;o<l;o++)o%3===0&&o&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[o];return r=l%3,r===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):r===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):r===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function Gb(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Qb=new rt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Kb,construct:Yb,predicate:Gb,represent:Zb}),ek=Object.prototype.hasOwnProperty,tk=Object.prototype.toString;function nk(e){if(e===null)return!0;var t=[],n,o,r,l,i,a=e;for(n=0,o=a.length;n<o;n+=1){if(r=a[n],i=!1,tk.call(r)!=="[object Object]")return!1;for(l in r)if(ek.call(r,l))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function sk(e){return e!==null?e:[]}var ok=new rt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:nk,construct:sk}),rk=Object.prototype.toString;function lk(e){if(e===null)return!0;var t,n,o,r,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(o=i[t],rk.call(o)!=="[object Object]"||(r=Object.keys(o),r.length!==1))return!1;l[t]=[r[0],o[r[0]]]}return!0}function ik(e){if(e===null)return[];var t,n,o,r,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1)o=i[t],r=Object.keys(o),l[t]=[r[0],o[r[0]]];return l}var ak=new rt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:lk,construct:ik}),ck=Object.prototype.hasOwnProperty;function uk(e){if(e===null)return!0;var t,n=e;for(t in n)if(ck.call(n,t)&&n[t]!==null)return!1;return!0}function pk(e){return e!==null?e:{}}var dk=new rt("tag:yaml.org,2002:set",{kind:"mapping",resolve:uk,construct:pk});Vb.extend({implicit:[Wb,zb],explicit:[Qb,ok,ak,dk]});function gu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var fk=new Array(256),hk=new Array(256);for(var vs=0;vs<256;vs++)fk[vs]=gu(vs)?1:0,hk[vs]=gu(vs);function mk(e){return Array.from(new Set(e))}function vu(...e){let t,n,o;e.length===1?(t=0,o=1,[n]=e):[t,n,o=1]=e;const r=[];let l=t;for(;l<n;)r.push(l),l+=o||1;return r}function vf(e,t){if(!t||t==="all"||t==="*")return vu(1,e+1);const n=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[r,l]=o.split("-",2);n.push(...vu(+r,l?+l+1:e+1))}return mk(n).filter(o=>o<=e).sort((o,r)=>o-r)}function _f(e){const t=R(()=>e.value.path),n=R(()=>Xe.length-1),o=R(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=R(()=>nl(o.value)),l=R(()=>Xe.find(f=>f.path===`${o.value}`)),i=R(()=>{var f,m,y;return(y=(m=(f=l.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:y.id}),a=R(()=>{var f,m;return((m=(f=l.value)==null?void 0:f.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),c=R(()=>Xe.find(f=>f.path===`${Math.min(Xe.length,o.value+1)}`)),u=R(()=>Xe.filter(f=>{var m,y;return(y=(m=f.meta)==null?void 0:m.slide)==null?void 0:y.title}).reduce((f,m)=>(va(f,m),f),[])),p=R(()=>_a(u.value,l.value)),d=R(()=>ba(p.value));return{route:e,path:t,total:n,currentPage:o,currentPath:r,currentRoute:l,currentSlideId:i,currentLayout:a,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:d,downloadPDF:Si,next:On,nextSlide:Oo,openInEditor:WS,prev:Pn,prevSlide:Po}}function bf(e,t,n){const o=W(0);et(()=>{mt.afterEach(async()=>{await et(),o.value+=1})});const r=R(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=R(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),i=R(()=>n.value<Xe.length-1||e.value<l.value),a=R(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:l,hasNext:i,hasPrev:a}}const yk=["id"],Fk=ge({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=Kt(n,"clicksElements",t),r=R(()=>({height:`${ia}px`,width:`${Tn}px`}));Zt();const l=R(()=>n.clicks),i=bf(l,n.nav.currentRoute,n.nav.currentPage),a=R(()=>`${n.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return xt(le,je({nav:{...n.nav,...i},configs:$e,themeConfigs:R(()=>$e.themeConfig)})),(c,u)=>{var p;return C(),B("div",{id:w(a),class:"print-slide-container",style:ot(w(r))},[J(w(ff)),J(w(ya),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":w(o),"onUpdate:clicksElements":u[0]||(u[0]=d=>Ae(o)?o.value=d:null),clicks:w(l),"clicks-disabled":!1,class:Se(w(ma)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),me("v-if",!0),J(w(df))],12,yk)}}}),_u=ie(Fk,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),gk=ge({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const t=e;K(le);const n=W(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=R(()=>t.route),r=_f(o);return(i,a)=>(C(),B(Ee,null,[J(_u,{"clicks-elements":n.value,"onUpdate:clicksElements":a[0]||(a[0]=c=>n.value=c),clicks:0,nav:w(r),route:w(o)},null,8,["clicks-elements","nav","route"]),w(fo)?me("v-if",!0):(C(!0),B(Ee,{key:0},Bs(n.value.length,c=>(C(),te(_u,{key:c,clicks:c,nav:w(r),route:w(o)},null,8,["clicks","nav","route"]))),128))],64))}}),vk=ie(gk,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlide.vue"]]),_k={id:"print-content"},bk=ge({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;K(le);const n=R(()=>t.width),o=R(()=>t.width/An),r=R(()=>n.value/o.value),l=R(()=>r.value<An?n.value/Tn:o.value*An/Tn);let i=Xe.slice(0,-1);It.value.query.range&&(i=vf(i.length,It.value.query.range).map(u=>i[u-1]));const a=R(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return xt(wd,l),(c,u)=>(C(),B("div",{id:"print-container",class:Se(w(a))},[s("div",_k,[(C(!0),B(Ee,null,Bs(w(i),p=>(C(),te(vk,{key:p.path,route:p},null,8,["route"]))),128))]),Ft(c.$slots,"controls")],2))}});const kk=ie(bk,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintContainer.vue"]]),xk=ge({__name:"Print",setup(e){return K(le),ps(()=>{pn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(C(),B(Ee,null,[w(pn)?(C(),te(hf,{key:0})):me("v-if",!0),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ot(w(aa))},[J(kk,{class:"w-full h-full",style:ot({background:"var(--slidev-slide-container-background, black)"}),width:w(rs).width.value},null,8,["style","width"])],4)],64))}});const wk=ie(xk,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Print.vue"]]);const Ck={class:"slidev-layout end"},Sk={__name:"end",setup(e){return K(le),(t,n)=>(C(),B("div",Ck," END "))}},Ek=ie(Sk,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/end.vue"]]),$k={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Rk=s("path",{fill:"currentColor",d:"M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"},null,-1),Ak=[Rk];function Tk(e,t){return C(),B("svg",$k,Ak)}const Ok={name:"mdi-react",render:Tk},Pk={class:"slidev-layout cover"},Lk={class:"my-auto w-full"},Ik={__name:"cover",setup(e){return K(le),(t,n)=>(C(),B("div",Pk,[s("div",Lk,[Ft(t.$slots,"default")])]))}},Hk=ie(Ik,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/slidev-theme-dracula/layouts/cover.vue"]]);const kf=e=>(jm("data-v-42c5a5a3"),e=e(),Nm(),e),Bk=kf(()=>s("span",{class:"font-bold"},"Welcome to React",-1)),Mk=kf(()=>s("p",null,[h("Shared by "),s("a",{href:"mailto:siyuan.wang@capgemini.com",target:"_blank",rel:"noopener"},"siyuan.wang")],-1)),jk={__name:"1",setup(e){const t={css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md"};return K(le),(n,o)=>{const r=Ok;return C(),te(Hk,Je(De(t)),{default:ne(()=>[s("h1",null,[J(r,{class:"text-[#4EC5D4] font-normal animate-spin-slow"}),h(),Bk]),Mk]),_:1},16)}}},Nk=ie(jk,[["__scopeId","data-v-42c5a5a3"],["__file","/@slidev/slides/1.md"]]),Dk=["href","innerHTML"],Vk=["href"],Uk=ge({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return K(le),(t,n)=>{const o=Lt("RouterLink");return!w(pn)&&e.title?(C(),te(o,{key:0,to:String(e.to),onClick:n[0]||(n[0]=r=>r.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!w(pn)&&!e.title?(C(),te(o,{key:1,to:String(e.to),onClick:n[1]||(n[1]=r=>r.target.blur())},{default:ne(()=>[Ft(t.$slots,"default")]),_:3},8,["to"])):w(pn)&&e.title?(C(),B("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,Dk)):(C(),B("a",{key:3,href:`#${e.to}`},[Ft(t.$slots,"default")],8,Vk))}}}),xf=ie(Uk,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/Link.vue"]]),Jk=s("span",{class:"font-bold"},"Welcome to React",-1),qk={key:1},Wk={key:2},Xk={key:3},zk={key:4},Kk={key:5},Yk={key:6},Zk={key:7},Gk={key:8},Qk={key:9},ex={key:10},tx={key:11},nx={key:12},sx={key:13},ox={key:14},rx={key:15},lx={key:16},ix={key:17},ax={key:18},cx={key:19},ux={key:20},px={key:21},dx=ge({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(e){return(t,n)=>{const o=Lt("mdi-react");return C(),B("div",null,[+e.no==1?(C(),B(Ee,{key:0},[J(o,{class:"text-[#4EC5D4] font-normal animate-spin-slow"}),h(),Jk],64)):+e.no==2?(C(),B("p",qk,"Lesson 1")):+e.no==3?(C(),B("p",Wk,"Schedule")):+e.no==4?(C(),B("p",Xk,"Thinking")):+e.no==5?(C(),B("p",zk,"What is React?")):+e.no==6?(C(),B("p",Kk,"What is JSX?")):+e.no==7?(C(),B("p",Yk,"JSX in React")):+e.no==8?(C(),B("p",Zk,"React JSX vs Vue Template")):+e.no==9?(C(),B("p",Gk,"Heros with JSX")):+e.no==10?(C(),B("p",Qk,"Components")):+e.no==11?(C(),B("p",ex,"Review components")):+e.no==12?(C(),B("p",tx,"Lifecycle")):+e.no==13?(C(),B("p",nx,"Hooks")):+e.no==14?(C(),B("p",sx,"Ant Design")):+e.no==15?(C(),B("p",ox,"UmiJS")):+e.no==16?(C(),B("p",rx,"Homework")):+e.no==17?(C(),B("p",lx,"State Hooks")):+e.no==18?(C(),B("p",ix,"Context Hooks")):+e.no==19?(C(),B("p",ax,"Ref Hooks")):+e.no==20?(C(),B("p",cx,"Effect Hooks")):+e.no==21?(C(),B("p",ux,"Performance Hooks")):+e.no==22?(C(),B("p",px,"Other Hooks")):me("v-if",!0)])}}}),fx=ie(dx,[["__file","/@slidev/titles.md"]]),hx=ge({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(e){const t=e;K(le);const n=R(()=>[...Cd(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(o,r)=>{const l=xf,i=Lt("TocList",!0);return e.list&&e.list.length>0?(C(),B("ol",{key:0,class:Se(w(n))},[(C(!0),B(Ee,null,Bs(e.list,a=>(C(),B("li",{key:a.path,class:Se(["slidev-toc-item",[{"slidev-toc-item-active":a.active},{"slidev-toc-item-parent-active":a.activeParent}]])},[J(l,{to:a.path},{default:ne(()=>[J(w(fx),{no:a.path},null,8,["no"])]),_:2},1032,["to"]),a.children.length>0?(C(),te(i,{key:0,level:e.level+1,list:a.children,"list-class":e.listClass},null,8,["level","list","list-class"])):me("v-if",!0)],2))),128))],2)):me("v-if",!0)}}});const mx=ie(hx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/TocList.vue"]]),yx=ge({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(e){const t=e,n=K(le);function o(a,c=1){if(c>Number(t.maxDepth))return[];if(c<Number(t.minDepth)){const u=a.find(p=>p.active||p.activeParent);return u?o(u.children,c+1):[]}return a.map(u=>({...u,children:o(u.children,c+1)}))}function r(a){return a.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:r(c.children)}))}function l(a){const c=a.some(u=>u.active||u.activeParent||u.hasActiveParent);return a.filter(()=>c).map(u=>({...u,children:l(u.children)}))}const i=R(()=>{const a=n==null?void 0:n.nav.tree;if(!a)return[];let c=o(a);return t.mode==="onlyCurrentTree"?c=r(c):t.mode==="onlySiblings"&&(c=l(c)),c});return(a,c)=>{const u=mx;return C(),B("div",{class:"slidev-toc",style:ot(`column-count:${e.columns}`)},[J(u,{level:1,list:w(i),"list-class":e.listClass},null,8,["list","list-class"])],4)}}}),Fx=ie(yx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/Toc.vue"]]),gx={class:"slidev-layout center h-full grid place-content-center"},vx={class:"my-auto"},_x={__name:"center",setup(e){return K(le),(t,n)=>(C(),B("div",gx,[s("div",vx,[Ft(t.$slots,"default")])]))}},bx=ie(_x,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/center.vue"]]),kx=s("h1",null,"Lesson 1",-1),xx={__name:"2",setup(e){const t={layout:"center",hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return K(le),(n,o)=>{const r=Fx;return C(),te(bx,Je(De(t)),{default:ne(()=>[kx,J(r)]),_:1},16)}}},wx=ie(xx,[["__file","/@slidev/slides/2.md"]]),Cx={class:"slidev-layout default"},Sx={__name:"default",setup(e){return K(le),(t,n)=>(C(),B("div",Cx,[Ft(t.$slots,"default")]))}},Ye=ie(Sx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/default.vue"]]),Ex=s("h1",null,"Schedule",-1),$x=s("p",null,"本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：",-1),Rx=s("div",{class:"mt-6"},null,-1),Ax=s("h4",null,[s("strong",null,"基础"),h("和"),s("strong",null,"进阶"),h("：")],-1),Tx=s("ul",null,[s("li",null,"基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；"),s("li",null,"进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；")],-1),Ox=s("div",{class:"mt-5"},null,-1),Px=s("h4",null,"“副”作用：",-1),Lx=s("ul",null,[s("li",null,[h("适当普及 ES6+、Typescript 以及"),s("span",{class:"text-highlight"},"函数式编程"),h("；")]),s("li",null,"在每次课程的最后布置作业；"),s("li",null,"培训的最后，提供实战类的项目；")],-1),Ix=s("div",{class:"mt-5"},null,-1),Hx=s("h4",null,"真正的计划",-1),Bx=s("p",null,"课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；",-1),Mx={__name:"3",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./schedule.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[Ex,$x,Rx,Ax,Tx,Ox,Px,Lx,Ix,Hx,Bx]),_:1},16))}},jx=ie(Mx,[["__file","/@slidev/slides/3.md"]]),Nx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Dx=s("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),Vx=[Dx];function Ux(e,t){return C(),B("svg",Nx,Vx)}const Jx={name:"ph-clipboard",render:Ux},qx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Wx=s("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Xx=[Wx];function zx(e,t){return C(),B("svg",qx,Xx)}const Kx={name:"ph-check-circle",render:zx},Yx=["title"],Zx=ge({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;K(le);const n=K(io),o=K(zn),r=K(ao);function l(d=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",y=m.length;for(let g=0;g<d;g++)f.push(m.charAt(Math.floor(Math.random()*y)));return f.join("")}const i=W(),a=$t();ds(()=>{const d=t.at==null?o==null?void 0:o.value.length:t.at,f=R(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(d||0)),t.ranges.length-1)),m=R(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const y=l(),g=Lg(t.ranges.length-1).map(v=>y+v);o!=null&&o.value&&(o.value.push(...g),Yr(()=>g.forEach(v=>ai(o.value,v)),a))}ps(()=>{if(!i.value)return;const g=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const v of g){const x=Array.from(v.querySelectorAll(".line")),b=vf(x.length,m.value);if(x.forEach((k,S)=>{const T=b.includes(S+1);k.classList.toggle(Wn,!0),k.classList.toggle("highlighted",T),k.classList.toggle("dishonored",!T)}),t.maxHeight){const k=v.querySelector(".line.highlighted");k&&k.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=$v();function p(){var f,m;const d=(m=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;d&&u(d)}return(d,f)=>{const m=Kx,y=Jx;return C(),B("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:ot({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Ft(d.$slots,"default"),w($e).codeCopy?(C(),B("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(c)?"Copied":"Copy",onClick:f[0]||(f[0]=g=>p())},[w(c)?(C(),te(m,{key:0,class:"p-2 w-8 h-8"})):(C(),te(y,{key:1,class:"p-2 w-8 h-8"}))],8,Yx)):me("v-if",!0)],4)}}}),Jo=ie(Zx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Gx=s("h1",null,"Thinking",-1),Qx=s("p",null,"为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？",-1),ew=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"<!-- BlogPost.vue -->")]),h(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}},">")])])])],-1),tw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FF79C6"}},"template"),s("span",{style:{color:"#F8F8F2"}},">")]),h(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"</"),s("span",{style:{color:"#FF79C6"}},"script"),s("span",{style:{color:"#F8F8F2"}},">")])])])],-1),nw={__name:"4",setup(e){const t={transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./warm-up.md"};return K(le),(n,o)=>{const r=Jo;return C(),te(Ye,Je(De(t)),{default:ne(()=>[Gx,Qx,J(r,gt({},{ranges:["3"]}),{default:ne(()=>[ew]),_:1},16),J(r,gt({},{ranges:["2"]}),{default:ne(()=>[tw]),_:1},16)]),_:1},16)}}},sw=ie(nw,[["__file","/@slidev/slides/4.md"]]),bu=["ul","ol"],wf=ge({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var a,c;const e=Cr("click"),t=Cr("after"),n=(u,p,d)=>Rn(u,[[p,d,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(a=this.$slots).default)==null?void 0:c.call(a);if(!o)return;o=Cd(o);const r=(u,p=1)=>{let d=0;return[u.map(m=>{if(!Gt(m))return m;if(bu.includes(m.type)&&Array.isArray(m.children)){const[y,g]=i(m.children,p+1);return d+=g,Ze(m,{},[y])}return Ze(m)}),d]};let l=0;const i=(u,p=1)=>{let d=0;return[u.map(m=>{if(!Gt(m))return m;const y=d%this.every===0?e:t;let g,v=0;if(p<this.depth&&Array.isArray(m.children)){const[b,k]=r(m.children,p);g=Ze(m,{},[b]),v=k,d+=k+1}else g=Ze(m),d++;const x=this.at!=null?Number(this.at)+Math.floor(l/this.every)+p:(p-1-v).toString();return l++,n(g,y,typeof x=="string"&&!x.startsWith("-")?`+${x}`:x)}),d]};return o.length===1&&bu.includes(o[0].type)&&Array.isArray(o[0].children)?Ze(o[0],{},[i(o[0].children)[0]]):i(o)[0]}}),ow="/react-shared-ppt/assets/nextjs-3fe22fdd.png",rw="/react-shared-ppt/assets/remix-6950a405.png",lw="/react-shared-ppt/assets/umijs-ecd129e6.png",iw={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},aw=ge({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return K(le),(n,o)=>(C(),B("div",iw,[s("div",{class:Se(["col-left",t.class])},[Ft(n.$slots,"default")],2),s("div",{class:Se(["col-right",t.class])},[Ft(n.$slots,"right")],2)]))}}),cw=ie(aw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/two-cols.vue"]]),uw=s("h1",null,"What is React?",-1),pw=s("div",{class:"flex items-center justify-center mr-4 py-4 bg-black rounded"},[s("p",null,[s("span",{class:"text-gradient-red text-[36px]"},"f(state) = UI")])],-1),dw={class:"w-100 mt-5"},fw=s("ul",null,[s("li",null,"React 是一个用于渲染用户界面（UI）的 JavaScript 工具库"),s("li",null,"用组件创建用户界面"),s("li",null,"用代码和标签编写组件"),s("li",null,"在任何地方添加交互"),s("li",null,"渐进式 JavaScript 框架"),s("li",null,"NextJs / Remix / UmiJs")],-1),hw=s("p",null,[h("Read more about "),s("a",{href:"https://react.dev/",target:"_blank",rel:"noopener"},"React")],-1),mw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," FC } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'")]),h(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),yw=s("img",{src:ow,class:"relative z-[2] w-full -mt-40"},null,-1),Fw=s("img",{src:rw,class:"relative w-full z-[3] -mt-16"},null,-1),gw=s("img",{src:lw,class:"relative w-full z-[3] -mt-16"},null,-1),vw={__name:"5",setup(e){const t={clicks:9,layout:"two-cols",transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md"};return K(le),(n,o)=>{const r=wf,l=Jo,i=Cr("click");return C(),te(cw,Je(De(t)),{right:ne(()=>[Rn((C(),B("div",null,[J(l,gt({at:2},{ranges:["10,11","3-9,12-14","6,9","all"]}),{default:ne(()=>[mw]),_:1},16)])),[[i,2]]),J(r,{at:"6"},{default:ne(()=>[yw,Fw,gw]),_:1})]),default:ne(()=>[uw,pw,s("div",dw,[J(r,null,{default:ne(()=>[fw]),_:1})]),hw]),_:1},16)}}},_w=ie(vw,[["__file","/@slidev/slides/5.md"]]),bw=s("h1",null,"What is JSX?",-1),kw=s("p",null,"给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？",-1),xw=s("iframe",{src:"https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark",class:"w-full h-[calc(100%-55px)]"},null,-1),ww={__name:"6",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[bw,kw,me(" 对比：不用 JSX 怎么处理，用 JSX 怎么写 "),xw]),_:1},16))}},Cw=ie(ww,[["__file","/@slidev/slides/6.md"]]),Sw=s("h1",null,"JSX in React",-1),Ew=s("p",null,'JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。',-1),$w=s("h3",null,"一个 🌰 (例子)",-1),Rw=s("div",{class:"h-2"},null,-1),Aw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"AlertButton"),s("span",{style:{color:"#F8F8F2"}},"({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),s("span",{style:{color:"#F8F8F2"}}," }) {")]),h(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),Tw={__name:"7",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(le),(n,o)=>{const r=Jo;return C(),te(Ye,Je(De(t)),{default:ne(()=>[Sw,Ew,$w,Rw,J(r,gt({},{ranges:["all","1-7","9-18","2,6,10,17","3,5,11-12,16","13,15","4,14"]}),{default:ne(()=>[Aw]),_:1},16)]),_:1},16)}}},Ow=ie(Tw,[["__file","/@slidev/slides/7.md"]]),Pw=s("h1",null,"React JSX vs Vue Template",-1),Lw=s("p",null,[s("span",{class:"text-gray-400"},"下表为 React JSX 和 Vue Template 的异同。")],-1),Iw=s("thead",null,[s("tr",null,[s("th",null,"对比"),s("th",null,"React"),s("th",null,"Vue")])],-1),Hw=s("tr",null,[s("td",null,"组件调用"),s("td",null,"大驼峰"),s("td",null,"大驼峰、小驼峰、短横线均可")],-1),Bw=s("tr",null,[s("td",null,"原生标签"),s("td",null,[s("strong",null,"必须"),h("闭合（包括自闭合）")]),s("td",null,"无区别")],-1),Mw=s("tr",null,[s("td",null,"作用域"),s("td",null,"全局、函数和块级作用域"),s("td",null,"绑定到 Vue 组件实例、全局 Context 和 Slot context")],-1),jw=s("tr",null,[s("td",null,"变量、表达式"),s("td",null,[h("用 "),s("code",null,"{}"),h(" 表示")]),s("td",null,[h("用 "),s("code",null,"{{}}"),h(" 表示")])],-1),Nw=s("tr",null,[s("td",null,"属性"),s("td",null,[h("小驼峰，"),s("em",null,"class 改为 className")]),s("td",null,"小驼峰、短横线命名均可")],-1),Dw=s("tr",null,[s("td",null,"动态属性"),s("td",null,[h("参数后加 "),s("code",null,"{}")]),s("td",null,[h("参数前加 "),s("code",null,":")])],-1),Vw=s("tr",null,[s("td",null,"事件"),s("td",null,[h("事件后加 "),s("code",null,"{}"),h("，值为函数")]),s("td",null,[h("事件前加 "),s("code",null,"v-on"),h(" 或 "),s("code",null,"@")])],-1),Uw=s("td",null,[s("code",null,"v-for"),h(" / "),s("code",null,"v-if"),h(" / "),s("code",null,"v-show"),h(" …")],-1),Jw=ge({__name:"8",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};K(le);const n=W(!1),o=()=>n.value=!n.value;return(r,l)=>{const i=Lt("uim-rocket");return C(),te(Ye,Je(De(t)),{default:ne(()=>[Pw,Lw,s("table",null,[Iw,s("tbody",null,[Hw,Bw,Mw,jw,Nw,Dw,Vw,s("tr",null,[s("td",null,[s("span",{class:Se({"text-highlight-2 ":n.value})},"动态渲染",2)]),s("td",null,[s("span",{class:Se({"text-highlight-2 ":n.value})},"一切皆为 JavaScript ",2)]),Uw])])]),s("p",null,[s("span",{class:Se(["absolute left-[20px] bottom-[42px]",{"text-highlight-2 ":n.value}]),onClick:o},[J(i)],2)]),me(`
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
`)]),_:1},16)}}}),qw=ie(Jw,[["__file","/@slidev/slides/8.md"]]),Ww=s("h1",null,"Heros with JSX",-1),Xw=s("p",null,"接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。",-1),zw=s("iframe",{src:"https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark",class:"w-full h-[calc(100%-55px)]"},null,-1),Kw={__name:"9",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[Ww,Xw,zw]),_:1},16))}},Yw=ie(Kw,[["__file","/@slidev/slides/9.md"]]),Zw=s("h1",null,"Components",-1),Gw=s("p",null,[h("和 Vue 类似，React 也是以"),s("strong",null,"组件"),h("的形式构建页面。")],-1),Qw={class:"flex gap-x-4"},eC={class:"w-1/2"},tC=s("h3",null,"Class Component",-1),nC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),sC={class:"w-1/2"},oC=s("h3",null,"Function Component",-1),rC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"*"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," React "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),lC={__name:"10",setup(e){const t={clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md"};return K(le),(n,o)=>{const r=Jo;return C(),te(Ye,Je(De(t)),{default:ne(()=>[Zw,Gw,s("div",Qw,[s("div",eC,[tC,J(r,gt({},{ranges:["all","10,15","all","0"]}),{default:ne(()=>[nC]),_:1},16)]),s("div",sC,[oC,J(r,gt({at:0},{ranges:["all","8,13","0","all"]}),{default:ne(()=>[rC]),_:1},16)])])]),_:1},16)}}},iC=ie(lC,[["__file","/@slidev/slides/10.md"]]),aC=s("h1",null,"Review components",-1),cC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"*"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"as"),s("span",{style:{color:"#F8F8F2"}}," React "),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"react"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},";")]),h(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),uC={__name:"11",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return K(le),(n,o)=>{const r=Jo;return C(),te(Ye,Je(De(t)),{default:ne(()=>[aC,J(r,gt({},{ranges:["all","3,19","4,18","9-14"]}),{default:ne(()=>[cC]),_:1},16)]),_:1},16)}}},pC=ie(uC,[["__file","/@slidev/slides/11.md"]]),dC="/react-shared-ppt/assets/old-lifecycle-fb958309.webp",fC="/react-shared-ppt/assets/new-lifecycle-469c3870.webp",hC=s("h1",null,"Lifecycle",-1),mC=s("p",null,[h("React 的"),s("strong",null,"类组件"),h("有生命周期，而"),s("strong",null,"函数式组件"),h("的生命周期是 "),s("em",null,"hooks"),h("。")],-1),yC=s("p",null,[h("版本 "),s("code",null,"v16.3"),h(" 是 React 生命周期的分界线；")],-1),FC={class:"flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]"},gC={class:"w-1/2 text-center"},vC=s("h3",null,"旧生命周期",-1),_C=s("img",{src:dC,class:"mt-4"},null,-1),bC=[vC,_C],kC={class:"relative w-15 flex justify-center"},xC=s("div",{class:"absolute top-[8px]"},"v16.3",-1),wC=s("div",{class:"absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"},null,-1),CC=[xC,wC],SC={class:"w-1/2 text-center"},EC=s("h3",null,"新生命周期",-1),$C=s("img",{src:fC,class:"mt-4"},null,-1),RC=[EC,$C],AC=s("p",null,[s("a",{href:"https://juejin.cn/post/6914112105964634119",target:"_blank"},[s("a",{href:"https://juejin.cn/post/6914112105964634119",target:"_blank",rel:"noopener"},"https://juejin.cn/post/6914112105964634119")])],-1),TC={__name:"12",setup(e){const t={clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md"};return K(le),(n,o)=>{const r=Cr("click");return C(),te(Ye,Je(De(t)),{default:ne(()=>[hC,mC,yC,s("div",FC,[Rn((C(),B("div",gC,bC)),[[r,2]]),Rn((C(),B("div",kC,CC)),[[r,1]]),Rn((C(),B("div",SC,RC)),[[r,2]])]),AC]),_:1},16)}}},OC=ie(TC,[["__file","/@slidev/slides/12.md"]]),PC=ge({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return J(wf,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),LC=s("h1",null,"Hooks",-1),IC=s("p",null,"也称钩子，在 React 中 Hooks 分为两类：",-1),HC=s("p",null,[h("React 提供了很多内置 Hooks，主要分为"),s("strong",null,"六种"),h("：")],-1),BC=s("code",null,"useState",-1),MC=s("code",null,"useReducer",-1),jC=s("code",null,"useContext",-1),NC=s("code",null,"useRef",-1),DC=s("code",null,"useImperativeHandle",-1),VC=s("code",null,"useEffect",-1),UC=s("code",null,"useMemo",-1),JC=s("code",null,"useId",-1),qC=s("p",null,"自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。",-1),WC={__name:"13",setup(e){const t={clicks:2,srcSequence:"./pages/lesson_1/index.md,./hooks.md"},n=K(le);return(o,r)=>{const l=xf,i=PC;return C(),te(Ye,Je(De(t)),{default:ne(()=>[LC,IC,s("ul",null,[s("li",null,[s("span",{class:Se({"text-gradient-red":w(n).nav.clicks===1})},"内置 Built-in hooks；",2)]),s("li",null,[s("span",{class:Se({"text-gradient-red":w(n).nav.clicks===2})},"自定义 Custom hooks",2),h("；")])]),J(i,{at:"0"},{default:ne(()=>[HC,s("ul",null,[s("li",null,[h("(2) "),J(l,{to:"17"},{default:ne(()=>[h("状态 Hooks")]),_:1}),h(" - "),BC,h(" / "),MC,h("；")]),s("li",null,[h("(1) "),J(l,{to:"18"},{default:ne(()=>[h("上下文 Hooks")]),_:1}),h(" - "),jC,h("；")]),s("li",null,[h("(2) "),J(l,{to:"19"},{default:ne(()=>[h("引用 Hooks")]),_:1}),h(" - "),NC,h(" / "),DC,h("；")]),s("li",null,[h("(3) "),J(l,{to:"20"},{default:ne(()=>[h("副作用 Hooks")]),_:1}),h(" - "),VC,h("；")]),s("li",null,[h("(4) "),J(l,{to:"21"},{default:ne(()=>[h("性能 Hooks")]),_:1}),h(" - "),UC,h("；")]),s("li",null,[h("(3) "),J(l,{to:"22"},{default:ne(()=>[h("其他 Hooks")]),_:1}),h(" - "),JC,h("；")])])]),_:1}),J(i,{at:"1"},{default:ne(()=>[qC]),_:1})]),_:1},16)}}},XC=ie(WC,[["__file","/@slidev/slides/13.md"]]),zC=s("h1",null,"Ant Design",-1),KC=s("p",null,[s("a",{href:"https://ant.design/docs/spec/introduce-cn",target:"_blank",rel:"noopener"},"https://ant.design/docs/spec/introduce-cn")],-1),YC={__name:"14",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./ant-design.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[zC,KC]),_:1},16))}},ZC=ie(YC,[["__file","/@slidev/slides/14.md"]]),GC=s("h1",null,"UmiJS",-1),QC=s("p",null,[s("a",{href:"https://umijs.org/docs/introduce/introduce",target:"_blank",rel:"noopener"},"https://umijs.org/docs/introduce/introduce")],-1),eS={__name:"15",setup(e){const t={clicks:2,srcSequence:"./pages/lesson_1/index.md,./umijs.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[GC,QC]),_:1},16))}},tS=ie(eS,[["__file","/@slidev/slides/15.md"]]),nS=s("h1",null,"Homework",-1),sS={__name:"16",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./homework.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[nS]),_:1},16))}},oS=ie(sS,[["__file","/@slidev/slides/16.md"]]),rS=s("p",null,"State hooks 是指允许组件“记住”信息状态的函数钩子，共有两种：",-1),lS=s("code",null,"useState",-1),iS=s("code",null,"useReducer",-1),aS=s("br",null,null,-1),cS=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"App"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," React."),s("span",{style:{color:"#50FA7B"}},"useState"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),s("span",{style:{color:"#F8F8F2"}},"[]>([]);")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," [loading, setLoading] "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," React."),s("span",{style:{color:"#50FA7B"}},"useState"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),s("span",{style:{color:"#F8F8F2"}},">("),s("span",{style:{color:"#BD93F9"}},"false"),s("span",{style:{color:"#F8F8F2"}},");")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  React."),s("span",{style:{color:"#50FA7B"}},"useEffect"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},"setLoading"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#BD93F9"}},"true"),s("span",{style:{color:"#F8F8F2"}},");")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},"fetch"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"heros.json"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},")")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"then"),s("span",{style:{color:"#F8F8F2"}},"(({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#50FA7B"}},"setHeros"),s("span",{style:{color:"#F8F8F2"}},"(users);")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      })")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"catch"),s("span",{style:{color:"#F8F8F2"}},"(("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," console."),s("span",{style:{color:"#50FA7B"}},"error"),s("span",{style:{color:"#F8F8F2"}},"(error))")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"finally"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"setLoading"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#BD93F9"}},"false"),s("span",{style:{color:"#F8F8F2"}},"));")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }, []);")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"App"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," React."),s("span",{style:{color:"#50FA7B"}},"useState"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),s("span",{style:{color:"#F8F8F2"}},"[]>([]);")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," [loading, setLoading] "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," React."),s("span",{style:{color:"#50FA7B"}},"useState"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),s("span",{style:{color:"#F8F8F2"}},">("),s("span",{style:{color:"#BD93F9"}},"false"),s("span",{style:{color:"#F8F8F2"}},");")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  React."),s("span",{style:{color:"#50FA7B"}},"useEffect"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},"setLoading"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#BD93F9"}},"true"),s("span",{style:{color:"#F8F8F2"}},");")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},"fetch"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"heros.json"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},")")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"then"),s("span",{style:{color:"#F8F8F2"}},"(({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#50FA7B"}},"setHeros"),s("span",{style:{color:"#F8F8F2"}},"(users);")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      })")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"catch"),s("span",{style:{color:"#F8F8F2"}},"(("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," console."),s("span",{style:{color:"#50FA7B"}},"error"),s("span",{style:{color:"#F8F8F2"}},"(error))")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"finally"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"setLoading"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#BD93F9"}},"false"),s("span",{style:{color:"#F8F8F2"}},"));")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }, []);")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),uS=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"reducer"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"state"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"action"),s("span",{style:{color:"#F8F8F2"}},") {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"if"),s("span",{style:{color:"#F8F8F2"}}," (action.type "),s("span",{style:{color:"#FF79C6"}},"==="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"setHeros"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," ["),s("span",{style:{color:"#FF79C6"}},"..."),s("span",{style:{color:"#F8F8F2"}},"action.payload];")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"throw"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Error"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"Unknown action."),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},");")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"App"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," [heros, dispatch] "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"useReducer"),s("span",{style:{color:"#F8F8F2"}},"(reducer, [] "),s("span",{style:{color:"#6272A4"}},"/* ,initFn */"),s("span",{style:{color:"#F8F8F2"}},");")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  React."),s("span",{style:{color:"#50FA7B"}},"useEffect"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},"fetch"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"heros.json"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},")")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"then"),s("span",{style:{color:"#F8F8F2"}},"(({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#50FA7B"}},"dispatch"),s("span",{style:{color:"#F8F8F2"}},"({ type"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"setHeros"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},", payload"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," users });")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      })")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"catch"),s("span",{style:{color:"#F8F8F2"}},"(("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," console."),s("span",{style:{color:"#50FA7B"}},"error"),s("span",{style:{color:"#F8F8F2"}},"(error));")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }, []);")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"reducer"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"state"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"action"),s("span",{style:{color:"#F8F8F2"}},") {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"if"),s("span",{style:{color:"#F8F8F2"}}," (action.type "),s("span",{style:{color:"#FF79C6"}},"==="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"setHeros"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," ["),s("span",{style:{color:"#FF79C6"}},"..."),s("span",{style:{color:"#F8F8F2"}},"action.payload];")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"throw"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"Error"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"Unknown action."),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},");")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"default"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"App"),s("span",{style:{color:"#F8F8F2"}},"() {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}}," [heros, dispatch] "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"useReducer"),s("span",{style:{color:"#F8F8F2"}},"(reducer, [] "),s("span",{style:{color:"#6272A4"}},"/* ,initFn */"),s("span",{style:{color:"#F8F8F2"}},");")]),h(`
`),s("span",{class:"line"}),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  React."),s("span",{style:{color:"#50FA7B"}},"useEffect"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},"fetch"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"heros.json"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},")")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"then"),s("span",{style:{color:"#F8F8F2"}},"(({ "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#50FA7B"}},"dispatch"),s("span",{style:{color:"#F8F8F2"}},"({ type"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"setHeros"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},", payload"),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," users });")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      })")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      ."),s("span",{style:{color:"#50FA7B"}},"catch"),s("span",{style:{color:"#F8F8F2"}},"(("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," console."),s("span",{style:{color:"#50FA7B"}},"error"),s("span",{style:{color:"#F8F8F2"}},"(error));")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }, []);")]),h(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),pS=ge({__name:"17",setup(e){const t={clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/state.md"},n=K(le),o=pa(),r=()=>o.back();return(l,i)=>{const a=Lt("mdi-arrow-left"),c=Lt("CodeBlockWrapper");return C(),te(Ye,Je(De(t)),{default:ne(()=>[s("h1",null,[s("span",{class:"hover:underline hover:underline-dashed cursor-pointer",onClick:r},[J(a),h("State Hooks")])]),rS,s("ul",null,[s("li",null,[lS,h("："),s("span",{class:Se({"text-gradient-red":w(n).nav.clicks<3&&w(n).nav.clicks>=1})},"声明可以直接更新的状态变量；",2)]),s("li",null,[iS,h("："),s("span",{class:Se({"text-gradient-red":w(n).nav.clicks>=3})},"声明一个状态变量，参数为更新逻辑；",2)])]),aS,w(n).nav.clicks<3&&w(n).nav.clicks>=1?(C(),te(c,gt({key:0},{at:1},{ranges:["2,3","6,9,12"]}),{default:ne(()=>[cS]),_:1},16)):me("v-if",!0),w(n).nav.clicks>=3?(C(),te(c,gt({key:1},{at:3},{ranges:["7","1-4","7","12"]}),{default:ne(()=>[uS]),_:1},16)):me("v-if",!0)]),_:1},16)}}}),dS=ie(pS,[["__file","/@slidev/slides/17.md"]]),fS=s("p",null,[h("在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 "),s("code",null,"createContext"),h(" 配合使用：")],-1),hS=s("iframe",{src:"https://stackblitz.com/edit/react-ts-wwsbt2?embed=1&theme=dark",class:"w-full h-[calc(100%-60px)]"},null,-1),mS=ge({__name:"18",setup(e){const t={clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/context.md"};K(le);const n=pa(),o=()=>n.back();return(r,l)=>{const i=Lt("mdi-arrow-left");return C(),te(Ye,Je(De(t)),{default:ne(()=>[s("h1",null,[s("span",{class:"hover:underline hover:underline-dashed cursor-pointer",onClick:o},[J(i),h("Context Hooks")])]),fS,hS]),_:1},16)}}}),yS=ie(mS,[["__file","/@slidev/slides/18.md"]]),FS=s("p",null,"Ref hooks 允许组件保存一些不用于渲染的信息。",-1),gS=s("code",null,"useRef",-1),vS=s("code",null,"useImperativeHandle",-1),_S=s("iframe",{src:"https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=components/CounterWithRef.tsx",class:"w-full h-[calc(100%-140px)] mt-[16px]"},null,-1),bS=ge({__name:"19",setup(e){const t={clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/ref.md"},n=K(le),o=pa(),r=()=>o.back();return(l,i)=>{const a=Lt("mdi-arrow-left");return C(),te(Ye,Je(De(t)),{default:ne(()=>[s("h1",null,[s("span",{class:"hover:underline hover:underline-dashed cursor-pointer",onClick:r},[J(a),h("Ref Hooks")])]),FS,s("ul",null,[s("li",null,[gS,h("："),s("span",{class:Se({"text-gradient-red":w(n).nav.clicks===1})},"引用渲染不需要的值；",2)]),s("li",null,[vS,h("："),s("span",{class:Se({"text-gradient-red":w(n).nav.clicks===2})},"自定义公开 ref 的句柄；",2)])]),_S]),_:1},16)}}}),kS=ie(bS,[["__file","/@slidev/slides/19.md"]]),xS=s("h1",null,"Effect Hooks",-1),wS={__name:"20",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[xS]),_:1},16))}},CS=ie(wS,[["__file","/@slidev/slides/20.md"]]),SS=s("h1",null,"Performance Hooks",-1),ES={__name:"21",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[SS]),_:1},16))}},$S=ie(ES,[["__file","/@slidev/slides/21.md"]]),RS=s("h1",null,"Other Hooks",-1),AS={__name:"22",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"};return K(le),(n,o)=>(C(),te(Ye,Je(De(t)),{default:ne(()=>[RS]),_:1},16))}},TS=ie(AS,[["__file","/@slidev/slides/22.md"]]),OS=[{path:"1",name:"page-1",component:Nk,meta:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md",slide:{raw:null,title:'<mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>',level:1,content:`# <mdi-react class="text-[#4EC5D4] font-normal animate-spin-slow" /> <span class="font-bold">Welcome to React</span>

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
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:wx,meta:{layout:"center",hideInToc:!0,title:"Lesson 1",srcSequence:"./pages/lesson_1/index.md",slide:{raw:null,title:"Lesson 1",level:1,content:`# Lesson 1

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

课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；`,frontmatter:{title:"Schedule"},index:0,start:0,end:25},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/schedule.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:sw,meta:{transition:"slide-up",title:"Thinking",srcSequence:"./pages/lesson_1/index.md,./warm-up.md",slide:{raw:`---
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
`,id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:_w,meta:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md",slide:{raw:`---
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
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Cw,meta:{title:"What is JSX?",srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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

那如果我们用 React 实现的话，会是什么样子的呢？`,index:5,start:0,end:44,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
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
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Ow,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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
`,id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:qw,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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
<\/script>`,frontmatter:{hideInToc:!0},index:2,start:96,end:133},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Yw,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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

和刚才一样，我们先把所有的方法折叠起来，一行一行的为大家解释。`,index:8,start:133,end:152,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
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
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:iC,meta:{title:"Components",clicks:3,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
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
`,id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:pC,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
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
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:OC,meta:{title:"Lifecycle",clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md",slide:{raw:`---
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
`,id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:XC,meta:{title:"Hooks",clicks:2,srcSequence:"./pages/lesson_1/index.md,./hooks.md",slide:{raw:`---
title: Hooks
clicks: 2
---

# Hooks

也称钩子，在 React 中 Hooks 分为两类：

- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >内置 Built-in hooks；</span>
- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义 Custom hooks</span>；

<v-click at="0">

React 提供了很多内置 Hooks，主要分为**六种**：

- (2) <Link to="17">状态 Hooks</Link> - \`useState\` / \`useReducer\`；
- (1) <Link to="18">上下文 Hooks</Link> - \`useContext\`；
- (2) <Link to="19">引用 Hooks</Link> - \`useRef\` / \`useImperativeHandle\`；
- (3) <Link to="20">副作用 Hooks</Link> - \`useEffect\`；
- (4) <Link to="21">性能 Hooks</Link> - \`useMemo\`；
- (3) <Link to="22">其他 Hooks</Link> - \`useId\`；

</v-click>

<v-click at="1">

自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。

</v-click>
`,title:"Hooks",level:1,content:`# Hooks

也称钩子，在 React 中 Hooks 分为两类：

- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >内置 Built-in hooks；</span>
- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义 Custom hooks</span>；

<v-click at="0">

React 提供了很多内置 Hooks，主要分为**六种**：

- (2) <Link to="17">状态 Hooks</Link> - \`useState\` / \`useReducer\`；
- (1) <Link to="18">上下文 Hooks</Link> - \`useContext\`；
- (2) <Link to="19">引用 Hooks</Link> - \`useRef\` / \`useImperativeHandle\`；
- (3) <Link to="20">副作用 Hooks</Link> - \`useEffect\`；
- (4) <Link to="21">性能 Hooks</Link> - \`useMemo\`；
- (3) <Link to="22">其他 Hooks</Link> - \`useId\`；

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

React 提供了很多内置 Hooks，主要分为**六种**：

- (2) <Link to="17">状态 Hooks</Link> - \`useState\` / \`useReducer\`；
- (1) <Link to="18">上下文 Hooks</Link> - \`useContext\`；
- (2) <Link to="19">引用 Hooks</Link> - \`useRef\` / \`useImperativeHandle\`；
- (3) <Link to="20">副作用 Hooks</Link> - \`useEffect\`；
- (4) <Link to="21">性能 Hooks</Link> - \`useMemo\`；
- (3) <Link to="22">其他 Hooks</Link> - \`useId\`；

</v-click>

<v-click at="1">

自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。

</v-click>
`,title:"Hooks",level:1,content:`# Hooks

也称钩子，在 React 中 Hooks 分为两类：

- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >内置 Built-in hooks；</span>
- <span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义 Custom hooks</span>；

<v-click at="0">

React 提供了很多内置 Hooks，主要分为**六种**：

- (2) <Link to="17">状态 Hooks</Link> - \`useState\` / \`useReducer\`；
- (1) <Link to="18">上下文 Hooks</Link> - \`useContext\`；
- (2) <Link to="19">引用 Hooks</Link> - \`useRef\` / \`useImperativeHandle\`；
- (3) <Link to="20">副作用 Hooks</Link> - \`useEffect\`；
- (4) <Link to="21">性能 Hooks</Link> - \`useMemo\`；
- (3) <Link to="22">其他 Hooks</Link> - \`useId\`；

</v-click>

<v-click at="1">

自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。

</v-click>`,frontmatter:{title:"Hooks",clicks:2},index:0,start:0,end:31},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:ZC,meta:{title:"Ant Design",srcSequence:"./pages/lesson_1/index.md,./ant-design.md",slide:{raw:`---
title: Ant Design
---

# Ant Design

https://ant.design/docs/spec/introduce-cn`,title:"Ant Design",level:1,content:`# Ant Design

https://ant.design/docs/spec/introduce-cn`,frontmatter:{title:"Ant Design",srcSequence:"./pages/lesson_1/index.md,./ant-design.md"},index:13,start:0,end:7,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",raw:`---
title: Ant Design
---

# Ant Design

https://ant.design/docs/spec/introduce-cn`,title:"Ant Design",level:1,content:`# Ant Design

https://ant.design/docs/spec/introduce-cn`,frontmatter:{title:"Ant Design"},index:0,start:0,end:7},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:tS,meta:{title:"UmiJS",clicks:2,srcSequence:"./pages/lesson_1/index.md,./umijs.md",slide:{raw:`---
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

https://umijs.org/docs/introduce/introduce`,frontmatter:{title:"UmiJS",clicks:2},index:0,start:0,end:8},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:oS,meta:{title:"Homework",srcSequence:"./pages/lesson_1/index.md,./homework.md",slide:{raw:`---
title: Homework
---

# Homework`,title:"Homework",level:1,content:"# Homework",frontmatter:{title:"Homework",srcSequence:"./pages/lesson_1/index.md,./homework.md"},index:15,start:0,end:5,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/homework.md",raw:`---
title: Homework
---

# Homework`,title:"Homework",level:1,content:"# Homework",frontmatter:{title:"Homework"},index:0,start:0,end:5},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/homework.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:dS,meta:{title:"State Hooks",clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/state.md",slide:{raw:`---
title: State Hooks
clicks: 6
hideInToc: true
---

# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />State Hooks</span>

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

\`\`\`tsx {7|1-4|7|12} {at: 3}
function reducer(state, action) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer(reducer, [] /* ,initFn */);

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

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>

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
`,title:"State Hooks",level:1,content:`# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />State Hooks</span>

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

\`\`\`tsx {7|1-4|7|12} {at: 3}
function reducer(state, action) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer(reducer, [] /* ,initFn */);

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

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>`,frontmatter:{title:"State Hooks",clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/state.md"},note:`State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)`,index:16,start:0,end:90,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks/state.md",raw:`---
title: State Hooks
clicks: 6
hideInToc: true
---

# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />State Hooks</span>

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

\`\`\`tsx {7|1-4|7|12} {at: 3}
function reducer(state, action) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer(reducer, [] /* ,initFn */);

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

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>

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
`,title:"State Hooks",level:1,content:`# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />State Hooks</span>

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

\`\`\`tsx {7|1-4|7|12} {at: 3}
function reducer(state, action) {
  if (action.type === "setHeros") return [...action.payload];
  throw Error("Unknown action.");
}

export default function App() {
  const [heros, dispatch] = useReducer(reducer, [] /* ,initFn */);

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

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>`,frontmatter:{title:"State Hooks",clicks:6,hideInToc:!0},note:`State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)`,index:0,start:0,end:90},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks/state.md",noteHTML:`<p>State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；</p>
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
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:yS,meta:{title:"Context Hooks",clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/context.md",slide:{raw:`---
title: Context Hooks
clicks: 6
hideInToc: true
---

# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Context Hooks</span>

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 \`createContext\` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?embed=1&theme=dark" class="w-full h-[calc(100%-60px)]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>

<!--
Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象

-->
`,title:"Context Hooks",level:1,content:`# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Context Hooks</span>

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 \`createContext\` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?embed=1&theme=dark" class="w-full h-[calc(100%-60px)]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>`,frontmatter:{title:"Context Hooks",clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/context.md"},note:`Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象`,index:17,start:0,end:31,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks/context.md",raw:`---
title: Context Hooks
clicks: 6
hideInToc: true
---

# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Context Hooks</span>

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 \`createContext\` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?embed=1&theme=dark" class="w-full h-[calc(100%-60px)]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>

<!--
Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象

-->
`,title:"Context Hooks",level:1,content:`# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Context Hooks</span>

在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 \`createContext\` 配合使用：

<iframe src="https://stackblitz.com/edit/react-ts-wwsbt2?embed=1&theme=dark" class="w-full h-[calc(100%-60px)]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>`,frontmatter:{title:"Context Hooks",clicks:6,hideInToc:!0},note:`Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。

如何使用它不在本节课讲述，现在只是给大家看下大致的使用。

-> context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。

-> App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象`,index:0,start:0,end:31},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks/context.md",noteHTML:`<p>Context hooks 当组件树中有全局的上下文的情况下才会使用的，它是需要配合 createContext 来使用的。</p>
<p>如何使用它不在本节课讲述，现在只是给大家看下大致的使用。</p>
<p>-&gt; context/theme.ts 首先需要先用 createContext API 创建一个 Context 上下文，然后 export 出去。这里问大家一个问题，为什么我要把 Context 提出来单独放一个文件？大家可以带着这个问题继续看代码。</p>
<p>-&gt; App.tsx 引用 ThemeContext 并在 App return 的 JSX 中使用固定语法 ThemeContext.Provider，并添加 value 属性，用以提供给子组件对应的值，那在这里我给子组件提供了 theme 状态变量和 toggleTheme 的方法；</p>
<p>-&gt; Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象</p>
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:kS,meta:{title:"Ref Hooks",clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/ref.md",slide:{raw:`---
title: Ref Hooks
clicks: 2
hideInToc: true
---

# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Ref Hooks</span>

Ref hooks 允许组件保存一些不用于渲染的信息。

- \`useRef\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >引用渲染不需要的值；</span>
- \`useImperativeHandle\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义公开 ref 的句柄；</span>

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=components/CounterWithRef.tsx" class="w-full h-[calc(100%-140px)] mt-[16px]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>

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
`,title:"Ref Hooks",level:1,content:`# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Ref Hooks</span>

Ref hooks 允许组件保存一些不用于渲染的信息。

- \`useRef\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >引用渲染不需要的值；</span>
- \`useImperativeHandle\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义公开 ref 的句柄；</span>

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=components/CounterWithRef.tsx" class="w-full h-[calc(100%-140px)] mt-[16px]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>`,frontmatter:{title:"Ref Hooks",clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./hooks/ref.md"},note:`State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)`,index:18,start:0,end:46,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks/ref.md",raw:`---
title: Ref Hooks
clicks: 2
hideInToc: true
---

# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Ref Hooks</span>

Ref hooks 允许组件保存一些不用于渲染的信息。

- \`useRef\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >引用渲染不需要的值；</span>
- \`useImperativeHandle\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义公开 ref 的句柄；</span>

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=components/CounterWithRef.tsx" class="w-full h-[calc(100%-140px)] mt-[16px]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>

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
`,title:"Ref Hooks",level:1,content:`# <span class="hover:underline hover:underline-dashed cursor-pointer" @click="onBack" ><mdi-arrow-left />Ref Hooks</span>

Ref hooks 允许组件保存一些不用于渲染的信息。

- \`useRef\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks === 1 }" >引用渲染不需要的值；</span>
- \`useImperativeHandle\`：<span :class="{ 'text-gradient-red': $slidev.nav.clicks === 2 }" >自定义公开 ref 的句柄；</span>

<iframe src="https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=components/CounterWithRef.tsx" class="w-full h-[calc(100%-140px)] mt-[16px]" />

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const onBack = () => router.back()
<\/script>`,frontmatter:{title:"Ref Hooks",clicks:2,hideInToc:!0},note:`State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；

共有两个 hooks，第一个是 useState，第二个则是 useReducer；

（click）useState 是在平时开发过程中，最常用的 hooks 之一，它的作用是声明可以直接更新和使用的状态变量；

同样还是来看下之前的代码，可以看到代码中，我们使用了 useState，并且在它执行时我们传递初始值；heros 我们传递的是空数组，loading 初始值是 false；

（click）在下面的这部分，我们调用了 setHeros 和 setLoading 方法用来更新我们的状态变量 heros 和 loading；

（click）第二个状态钩子是 useReducer，大家如果用过 vuex 的对这个可能比较熟悉哈，我对上面的代码用 useReducer 进行了改造。它和 useState 不同的是，useReducer 接受三个参数，其中第三个参数是可选的，而且其返回的第二参数是 dispatch 分发函数；

（click）第一个参数就是 reducer 函数，根据当前 state 和 action 来判断用来执行哪种操作，也就是说，这个函数意义在于我们可以根据 action 的 type 来对现有状态或传入的数据进行不同的处理；

（click）第二个参数是初始值，这里我们同样了设置了空数组；

第三个参数则是可选的，因为 reducer 函数并不会在这个钩子运行是就立即执行，因此可能需要我们对初始值进行一些处理，这个参数的意义就在于此。

（click）最后我们执行 useReducer 返回的第二个分发函数，来告诉 reducer 函数执行哪种 type 的 action。

(click arrow-left to back)`,index:0,start:0,end:46},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks/ref.md",noteHTML:`<p>State hooks 是允许组件“记住”用户输入信息等状态的 hooks，可以理解为 Vue3 中的 ref 和 reactive 响应式数据，改变他们会触发界面的重新渲染；</p>
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
`,id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:CS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# Effect Hooks
`,title:"Effect Hooks",level:1,content:"# Effect Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:19,start:88,end:94,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# Effect Hooks
`,title:"Effect Hooks",level:1,content:"# Effect Hooks",frontmatter:{hideInToc:!0},index:14,start:88,end:94},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:$S,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# Performance Hooks
`,title:"Performance Hooks",level:1,content:"# Performance Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:20,start:94,end:100,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# Performance Hooks
`,title:"Performance Hooks",level:1,content:"# Performance Hooks",frontmatter:{hideInToc:!0},index:15,start:94,end:100},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:TS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
hideInToc: true
---

# Other Hooks`,title:"Other Hooks",level:1,content:"# Other Hooks",frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md"},index:21,start:100,end:105,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
hideInToc: true
---

# Other Hooks`,title:"Other Hooks",level:1,content:"# Other Hooks",frontmatter:{hideInToc:!0},index:16,start:100,end:105},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",component:Ek,meta:{layout:"end"}}],Xe=OS,so=[{name:"play",path:"/",component:Z2,children:[...Xe]},{name:"print",path:"/print",component:wk},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!no.remote||no.remote===t.query.password)return!0;if(no.remote&&t.query.password===void 0){const n=prompt("Enter password");if(no.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};so.push({path:"/presenter/print",component:()=>fr(()=>import("./PresenterPrint-64c86aca.js"),["assets/PresenterPrint-64c86aca.js","assets/NoteDisplay-2a5ac1e8.js"])}),so.push({name:"notes",path:"/notes",component:()=>fr(()=>import("./NotesView-9916c5e2.js"),["assets/NotesView-9916c5e2.js","assets/NoteDisplay-2a5ac1e8.js"]),beforeEnter:e}),so.push({name:"presenter",path:"/presenter/:no",component:()=>fr(()=>import("./Presenter-e5d8d9d5.js"),["assets/Presenter-e5d8d9d5.js","assets/NoteDisplay-2a5ac1e8.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),so.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const mt=P_({history:O1("/react-shared-ppt/"),routes:so});function PS(e,t,{mode:n="replace"}={}){return R({get(){const o=mt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){et(()=>{mt[w(n)]({query:{...mt.currentRoute.value.query,[e]:o}})})}})}const Cf=W(0);et(()=>{mt.afterEach(async()=>{await et(),Cf.value+=1})});const Sf=W(0),It=R(()=>mt.currentRoute.value),pn=R(()=>It.value.query.print!==void 0),LS=R(()=>It.value.query.print==="clicks"),Dn=R(()=>It.value.query.embedded!==void 0),wt=R(()=>It.value.path.startsWith("/presenter")),IS=R(()=>It.value.path.startsWith("/notes")),fo=R(()=>pn.value&&!LS.value),Ci=R(()=>It.value.query.password),HS=R(()=>!wt.value&&(!$e.remote||Ci.value===$e.remote)),ku=PS("clicks","0"),Ef=R(()=>Xe.length-1),BS=R(()=>It.value.path),Ue=R(()=>parseInt(BS.value.split(/\//g).slice(-1)[0])||1);R(()=>nl(Ue.value));const ct=R(()=>Xe.find(e=>e.path===`${Ue.value}`));R(()=>{var e,t,n;return(n=(t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});R(()=>{var e,t;return((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Ue.value===1?"cover":"default")});const $l=R(()=>Xe.find(e=>e.path===`${Math.min(Xe.length,Ue.value+1)}`)),MS=R(()=>Xe.find(e=>e.path===`${Math.max(1,Ue.value-1)}`)),jS=R(()=>{var e,t;return Cf.value,((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ot=R({get(){if(fo.value)return 99999;let e=+(ku.value||0);return isNaN(e)&&(e=0),e},set(e){ku.value=e.toString()}}),Lr=R(()=>{var e,t;return+(((t=(e=ct.value)==null?void 0:e.meta)==null?void 0:t.clicks)??jS.value.length)}),NS=R(()=>Ue.value<Xe.length-1||Ot.value<Lr.value),DS=R(()=>Ue.value>1||Ot.value>0),VS=R(()=>Xe.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(va(e,t),e),[])),US=R(()=>_a(VS.value,ct.value));R(()=>ba(US.value));const JS=R(()=>KS(Sf.value,ct.value,MS.value));Fe(ct,(e,t)=>{Sf.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function On(){Lr.value<=Ot.value?Oo():Ot.value+=1}async function Pn(){Ot.value<=0?await Po():Ot.value-=1}function nl(e){return wt.value?`/presenter/${e}`:`/${e}`}function Oo(){const e=Math.min(Xe.length,Ue.value+1);return Hs(e)}async function Po(e=!0){const t=Math.max(1,Ue.value-1);await Hs(t),e&&Lr.value&&mt.replace({query:{...It.value.query,clicks:Lr.value}})}function Hs(e,t){return mt.push({path:nl(e),query:{...It.value.query,clicks:t}})}function qS(e){const t=W(0),{direction:n,distanceX:o,distanceY:r}=Kv(e,{onSwipeStart(l){l.pointerType==="touch"&&(Ro.value||(t.value=ui()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||Ro.value)return;const i=Math.abs(o.value),a=Math.abs(r.value);i/window.innerWidth>.3||i>100?n.value===cn.LEFT?On():Pn():(a/window.innerHeight>.4||a>200)&&(n.value===cn.DOWN?Po():Oo())}})}async function Si(){const{saveAs:e}=await fr(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e($d($e.download)?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/react-shared-ppt/slidev-exported.pdf",`${$e.title}.pdf`)}async function WS(e){var t,n;if(e==null){const o=(n=(t=ct.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function va(e,t,n=1){var r,l,i,a,c;const o=(l=(r=t.meta)==null?void 0:r.slide)==null?void 0:l.level;o&&o>n&&e.length>0?va(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((i=t.meta)!=null&&i.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function _a(e,t,n=!1,o){return e.map(r=>{const l={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return l.children.length>0&&(l.children=_a(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function ba(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:ba(n.children,t+1)}))}const XS={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function zS(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:XS[e.name]||e.name;if(n.includes("|")){const[o,r]=n.split("|").map(l=>l.trim());n=t?r:o}if(n)return{...e,name:n}}function KS(e,t,n){var r,l;let o=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=$e.transition),zS(o,e<0)}function YS(){const e=$e.titleTemplate.replace("%s",$e.title||"Slidev");la({title:e}),Eg($e.htmlAttrs),jg(`${e} - shared`),Ug(`${e} - drawings`);const t=`${location.origin}_${Pg()}`;function n(){IS.value||!wt.value&&!Og.includes(location.host.split(":")[0])||(wt.value?(Ws("page",+Ue.value),Ws("clicks",Ot.value)):(Ws("viewerPage",+Ue.value),Ws("viewerClicks",Ot.value)),Ws("lastUpdate",{id:t,type:wt.value?"presenter":"viewer",time:new Date().getTime()}))}mt.afterEach(n),Fe(Ot,n),Ng(o=>{var l;mt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=o.lastUpdate)==null?void 0:l.type)==="presenter"&&(+o.page!=+Ue.value||+Ot.value!=+o.clicks)&&mt.replace({path:nl(o.page),query:{...mt.currentRoute.value.query,clicks:o.clicks||0}})})}const ZS=ge({__name:"App",setup(e){return K(le),YS(),(t,n)=>{const o=Lt("RouterView"),r=Lt("StarportCarrier");return C(),B(Ee,null,[J(o),J(r)],64)}}}),GS=ie(ZS,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/App.vue"]]);function Rl(e){return e!==null&&typeof e=="object"}function Ei(e,t,n=".",o){if(!Rl(t))return Ei(e,{},n,o);const r=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const i=e[l];i!=null&&(o&&o(r,l,i,n)||(Array.isArray(i)&&Array.isArray(r[l])?r[l]=[...i,...r[l]]:Rl(i)&&Rl(r[l])?r[l]=Ei(i,r[l],(n?`${n}.`:"")+l.toString(),o):r[l]=i))}return r}function QS(e){return(...t)=>t.reduce((n,o)=>Ei(n,o,"",e),{})}const e6=QS(),$f=1/60*1e3,t6=typeof performance<"u"?()=>performance.now():()=>Date.now(),Rf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(t6()),$f);function n6(e){let t=[],n=[],o=0,r=!1,l=!1;const i=new WeakSet,a={schedule:(c,u=!1,p=!1)=>{const d=p&&r,f=d?t:n;return u&&i.add(c),f.indexOf(c)===-1&&(f.push(c),d&&r&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),i.delete(c)},process:c=>{if(r){l=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const p=t[u];p(c),i.has(p)&&(a.schedule(p),e())}r=!1,l&&(l=!1,a.process(c))}};return a}const s6=40;let $i=!0,Lo=!1,Ri=!1;const Os={delta:0,timestamp:0},qo=["read","update","preRender","render","postRender"],sl=qo.reduce((e,t)=>(e[t]=n6(()=>Lo=!0),e),{}),Ai=qo.reduce((e,t)=>{const n=sl[t];return e[t]=(o,r=!1,l=!1)=>(Lo||l6(),n.schedule(o,r,l)),e},{}),o6=qo.reduce((e,t)=>(e[t]=sl[t].cancel,e),{});qo.reduce((e,t)=>(e[t]=()=>sl[t].process(Os),e),{});const r6=e=>sl[e].process(Os),Af=e=>{Lo=!1,Os.delta=$i?$f:Math.max(Math.min(e-Os.timestamp,s6),1),Os.timestamp=e,Ri=!0,qo.forEach(r6),Ri=!1,Lo&&($i=!1,Rf(Af))},l6=()=>{Lo=!0,$i=!0,Ri||Rf(Af)},Tf=()=>Os;function Of(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}var ka=function(){},Io=function(){};ka=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Io=function(e,t){if(!e)throw new Error(t)};const Ti=(e,t,n)=>Math.min(Math.max(n,e),t),Al=.001,i6=.01,xu=10,a6=.05,c6=1;function u6({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let r,l;ka(e<=xu*1e3,"Spring duration must be 10 seconds or less");let i=1-t;i=Ti(a6,c6,i),e=Ti(i6,xu,e/1e3),i<1?(r=u=>{const p=u*i,d=p*e,f=p-n,m=Oi(u,i),y=Math.exp(-d);return Al-f/m*y},l=u=>{const d=u*i*e,f=d*n+n,m=Math.pow(i,2)*Math.pow(u,2)*e,y=Math.exp(-d),g=Oi(Math.pow(u,2),i);return(-r(u)+Al>0?-1:1)*((f-m)*y)/g}):(r=u=>{const p=Math.exp(-u*e),d=(u-n)*e+1;return-Al+p*d},l=u=>{const p=Math.exp(-u*e),d=(n-u)*(e*e);return p*d});const a=5/e,c=d6(r,l,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:i*2*Math.sqrt(o*u),duration:e}}}const p6=12;function d6(e,t,n){let o=n;for(let r=1;r<p6;r++)o=o-e(o)/t(o);return o}function Oi(e,t){return e*Math.sqrt(1-t*t)}const f6=["duration","bounce"],h6=["stiffness","damping","mass"];function wu(e,t){return t.some(n=>e[n]!==void 0)}function m6(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!wu(e,h6)&&wu(e,f6)){const n=u6(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function xa(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:r}=e,l=Of(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:p,duration:d,isResolvedFromDuration:f}=m6(l),m=Cu,y=Cu;function g(){const v=p?-(p/1e3):0,x=n-t,b=c/(2*Math.sqrt(a*u)),k=Math.sqrt(a/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),b<1){const S=Oi(k,b);m=T=>{const I=Math.exp(-b*k*T);return n-I*((v+b*k*x)/S*Math.sin(S*T)+x*Math.cos(S*T))},y=T=>{const I=Math.exp(-b*k*T);return b*k*I*(Math.sin(S*T)*(v+b*k*x)/S+x*Math.cos(S*T))-I*(Math.cos(S*T)*(v+b*k*x)-S*x*Math.sin(S*T))}}else if(b===1)m=S=>n-Math.exp(-k*S)*(x+(v+k*x)*S);else{const S=k*Math.sqrt(b*b-1);m=T=>{const I=Math.exp(-b*k*T),V=Math.min(S*T,300);return n-I*((v+b*k*x)*Math.sinh(V)+S*x*Math.cosh(V))/S}}}return g(),{next:v=>{const x=m(v);if(f)i.done=v>=d;else{const b=y(v)*1e3,k=Math.abs(b)<=o,S=Math.abs(n-x)<=r;i.done=k&&S}return i.value=i.done?n:x,i},flipTarget:()=>{p=-p,[t,n]=[n,t],g()}}}xa.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Cu=e=>0,Pf=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},wa=(e,t,n)=>-n*e+n*t+e,Lf=(e,t)=>n=>Math.max(Math.min(n,t),e),ho=e=>e%1?Number(e.toFixed(5)):e,Ho=/(-)?([\d]*\.?[\d])+/g,Pi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,y6=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wo(e){return typeof e=="string"}const Xo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},mo=Object.assign(Object.assign({},Xo),{transform:Lf(0,1)}),lr=Object.assign(Object.assign({},Xo),{default:1}),Ca=e=>({test:t=>Wo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Vn=Ca("deg"),yo=Ca("%"),ye=Ca("px"),Su=Object.assign(Object.assign({},yo),{parse:e=>yo.parse(e)/100,transform:e=>yo.transform(e*100)}),Sa=(e,t)=>n=>!!(Wo(n)&&y6.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),If=(e,t,n)=>o=>{if(!Wo(o))return o;const[r,l,i,a]=o.match(Ho);return{[e]:parseFloat(r),[t]:parseFloat(l),[n]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},Gn={test:Sa("hsl","hue"),parse:If("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+yo.transform(ho(t))+", "+yo.transform(ho(n))+", "+ho(mo.transform(o))+")"},F6=Lf(0,255),Tl=Object.assign(Object.assign({},Xo),{transform:e=>Math.round(F6(e))}),Sn={test:Sa("rgb","red"),parse:If("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+Tl.transform(e)+", "+Tl.transform(t)+", "+Tl.transform(n)+", "+ho(mo.transform(o))+")"};function g6(e){let t="",n="",o="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const Li={test:Sa("#"),parse:g6,transform:Sn.transform},ft={test:e=>Sn.test(e)||Li.test(e)||Gn.test(e),parse:e=>Sn.test(e)?Sn.parse(e):Gn.test(e)?Gn.parse(e):Li.parse(e),transform:e=>Wo(e)?e:e.hasOwnProperty("red")?Sn.transform(e):Gn.transform(e)},Hf="${c}",Bf="${n}";function v6(e){var t,n,o,r;return isNaN(e)&&Wo(e)&&((n=(t=e.match(Ho))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(o=e.match(Pi))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function Mf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(Pi);o&&(n=o.length,e=e.replace(Pi,Hf),t.push(...o.map(ft.parse)));const r=e.match(Ho);return r&&(e=e.replace(Ho,Bf),t.push(...r.map(Xo.parse))),{values:t,numColors:n,tokenised:e}}function jf(e){return Mf(e).values}function Nf(e){const{values:t,numColors:n,tokenised:o}=Mf(e),r=t.length;return l=>{let i=o;for(let a=0;a<r;a++)i=i.replace(a<n?Hf:Bf,a<n?ft.transform(l[a]):ho(l[a]));return i}}const _6=e=>typeof e=="number"?0:e;function b6(e){const t=jf(e);return Nf(e)(t.map(_6))}const zo={test:v6,parse:jf,createTransformer:Nf,getAnimatableNone:b6},k6=new Set(["brightness","contrast","saturate","opacity"]);function x6(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Ho)||[];if(!o)return e;const r=n.replace(o,"");let l=k6.has(t)?1:0;return o!==n&&(l*=100),t+"("+l+r+")"}const w6=/([a-z-]*)\(.*?\)/g,Ii=Object.assign(Object.assign({},zo),{getAnimatableNone:e=>{const t=e.match(w6);return t?t.map(x6).join(" "):e}});function Ol(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Eu({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let r=0,l=0,i=0;if(!t)r=l=i=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;r=Ol(c,a,e+1/3),l=Ol(c,a,e),i=Ol(c,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(i*255),alpha:o}}const C6=(e,t,n)=>{const o=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-o)+o))},S6=[Li,Sn,Gn],$u=e=>S6.find(t=>t.test(e)),Ru=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Df=(e,t)=>{let n=$u(e),o=$u(t);Io(!!n,Ru(e)),Io(!!o,Ru(t));let r=n.parse(e),l=o.parse(t);n===Gn&&(r=Eu(r),n=Sn),o===Gn&&(l=Eu(l),o=Sn);const i=Object.assign({},r);return a=>{for(const c in i)c!=="alpha"&&(i[c]=C6(r[c],l[c],a));return i.alpha=wa(r.alpha,l.alpha,a),n.transform(i)}},E6=e=>typeof e=="number",$6=(e,t)=>n=>t(e(n)),Vf=(...e)=>e.reduce($6);function Uf(e,t){return E6(e)?n=>wa(e,t,n):ft.test(e)?Df(e,t):qf(e,t)}const Jf=(e,t)=>{const n=[...e],o=n.length,r=e.map((l,i)=>Uf(l,t[i]));return l=>{for(let i=0;i<o;i++)n[i]=r[i](l);return n}},R6=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(o[r]=Uf(e[r],t[r]));return r=>{for(const l in o)n[l]=o[l](r);return n}};function Au(e){const t=zo.parse(e),n=t.length;let o=0,r=0,l=0;for(let i=0;i<n;i++)o||typeof t[i]=="number"?o++:t[i].hue!==void 0?l++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:l}}const qf=(e,t)=>{const n=zo.createTransformer(t),o=Au(e),r=Au(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?Vf(Jf(o.parsed,r.parsed),n):(ka(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?t:e}`)},A6=(e,t)=>n=>wa(e,t,n);function T6(e){if(typeof e=="number")return A6;if(typeof e=="string")return ft.test(e)?Df:qf;if(Array.isArray(e))return Jf;if(typeof e=="object")return R6}function O6(e,t,n){const o=[],r=n||T6(e[0]),l=e.length-1;for(let i=0;i<l;i++){let a=r(e[i],e[i+1]);if(t){const c=Array.isArray(t)?t[i]:t;a=Vf(c,a)}o.push(a)}return o}function P6([e,t],[n]){return o=>n(Pf(e,t,o))}function L6(e,t){const n=e.length,o=n-1;return r=>{let l=0,i=!1;if(r<=e[0]?i=!0:r>=e[o]&&(l=o-1,i=!0),!i){let c=1;for(;c<n&&!(e[c]>r||c===o);c++);l=c-1}const a=Pf(e[l],e[l+1],r);return t[l](a)}}function Wf(e,t,{clamp:n=!0,ease:o,mixer:r}={}){const l=e.length;Io(l===t.length,"Both input and output ranges must be the same length"),Io(!o||!Array.isArray(o)||o.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=O6(t,o,r),a=l===2?P6(e,i):L6(e,i);return n?c=>a(Ti(e[0],e[l-1],c)):a}const ol=e=>t=>1-e(1-t),Ea=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,I6=e=>t=>Math.pow(t,e),Xf=e=>t=>t*t*((e+1)*t-e),H6=e=>{const t=Xf(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},zf=1.525,B6=4/11,M6=8/11,j6=9/10,Kf=e=>e,$a=I6(2),N6=ol($a),Yf=Ea($a),Zf=e=>1-Math.sin(Math.acos(e)),Gf=ol(Zf),D6=Ea(Gf),Ra=Xf(zf),V6=ol(Ra),U6=Ea(Ra),J6=H6(zf),q6=4356/361,W6=35442/1805,X6=16061/1805,Ir=e=>{if(e===1||e===0)return e;const t=e*e;return e<B6?7.5625*t:e<M6?9.075*t-9.9*e+3.4:e<j6?q6*t-W6*e+X6:10.8*e*e-20.52*e+10.72},z6=ol(Ir),K6=e=>e<.5?.5*(1-Ir(1-e*2)):.5*Ir(e*2-1)+.5;function Y6(e,t){return e.map(()=>t||Yf).splice(0,e.length-1)}function Z6(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function G6(e,t){return e.map(n=>n*t)}function Fr({from:e=0,to:t=1,ease:n,offset:o,duration:r=300}){const l={done:!1,value:e},i=Array.isArray(t)?t:[e,t],a=G6(o&&o.length===i.length?o:Z6(i),r);function c(){return Wf(a,i,{ease:Array.isArray(n)?n:Y6(i,n)})}let u=c();return{next:p=>(l.value=u(p),l.done=p>=r,l),flipTarget:()=>{i.reverse(),u=c()}}}function Q6({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:l}){const i={done:!1,value:t};let a=n*e;const c=t+a,u=l===void 0?c:l(c);return u!==c&&(a=u-t),{next:p=>{const d=-a*Math.exp(-p/o);return i.done=!(d>r||d<-r),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const Tu={keyframes:Fr,spring:xa,decay:Q6};function eE(e){if(Array.isArray(e.to))return Fr;if(Tu[e.type])return Tu[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Fr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?xa:Fr}function Qf(e,t,n=0){return e-t-n}function tE(e,t,n=0,o=!0){return o?Qf(t+-e,t,n):t-(e-t)+n}function nE(e,t,n,o){return o?e>=t+n:e<=-n}const sE=e=>{const t=({delta:n})=>e(n);return{start:()=>Ai.update(t,!0),stop:()=>o6.update(t)}};function eh(e){var t,n,{from:o,autoplay:r=!0,driver:l=sE,elapsed:i=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:d,onComplete:f,onRepeat:m,onUpdate:y}=e,g=Of(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=g,x,b=0,k=g.duration,S,T=!1,I=!0,V;const A=eE(g);!((n=(t=A).needsInterpolation)===null||n===void 0)&&n.call(t,o,v)&&(V=Wf([0,100],[o,v],{clamp:!1}),o=0,v=100);const N=A(Object.assign(Object.assign({},g),{from:o,to:v}));function Z(){b++,c==="reverse"?(I=b%2===0,i=tE(i,k,u,I)):(i=Qf(i,k,u),c==="mirror"&&N.flipTarget()),T=!1,m&&m()}function ae(){x.stop(),f&&f()}function X(Oe){if(I||(Oe=-Oe),i+=Oe,!T){const qe=N.next(Math.max(0,i));S=qe.value,V&&(S=V(S)),T=I?qe.done:i<=0}y==null||y(S),T&&(b===0&&(k??(k=i)),b<a?nE(i,k,u,I)&&Z():ae())}function ce(){p==null||p(),x=l(X),x.start()}return r&&ce(),{stop:()=>{d==null||d(),x.stop()}}}function th(e,t){return t?e*(1e3/t):0}function oE({from:e=0,velocity:t=0,min:n,max:o,power:r=.8,timeConstant:l=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:d,onComplete:f,onStop:m}){let y;function g(k){return n!==void 0&&k<n||o!==void 0&&k>o}function v(k){return n===void 0?o:o===void 0||Math.abs(n-k)<Math.abs(o-k)?n:o}function x(k){y==null||y.stop(),y=eh(Object.assign(Object.assign({},k),{driver:p,onUpdate:S=>{var T;d==null||d(S),(T=k.onUpdate)===null||T===void 0||T.call(k,S)},onComplete:f,onStop:m}))}function b(k){x(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:c},k))}if(g(e))b({from:e,velocity:t,to:v(e)});else{let k=r*t+e;typeof u<"u"&&(k=u(k));const S=v(k),T=S===n?-1:1;let I,V;const A=N=>{I=V,V=N,t=th(N-I,Tf().delta),(T===1&&N>S||T===-1&&N<S)&&b({from:N,to:S,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:l,power:r,restDelta:c,modifyTarget:u,onUpdate:g(k)?A:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const nh=(e,t)=>1-3*t+3*e,sh=(e,t)=>3*t-6*e,oh=e=>3*e,Hr=(e,t,n)=>((nh(t,n)*e+sh(t,n))*e+oh(t))*e,rh=(e,t,n)=>3*nh(t,n)*e*e+2*sh(t,n)*e+oh(t),rE=1e-7,lE=10;function iE(e,t,n,o,r){let l,i,a=0;do i=t+(n-t)/2,l=Hr(i,o,r)-e,l>0?n=i:t=i;while(Math.abs(l)>rE&&++a<lE);return i}const aE=8,cE=.001;function uE(e,t,n,o){for(let r=0;r<aE;++r){const l=rh(t,n,o);if(l===0)return t;const i=Hr(t,n,o)-e;t-=i/l}return t}const gr=11,ir=1/(gr-1);function pE(e,t,n,o){if(e===t&&n===o)return Kf;const r=new Float32Array(gr);for(let i=0;i<gr;++i)r[i]=Hr(i*ir,e,n);function l(i){let a=0,c=1;const u=gr-1;for(;c!==u&&r[c]<=i;++c)a+=ir;--c;const p=(i-r[c])/(r[c+1]-r[c]),d=a+p*ir,f=rh(d,e,n);return f>=cE?uE(i,d,e,n):f===0?d:iE(i,a,a+ir,e,n)}return i=>i===0||i===1?i:Hr(l(i),t,o)}const Pl={};class dE{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,n,o)}clear(){this.subscriptions.clear()}}const Ou=e=>!isNaN(parseFloat(e));class fE{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new dE,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:r}=Tf();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),Ai.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ai.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Ou(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Ou(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?th(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function hE(e){return new fE(e)}const{isArray:mE}=Array;function yE(){const e=W({}),t=o=>{const r=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};o?mE(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},n=(o,r,l)=>{if(e.value[o])return e.value[o];const i=hE(r);return i.onChange(a=>l[o]=a),e.value[o]=i,i};return sv(t),{motionValues:e,get:n,stop:t}}const FE=e=>Array.isArray(e),Un=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ll=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),gE=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Il=()=>({type:"keyframes",ease:"linear",duration:300}),vE=e=>({type:"keyframes",duration:800,values:e}),Pu={default:gE,x:Un,y:Un,z:Un,rotate:Un,rotateX:Un,rotateY:Un,rotateZ:Un,scaleX:Ll,scaleY:Ll,scale:Ll,backgroundColor:Il,color:Il,opacity:Il},lh=(e,t)=>{let n;return FE(t)?n=vE:n=Pu[e]||Pu.default,{to:t,...n(t)}},Lu={...Xo,transform:Math.round},ih={color:ft,backgroundColor:ft,outlineColor:ft,fill:ft,stroke:ft,borderColor:ft,borderTopColor:ft,borderRightColor:ft,borderBottomColor:ft,borderLeftColor:ft,borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,radius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,size:ye,top:ye,right:ye,bottom:ye,left:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,rotate:Vn,rotateX:Vn,rotateY:Vn,rotateZ:Vn,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:Vn,skewX:Vn,skewY:Vn,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:mo,originX:Su,originY:Su,originZ:ye,zIndex:Lu,filter:Ii,WebkitFilter:Ii,fillOpacity:mo,strokeOpacity:mo,numOctaves:Lu},Aa=e=>ih[e],ah=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function _E(e,t){let n=Aa(e);return n!==Ii&&(n=zo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const bE={linear:Kf,easeIn:$a,easeInOut:Yf,easeOut:N6,circIn:Zf,circInOut:D6,circOut:Gf,backIn:Ra,backInOut:U6,backOut:V6,anticipate:J6,bounceIn:z6,bounceInOut:K6,bounceOut:Ir},Iu=e=>{if(Array.isArray(e)){const[t,n,o,r]=e;return pE(t,n,o,r)}else if(typeof e=="string")return bE[e];return e},kE=e=>Array.isArray(e)&&typeof e[0]!="number",Hu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&zo.test(t)&&!t.startsWith("url("));function xE(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function wE({ease:e,times:t,delay:n,...o}){const r={...o};return t&&(r.offset=t),e&&(r.ease=kE(e)?e.map(Iu):Iu(e)),n&&(r.elapsed=-n),r}function CE(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),xE(t),SE(e)||(e={...e,...lh(n,t.to)}),{...t,...wE(e)}}function SE({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:r,...l}){return!!Object.keys(l).length}function EE(e,t){return e[t]||e.default||e}function $E(e,t,n,o,r){const l=EE(o,e);let i=l.from===null||l.from===void 0?t.get():l.from;const a=Hu(e,n);i==="none"&&a&&typeof n=="string"&&(i=_E(e,n));const c=Hu(e,i);function u(d){const f={from:i,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return l.type==="inertia"||l.type==="decay"?oE({...f,...l}):eh({...CE(l,f,e),onUpdate:m=>{f.onUpdate(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),d&&d()}})}function p(d){return t.set(n),o.onComplete&&o.onComplete(),r&&r(),d&&d(),{stop:()=>{}}}return!c||!a||l.type===!1?p:u}function RE(){const{motionValues:e,stop:t,get:n}=yE();return{motionValues:e,stop:t,push:(r,l,i,a={},c)=>{const u=i[r],p=n(r,u,i);if(a&&a.immediate){p.set(l);return}const d=$E(r,p,l,a,c);p.start(d)}}}function AE(e,t={},{motionValues:n,push:o,stop:r}=RE()){const l=w(t),i=W(!1);Fe(n,d=>{i.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const a=d=>{if(!l||!l[d])throw new Error(`The variant ${d} does not exist.`);return l[d]},c=d=>(typeof d=="string"&&(d=a(d)),Promise.all(Object.entries(d).map(([f,m])=>{if(f!=="transition")return new Promise(y=>o(f,m,e,d.transition||lh(f,d[f]),y))}).filter(Boolean)));return{isAnimating:i,apply:c,set:d=>{const f=ci(d)?d:a(d);Object.entries(f).forEach(([m,y])=>{m!=="transition"&&o(m,y,e,{immediate:!0})})},leave:async d=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){d();return}await c(f),d()},stop:r}}const Ta=typeof window<"u",TE=()=>Ta&&window.onpointerdown===null,OE=()=>Ta&&window.ontouchstart===null,PE=()=>Ta&&window.onmousedown===null;function LE({target:e,state:t,variants:n,apply:o}){const r=w(n),l=W(!1),i=W(!1),a=W(!1),c=R(()=>{let p=[];return r&&(r.hovered&&(p=[...p,...Object.keys(r.hovered)]),r.tapped&&(p=[...p,...Object.keys(r.tapped)]),r.focused&&(p=[...p,...Object.keys(r.focused)])),p}),u=R(()=>{const p={};Object.assign(p,t.value),l.value&&r.hovered&&Object.assign(p,r.hovered),i.value&&r.tapped&&Object.assign(p,r.tapped),a.value&&r.focused&&Object.assign(p,r.focused);for(const d in p)c.value.includes(d)||delete p[d];return p});r.hovered&&(ke(e,"mouseenter",()=>l.value=!0),ke(e,"mouseleave",()=>{l.value=!1,i.value=!1}),ke(e,"mouseout",()=>{l.value=!1,i.value=!1})),r.tapped&&(PE()&&(ke(e,"mousedown",()=>i.value=!0),ke(e,"mouseup",()=>i.value=!1)),TE()&&(ke(e,"pointerdown",()=>i.value=!0),ke(e,"pointerup",()=>i.value=!1)),OE()&&(ke(e,"touchstart",()=>i.value=!0),ke(e,"touchend",()=>i.value=!1))),r.focused&&(ke(e,"focus",()=>a.value=!0),ke(e,"blur",()=>a.value=!1)),Fe(u,o)}function IE({set:e,target:t,apply:n,variants:o,variant:r}){const l=w(o);Fe(()=>t,()=>{l&&(l.initial&&e("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function HE({state:e,apply:t}){Fe(e,n=>{n&&t(n)},{immediate:!0})}function BE({target:e,variants:t,variant:n}){const o=w(t);o&&(o.visible||o.visibleOnce)&&Wv(e,([{isIntersecting:r}])=>{o.visible?r?n.value="visible":n.value="initial":o.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function ME(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&IE(e),t.syncVariants&&HE(e),t.visibilityHooks&&BE(e),t.eventListeners&&LE(e)}function ch(e={}){const t=je({...e}),n=W({});return Fe(t,()=>{const o={};for(const[r,l]of Object.entries(t)){const i=Aa(r),a=ah(l,i);o[r]=a}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function Oa(e,t){Fe(()=>Ct(e),n=>{n&&t(n)},{immediate:!0})}const jE={x:"translateX",y:"translateY",z:"translateZ"};function uh(e={},t=!0){const n=je({...e}),o=W("");return Fe(n,r=>{let l="",i=!1;if(t&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(ye.transform).join(",");l+=`translate3d(${a}) `,i=!0}for(const[a,c]of Object.entries(r)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=Aa(a),p=ah(c,u);l+=`${jE[a]||a}(${p}) `}t&&!i&&(l+="translateZ(0px) "),o.value=l.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const NE=["","X","Y","Z"],DE=["perspective","translate","scale","rotate","skew"],ph=["transformPerspective","x","y","z"];DE.forEach(e=>{NE.forEach(t=>{const n=e+t;ph.push(n)})});const VE=new Set(ph);function Pa(e){return VE.has(e)}const UE=new Set(["originX","originY","originZ"]);function dh(e){return UE.has(e)}function JE(e){const t={},n={};return Object.entries(e).forEach(([o,r])=>{Pa(o)||dh(o)?t[o]=r:n[o]=r}),{transform:t,style:n}}function fh(e){const{transform:t,style:n}=JE(e),{transform:o}=uh(t),{style:r}=ch(n);return o.value&&(r.value.transform=o.value),r.value}function qE(e,t){let n,o;const{state:r,style:l}=ch();return Oa(e,i=>{o=i;for(const a of Object.keys(ih))i.style[a]===null||i.style[a]===""||Pa(a)||dh(a)||(r[a]=i.style[a]);n&&Object.entries(n).forEach(([a,c])=>i.style[a]=c),t&&t(r)}),Fe(l,i=>{if(!o){n=i;return}for(const a in i)o.style[a]=i[a]},{immediate:!0}),{style:r}}function WE(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[l,i]=r.split("("),c=i.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...o,[l]:u}},{})}function XE(e,t){Object.entries(WE(t)).forEach(([n,o])=>{const r=["x","y","z"];if(n==="translate3d"){if(o===0){r.forEach(l=>e[l]=0);return}o.forEach((l,i)=>e[r[i]]=l);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function zE(e,t){let n,o;const{state:r,transform:l}=uh();return Oa(e,i=>{o=i,i.style.transform&&XE(r,i.style.transform),n&&(i.style.transform=n),t&&t(r)}),Fe(l,i=>{if(!o){n=i;return}o.style.transform=i},{immediate:!0}),{transform:r}}function KE(e,t){const n=je({}),o=i=>Object.entries(i).forEach(([a,c])=>n[a]=c),{style:r}=qE(e,o),{transform:l}=zE(e,o);return Fe(n,i=>{Object.entries(i).forEach(([a,c])=>{const u=Pa(a)?l:r;u[a]&&u[a]===c||(u[a]=c)})},{immediate:!0,deep:!0}),Oa(e,()=>t&&o(t)),{motionProperties:n,style:r,transform:l}}function YE(e={}){const t=w(e),n=W();return{state:R(()=>{if(n.value)return t[n.value]}),variant:n}}function hh(e,t={},n){const{motionProperties:o}=KE(e),{variant:r,state:l}=YE(t),i=AE(o,t),a={target:e,variant:r,variants:t,state:l,motionProperties:o,...i};return ME(a,n),a}const ZE=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],GE=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&ci(n.variants)&&(t.value={...t.value,...n.variants}),ZE.forEach(o=>{if(o==="delay"){if(n&&n[o]&&Kg(n[o])){const r=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&ci(n[o])&&(t.value[o]=n[o])}))},Hl=e=>({created:(n,o,r)=>{const l=o.value&&typeof o.value=="string"?o.value:r.key;l&&Pl[l]&&Pl[l].stop();const i=W(e||{});typeof o.value=="object"&&(i.value=o.value),GE(r,i);const a=hh(n,i);n.motionInstance=a,l&&(Pl[l]=a)},getSSRProps(n,o){let{initial:r}=n.value||o&&(o==null?void 0:o.props)||{};r=w(r);const l=e6((e==null?void 0:e.initial)||{},r||{});return!l||Object.keys(l).length===0?void 0:{style:fh(l)}}}),QE={initial:{opacity:0},enter:{opacity:1}},e$={initial:{opacity:0},visible:{opacity:1}},t$={initial:{opacity:0},visibleOnce:{opacity:1}},n$={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},s$={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},o$={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},r$={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},l$={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},i$={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},a$={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},c$={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},u$={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},p$={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},d$={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},f$={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},h$={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},m$={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},y$={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},F$={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},g$={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},v$={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},_$={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},b$={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},k$={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},x$={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},w$={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},C$={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},S$={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},E$={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},$$={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Hi={__proto__:null,fade:QE,fadeVisible:e$,fadeVisibleOnce:t$,pop:n$,popVisible:s$,popVisibleOnce:o$,rollBottom:h$,rollLeft:r$,rollRight:a$,rollTop:p$,rollVisibleBottom:m$,rollVisibleLeft:l$,rollVisibleOnceBottom:y$,rollVisibleOnceLeft:i$,rollVisibleOnceRight:u$,rollVisibleOnceTop:f$,rollVisibleRight:c$,rollVisibleTop:d$,slideBottom:S$,slideLeft:F$,slideRight:_$,slideTop:x$,slideVisibleBottom:E$,slideVisibleLeft:g$,slideVisibleOnceBottom:$$,slideVisibleOnceLeft:v$,slideVisibleOnceRight:k$,slideVisibleOnceTop:C$,slideVisibleRight:b$,slideVisibleTop:w$},R$=ge({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=Ky(),n=je({});if(!e.is&&!t.default)return()=>Ze("div",{});const o=R(()=>{let c;return e.preset&&(c=Hi[e.preset]),c}),r=R(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=R(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),i=R(()=>{if(!e.is)return;let c=e.is;return typeof i.value=="string"&&!Zu(c)&&(c=Lt(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var p;(p=u.variants)!=null&&p.initial&&u.set("initial"),setTimeout(()=>{var d,f,m;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};Kr(()=>Object.entries(n).forEach(([u,p])=>c(p)))}return{slots:t,component:i,motionConfig:l,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var a;const r=fh(t.initial||{}),l=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:p})=>{const d=hh(p,t);n[u]=d},c);if(o){const c=Ze(o,void 0,e);return l(c,0),c}return(((a=e.default)==null?void 0:a.call(e))||[]).map((c,u)=>l(c,u))}});function A$(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const T$={install(e,t){if(e.directive("motion",Hl()),e.component("Motion",R$),!t||t&&!t.excludePresets)for(const n in Hi){const o=Hi[n];e.directive(`motion-${A$(n)}`,Hl(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,Hl(o))}}};var Bu;const Fo=typeof window<"u",O$=Object.prototype.toString,P$=e=>O$.call(e)==="[object Object]";Fo&&((Bu=window==null?void 0:window.navigator)!=null&&Bu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function L$(e){return Vi()?(lp(e),!0):!1}function I$(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const H$=Fo?window:void 0,Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ju="__vueuse_ssr_handlers__";Mu[ju]=Mu[ju]||{};function B$(e,t={}){const{immediate:n=!0,window:o=H$}=t,r=W(!1);let l=null;function i(){!r.value||!o||(e(),l=o.requestAnimationFrame(i))}function a(){!r.value&&o&&(r.value=!0,i())}function c(){r.value=!1,l!=null&&o&&(o.cancelAnimationFrame(l),l=null)}return n&&a(),L$(c),{isActive:r,pause:c,resume:a}}var Nu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Nu||(Nu={}));const rl="vue-starport-injection",mh="vue-starport-options",M$={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},yh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var j$=Object.defineProperty,Br=Object.getOwnPropertySymbols,Fh=Object.prototype.hasOwnProperty,gh=Object.prototype.propertyIsEnumerable,Du=(e,t,n)=>t in e?j$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N$=(e,t)=>{for(var n in t||(t={}))Fh.call(t,n)&&Du(e,n,t[n]);if(Br)for(var n of Br(t))gh.call(t,n)&&Du(e,n,t[n]);return e},Vu=(e,t)=>{var n={};for(var o in e)Fh.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Br)for(var o of Br(e))t.indexOf(o)<0&&gh.call(e,o)&&(n[o]=e[o]);return n};const D$=ge({name:"StarportProxy",props:N$({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},yh),setup(e,t){const n=K(rl),o=R(()=>n.getInstance(e.port,e.component)),r=W(),l=o.value.generateId(),i=W(!1);return o.value.isVisible||(o.value.land(),i.value=!0),ds(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=r.value,await et(),i.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const a=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${a} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Do(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,i.value=!1,!o.value.options.keepAlive&&(await et(),await et(),!o.value.el&&n.dispose(o.value.port))}),Fe(()=>e,async()=>{o.value.props&&await et();const a=e,{props:c}=a,u=Vu(a,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:u}=a,p=Vu(a,["initialProps","mountedProps"]),d=gt(p,(i.value?u:c)||{});return Ze("div",gt(d,{id:l,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?Ze(t.slots.default):void 0)}}});var V$=Object.defineProperty,U$=Object.defineProperties,J$=Object.getOwnPropertyDescriptors,Uu=Object.getOwnPropertySymbols,q$=Object.prototype.hasOwnProperty,W$=Object.prototype.propertyIsEnumerable,Ju=(e,t,n)=>t in e?V$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X$=(e,t)=>{for(var n in t||(t={}))q$.call(t,n)&&Ju(e,n,t[n]);if(Uu)for(var n of Uu(t))W$.call(t,n)&&Ju(e,n,t[n]);return e},z$=(e,t)=>U$(e,J$(t));const K$=ge({name:"Starport",inheritAttrs:!0,props:yh,setup(e,t){const n=W(!1);return ds(()=>{if(n.value=!0,!K(rl))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,a;const o=(a=(i=t.slots).default)==null?void 0:a.call(i);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let l=r.type;return(!P$(l)||Gt(l))&&(l={render(){return o}}),Ze(D$,z$(X$({},e),{key:e.port,component:Ur(l),props:r.props}))}}});function Y$(e){const t=je({height:0,width:0,left:0,top:0,update:o,listen:l,pause:i,margin:"0px",padding:"0px"}),n=Fo?document.documentElement||document.body:void 0;function o(){if(!Fo)return;const a=I$(e);if(!a)return;const{height:c,width:u,left:p,top:d}=a.getBoundingClientRect(),f=window.getComputedStyle(a),m=f.margin,y=f.padding;Object.assign(t,{height:c,width:u,left:p,top:n.scrollTop+d,margin:m,padding:y})}const r=B$(o,{immediate:!1});function l(){Fo&&(o(),r.resume())}function i(){r.pause()}return t}let Z$=(e,t=21)=>(n=t)=>{let o="",r=n;for(;r--;)o+=e[Math.random()*e.length|0];return o};const qu=Z$("abcdefghijklmnopqrstuvwxyz",5);function Wu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function G$(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var Q$=Object.defineProperty,Xu=Object.getOwnPropertySymbols,eR=Object.prototype.hasOwnProperty,tR=Object.prototype.propertyIsEnumerable,zu=(e,t,n)=>t in e?Q$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bl=(e,t)=>{for(var n in t||(t={}))eR.call(t,n)&&zu(e,n,t[n]);if(Xu)for(var n of Xu(t))tR.call(t,n)&&zu(e,n,t[n]);return e};function nR(e,t,n={}){const o=G$(t),r=Wu(o)||qu(),l=W(),i=W(null),a=W(!1),c=W(!1),u=Ih(!0),p=W({}),d=R(()=>Bl(Bl(Bl({},M$),n),p.value)),f=W(0);let m;u.run(()=>{m=Y$(l),Fe(l,async x=>{x&&(c.value=!0),await et(),l.value||(c.value=!1)})});const y=Wu(e);function g(){return`starport-${r}-${y}-${qu()}`}const v=g();return je({el:l,id:v,port:e,props:i,rect:m,scope:u,isLanded:a,isVisible:c,options:d,liftOffTime:f,component:t,componentName:o,componentId:r,generateId:g,setLocalOptions(x={}){p.value=JSON.parse(JSON.stringify(x))},elRef(){return l},liftOff(){a.value&&(a.value=!1,f.value=Date.now(),m.listen())},land(){a.value||(a.value=!0,m.pause())}})}function sR(e){const t=je(new Map);function n(r,l){let i=t.get(r);return i||(i=nR(r,l,e),t.set(r,i)),i.component=l,i}function o(r){var l;(l=t.get(r))==null||l.scope.stop(),t.delete(r)}return{portMap:t,dispose:o,getInstance:n}}var oR=Object.defineProperty,rR=Object.defineProperties,lR=Object.getOwnPropertyDescriptors,Ku=Object.getOwnPropertySymbols,iR=Object.prototype.hasOwnProperty,aR=Object.prototype.propertyIsEnumerable,Yu=(e,t,n)=>t in e?oR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cR=(e,t)=>{for(var n in t||(t={}))iR.call(t,n)&&Yu(e,n,t[n]);if(Ku)for(var n of Ku(t))aR.call(t,n)&&Yu(e,n,t[n]);return e},uR=(e,t)=>rR(e,lR(t));const pR=ge({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=K(rl);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=R(()=>t.getInstance(e.port,e.component)),o=R(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),r=R(()=>{const i=Date.now()-n.value.liftOffTime,a=Math.max(0,n.value.options.duration-i),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?uR(cR({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:n.value.options.easing}),u)}),l={onTransitionend(i){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const i=!!(n.value.isLanded&&n.value.el);return Ze("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Ze(Iy,{to:i?`#${o.value}`:"body",disabled:!i},Ze(n.value.component,gt(l,n.value.props))))}}}),dR=ge({name:"StarportCarrier",setup(e,{slots:t}){const n=sR(K(mh,{}));return $t().appContext.app.provide(rl,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([l,{component:i}])=>Ze(pR,{key:l,port:l,component:i}))]}}});function fR(e={}){return{install(t){t.provide(mh,e),t.component("Starport",K$),t.component("StarportCarrier",dR)}}}function hR(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(T$),e.app.use(fR({keepAlive:!0}))}function _t(e,t,n){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??n}function mR(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,d,f,m,y,g;if(fo.value||(p=_t(n,ao))!=null&&p.value)return;const o=_t(n,zn),r=_t(n,io),l=_t(n,ii),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,a=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((d=o==null?void 0:o.value)==null?void 0:d.length)||0,u=a?Tg:gl;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),n.value==null&&(n.value=(m=o==null?void 0:o.value)==null?void 0:m.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((y=o==null?void 0:o.value)==null?void 0:y.length)||0)+Number(n.value)),!(l!=null&&l.value.has(n.value)))l==null||l.value.set(n.value,[t]);else if(!((g=l==null?void 0:l.value.get(n.value))!=null&&g.includes(t))){const v=(l==null?void 0:l.value.get(n.value))||[];l==null||l.value.set(n.value,[t].concat(v))}t==null||t.classList.toggle(Wn,!0),r&&Fe(r,()=>{const v=(r==null?void 0:r.value)??0,x=n.value!=null?v>=n.value:v>c;t.classList.contains(vl)||t.classList.toggle(u,!x),i!==!1&&i!==void 0&&t.classList.toggle(u,x),t.classList.toggle(qs,!1);const b=l==null?void 0:l.value.get(v);b==null||b.forEach((k,S)=>{k.classList.toggle(or,!1),S===b.length-1?k.classList.toggle(qs,!0):k.classList.toggle(or,!0)}),t.classList.contains(qs)||t.classList.toggle(or,x)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Wn,!1);const o=_t(n,zn);o!=null&&o.value&&ai(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var a,c;if(fo.value||(a=_t(n,ao))!=null&&a.value)return;const o=_t(n,zn),r=_t(n,io),l=_t(n,ii),i=o==null?void 0:o.value.length;n.value==null&&(n.value=o==null?void 0:o.value.length),l!=null&&l.value.has(n.value)?(c=l==null?void 0:l.value.get(n.value))==null||c.push(t):l==null||l.value.set(n.value,[t]),t==null||t.classList.toggle(Wn,!0),r&&Fe(r,()=>{const u=(r.value??0)>=(n.value??i??0);t.classList.contains(vl)||t.classList.toggle(gl,!u),t.classList.toggle(qs,!1),t.classList.contains(qs)||t.classList.toggle(or,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Wn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,a,c;if(fo.value||(i=_t(n,ao))!=null&&i.value)return;const o=_t(n,zn),r=_t(n,io),l=((a=o==null?void 0:o.value)==null?void 0:a.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Wn,!0),r&&Fe(r,()=>{const u=(r==null?void 0:r.value)??0,p=n.value!=null?u>=n.value:u>l;t.classList.toggle(gl,p),t.classList.toggle(vl,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Wn,!1);const o=_t(n,zn);o!=null&&o.value&&ai(o.value,t)}})}}}function yR(e,t){const n=_f(e),o=bf(t,n.currentRoute,n.currentPage);return{nav:{...n,...o},configs:$e,themeConfigs:R(()=>$e.themeConfig)}}function FR(){return{install(e){const t=yR(It,Ot);e.provide(le,je(t))}}}const js=OF(GS);js.use(mt);js.use($g());js.use(mR());js.use(FR());hR({app:js,router:mt});js.mount("#app");export{z2 as $,d2 as A,W as B,_R as C,ct as D,Se as E,Ee as F,S0 as G,qS as H,Ot as I,Lr as J,NS as K,$l as L,ds as M,je as N,gR as O,bR as P,Fe as Q,ne as R,uf as S,Ae as T,at as U,j0 as V,jm as W,Nm as X,Ro as Y,Cl as Z,ie as _,le as a,ma as a0,ya as a1,U2 as a2,Ue as a3,Z0 as a4,la as b,$e as c,ge as d,ym as e,B as f,s as g,w as h,K as i,Xe as j,Ef as k,h as l,J as m,ot as n,C as o,me as p,aa as q,Bs as r,Ut as s,ls as t,vR as u,R as v,_l as w,te as x,tf as y,F2 as z};
