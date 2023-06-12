(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Bn(e,t){const s=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return t?l=>!!s[l.toLowerCase()]:l=>!!s[l]}function dt(e){if(ae(e)){const t={};for(let s=0;s<e.length;s++){const o=e[s],l=je(o)?kh(o):dt(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(je(e))return e;if(Re(e))return e}}const gh=/;(?![^(]*\))/g,vh=/:([^]+)/,_h=/\/\*.*?\*\//gs;function kh(e){const t={};return e.replace(_h,"").split(gh).forEach(s=>{if(s){const o=s.split(vh);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function He(e){let t="";if(je(e))t=e;else if(ae(e))for(let s=0;s<e.length;s++){const o=He(e[s]);o&&(t+=o+" ")}else if(Re(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Oe(e){if(!e)return null;let{class:t,style:s}=e;return t&&!je(t)&&(e.class=He(t)),s&&(e.style=dt(s)),e}const bh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",xh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Zu=Bn(bh),wh=Bn(xh),Ch="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sh=Bn(Ch);function Gu(e){return!!e||e===""}const as=e=>je(e)?e:e==null?"":ae(e)||Re(e)&&(e.toString===np||!pe(e.toString))?JSON.stringify(e,Qu,2):String(e),Qu=(e,t)=>t&&t.__v_isRef?Qu(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:tp(t)?{[`Set(${t.size})`]:[...t.values()]}:Re(t)&&!ae(t)&&!sp(t)?String(t):t,Be=Object.freeze({}),Es=Object.freeze([]),mt=()=>{},ep=()=>!1,Eh=/^on[^a-z]/,Do=e=>Eh.test(e),kl=e=>e.startsWith("onUpdate:"),Ue=Object.assign,Ba=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Ah=Object.prototype.hasOwnProperty,_e=(e,t)=>Ah.call(e,t),ae=Array.isArray,Qn=e=>jo(e)==="[object Map]",tp=e=>jo(e)==="[object Set]",$h=e=>jo(e)==="[object RegExp]",pe=e=>typeof e=="function",je=e=>typeof e=="string",Ma=e=>typeof e=="symbol",Re=e=>e!==null&&typeof e=="object",Da=e=>Re(e)&&pe(e.then)&&pe(e.catch),np=Object.prototype.toString,jo=e=>np.call(e),ja=e=>jo(e).slice(8,-1),sp=e=>jo(e)==="[object Object]",Na=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ul=Bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rh=Bn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Dl=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Th=/-(\w)/g,Zt=Dl(e=>e.replace(Th,(t,s)=>s?s.toUpperCase():"")),Ih=/\B([A-Z])/g,fn=Dl(e=>e.replace(Ih,"-$1").toLowerCase()),is=Dl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=Dl(e=>e?`on${is(e)}`:""),_o=(e,t)=>!Object.is(e,t),wn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},bl=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},Mr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Hh=e=>{const t=je(e)?Number(e):NaN;return isNaN(t)?e:t};let Bi;const op=()=>Bi||(Bi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let xt;class lp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!t&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=xt;try{return xt=this,t()}finally{xt=s}}else xl("cannot run an inactive effect scope.")}on(){xt=this}off(){xt=this.parent}stop(t){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Oh(e){return new lp(e)}function Ph(e,t=xt){t&&t.active&&t.effects.push(e)}function Va(){return xt}function rp(e){xt?xt.cleanups.push(e):xl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Ua=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ap=e=>(e.w&On)>0,ip=e=>(e.n&On)>0,Lh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=On},Bh=e=>{const{deps:t}=e;if(t.length){let s=0;for(let o=0;o<t.length;o++){const l=t[o];ap(l)&&!ip(l)?l.delete(e):t[s++]=l,l.w&=~On,l.n&=~On}t.length=s}},Dr=new WeakMap;let to=0,On=1;const jr=30;let pt;const es=Symbol("iterate"),Nr=Symbol("Map key iterate");class Ja{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Ph(this,o)}run(){if(!this.active)return this.fn();let t=pt,s=An;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=pt,pt=this,An=!0,On=1<<++to,to<=jr?Lh(this):Mi(this),this.fn()}finally{to<=jr&&Bh(this),On=1<<--to,pt=this.parent,An=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pt===this?this.deferStop=!0:this.active&&(Mi(this),this.onStop&&this.onStop(),this.active=!1)}}function Mi(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let An=!0;const cp=[];function us(){cp.push(An),An=!1}function ps(){const e=cp.pop();An=e===void 0?!0:e}function gt(e,t,s){if(An&&pt){let o=Dr.get(e);o||Dr.set(e,o=new Map);let l=o.get(s);l||o.set(s,l=Ua()),up(l,{effect:pt,target:e,type:t,key:s})}}function up(e,t){let s=!1;to<=jr?ip(e)||(e.n|=On,s=!ap(e)):s=!e.has(pt),s&&(e.add(pt),pt.deps.push(e),pt.onTrack&&pt.onTrack(Object.assign({effect:pt},t)))}function hn(e,t,s,o,l,r){const a=Dr.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(s==="length"&&ae(e)){const p=Number(o);a.forEach((d,f)=>{(f==="length"||f>=p)&&i.push(d)})}else switch(s!==void 0&&i.push(a.get(s)),t){case"add":ae(e)?Na(s)&&i.push(a.get("length")):(i.push(a.get(es)),Qn(e)&&i.push(a.get(Nr)));break;case"delete":ae(e)||(i.push(a.get(es)),Qn(e)&&i.push(a.get(Nr)));break;case"set":Qn(e)&&i.push(a.get(es));break}const c={target:e,type:t,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&Vr(i[0],c);else{const p=[];for(const d of i)d&&p.push(...d);Vr(Ua(p),c)}}function Vr(e,t){const s=ae(e)?e:[...e];for(const o of s)o.computed&&Di(o,t);for(const o of s)o.computed||Di(o,t)}function Di(e,t){(e!==pt||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ue({effect:e},t)),e.scheduler?e.scheduler():e.run())}const Mh=Bn("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ma)),Dh=jl(),jh=jl(!1,!0),Nh=jl(!0),Vh=jl(!0,!0),ji=Uh();function Uh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const o=he(this);for(let r=0,a=this.length;r<a;r++)gt(o,"get",r+"");const l=o[t](...s);return l===-1||l===!1?o[t](...s.map(he)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){us();const o=he(this)[t].apply(this,s);return ps(),o}}),e}function Jh(e){const t=he(this);return gt(t,"has",e),t.hasOwnProperty(e)}function jl(e=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(e?t?vp:gp:t?yp:mp).get(o))return o;const a=ae(o);if(!e){if(a&&_e(ji,l))return Reflect.get(ji,l,r);if(l==="hasOwnProperty")return Jh}const i=Reflect.get(o,l,r);return(Ma(l)?pp.has(l):Mh(l))||(e||gt(o,"get",l),t)?i:$e(i)?a&&Na(l)?i:i.value:Re(i)?e?Kt(i):Ve(i):i}}const qh=dp(),zh=dp(!0);function dp(e=!1){return function(s,o,l,r){let a=s[o];if(Pn(a)&&$e(a)&&!$e(l))return!1;if(!e&&(!wl(l)&&!Pn(l)&&(a=he(a),l=he(l)),!ae(s)&&$e(a)&&!$e(l)))return a.value=l,!0;const i=ae(s)&&Na(o)?Number(o)<s.length:_e(s,o),c=Reflect.set(s,o,l,r);return s===he(r)&&(i?_o(l,a)&&hn(s,"set",o,l,a):hn(s,"add",o,l)),c}}function Xh(e,t){const s=_e(e,t),o=e[t],l=Reflect.deleteProperty(e,t);return l&&s&&hn(e,"delete",t,void 0,o),l}function Wh(e,t){const s=Reflect.has(e,t);return(!Ma(t)||!pp.has(t))&&gt(e,"has",t),s}function Kh(e){return gt(e,"iterate",ae(e)?"length":es),Reflect.ownKeys(e)}const fp={get:Dh,set:qh,deleteProperty:Xh,has:Wh,ownKeys:Kh},hp={get:Nh,set(e,t){return xl(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return xl(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Yh=Ue({},fp,{get:jh,set:zh}),Zh=Ue({},hp,{get:Vh}),qa=e=>e,Nl=e=>Reflect.getPrototypeOf(e);function Zo(e,t,s=!1,o=!1){e=e.__v_raw;const l=he(e),r=he(t);s||(t!==r&&gt(l,"get",t),gt(l,"get",r));const{has:a}=Nl(l),i=o?qa:s?za:ko;if(a.call(l,t))return i(e.get(t));if(a.call(l,r))return i(e.get(r));e!==l&&e.get(t)}function Go(e,t=!1){const s=this.__v_raw,o=he(s),l=he(e);return t||(e!==l&&gt(o,"has",e),gt(o,"has",l)),e===l?s.has(e):s.has(e)||s.has(l)}function Qo(e,t=!1){return e=e.__v_raw,!t&&gt(he(e),"iterate",es),Reflect.get(e,"size",e)}function Ni(e){e=he(e);const t=he(this);return Nl(t).has.call(t,e)||(t.add(e),hn(t,"add",e,e)),this}function Vi(e,t){t=he(t);const s=he(this),{has:o,get:l}=Nl(s);let r=o.call(s,e);r?Fp(s,o,e):(e=he(e),r=o.call(s,e));const a=l.call(s,e);return s.set(e,t),r?_o(t,a)&&hn(s,"set",e,t,a):hn(s,"add",e,t),this}function Ui(e){const t=he(this),{has:s,get:o}=Nl(t);let l=s.call(t,e);l?Fp(t,s,e):(e=he(e),l=s.call(t,e));const r=o?o.call(t,e):void 0,a=t.delete(e);return l&&hn(t,"delete",e,void 0,r),a}function Ji(){const e=he(this),t=e.size!==0,s=Qn(e)?new Map(e):new Set(e),o=e.clear();return t&&hn(e,"clear",void 0,void 0,s),o}function el(e,t){return function(o,l){const r=this,a=r.__v_raw,i=he(a),c=t?qa:e?za:ko;return!e&&gt(i,"iterate",es),a.forEach((p,d)=>o.call(l,c(p),c(d),r))}}function tl(e,t,s){return function(...o){const l=this.__v_raw,r=he(l),a=Qn(r),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=l[e](...o),d=s?qa:t?za:ko;return!t&&gt(r,"iterate",c?Nr:es),{next(){const{value:f,done:h}=p.next();return h?{value:f,done:h}:{value:i?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function yn(e){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${is(e)} operation ${s}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Gh(){const e={get(r){return Zo(this,r)},get size(){return Qo(this)},has:Go,add:Ni,set:Vi,delete:Ui,clear:Ji,forEach:el(!1,!1)},t={get(r){return Zo(this,r,!1,!0)},get size(){return Qo(this)},has:Go,add:Ni,set:Vi,delete:Ui,clear:Ji,forEach:el(!1,!0)},s={get(r){return Zo(this,r,!0)},get size(){return Qo(this,!0)},has(r){return Go.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:el(!0,!1)},o={get(r){return Zo(this,r,!0,!0)},get size(){return Qo(this,!0)},has(r){return Go.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:el(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=tl(r,!1,!1),s[r]=tl(r,!0,!1),t[r]=tl(r,!1,!0),o[r]=tl(r,!0,!0)}),[e,s,t,o]}const[Qh,eF,tF,nF]=Gh();function Vl(e,t){const s=t?e?nF:tF:e?eF:Qh;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(_e(s,l)&&l in o?s:o,l,r)}const sF={get:Vl(!1,!1)},oF={get:Vl(!1,!0)},lF={get:Vl(!0,!1)},rF={get:Vl(!0,!0)};function Fp(e,t,s){const o=he(s);if(o!==s&&t.call(e,o)){const l=ja(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const mp=new WeakMap,yp=new WeakMap,gp=new WeakMap,vp=new WeakMap;function aF(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iF(e){return e.__v_skip||!Object.isExtensible(e)?0:aF(ja(e))}function Ve(e){return Pn(e)?e:Ul(e,!1,fp,sF,mp)}function cF(e){return Ul(e,!1,Yh,oF,yp)}function Kt(e){return Ul(e,!0,hp,lF,gp)}function ws(e){return Ul(e,!0,Zh,rF,vp)}function Ul(e,t,s,o,l){if(!Re(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const a=iF(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return l.set(e,i),i}function ts(e){return Pn(e)?ts(e.__v_raw):!!(e&&e.__v_isReactive)}function Pn(e){return!!(e&&e.__v_isReadonly)}function wl(e){return!!(e&&e.__v_isShallow)}function Ur(e){return ts(e)||Pn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Jl(e){return bl(e,"__v_skip",!0),e}const ko=e=>Re(e)?Ve(e):e,za=e=>Re(e)?Kt(e):e;function Xa(e){An&&pt&&(e=he(e),up(e.dep||(e.dep=Ua()),{target:e,type:"get",key:"value"}))}function Wa(e,t){e=he(e);const s=e.dep;s&&Vr(s,{target:e,type:"set",key:"value",newValue:t})}function $e(e){return!!(e&&e.__v_isRef===!0)}function z(e){return _p(e,!1)}function Gt(e){return _p(e,!0)}function _p(e,t){return $e(e)?e:new uF(e,t)}class uF{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:he(t),this._value=s?t:ko(t)}get value(){return Xa(this),this._value}set value(t){const s=this.__v_isShallow||wl(t)||Pn(t);t=s?t:he(t),_o(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:ko(t),Wa(this,t))}}function x(e){return $e(e)?e.value:e}const pF={get:(e,t,s)=>x(Reflect.get(e,t,s)),set:(e,t,s,o)=>{const l=e[t];return $e(l)&&!$e(s)?(l.value=s,!0):Reflect.set(e,t,s,o)}};function kp(e){return ts(e)?e:new Proxy(e,pF)}class dF{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>Xa(this),()=>Wa(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function fF(e){return new dF(e)}var bp;class hF{constructor(t,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[bp]=!1,this._dirty=!0,this.effect=new Ja(t,()=>{this._dirty||(this._dirty=!0,Wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=he(this);return Xa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}bp="__v_isReadonly";function FF(e,t,s=!1){let o,l;const r=pe(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const a=new hF(o,l,r||!l,s);return t&&!s&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const ns=[];function pl(e){ns.push(e)}function dl(){ns.pop()}function O(e,...t){us();const s=ns.length?ns[ns.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=mF();if(o)pn(o,s,11,[e+t.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${er(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...t];l.length&&r.push(`
`,...yF(l)),console.warn(...r)}ps()}function mF(){let e=ns[ns.length-1];if(!e)return[];const t=[];for(;e;){const s=t[0];s&&s.vnode===e?s.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function yF(e){const t=[];return e.forEach((s,o)=>{t.push(...o===0?[]:[`
`],...gF(s))}),t}function gF({vnode:e,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${er(e.component,e.type,o)}`,r=">"+s;return e.props?[l,...vF(e.props),r]:[l+r]}function vF(e){const t=[],s=Object.keys(e);return s.slice(0,3).forEach(o=>{t.push(...xp(o,e[o]))}),s.length>3&&t.push(" ..."),t}function xp(e,t,s){return je(t)?(t=JSON.stringify(t),s?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${e}=${t}`]:$e(t)?(t=xp(e,he(t.value),!0),s?t:[`${e}=Ref<`,t,">"]):pe(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),s?t:[`${e}=`,t])}function _F(e,t){e!==void 0&&(typeof e!="number"?O(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&O(`${t} is NaN - the duration expression might be incorrect.`))}const Ka={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function pn(e,t,s,o){let l;try{l=o?e(...o):e()}catch(r){ql(r,t,s)}return l}function Ot(e,t,s,o){if(pe(e)){const r=pn(e,t,s,o);return r&&Da(r)&&r.catch(a=>{ql(a,t,s)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(Ot(e[r],t,s,o));return l}function ql(e,t,s,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,i=Ka[s];for(;r;){const p=r.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,a,i)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){pn(c,null,10,[e,a,i]);return}}kF(e,s,l,o)}function kF(e,t,s,o=!0){{const l=Ka[t];if(s&&pl(s),O(`Unhandled error${l?` during execution of ${l}`:""}`),s&&dl(),o)throw e;console.error(e)}}let bo=!1,Jr=!1;const lt=[];let Xt=0;const As=[];let zt=null,kn=0;const wp=Promise.resolve();let Ya=null;const bF=100;function nt(e){const t=Ya||wp;return e?t.then(this?e.bind(this):e):t}function xF(e){let t=Xt+1,s=lt.length;for(;t<s;){const o=t+s>>>1;xo(lt[o])<e?t=o+1:s=o}return t}function zl(e){(!lt.length||!lt.includes(e,bo&&e.allowRecurse?Xt+1:Xt))&&(e.id==null?lt.push(e):lt.splice(xF(e.id),0,e),Cp())}function Cp(){!bo&&!Jr&&(Jr=!0,Ya=wp.then(Ap))}function wF(e){const t=lt.indexOf(e);t>Xt&&lt.splice(t,1)}function Sp(e){ae(e)?As.push(...e):(!zt||!zt.includes(e,e.allowRecurse?kn+1:kn))&&As.push(e),Cp()}function qi(e,t=bo?Xt+1:0){for(e=e||new Map;t<lt.length;t++){const s=lt[t];if(s&&s.pre){if(Za(e,s))continue;lt.splice(t,1),t--,s()}}}function Ep(e){if(As.length){const t=[...new Set(As)];if(As.length=0,zt){zt.push(...t);return}for(zt=t,e=e||new Map,zt.sort((s,o)=>xo(s)-xo(o)),kn=0;kn<zt.length;kn++)Za(e,zt[kn])||zt[kn]();zt=null,kn=0}}const xo=e=>e.id==null?1/0:e.id,CF=(e,t)=>{const s=xo(e)-xo(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function Ap(e){Jr=!1,bo=!0,e=e||new Map,lt.sort(CF);const t=s=>Za(e,s);try{for(Xt=0;Xt<lt.length;Xt++){const s=lt[Xt];if(s&&s.active!==!1){if(t(s))continue;pn(s,null,14)}}}finally{Xt=0,lt.length=0,Ep(e),bo=!1,Ya=null,(lt.length||As.length)&&Ap(e)}}function Za(e,t){if(!e.has(t))e.set(t,1);else{const s=e.get(t);if(s>bF){const o=t.ownerInstance,l=o&&Eo(o.type);return O(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,s+1)}}let $n=!1;const ks=new Set;op().__VUE_HMR_RUNTIME__={createRecord:rr($p),rerender:rr(AF),reload:rr($F)};const cs=new Map;function SF(e){const t=e.type.__hmrId;let s=cs.get(t);s||($p(t,e.type),s=cs.get(t)),s.instances.add(e)}function EF(e){cs.get(e.type.__hmrId).instances.delete(e)}function $p(e,t){return cs.has(e)?!1:(cs.set(e,{initialDef:ro(t),instances:new Set}),!0)}function ro(e){return id(e)?e.__vccOpts:e}function AF(e,t){const s=cs.get(e);s&&(s.initialDef.render=t,[...s.instances].forEach(o=>{t&&(o.render=t,ro(o.type).render=t),o.renderCache=[],$n=!0,o.update(),$n=!1}))}function $F(e,t){const s=cs.get(e);if(!s)return;t=ro(t),zi(s.initialDef,t);const o=[...s.instances];for(const l of o){const r=ro(l.type);ks.has(r)||(r!==s.initialDef&&zi(r,t),ks.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(ks.add(r),l.ceReload(t.styles),ks.delete(r)):l.parent?zl(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Sp(()=>{for(const l of o)ks.delete(ro(l.type))})}function zi(e,t){Ue(e,t);for(const s in e)s!=="__file"&&!(s in t)&&delete e[s]}function rr(e){return(t,s)=>{try{return e(t,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Wt,no=[],qr=!1;function No(e,...t){Wt?Wt.emit(e,...t):qr||no.push({event:e,args:t})}function Rp(e,t){var s,o;Wt=e,Wt?(Wt.enabled=!0,no.forEach(({event:l,args:r})=>Wt.emit(l,...r)),no=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Rp(r,t)}),setTimeout(()=>{Wt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,qr=!0,no=[])},3e3)):(qr=!0,no=[])}function RF(e,t){No("app:init",e,t,{Fragment:Ae,Text:qo,Comment:et,Static:fl})}function TF(e){No("app:unmount",e)}const zr=Ga("component:added"),Tp=Ga("component:updated"),IF=Ga("component:removed"),HF=e=>{Wt&&typeof Wt.cleanupBuffer=="function"&&!Wt.cleanupBuffer(e)&&IF(e)};function Ga(e){return t=>{No(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const OF=Ip("perf:start"),PF=Ip("perf:end");function Ip(e){return(t,s,o)=>{No(e,t.appContext.app,t.uid,t,s,o)}}function LF(e,t,s){No("component:emit",e.appContext.app,e,t,s)}function BF(e,t,...s){if(e.isUnmounted)return;const o=e.vnode.props||Be;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(t in d))(!f||!(Jn(t)in f))&&O(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Jn(t)}" prop.`);else{const h=d[t];pe(h)&&(h(...s)||O(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=s;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=o[d]||Be;h&&(l=s.map(F=>je(F)?F.trim():F)),f&&(l=s.map(Mr))}LF(e,t,l);{const d=t.toLowerCase();d!==t&&o[Jn(d)]&&O(`Event "${d}" is emitted in component ${er(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${fn(t)}" instead of "${t}".`)}let i,c=o[i=Jn(t)]||o[i=Jn(Zt(t))];!c&&r&&(c=o[i=Jn(fn(t))]),c&&Ot(c,e,6,l);const p=o[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Ot(p,e,6,l)}}function Hp(e,t,s=!1){const o=t.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let a={},i=!1;if(!pe(e)){const c=p=>{const d=Hp(p,t,!0);d&&(i=!0,Ue(a,d))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?(Re(e)&&o.set(e,null),null):(ae(r)?r.forEach(c=>a[c]=null):Ue(a,r),Re(e)&&o.set(e,a),a)}function Xl(e,t){return!e||!Do(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,fn(t))||_e(e,t))}let Ze=null,Wl=null;function Cl(e){const t=Ze;return Ze=e,Wl=e&&e.type.__scopeId||null,t}function MF(e){Wl=e}function DF(){Wl=null}function W(e,t=Ze,s){if(!t||e._n)return e;const o=(...l)=>{o._d&&lc(-1);const r=Cl(t);let a;try{a=e(...l)}finally{Cl(r),o._d&&lc(1)}return Tp(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let Xr=!1;function Sl(){Xr=!0}function ar(e){const{type:t,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:p,render:d,renderCache:f,data:h,setupState:F,ctx:m,inheritAttrs:g}=e;let v,w;const k=Cl(e);Xr=!1;try{if(s.shapeFlag&4){const T=l||o;v=jt(d.call(T,T,f,r,F,h,m)),w=c}else{const T=t;c===r&&Sl(),v=jt(T.length>1?T(r,{get attrs(){return Sl(),c},slots:i,emit:p}):T(r,null)),w=t.props?c:NF(c)}}catch(T){io.length=0,ql(T,e,1),v=j(et)}let b=v,C;if(v.patchFlag>0&&v.patchFlag&2048&&([b,C]=jF(v)),w&&g!==!1){const T=Object.keys(w),{shapeFlag:P}=b;if(T.length){if(P&7)a&&T.some(kl)&&(w=VF(w,a)),b=Vt(b,w);else if(!Xr&&b.type!==et){const V=Object.keys(c),$=[],D=[];for(let G=0,ie=V.length;G<ie;G++){const X=V[G];Do(X)?kl(X)||$.push(X[2].toLowerCase()+X.slice(3)):D.push(X)}D.length&&O(`Extraneous non-props attributes (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),$.length&&O(`Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(Xi(b)||O("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=Vt(b),b.dirs=b.dirs?b.dirs.concat(s.dirs):s.dirs),s.transition&&(Xi(b)||O("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=s.transition),C?C(b):v=b,Cl(k),v}const jF=e=>{const t=e.children,s=e.dynamicChildren,o=Op(t);if(!o)return[e,void 0];const l=t.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{t[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...s,i]))};return[jt(o),a]};function Op(e){let t;for(let s=0;s<e.length;s++){const o=e[s];if(Qt(o)){if(o.type!==et||o.children==="v-if"){if(t)return;t=o}}else return}return t}const NF=e=>{let t;for(const s in e)(s==="class"||s==="style"||Do(s))&&((t||(t={}))[s]=e[s]);return t},VF=(e,t)=>{const s={};for(const o in e)(!kl(o)||!(o.slice(9)in t))&&(s[o]=e[o]);return s},Xi=e=>e.shapeFlag&7||e.type===et;function UF(e,t,s){const{props:o,children:l,component:r}=e,{props:a,children:i,patchFlag:c}=t,p=r.emitsOptions;if((l||i)&&$n||t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Wi(o,a,p):!!a;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(a[h]!==o[h]&&!Xl(p,h))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Wi(o,a,p):!0:!!a;return!1}function Wi(e,t,s){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==e[r]&&!Xl(s,r))return!0}return!1}function JF({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const Pp=e=>e.__isSuspense;function qF(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):Sp(e)}function wt(e,t){if(!Je)O("provide() can only be used inside setup().");else{let s=Je.provides;const o=Je.parent&&Je.parent.provides;o===s&&(s=Je.provides=Object.create(o)),s[e]=t}}function K(e,t,s=!1){const o=Je||Ze;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return s&&pe(t)?t.call(o.proxy):t;O(`injection "${String(e)}" not found.`)}else O("inject() can only be used inside setup() or functional components.")}function ds(e,t){return Qa(e,null,t)}const nl={};function me(e,t,s){return pe(t)||O("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Qa(e,t,s)}function Qa(e,t,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Be){t||(s!==void 0&&O('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&O('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=C=>{O("Invalid watch source: ",C,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Va()===(Je==null?void 0:Je.scope)?Je:null;let p,d=!1,f=!1;if($e(e)?(p=()=>e.value,d=wl(e)):ts(e)?(p=()=>e,o=!0):ae(e)?(f=!0,d=e.some(C=>ts(C)||wl(C)),p=()=>e.map(C=>{if($e(C))return C.value;if(ts(C))return Yn(C);if(pe(C))return pn(C,c,2);i(C)})):pe(e)?t?p=()=>pn(e,c,2):p=()=>{if(!(c&&c.isUnmounted))return h&&h(),Ot(e,c,3,[F])}:(p=mt,i(e)),t&&o){const C=p;p=()=>Yn(C())}let h,F=C=>{h=k.onStop=()=>{pn(C,c,4)}},m;if(So)if(F=mt,t?s&&Ot(t,c,3,[p(),f?[]:void 0,F]):p(),l==="sync"){const C=Zm();m=C.__watcherHandles||(C.__watcherHandles=[])}else return mt;let g=f?new Array(e.length).fill(nl):nl;const v=()=>{if(k.active)if(t){const C=k.run();(o||d||(f?C.some((T,P)=>_o(T,g[P])):_o(C,g)))&&(h&&h(),Ot(t,c,3,[C,g===nl?void 0:f&&g[0]===nl?[]:g,F]),g=C)}else k.run()};v.allowRecurse=!!t;let w;l==="sync"?w=v:l==="post"?w=()=>tt(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),w=()=>zl(v));const k=new Ja(p,w);k.onTrack=r,k.onTrigger=a,t?s?v():g=k.run():l==="post"?tt(k.run.bind(k),c&&c.suspense):k.run();const b=()=>{k.stop(),c&&c.scope&&Ba(c.scope.effects,k)};return m&&m.push(b),b}function zF(e,t,s){const o=this.proxy,l=je(e)?e.includes(".")?Lp(o,e):()=>o[e]:e.bind(o,o);let r;pe(t)?r=t:(r=t.handler,s=t);const a=Je;Bs(this);const i=Qa(l,r.bind(o),s);return a?Bs(a):os(),i}function Lp(e,t){const s=t.split(".");return()=>{let o=e;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function Yn(e,t){if(!Re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),$e(e))Yn(e.value,t);else if(ae(e))for(let s=0;s<e.length;s++)Yn(e[s],t);else if(tp(e)||Qn(e))e.forEach(s=>{Yn(s,t)});else if(sp(e))for(const s in e)Yn(e[s],t);return e}function Bp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fs(()=>{e.isMounted=!0}),Uo(()=>{e.isUnmounting=!0}),e}const Rt=[Function,Array],XF={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},setup(e,{slots:t}){const s=$t(),o=Bp();let l;return()=>{const r=t.default&&ei(t.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let g=!1;for(const v of r)if(v.type!==et){if(g){O("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=v,g=!0}}const i=he(e),{mode:c}=i;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&O(`invalid <transition> mode: ${c}`),o.isLeaving)return ir(a);const p=Ki(a);if(!p)return ir(a);const d=wo(p,i,o,s);Os(p,d);const f=s.subTree,h=f&&Ki(f);let F=!1;const{getTransitionKey:m}=p.type;if(m){const g=m();l===void 0?l=g:g!==l&&(l=g,F=!0)}if(h&&h.type!==et&&(!Sn(p,h)||F)){const g=wo(h,i,o,s);if(Os(h,g),c==="out-in")return o.isLeaving=!0,g.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},ir(a);c==="in-out"&&p.type!==et&&(g.delayLeave=(v,w,k)=>{const b=Mp(o,h);b[String(h.key)]=h,v._leaveCb=()=>{w(),v._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=k})}return a}}},WF=XF;function Mp(e,t){const{leavingVNodes:s}=e;let o=s.get(t.type);return o||(o=Object.create(null),s.set(t.type,o)),o}function wo(e,t,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:F,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:w,onAppearCancelled:k}=t,b=String(e.key),C=Mp(s,e),T=($,D)=>{$&&Ot($,o,9,D)},P=($,D)=>{const G=D[1];T($,D),ae($)?$.every(ie=>ie.length<=1)&&G():$.length<=1&&G()},V={mode:r,persisted:a,beforeEnter($){let D=i;if(!s.isMounted)if(l)D=g||i;else return;$._leaveCb&&$._leaveCb(!0);const G=C[b];G&&Sn(e,G)&&G.el._leaveCb&&G.el._leaveCb(),T(D,[$])},enter($){let D=c,G=p,ie=d;if(!s.isMounted)if(l)D=v||c,G=w||p,ie=k||d;else return;let X=!1;const ce=$._enterCb=Ie=>{X||(X=!0,Ie?T(ie,[$]):T(G,[$]),V.delayedLeave&&V.delayedLeave(),$._enterCb=void 0)};D?P(D,[$,ce]):ce()},leave($,D){const G=String(e.key);if($._enterCb&&$._enterCb(!0),s.isUnmounting)return D();T(f,[$]);let ie=!1;const X=$._leaveCb=ce=>{ie||(ie=!0,D(),ce?T(m,[$]):T(F,[$]),$._leaveCb=void 0,C[G]===e&&delete C[G])};C[G]=e,h?P(h,[$,X]):X()},clone($){return wo($,t,s,o)}};return V}function ir(e){if(Vo(e))return e=Vt(e),e.children=null,e}function Ki(e){return Vo(e)?e.children?e.children[0]:void 0:e}function Os(e,t){e.shapeFlag&6&&e.component?Os(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ei(e,t=!1,s){let o=[],l=0;for(let r=0;r<e.length;r++){let a=e[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===Ae?(a.patchFlag&128&&l++,o=o.concat(ei(a.children,t,i))):(t||a.type!==et)&&o.push(i!=null?Vt(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Ce(e){return pe(e)?{setup:e,name:e.name}:e}const $s=e=>!!e.type.__asyncLoader,Vo=e=>e.type.__isKeepAlive,KF={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=$t(),o=s.ctx;if(!o.renderer)return()=>{const k=t.default&&t.default();return k&&k.length===1?k[0]:k};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:p,um:d,o:{createElement:f}}}=o,h=f("div");o.activate=(k,b,C,T,P)=>{const V=k.component;p(k,b,C,0,i),c(V.vnode,k,b,C,V,i,T,k.slotScopeIds,P),tt(()=>{V.isDeactivated=!1,V.a&&wn(V.a);const $=k.props&&k.props.onVnodeMounted;$&&Tt($,V.parent,k)},i),zr(V)},o.deactivate=k=>{const b=k.component;p(k,h,null,1,i),tt(()=>{b.da&&wn(b.da);const C=k.props&&k.props.onVnodeUnmounted;C&&Tt(C,b.parent,k),b.isDeactivated=!0},i),zr(b)};function F(k){cr(k),d(k,s,i,!0)}function m(k){l.forEach((b,C)=>{const T=Eo(b.type);T&&(!k||!k(T))&&g(C)})}function g(k){const b=l.get(k);!a||!Sn(b,a)?F(b):a&&cr(a),l.delete(k),r.delete(k)}me(()=>[e.include,e.exclude],([k,b])=>{k&&m(C=>so(k,C)),b&&m(C=>!so(b,C))},{flush:"post",deep:!0});let v=null;const w=()=>{v!=null&&l.set(v,ur(s.subTree))};return fs(w),Yl(w),Uo(()=>{l.forEach(k=>{const{subTree:b,suspense:C}=s,T=ur(b);if(k.type===T.type&&k.key===T.key){cr(T);const P=T.component.da;P&&tt(P,C);return}F(k)})}),()=>{if(v=null,!t.default)return null;const k=t.default(),b=k[0];if(k.length>1)return O("KeepAlive should contain exactly one component child."),a=null,k;if(!Qt(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return a=null,b;let C=ur(b);const T=C.type,P=Eo($s(C)?C.type.__asyncResolved||{}:T),{include:V,exclude:$,max:D}=e;if(V&&(!P||!so(V,P))||$&&P&&so($,P))return a=C,b;const G=C.key==null?T:C.key,ie=l.get(G);return C.el&&(C=Vt(C),b.shapeFlag&128&&(b.ssContent=C)),v=G,ie?(C.el=ie.el,C.component=ie.component,C.transition&&Os(C,C.transition),C.shapeFlag|=512,r.delete(G),r.add(G)):(r.add(G),D&&r.size>parseInt(D,10)&&g(r.values().next().value)),C.shapeFlag|=256,a=C,Pp(b.type)?b:C}}},Dp=KF;function so(e,t){return ae(e)?e.some(s=>so(s,t)):je(e)?e.split(",").includes(t):$h(e)?e.test(t):!1}function jp(e,t){Vp(e,"a",t)}function Np(e,t){Vp(e,"da",t)}function Vp(e,t,s=Je){const o=e.__wdc||(e.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(Kl(t,o,s),s){let l=s.parent;for(;l&&l.parent;)Vo(l.parent.vnode)&&YF(o,t,s,l),l=l.parent}}function YF(e,t,s,o){const l=Kl(t,e,o,!0);Zl(()=>{Ba(o[t],l)},s)}function cr(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ur(e){return e.shapeFlag&128?e.ssContent:e}function Kl(e,t,s=Je,o=!1){if(s){const l=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(s.isUnmounted)return;us(),Bs(s);const i=Ot(t,s,e,a);return os(),ps(),i});return o?l.unshift(r):l.push(r),r}else{const l=Jn(Ka[e].replace(/ hook$/,""));O(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Fn=e=>(t,s=Je)=>(!So||e==="sp")&&Kl(e,(...o)=>t(...o),s),ZF=Fn("bm"),fs=Fn("m"),GF=Fn("bu"),Yl=Fn("u"),Uo=Fn("bum"),Zl=Fn("um"),QF=Fn("sp"),em=Fn("rtg"),tm=Fn("rtc");function nm(e,t=Je){Kl("ec",e,t)}function Up(e){Rh(e)&&O("Do not use built-in directive ids as custom directive id: "+e)}function Qe(e,t){const s=Ze;if(s===null)return O("withDirectives can only be used inside render functions."),e;const o=Ql(s)||s.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[a,i,c,p=Be]=t[r];a&&(pe(a)&&(a={mounted:a,updated:a}),a.deep&&Yn(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:p}))}return e}function Mn(e,t,s,o){const l=e.dirs,r=t&&t.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(us(),Ot(c,s,8,[e.el,i,e,t]),ps())}}const Wr="components",sm="directives";function Ps(e,t){return Jp(Wr,e,!0,t)||e}const om=Symbol();function Ls(e){return Jp(sm,e)}function Jp(e,t,s=!0,o=!1){const l=Ze||Je;if(l){const r=l.type;if(e===Wr){const i=Eo(r,!1);if(i&&(i===t||i===Zt(t)||i===is(Zt(t))))return r}const a=Yi(l[e]||r[e],t)||Yi(l.appContext[e],t);if(!a&&o)return r;if(s&&!a){const i=e===Wr?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";O(`Failed to resolve ${e.slice(0,-1)}: ${t}${i}`)}return a}else O(`resolve${is(e.slice(0,-1))} can only be used in render() or setup().`)}function Yi(e,t){return e&&(e[t]||e[Zt(t)]||e[is(Zt(t))])}function Jo(e,t,s,o){let l;const r=s&&s[o];if(ae(e)||je(e)){l=new Array(e.length);for(let a=0,i=e.length;a<i;a++)l[a]=t(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||O(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let a=0;a<e;a++)l[a]=t(a+1,a,void 0,r&&r[a])}else if(Re(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>t(a,i,void 0,r&&r[i]));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const p=a[i];l[i]=t(e[p],p,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function vt(e,t,s={},o,l){if(Ze.isCE||Ze.parent&&$s(Ze.parent)&&Ze.parent.isCE)return t!=="default"&&(s.name=t),j("slot",s,o&&o());let r=e[t];r&&r.length>1&&(O("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),E();const a=r&&qp(r(s)),i=te(Ae,{key:s.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function qp(e){return e.some(t=>Qt(t)?!(t.type===et||t.type===Ae&&!qp(t.children)):!0)?e:null}const Kr=e=>e?ld(e)?Ql(e)||e.proxy:Kr(e.parent):null,ss=Ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ws(e.props),$attrs:e=>ws(e.attrs),$slots:e=>ws(e.slots),$refs:e=>ws(e.refs),$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>ni(e),$forceUpdate:e=>e.f||(e.f=()=>zl(e.update)),$nextTick:e=>e.n||(e.n=nt.bind(e.proxy)),$watch:e=>zF.bind(e)}),ti=e=>e==="_"||e==="$",pr=(e,t)=>e!==Be&&!e.__isScriptSetup&&_e(e,t),zp={get({_:e},t){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=e;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const F=a[t];if(F!==void 0)switch(F){case 1:return o[t];case 2:return l[t];case 4:return s[t];case 3:return r[t]}else{if(pr(o,t))return a[t]=1,o[t];if(l!==Be&&_e(l,t))return a[t]=2,l[t];if((p=e.propsOptions[0])&&_e(p,t))return a[t]=3,r[t];if(s!==Be&&_e(s,t))return a[t]=4,s[t];Yr&&(a[t]=0)}}const d=ss[t];let f,h;if(d)return t==="$attrs"&&(gt(e,"get",t),Sl()),d(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(s!==Be&&_e(s,t))return a[t]=4,s[t];if(h=c.config.globalProperties,_e(h,t))return h[t];Ze&&(!je(t)||t.indexOf("__v")!==0)&&(l!==Be&&ti(t[0])&&_e(l,t)?O(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ze&&O(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,s){const{data:o,setupState:l,ctx:r}=e;return pr(l,t)?(l[t]=s,!0):l.__isScriptSetup&&_e(l,t)?(O(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Be&&_e(o,t)?(o[t]=s,!0):_e(e.props,t)?(O(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(O(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:s}):r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||e!==Be&&_e(e,a)||pr(t,a)||(i=r[0])&&_e(i,a)||_e(o,a)||_e(ss,a)||_e(l.config.globalProperties,a)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:_e(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};zp.ownKeys=e=>(O("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function lm(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ss).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>ss[s](e),set:mt})}),t}function rm(e){const{ctx:t,propsOptions:[s]}=e;s&&Object.keys(s).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:mt})})}function am(e){const{ctx:t,setupState:s}=e;Object.keys(he(s)).forEach(o=>{if(!s.__isScriptSetup){if(ti(o[0])){O(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:mt})}})}function im(){const e=Object.create(null);return(t,s)=>{e[s]?O(`${t} property "${s}" is already defined in ${e[s]}.`):e[s]=t}}let Yr=!0;function cm(e){const t=ni(e),s=e.proxy,o=e.ctx;Yr=!1,t.beforeCreate&&Zi(t.beforeCreate,e,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:p,created:d,beforeMount:f,mounted:h,beforeUpdate:F,updated:m,activated:g,deactivated:v,beforeDestroy:w,beforeUnmount:k,destroyed:b,unmounted:C,render:T,renderTracked:P,renderTriggered:V,errorCaptured:$,serverPrefetch:D,expose:G,inheritAttrs:ie,components:X,directives:ce,filters:Ie}=t,ze=im();{const[Y]=e.propsOptions;if(Y)for(const re in Y)ze("Props",re)}if(p&&um(p,o,ze,e.appContext.config.unwrapInjectedRef),a)for(const Y in a){const re=a[Y];pe(re)?(Object.defineProperty(o,Y,{value:re.bind(s),configurable:!0,enumerable:!0,writable:!0}),ze("Methods",Y)):O(`Method "${Y}" has type "${typeof re}" in the component definition. Did you reference the function correctly?`)}if(l){pe(l)||O("The data option must be a function. Plain object usage is no longer supported.");const Y=l.call(s,s);if(Da(Y)&&O("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Re(Y))O("data() should return an object.");else{e.data=Ve(Y);for(const re in Y)ze("Data",re),ti(re[0])||Object.defineProperty(o,re,{configurable:!0,enumerable:!0,get:()=>Y[re],set:mt})}}if(Yr=!0,r)for(const Y in r){const re=r[Y],ge=pe(re)?re.bind(s,s):pe(re.get)?re.get.bind(s,s):mt;ge===mt&&O(`Computed property "${Y}" has no getter.`);const Pe=!pe(re)&&pe(re.set)?re.set.bind(s):()=>{O(`Write operation failed: computed property "${Y}" is readonly.`)},_t=R({get:ge,set:Pe});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>_t.value,set:ot=>_t.value=ot}),ze("Computed",Y)}if(i)for(const Y in i)Xp(i[Y],o,s,Y);if(c){const Y=pe(c)?c.call(s):c;Reflect.ownKeys(Y).forEach(re=>{wt(re,Y[re])})}d&&Zi(d,e,"c");function Me(Y,re){ae(re)?re.forEach(ge=>Y(ge.bind(s))):re&&Y(re.bind(s))}if(Me(ZF,f),Me(fs,h),Me(GF,F),Me(Yl,m),Me(jp,g),Me(Np,v),Me(nm,$),Me(tm,P),Me(em,V),Me(Uo,k),Me(Zl,C),Me(QF,D),ae(G))if(G.length){const Y=e.exposed||(e.exposed={});G.forEach(re=>{Object.defineProperty(Y,re,{get:()=>s[re],set:ge=>s[re]=ge})})}else e.exposed||(e.exposed={});T&&e.render===mt&&(e.render=T),ie!=null&&(e.inheritAttrs=ie),X&&(e.components=X),ce&&(e.directives=ce)}function um(e,t,s=mt,o=!1){ae(e)&&(e=Zr(e));for(const l in e){const r=e[l];let a;Re(r)?"default"in r?a=K(r.from||l,r.default,!0):a=K(r.from||l):a=K(r),$e(a)?o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):(O(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[l]=a):t[l]=a,s("Inject",l)}}function Zi(e,t,s){Ot(ae(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,s)}function Xp(e,t,s,o){const l=o.includes(".")?Lp(s,o):()=>s[o];if(je(e)){const r=t[e];pe(r)?me(l,r):O(`Invalid watch handler specified by key "${e}"`,r)}else if(pe(e))me(l,e.bind(s));else if(Re(e))if(ae(e))e.forEach(r=>Xp(r,t,s,o));else{const r=pe(e.handler)?e.handler.bind(s):t[e.handler];pe(r)?me(l,r,e):O(`Invalid watch handler specified by key "${e.handler}"`,r)}else O(`Invalid watch option: "${o}"`,e)}function ni(e){const t=e.type,{mixins:s,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,i=r.get(t);let c;return i?c=i:!l.length&&!s&&!o?c=t:(c={},l.length&&l.forEach(p=>El(c,p,a,!0)),El(c,t,a)),Re(t)&&r.set(t,c),c}function El(e,t,s,o=!1){const{mixins:l,extends:r}=t;r&&El(e,r,s,!0),l&&l.forEach(a=>El(e,a,s,!0));for(const a in t)if(o&&a==="expose")O('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=pm[a]||s&&s[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const pm={data:Gi,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:qn,directives:qn,watch:fm,provide:Gi,inject:dm};function Gi(e,t){return t?e?function(){return Ue(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function dm(e,t){return qn(Zr(e),Zr(t))}function Zr(e){if(ae(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function it(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?Ue(Ue(Object.create(null),e),t):t}function fm(e,t){if(!e)return t;if(!t)return e;const s=Ue(Object.create(null),e);for(const o in t)s[o]=it(e[o],t[o]);return s}function hm(e,t,s,o=!1){const l={},r={};bl(r,Gl,1),e.propsDefaults=Object.create(null),Wp(e,t,l,r);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);Yp(t||{},l,e),s?e.props=o?l:cF(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function Fm(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function mm(e,t,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=e,i=he(l),[c]=e.propsOptions;let p=!1;if(!Fm(e)&&(o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(Xl(e.emitsOptions,h))continue;const F=t[h];if(c)if(_e(r,h))F!==r[h]&&(r[h]=F,p=!0);else{const m=Zt(h);l[m]=Gr(c,i,m,F,e,!1)}else F!==r[h]&&(r[h]=F,p=!0)}}}else{Wp(e,t,l,r)&&(p=!0);let d;for(const f in i)(!t||!_e(t,f)&&((d=fn(f))===f||!_e(t,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(l[f]=Gr(c,i,f,void 0,e,!0)):delete l[f]);if(r!==i)for(const f in r)(!t||!_e(t,f))&&(delete r[f],p=!0)}p&&hn(e,"set","$attrs"),Yp(t||{},l,e)}function Wp(e,t,s,o){const[l,r]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(ul(c))continue;const p=t[c];let d;l&&_e(l,d=Zt(c))?!r||!r.includes(d)?s[d]=p:(i||(i={}))[d]=p:Xl(e.emitsOptions,c)||(!(c in o)||p!==o[c])&&(o[c]=p,a=!0)}if(r){const c=he(s),p=i||Be;for(let d=0;d<r.length;d++){const f=r[d];s[f]=Gr(l,c,f,p[f],e,!_e(p,f))}}return a}function Gr(e,t,s,o,l,r){const a=e[s];if(a!=null){const i=_e(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&pe(c)){const{propsDefaults:p}=l;s in p?o=p[s]:(Bs(l),o=p[s]=c.call(null,t),os())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===fn(s))&&(o=!0))}return o}function Kp(e,t,s=!1){const o=t.propsCache,l=o.get(e);if(l)return l;const r=e.props,a={},i=[];let c=!1;if(!pe(e)){const d=f=>{c=!0;const[h,F]=Kp(f,t,!0);Ue(a,h),F&&i.push(...F)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return Re(e)&&o.set(e,Es),Es;if(ae(r))for(let d=0;d<r.length;d++){je(r[d])||O("props must be strings when using array syntax.",r[d]);const f=Zt(r[d]);Qi(f)&&(a[f]=Be)}else if(r){Re(r)||O("invalid props options",r);for(const d in r){const f=Zt(d);if(Qi(f)){const h=r[d],F=a[f]=ae(h)||pe(h)?{type:h}:Object.assign({},h);if(F){const m=tc(Boolean,F.type),g=tc(String,F.type);F[0]=m>-1,F[1]=g<0||m<g,(m>-1||_e(F,"default"))&&i.push(f)}}}}const p=[a,i];return Re(e)&&o.set(e,p),p}function Qi(e){return e[0]!=="$"?!0:(O(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Qr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ec(e,t){return Qr(e)===Qr(t)}function tc(e,t){return ae(t)?t.findIndex(s=>ec(s,e)):pe(t)&&ec(t,e)?0:-1}function Yp(e,t,s){const o=he(t),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&ym(r,o[r],a,!_e(e,r)&&!_e(e,fn(r)))}}function ym(e,t,s,o){const{type:l,required:r,validator:a}=s;if(r&&o){O('Missing required prop: "'+e+'"');return}if(!(t==null&&!s.required)){if(l!=null&&l!==!0){let i=!1;const c=ae(l)?l:[l],p=[];for(let d=0;d<c.length&&!i;d++){const{valid:f,expectedType:h}=vm(t,c[d]);p.push(h||""),i=f}if(!i){O(_m(e,t,p));return}}a&&!a(t)&&O('Invalid prop: custom validator check failed for prop "'+e+'".')}}const gm=Bn("String,Number,Boolean,Function,Symbol,BigInt");function vm(e,t){let s;const o=Qr(t);if(gm(o)){const l=typeof e;s=l===o.toLowerCase(),!s&&l==="object"&&(s=e instanceof t)}else o==="Object"?s=Re(e):o==="Array"?s=ae(e):o==="null"?s=e===null:s=e instanceof t;return{valid:s,expectedType:o}}function _m(e,t,s){let o=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(is).join(" | ")}`;const l=s[0],r=ja(t),a=nc(t,l),i=nc(t,r);return s.length===1&&sc(l)&&!km(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,sc(r)&&(o+=`with value ${i}.`),o}function nc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function sc(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function km(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Zp=e=>e[0]==="_"||e==="$stable",si=e=>ae(e)?e.map(jt):[jt(e)],bm=(e,t,s)=>{if(t._n)return t;const o=W((...l)=>(Je&&O(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),si(t(...l))),s);return o._c=!1,o},Gp=(e,t,s)=>{const o=e._ctx;for(const l in e){if(Zp(l))continue;const r=e[l];if(pe(r))t[l]=bm(l,r,o);else if(r!=null){O(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=si(r);t[l]=()=>a}}},Qp=(e,t)=>{Vo(e.vnode)||O("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=si(t);e.slots.default=()=>s},xm=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=he(t),bl(t,"_",s)):Gp(t,e.slots={})}else e.slots={},t&&Qp(e,t);bl(e.slots,Gl,1)},wm=(e,t,s)=>{const{vnode:o,slots:l}=e;let r=!0,a=Be;if(o.shapeFlag&32){const i=t._;i?$n?Ue(l,t):s&&i===1?r=!1:(Ue(l,t),!s&&i===1&&delete l._):(r=!t.$stable,Gp(t,l)),a=t}else t&&(Qp(e,t),a={default:1});if(r)for(const i in l)!Zp(i)&&!(i in a)&&delete l[i]};function ed(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cm=0;function Sm(e,t){return function(o,l=null){pe(o)||(o=Object.assign({},o)),l!=null&&!Re(l)&&(O("root props passed to app.mount() must be an object."),l=null);const r=ed(),a=new Set;let i=!1;const c=r.app={_uid:Cm++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:$l,get config(){return r.config},set config(p){O("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return a.has(p)?O("Plugin has already been applied to target app."):p&&pe(p.install)?(a.add(p),p.install(c,...d)):pe(p)?(a.add(p),p(c,...d)):O('A plugin must either be a function or an object with an "install" function.'),c},mixin(p){return r.mixins.includes(p)?O("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):r.mixins.push(p),c},component(p,d){return na(p,r.config),d?(r.components[p]&&O(`Component "${p}" has already been registered in target app.`),r.components[p]=d,c):r.components[p]},directive(p,d){return Up(p),d?(r.directives[p]&&O(`Directive "${p}" has already been registered in target app.`),r.directives[p]=d,c):r.directives[p]},mount(p,d,f){if(i)O("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&O("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=j(o,l);return h.appContext=r,r.reload=()=>{e(Vt(h),p,f)},d&&t?t(h,p):e(h,p,f),i=!0,c._container=p,p.__vue_app__=c,c._instance=h.component,RF(c,$l),Ql(h.component)||h.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,TF(c),delete c._container.__vue_app__):O("Cannot unmount an app that is not mounted.")},provide(p,d){return p in r.provides&&O(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),r.provides[p]=d,c}};return c}}function ea(e,t,s,o,l=!1){if(ae(e)){e.forEach((h,F)=>ea(h,t&&(ae(t)?t[F]:t),s,o,l));return}if($s(o)&&!l)return;const r=o.shapeFlag&4?Ql(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=e;if(!i){O("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,d=i.refs===Be?i.refs={}:i.refs,f=i.setupState;if(p!=null&&p!==c&&(je(p)?(d[p]=null,_e(f,p)&&(f[p]=null)):$e(p)&&(p.value=null)),pe(c))pn(c,i,12,[a,d]);else{const h=je(c),F=$e(c);if(h||F){const m=()=>{if(e.f){const g=h?_e(f,c)?f[c]:d[c]:c.value;l?ae(g)&&Ba(g,r):ae(g)?g.includes(r)||g.push(r):h?(d[c]=[r],_e(f,c)&&(f[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else h?(d[c]=a,_e(f,c)&&(f[c]=a)):F?(c.value=a,e.k&&(d[e.k]=a)):O("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,tt(m,s)):m()}else O("Invalid template ref type:",c,`(${typeof c})`)}}let Us,Cn;function on(e,t){e.appContext.config.performance&&Al()&&Cn.mark(`vue-${t}-${e.uid}`),OF(e,t,Al()?Cn.now():Date.now())}function ln(e,t){if(e.appContext.config.performance&&Al()){const s=`vue-${t}-${e.uid}`,o=s+":end";Cn.mark(o),Cn.measure(`<${er(e,e.type)}> ${t}`,s,o),Cn.clearMarks(s),Cn.clearMarks(o)}PF(e,t,Al()?Cn.now():Date.now())}function Al(){return Us!==void 0||(typeof window<"u"&&window.performance?(Us=!0,Cn=window.performance):Us=!1),Us}function Em(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const tt=qF;function Am(e){return $m(e)}function $m(e,t){Em();const s=op();s.__VUE__=!0,Rp(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:p,setElementText:d,parentNode:f,nextSibling:h,setScopeId:F=mt,insertStaticContent:m}=e,g=(y,_,S,H=null,I=null,M=null,J=!1,B=null,N=$n?!1:!!_.dynamicChildren)=>{if(y===_)return;y&&!Sn(y,_)&&(H=Q(y),ht(y,I,M,!0),y=null),_.patchFlag===-2&&(N=!1,_.dynamicChildren=null);const{type:L,ref:ne,shapeFlag:ee}=_;switch(L){case qo:v(y,_,S,H);break;case et:w(y,_,S,H);break;case fl:y==null?k(_,S,H,J):b(y,_,S,J);break;case Ae:ce(y,_,S,H,I,M,J,B,N);break;default:ee&1?P(y,_,S,H,I,M,J,B,N):ee&6?Ie(y,_,S,H,I,M,J,B,N):ee&64||ee&128?L.process(y,_,S,H,I,M,J,B,N,xe):O("Invalid VNode type:",L,`(${typeof L})`)}ne!=null&&I&&ea(ne,y&&y.ref,M,_||y,!_)},v=(y,_,S,H)=>{if(y==null)o(_.el=i(_.children),S,H);else{const I=_.el=y.el;_.children!==y.children&&p(I,_.children)}},w=(y,_,S,H)=>{y==null?o(_.el=c(_.children||""),S,H):_.el=y.el},k=(y,_,S,H)=>{[y.el,y.anchor]=m(y.children,_,S,H,y.el,y.anchor)},b=(y,_,S,H)=>{if(_.children!==y.children){const I=h(y.anchor);T(y),[_.el,_.anchor]=m(_.children,S,I,H)}else _.el=y.el,_.anchor=y.anchor},C=({el:y,anchor:_},S,H)=>{let I;for(;y&&y!==_;)I=h(y),o(y,S,H),y=I;o(_,S,H)},T=({el:y,anchor:_})=>{let S;for(;y&&y!==_;)S=h(y),l(y),y=S;l(_)},P=(y,_,S,H,I,M,J,B,N)=>{J=J||_.type==="svg",y==null?V(_,S,H,I,M,J,B,N):G(y,_,I,M,J,B,N)},V=(y,_,S,H,I,M,J,B)=>{let N,L;const{type:ne,props:ee,shapeFlag:le,transition:fe,dirs:be}=y;if(N=y.el=a(y.type,M,ee&&ee.is,ee),le&8?d(N,y.children):le&16&&D(y.children,N,null,H,I,M&&ne!=="foreignObject",J,B),be&&Mn(y,null,H,"created"),$(N,y,y.scopeId,J,H),ee){for(const Le in ee)Le!=="value"&&!ul(Le)&&r(N,Le,null,ee[Le],M,y.children,H,I,U);"value"in ee&&r(N,"value",null,ee.value),(L=ee.onVnodeBeforeMount)&&Tt(L,H,y)}Object.defineProperty(N,"__vnode",{value:y,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:H,enumerable:!1}),be&&Mn(y,null,H,"beforeMount");const De=(!I||I&&!I.pendingBranch)&&fe&&!fe.persisted;De&&fe.beforeEnter(N),o(N,_,S),((L=ee&&ee.onVnodeMounted)||De||be)&&tt(()=>{L&&Tt(L,H,y),De&&fe.enter(N),be&&Mn(y,null,H,"mounted")},I)},$=(y,_,S,H,I)=>{if(S&&F(y,S),H)for(let M=0;M<H.length;M++)F(y,H[M]);if(I){let M=I.subTree;if(M.patchFlag>0&&M.patchFlag&2048&&(M=Op(M.children)||M),_===M){const J=I.vnode;$(y,J,J.scopeId,J.slotScopeIds,I.parent)}}},D=(y,_,S,H,I,M,J,B,N=0)=>{for(let L=N;L<y.length;L++){const ne=y[L]=B?bn(y[L]):jt(y[L]);g(null,ne,_,S,H,I,M,J,B)}},G=(y,_,S,H,I,M,J)=>{const B=_.el=y.el;let{patchFlag:N,dynamicChildren:L,dirs:ne}=_;N|=y.patchFlag&16;const ee=y.props||Be,le=_.props||Be;let fe;S&&Dn(S,!1),(fe=le.onVnodeBeforeUpdate)&&Tt(fe,S,_,y),ne&&Mn(_,y,S,"beforeUpdate"),S&&Dn(S,!0),$n&&(N=0,J=!1,L=null);const be=I&&_.type!=="foreignObject";if(L?(ie(y.dynamicChildren,L,B,S,H,be,M),S&&S.type.__hmrId&&ao(y,_)):J||ge(y,_,B,null,S,H,be,M,!1),N>0){if(N&16)X(B,_,ee,le,S,H,I);else if(N&2&&ee.class!==le.class&&r(B,"class",null,le.class,I),N&4&&r(B,"style",ee.style,le.style,I),N&8){const De=_.dynamicProps;for(let Le=0;Le<De.length;Le++){const Xe=De[Le],Bt=ee[Xe],ms=le[Xe];(ms!==Bt||Xe==="value")&&r(B,Xe,Bt,ms,I,y.children,S,H,U)}}N&1&&y.children!==_.children&&d(B,_.children)}else!J&&L==null&&X(B,_,ee,le,S,H,I);((fe=le.onVnodeUpdated)||ne)&&tt(()=>{fe&&Tt(fe,S,_,y),ne&&Mn(_,y,S,"updated")},H)},ie=(y,_,S,H,I,M,J)=>{for(let B=0;B<_.length;B++){const N=y[B],L=_[B],ne=N.el&&(N.type===Ae||!Sn(N,L)||N.shapeFlag&70)?f(N.el):S;g(N,L,ne,null,H,I,M,J,!0)}},X=(y,_,S,H,I,M,J)=>{if(S!==H){if(S!==Be)for(const B in S)!ul(B)&&!(B in H)&&r(y,B,S[B],null,J,_.children,I,M,U);for(const B in H){if(ul(B))continue;const N=H[B],L=S[B];N!==L&&B!=="value"&&r(y,B,L,N,J,_.children,I,M,U)}"value"in H&&r(y,"value",S.value,H.value)}},ce=(y,_,S,H,I,M,J,B,N)=>{const L=_.el=y?y.el:i(""),ne=_.anchor=y?y.anchor:i("");let{patchFlag:ee,dynamicChildren:le,slotScopeIds:fe}=_;($n||ee&2048)&&(ee=0,N=!1,le=null),fe&&(B=B?B.concat(fe):fe),y==null?(o(L,S,H),o(ne,S,H),D(_.children,S,ne,I,M,J,B,N)):ee>0&&ee&64&&le&&y.dynamicChildren?(ie(y.dynamicChildren,le,S,I,M,J,B),I&&I.type.__hmrId?ao(y,_):(_.key!=null||I&&_===I.subTree)&&ao(y,_,!0)):ge(y,_,S,ne,I,M,J,B,N)},Ie=(y,_,S,H,I,M,J,B,N)=>{_.slotScopeIds=B,y==null?_.shapeFlag&512?I.ctx.activate(_,S,H,J,N):ze(_,S,H,I,M,J,N):Me(y,_,N)},ze=(y,_,S,H,I,M,J)=>{const B=y.component=jm(y,H,I);if(B.type.__hmrId&&SF(B),pl(y),on(B,"mount"),Vo(y)&&(B.ctx.renderer=xe),on(B,"init"),Vm(B),ln(B,"init"),B.asyncDep){if(I&&I.registerDep(B,Y),!y.el){const N=B.subTree=j(et);w(null,N,_,S)}return}Y(B,y,_,S,I,M,J),dl(),ln(B,"mount")},Me=(y,_,S)=>{const H=_.component=y.component;if(UF(y,_,S))if(H.asyncDep&&!H.asyncResolved){pl(_),re(H,_,S),dl();return}else H.next=_,wF(H.update),H.update();else _.el=y.el,H.vnode=_},Y=(y,_,S,H,I,M,J)=>{const B=()=>{if(y.isMounted){let{next:ne,bu:ee,u:le,parent:fe,vnode:be}=y,De=ne,Le;pl(ne||y.vnode),Dn(y,!1),ne?(ne.el=be.el,re(y,ne,J)):ne=be,ee&&wn(ee),(Le=ne.props&&ne.props.onVnodeBeforeUpdate)&&Tt(Le,fe,ne,be),Dn(y,!0),on(y,"render");const Xe=ar(y);ln(y,"render");const Bt=y.subTree;y.subTree=Xe,on(y,"patch"),g(Bt,Xe,f(Bt.el),Q(Bt),y,I,M),ln(y,"patch"),ne.el=Xe.el,De===null&&JF(y,Xe.el),le&&tt(le,I),(Le=ne.props&&ne.props.onVnodeUpdated)&&tt(()=>Tt(Le,fe,ne,be),I),Tp(y),dl()}else{let ne;const{el:ee,props:le}=_,{bm:fe,m:be,parent:De}=y,Le=$s(_);if(Dn(y,!1),fe&&wn(fe),!Le&&(ne=le&&le.onVnodeBeforeMount)&&Tt(ne,De,_),Dn(y,!0),ee&&ue){const Xe=()=>{on(y,"render"),y.subTree=ar(y),ln(y,"render"),on(y,"hydrate"),ue(ee,y.subTree,y,I,null),ln(y,"hydrate")};Le?_.type.__asyncLoader().then(()=>!y.isUnmounted&&Xe()):Xe()}else{on(y,"render");const Xe=y.subTree=ar(y);ln(y,"render"),on(y,"patch"),g(null,Xe,S,H,y,I,M),ln(y,"patch"),_.el=Xe.el}if(be&&tt(be,I),!Le&&(ne=le&&le.onVnodeMounted)){const Xe=_;tt(()=>Tt(ne,De,Xe),I)}(_.shapeFlag&256||De&&$s(De.vnode)&&De.vnode.shapeFlag&256)&&y.a&&tt(y.a,I),y.isMounted=!0,zr(y),_=S=H=null}},N=y.effect=new Ja(B,()=>zl(L),y.scope),L=y.update=()=>N.run();L.id=y.uid,Dn(y,!0),N.onTrack=y.rtc?ne=>wn(y.rtc,ne):void 0,N.onTrigger=y.rtg?ne=>wn(y.rtg,ne):void 0,L.ownerInstance=y,L()},re=(y,_,S)=>{_.component=y;const H=y.vnode.props;y.vnode=_,y.next=null,mm(y,_.props,H,S),wm(y,_.children,S),us(),qi(),ps()},ge=(y,_,S,H,I,M,J,B,N=!1)=>{const L=y&&y.children,ne=y?y.shapeFlag:0,ee=_.children,{patchFlag:le,shapeFlag:fe}=_;if(le>0){if(le&128){_t(L,ee,S,H,I,M,J,B,N);return}else if(le&256){Pe(L,ee,S,H,I,M,J,B,N);return}}fe&8?(ne&16&&U(L,I,M),ee!==L&&d(S,ee)):ne&16?fe&16?_t(L,ee,S,H,I,M,J,B,N):U(L,I,M,!0):(ne&8&&d(S,""),fe&16&&D(ee,S,H,I,M,J,B,N))},Pe=(y,_,S,H,I,M,J,B,N)=>{y=y||Es,_=_||Es;const L=y.length,ne=_.length,ee=Math.min(L,ne);let le;for(le=0;le<ee;le++){const fe=_[le]=N?bn(_[le]):jt(_[le]);g(y[le],fe,S,null,I,M,J,B,N)}L>ne?U(y,I,M,!0,!1,ee):D(_,S,H,I,M,J,B,N,ee)},_t=(y,_,S,H,I,M,J,B,N)=>{let L=0;const ne=_.length;let ee=y.length-1,le=ne-1;for(;L<=ee&&L<=le;){const fe=y[L],be=_[L]=N?bn(_[L]):jt(_[L]);if(Sn(fe,be))g(fe,be,S,null,I,M,J,B,N);else break;L++}for(;L<=ee&&L<=le;){const fe=y[ee],be=_[le]=N?bn(_[le]):jt(_[le]);if(Sn(fe,be))g(fe,be,S,null,I,M,J,B,N);else break;ee--,le--}if(L>ee){if(L<=le){const fe=le+1,be=fe<ne?_[fe].el:H;for(;L<=le;)g(null,_[L]=N?bn(_[L]):jt(_[L]),S,be,I,M,J,B,N),L++}}else if(L>le)for(;L<=ee;)ht(y[L],I,M,!0),L++;else{const fe=L,be=L,De=new Map;for(L=be;L<=le;L++){const at=_[L]=N?bn(_[L]):jt(_[L]);at.key!=null&&(De.has(at.key)&&O("Duplicate keys found during update:",JSON.stringify(at.key),"Make sure keys are unique."),De.set(at.key,L))}let Le,Xe=0;const Bt=le-be+1;let ms=!1,Oi=0;const Vs=new Array(Bt);for(L=0;L<Bt;L++)Vs[L]=0;for(L=fe;L<=ee;L++){const at=y[L];if(Xe>=Bt){ht(at,I,M,!0);continue}let qt;if(at.key!=null)qt=De.get(at.key);else for(Le=be;Le<=le;Le++)if(Vs[Le-be]===0&&Sn(at,_[Le])){qt=Le;break}qt===void 0?ht(at,I,M,!0):(Vs[qt-be]=L+1,qt>=Oi?Oi=qt:ms=!0,g(at,_[qt],S,null,I,M,J,B,N),Xe++)}const Pi=ms?Rm(Vs):Es;for(Le=Pi.length-1,L=Bt-1;L>=0;L--){const at=be+L,qt=_[at],Li=at+1<ne?_[at+1].el:H;Vs[L]===0?g(null,qt,S,Li,I,M,J,B,N):ms&&(Le<0||L!==Pi[Le]?ot(qt,S,Li,2):Le--)}}},ot=(y,_,S,H,I=null)=>{const{el:M,type:J,transition:B,children:N,shapeFlag:L}=y;if(L&6){ot(y.component.subTree,_,S,H);return}if(L&128){y.suspense.move(_,S,H);return}if(L&64){J.move(y,_,S,xe);return}if(J===Ae){o(M,_,S);for(let ee=0;ee<N.length;ee++)ot(N[ee],_,S,H);o(y.anchor,_,S);return}if(J===fl){C(y,_,S);return}if(H!==2&&L&1&&B)if(H===0)B.beforeEnter(M),o(M,_,S),tt(()=>B.enter(M),I);else{const{leave:ee,delayLeave:le,afterLeave:fe}=B,be=()=>o(M,_,S),De=()=>{ee(M,()=>{be(),fe&&fe()})};le?le(M,be,De):De()}else o(M,_,S)},ht=(y,_,S,H=!1,I=!1)=>{const{type:M,props:J,ref:B,children:N,dynamicChildren:L,shapeFlag:ne,patchFlag:ee,dirs:le}=y;if(B!=null&&ea(B,null,S,y,!0),ne&256){_.ctx.deactivate(y);return}const fe=ne&1&&le,be=!$s(y);let De;if(be&&(De=J&&J.onVnodeBeforeUnmount)&&Tt(De,_,y),ne&6)Z(y.component,S,H);else{if(ne&128){y.suspense.unmount(S,H);return}fe&&Mn(y,null,_,"beforeUnmount"),ne&64?y.type.remove(y,_,S,I,xe,H):L&&(M!==Ae||ee>0&&ee&64)?U(L,_,S,!1,!0):(M===Ae&&ee&384||!I&&ne&16)&&U(N,_,S),H&&mn(y)}(be&&(De=J&&J.onVnodeUnmounted)||fe)&&tt(()=>{De&&Tt(De,_,y),fe&&Mn(y,null,_,"unmounted")},S)},mn=y=>{const{type:_,el:S,anchor:H,transition:I}=y;if(_===Ae){y.patchFlag>0&&y.patchFlag&2048&&I&&!I.persisted?y.children.forEach(J=>{J.type===et?l(J.el):mn(J)}):A(S,H);return}if(_===fl){T(y);return}const M=()=>{l(S),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(y.shapeFlag&1&&I&&!I.persisted){const{leave:J,delayLeave:B}=I,N=()=>J(S,M);B?B(y.el,M,N):N()}else M()},A=(y,_)=>{let S;for(;y!==_;)S=h(y),l(y),y=S;l(_)},Z=(y,_,S)=>{y.type.__hmrId&&EF(y);const{bum:H,scope:I,update:M,subTree:J,um:B}=y;H&&wn(H),I.stop(),M&&(M.active=!1,ht(J,y,_,S)),B&&tt(B,_),tt(()=>{y.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),HF(y)},U=(y,_,S,H=!1,I=!1,M=0)=>{for(let J=M;J<y.length;J++)ht(y[J],_,S,H,I)},Q=y=>y.shapeFlag&6?Q(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),ve=(y,_,S)=>{y==null?_._vnode&&ht(_._vnode,null,null,!0):g(_._vnode||null,y,_,null,null,null,S),qi(),Ep(),_._vnode=y},xe={p:g,um:ht,m:ot,r:mn,mt:ze,mc:D,pc:ge,pbc:ie,n:Q,o:e};let de,ue;return t&&([de,ue]=t(xe)),{render:ve,hydrate:de,createApp:Sm(ve,de)}}function Dn({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function ao(e,t,s=!1){const o=e.children,l=t.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=bn(l[r]),i.el=a.el),s||ao(a,i)),i.type===qo&&(i.el=a.el),i.type===et&&!i.el&&(i.el=a.el)}}function Rm(e){const t=e.slice(),s=[0];let o,l,r,a,i;const c=e.length;for(o=0;o<c;o++){const p=e[o];if(p!==0){if(l=s[s.length-1],e[l]<p){t[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,e[s[i]]<p?r=i+1:a=i;p<e[s[r]]&&(r>0&&(t[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=t[a];return s}const Tm=e=>e.__isTeleport,Rs=e=>e&&(e.disabled||e.disabled===""),oc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ta=(e,t)=>{const s=e&&e.to;if(je(s))if(t){const o=t(s);return o||O(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return O("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Rs(e)&&O(`Invalid Teleport target: ${s}`),s},Im={__isTeleport:!0,process(e,t,s,o,l,r,a,i,c,p){const{mc:d,pc:f,pbc:h,o:{insert:F,querySelector:m,createText:g,createComment:v}}=p,w=Rs(t.props);let{shapeFlag:k,children:b,dynamicChildren:C}=t;if($n&&(c=!1,C=null),e==null){const T=t.el=v("teleport start"),P=t.anchor=v("teleport end");F(T,s,o),F(P,s,o);const V=t.target=ta(t.props,m),$=t.targetAnchor=g("");V?(F($,V),a=a||oc(V)):w||O("Invalid Teleport target on mount:",V,`(${typeof V})`);const D=(G,ie)=>{k&16&&d(b,G,ie,l,r,a,i,c)};w?D(s,P):V&&D(V,$)}else{t.el=e.el;const T=t.anchor=e.anchor,P=t.target=e.target,V=t.targetAnchor=e.targetAnchor,$=Rs(e.props),D=$?s:P,G=$?T:V;if(a=a||oc(P),C?(h(e.dynamicChildren,C,D,l,r,a,i),ao(e,t,!0)):c||f(e,t,D,G,l,r,a,i,!1),w)$||sl(t,s,T,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ie=t.target=ta(t.props,m);ie?sl(t,ie,null,p,0):O("Invalid Teleport target on update:",P,`(${typeof P})`)}else $&&sl(t,P,V,p,1)}td(t)},remove(e,t,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:p,targetAnchor:d,target:f,props:h}=e;if(f&&r(d),(a||!Rs(h))&&(r(p),i&16))for(let F=0;F<c.length;F++){const m=c[F];l(m,t,s,!0,!!m.dynamicChildren)}},move:sl,hydrate:Hm};function sl(e,t,s,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,t,s);const{el:a,anchor:i,shapeFlag:c,children:p,props:d}=e,f=r===2;if(f&&o(a,t,s),(!f||Rs(d))&&c&16)for(let h=0;h<p.length;h++)l(p[h],t,s,2);f&&o(i,t,s)}function Hm(e,t,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},p){const d=t.target=ta(t.props,c);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Rs(t.props))t.anchor=p(a(e),t,i(e),s,o,l,r),t.targetAnchor=f;else{t.anchor=a(e);let h=f;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}p(f,t,d,s,o,l,r)}td(t)}return t.anchor&&a(t.anchor)}const Om=Im;function td(e){const t=e.ctx;if(t&&t.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const Ae=Symbol("Fragment"),qo=Symbol("Text"),et=Symbol("Comment"),fl=Symbol("Static"),io=[];let Nt=null;function E(e=!1){io.push(Nt=e?null:[])}function Pm(){io.pop(),Nt=io[io.length-1]||null}let Co=1;function lc(e){Co+=e}function nd(e){return e.dynamicChildren=Co>0?Nt||Es:null,Pm(),Co>0&&Nt&&Nt.push(e),e}function q(e,t,s,o,l,r){return nd(n(e,t,s,o,l,r,!0))}function te(e,t,s,o,l){return nd(j(e,t,s,o,l,!0))}function Qt(e){return e?e.__v_isVNode===!0:!1}function Sn(e,t){return t.shapeFlag&6&&ks.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Lm=(...e)=>Bm(...e),Gl="__vInternal",sd=({key:e})=>e??null,hl=({ref:e,ref_key:t,ref_for:s})=>e!=null?je(e)||$e(e)||pe(e)?{i:Ze,r:e,k:t,f:!!s}:e:null;function n(e,t=null,s=null,o=0,l=null,r=e===Ae?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sd(t),ref:t&&hl(t),scopeId:Wl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ze};return i?(oi(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=je(s)?8:16),c.key!==c.key&&O("VNode created with invalid key (NaN). VNode type:",c.type),Co>0&&!a&&Nt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Nt.push(c),c}const j=Lm;function Bm(e,t=null,s=null,o=0,l=null,r=!1){if((!e||e===om)&&(e||O(`Invalid vnode type when creating vnode: ${e}.`),e=et),Qt(e)){const i=Vt(e,t,!0);return s&&oi(i,s),Co>0&&!r&&Nt&&(i.shapeFlag&6?Nt[Nt.indexOf(e)]=i:Nt.push(i)),i.patchFlag|=-2,i}if(id(e)&&(e=e.__vccOpts),t){t=Te(t);let{class:i,style:c}=t;i&&!je(i)&&(t.class=He(i)),Re(c)&&(Ur(c)&&!ae(c)&&(c=Ue({},c)),t.style=dt(c))}const a=je(e)?1:Pp(e)?128:Tm(e)?64:Re(e)?4:pe(e)?2:0;return a&4&&Ur(e)&&(e=he(e),O("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),n(e,t,s,o,l,a,r,!0)}function Te(e){return e?Ur(e)||Gl in e?Ue({},e):e:null}function Vt(e,t,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=e,i=t?Ke(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&sd(i),ref:t&&t.ref?s&&l?ae(l)?l.concat(hl(t)):[l,hl(t)]:hl(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&ae(a)?a.map(od):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function od(e){const t=Vt(e);return ae(e.children)&&(t.children=e.children.map(od)),t}function u(e=" ",t=0){return j(qo,null,e,t)}function ye(e="",t=!1){return t?(E(),te(et,null,e)):j(et,null,e)}function jt(e){return e==null||typeof e=="boolean"?j(et):ae(e)?j(Ae,null,e.slice()):typeof e=="object"?bn(e):j(qo,null,String(e))}function bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function oi(e,t){let s=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ae(t))s=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),oi(e,l()),l._c&&(l._d=!0));return}else{s=32;const l=t._;!l&&!(Gl in t)?t._ctx=Ze:l===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:Ze},s=32):(t=String(t),o&64?(s=16,t=[u(t)]):s=8);e.children=t,e.shapeFlag|=s}function Ke(...e){const t={};for(let s=0;s<e.length;s++){const o=e[s];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=He([t.class,o.class]));else if(l==="style")t.style=dt([t.style,o.style]);else if(Do(l)){const r=t[l],a=o[l];a&&r!==a&&!(ae(r)&&r.includes(a))&&(t[l]=r?[].concat(r,a):a)}else l!==""&&(t[l]=o[l])}return t}function Tt(e,t,s,o=null){Ot(e,t,7,[s,o])}const Mm=ed();let Dm=0;function jm(e,t,s){const o=e.type,l=(t?t.appContext:e.appContext)||Mm,r={uid:Dm++,vnode:e,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kp(o,l),emitsOptions:Hp(o,l),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:o.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=lm(r),r.root=t?t.root:r,r.emit=BF.bind(null,r),e.ce&&e.ce(r),r}let Je=null;const $t=()=>Je||Ze,Bs=e=>{Je=e,e.scope.on()},os=()=>{Je&&Je.scope.off(),Je=null},Nm=Bn("slot,component");function na(e,t){const s=t.isNativeTag||ep;(Nm(e)||s(e))&&O("Do not use built-in or reserved HTML elements as component id: "+e)}function ld(e){return e.vnode.shapeFlag&4}let So=!1;function Vm(e,t=!1){So=t;const{props:s,children:o}=e.vnode,l=ld(e);hm(e,s,l,t),xm(e,o);const r=l?Um(e,t):void 0;return So=!1,r}function Um(e,t){var s;const o=e.type;{if(o.name&&na(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)na(r[a],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)Up(r[a])}o.compilerOptions&&Jm()&&O('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Jl(new Proxy(e.ctx,zp)),rm(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?ad(e):null;Bs(e),us();const a=pn(l,e,0,[ws(e.props),r]);if(ps(),os(),Da(a)){if(a.then(os,os),t)return a.then(i=>{rc(e,i,t)}).catch(i=>{ql(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(s=o.name)!==null&&s!==void 0?s:"Anonymous";O(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else rc(e,a,t)}else rd(e,t)}function rc(e,t,s){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Re(t)?(Qt(t)&&O("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=kp(t),am(e)):t!==void 0&&O(`setup() should return an object. Received: ${t===null?"null":typeof t}`),rd(e,s)}let sa;const Jm=()=>!sa;function rd(e,t,s){const o=e.type;if(!e.render){if(!t&&sa&&!o.render){const l=o.template||ni(e).template;if(l){on(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,p=Ue(Ue({isCustomElement:r,delimiters:i},a),c);o.render=sa(l,p),ln(e,"compile")}}e.render=o.render||mt}Bs(e),us(),cm(e),ps(),os(),!o.render&&e.render===mt&&!t&&(o.template?O('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):O("Component is missing template or render function."))}function qm(e){return new Proxy(e.attrs,{get(t,s){return Sl(),gt(e,"get","$attrs"),t[s]},set(){return O("setupContext.attrs is readonly."),!1},deleteProperty(){return O("setupContext.attrs is readonly."),!1}})}function ad(e){const t=o=>{if(e.exposed&&O("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(ae(o)?l="array":$e(o)&&(l="ref")),l!=="object"&&O(`expose() should be passed a plain object, received ${l}.`)}e.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=qm(e))},get slots(){return ws(e.slots)},get emit(){return(o,...l)=>e.emit(o,...l)},expose:t})}function Ql(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(kp(Jl(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in ss)return ss[s](e)},has(t,s){return s in t||s in ss}}))}const zm=/(?:^|[-_])(\w)/g,Xm=e=>e.replace(zm,t=>t.toUpperCase()).replace(/[-_]/g,"");function Eo(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function er(e,t,s=!1){let o=Eo(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const a in r)if(r[a]===t)return a};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?Xm(o):s?"App":"Anonymous"}function id(e){return pe(e)&&"__vccOpts"in e}const R=(e,t)=>FF(e,t,So);function Wm(){return Km().slots}function Km(){const e=$t();return e||O("useContext() called without active instance."),e.setupContext||(e.setupContext=ad(e))}function Ge(e,t,s){const o=arguments.length;return o===2?Re(t)&&!ae(t)?Qt(t)?j(e,null,[t]):j(e,t):j(e,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&Qt(s)&&(s=[s]),j(e,t,s))}const Ym=Symbol("ssrContext"),Zm=()=>{{const e=K(Ym);return e||O("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function dr(e){return!!(e&&e.__v_isShallow)}function Gm(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return Re(f)?f.__isVue?["div",e,"VueInstance"]:$e(f)?["div",{},["span",e,d(f)],"<",i(f.value),">"]:ts(f)?["div",{},["span",e,dr(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Pn(f)?" (readonly)":""}`]:Pn(f)?["div",{},["span",e,dr(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const h=[];f.type.props&&f.props&&h.push(a("props",he(f.props))),f.setupState!==Be&&h.push(a("setup",f.setupState)),f.data!==Be&&h.push(a("data",he(f.data)));const F=c(f,"computed");F&&h.push(a("computed",F));const m=c(f,"inject");return m&&h.push(a("injected",m)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function a(f,h){return h=Ue({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(F=>["div",{},["span",o,F+": "],i(h[F],!1)])]]:["span",{}]}function i(f,h=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Re(f)?["object",{object:h?he(f):f}]:["span",s,String(f)]}function c(f,h){const F=f.type;if(pe(F))return;const m={};for(const g in f.ctx)p(F,g,h)&&(m[g]=f.ctx[g]);return m}function p(f,h,F){const m=f[F];if(ae(m)&&m.includes(h)||Re(m)&&h in m||f.extends&&p(f.extends,h,F)||f.mixins&&f.mixins.some(g=>p(g,h,F)))return!0}function d(f){return dr(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const $l="3.2.47",Qm="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,ac=Xn&&Xn.createElement("template"),ey={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,o)=>{const l=t?Xn.createElementNS(Qm,e):Xn.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,o,l,r){const a=s?s.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{ac.innerHTML=o?`<svg>${e}</svg>`:e;const i=ac.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,s)}return[a?a.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function ty(e,t,s){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function ny(e,t,s){const o=e.style,l=je(s);if(s&&!l){if(t&&!je(t))for(const r in t)s[r]==null&&oa(o,r,"");for(const r in s)oa(o,r,s[r])}else{const r=o.display;l?t!==s&&(o.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const sy=/[^\\];\s*$/,ic=/\s*!important$/;function oa(e,t,s){if(ae(s))s.forEach(o=>oa(e,t,o));else if(s==null&&(s=""),sy.test(s)&&O(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))e.setProperty(t,s);else{const o=oy(e,t);ic.test(s)?e.setProperty(fn(o),s.replace(ic,""),"important"):e[o]=s}}const cc=["Webkit","Moz","ms"],fr={};function oy(e,t){const s=fr[t];if(s)return s;let o=Zt(t);if(o!=="filter"&&o in e)return fr[t]=o;o=is(o);for(let l=0;l<cc.length;l++){const r=cc[l]+o;if(r in e)return fr[t]=r}return t}const uc="http://www.w3.org/1999/xlink";function ly(e,t,s,o,l){if(o&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(uc,t.slice(6,t.length)):e.setAttributeNS(uc,t,s);else{const r=Sh(t);s==null||r&&!Gu(s)?e.removeAttribute(t):e.setAttribute(t,r?"":s)}}function ry(e,t,s,o,l,r,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,l,r),e[t]=s??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(t);return}let i=!1;if(s===""||s==null){const c=typeof e[t];c==="boolean"?s=Gu(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[t]=s}catch(c){i||O(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${s} is invalid.`,c)}i&&e.removeAttribute(t)}function bs(e,t,s,o){e.addEventListener(t,s,o)}function ay(e,t,s,o){e.removeEventListener(t,s,o)}function iy(e,t,s,o,l=null){const r=e._vei||(e._vei={}),a=r[t];if(o&&a)a.value=o;else{const[i,c]=cy(t);if(o){const p=r[t]=dy(o,l);bs(e,i,p,c)}else a&&(ay(e,i,a,c),r[t]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function cy(e){let t;if(pc.test(e)){t={};let o;for(;o=e.match(pc);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),t]}let hr=0;const uy=Promise.resolve(),py=()=>hr||(uy.then(()=>hr=0),hr=Date.now());function dy(e,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Ot(fy(o,s.value),t,5,[o])};return s.value=e,s.attached=py(),s}function fy(e,t){if(ae(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const dc=/^on[a-z]/,hy=(e,t,s,o,l=!1,r,a,i,c)=>{t==="class"?ty(e,o,l):t==="style"?ny(e,s,o):Do(t)?kl(t)||iy(e,t,s,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fy(e,t,o,l))?ry(e,t,o,r,a,i,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),ly(e,t,o,l))};function Fy(e,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&dc.test(t)&&pe(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||dc.test(t)&&je(s)?!1:t in e}const gn="transition",Js="animation",cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},my=Ue({},WF.props,cd),jn=(e,t=[])=>{ae(e)?e.forEach(s=>s(...t)):e&&e(...t)},fc=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function yy(e){const t={};for(const X in e)X in cd||(t[X]=e[X]);if(e.css===!1)return t;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:p=a,appearToClass:d=i,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:F=`${s}-leave-to`}=e,m=gy(l),g=m&&m[0],v=m&&m[1],{onBeforeEnter:w,onEnter:k,onEnterCancelled:b,onLeave:C,onLeaveCancelled:T,onBeforeAppear:P=w,onAppear:V=k,onAppearCancelled:$=b}=t,D=(X,ce,Ie)=>{_n(X,ce?d:i),_n(X,ce?p:a),Ie&&Ie()},G=(X,ce)=>{X._isLeaving=!1,_n(X,f),_n(X,F),_n(X,h),ce&&ce()},ie=X=>(ce,Ie)=>{const ze=X?V:k,Me=()=>D(ce,X,Ie);jn(ze,[ce,Me]),hc(()=>{_n(ce,X?c:r),rn(ce,X?d:i),fc(ze)||Fc(ce,o,g,Me)})};return Ue(t,{onBeforeEnter(X){jn(w,[X]),rn(X,r),rn(X,a)},onBeforeAppear(X){jn(P,[X]),rn(X,c),rn(X,p)},onEnter:ie(!1),onAppear:ie(!0),onLeave(X,ce){X._isLeaving=!0;const Ie=()=>G(X,ce);rn(X,f),pd(),rn(X,h),hc(()=>{X._isLeaving&&(_n(X,f),rn(X,F),fc(C)||Fc(X,o,v,Ie))}),jn(C,[X,Ie])},onEnterCancelled(X){D(X,!1),jn(b,[X])},onAppearCancelled(X){D(X,!0),jn($,[X])},onLeaveCancelled(X){G(X),jn(T,[X])}})}function gy(e){if(e==null)return null;if(Re(e))return[Fr(e.enter),Fr(e.leave)];{const t=Fr(e);return[t,t]}}function Fr(e){const t=Hh(e);return _F(t,"<transition> explicit duration"),t}function rn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(t)}function _n(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:s}=e;s&&(s.delete(t),s.size||(e._vtc=void 0))}function hc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let vy=0;function Fc(e,t,s,o){const l=e._endId=++vy,r=()=>{l===e._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=ud(e,t);if(!a)return o();const p=a+"end";let d=0;const f=()=>{e.removeEventListener(p,h),r()},h=F=>{F.target===e&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},i+1),e.addEventListener(p,h)}function ud(e,t){const s=window.getComputedStyle(e),o=m=>(s[m]||"").split(", "),l=o(`${gn}Delay`),r=o(`${gn}Duration`),a=mc(l,r),i=o(`${Js}Delay`),c=o(`${Js}Duration`),p=mc(i,c);let d=null,f=0,h=0;t===gn?a>0&&(d=gn,f=a,h=r.length):t===Js?p>0&&(d=Js,f=p,h=c.length):(f=Math.max(a,p),d=f>0?a>p?gn:Js:null,h=d?d===gn?r.length:c.length:0);const F=d===gn&&/\b(transform|all)(,|$)/.test(o(`${gn}Property`).toString());return{type:d,timeout:f,propCount:h,hasTransform:F}}function mc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,o)=>yc(s)+yc(e[o])))}function yc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function pd(){return document.body.offsetHeight}const dd=new WeakMap,fd=new WeakMap,hd={name:"TransitionGroup",props:Ue({},my,{tag:String,moveClass:String}),setup(e,{slots:t}){const s=$t(),o=Bp();let l,r;return Yl(()=>{if(!l.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Cy(l[0].el,s.vnode.el,a))return;l.forEach(by),l.forEach(xy);const i=l.filter(wy);pd(),i.forEach(c=>{const p=c.el,d=p.style;rn(p,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=h=>{h&&h.target!==p||(!h||/transform$/.test(h.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,_n(p,a))};p.addEventListener("transitionend",f)})}),()=>{const a=he(e),i=yy(a);let c=a.tag||Ae;l=r,r=t.default?ei(t.default()):[];for(let p=0;p<r.length;p++){const d=r[p];d.key!=null?Os(d,wo(d,i,o,s)):O("<TransitionGroup> children must be keyed.")}if(l)for(let p=0;p<l.length;p++){const d=l[p];Os(d,wo(d,i,o,s)),dd.set(d,d.el.getBoundingClientRect())}return j(c,null,r)}}},_y=e=>delete e.mode;hd.props;const ky=hd;function by(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function xy(e){fd.set(e,e.el.getBoundingClientRect())}function wy(e){const t=dd.get(e),s=fd.get(e),o=t.left-s.left,l=t.top-s.top;if(o||l){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",e}}function Cy(e,t,s){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(o);const{hasTransform:r}=ud(o);return l.removeChild(o),r}const gc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ae(t)?s=>wn(t,s):t};function Sy(e){e.target.composing=!0}function vc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ey={created(e,{modifiers:{lazy:t,trim:s,number:o}},l){e._assign=gc(l);const r=o||l.props&&l.props.type==="number";bs(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;s&&(i=i.trim()),r&&(i=Mr(i)),e._assign(i)}),s&&bs(e,"change",()=>{e.value=e.value.trim()}),t||(bs(e,"compositionstart",Sy),bs(e,"compositionend",vc),bs(e,"change",vc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:o,number:l}},r){if(e._assign=gc(r),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===t||(l||e.type==="number")&&Mr(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},Ay={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_c=(e,t)=>s=>{if(!("key"in s))return;const o=fn(s.key);if(t.some(l=>l===o||Ay[l]===o))return e(s)},ls={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):qs(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(e),qs(e,!0),o.enter(e)):o.leave(e,()=>{qs(e,!1)}):qs(e,t))},beforeUnmount(e,{value:t}){qs(e,t)}};function qs(e,t){e.style.display=t?e._vod:"none"}const $y=Ue({patchProp:hy},ey);let kc;function Ry(){return kc||(kc=Am($y))}const Ty=(...e)=>{const t=Ry().createApp(...e);Iy(t),Hy(t);const{mount:s}=t;return t.mount=o=>{const l=Oy(o);if(!l)return;const r=t._component;!pe(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},t};function Iy(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Zu(t)||wh(t),writable:!1})}function Hy(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){O("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return O(o),s},set(){O(o)}})}}function Oy(e){if(je(e)){const t=document.querySelector(e);return t||O(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&O('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Py(){Gm()}Py();function la(e,t={},s){for(const o in e){const l=e[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?la(l,t,r):typeof l=="function"&&(t[r]=l)}return t}const Ly={run:e=>e()},By=()=>Ly,Fd=typeof console.createTask<"u"?console.createTask:By;function My(e,t){const s=t.shift(),o=Fd(s);return e.reduce((l,r)=>l.then(()=>o.run(()=>r(...t))),Promise.resolve())}function Dy(e,t){const s=t.shift(),o=Fd(s);return Promise.all(e.map(l=>o.run(()=>l(...t))))}function mr(e,t){for(const s of[...e])s(t)}class jy{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,s,o={}){if(!t||typeof s!="function")return()=>{};const l=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(s),()=>{s&&(this.removeHook(t,s),s=void 0)}}hookOnce(t,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(t,l),o}removeHook(t,s){if(this._hooks[t]){const o=this._hooks[t].indexOf(s);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,s){this._deprecatedHooks[t]=typeof s=="string"?{to:s}:s;const o=this._hooks[t]||[];delete this._hooks[t];for(const l of o)this.hook(t,l)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const s in t)this.deprecateHook(s,t[s])}addHooks(t){const s=la(t),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(t){const s=la(t);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...s){return s.unshift(t),this.callHookWith(My,t,...s)}callHookParallel(t,...s){return s.unshift(t),this.callHookWith(Dy,t,...s)}callHookWith(t,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&mr(this._before,l);const r=t(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&mr(this._after,l)}):(this._after&&l&&mr(this._after,l),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const s=this._before.indexOf(t);s!==-1&&this._before.splice(s,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const s=this._after.indexOf(t);s!==-1&&this._after.splice(s,1)}}}}function Ny(){return new jy}function Vy(e){return Array.isArray(e)?e:[e]}const md=["title","script","style","noscript"],Uy=["base","meta","link","style","script","noscript"],Jy=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],qy=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],zy=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function yd(e){let t=9;for(let s=0;s<e.length;)t=Math.imul(t^e.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ra(e){return yd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,s])=>`${t}:${String(s)}`).join(",")}`)}function Xy(e){let t=9;for(const s of e)for(let o=0;o<s.length;)t=Math.imul(t^s.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function gd(e,t){const{props:s,tag:o}=e;if(qy.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return t&&!t(a)?!1:`${o}:${r}:${a}`}return!1}const bc=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e,ol=(e,t=!1,s)=>{const{tag:o,$el:l}=e;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const p=`${i}:${c}`;s&&s(e,p,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(e,i,()=>l.removeAttribute(r)),(t||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),md.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))};let zs=!1;async function vd(e,t={}){var h,F;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=t.document||e.resolvedOptions.document||window.document,l=(await e.resolveTags()).map(i);if(e.resolvedOptions.experimentalHashHydration&&(zs=zs||e._hash||!1,zs)){const m=Xy(l.map(g=>g.tag._h));if(zs===m)return;zs=m}const r=e._popSideEffectQueue();e.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([g,v])=>{r[g]=v})});const a=(m,g,v)=>{g=`${m.renderId}:${g}`,m.entry&&(m.entry._sde[g]=v),delete r[g]};function i(m){const g=e.headEntries().find(w=>w._i===m._e),v={renderId:!m.key&&m._d?m._d:ra(m),$el:null,shouldRender:!0,tag:m,entry:g,markSideEffect:(w,k)=>a(v,w,k)};return v}const c=[],p={body:[],head:[]},d=m=>{e._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var g;(g=m.$el)==null||g.remove(),delete e._elMap[m.renderId]})};for(const m of l){if(await e.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:g}=m;if(g.tag==="title"){o.title=g.textContent||"",c.push(m);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){m.$el=o[g.tag==="htmlAttrs"?"documentElement":"body"],ol(m,!1,a),c.push(m);continue}if(m.$el=e._elMap[m.renderId],!m.$el&&g.key&&(m.$el=o.querySelector(`${(h=g.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),m.$el){m.tag._d&&ol(m),d(m);continue}p[(F=g.tagPosition)!=null&&F.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([m,g])=>{var w;if(!g.length)return;const v=(w=o==null?void 0:o[m])==null?void 0:w.children;if(v){for(const k of[...v].reverse()){const b=k.tagName.toLowerCase();if(!Uy.includes(b))continue;const C=k.getAttributeNames().reduce(($,D)=>({...$,[D]:k.getAttribute(D)}),{}),T={tag:b,props:C};k.innerHTML&&(T.innerHTML=k.innerHTML);const P=ra(T);let V=g.findIndex($=>($==null?void 0:$.renderId)===P);if(V===-1){const $=gd(T);V=g.findIndex(D=>(D==null?void 0:D.tag._d)&&D.tag._d===$)}if(V!==-1){const $=g[V];$.$el=k,ol($),d($),delete g[V]}}g.forEach(k=>{const b=k.tag.tagPosition||"head";f[b]=f[b]||o.createDocumentFragment(),k.$el||(k.$el=o.createElement(k.tag.tag),ol(k,!0)),f[b].appendChild(k.$el),d(k)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const m of c)await e.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let yr=null;async function _d(e,t={}){function s(){return yr=null,vd(e,t)}const o=t.delayFn||(l=>setTimeout(l,10));return yr=yr||new Promise(l=>o(()=>l(s())))}const Wy=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),_d(t,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}});function Ky(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const xc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function wc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in xc?xc[t]:10}const Yy=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Zy(){return{hooks:{"tags:resolve":e=>{const t=s=>{var o;return(o=e.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of Yy)for(const l of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=t(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}e.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>wc(s)-wc(o))}}}}const Gy=()=>({hooks:{"tags:resolve":e=>{const{tags:t}=e;let s=t.findIndex(l=>l.tag==="titleTemplate");const o=t.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=bc(t[s].textContent,t[o].textContent);l!==null?t[o].textContent=l||t[o].textContent:delete t[o]}else if(s!==-1){const l=bc(t[s].textContent);l!==null&&(t[s].textContent=l,t[s].tag="title",s=-1)}s!==-1&&delete t[s],e.tags=t.filter(Boolean)}}}),Qy=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),eg=["link","style","script","noscript"],tg=()=>({hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=ra(e)),e.key&&eg.includes(e.tag)&&(e._h=yd(e.key),e.props[`data-h-${e._h}`]="")}}}),Cc=["script","link","bodyAttrs"],ng=()=>{const e=(t,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return t==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(s=>(!Cc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(t){if(!Cc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=e("dom",t.tag);Object.keys(o).length&&(t.tag.props=s,t.tag._eventHandlers=o,t.tag._delayedSrc=l)},"dom:renderTag":function(t){const s=t.$el;if(!t.tag._eventHandlers||!s)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(t.tag._eventHandlers).forEach(([l,r])=>{const a=`${t.tag._d||t.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(t.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const p=r;s.setAttribute(c,""),o.addEventListener(i,p),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(i,p),s.removeAttribute(c)})}),t.tag._delayedSrc&&s.setAttribute("src",t.tag._delayedSrc)}}}},sg=["templateParams","htmlAttrs","bodyAttrs"],og=()=>({hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const t=e.key?`${e.tag}:${e.key}`:gd(e);t&&(e._d=t)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const l=o._d||o._p,r=t[l];if(r){let a=o==null?void 0:o.tagDuplicateStrategy;if(!a&&sg.includes(o.tag)&&(a="merge"),a==="merge"){const c=r.props;["class","style"].forEach(p=>{o.props[p]&&c[p]&&(p==="style"&&!c[p].endsWith(";")&&(c[p]+=";"),o.props[p]=`${c[p]} ${o.props[p]}`)}),t[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}const i=Object.keys(o.props).length;if((i===0||i===1&&typeof o.props["data-h-key"]<"u")&&!o.innerHTML&&!o.textContent){delete t[l];return}}t[l]=o});const s=[];Object.values(t).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),e.tags=s}}});function ll(e,t){function s(r){if(["s","pageTitle"].includes(r))return t.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((i,c)=>i&&i[c]||void 0,t):a=t[r],typeof a<"u"?a||"":!1}let o=e;try{o=decodeURI(e)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=s(r.slice(1));typeof a=="string"&&(e=e.replaceAll(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function lg(){return{hooks:{"tags:resolve":e=>{var r;const{tags:t}=e,s=(r=t.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=t.findIndex(a=>a.tag==="templateParams"),l=o!==-1?t[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=ll(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=ll(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=ll(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?ll(c,l):c)}catch{}e.tags=t.filter(a=>a.tag!=="templateParams")}}}}const rg=typeof window<"u";let kd;const ag=e=>kd=e,ig=()=>kd;async function cg(e,t){const s={tag:e,props:{}};return e==="templateParams"?(s.props=t,s):["title","titleTemplate"].includes(e)?(s.textContent=t instanceof Promise?await t:t,s):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?s.props.src=t:s.innerHTML=t,s):!1:(s.props=await pg(e,{...t}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>zy.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||md.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=ug(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function ug(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function pg(e,t){for(const s of Object.keys(t)){const o=s.startsWith("data-");t[s]instanceof Promise&&(t[s]=await t[s]),String(t[s])==="true"?t[s]=o?"true":"":String(t[s])==="false"&&(o?t[s]="false":delete t[s])}return t}const dg=10;async function fg(e){const t=[];return Object.entries(e.resolvedInput).filter(([s,o])=>typeof o<"u"&&Jy.includes(s)).forEach(([s,o])=>{const l=Vy(o);t.push(...l.map(r=>cg(s,r)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((s,o)=>(s._e=e._i,s._p=(e._i<<dg)+o,s))}const hg=()=>[og(),Zy(),lg(),Gy(),tg(),ng(),Qy()],Fg=(e={})=>[Wy({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function mg(e={}){const t=yg({...e,plugins:[...Fg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Ky(t.resolvedOptions.document)),ag(t),t}function yg(e={}){let t=[],s={},o=0;const l=Ny();e!=null&&e.hooks&&l.addHooks(e.hooks),e.plugins=[...hg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),e.document=e.document||(rg?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:e,headEntries(){return t},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const p={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(p._m=c==null?void 0:c.mode),c!=null&&c.transform&&(p._t=c==null?void 0:c.transform),t.push(p),r(),{dispose(){t=t.filter(d=>d._i!==p._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){t=t.map(f=>(f._i===p._i&&(p.input=f.input=d,r()),f))}}},async resolveTags(){const i={tags:[],entries:[...t]};await l.callHook("entries:resolve",i);for(const c of i.entries){const p=c._t||(d=>d);if(c.resolvedInput=p(c.resolvedInput||c.input),c.resolvedInput)for(const d of await fg(c)){const f={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function gg(e){return typeof e=="function"?e():x(e)}function Rl(e,t=""){if(e instanceof Promise)return e;const s=gg(e);return!e||!s?s:Array.isArray(s)?s.map(o=>Rl(o,t)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,x(l)]:[o,Rl(l,o)])):s}const vg=$l.startsWith("3"),_g=typeof window<"u",bd="usehead";function li(){return $t()&&K(bd)||ig()}function kg(e){return{install(s){vg&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(bd,e))}}.install}function bg(e={}){const t=mg({...e,domDelayFn:s=>setTimeout(()=>nt(()=>s()),10),plugins:[xg(),...(e==null?void 0:e.plugins)||[]]});return t.install=kg(t),t}const xg=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Rl(t.input)}}});function wg(e,t={}){const s=li(),o=z(!1),l=z({});ds(()=>{l.value=o.value?{}:Rl(e)});const r=s.push(l.value,t);return me(l,i=>{r.patch(i)}),$t()&&(Uo(()=>{r.dispose()}),Np(()=>{o.value=!0}),jp(()=>{o.value=!1})),r}function Cg(e,t={}){return li().push(e,t)}function ri(e,t={}){var o;const s=li();if(s){const l=_g||!!((o=s.resolvedOptions)!=null&&o.document);return t.mode==="server"&&l||t.mode==="client"&&!l?void 0:l?wg(e,t):Cg(e,t)}}const Sg=e=>ri({htmlAttrs:e});function Eg(e,t){const s=bg(t||{}),o={unhead:s,install(l){$l.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=ri(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?vd(s,{document:l}):_d(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),e&&o.addHeadObjs(e),o}const co=Symbol("v-click-clicks"),Wn=Symbol("v-click-clicks-elements"),aa=Symbol("v-click-clicks-order-map"),uo=Symbol("v-click-clicks-disabled"),xd=Symbol("slidev-slide-scale"),se=Symbol("slidev-slidev-context"),Ag=Symbol("slidev-route"),$g=Symbol("slidev-slide-context"),zn="slidev-vclick-target",gr="slidev-vclick-hidden",Rg="slidev-vclick-fade",vr="slidev-vclick-hidden-explicitly",Xs="slidev-vclick-current",rl="slidev-vclick-prior",Tg=["localhost","127.0.0.1"];let Ig=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function Hg(e){return e=e??[],Array.isArray(e)?e:[e]}function ia(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function Og(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function Pg(e){return e!=null}function Lg(e,t){return Object.fromEntries(Object.entries(e).map(([s,o])=>t(s,o)).filter(Pg))}const oo={theme:"dracula",title:"React Shared",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Nunito Sans","Fira Code"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},hightlighter:"shiki"},Se=oo,Rn=Se.aspectRatio??16/9,Tn=Se.canvasWidth??980,ai=Math.ceil(Tn/Rn),ii=R(()=>Lg(Se.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Lt(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const hs=Ve({page:0,clicks:0});let Bg=[],Mg=[];Lt(hs,"$syncUp",!0);Lt(hs,"$syncDown",!0);Lt(hs,"$paused",!1);Lt(hs,"$onSet",e=>Bg.push(e));Lt(hs,"$onPatch",e=>Mg.push(e));Lt(hs,"$patch",async()=>!1);function wd(e,t,s=!1){const o=[];let l=!1,r=!1,a,i;const c=Ve(t);function p(F){o.push(F)}function d(F,m){c[F]!==m&&(clearTimeout(a),l=!0,c[F]=m,a=setTimeout(()=>l=!1,0))}function f(F){l||(clearTimeout(i),r=!0,Object.entries(F).forEach(([m,g])=>{c[m]=g}),i=setTimeout(()=>r=!1,0))}function h(F){let m;s?s&&window.addEventListener("storage",v=>{v&&v.key===F&&v.newValue&&f(JSON.parse(v.newValue))}):(m=new BroadcastChannel(F),m.addEventListener("message",v=>f(v.data)));function g(){!s&&m&&!r?m.postMessage(he(c)):s&&!r&&window.localStorage.setItem(F,JSON.stringify(c)),l||o.forEach(v=>v(c))}if(me(c,g,{deep:!0}),s){const v=window.localStorage.getItem(F);v&&f(JSON.parse(v))}}return{init:h,onPatch:p,patch:d,state:c}}const{init:Dg,onPatch:jg,patch:Ws,state:_r}=wd(hs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Fs=Ve({});let Ng=[],Vg=[];Lt(Fs,"$syncUp",!0);Lt(Fs,"$syncDown",!0);Lt(Fs,"$paused",!1);Lt(Fs,"$onSet",e=>Ng.push(e));Lt(Fs,"$onPatch",e=>Vg.push(e));Lt(Fs,"$patch",async()=>!1);const{init:Ug,onPatch:Jg,patch:Cd,state:Tl}=wd(Fs,{},!1),qg="modulepreload",zg=function(e){return"/react-shared-ppt/"+e},Sc={},Fl=function(t,s,o){if(!s||s.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=zg(r),r in Sc)return;Sc[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const f=l[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":qg,a||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),a)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var Ec;const en=typeof window<"u",Xg=e=>typeof e<"u",Wg=Object.prototype.toString,Ao=e=>typeof e=="function",Kg=e=>typeof e=="number",Sd=e=>typeof e=="string",ca=e=>Wg.call(e)==="[object Object]",ua=()=>+Date.now(),Ts=()=>{},Yg=en&&((Ec=window==null?void 0:window.navigator)==null?void 0:Ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function tn(e){return typeof e=="function"?e():x(e)}function Zg(e,t){function s(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return s}const Ed=e=>e();function Gg(e=Ed){const t=z(!0);function s(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&e(...r)};return{isActive:Kt(t),pause:s,resume:o,eventFilter:l}}function Qg(e){return e}function ev(e,t){var s;if(typeof e=="number")return e+t;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=e.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?e:r+l}function tv(e,t){let s,o,l;const r=z(!0),a=()=>{r.value=!0,l()};me(e,a,{flush:"sync"});const i=Ao(t)?t:t.get,c=Ao(t)?void 0:t.set,p=fF((d,f)=>(o=d,l=f,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(p)&&(p.trigger=a),p}function nn(e){return Va()?(rp(e),!0):!1}function nv(e){if(!$e(e))return Ve(e);const t=new Proxy({},{get(s,o,l){return x(Reflect.get(e.value,o,l))},set(s,o,l){return $e(e.value[o])&&!$e(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ve(t)}function Ad(e){return typeof e=="function"?R(e):z(e)}function ci(e,t=!0){$t()?fs(e):t?e():nt(e)}function sv(e){$t()&&Zl(e)}function ov(e,t=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=z(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function p(){const d=tn(t);d<=0||(a.value=!0,l&&e(),i(),r=setInterval(e,d))}if(o&&en&&p(),$e(t)||Ao(t)){const d=me(t,()=>{a.value&&en&&p()});nn(d)}return nn(c),{isActive:a,pause:c,resume:p}}function lv(e,t,s={}){const{immediate:o=!0}=s,l=z(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...p){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...p)},tn(t))}return o&&(l.value=!0,en&&c()),nn(i),{isPending:Kt(l),start:c,stop:i}}function $d(e=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,l=$e(e),r=z(e);function a(i){if(arguments.length)return r.value=i,r.value;{const c=tn(s);return r.value=r.value===c?tn(o):c,r.value}}return l?a:[r,a]}var Ac=Object.getOwnPropertySymbols,rv=Object.prototype.hasOwnProperty,av=Object.prototype.propertyIsEnumerable,iv=(e,t)=>{var s={};for(var o in e)rv.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ac)for(var o of Ac(e))t.indexOf(o)<0&&av.call(e,o)&&(s[o]=e[o]);return s};function cv(e,t,s={}){const o=s,{eventFilter:l=Ed}=o,r=iv(o,["eventFilter"]);return me(e,Zg(l,t),r)}var uv=Object.defineProperty,pv=Object.defineProperties,dv=Object.getOwnPropertyDescriptors,Il=Object.getOwnPropertySymbols,Rd=Object.prototype.hasOwnProperty,Td=Object.prototype.propertyIsEnumerable,$c=(e,t,s)=>t in e?uv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,fv=(e,t)=>{for(var s in t||(t={}))Rd.call(t,s)&&$c(e,s,t[s]);if(Il)for(var s of Il(t))Td.call(t,s)&&$c(e,s,t[s]);return e},hv=(e,t)=>pv(e,dv(t)),Fv=(e,t)=>{var s={};for(var o in e)Rd.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Il)for(var o of Il(e))t.indexOf(o)<0&&Td.call(e,o)&&(s[o]=e[o]);return s};function mv(e,t,s={}){const o=s,{eventFilter:l}=o,r=Fv(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:p}=Gg(l);return{stop:cv(e,t,hv(fv({},r),{eventFilter:a})),pause:i,resume:c,isActive:p}}function St(e){var t;const s=tn(e);return(t=s==null?void 0:s.$el)!=null?t:s}const st=en?window:void 0,Id=en?window.document:void 0,yv=en?window.navigator:void 0;function ke(...e){let t,s,o,l;if(Sd(e[0])||Array.isArray(e[0])?([s,o,l]=e,t=st):[t,s,o,l]=e,!t)return Ts;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,f,h,F)=>(d.addEventListener(f,h,F),()=>d.removeEventListener(f,h,F)),c=me(()=>[St(t),tn(l)],([d,f])=>{a(),d&&r.push(...s.flatMap(h=>o.map(F=>i(d,h,F,f))))},{immediate:!0,flush:"post"}),p=()=>{c(),a()};return nn(p),p}let Rc=!1;function gv(e,t,s={}){const{window:o=st,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;Yg&&!Rc&&(Rc=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",Ts)));let i=!0;const c=h=>l.some(F=>{if(typeof F=="string")return Array.from(o.document.querySelectorAll(F)).some(m=>m===h.target||h.composedPath().includes(m));{const m=St(F);return m&&(h.target===m||h.composedPath().includes(m))}}),d=[ke(o,"click",h=>{const F=St(e);if(!(!F||F===h.target||h.composedPath().includes(F))){if(h.detail===0&&(i=!c(h)),!i){i=!0;return}t(h)}},{passive:!0,capture:r}),ke(o,"pointerdown",h=>{const F=St(e);F&&(i=!h.composedPath().includes(F)&&!c(h))},{passive:!0}),a&&ke(o,"blur",h=>{var F;const m=St(e);((F=o.document.activeElement)==null?void 0:F.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(h)})].filter(Boolean);return()=>d.forEach(h=>h())}const vv=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function _v(...e){let t,s,o={};e.length===3?(t=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,s=e[0],o=e[1]):(t=e[0],s=e[1]):(t=!0,s=e[0]);const{target:l=st,eventName:r="keydown",passive:a=!1}=o,i=vv(t);return ke(l,r,p=>{i(p)&&s(p)},a)}function kv(e={}){var t;const{window:s=st}=e,o=(t=e.document)!=null?t:s==null?void 0:s.document,l=tv(()=>null,()=>o==null?void 0:o.activeElement);return s&&(ke(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),ke(s,"focus",l.trigger,!0)),l}function zo(e,t=!1){const s=z(),o=()=>s.value=!!e();return o(),ci(o,t),s}function xs(e,t={}){const{window:s=st}=t,o=zo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=z(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(Ad(e).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return ds(i),nn(()=>a()),r}const bv={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var xv=Object.defineProperty,Tc=Object.getOwnPropertySymbols,wv=Object.prototype.hasOwnProperty,Cv=Object.prototype.propertyIsEnumerable,Ic=(e,t,s)=>t in e?xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Sv=(e,t)=>{for(var s in t||(t={}))wv.call(t,s)&&Ic(e,s,t[s]);if(Tc)for(var s of Tc(t))Cv.call(t,s)&&Ic(e,s,t[s]);return e};function Ev(e,t={}){function s(i,c){let p=e[i];return c!=null&&(p=ev(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=st}=t;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>xs(`(min-width: ${s(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Sv({greater(i){return xs(`(min-width: ${s(i,.1)})`,t)},greaterOrEqual:r,smaller(i){return xs(`(max-width: ${s(i,-.1)})`,t)},smallerOrEqual(i){return xs(`(max-width: ${s(i)})`,t)},between(i,c){return xs(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function Av(e={}){const{navigator:t=yv,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,a=["copy","cut"],i=zo(()=>t&&"clipboard"in t),c=R(()=>i.value||r),p=z(""),d=z(!1),f=lv(()=>d.value=!1,l);function h(){i.value?t.clipboard.readText().then(v=>{p.value=v}):p.value=g()}if(c.value&&s)for(const v of a)ke(v,h);async function F(v=tn(o)){c.value&&v!=null&&(i.value?await t.clipboard.writeText(v):m(v),p.value=v,d.value=!0,f.start())}function m(v){const w=document.createElement("textarea");w.value=v??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function g(){var v,w,k;return(k=(w=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:w.toString())!=null?k:""}return{isSupported:c,text:p,copied:d,copy:F}}function $v(e){return JSON.parse(JSON.stringify(e))}const pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},da="__vueuse_ssr_handlers__";pa[da]=pa[da]||{};const Rv=pa[da];function Tv(e,t){return Rv[e]||t}function Iv(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Hv=Object.defineProperty,Hc=Object.getOwnPropertySymbols,Ov=Object.prototype.hasOwnProperty,Pv=Object.prototype.propertyIsEnumerable,Oc=(e,t,s)=>t in e?Hv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Pc=(e,t)=>{for(var s in t||(t={}))Ov.call(t,s)&&Oc(e,s,t[s]);if(Hc)for(var s of Hc(t))Pv.call(t,s)&&Oc(e,s,t[s]);return e};const Lv={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Lc="vueuse-storage";function Bv(e,t,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:d,window:f=st,eventFilter:h,onError:F=$=>{console.error($)}}=o,m=(d?Gt:z)(t);if(!s)try{s=Tv("getDefaultStorage",()=>{var $;return($=st)==null?void 0:$.localStorage})()}catch($){F($)}if(!s)return m;const g=tn(t),v=Iv(g),w=(l=o.serializer)!=null?l:Lv[v],{pause:k,resume:b}=mv(m,()=>C(m.value),{flush:r,deep:a,eventFilter:h});return f&&i&&(ke(f,"storage",V),ke(f,Lc,P)),V(),m;function C($){try{if($==null)s.removeItem(e);else{const D=w.write($),G=s.getItem(e);G!==D&&(s.setItem(e,D),f&&f.dispatchEvent(new CustomEvent(Lc,{detail:{key:e,oldValue:G,newValue:D,storageArea:s}})))}}catch(D){F(D)}}function T($){const D=$?$.newValue:s.getItem(e);if(D==null)return c&&g!==null&&s.setItem(e,w.write(g)),g;if(!$&&p){const G=w.read(D);return Ao(p)?p(G,g):v==="object"&&!Array.isArray(G)?Pc(Pc({},g),G):G}else return typeof D!="string"?D:w.read(D)}function P($){V($.detail)}function V($){if(!($&&$.storageArea!==s)){if($&&$.key==null){m.value=g;return}if(!($&&$.key!==e)){k();try{m.value=T($)}catch(D){F(D)}finally{$?nt(b):b()}}}}}function Mv(e){return xs("(prefers-color-scheme: dark)",e)}var Bc=Object.getOwnPropertySymbols,Dv=Object.prototype.hasOwnProperty,jv=Object.prototype.propertyIsEnumerable,Nv=(e,t)=>{var s={};for(var o in e)Dv.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Bc)for(var o of Bc(e))t.indexOf(o)<0&&jv.call(e,o)&&(s[o]=e[o]);return s};function Vv(e,t,s={}){const o=s,{window:l=st}=o,r=Nv(o,["window"]);let a;const i=zo(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},p=me(()=>St(e),f=>{c(),i.value&&l&&f&&(a=new ResizeObserver(t),a.observe(f,r))},{immediate:!0,flush:"post"}),d=()=>{c(),p()};return nn(d),{isSupported:i,stop:d}}function Uv(e,t={}){const{immediate:s=!0,window:o=st}=t,l=z(!1);let r=0,a=null;function i(d){if(!l.value||!o)return;const f=d-r;e({delta:f,timestamp:d}),r=d,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function p(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),nn(p),{isActive:Kt(l),pause:p,resume:c}}function Jv(e,t={width:0,height:0},s={}){const{window:o=st,box:l="content-box"}=s,r=R(()=>{var c,p;return(p=(c=St(e))==null?void 0:c.namespaceURI)==null?void 0:p.includes("svg")}),a=z(t.width),i=z(t.height);return Vv(e,([c])=>{const p=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=St(e);if(d){const f=o.getComputedStyle(d);a.value=parseFloat(f.width),i.value=parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];a.value=d.reduce((f,{inlineSize:h})=>f+h,0),i.value=d.reduce((f,{blockSize:h})=>f+h,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),me(()=>St(e),c=>{a.value=c?t.width:0,i.value=c?t.height:0}),{width:a,height:i}}const Mc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function qv(e,t={}){const{document:s=Id,autoExit:o=!1}=t,l=e||(s==null?void 0:s.querySelector("html")),r=z(!1);let a=Mc[0];const i=zo(()=>{if(s){for(const g of Mc)if(g[1]in s)return a=g,!0}else return!1;return!1}),[c,p,d,,f]=a;async function h(){i.value&&(s!=null&&s[d]&&await s[p](),r.value=!1)}async function F(){if(!i.value)return;await h();const g=St(l);g&&(await g[c](),r.value=!0)}async function m(){r.value?await h():await F()}return s&&ke(s,f,()=>{r.value=!!(s!=null&&s[d])},!1),o&&nn(h),{isSupported:i,isFullscreen:r,enter:F,exit:h,toggle:m}}function zv(e,t,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=st}=s,i=zo(()=>a&&"IntersectionObserver"in a);let c=Ts;const p=i.value?me(()=>({el:St(e),root:St(o)}),({el:f,root:h})=>{if(c(),!f)return;const F=new IntersectionObserver(t,{root:h,rootMargin:l,threshold:r});F.observe(f),c=()=>{F.disconnect(),c=Ts}},{immediate:!0,flush:"post"}):Ts,d=()=>{c(),p()};return nn(d),{isSupported:i,stop:d}}function Ut(e,t,s={}){const{window:o=st}=s;return Bv(e,t,o==null?void 0:o.localStorage,s)}const Xv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Wv(e={}){const{reactive:t=!1,target:s=st,aliasMap:o=Xv,passive:l=!0,onEventFired:r=Ts}=e,a=Ve(new Set),i={toJSON(){return{}},current:a},c=t?Ve(i):i,p=new Set,d=new Set;function f(g,v){g in c&&(t?c[g]=v:c[g].value=v)}function h(){a.clear();for(const g of d)f(g,!1)}function F(g,v){var w,k;const b=(w=g.key)==null?void 0:w.toLowerCase(),T=[(k=g.code)==null?void 0:k.toLowerCase(),b].filter(Boolean);b&&(v?a.add(b):a.delete(b));for(const P of T)d.add(P),f(P,v);b==="meta"&&!v?(p.forEach(P=>{a.delete(P),f(P,!1)}),p.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&v&&[...a,...T].forEach(P=>p.add(P))}ke(s,"keydown",g=>(F(g,!0),r(g)),{passive:l}),ke(s,"keyup",g=>(F(g,!1),r(g)),{passive:l}),ke("blur",h,{passive:!0}),ke("focus",h,{passive:!0});const m=new Proxy(c,{get(g,v,w){if(typeof v!="string")return Reflect.get(g,v,w);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in c))if(/[+_-]/.test(v)){const b=v.split(/[+_-]/g).map(C=>C.trim());c[v]=R(()=>b.every(C=>x(m[C])))}else c[v]=z(!1);const k=Reflect.get(g,v,w);return t?x(k):k}});return m}function P$(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=st,eventFilter:a}=e,i=z(l.x),c=z(l.y),p=z(null),d=g=>{t==="page"?(i.value=g.pageX,c.value=g.pageY):t==="client"?(i.value=g.clientX,c.value=g.clientY):t==="movement"&&(i.value=g.movementX,c.value=g.movementY),p.value="mouse"},f=()=>{i.value=l.x,c.value=l.y},h=g=>{if(g.touches.length>0){const v=g.touches[0];t==="page"?(i.value=v.pageX,c.value=v.pageY):t==="client"&&(i.value=v.clientX,c.value=v.clientY),p.value="touch"}},F=g=>a===void 0?d(g):a(()=>d(g),{}),m=g=>a===void 0?h(g):a(()=>h(g),{});return r&&(ke(r,"mousemove",F,{passive:!0}),ke(r,"dragover",F,{passive:!0}),s&&t!=="movement"&&(ke(r,"touchstart",m,{passive:!0}),ke(r,"touchmove",m,{passive:!0}),o&&ke(r,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:p}}var un;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(un||(un={}));function Kv(e,t={}){const s=Ad(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=t,i=Ve({x:0,y:0}),c=(P,V)=>{i.x=P,i.y=V},p=Ve({x:0,y:0}),d=(P,V)=>{p.x=P,p.y=V},f=R(()=>i.x-p.x),h=R(()=>i.y-p.y),{max:F,abs:m}=Math,g=R(()=>F(m(f.value),m(h.value))>=o),v=z(!1),w=z(!1),k=R(()=>g.value?m(f.value)>m(h.value)?f.value>0?un.LEFT:un.RIGHT:h.value>0?un.UP:un.DOWN:un.NONE),b=P=>{var V,$,D;const G=P.buttons===0,ie=P.buttons===1;return(D=($=(V=t.pointerTypes)==null?void 0:V.includes(P.pointerType))!=null?$:G||ie)!=null?D:!0},C=[ke(e,"pointerdown",P=>{var V,$;if(!b(P))return;w.value=!0,($=(V=s.value)==null?void 0:V.style)==null||$.setProperty("touch-action","none");const D=P.target;D==null||D.setPointerCapture(P.pointerId);const{clientX:G,clientY:ie}=P;c(G,ie),d(G,ie),a==null||a(P)}),ke(e,"pointermove",P=>{if(!b(P)||!w.value)return;const{clientX:V,clientY:$}=P;d(V,$),!v.value&&g.value&&(v.value=!0),v.value&&(l==null||l(P))}),ke(e,"pointerup",P=>{var V,$;b(P)&&(v.value&&(r==null||r(P,k.value)),w.value=!1,v.value=!1,($=(V=s.value)==null?void 0:V.style)==null||$.setProperty("touch-action","initial"))})],T=()=>C.forEach(P=>P());return{isSwiping:Kt(v),direction:Kt(k),posStart:Kt(i),posEnd:Kt(p),distanceX:f,distanceY:h,stop:T}}let Yv=0;function L$(e,t={}){const s=z(!1),{document:o=Id,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++Yv}`}=t,i=z(e);let c=()=>{};const p=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,t.media&&(f.media=t.media),o.head.appendChild(f)),!s.value&&(c=me(i,h=>{f.textContent=h},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&ci(p),r||nn(d),{id:a,css:i,unload:d,load:p,isLoaded:Kt(s)}}var Zv=Object.defineProperty,Dc=Object.getOwnPropertySymbols,Gv=Object.prototype.hasOwnProperty,Qv=Object.prototype.propertyIsEnumerable,jc=(e,t,s)=>t in e?Zv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,e8=(e,t)=>{for(var s in t||(t={}))Gv.call(t,s)&&jc(e,s,t[s]);if(Dc)for(var s of Dc(t))Qv.call(t,s)&&jc(e,s,t[s]);return e};function B$(e={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,a=z(ua()+s),i=()=>a.value=ua()+s,c=r?()=>{i(),r(a.value)}:i,p=l==="requestAnimationFrame"?Uv(c,{immediate:o}):ov(c,l,{immediate:o});return t?e8({timestamp:a},p):a}var t8=Object.defineProperty,Nc=Object.getOwnPropertySymbols,n8=Object.prototype.hasOwnProperty,s8=Object.prototype.propertyIsEnumerable,Vc=(e,t,s)=>t in e?t8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,o8=(e,t)=>{for(var s in t||(t={}))n8.call(t,s)&&Vc(e,s,t[s]);if(Nc)for(var s of Nc(t))s8.call(t,s)&&Vc(e,s,t[s]);return e};const l8={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};o8({linear:Qg},l8);function Yt(e,t,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:p,deep:d=!1,defaultValue:f}=o,h=$t(),F=s||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((a=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let m=p;t||(t="modelValue"),m=p||m||`update:${t.toString()}`;const g=w=>i?Ao(i)?i(w):$v(w):w,v=()=>Xg(e[t])?g(e[t]):f;if(c){const w=v(),k=z(w);return me(()=>e[t],b=>k.value=g(b)),me(k,b=>{(b!==e[t]||d)&&F(m,b)},{deep:d}),k}else return R({get(){return v()},set(w){F(m,w)}})}function M$({window:e=st}={}){if(!e)return z(!1);const t=z(e.document.hasFocus());return ke(e,"blur",()=>{t.value=!1}),ke(e,"focus",()=>{t.value=!0}),t}function r8(e={}){const{window:t=st,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,a=z(s),i=z(o),c=()=>{t&&(r?(a.value=t.innerWidth,i.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};return c(),ci(c),ke("resize",c,{passive:!0}),l&&ke("orientationchange",c,{passive:!0}),{width:a,height:i}}function a8(){return Hd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Hd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const i8=typeof Proxy=="function",c8="devtools-plugin:setup",u8="plugin:settings:set";let ys,fa;function p8(){var e;return ys!==void 0||(typeof window<"u"&&window.performance?(ys=!0,fa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ys=!0,fa=global.perf_hooks.performance):ys=!1),ys}function d8(){return p8()?fa.now():Date.now()}class f8{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const o={};if(t.settings)for(const a in t.settings){const i=t.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return d8()}},s&&s.on(u8,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(p=>{this.targetQueue.push({method:i,args:c,resolve:p})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function h8(e,t){const s=e,o=Hd(),l=a8(),r=i8&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(c8,e,t);else{const a=r?new f8(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function F8(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function kr(e,t){const s={};for(const o in t){const l=t[o];s[o]=At(l)?l.map(e):e(l)}return s}const po=()=>{},At=Array.isArray;function we(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const m8=/\/$/,y8=e=>e.replace(m8,"");function br(e,t,s="/"){let o,l={},r="",a="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=t.slice(0,c),r=t.slice(c+1,i>-1?i:t.length),l=e(r)),i>-1&&(o=o||t.slice(0,i),a=t.slice(i,t.length)),o=_8(o??t,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function g8(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Uc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Jc(e,t,s){const o=t.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&Ln(t.matched[o],s.matched[l])&&Od(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Ln(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Od(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!v8(e[s],t[s]))return!1;return!0}function v8(e,t){return At(e)?qc(e,t):At(t)?qc(t,e):e===t}function qc(e,t){return At(t)?e.length===t.length&&e.every((s,o)=>s===t[o]):e.length===1&&e[0]===t}function _8(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return we(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const s=t.split("/"),o=e.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var $o;(function(e){e.pop="pop",e.push="push"})($o||($o={}));var fo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fo||(fo={}));function k8(e){if(!e)if(an){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),y8(e)}const b8=/^[^#]+#/;function x8(e,t){return e.replace(b8,"#")+t}function w8(e,t){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function C8(e){let t;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){we(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{we(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){we(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=w8(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function zc(e,t){return(history.state?history.state.position-t:-1)+e}const ha=new Map;function S8(e,t){ha.set(e,t)}function E8(e){const t=ha.get(e);return ha.delete(e),t}let A8=()=>location.protocol+"//"+location.host;function Pd(e,t){const{pathname:s,search:o,hash:l}=t,r=e.indexOf("#");if(r>-1){let i=l.includes(e.slice(r))?e.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),Uc(c,"")}return Uc(s,e)+o+l}function $8(e,t,s,o){let l=[],r=[],a=null;const i=({state:h})=>{const F=Pd(e,location),m=s.value,g=t.value;let v=0;if(h){if(s.value=F,t.value=h,a&&a===m){a=null;return}v=g?h.position-g.position:0}else o(F);l.forEach(w=>{w(s.value,m,{delta:v,type:$o.pop,direction:v?v>0?fo.forward:fo.back:fo.unknown})})};function c(){a=s.value}function p(h){l.push(h);const F=()=>{const m=l.indexOf(h);m>-1&&l.splice(m,1)};return r.push(F),F}function d(){const{history:h}=window;h.state&&h.replaceState(Ee({},h.state,{scroll:tr()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:p,destroy:f}}function Xc(e,t,s,o=!1,l=!1){return{back:e,current:t,forward:s,replaced:o,position:window.history.length,scroll:l?tr():null}}function R8(e){const{history:t,location:s}=window,o={value:Pd(e,s)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,p,d){const f=e.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+c:A8()+e+c;try{t[d?"replaceState":"pushState"](p,"",h),l.value=p}catch(F){we("Error with push/replace State",F),s[d?"replace":"assign"](h)}}function a(c,p){const d=Ee({},t.state,Xc(l.value.back,c,l.value.forward,!0),p,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,p){const d=Ee({},l.value,t.state,{forward:c,scroll:tr()});t.state||we(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Ee({},Xc(o.value,c,null),{position:d.position+1},p);r(c,f,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function T8(e){e=k8(e);const t=R8(e),s=$8(e,t.state,t.location,t.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Ee({location:"",base:e,go:o,createHref:x8.bind(null,e)},t,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function I8(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&we(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),T8(e)}function H8(e){return typeof e=="string"||e&&typeof e=="object"}function Ld(e){return typeof e=="string"||typeof e=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bd=Symbol("navigation failure");var Wc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Wc||(Wc={}));const O8={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${L8(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ms(e,t){return Ee(new Error(O8[e](t)),{type:e,[Bd]:!0},t)}function sn(e,t){return e instanceof Error&&Bd in e&&(t==null||!!(e.type&t))}const P8=["params","query","hash"];function L8(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const s of P8)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}const Kc="[^/]+?",B8={sensitive:!1,strict:!1,start:!0,end:!0},M8=/[.+*?^${}()[\]/\\]/g;function D8(e,t){const s=Ee({},B8,t),o=[];let l=s.start?"^":"";const r=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(l+="/");for(let f=0;f<p.length;f++){const h=p[f];let F=40+(s.sensitive?.25:0);if(h.type===0)f||(l+="/"),l+=h.value.replace(M8,"\\$&"),F+=40;else if(h.type===1){const{value:m,repeatable:g,optional:v,regexp:w}=h;r.push({name:m,repeatable:g,optional:v});const k=w||Kc;if(k!==Kc){F+=10;try{new RegExp(`(${k})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${k}): `+C.message)}}let b=g?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(b=v&&p.length<2?`(?:/${b})`:"/"+b),v&&(b+="?"),l+=b,F+=20,v&&(F+=-8),g&&(F+=-20),k===".*"&&(F+=-50)}d.push(F)}o.push(d)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(p){const d=p.match(a),f={};if(!d)return null;for(let h=1;h<d.length;h++){const F=d[h]||"",m=r[h-1];f[m.name]=F&&m.repeatable?F.split("/"):F}return f}function c(p){let d="",f=!1;for(const h of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const F of h)if(F.type===0)d+=F.value;else if(F.type===1){const{value:m,repeatable:g,optional:v}=F,w=m in p?p[m]:"";if(At(w)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const k=At(w)?w.join("/"):w;if(!k)if(v)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=k}}return d||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function j8(e,t){let s=0;for(;s<e.length&&s<t.length;){const o=t[s]-e[s];if(o)return o;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function N8(e,t){let s=0;const o=e.score,l=t.score;for(;s<o.length&&s<l.length;){const r=j8(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(Yc(o))return 1;if(Yc(l))return-1}return l.length-o.length}function Yc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const V8={type:0,value:""},U8=/[a-zA-Z0-9_]/;function J8(e){if(!e)return[[]];if(e==="/")return[[V8]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(F){throw new Error(`ERR (${s})/"${p}": ${F}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,p="",d="";function f(){p&&(s===0?r.push({type:0,value:p}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(p&&f(),a()):c===":"?(f(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:U8.test(c)?h():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${p}"`),f(),a(),l}function q8(e,t,s){const o=D8(J8(e.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&we(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Ee(o,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function z8(e,t){const s=[],o=new Map;t=Qc({strict:!1,end:!0,sensitive:!1},t);function l(d){return o.get(d)}function r(d,f,h){const F=!h,m=X8(d);Z8(m,f),m.aliasOf=h&&h.record;const g=Qc(t,d),v=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const C of b)v.push(Ee({},m,{components:h?h.record.components:m.components,path:C,aliasOf:h?h.record:m}))}let w,k;for(const b of v){const{path:C}=b;if(f&&C[0]!=="/"){const T=f.record.path,P=T[T.length-1]==="/"?"":"/";b.path=f.record.path+(C&&P+C)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=q8(b,f,g),f&&C[0]==="/"&&G8(w,f),h?(h.alias.push(w),Y8(h,w)):(k=k||w,k!==w&&k.alias.push(w),F&&d.name&&!Gc(w)&&a(d.name)),m.children){const T=m.children;for(let P=0;P<T.length;P++)r(T[P],w,h&&h.children[P])}h=h||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return k?()=>{a(k)}:po}function a(d){if(Ld(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let f=0;for(;f<s.length&&N8(d,s[f])>=0&&(d.record.path!==s[f].record.path||!Md(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Gc(d)&&o.set(d.record.name,d)}function p(d,f){let h,F={},m,g;if("name"in d&&d.name){if(h=o.get(d.name),!h)throw Ms(1,{location:d});{const k=Object.keys(d.params||{}).filter(b=>!h.keys.find(C=>C.name===b));k.length&&we(`Discarded invalid param(s) "${k.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=h.record.name,F=Ee(Zc(f.params,h.keys.filter(k=>!k.optional).map(k=>k.name)),d.params&&Zc(d.params,h.keys.map(k=>k.name))),m=h.stringify(F)}else if("path"in d)m=d.path,m.startsWith("/")||we(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(k=>k.re.test(m)),h&&(F=h.parse(m),g=h.record.name);else{if(h=f.name?o.get(f.name):s.find(k=>k.re.test(f.path)),!h)throw Ms(1,{location:d,currentLocation:f});g=h.record.name,F=Ee({},f.params,d.params),m=h.stringify(F)}const v=[];let w=h;for(;w;)v.unshift(w.record),w=w.parent;return{name:g,path:m,params:F,matched:v,meta:K8(v)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:p,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function Zc(e,t){const s={};for(const o of t)o in e&&(s[o]=e[o]);return s}function X8(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:W8(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function W8(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const o in e.components)t[o]=typeof s=="boolean"?s:s[o];return t}function Gc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function K8(e){return e.reduce((t,s)=>Ee(t,s.meta),{})}function Qc(e,t){const s={};for(const o in e)s[o]=o in t?t[o]:e[o];return s}function Fa(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function Y8(e,t){for(const s of e.keys)if(!s.optional&&!t.keys.find(Fa.bind(null,s)))return we(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!e.keys.find(Fa.bind(null,s)))return we(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function Z8(e,t){t&&t.record.name&&!e.name&&!e.path&&we(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function G8(e,t){for(const s of t.keys)if(!e.keys.find(Fa.bind(null,s)))return we(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function Md(e,t){return t.children.some(s=>s===e||Md(e,s))}const Dd=/#/g,Q8=/&/g,e1=/\//g,t1=/=/g,n1=/\?/g,jd=/\+/g,s1=/%5B/g,o1=/%5D/g,Nd=/%5E/g,l1=/%60/g,Vd=/%7B/g,r1=/%7C/g,Ud=/%7D/g,a1=/%20/g;function ui(e){return encodeURI(""+e).replace(r1,"|").replace(s1,"[").replace(o1,"]")}function i1(e){return ui(e).replace(Vd,"{").replace(Ud,"}").replace(Nd,"^")}function ma(e){return ui(e).replace(jd,"%2B").replace(a1,"+").replace(Dd,"%23").replace(Q8,"%26").replace(l1,"`").replace(Vd,"{").replace(Ud,"}").replace(Nd,"^")}function c1(e){return ma(e).replace(t1,"%3D")}function u1(e){return ui(e).replace(Dd,"%23").replace(n1,"%3F")}function p1(e){return e==null?"":u1(e).replace(e1,"%2F")}function Ro(e){try{return decodeURIComponent(""+e)}catch{we(`Error decoding "${e}". Using original value`)}return""+e}function d1(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(jd," "),a=r.indexOf("="),i=Ro(a<0?r:r.slice(0,a)),c=a<0?null:Ro(r.slice(a+1));if(i in t){let p=t[i];At(p)||(p=t[i]=[p]),p.push(c)}else t[i]=c}return t}function eu(e){let t="";for(let s in e){const o=e[s];if(s=c1(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(At(o)?o.map(r=>r&&ma(r)):[o&&ma(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function f1(e){const t={};for(const s in e){const o=e[s];o!==void 0&&(t[s]=At(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const h1=Symbol("router view location matched"),tu=Symbol("router view depth"),pi=Symbol("router"),Jd=Symbol("route location"),ya=Symbol("router view location");function Ks(){let e=[];function t(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function xn(e,t,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(Ms(4,{from:s,to:t})):f instanceof Error?i(f):H8(f)?i(Ms(2,{from:t,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},p=e.call(o&&o.instances[l],t,s,F1(c,t,s));let d=Promise.resolve(p);if(e.length<3&&(d=d.then(c)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(h=>c._called?h:(we(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!c._called){we(f),i(new Error("Invalid navigation guard"));return}}d.catch(f=>i(f))})}function F1(e,t,s){let o=0;return function(){o++===1&&we(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function xr(e,t,s,o){const l=[];for(const r of e){!r.components&&!r.children.length&&we(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw we(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){we(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,we(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(m1(i)){const p=(i.__vccOpts||i)[t];p&&l.push(xn(p,s,o,r,a))}else{let c=i();"catch"in c||(we(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=F8(p)?p.default:p;r.components[a]=d;const h=(d.__vccOpts||d)[t];return h&&xn(h,s,o,r,a)()}))}}}return l}function m1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function nu(e){const t=K(pi),s=K(Jd),o=R(()=>t.resolve(x(e.to))),l=R(()=>{const{matched:c}=o.value,{length:p}=c,d=c[p-1],f=s.matched;if(!d||!f.length)return-1;const h=f.findIndex(Ln.bind(null,d));if(h>-1)return h;const F=su(c[p-2]);return p>1&&su(d)===F&&f[f.length-1].path!==F?f.findIndex(Ln.bind(null,c[p-2])):h}),r=R(()=>l.value>-1&&_1(s.params,o.value.params)),a=R(()=>l.value>-1&&l.value===s.matched.length-1&&Od(s.params,o.value.params));function i(c={}){return v1(c)?t[x(e.replace)?"replace":"push"](x(e.to)).catch(po):Promise.resolve()}if(an){const c=$t();if(c){const p={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(p),ds(()=>{p.route=o.value,p.isActive=r.value,p.isExactActive=a.value},{flush:"post"})}}return{route:o,href:R(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const y1=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nu,setup(e,{slots:t}){const s=Ve(nu(e)),{options:o}=K(pi),l=R(()=>({[ou(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[ou(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&t.default(s);return e.custom?r:Ge("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),g1=y1;function v1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _1(e,t){for(const s in t){const o=t[s],l=e[s];if(typeof o=="string"){if(o!==l)return!1}else if(!At(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function su(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ou=(e,t,s)=>e??t??s,k1=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){x1();const o=K(ya),l=R(()=>e.route||o.value),r=K(tu,0),a=R(()=>{let p=x(r);const{matched:d}=l.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),i=R(()=>l.value.matched[a.value]);wt(tu,R(()=>a.value+1)),wt(h1,i),wt(ya,l);const c=z();return me(()=>[c.value,i.value,e.name],([p,d,f],[h,F,m])=>{d&&(d.instances[f]=p,F&&F!==d&&p&&p===h&&(d.leaveGuards.size||(d.leaveGuards=F.leaveGuards),d.updateGuards.size||(d.updateGuards=F.updateGuards))),p&&d&&(!F||!Ln(d,F)||!h)&&(d.enterCallbacks[f]||[]).forEach(g=>g(p))},{flush:"post"}),()=>{const p=l.value,d=e.name,f=i.value,h=f&&f.components[d];if(!h)return lu(s.default,{Component:h,route:p});const F=f.props[d],m=F?F===!0?p.params:typeof F=="function"?F(p):F:null,v=Ge(h,Ee({},m,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(an&&v.ref){const w={depth:a.value,name:f.name,path:f.path,meta:f.meta};(At(v.ref)?v.ref.map(b=>b.i):[v.ref.i]).forEach(b=>{b.__vrv_devtools=w})}return lu(s.default,{Component:v,route:p})||v}}});function lu(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const b1=k1;function x1(){const e=$t(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const s=t==="KeepAlive"?"keep-alive":"transition";we(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Ys(e,t){const s=Ee({},e,{matched:e.matched.map(o=>I1(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:s}}}function al(e){return{_custom:{display:e}}}let w1=0;function C1(e,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=w1++;h8({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ys(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const h=f.__vrv_devtools;d.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:qd})}At(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(h=>{let F=Wd,m="";h.isExactActive?(F=Xd,m="This is exactly active"):h.isActive&&(F=zd,m="This link is active"),d.tags.push({label:h.route.path,textColor:0,tooltip:m,backgroundColor:F})}))}),me(t.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;t.beforeEach((d,f)=>{const h={guard:al("beforeEach"),from:Ys(f,"Current Location during this navigation"),to:Ys(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:h,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,h)=>{const F={guard:al("afterEach")};h?(F.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},F.status=al("❌")):F.status=al("✅"),F.from=Ys(f,"Current Location during this navigation"),F.to=Ys(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:F,logType:h?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!p)return;const d=p;let f=s.getRoutes().filter(h=>!h.parent);f.forEach(Zd),d.filter&&(f=f.filter(h=>ga(h,d.filter.toLowerCase()))),f.forEach(h=>Yd(h,t.currentRoute.value)),d.rootNodes=f.map(Kd)}let p;l.on.getInspectorTree(d=>{p=d,d.app===e&&d.inspectorId===i&&c()}),l.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===i){const h=s.getRoutes().find(F=>F.record.__vd_id===d.nodeId);h&&(d.state={options:E1(h)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function S1(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function E1(e){const{record:t}=e,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${S1(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const qd=15485081,zd=2450411,Xd=8702998,A1=2282478,Wd=16486972,$1=6710886;function Kd(e){const t=[],{record:s}=e;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:A1}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Wd}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:qd}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Xd}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:zd}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:$1});let o=s.__vd_id;return o==null&&(o=String(R1++),s.__vd_id=o),{id:o,label:s.path,tags:t,children:e.children.map(Kd)}}let R1=0;const T1=/^\/(.*)\/([a-z]*)$/;function Yd(e,t){const s=t.matched.length&&Ln(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=t.matched.some(o=>Ln(o,e.record))),e.children.forEach(o=>Yd(o,t))}function Zd(e){e.__vd_match=!1,e.children.forEach(Zd)}function ga(e,t){const s=String(e.re).match(T1);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return e.children.forEach(a=>ga(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const l=e.record.path.toLowerCase(),r=Ro(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>ga(a,t))}function I1(e,t){const s={};for(const o in e)t.includes(o)||(s[o]=e[o]);return s}function H1(e){const t=z8(e.routes,e),s=e.parseQuery||d1,o=e.stringifyQuery||eu,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Ks(),a=Ks(),i=Ks(),c=Gt(vn);let p=vn;an&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=kr.bind(null,A=>""+A),f=kr.bind(null,p1),h=kr.bind(null,Ro);function F(A,Z){let U,Q;return Ld(A)?(U=t.getRecordMatcher(A),Q=Z):Q=A,t.addRoute(Q,U)}function m(A){const Z=t.getRecordMatcher(A);Z?t.removeRoute(Z):we(`Cannot remove non-existent route "${String(A)}"`)}function g(){return t.getRoutes().map(A=>A.record)}function v(A){return!!t.getRecordMatcher(A)}function w(A,Z){if(Z=Ee({},Z||c.value),typeof A=="string"){const ue=br(s,A,Z.path),y=t.resolve({path:ue.path},Z),_=l.createHref(ue.fullPath);return _.startsWith("//")?we(`Location "${A}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):y.matched.length||we(`No match found for location with path "${A}"`),Ee(ue,y,{params:h(y.params),hash:Ro(ue.hash),redirectedFrom:void 0,href:_})}let U;if("path"in A)"params"in A&&!("name"in A)&&Object.keys(A.params).length&&we(`Path "${A.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),U=Ee({},A,{path:br(s,A.path,Z.path).path});else{const ue=Ee({},A.params);for(const y in ue)ue[y]==null&&delete ue[y];U=Ee({},A,{params:f(A.params)}),Z.params=f(Z.params)}const Q=t.resolve(U,Z),ve=A.hash||"";ve&&!ve.startsWith("#")&&we(`A \`hash\` should always start with the character "#". Replace "${ve}" with "#${ve}".`),Q.params=d(h(Q.params));const xe=g8(o,Ee({},A,{hash:i1(ve),path:Q.path})),de=l.createHref(xe);return de.startsWith("//")?we(`Location "${A}" resolved to "${de}". A resolved location cannot start with multiple slashes.`):Q.matched.length||we(`No match found for location with path "${"path"in A?A.path:A}"`),Ee({fullPath:xe,hash:ve,query:o===eu?f1(A.query):A.query||{}},Q,{redirectedFrom:void 0,href:de})}function k(A){return typeof A=="string"?br(s,A,c.value.path):Ee({},A)}function b(A,Z){if(p!==A)return Ms(8,{from:Z,to:A})}function C(A){return V(A)}function T(A){return C(Ee(k(A),{replace:!0}))}function P(A){const Z=A.matched[A.matched.length-1];if(Z&&Z.redirect){const{redirect:U}=Z;let Q=typeof U=="function"?U(A):U;if(typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=k(Q):{path:Q},Q.params={}),!("path"in Q)&&!("name"in Q))throw we(`Invalid redirect found:
${JSON.stringify(Q,null,2)}
 when navigating to "${A.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ee({query:A.query,hash:A.hash,params:"path"in Q?{}:A.params},Q)}}function V(A,Z){const U=p=w(A),Q=c.value,ve=A.state,xe=A.force,de=A.replace===!0,ue=P(U);if(ue)return V(Ee(k(ue),{state:typeof ue=="object"?Ee({},ve,ue.state):ve,force:xe,replace:de}),Z||U);const y=U;y.redirectedFrom=Z;let _;return!xe&&Jc(o,Q,U)&&(_=Ms(16,{to:y,from:Q}),Pe(Q,Q,!0,!1)),(_?Promise.resolve(_):D(y,Q)).catch(S=>sn(S)?sn(S,2)?S:ge(S):Y(S,y,Q)).then(S=>{if(S){if(sn(S,2))return Jc(o,w(S.to),y)&&Z&&(Z._count=Z._count?Z._count+1:1)>10?(we(`Detected an infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${y.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):V(Ee({replace:de},k(S.to),{state:typeof S.to=="object"?Ee({},ve,S.to.state):ve,force:xe}),Z||y)}else S=ie(y,Q,!0,de,ve);return G(y,Q,S),S})}function $(A,Z){const U=b(A,Z);return U?Promise.reject(U):Promise.resolve()}function D(A,Z){let U;const[Q,ve,xe]=O1(A,Z);U=xr(Q.reverse(),"beforeRouteLeave",A,Z);for(const ue of Q)ue.leaveGuards.forEach(y=>{U.push(xn(y,A,Z))});const de=$.bind(null,A,Z);return U.push(de),gs(U).then(()=>{U=[];for(const ue of r.list())U.push(xn(ue,A,Z));return U.push(de),gs(U)}).then(()=>{U=xr(ve,"beforeRouteUpdate",A,Z);for(const ue of ve)ue.updateGuards.forEach(y=>{U.push(xn(y,A,Z))});return U.push(de),gs(U)}).then(()=>{U=[];for(const ue of A.matched)if(ue.beforeEnter&&!Z.matched.includes(ue))if(At(ue.beforeEnter))for(const y of ue.beforeEnter)U.push(xn(y,A,Z));else U.push(xn(ue.beforeEnter,A,Z));return U.push(de),gs(U)}).then(()=>(A.matched.forEach(ue=>ue.enterCallbacks={}),U=xr(xe,"beforeRouteEnter",A,Z),U.push(de),gs(U))).then(()=>{U=[];for(const ue of a.list())U.push(xn(ue,A,Z));return U.push(de),gs(U)}).catch(ue=>sn(ue,8)?ue:Promise.reject(ue))}function G(A,Z,U){for(const Q of i.list())Q(A,Z,U)}function ie(A,Z,U,Q,ve){const xe=b(A,Z);if(xe)return xe;const de=Z===vn,ue=an?history.state:{};U&&(Q||de?l.replace(A.fullPath,Ee({scroll:de&&ue&&ue.scroll},ve)):l.push(A.fullPath,ve)),c.value=A,Pe(A,Z,U,de),ge()}let X;function ce(){X||(X=l.listen((A,Z,U)=>{if(!mn.listening)return;const Q=w(A),ve=P(Q);if(ve){V(Ee(ve,{replace:!0}),Q).catch(po);return}p=Q;const xe=c.value;an&&S8(zc(xe.fullPath,U.delta),tr()),D(Q,xe).catch(de=>sn(de,12)?de:sn(de,2)?(V(de.to,Q).then(ue=>{sn(ue,20)&&!U.delta&&U.type===$o.pop&&l.go(-1,!1)}).catch(po),Promise.reject()):(U.delta&&l.go(-U.delta,!1),Y(de,Q,xe))).then(de=>{de=de||ie(Q,xe,!1),de&&(U.delta&&!sn(de,8)?l.go(-U.delta,!1):U.type===$o.pop&&sn(de,20)&&l.go(-1,!1)),G(Q,xe,de)}).catch(po)}))}let Ie=Ks(),ze=Ks(),Me;function Y(A,Z,U){ge(A);const Q=ze.list();return Q.length?Q.forEach(ve=>ve(A,Z,U)):(we("uncaught error during route navigation:"),console.error(A)),Promise.reject(A)}function re(){return Me&&c.value!==vn?Promise.resolve():new Promise((A,Z)=>{Ie.add([A,Z])})}function ge(A){return Me||(Me=!A,ce(),Ie.list().forEach(([Z,U])=>A?U(A):Z()),Ie.reset()),A}function Pe(A,Z,U,Q){const{scrollBehavior:ve}=e;if(!an||!ve)return Promise.resolve();const xe=!U&&E8(zc(A.fullPath,0))||(Q||!U)&&history.state&&history.state.scroll||null;return nt().then(()=>ve(A,Z,xe)).then(de=>de&&C8(de)).catch(de=>Y(de,A,Z))}const _t=A=>l.go(A);let ot;const ht=new Set,mn={currentRoute:c,listening:!0,addRoute:F,removeRoute:m,hasRoute:v,getRoutes:g,resolve:w,options:e,push:C,replace:T,go:_t,back:()=>_t(-1),forward:()=>_t(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:ze.add,isReady:re,install(A){const Z=this;A.component("RouterLink",g1),A.component("RouterView",b1),A.config.globalProperties.$router=Z,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>x(c)}),an&&!ot&&c.value===vn&&(ot=!0,C(l.location).catch(ve=>{we("Unexpected error when starting the router:",ve)}));const U={};for(const ve in vn)U[ve]=R(()=>c.value[ve]);A.provide(pi,Z),A.provide(Jd,Ve(U)),A.provide(ya,c);const Q=A.unmount;ht.add(A),A.unmount=function(){ht.delete(A),ht.size<1&&(p=vn,X&&X(),X=null,c.value=vn,ot=!1,Me=!1),Q()},an&&C1(A,Z,t)}};return mn}function gs(e){return e.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function O1(e,t){const s=[],o=[],l=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const i=t.matched[a];i&&(e.matched.find(p=>Ln(p,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(t.matched.find(p=>Ln(p,c))||l.push(c))}return[s,o,l]}const wr=z(!1),ho=z(!1),Cs=z(!1),P1=z(!0),va=Ev({xs:460,...bv}),rs=r8(),Gd=Wv(),L1=R(()=>rs.height.value-rs.width.value/Rn>180),Qd=qv(en?document.body:null),Is=kv(),B1=R(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Is.value)==null?void 0:e.tagName)||"")||((t=Is.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),M1=R(()=>{var e;return["BUTTON","A"].includes(((e=Is.value)==null?void 0:e.tagName)||"")});Ut("slidev-camera","default");Ut("slidev-mic","default");const ml=Ut("slidev-scale",0),ct=Ut("slidev-show-overview",!1),Cr=Ut("slidev-presenter-cursor",!0),ru=Ut("slidev-show-editor",!1);Ut("slidev-editor-width",en?window.innerWidth*.4:100);const ef=$d(ct);function au(e,t,s,o=l=>l){return e*o(.5-t*(.5-s))}function D1(e){return[-e[0],-e[1]]}function Dt(e,t){return[e[0]+t[0],e[1]+t[1]]}function It(e,t){return[e[0]-t[0],e[1]-t[1]]}function Mt(e,t){return[e[0]*t,e[1]*t]}function j1(e,t){return[e[0]/t,e[1]/t]}function Zs(e){return[e[1],-e[0]]}function iu(e,t){return e[0]*t[0]+e[1]*t[1]}function N1(e,t){return e[0]===t[0]&&e[1]===t[1]}function V1(e){return Math.hypot(e[0],e[1])}function U1(e){return e[0]*e[0]+e[1]*e[1]}function cu(e,t){return U1(It(e,t))}function tf(e){return j1(e,V1(e))}function J1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Gs(e,t,s){let o=Math.sin(s),l=Math.cos(s),r=e[0]-t[0],a=e[1]-t[1],i=r*l-a*o,c=r*o+a*l;return[i+t[0],c+t[1]]}function _a(e,t,s){return Dt(e,Mt(It(t,e),s))}function uu(e,t,s){return Dt(e,Mt(t,s))}var{min:vs,PI:q1}=Math,pu=.275,Qs=q1+1e-4;function z1(e,t={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=Y=>Y,start:i={},end:c={},last:p=!1}=t,{cap:d=!0,easing:f=Y=>Y*(2-Y)}=i,{cap:h=!0,easing:F=Y=>--Y*Y*Y+1}=c;if(e.length===0||s<=0)return[];let m=e[e.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,v=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,w=Math.pow(s*o,2),k=[],b=[],C=e.slice(0,10).reduce((Y,re)=>{let ge=re.pressure;if(r){let Pe=vs(1,re.distance/s),_t=vs(1,1-Pe);ge=vs(1,Y+(_t-Y)*(Pe*pu))}return(Y+ge)/2},e[0].pressure),T=au(s,l,e[e.length-1].pressure,a),P,V=e[0].vector,$=e[0].point,D=$,G=$,ie=D,X=!1;for(let Y=0;Y<e.length;Y++){let{pressure:re}=e[Y],{point:ge,vector:Pe,distance:_t,runningLength:ot}=e[Y];if(Y<e.length-1&&m-ot<3)continue;if(l){if(r){let xe=vs(1,_t/s),de=vs(1,1-xe);re=vs(1,C+(de-C)*(xe*pu))}T=au(s,l,re,a)}else T=s/2;P===void 0&&(P=T);let ht=ot<g?f(ot/g):1,mn=m-ot<v?F((m-ot)/v):1;T=Math.max(.01,T*Math.min(ht,mn));let A=(Y<e.length-1?e[Y+1]:e[Y]).vector,Z=Y<e.length-1?iu(Pe,A):1,U=iu(Pe,V)<0&&!X,Q=Z!==null&&Z<0;if(U||Q){let xe=Mt(Zs(V),T);for(let de=1/13,ue=0;ue<=1;ue+=de)G=Gs(It(ge,xe),ge,Qs*ue),k.push(G),ie=Gs(Dt(ge,xe),ge,Qs*-ue),b.push(ie);$=G,D=ie,Q&&(X=!0);continue}if(X=!1,Y===e.length-1){let xe=Mt(Zs(Pe),T);k.push(It(ge,xe)),b.push(Dt(ge,xe));continue}let ve=Mt(Zs(_a(A,Pe,Z)),T);G=It(ge,ve),(Y<=1||cu($,G)>w)&&(k.push(G),$=G),ie=Dt(ge,ve),(Y<=1||cu(D,ie)>w)&&(b.push(ie),D=ie),C=re,V=Pe}let ce=e[0].point.slice(0,2),Ie=e.length>1?e[e.length-1].point.slice(0,2):Dt(e[0].point,[1,1]),ze=[],Me=[];if(e.length===1){if(!(g||v)||p){let Y=uu(ce,tf(Zs(It(ce,Ie))),-(P||T)),re=[];for(let ge=1/13,Pe=ge;Pe<=1;Pe+=ge)re.push(Gs(Y,ce,Qs*2*Pe));return re}}else{if(!(g||v&&e.length===1))if(d)for(let re=1/13,ge=re;ge<=1;ge+=re){let Pe=Gs(b[0],ce,Qs*ge);ze.push(Pe)}else{let re=It(k[0],b[0]),ge=Mt(re,.5),Pe=Mt(re,.51);ze.push(It(ce,ge),It(ce,Pe),Dt(ce,Pe),Dt(ce,ge))}let Y=Zs(D1(e[e.length-1].vector));if(v||g&&e.length===1)Me.push(Ie);else if(h){let re=uu(Ie,Y,T);for(let ge=1/29,Pe=ge;Pe<1;Pe+=ge)Me.push(Gs(re,Ie,Qs*3*Pe))}else Me.push(Dt(Ie,Mt(Y,T)),Dt(Ie,Mt(Y,T*.99)),It(Ie,Mt(Y,T*.99)),It(Ie,Mt(Y,T)))}return k.concat(Me,b.reverse(),ze)}function X1(e,t={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:F,y:m,pressure:g=.5})=>[F,m,g]);if(i.length===2){let F=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(_a(i[0],F,m/4))}i.length===1&&(i=[...i,[...Dt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=c[0],h=i.length-1;for(let F=1;F<i.length;F++){let m=r&&F===h?i[F].slice(0,2):_a(f.point,i[F],a);if(N1(f.point,m))continue;let g=J1(m,f.point);if(d+=g,F<h&&!p){if(d<l)continue;p=!0}f={point:m,pressure:i[F][2]>=0?i[F][2]:.5,vector:tf(It(f.point,m)),distance:g,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function W1(e,t={}){return z1(X1(e,t),t)}var K1=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let o=0,l=s.length;o<l;o++)s[o](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>t!==l)}}});function Hl(e,t){return e-t}function Y1(e){return e<0?-1:1}function Ol(e){return[Math.abs(e),Y1(e)]}function nf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Z1=2,cn=Z1,js=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(cn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},G1=class extends js{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=W1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[l,r],a,i)=>{const[c,p]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+p)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Q1=class extends js{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ol(e.x-this.start.x),[o,l]=Ol(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Hl),[i,c]=[this.start.y,this.start.y+o*l].sort(Hl);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function sf(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var e_=class extends js{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=nf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(sf(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,s=this.start.y+l):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},t_=class extends js{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ol(e.x-this.start.x),[o,l]=Ol(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Hl),[i,c]=[this.start.y,this.start.y+o*l].sort(Hl);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function n_(e,t){const s=e.x-t.x,o=e.y-t.y;return s*s+o*o}function s_(e,t,s){let o=t.x,l=t.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((e.x-o)*r+(e.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=e.x-o,a=e.y-l,r*r+a*a}function o_(e,t){let s=e[0];const o=[s];let l;for(let r=1,a=e.length;r<a;r++)l=e[r],n_(l,s)>t&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function ka(e,t,s,o,l){let r=o,a=0;for(let i=t+1;i<s;i++){const c=s_(e[i],e[t],e[s]);c>r&&(a=i,r=c)}r>o&&(a-t>1&&ka(e,t,a,o,l),l.push(e[a]),s-a>1&&ka(e,a,s,o,l))}function l_(e,t){const s=e.length-1,o=[e[0]];return ka(e,0,s,t,o),o.push(e[s]),o}function du(e,t,s=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=s?e:o_(e,o),e=l_(e,o),e}var r_=class extends js{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=nf();const t=sf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=du(this.points,1,!0),this.count=0),this.attr("d",hu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",hu(du(this.points,1,!0))),!e.getTotalLength()))}};function a_(e,t){const s=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function fu(e,t,s,o){const l=t||e,r=s||e,a=.2,i=a_(l,r),c=i.angle+(o?Math.PI:0),p=i.length*a,d=e.x+Math.cos(c)*p,f=e.y+Math.sin(c)*p;return{x:d,y:f}}function i_(e,t,s){const o=fu(s[t-1],s[t-2],e),l=fu(e,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(cn)},${o.y.toFixed(cn)} ${l.x.toFixed(cn)},${l.y.toFixed(cn)} ${e.x.toFixed(cn)},${e.y.toFixed(cn)}`}function hu(e){return e.reduce((t,s,o,l)=>o===0?`M ${s.x.toFixed(cn)},${s.y.toFixed(cn)}`:`${t} ${i_(s,o,l)}`,"")}var c_=class extends js{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),p=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:i,element:o||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,o=e.x2,l=t.x1,r=t.x2,a=e.y1,i=e.y2,c=t.y1,p=t.y2,d=(s-o)*(c-p)-(a-i)*(l-r),f=(s*i-a*o)*(l-r)-(s-o)*(l*p-c*r),h=(s*i-a*o)*(c-p)-(a-i)*(l*p-c*r),F=(m,g,v)=>m>=g&&m<=v?!0:m>=v&&m<=g;if(d===0)return!1;{const m={x:f/d,y:h/d};return F(m.x,s,o)&&F(m.y,a,i)&&F(m.x,l,r)&&F(m.y,c,p)}}};function u_(e){return{draw:new r_(e),stylus:new G1(e),line:new e_(e),rectangle:new t_(e),ellipse:new Q1(e),eraseLine:new c_(e)}}var p_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=K1(),this._models=u_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function d_(e){return new p_(e)}const ba=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Zn=Ut("slidev-drawing-enabled",!1);Ut("slidev-drawing-pinned",!1);const f_=z(!1),h_=z(!1),F_=z(!1),To=z(!1),Ss=nv(Ut("slidev-drawing-brush",{color:ba[0],size:4,mode:"stylus"})),Fu=z("stylus"),of=R(()=>Se.drawings.syncAll||Ct.value);let Io=!1;const eo=R({get(){return Fu.value},set(e){Fu.value=e,e==="arrow"?(Ss.mode="line",Ss.arrowEnd=!0):(Ss.mode=e,Ss.arrowEnd=!1)}}),m_=Ve({brush:Ss,acceptsInputTypes:R(()=>Zn.value&&(!Se.drawings.presenterOnly||Ct.value)?void 0:["pen"]),coordinateTransform:!1}),ft=Jl(d_(m_));function y_(){ft.clear(),of.value&&Cd(qe.value,"")}function di(){var e;h_.value=ft.canRedo(),f_.value=ft.canUndo(),F_.value=!!((e=ft.el)!=null&&e.children.length)}function g_(e){Io=!0;const t=Tl[e||qe.value];t!=null?ft.load(t):ft.clear(),di(),Io=!1}ft.on("changed",()=>{if(di(),!Io){const e=ft.dump(),t=qe.value;(Tl[t]||"")!==e&&of.value&&Cd(t,ft.dump())}});Jg(e=>{Io=!0,e[qe.value]!=null&&ft.load(e[qe.value]||""),Io=!1,di()});nt(()=>{me(qe,()=>{ft.mounted&&g_()},{immediate:!0})});ft.on("start",()=>To.value=!0);ft.on("end",()=>To.value=!1);window.addEventListener("keydown",e=>{if(!Zn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ft.redo():ft.undo():e.code==="Escape"?Zn.value=!1:e.code==="KeyL"&&t?eo.value="line":e.code==="KeyA"&&t?eo.value="arrow":e.code==="KeyS"&&t?eo.value="stylus":e.code==="KeyR"&&t?eo.value="rectangle":e.code==="KeyE"&&t?eo.value="ellipse":e.code==="KeyC"&&t?y_():e.code.startsWith("Digit")&&t&&+e.code[5]<=ba.length?Ss.color=ba[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return R(()=>e.every(t=>tn(t)))}function bt(e){return R(()=>!tn(e))}const mu=Mv(),Sr=Ut("slidev-color-schema","auto"),xa=R(()=>Se.colorSchema!=="auto"),fi=R({get(){return xa.value?Se.colorSchema==="dark":Sr.value==="auto"?mu.value:Sr.value==="dark"},set(e){xa.value||(Sr.value=e===mu.value?"auto":e?"dark":"light")}}),lf=$d(fi);en&&me(fi,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const yl=z(1),gl=R(()=>We.length-1),Et=z(0),hi=z(0);function v_(){Et.value>yl.value&&(Et.value-=1)}function __(){Et.value<gl.value&&(Et.value+=1)}function k_(){if(Et.value>yl.value){let e=Et.value-hi.value;e<yl.value&&(e=yl.value),Et.value=e}}function b_(){if(Et.value<gl.value){let e=Et.value+hi.value;e>gl.value&&(e=gl.value),Et.value=e}}function x_(){const{escape:e,space:t,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:p,o:d}=Gd;let f=[{name:"next_space",key:Ye(t,bt(s)),fn:In,autoRepeat:!0},{name:"prev_space",key:Ye(t,s),fn:Hn,autoRepeat:!0},{name:"next_right",key:Ye(l,bt(s),bt(ct)),fn:In,autoRepeat:!0},{name:"prev_left",key:Ye(o,bt(s),bt(ct)),fn:Hn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:In,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Hn,autoRepeat:!0},{name:"next_down",key:Ye(a,bt(ct)),fn:Oo,autoRepeat:!0},{name:"prev_up",key:Ye(r,bt(ct)),fn:()=>Po(!1),autoRepeat:!0},{name:"next_shift",key:Ye(l,s),fn:Oo,autoRepeat:!0},{name:"prev_shift",key:Ye(o,s),fn:()=>Po(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,bt(Zn)),fn:lf},{name:"toggle_overview",key:Ye(d,bt(Zn)),fn:ef},{name:"hide_overview",key:Ye(e,bt(Zn)),fn:()=>ct.value=!1},{name:"goto",key:Ye(p,bt(Zn)),fn:()=>Cs.value=!Cs.value},{name:"next_overview",key:Ye(l,ct),fn:__},{name:"prev_overview",key:Ye(o,ct),fn:v_},{name:"up_overview",key:Ye(r,ct),fn:k_},{name:"down_overview",key:Ye(a,ct),fn:b_},{name:"goto_from_overview",key:Ye(i,ct),fn:()=>{Ds(Et.value),ct.value=!1}}];const h=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&h.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const rf=Ye(bt(B1),bt(M1),P1);function w_(e,t,s=!1){typeof e=="string"&&(e=Gd[e]);const o=Ye(e,rf);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),t()};return me(o,a,{flush:"sync"})}function C_(e,t){return _v(e,s=>{rf.value&&(s.repeat||t())})}function S_(){const e=x_();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&w_(s.key,s.fn,s.autoRepeat)}),C_("f",()=>Qd.toggle())}const E_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A_=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),$_=[A_];function R_(e,t){return E(),q("svg",E_,$_)}const T_={name:"carbon-close",render:R_};function Fi(e,t=""){var l,r;const s=["slidev-page",t],o=(r=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const I_=Ce({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;K(se);const s=z(),o=Jv(s),l=R(()=>t.width?t.width:o.width.value),r=R(()=>t.width?t.width/Rn:o.height.value);t.width&&ds(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=R(()=>l.value/r.value),i=R(()=>t.scale&&!dn.value?t.scale:a.value<Rn?l.value/Tn:r.value*Rn/Tn),c=R(()=>({height:`${ai}px`,width:`${Tn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),p=R(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return wt(xd,i),(d,f)=>(E(),q("div",{id:"slide-container",ref_key:"root",ref:s,class:He(x(p))},[n("div",{id:"slide-content",style:dt(x(c))},[vt(d.$slots,"default")],4),vt(d.$slots,"controls")],2))}});const oe=(e,t)=>{const s=e.__vccOpts||e;for(const[o,l]of t)s[o]=l;return s},af=oe(I_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlideContainer.vue"]]),mi=Ce({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=Yt(e,"clicks",t),o=Yt(e,"clicksElements",t),l=Yt(e,"clicksDisabled",t),r=Yt(e,"clicksOrderMap",t);o.value.length=0,wt(Ag,e.route),wt($g,e.context),wt(co,s),wt(uo,l),wt(Wn,o),wt(aa,r)},render(){var e,t;return this.$props.is?Ge(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),H_=["innerHTML"],O_=Ce({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return K(se),(t,s)=>x(Tl)[e.page]?(E(),q("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:x(Tl)[e.page]},null,8,H_)):ye("v-if",!0)}}),P_=oe(O_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),L_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},B_=["onClick"],M_=Ce({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const s=e;K(se);const o=Yt(s,"modelValue",t);function l(){o.value=!1}function r(F){Ds(F),l()}function a(F){return F===Et.value}const i=va.smaller("xs"),c=va.smaller("sm"),p=4*16*2,d=2*16,f=R(()=>i.value?rs.width.value-p:c.value?(rs.width.value-p-d)/2:300),h=R(()=>Math.floor((rs.width.value-p)/(f.value+d)));return ds(()=>{Et.value=qe.value,hi.value=h.value}),(F,m)=>{const g=T_;return E(),q(Ae,null,[Qe(n("div",L_,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:dt(`grid-template-columns: repeat(auto-fit,minmax(${x(f)}px,1fr))`)},[(E(!0),q(Ae,null,Jo(x(We).slice(0,-1),(v,w)=>(E(),q("div",{key:v.path,class:"relative"},[n("div",{class:He(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(w+1),"border-gray-400":!a(w+1)}]),style:dt(x(ii)),onClick:k=>r(+v.path)},[(E(),te(af,{key:v.path,width:x(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:W(()=>[j(x(mi),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:He(x(Fi)(v)),route:v,context:"overview"},null,8,["is","class","route"]),j(P_,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],14,B_),n("div",{class:"absolute top-0 opacity-50",style:dt(`left: ${x(f)+5}px`)},as(w+1),5)]))),128))],4)],512),[[ls,x(o)]]),x(o)?(E(),q("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[j(g)])):ye("v-if",!0)],64)}}});const D_=oe(M_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),j_="/react-shared-ppt/assets/logo-b72bde5d.png",N_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},V_=Ce({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;K(se);const o=Yt(s,"modelValue",t);function l(){o.value=!1}return(r,a)=>(E(),te(Dp,null,[x(o)?(E(),q("div",N_,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),n("div",{class:He(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[vt(r.$slots,"default")],2)])):ye("v-if",!0)],1024))}}),U_=oe(V_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Modal.vue"]]),J_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},q_=["innerHTML"],z_=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:j_,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),u("dev ")])])],-1),X_=Ce({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;K(se);const o=Yt(s,"modelValue",t),l=R(()=>typeof Se.info=="string");return(r,a)=>(E(),te(U_,{modelValue:x(o),"onUpdate:modelValue":a[0]||(a[0]=i=>$e(o)?o.value=i:null),class:"px-6 py-4"},{default:W(()=>[n("div",J_,[x(l)?(E(),q("div",{key:0,class:"mb-4",innerHTML:x(Se).info},null,8,q_)):ye("v-if",!0),z_])]),_:1},8,["modelValue"]))}});const W_=oe(X_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/InfoDialog.vue"]]),K_=["disabled","onKeydown"],Y_=Ce({__name:"Goto",setup(e){K(se);const t=z(),s=z(""),o=R(()=>{if(s.value.startsWith("/"))return!!We.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=Sf.value}});function l(){o.value&&(s.value.startsWith("/")?Ds(s.value.substring(1)):Ds(+s.value)),r()}function r(){Cs.value=!1}return me(Cs,async a=>{var i,c;a?(await nt(),s.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),me(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(E(),q("div",{id:"slidev-goto-dialog",class:He(["fixed right-5 bg-main transform transition-all",x(Cs)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Qe(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!x(Cs),class:He(["outline-none bg-transparent",{"text-red-400":!x(o)&&s.value}]),placeholder:"Goto...",onKeydown:[_c(l,["enter"]),_c(r,["escape"])],onBlur:r},null,42,K_),[[Ey,s.value]])],2))}}),Z_=oe(Y_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Goto.vue"]]),G_=Ce({__name:"Controls",setup(e){K(se);const t=Gt(),s=Gt();return(o,l)=>(E(),q(Ae,null,[j(D_,{modelValue:x(ct),"onUpdate:modelValue":l[0]||(l[0]=r=>$e(ct)?ct.value=r:null)},null,8,["modelValue"]),j(Z_),x(t)?(E(),te(x(t),{key:0})):ye("v-if",!0),x(s)?(E(),te(x(s),{key:1,modelValue:x(wr),"onUpdate:modelValue":l[1]||(l[1]=r=>$e(wr)?wr.value=r:null)},null,8,["modelValue"])):ye("v-if",!0),x(Se).info?(E(),te(W_,{key:2,modelValue:x(ho),"onUpdate:modelValue":l[2]||(l[2]=r=>$e(ho)?ho.value=r:null)},null,8,["modelValue"])):ye("v-if",!0)],64))}}),Q_=oe(G_,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Controls.vue"]]),e2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t2=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),n2=[t2];function s2(e,t){return E(),q("svg",e2,n2)}const o2={name:"carbon-settings-adjust",render:s2},l2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r2=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),a2=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),i2=[r2,a2];function c2(e,t){return E(),q("svg",l2,i2)}const u2={name:"carbon-information",render:c2},p2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d2=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),f2=[d2];function h2(e,t){return E(),q("svg",p2,f2)}const F2={name:"carbon-download",render:h2},m2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y2=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),g2=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),v2=[y2,g2];function _2(e,t){return E(),q("svg",m2,v2)}const k2={name:"carbon-user-speaker",render:_2},b2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x2=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),w2=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),C2=[x2,w2];function S2(e,t){return E(),q("svg",b2,C2)}const E2={name:"carbon-presentation-file",render:S2},A2={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},$2=n("g",{fill:"currentColor"},[n("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),n("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),R2=[$2];function T2(e,t){return E(),q("svg",A2,R2)}const I2={name:"ph-cursor-duotone",render:T2},H2={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},O2=n("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),P2=[O2];function L2(e,t){return E(),q("svg",H2,P2)}const cf={name:"ph-cursor-fill",render:L2},B2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M2=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),D2=[M2];function j2(e,t){return E(),q("svg",B2,D2)}const N2={name:"carbon-sun",render:j2},V2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U2=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),J2=[U2];function q2(e,t){return E(),q("svg",V2,J2)}const z2={name:"carbon-moon",render:q2},X2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W2=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),K2=[W2];function Y2(e,t){return E(),q("svg",X2,K2)}const Z2={name:"carbon-apps",render:Y2},G2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q2=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),e0=[Q2];function t0(e,t){return E(),q("svg",G2,e0)}const n0={name:"carbon-arrow-right",render:t0},s0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o0=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),l0=[o0];function r0(e,t){return E(),q("svg",s0,l0)}const a0={name:"carbon-arrow-left",render:r0},i0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c0=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),u0=[c0];function p0(e,t){return E(),q("svg",i0,u0)}const d0={name:"carbon-maximize",render:p0},f0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h0=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),F0=[h0];function m0(e,t){return E(),q("svg",f0,F0)}const y0={name:"carbon-minimize",render:m0},g0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v0=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),_0=[v0];function k0(e,t){return E(),q("svg",g0,_0)}const b0={name:"carbon-checkmark",render:k0},x0={class:"select-list"},w0={class:"title"},C0={class:"items"},S0=["onClick"],E0=Ce({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;K(se);const o=Yt(s,"modelValue",t,{passive:!0});return(l,r)=>{const a=b0;return E(),q("div",x0,[n("div",w0,as(e.title),1),n("div",C0,[(E(!0),q(Ae,null,Jo(e.items,i=>(E(),q("div",{key:i.value,class:He(["item",{active:x(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[j(a,{class:He(["text-green-500",{"opacity-0":x(o)!==i.value}])},null,8,["class"]),u(" "+as(i.display||i.value),1)],10,S0))),128))])])}}});const A0=oe(E0,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SelectList.vue"]]),$0={class:"text-sm"},R0=Ce({__name:"Settings",setup(e){K(se);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(E(),q("div",$0,[j(A0,{modelValue:x(ml),"onUpdate:modelValue":o[0]||(o[0]=l=>$e(ml)?ml.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),T0=oe(R0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Settings.vue"]]),I0={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},H0=Ce({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;K(se);const o=Yt(s,"modelValue",t,{passive:!0}),l=z();return gv(l,()=>{o.value=!1}),(r,a)=>(E(),q("div",{ref_key:"el",ref:l,class:"flex relative"},[n("button",{class:He({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!x(o))},[vt(r.$slots,"button",{class:He({disabled:e.disabled})})],2),(E(),te(Dp,null,[x(o)?(E(),q("div",I0,[vt(r.$slots,"menu")])):ye("v-if",!0)],1024))],512))}}),O0=oe(H0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/MenuButton.vue"]]),P0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},L0={__name:"VerticalDivider",setup(e){return K(se),(t,s)=>(E(),q("div",P0))}},Er=oe(L0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),B0={render(){return[]}},M0={class:"slidev-icon-btn"},D0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},j0={class:"my-auto"},N0={class:"opacity-50"},V0=Ce({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;K(se);const s=va.smaller("md"),{isFullscreen:o,toggle:l}=Qd,r=R(()=>Ca.value?`?password=${Ca.value}`:""),a=R(()=>`/presenter/${qe.value}${r.value}`),i=R(()=>`/${qe.value}${r.value}`),c=z(),p=()=>{c.value&&Is.value&&c.value.contains(Is.value)&&Is.value.blur()},d=R(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Gt();return Gt(),(h,F)=>{const m=y0,g=d0,v=a0,w=n0,k=Z2,b=z2,C=N2,T=cf,P=I2,V=E2,$=Ps("RouterLink"),D=k2,G=F2,ie=u2,X=o2;return E(),q("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[n("div",{class:He(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",x(d)]),onMouseleave:p},[x(Nn)?ye("v-if",!0):(E(),q("button",{key:0,class:"slidev-icon-btn",onClick:F[0]||(F[0]=(...ce)=>x(l)&&x(l)(...ce))},[x(o)?(E(),te(m,{key:0})):(E(),te(g,{key:1}))])),n("button",{class:He(["slidev-icon-btn",{disabled:!x(oE)}]),onClick:F[1]||(F[1]=(...ce)=>x(Hn)&&x(Hn)(...ce))},[j(v)],2),n("button",{class:He(["slidev-icon-btn",{disabled:!x(sE)}]),title:"Next",onClick:F[2]||(F[2]=(...ce)=>x(In)&&x(In)(...ce))},[j(w)],2),x(Nn)?ye("v-if",!0):(E(),q("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:F[3]||(F[3]=ce=>x(ef)())},[j(k)])),x(xa)?ye("v-if",!0):(E(),q("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:F[4]||(F[4]=ce=>x(lf)())},[x(fi)?(E(),te(b,{key:0})):(E(),te(C,{key:1}))])),j(Er),x(Nn)?ye("v-if",!0):(E(),q(Ae,{key:3},[!x(Ct)&&!x(s)&&x(f)?(E(),q(Ae,{key:0},[j(x(f)),j(Er)],64)):ye("v-if",!0),x(Ct)?(E(),q("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:F[5]||(F[5]=ce=>Cr.value=!x(Cr))},[x(Cr)?(E(),te(T,{key:0})):(E(),te(P,{key:1,class:"opacity-50"}))])):ye("v-if",!0)],64)),ye("v-if",!0),x(Nn)?ye("v-if",!0):(E(),q(Ae,{key:5},[x(Ct)?(E(),te($,{key:0,to:x(i),class:"slidev-icon-btn",title:"Play Mode"},{default:W(()=>[j(V)]),_:1},8,["to"])):ye("v-if",!0),x(Q6)?(E(),te($,{key:1,to:x(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:W(()=>[j(D)]),_:1},8,["to"])):ye("v-if",!0),ye("v-if",!0)],64)),(E(),q(Ae,{key:6},[x(Se).download?(E(),q("button",{key:0,class:"slidev-icon-btn",onClick:F[8]||(F[8]=(...ce)=>x(Sa)&&x(Sa)(...ce))},[j(G)])):ye("v-if",!0)],64)),!x(Ct)&&x(Se).info&&!x(Nn)?(E(),q("button",{key:7,class:"slidev-icon-btn",onClick:F[9]||(F[9]=ce=>ho.value=!x(ho))},[j(ie)])):ye("v-if",!0),!x(Ct)&&!x(Nn)?(E(),te(O0,{key:8},{button:W(()=>[n("button",M0,[j(X)])]),menu:W(()=>[j(T0)]),_:1})):ye("v-if",!0),x(Nn)?ye("v-if",!0):(E(),te(Er,{key:9})),n("div",D0,[n("div",j0,[u(as(x(qe))+" ",1),n("span",N0,"/ "+as(x(Sf)),1)])]),j(x(B0))],34)],512)}}}),U0=oe(V0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/NavControls.vue"]]),uf={render(){return[]}},pf={render(){return[]}},J0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},q0=Ce({__name:"PresenterMouse",setup(e){return K(se),(t,s)=>{const o=cf;return x(_r).cursor?(E(),q("div",J0,[j(o,{class:"absolute",style:dt({left:`${x(_r).cursor.x}%`,top:`${x(_r).cursor.y}%`})},null,8,["style"])])):ye("v-if",!0)}}}),z0=oe(q0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),X0=Ce({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){K(se),me(ut,()=>{var s,o;(s=ut.value)!=null&&s.meta&&ut.value.meta.preload!==!1&&(ut.value.meta.__preloaded=!0),(o=Ar.value)!=null&&o.meta&&Ar.value.meta.preload!==!1&&(Ar.value.meta.__preloaded=!0)},{immediate:!0}),Gt();const t=R(()=>We.filter(s=>{var o;return((o=s.meta)==null?void 0:o.__preloaded)||s===ut.value}));return(s,o)=>(E(),q(Ae,null,[ye(" Global Bottom "),j(x(pf)),ye(" Slides "),j(ky,Ke(x(aE),{id:"slideshow",tag:"div"}),{default:W(()=>[(E(!0),q(Ae,null,Jo(x(t),l=>{var r;return Qe((E(),te(x(mi),{key:l.path,is:l==null?void 0:l.component,clicks:l===x(ut)?x(Ht):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:He(x(Fi)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ls,l===x(ut)]])}),128))]),_:1},16),ye(" Global Top "),j(x(uf)),ye("v-if",!0),x(Ct)?ye("v-if",!0):(E(),te(z0,{key:1}))],64))}});const W0=oe(X0,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/SlidesShow.vue"]]),K0=Ce({__name:"PrintStyle",setup(e){K(se);function t(s,{slots:o}){if(o.default)return Ge("style",o.default())}return(s,o)=>(E(),te(t,null,{default:W(()=>[u(" @page { size: "+as(x(Tn))+"px "+as(x(ai))+"px; margin: 0px; } ",1)]),_:1}))}}),df=oe(K0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Y0=Ce({__name:"Play",setup(e){K(se),S_();const t=z();function s(r){var a;ru.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?In():Hn())}iE(t);const o=R(()=>L1.value||ru.value);Gt();const l=Gt();return(r,a)=>(E(),q(Ae,null,[x(dn)?(E(),te(df,{key:0})):ye("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:dt(x(ii))},[j(af,{class:"w-full h-full",style:dt({background:"var(--slidev-slide-container-background, black)"}),width:x(dn)?x(rs).width.value:void 0,scale:x(ml),onPointerdown:s},{default:W(()=>[j(W0,{context:"slide"})]),controls:W(()=>[n("div",{class:He(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[x(o)?"opacity-100 right-0":"opacity-0 p-2",x(To)?"pointer-events-none":""]])},[j(U0,{class:"m-auto",persist:x(o)},null,8,["persist"])],2),ye("v-if",!0)]),_:1},8,["style","width","scale"]),ye("v-if",!0)],4),j(Q_)],64))}}),Z0=oe(Y0,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ff(e){return typeof e>"u"||e===null}function G0(e){return typeof e=="object"&&e!==null}function Q0(e){return Array.isArray(e)?e:ff(e)?[]:[e]}function ek(e,t){var s,o,l,r;if(t)for(r=Object.keys(t),s=0,o=r.length;s<o;s+=1)l=r[s],e[l]=t[l];return e}function tk(e,t){var s="",o;for(o=0;o<t;o+=1)s+=e;return s}function nk(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var sk=ff,ok=G0,lk=Q0,rk=tk,ak=nk,ik=ek,yi={isNothing:sk,isObject:ok,toArray:lk,repeat:rk,isNegativeZero:ak,extend:ik};function hf(e,t){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Ho(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=hf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ho.prototype=Object.create(Error.prototype);Ho.prototype.constructor=Ho;Ho.prototype.toString=function(t){return this.name+": "+hf(this,t)};var Kn=Ho,ck=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],uk=["scalar","sequence","mapping"];function pk(e){var t={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){t[String(o)]=s})}),t}function dk(e,t){if(t=t||{},Object.keys(t).forEach(function(s){if(ck.indexOf(s)===-1)throw new Kn('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=pk(t.styleAliases||null),uk.indexOf(this.kind)===-1)throw new Kn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var rt=dk;function yu(e,t){var s=[];return e[t].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function fk(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return e}function wa(e){return this.extend(e)}wa.prototype.extend=function(t){var s=[],o=[];if(t instanceof rt)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Kn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof rt))throw new Kn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Kn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Kn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof rt))throw new Kn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(wa.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=yu(l,"implicit"),l.compiledExplicit=yu(l,"explicit"),l.compiledTypeMap=fk(l.compiledImplicit,l.compiledExplicit),l};var hk=wa,Fk=new rt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),mk=new rt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),yk=new rt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),gk=new hk({explicit:[Fk,mk,yk]});function vk(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function _k(){return null}function kk(e){return e===null}var bk=new rt("tag:yaml.org,2002:null",{kind:"scalar",resolve:vk,construct:_k,predicate:kk,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function xk(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function wk(e){return e==="true"||e==="True"||e==="TRUE"}function Ck(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Sk=new rt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:xk,construct:wk,predicate:Ck,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Ek(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ak(e){return 48<=e&&e<=55}function $k(e){return 48<=e&&e<=57}function Rk(e){if(e===null)return!1;var t=e.length,s=0,o=!1,l;if(!t)return!1;if(l=e[s],(l==="-"||l==="+")&&(l=e[++s]),l==="0"){if(s+1===t)return!0;if(l=e[++s],l==="b"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(!Ek(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<t;s++)if(l=e[s],l!=="_"){if(!Ak(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<t;s++)if(l=e[s],l!=="_"){if(!$k(e.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function Tk(e){var t=e,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Ik(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!yi.isNegativeZero(e)}var Hk=new rt("tag:yaml.org,2002:int",{kind:"scalar",resolve:Rk,construct:Tk,predicate:Ik,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ok=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Pk(e){return!(e===null||!Ok.test(e)||e[e.length-1]==="_")}function Lk(e){var t,s;return t=e.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var Bk=/^[-+]?[0-9]+e/;function Mk(e,t){var s;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(yi.isNegativeZero(e))return"-0.0";return s=e.toString(10),Bk.test(s)?s.replace("e",".e"):s}function Dk(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||yi.isNegativeZero(e))}var jk=new rt("tag:yaml.org,2002:float",{kind:"scalar",resolve:Pk,construct:Lk,predicate:Dk,represent:Mk,defaultStyle:"lowercase"}),Nk=gk.extend({implicit:[bk,Sk,Hk,jk]}),Vk=Nk,Ff=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),mf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Uk(e){return e===null?!1:Ff.exec(e)!==null||mf.exec(e)!==null}function Jk(e){var t,s,o,l,r,a,i,c=0,p=null,d,f,h;if(t=Ff.exec(e),t===null&&(t=mf.exec(e)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(s,o,l));if(r=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],f=+(t[11]||0),p=(d*60+f)*6e4,t[9]==="-"&&(p=-p)),h=new Date(Date.UTC(s,o,l,r,a,i,c)),p&&h.setTime(h.getTime()-p),h}function qk(e){return e.toISOString()}var zk=new rt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Uk,construct:Jk,instanceOf:Date,represent:qk});function Xk(e){return e==="<<"||e===null}var Wk=new rt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Xk}),gi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Kk(e){if(e===null)return!1;var t,s,o=0,l=e.length,r=gi;for(s=0;s<l;s++)if(t=r.indexOf(e.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Yk(e){var t,s,o=e.replace(/[\r\n=]/g,""),l=o.length,r=gi,a=0,i=[];for(t=0;t<l;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(t));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function Zk(e){var t="",s=0,o,l,r=e.length,a=gi;for(o=0;o<r;o++)o%3===0&&o&&(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]),s=(s<<8)+e[o];return l=r%3,l===0?(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]):l===2?(t+=a[s>>10&63],t+=a[s>>4&63],t+=a[s<<2&63],t+=a[64]):l===1&&(t+=a[s>>2&63],t+=a[s<<4&63],t+=a[64],t+=a[64]),t}function Gk(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Qk=new rt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Kk,construct:Yk,predicate:Gk,represent:Zk}),eb=Object.prototype.hasOwnProperty,tb=Object.prototype.toString;function nb(e){if(e===null)return!0;var t=[],s,o,l,r,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,tb.call(l)!=="[object Object]")return!1;for(r in l)if(eb.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function sb(e){return e!==null?e:[]}var ob=new rt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:nb,construct:sb}),lb=Object.prototype.toString;function rb(e){if(e===null)return!0;var t,s,o,l,r,a=e;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1){if(o=a[t],lb.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function ab(e){if(e===null)return[];var t,s,o,l,r,a=e;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1)o=a[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var ib=new rt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:rb,construct:ab}),cb=Object.prototype.hasOwnProperty;function ub(e){if(e===null)return!0;var t,s=e;for(t in s)if(cb.call(s,t)&&s[t]!==null)return!1;return!0}function pb(e){return e!==null?e:{}}var db=new rt("tag:yaml.org,2002:set",{kind:"mapping",resolve:ub,construct:pb});Vk.extend({implicit:[zk,Wk],explicit:[Qk,ob,ib,db]});function gu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var fb=new Array(256),hb=new Array(256);for(var _s=0;_s<256;_s++)fb[_s]=gu(_s)?1:0,hb[_s]=gu(_s);function Fb(e){return Array.from(new Set(e))}function vu(...e){let t,s,o;e.length===1?(t=0,o=1,[s]=e):[t,s,o=1]=e;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function yf(e,t){if(!t||t==="all"||t==="*")return vu(1,e+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...vu(+l,r?+r+1:e+1))}return Fb(s).filter(o=>o<=e).sort((o,l)=>o-l)}function gf(e){const t=R(()=>e.value.path),s=R(()=>We.length-1),o=R(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=R(()=>nr(o.value)),r=R(()=>We.find(h=>h.path===`${o.value}`)),a=R(()=>{var h,F,m;return(m=(F=(h=r.value)==null?void 0:h.meta)==null?void 0:F.slide)==null?void 0:m.id}),i=R(()=>{var h,F;return((F=(h=r.value)==null?void 0:h.meta)==null?void 0:F.layout)||(o.value===1?"cover":"default")}),c=R(()=>We.find(h=>h.path===`${Math.min(We.length,o.value+1)}`)),p=R(()=>We.filter(h=>{var F,m;return(m=(F=h.meta)==null?void 0:F.slide)==null?void 0:m.title}).reduce((h,F)=>(vi(h,F),h),[])),d=R(()=>_i(p.value,r.value)),f=R(()=>ki(d.value));return{route:e,path:t,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:p,treeWithActiveStatuses:d,tree:f,downloadPDF:Sa,next:In,nextSlide:Oo,openInEditor:cE,prev:Hn,prevSlide:Po}}function vf(e,t,s){const o=z(0);nt(()=>{yt.afterEach(async()=>{await nt(),o.value+=1})});const l=R(()=>{var c,p;return o.value,((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),r=R(()=>{var c,p;return+(((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.clicks)??l.value.length)}),a=R(()=>s.value<We.length-1||e.value<r.value),i=R(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const mb=["id"],yb=Ce({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,o=Yt(s,"clicksElements",t),l=R(()=>({height:`${ai}px`,width:`${Tn}px`}));Gt();const r=R(()=>s.clicks),a=vf(r,s.nav.currentRoute,s.nav.currentPage),i=R(()=>`${s.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return wt(se,Ve({nav:{...s.nav,...a},configs:Se,themeConfigs:R(()=>Se.themeConfig)})),(c,p)=>{var d;return E(),q("div",{id:x(i),class:"print-slide-container",style:dt(x(l))},[j(x(pf)),j(x(mi),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":x(o),"onUpdate:clicksElements":p[0]||(p[0]=f=>$e(o)?o.value=f:null),clicks:x(r),"clicks-disabled":!1,class:He(x(Fi)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),ye("v-if",!0),j(x(uf))],12,mb)}}}),_u=oe(yb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),gb=Ce({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const t=e;K(se);const s=z(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=R(()=>t.route),l=gf(o);return(a,i)=>(E(),q(Ae,null,[j(_u,{"clicks-elements":s.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>s.value=c),clicks:0,nav:x(l),route:x(o)},null,8,["clicks-elements","nav","route"]),x(Fo)?ye("v-if",!0):(E(!0),q(Ae,{key:0},Jo(s.value.length,c=>(E(),te(_u,{key:c,clicks:c,nav:x(l),route:x(o)},null,8,["clicks","nav","route"]))),128))],64))}}),vb=oe(gb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintSlide.vue"]]),_b={id:"print-content"},kb=Ce({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;K(se);const s=R(()=>t.width),o=R(()=>t.width/Rn),l=R(()=>s.value/o.value),r=R(()=>l.value<Rn?s.value/Tn:o.value*Rn/Tn);let a=We.slice(0,-1);Pt.value.query.range&&(a=yf(a.length,Pt.value.query.range).map(p=>a[p-1]));const i=R(()=>({"select-none":!Se.selectable,"slidev-code-line-numbers":Se.lineNumbers}));return wt(xd,r),(c,p)=>(E(),q("div",{id:"print-container",class:He(x(i))},[n("div",_b,[(E(!0),q(Ae,null,Jo(x(a),d=>(E(),te(vb,{key:d.path,route:d},null,8,["route"]))),128))]),vt(c.$slots,"controls")],2))}});const bb=oe(kb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/PrintContainer.vue"]]),xb=Ce({__name:"Print",setup(e){return K(se),ds(()=>{dn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(E(),q(Ae,null,[x(dn)?(E(),te(df,{key:0})):ye("v-if",!0),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:dt(x(ii))},[j(bb,{class:"w-full h-full",style:dt({background:"var(--slidev-slide-container-background, black)"}),width:x(rs).width.value},null,8,["style","width"])],4)],64))}});const wb=oe(xb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Print.vue"]]);const Cb={class:"slidev-layout end"},Sb={__name:"end",setup(e){return K(se),(t,s)=>(E(),q("div",Cb," END "))}},Eb=oe(Sb,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/end.vue"]]),Ab={class:"slidev-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},$b=n("path",{fill:"currentColor",d:"M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"},null,-1),Rb=[$b];function Tb(e,t){return E(),q("svg",Ab,Rb)}const Ib={name:"mdi-react",render:Tb},Hb={class:"slidev-layout cover"},Ob={class:"my-auto w-full"},Pb={__name:"cover",setup(e){return K(se),(t,s)=>(E(),q("div",Hb,[n("div",Ob,[vt(t.$slots,"default")])]))}},Lb=oe(Pb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/slidev-theme-dracula/layouts/cover.vue"]]);const _f=e=>(MF("data-v-42c5a5a3"),e=e(),DF(),e),Bb=_f(()=>n("h1",null,[n("span",{class:"font-semibold text-[48px]"},[u("Welcome to "),n("span",{class:"font-bold text-gradient-red text-[72px]"},"React")])],-1)),Mb=_f(()=>n("p",null,[u("Shared by "),n("a",{href:"mailto:siyuan.wang@capgemini.com",target:"_blank",rel:"noopener"},"siyuan.wang")],-1)),Db={__name:"1",setup(e){const t={css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md"};return K(se),(s,o)=>{const l=Ib;return E(),te(Lb,Oe(Te(t)),{default:W(()=>[j(l,{class:"text-[#4EC5D4] animate-spin-slow text-[100px] -mt-[100px] mb-6"}),Bb,Mb]),_:1},16)}}},jb=oe(Db,[["__scopeId","data-v-42c5a5a3"],["__file","/@slidev/slides/1.md"]]),Nb={class:"slidev-layout default"},Vb={__name:"default",setup(e){return K(se),(t,s)=>(E(),q("div",Nb,[vt(t.$slots,"default")]))}},Ne=oe(Vb,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/default.vue"]]),Ub=n("h1",null,"Schedule",-1),Jb=n("p",null,"本系列培训旨在凯捷沈阳 RDC 普及 React 及相关生态的基础知识和使用方法，扩宽开发人员的技术栈，为未来可能到来的 React 项目做前期准备。课程主要分为两大部分：",-1),qb=n("div",{class:"mt-6"},null,-1),zb=n("h4",null,[n("strong",null,"基础"),u("和"),n("strong",null,"进阶"),u("：")],-1),Xb=n("ul",null,[n("li",null,"基础：了解 React，如何搭建 React 脚手架，如何开发 React 应用、如何使用周边生态等；"),n("li",null,"进阶：基础部分的扩展，深入浅出 React 部分原理，如何优化 React 应用等；")],-1),Wb=n("div",{class:"mt-5"},null,-1),Kb=n("h4",null,"“副”作用：",-1),Yb=n("ul",null,[n("li",null,[u("适当普及 ES6+、Typescript 以及"),n("span",{class:"text-highlight"},"函数式编程"),u("；")]),n("li",null,"在每次课程的最后布置作业；"),n("li",null,"培训的最后，提供实战类的项目；")],-1),Zb=n("div",{class:"mt-5"},null,-1),Gb=n("h4",null,"真正的计划",-1),Qb=n("p",null,"课程周期：3 周半（共 7 次课，14 课时）；课程频率：2 次 / 周；单节课程的时长：2 小时；",-1),ex={__name:"2",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./schedule.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[Ub,Jb,qb,zb,Xb,Wb,Kb,Yb,Zb,Gb,Qb]),_:1},16))}},tx=oe(ex,[["__file","/@slidev/slides/2.md"]]),nx={class:"slidev-layout center h-full grid place-content-center"},sx={class:"my-auto"},ox={__name:"center",setup(e){return K(se),(t,s)=>(E(),q("div",nx,[n("div",sx,[vt(t.$slots,"default")])]))}},kf=oe(ox,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/center.vue"]]),lx=n("h1",null,[n("span",{class:"text-[60px]"},"Lesson 1")],-1),rx={__name:"3",setup(e){const t={layout:"center",srcSequence:"./pages/lesson_1/index.md"};return K(se),(s,o)=>(E(),te(kf,Oe(Te(t)),{default:W(()=>[lx]),_:1},16))}},ax=oe(rx,[["__file","/@slidev/slides/3.md"]]),ix={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},cx=n("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),ux=[cx];function px(e,t){return E(),q("svg",ix,ux)}const dx={name:"ph-clipboard",render:px},fx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},hx=n("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Fx=[hx];function mx(e,t){return E(),q("svg",fx,Fx)}const yx={name:"ph-check-circle",render:mx},gx=["title"],vx=Ce({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;K(se);const s=K(co),o=K(Wn),l=K(uo);function r(f=5){const h=[],F="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=F.length;for(let g=0;g<f;g++)h.push(F.charAt(Math.floor(Math.random()*m)));return h.join("")}const a=z(),i=$t();fs(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,h=R(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),t.ranges.length-1)),F=R(()=>t.ranges[h.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),g=Og(t.ranges.length-1).map(v=>m+v);o!=null&&o.value&&(o.value.push(...g),Zl(()=>g.forEach(v=>ia(o.value,v)),i))}ds(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const v of g){const w=Array.from(v.querySelectorAll(".line")),k=yf(w.length,F.value);if(w.forEach((b,C)=>{const T=k.includes(C+1);b.classList.toggle(zn,!0),b.classList.toggle("highlighted",T),b.classList.toggle("dishonored",!T)}),t.maxHeight){const b=v.querySelector(".line.highlighted");b&&b.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:p}=Av();function d(){var h,F;const f=(F=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:F.textContent;f&&p(f)}return(f,h)=>{const F=yx,m=dx;return E(),q("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:dt({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[vt(f.$slots,"default"),x(Se).codeCopy?(E(),q("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:x(c)?"Copied":"Copy",onClick:h[0]||(h[0]=g=>d())},[x(c)?(E(),te(F,{key:0,class:"p-2 w-8 h-8"})):(E(),te(m,{key:1,class:"p-2 w-8 h-8"}))],8,gx)):ye("v-if",!0)],4)}}}),Jt=oe(vx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),ku=["ul","ol"],bf=Ce({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,c;const e=Ls("click"),t=Ls("after"),s=(p,d,f)=>Qe(p,[[d,f,"",{hide:this.hide,fade:this.fade}]]);let o=(c=(i=this.$slots).default)==null?void 0:c.call(i);if(!o)return;o=Hg(o);const l=(p,d=1)=>{let f=0;return[p.map(F=>{if(!Qt(F))return F;if(ku.includes(F.type)&&Array.isArray(F.children)){const[m,g]=a(F.children,d+1);return f+=g,Ge(F,{},[m])}return Ge(F)}),f]};let r=0;const a=(p,d=1)=>{let f=0;return[p.map(F=>{if(!Qt(F))return F;const m=f%this.every===0?e:t;let g,v=0;if(d<this.depth&&Array.isArray(F.children)){const[k,b]=l(F.children,d);g=Ge(F,{},[k]),v=b,f+=b+1}else g=Ge(F),f++;const w=this.at!=null?Number(this.at)+Math.floor(r/this.every)+d:(d-1-v).toString();return r++,s(g,m,typeof w=="string"&&!w.startsWith("-")?`+${w}`:w)}),f]};return o.length===1&&ku.includes(o[0].type)&&Array.isArray(o[0].children)?Ge(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),_x="/react-shared-ppt/assets/nextjs-3fe22fdd.png",kx="/react-shared-ppt/assets/remix-6950a405.png",bx="/react-shared-ppt/assets/umijs-ecd129e6.png",xx={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},wx=Ce({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return K(se),(s,o)=>(E(),q("div",xx,[n("div",{class:He(["col-left",t.class])},[vt(s.$slots,"default")],2),n("div",{class:He(["col-right",t.class])},[vt(s.$slots,"right")],2)]))}}),Cx=oe(wx,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/layouts/two-cols.vue"]]),Sx=n("h1",null,"What is React?",-1),Ex=n("div",{class:"flex items-center justify-center mr-4 py-4 bg-black rounded"},[n("p",null,[n("span",{class:"text-gradient-red text-[36px]"},"f(state) = UI")])],-1),Ax={class:"w-100 mt-5"},$x=n("ul",null,[n("li",null,"React 是一个用于渲染用户界面（UI）的 JavaScript 工具库"),n("li",null,"用组件创建用户界面"),n("li",null,"用代码和标签编写组件"),n("li",null,"在任何地方添加交互"),n("li",null,"渐进式 JavaScript 框架"),n("li",null,"NextJs / Remix / UmiJs")],-1),Rx=n("p",null,[u("Read more about "),n("a",{href:"https://react.dev/",target:"_blank",rel:"noopener"},"React")],-1),Tx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," FC } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Video"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<{ video"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}}," }> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  video")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  const "),n("span",{style:{color:"#50FA7B"}},"onPlay"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," { console."),n("span",{style:{color:"#50FA7B"}},"log"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"Play video."),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"); }")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"onClick"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{onPlay}"),n("span",{style:{color:"#FF79C6"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Thumbnail"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{video} "),n("span",{style:{color:"#FF79C6"}},"/>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"LikeButton"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{video} "),n("span",{style:{color:"#FF79C6"}},"/>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," FC } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Video"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<{ video"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}}," }> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ({")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  video")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  const "),n("span",{style:{color:"#50FA7B"}},"onPlay"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," { console."),n("span",{style:{color:"#50FA7B"}},"log"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"Play video."),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"); }")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"onClick"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{onPlay}"),n("span",{style:{color:"#FF79C6"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Thumbnail"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{video} "),n("span",{style:{color:"#FF79C6"}},"/>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"LikeButton"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"video"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{video} "),n("span",{style:{color:"#FF79C6"}},"/>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"div"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),Ix=n("img",{src:_x,class:"relative z-[2] w-full -mt-40"},null,-1),Hx=n("img",{src:kx,class:"relative w-full z-[3] -mt-16"},null,-1),Ox=n("img",{src:bx,class:"relative w-full z-[3] -mt-16"},null,-1),Px={__name:"4",setup(e){const t={clicks:9,layout:"two-cols",transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md"};return K(se),(s,o)=>{const l=bf,r=Jt,a=Ls("click");return E(),te(Cx,Oe(Te(t)),{right:W(()=>[Qe((E(),q("div",null,[j(r,Ke({at:2},{ranges:["10,11","3-9,12-14","6,9","all"]}),{default:W(()=>[Tx]),_:1},16)])),[[a,2]]),j(l,{at:"6"},{default:W(()=>[Ix,Hx,Ox]),_:1})]),default:W(()=>[Sx,Ex,n("div",Ax,[j(l,null,{default:W(()=>[$x]),_:1})]),Rx]),_:1},16)}}},Lx=oe(Px,[["__file","/@slidev/slides/4.md"]]),Bx=n("h1",null,"What is JSX?",-1),Mx=n("p",null,"给定“获取用户列表”的简单业务场景，用原生 JavaScript (ES6) 如何实现呢？",-1),Dx=n("iframe",{src:"https://stackblitz.com/edit/jsx-native-js?ctl=1&embed=1&file=index.html&hideNavigation=1&theme=dark",class:"w-full h-[calc(100%-55px)]"},null,-1),jx={__name:"5",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[Bx,Mx,ye(" 对比：不用 JSX 怎么处理，用 JSX 怎么写 "),Dx]),_:1},16))}},Nx=oe(jx,[["__file","/@slidev/slides/5.md"]]),Vx=n("h1",null,"JSX in React",-1),Ux=n("p",null,'JSX 的全称是 "Javascript and XML"，它允许我们可以在 JS 中编写 XML (HTML) 标签语言。',-1),Jx=n("h3",null,"一个 🌰 (例子)",-1),qx=n("div",{class:"h-2"},null,-1),zx=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}},"({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),n("span",{style:{color:"#F8F8F2"}},", "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),n("span",{style:{color:"#F8F8F2"}}," }) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"className"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"btn__alert"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"style"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{{ width"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"20px"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}}," }} "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"alert"),n("span",{style:{color:"#F8F8F2"}},"(message)}>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      {children}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Toolbar"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"div"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"img"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"/public/images/react.png"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"message"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"我是糖炒 🌰"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        我是糖炒 🌰")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      </"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"div"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}},"({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"message"),n("span",{style:{color:"#F8F8F2"}},", "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"children"),n("span",{style:{color:"#F8F8F2"}}," }) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"className"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"btn__alert"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"style"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{{ width"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"20px"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}}," }} "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"alert"),n("span",{style:{color:"#F8F8F2"}},"(message)}>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      {children}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Toolbar"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"div"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"img"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"src"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"/public/images/react.png"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"message"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"我是糖炒 🌰"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        我是糖炒 🌰")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      </"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"div"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),Xx={__name:"6",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(se),(s,o)=>{const l=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[Vx,Ux,Jx,qx,j(l,Ke({},{ranges:["all","1-7","9-18","2,6,10,17","3,5,11-12,16","13,15","4,14"]}),{default:W(()=>[zx]),_:1},16)]),_:1},16)}}},Wx=oe(Xx,[["__file","/@slidev/slides/6.md"]]),Kx=n("h1",null,"React JSX vs Vue Template",-1),Yx=n("p",null,[n("span",{class:"text-gray-400"},"下表为 React JSX 和 Vue Template 的异同。")],-1),Zx=n("thead",null,[n("tr",null,[n("th",null,"对比"),n("th",null,"React"),n("th",null,"Vue")])],-1),Gx=n("tr",null,[n("td",null,"组件调用"),n("td",null,"大驼峰"),n("td",null,"大驼峰、小驼峰、短横线均可")],-1),Qx=n("tr",null,[n("td",null,"原生标签"),n("td",null,[n("strong",null,"必须"),u("闭合（包括自闭合）")]),n("td",null,"与 HTML 无异")],-1),ew=n("tr",null,[n("td",null,"作用域"),n("td",null,"全局、函数和块级作用域"),n("td",null,"绑定到 Vue 组件实例、全局 Context 和 Slot context")],-1),tw=n("tr",null,[n("td",null,"变量、表达式"),n("td",null,[u("用 "),n("code",null,"{}"),u(" 表示")]),n("td",null,[u("用 "),n("code",null,"{{}}"),u(" 表示")])],-1),nw=n("tr",null,[n("td",null,"属性"),n("td",null,[u("小驼峰，"),n("em",null,"class 改为 className")]),n("td",null,"小驼峰、短横线命名均可")],-1),sw=n("tr",null,[n("td",null,"动态属性"),n("td",null,[u("参数后加 "),n("code",null,"{}")]),n("td",null,[u("参数前加 "),n("code",null,":")])],-1),ow=n("tr",null,[n("td",null,"事件"),n("td",null,[u("事件后加 "),n("code",null,"{}"),u("，值为函数")]),n("td",null,[u("事件前加 "),n("code",null,"v-on"),u(" 或 "),n("code",null,"@")])],-1),lw=n("td",null,[n("code",null,"v-for"),u(" / "),n("code",null,"v-if"),u(" / "),n("code",null,"v-show"),u(" …")],-1),rw=Ce({__name:"7",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};K(se);const s=z(!1),o=()=>s.value=!s.value;return(l,r)=>{const a=Ps("uim-rocket");return E(),te(Ne,Oe(Te(t)),{default:W(()=>[Kx,Yx,n("table",null,[Zx,n("tbody",null,[Gx,Qx,ew,tw,nw,sw,ow,n("tr",null,[n("td",null,[n("span",{class:He({"text-highlight-2 ":s.value})},"动态渲染",2)]),n("td",null,[n("span",{class:He({"text-highlight-2 ":s.value})},"一切皆为 JavaScript ",2)]),lw])])]),n("p",null,[n("span",{class:He(["absolute left-[20px] bottom-[42px]",{"text-highlight-2 ":s.value}]),onClick:o},[j(a)],2)]),ye(`
我在这里大致整理了下 React JSX 和 Vue Template 的异同点，可能对大家理解 JSX 有帮助。

（针对表格进行说明，先说维度，后具体到每列）
`)]),_:1},16)}}}),aw=oe(rw,[["__file","/@slidev/slides/7.md"]]),iw=n("h1",null,"Heros with JSX",-1),cw=n("p",null,"接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。",-1),uw=n("iframe",{src:"https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark",class:"w-full h-[calc(100%-55px)]"},null,-1),pw={__name:"8",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[iw,cw,uw]),_:1},16))}},dw=oe(pw,[["__file","/@slidev/slides/8.md"]]),fw=n("h1",null,"Components",-1),hw=n("p",null,[u("和 Vue 类似，React 也是以"),n("strong",null,"组件"),u("的形式构建页面。")],-1),Fw={class:"flex gap-x-4"},mw={class:"w-1/2"},yw=n("h3",null,"Class Component",-1),gw=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"extends"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Component"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  inputRef "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"createRef"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"handleClick"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".inputRef.current."),n("span",{style:{color:"#50FA7B"}},"focus"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"render"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        <"),n("span",{style:{color:"#FF79C6"}},"input"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{"),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".inputRef} />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        <"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{"),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".handleClick}>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          Focus the input")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        </"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      </>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { Component, createRef } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"class"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"extends"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Component"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  inputRef "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"createRef"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"handleClick"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".inputRef.current."),n("span",{style:{color:"#50FA7B"}},"focus"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"render"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        <"),n("span",{style:{color:"#FF79C6"}},"input"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{"),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".inputRef} />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        <"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{"),n("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),n("span",{style:{color:"#F8F8F2"}},".handleClick}>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"          Focus the input")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        </"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      </>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),vw=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"*"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," React "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," inputRef "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useRef"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," handleClick "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," inputRef.current."),n("span",{style:{color:"#50FA7B"}},"focus"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"input"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{inputRef} />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{handleClick}>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        Focus the input")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      </"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"*"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," React "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"AlertButton"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," inputRef "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useRef"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," handleClick "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," inputRef.current."),n("span",{style:{color:"#50FA7B"}},"focus"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"input"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"ref"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{inputRef} />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"onClick"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{handleClick}>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        Focus the input")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      </"),n("span",{style:{color:"#FF79C6"}},"button"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"React.Fragment"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),_w={__name:"9",setup(e){const t={clicks:4,srcSequence:"./pages/lesson_1/index.md,./components.md"},s=K(se);return(o,l)=>{const r=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[fw,hw,n("div",Fw,[Qe(n("div",mw,[yw,j(r,Ke({},{ranges:["all","10,15","all","0"]}),{default:W(()=>[gw]),_:1},16)],512),[[ls,x(s).nav.clicks!==4]]),n("div",{class:He({"w-full":x(s).nav.clicks===4,"w-1/2":x(s).nav.clicks!==4})},[n("h3",null,[Qe(n("span",null,"🎉",512),[[ls,x(s).nav.clicks===4]]),u(" Function Component "),Qe(n("span",null,"🎉",512),[[ls,x(s).nav.clicks===4]])]),j(r,Ke({at:0},{ranges:["all","8,13","0","all"]}),{default:W(()=>[vw]),_:1},16)],2)])]),_:1},16)}}},kw=oe(_w,[["__file","/@slidev/slides/9.md"]]),bw=n("h1",null,[u("Review components "),n("em",null,[n("a",{class:"text-base",href:"https://stackblitz.com/edit/lesson-one-jsx-gxyk2q?file=App.tsx",target:"_blank"},"Link to Code")])],-1),xw=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"*"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," React "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Empty"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"No Heros."),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Loading"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"Loading, fetching heros..."),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"unknown"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"JSX"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Element"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"([]);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"renderHero"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{item.id}>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.name}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.skills."),n("span",{style:{color:"#50FA7B"}},"join"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},", "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"user-list"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      {loading "),n("span",{style:{color:"#FF79C6"}},"?"),n("span",{style:{color:"#F8F8F2"}}," <"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Loading"),n("span",{style:{color:"#F8F8F2"}}," /> "),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," heros.length "),n("span",{style:{color:"#FF79C6"}},"?"),n("span",{style:{color:"#F8F8F2"}}," ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        heros."),n("span",{style:{color:"#50FA7B"}},"map"),n("span",{style:{color:"#F8F8F2"}},"(renderHero) "),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Empty"),n("span",{style:{color:"#F8F8F2"}},"()}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"*"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," React "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Empty"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"No Heros."),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Loading"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"Loading, fetching heros..."),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"unknown"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"JSX"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Element"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"([]);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"renderHero"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{item.id}>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.name}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.skills."),n("span",{style:{color:"#50FA7B"}},"join"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},", "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"user-list"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      {loading "),n("span",{style:{color:"#FF79C6"}},"?"),n("span",{style:{color:"#F8F8F2"}}," <"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Loading"),n("span",{style:{color:"#F8F8F2"}}," /> "),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," heros.length "),n("span",{style:{color:"#FF79C6"}},"?"),n("span",{style:{color:"#F8F8F2"}}," ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        heros."),n("span",{style:{color:"#50FA7B"}},"map"),n("span",{style:{color:"#F8F8F2"}},"(renderHero) "),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Empty"),n("span",{style:{color:"#F8F8F2"}},"()}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),ww={__name:"10",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md"};return K(se),(s,o)=>{const l=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[bw,j(l,Ke({},{ranges:["all","3,19","4,18","9-14"]}),{default:W(()=>[xw]),_:1},16)]),_:1},16)}}},Cw=oe(ww,[["__file","/@slidev/slides/10.md"]]),Sw="/react-shared-ppt/assets/old-lifecycle-fb958309.webp",Ew="/react-shared-ppt/assets/new-lifecycle-469c3870.webp",Aw=n("h1",null,"Lifecycle",-1),$w=n("p",null,[u("React 的"),n("strong",null,"类组件"),u("有生命周期，而"),n("strong",null,"函数式组件"),u("的生命周期是 "),n("em",null,"hooks"),u("。")],-1),Rw=n("p",null,[u("版本 "),n("code",null,"v16.3"),u(" 是 React 生命周期变更的分界线；")],-1),Tw={class:"flex gap-x-4 h-[calc(100%-2.5rem-7rem-24px)]"},Iw={class:"w-1/2 text-center"},Hw=n("h3",null,"旧生命周期",-1),Ow=n("img",{src:Sw,class:"mt-4"},null,-1),Pw=[Hw,Ow],Lw={class:"relative w-15 flex justify-center"},Bw=n("div",{class:"absolute top-[8px]"},"v16.3",-1),Mw=n("div",{class:"absolute top-[32px] w-1px h-full border-r-2 border-dashed border-gray-500"},null,-1),Dw=[Bw,Mw],jw={class:"w-1/2 text-center"},Nw=n("h3",null,"新生命周期",-1),Vw=n("img",{src:Ew,class:"mt-4"},null,-1),Uw=[Nw,Vw],Jw=n("p",null,[n("a",{href:"https://juejin.cn/post/6914112105964634119",target:"_blank"},[n("a",{href:"https://juejin.cn/post/6914112105964634119",target:"_blank",rel:"noopener"},"https://juejin.cn/post/6914112105964634119")])],-1),qw={__name:"11",setup(e){const t={clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md"};return K(se),(s,o)=>{const l=Ls("click");return E(),te(Ne,Oe(Te(t)),{default:W(()=>[Aw,$w,Rw,n("div",Tw,[Qe((E(),q("div",Iw,Pw)),[[l,2]]),Qe((E(),q("div",Lw,Dw)),[[l,1]]),Qe((E(),q("div",jw,Uw)),[[l,2]])]),Jw]),_:1},16)}}},zw=oe(qw,[["__file","/@slidev/slides/11.md"]]),Xw=["href","innerHTML"],Ww=["href"],Kw=Ce({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(e){return K(se),(t,s)=>{const o=Ps("RouterLink");return!x(dn)&&e.title?(E(),te(o,{key:0,to:String(e.to),onClick:s[0]||(s[0]=l=>l.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!x(dn)&&!e.title?(E(),te(o,{key:1,to:String(e.to),onClick:s[1]||(s[1]=l=>l.target.blur())},{default:W(()=>[vt(t.$slots,"default")]),_:3},8,["to"])):x(dn)&&e.title?(E(),q("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,Xw)):(E(),q("a",{key:3,href:`#${e.to}`},[vt(t.$slots,"default")],8,Ww))}}}),xf=oe(Kw,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/builtin/Link.vue"]]),Yw=n("h1",null,"Hooks",-1),Zw=n("p",null,"也称钩子，在 React 中 Hooks 分为两类：",-1),Gw=n("ul",null,[n("li",null,"内置 Built-in hooks；"),n("li",null,"自定义 Custom hooks；")],-1),Qw=n("p",null,[u("React 提供了很多内置 Hooks，主要分为"),n("strong",null,"六种"),u("：")],-1),eC=n("code",null,"useState",-1),tC=n("code",null,"useReducer",-1),nC=n("code",null,"useContext",-1),sC=n("code",null,"useRef",-1),oC=n("code",null,"useImperativeHandle",-1),lC=n("code",null,"useEffect",-1),rC=n("code",null,"useLayoutEffect",-1),aC=n("code",null,"useMemo",-1),iC=n("code",null,"useCallback",-1),cC=n("code",null,"useTransition",-1),uC=n("code",null,"useDeferredValue",-1),pC=n("code",null,"useId",-1),dC=n("p",null,"自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。",-1),fC={__name:"12",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./hooks.md"};return K(se),(s,o)=>{const l=xf;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[Yw,Zw,Gw,Qw,n("ul",null,[n("li",null,[u("(2) "),j(l,{to:"17"},{default:W(()=>[u("状态 Hooks")]),_:1}),u(" - "),eC,u(" / "),tC,u("；")]),n("li",null,[u("(1) "),j(l,{to:"18"},{default:W(()=>[u("上下文 Hooks")]),_:1}),u(" - "),nC,u("；")]),n("li",null,[u("(2) "),j(l,{to:"19"},{default:W(()=>[u("引用 Hooks")]),_:1}),u(" - "),sC,u(" / "),oC,u("；")]),n("li",null,[u("(2) "),j(l,{to:"20"},{default:W(()=>[u("副作用 Hooks")]),_:1}),u(" - "),lC,u(" / "),rC,u("；")]),n("li",null,[u("(4) "),j(l,{to:"21"},{default:W(()=>[u("性能 Hooks")]),_:1}),u(" - "),aC,u(" / "),iC,u(" / "),cC,u(" / "),uC,u("；")]),n("li",null,[u("(3) "),j(l,{to:"22"},{default:W(()=>[u("其他 Hooks")]),_:1}),u(" - "),pC,u("；")])]),dC]),_:1},16)}}},hC=oe(fC,[["__file","/@slidev/slides/12.md"]]),FC=n("h1",null,"Ant Design",-1),mC=n("p",null,[n("a",{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener"},"https://ant.design/index-cn")],-1),yC=n("p",null,[u("Antd pro: "),n("a",{href:"https://preview.pro.ant.design/dashboard/analysis",target:"_blank",rel:"noopener"},"https://preview.pro.ant.design/dashboard/analysis")],-1),gC=n("div",{class:"mt-[24px]"},null,-1),vC=n("h1",null,"Material UI",-1),_C=n("p",null,[n("a",{href:"https://mui.com/",target:"_blank",rel:"noopener"},"https://mui.com/")],-1),kC=n("div",{class:"mt-[24px]"},null,-1),bC=n("h1",null,"Semi Design",-1),xC=n("p",null,[n("a",{href:"https://semi.design/zh-CN/",target:"_blank",rel:"noopener"},"https://semi.design/zh-CN/")],-1),wC=n("div",{class:"mt-[24px]"},null,-1),CC=n("h1",null,"Fluent UI",-1),SC=n("p",null,[n("a",{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web",target:"_blank",rel:"noopener"},"https://developer.microsoft.com/en-us/fluentui#/controls/web")],-1),EC=n("p",null,[n("a",{href:"https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html",target:"_blank",rel:"noopener"},"https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html")],-1),AC={__name:"13",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./ant-design.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[FC,mC,yC,gC,vC,_C,kC,bC,xC,wC,CC,SC,EC]),_:1},16))}},$C=oe(AC,[["__file","/@slidev/slides/13.md"]]),RC=n("h1",null,"📦 UmiJS",-1),TC=n("p",null,[n("a",{href:"https://umijs.org/",target:"_blank",rel:"noopener"},"https://umijs.org/")],-1),IC=n("div",{class:"mt-[36px]"},null,-1),HC=n("h1",null,"NextJs",-1),OC=n("p",null,[n("a",{href:"https://www.nextjs.cn/",target:"_blank",rel:"noopener"},"https://www.nextjs.cn/")],-1),PC=n("div",{class:"mt-[36px]"},null,-1),LC=n("h1",null,"Create React App",-1),BC=n("p",null,[n("a",{href:"https://create-react-app.dev/docs/getting-started",target:"_blank",rel:"noopener"},"https://create-react-app.dev/docs/getting-started")],-1),MC={__name:"14",setup(e){const t={srcSequence:"./pages/lesson_1/index.md,./umijs.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[RC,TC,IC,HC,OC,PC,LC,BC]),_:1},16))}},DC=oe(MC,[["__file","/@slidev/slides/14.md"]]),jC=Ce({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return j(bf,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),NC="/react-shared-ppt/assets/think_1-72c2d21a.png",VC="/react-shared-ppt/assets/think_2-80c01669.png",UC=n("h1",null,"Thinking",-1),JC=n("p",null,"为什么目前主流框架像 React、Vue 和 Angular 都要用 prop 来传递数据？",-1),qC=n("p",null,[n("strong",null,"维持单向数据流，让组件之间的关系变得简单且可预测。")],-1),zC={class:"flex gap-x-4"},XC=n("div",{class:"bg-gray-100 p-4"},[n("img",{src:NC,class:"h-[260px]"})],-1),WC=n("div",{class:"bg-gray-100 p-4"},[n("img",{src:VC,class:"h-[260px]"})],-1),KC=n("p",null,[n("em",null,"如何解决这种情况？共有哪些方式？")],-1),YC={__name:"15",setup(e){const t={transition:"slide-up",srcSequence:"./pages/lesson_1/index.md,./thinking.md"};return K(se),(s,o)=>{const l=jC;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[UC,JC,j(l,null,{default:W(()=>[qC]),_:1}),n("div",zC,[j(l,null,{default:W(()=>[XC]),_:1}),j(l,null,{default:W(()=>[WC]),_:1})]),j(l,null,{default:W(()=>[KC]),_:1})]),_:1},16)}}},ZC=oe(YC,[["__file","/@slidev/slides/15.md"]]),GC=n("h1",null,[n("span",{class:"text-[60px]"},"Lesson 2")],-1),QC={__name:"16",setup(e){const t={layout:"center",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md"};return K(se),(s,o)=>(E(),te(kf,Oe(Te(t)),{default:W(()=>[GC]),_:1},16))}},eS=oe(QC,[["__file","/@slidev/slides/16.md"]]),tS=n("h1",null,"Component Definition (1/3)",-1),nS=n("p",null,[n("span",{class:"text-highlight-2"},"第一步：定义组件并导出")],-1),sS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," () "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),oS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," HeroItem "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./HeroItem"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"id"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"user-list"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#FF79C6"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      {"),n("span",{style:{color:"#6272A4"}},"/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */"),n("span",{style:{color:"#F8F8F2"}},"} <== "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"这是注释"),n("span",{style:{color:"#F8F8F2"}}," ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      {"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"heros"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"map"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"h"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," <"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{h.id} />)}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," HeroItem "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"./HeroItem"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#50FA7B"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"id"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"user-list"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#FF79C6"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      {"),n("span",{style:{color:"#6272A4"}},"/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */"),n("span",{style:{color:"#F8F8F2"}},"} <== "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"这是注释"),n("span",{style:{color:"#F8F8F2"}}," ")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      {"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"heros"),n("span",{style:{color:"#F8F8F2"}},"."),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"map"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"h"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," <"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"key"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{h.id} />)}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"ul"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),lS=n("p",null,[n("span",{class:"text-gray-600"},"第二步：确定组件接受的属性 props")],-1),rS=n("p",null,[n("span",{class:"text-gray-600"},"第三步：组件内返回 JSX")],-1),aS={__name:"17",setup(e){const t={srcSequence:"./pages/lesson_2/index.md,./component-definition.md"};return K(se),(s,o)=>{const l=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[tS,nS,j(l,Ke({},{ranges:["3","5","all"]}),{default:W(()=>[sS]),_:1},16),j(l,Ke({at:2},{ranges:["none","7","6"]}),{default:W(()=>[oS]),_:1},16),lS,rS]),_:1},16)}}},iS=oe(aS,[["__file","/@slidev/slides/17.md"]]),cS=n("h1",null,"Component Definition (2/3)",-1),uS=n("p",null,[n("span",{class:"text-gray-600"},"第一步：定义组件并导出")],-1),pS=n("p",null,[n("span",{class:"text-highlight-2"},"第二步：声明组件接受的属性 props 以及类型")],-1),dS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"type"),n("span",{style:{color:"#F8F8F2"}}," { "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," FC } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"type"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  item"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    id"),n("span",{style:{color:"#FF79C6"}},"?:"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    name"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    skills"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"[]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}},"> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}},"> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"props"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"type"),n("span",{style:{color:"#F8F8F2"}}," { "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," FC } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"type"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  item"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    id"),n("span",{style:{color:"#FF79C6"}},"?:"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    name"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    skills"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"[]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}},"> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {}")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}},"> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"props"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),fS=n("p",null,[n("span",{class:"text-gray-600"},"第三步：组件内返回 JSX")],-1),hS={__name:"18",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"};return K(se),(s,o)=>{const l=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[cS,uS,pS,j(l,Ke({},{ranges:["all","4-10","2,13","12"]}),{default:W(()=>[dS]),_:1},16),fS]),_:1},16)}}},FS=oe(hS,[["__file","/@slidev/slides/18.md"]]),mS=n("h1",null,"Component Definition (3/3)",-1),yS=n("p",null,[n("span",{class:"text-gray-600"},"第一步：定义组件并导出")],-1),gS=n("p",null,[n("span",{class:"text-gray-600"},"第二步：确定组件接受的属性 props")],-1),vS=n("p",null,[n("span",{class:"text-highlight-2"},"第三步：组件内返回 JSX")],-1),_S=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}},"> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.name}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.skills."),n("span",{style:{color:"#50FA7B"}},"join"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},", "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  )")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}},"> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.name}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.skills."),n("span",{style:{color:"#50FA7B"}},"join"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},", "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  )")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),kS={__name:"19",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"};return K(se),(s,o)=>{const l=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[mS,yS,gS,vS,j(l,Ke({},{ranges:["all","5-9"]}),{default:W(()=>[_S]),_:1},16)]),_:1},16)}}},bS=oe(kS,[["__file","/@slidev/slides/19.md"]]),xS=n("h1",null,[u("Review "),n("code",null,"HeroItem.tsx")],-1),wS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"*"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," React "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"type"),n("span",{style:{color:"#F8F8F2"}}," { "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," FC } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"type"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  item"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    id"),n("span",{style:{color:"#FF79C6"}},"?:"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    name"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    skills"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"[]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}},"> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.id}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.name}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.skills."),n("span",{style:{color:"#50FA7B"}},"join"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},", "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  )")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#6272A4"}},"// HeroItem.tsx")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#BD93F9"}},"*"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," React "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"type"),n("span",{style:{color:"#F8F8F2"}}," { "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"FunctionComponentFactory"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"as"),n("span",{style:{color:"#F8F8F2"}}," FC } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"type"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  item"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    id"),n("span",{style:{color:"#FF79C6"}},"?:"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    name"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    skills"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},"[]")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"HeroItem"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"FC"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"Props"),n("span",{style:{color:"#F8F8F2"}},"> "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," ({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"item"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.id}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.name}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">{item.skills."),n("span",{style:{color:"#50FA7B"}},"join"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},", "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},")}</"),n("span",{style:{color:"#FF79C6"}},"span"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </"),n("span",{style:{color:"#FF79C6"}},"li"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  )")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," HeroItem;")])])])],-1),CS={__name:"20",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md"};return K(se),(s,o)=>{const l=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[xS,j(l,Ke({},{ranges:[""]}),{default:W(()=>[wS]),_:1},16)]),_:1},16)}}},SS=oe(CS,[["__file","/@slidev/slides/20.md"]]),ES=n("h1",null,"Hooks",-1),AS=n("p",null,"也称钩子，在 React 中 Hooks 分为两类：",-1),$S=n("ul",null,[n("li",null,"内置 Built-in hooks；"),n("li",null,"自定义 Custom hooks；")],-1),RS=n("p",null,[u("React 提供了很多内置 Hooks，主要分为"),n("strong",null,"六种"),u("：")],-1),TS=n("code",null,"useState",-1),IS=n("code",null,"useReducer",-1),HS=n("code",null,"useContext",-1),OS=n("code",null,"useRef",-1),PS=n("code",null,"useImperativeHandle",-1),LS=n("code",null,"useEffect",-1),BS=n("code",null,"useLayoutEffect",-1),MS=n("code",null,"useMemo",-1),DS=n("code",null,"useCallback",-1),jS=n("code",null,"useTransition",-1),NS=n("code",null,"useDeferredValue",-1),VS=n("code",null,"useId",-1),US=n("p",null,"自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。",-1),JS={__name:"21",setup(e){const t={srcSequence:"./pages/lesson_2/index.md,./hooks.md"},s=K(se);return(o,l)=>{const r=xf;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[ES,AS,$S,RS,n("ul",null,[n("li",null,[u("(2) "),j(r,{to:x(s).nav.currentPage+1},{default:W(()=>[u("状态 Hooks")]),_:1},8,["to"]),u(" - "),TS,u(" / "),IS,u("；")]),n("li",null,[u("(1) "),j(r,{to:x(s).nav.currentPage+2},{default:W(()=>[u("上下文 Hooks")]),_:1},8,["to"]),u(" - "),HS,u("；")]),n("li",null,[u("(2) "),j(r,{to:x(s).nav.currentPage+3},{default:W(()=>[u("引用 Hooks")]),_:1},8,["to"]),u(" - "),OS,u(" / "),PS,u("；")]),n("li",null,[u("(2) "),j(r,{to:x(s).nav.currentPage+4},{default:W(()=>[u("副作用 Hooks")]),_:1},8,["to"]),u(" - "),LS,u(" / "),BS,u("；")]),n("li",null,[u("(4) "),j(r,{to:x(s).nav.currentPage+5},{default:W(()=>[u("性能 Hooks")]),_:1},8,["to"]),u(" - "),MS,u(" / "),DS,u(" / "),jS,u(" / "),NS,u("；")]),n("li",null,[u("(3) "),j(r,{to:x(s).nav.currentPage+6},{default:W(()=>[u("其他 Hooks")]),_:1},8,["to"]),u(" - "),VS,u("；")])]),US]),_:1},16)}}},qS=oe(JS,[["__file","/@slidev/slides/21.md"]]),zS=n("h1",null,"State Hooks",-1),XS=n("p",null,"State hooks 是指允许组件“记住”信息状态的函数钩子，共有两种：",-1),WS=n("code",null,"useState",-1),KS=n("code",null,"useReducer",-1),YS=n("br",null,null,-1),ZS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}},"[]>([]);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [loading, setLoading] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),n("span",{style:{color:"#F8F8F2"}},">("),n("span",{style:{color:"#BD93F9"}},"false"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  React."),n("span",{style:{color:"#50FA7B"}},"useEffect"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"setLoading"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"fetch"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"heros.json"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"(({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"setHeros"),n("span",{style:{color:"#F8F8F2"}},"(users);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      })")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"catch"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," console."),n("span",{style:{color:"#50FA7B"}},"error"),n("span",{style:{color:"#F8F8F2"}},"(error))")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"finally"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"setLoading"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"false"),n("span",{style:{color:"#F8F8F2"}},"));")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }, []);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}},"[]>([]);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [loading, setLoading] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),n("span",{style:{color:"#F8F8F2"}},">("),n("span",{style:{color:"#BD93F9"}},"false"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  React."),n("span",{style:{color:"#50FA7B"}},"useEffect"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"setLoading"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"true"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"fetch"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"heros.json"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"(({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"setHeros"),n("span",{style:{color:"#F8F8F2"}},"(users);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      })")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"catch"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," console."),n("span",{style:{color:"#50FA7B"}},"error"),n("span",{style:{color:"#F8F8F2"}},"(error))")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"finally"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"setLoading"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#BD93F9"}},"false"),n("span",{style:{color:"#F8F8F2"}},"));")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }, []);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),GS=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"reducer"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"state"),n("span",{style:{color:"#F8F8F2"}},", "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"action"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," { type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},", payload"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}},"[] }) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"if"),n("span",{style:{color:"#F8F8F2"}}," (action.type "),n("span",{style:{color:"#FF79C6"}},"==="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"setHeros"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#FF79C6"}},"..."),n("span",{style:{color:"#F8F8F2"}},"action.payload];")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"throw"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Error"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"Unknown action."),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, dispatch] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"useReducer"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}},"[]>(reducer, [] "),n("span",{style:{color:"#6272A4"}},"/* ,initFn */"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  React."),n("span",{style:{color:"#50FA7B"}},"useEffect"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"fetch"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"heros.json"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"(({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"dispatch"),n("span",{style:{color:"#F8F8F2"}},"({ type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"setHeros"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},", payload"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," users });")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      })")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"catch"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," console."),n("span",{style:{color:"#50FA7B"}},"error"),n("span",{style:{color:"#F8F8F2"}},"(error));")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }, []);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"reducer"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"state"),n("span",{style:{color:"#F8F8F2"}},", "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"action"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," { type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),n("span",{style:{color:"#F8F8F2"}},", payload"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}},"[] }) {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"if"),n("span",{style:{color:"#F8F8F2"}}," (action.type "),n("span",{style:{color:"#FF79C6"}},"==="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"setHeros"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," ["),n("span",{style:{color:"#FF79C6"}},"..."),n("span",{style:{color:"#F8F8F2"}},"action.payload];")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"throw"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"Error"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"Unknown action."),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, dispatch] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"useReducer"),n("span",{style:{color:"#F8F8F2"}},"<"),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"HeroItem"),n("span",{style:{color:"#F8F8F2"}},"[]>(reducer, [] "),n("span",{style:{color:"#6272A4"}},"/* ,initFn */"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  React."),n("span",{style:{color:"#50FA7B"}},"useEffect"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"fetch"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"heros.json"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},")")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"(({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"dispatch"),n("span",{style:{color:"#F8F8F2"}},"({ type"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"setHeros"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},", payload"),n("span",{style:{color:"#FF79C6"}},":"),n("span",{style:{color:"#F8F8F2"}}," users });")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      })")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"catch"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"error"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," console."),n("span",{style:{color:"#50FA7B"}},"error"),n("span",{style:{color:"#F8F8F2"}},"(error));")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }, []);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),QS={__name:"22",setup(e){const t={clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/state.md"},s=K(se);return(o,l)=>{const r=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[zS,XS,n("ul",null,[n("li",null,[WS,u("："),n("span",{class:He({"text-gradient-red":x(s).nav.clicks<3&&x(s).nav.clicks>=1})},"声明可以直接更新的状态变量；",2)]),n("li",null,[KS,u("："),n("span",{class:He({"text-gradient-red":x(s).nav.clicks>=3})},"声明一个状态变量，参数为更新逻辑；",2)])]),YS,x(s).nav.clicks<3&&x(s).nav.clicks>=1?(E(),te(r,Ke({key:0},{at:1},{ranges:["2,3","6,9,12"]}),{default:W(()=>[ZS]),_:1},16)):ye("v-if",!0),x(s).nav.clicks>=3?(E(),te(r,Ke({key:1},{at:3},{ranges:["7","1-4","7","12"]}),{default:W(()=>[GS]),_:1},16)):ye("v-if",!0)]),_:1},16)}}},e6=oe(QS,[["__file","/@slidev/slides/22.md"]]),t6=n("h1",null,"Context Hooks",-1),n6=n("p",null,[u("在组件的顶层调用 useContext 以读取和订阅上下文，它需要和 "),n("code",null,"createContext"),u(" 配合使用：")],-1),s6=n("iframe",{src:"https://stackblitz.com/edit/react-ts-wwsbt2?ctl=1&embed=1&file=App.tsx",class:"w-full h-[calc(100%-55px)]"},null,-1),o6={__name:"23",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/context.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[t6,n6,s6]),_:1},16))}},l6=oe(o6,[["__file","/@slidev/slides/23.md"]]),r6=n("h1",null,"Ref Hooks",-1),a6=n("p",null,"Ref hooks 允许组件保存一些不用于渲染的信息。",-1),i6=n("ul",null,[n("li",null,[n("code",null,"useRef"),u("：引用渲染不需要的值；")]),n("li",null,[n("code",null,"useImperativeHandle"),u("：自定义公开 ref 的句柄；")])],-1),c6=n("iframe",{src:"https://stackblitz.com/edit/react-ts-4qdrrv?ctl=1&embed=1&file=App.tsx",class:"w-full h-[calc(100%-135px)] mt-[16px]"},null,-1),u6={__name:"24",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/ref.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[r6,a6,i6,c6]),_:1},16))}},p6=oe(u6,[["__file","/@slidev/slides/24.md"]]),d6=n("h1",null,"Effect Hooks",-1),f6=n("p",null,[u("用以处理"),n("strong",null,"副作用"),u("的钩子。副作用包括处理网络 I/O、浏览器 DOM 操作、动画以及其他库等等。")],-1),h6=n("ul",null,[n("li",null,[n("code",null,"useEffect"),u("：处理副作用，在 React 挂载 DOM 之前"),n("strong",null,"异步"),u("执行；")]),n("li",null,[n("code",null,"useLayoutEffect"),u("："),n("code",null,"useEffect"),u(" 的变体，在浏览器绘制 DOM 之前"),n("strong",null,"同步"),u("执行；")])],-1),F6=n("br",null,null,-1),m6=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"([]);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  React."),n("span",{style:{color:"#50FA7B"}},"useEffect"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"fetch"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"heros.json"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"))")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"result"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," result."),n("span",{style:{color:"#50FA7B"}},"json"),n("span",{style:{color:"#F8F8F2"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"(({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"setHeros"),n("span",{style:{color:"#F8F8F2"}},"(users);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      })")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }, []);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"class"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"user-list"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},">{"),n("span",{style:{color:"#6272A4"}},"/* ... */"),n("span",{style:{color:"#F8F8F2"}},"}</"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  )")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"([]);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  React."),n("span",{style:{color:"#50FA7B"}},"useEffect"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#50FA7B"}},"fetch"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"heros.json"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},"))")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"(("),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"result"),n("span",{style:{color:"#F8F8F2"}},") "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," result."),n("span",{style:{color:"#50FA7B"}},"json"),n("span",{style:{color:"#F8F8F2"}},"())")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      ."),n("span",{style:{color:"#50FA7B"}},"then"),n("span",{style:{color:"#F8F8F2"}},"(({ "),n("span",{style:{color:"#FFB86C","font-style":"italic"}},"users"),n("span",{style:{color:"#F8F8F2"}}," }) "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        "),n("span",{style:{color:"#50FA7B"}},"setHeros"),n("span",{style:{color:"#F8F8F2"}},"(users);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      })")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }, []);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"class"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"user-list"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},">{"),n("span",{style:{color:"#6272A4"}},"/* ... */"),n("span",{style:{color:"#F8F8F2"}},"}</"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  )")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),y6=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"([]);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  React."),n("span",{style:{color:"#50FA7B"}},"useLayoutEffect"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," $list "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," document."),n("span",{style:{color:"#50FA7B"}},"querySelector"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"#user-list"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," { width, height } "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," $list."),n("span",{style:{color:"#50FA7B"}},"getBoundingClientRect"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    console."),n("span",{style:{color:"#50FA7B"}},"log"),n("span",{style:{color:"#F8F8F2"}},"(width, height);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }, [heros]);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"class"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"user-list"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},">{"),n("span",{style:{color:"#6272A4"}},"/* ... */"),n("span",{style:{color:"#F8F8F2"}},"}</"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  )")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"export"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"default"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"App"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," [heros, setHeros] "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," React."),n("span",{style:{color:"#50FA7B"}},"useState"),n("span",{style:{color:"#F8F8F2"}},"([]);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  React."),n("span",{style:{color:"#50FA7B"}},"useLayoutEffect"),n("span",{style:{color:"#F8F8F2"}},"(() "),n("span",{style:{color:"#FF79C6"}},"=>"),n("span",{style:{color:"#F8F8F2"}}," {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," $list "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," document."),n("span",{style:{color:"#50FA7B"}},"querySelector"),n("span",{style:{color:"#F8F8F2"}},"("),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"#user-list"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},");")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," { width, height } "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," $list."),n("span",{style:{color:"#50FA7B"}},"getBoundingClientRect"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    console."),n("span",{style:{color:"#50FA7B"}},"log"),n("span",{style:{color:"#F8F8F2"}},"(width, height);")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  }, [heros]);")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"class"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"user-list"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}},">{"),n("span",{style:{color:"#6272A4"}},"/* ... */"),n("span",{style:{color:"#F8F8F2"}},"}</"),n("span",{style:{color:"#FF79C6"}},"ul"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  )")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),g6={href:"https://stackblitz.com/edit/lesson-one-jsx?devToolsHeight=33&embed=1&file=App.tsx",target:"_blank"},v6={__name:"25",setup(e){const t={clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/effect.md"},s=K(se);return(o,l)=>{const r=Jt,a=Ls("click");return E(),te(Ne,Oe(Te(t)),{default:W(()=>[d6,f6,h6,F6,Qe(n("div",null,[j(r,Ke({},{ranges:["4-12"]}),{default:W(()=>[m6]),_:1},16)],512),[[ls,x(s).nav.clicks===1]]),Qe(n("div",null,[j(r,Ke({},{ranges:["4-9"]}),{default:W(()=>[y6]),_:1},16)],512),[[ls,x(s).nav.clicks===2]]),n("p",null,[n("em",null,[Qe((E(),q("a",g6,[u("Show me the code")])),[[a,2]])])])]),_:1},16)}}},_6=oe(v6,[["__file","/@slidev/slides/25.md"]]),k6=n("h1",null,"Performance Hooks",-1),b6=n("p",null,"避免冗余的重新渲染、减少昂贵的计算开销以及降低由其带来的 UI 更新的卡顿等优化钩子。",-1),x6=n("ul",null,[n("li",null,[n("a",{href:"https://stackblitz.com/edit/stackblitz-starters-wfafpe?ctl=1&embed=1&file=src%2FApp.tsx",target:"_blank",rel:"noopener"},"useMemo"),u("：缓存计算结果（侧重点是值），既可以缓存值，也可以缓存函数（等价于 "),n("code",null,"useCallback"),u("）；")]),n("li",null,[n("a",{href:"https://stackblitz.com/edit/react-ts-6zym8d?ctl=1&embed=1&file=App.tsx",target:"_blank",rel:"noopener"},"useCallback"),u("：缓存函数，避免由于重新渲染每次讲新函数传递到子组件，导致子组件重新渲染；")]),n("li",null,[n("code",null,"useTransition"),u("：将状态变更标记为非阻塞，并允许其他更新中断它 - 针对状态;")]),n("li",null,[n("code",null,"useDeferredValue"),u("：允许延迟更新 UI 的非关键部分，并让其他部分先更新 - 针对值。")])],-1),w6={__name:"26",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/performance.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[k6,b6,x6]),_:1},16))}},C6=oe(w6,[["__file","/@slidev/slides/26.md"]]),S6=n("h1",null,"Other Hooks",-1),E6=n("p",null,"这些 Hooks 对库作者有用，在业务代码中不常用。",-1),A6=n("ul",null,[n("li",null,[n("code",null,"useId"),u("：组件的顶层调用 "),n("code",null,"useId"),u(" 以生成唯一 ID；")]),n("li",null,[n("code",null,"useDebugValue"),u(": 在自定义 Hook 的顶层调用 "),n("code",null,"useDebugValue"),u(" 以显示 React DevTools 的可读调试值；")]),n("li",null,[n("code",null,"useSyncExternalStore"),u("：在组件的顶层调用 "),n("code",null,"useSyncExternalStore"),u(" 以从外部数据存储中读取值。")])],-1),$6=n("br",null,null,-1),R6=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { useId } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"PasswordField"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," passwordHintId "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"useId"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"label"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        Password:")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        <"),n("span",{style:{color:"#FF79C6"}},"input"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"password"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"aria-describedby"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{passwordHintId} />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      </"),n("span",{style:{color:"#FF79C6"}},"label"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"p"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{passwordHintId}>The password should contain at least 18 characters</"),n("span",{style:{color:"#FF79C6"}},"p"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])]),n("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"import"),n("span",{style:{color:"#F8F8F2"}}," { useId } "),n("span",{style:{color:"#FF79C6"}},"from"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F1FA8C"}},"react"),n("span",{style:{color:"#E9F284"}},"'"),n("span",{style:{color:"#F8F8F2"}},";")]),u(`
`),n("span",{class:"line"}),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#FF79C6"}},"function"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"PasswordField"),n("span",{style:{color:"#F8F8F2"}},"() {")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"const"),n("span",{style:{color:"#F8F8F2"}}," passwordHintId "),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B"}},"useId"),n("span",{style:{color:"#F8F8F2"}},"();")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  "),n("span",{style:{color:"#FF79C6"}},"return"),n("span",{style:{color:"#F8F8F2"}}," (")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    <>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"label"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        Password:")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"        <"),n("span",{style:{color:"#FF79C6"}},"input"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F1FA8C"}},"password"),n("span",{style:{color:"#E9F284"}},'"'),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"aria-describedby"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{passwordHintId} />")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      </"),n("span",{style:{color:"#FF79C6"}},"label"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"      <"),n("span",{style:{color:"#FF79C6"}},"p"),n("span",{style:{color:"#F8F8F2"}}," "),n("span",{style:{color:"#50FA7B","font-style":"italic"}},"id"),n("span",{style:{color:"#FF79C6"}},"="),n("span",{style:{color:"#F8F8F2"}},"{passwordHintId}>The password should contain at least 18 characters</"),n("span",{style:{color:"#FF79C6"}},"p"),n("span",{style:{color:"#F8F8F2"}},">")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"    </>")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"  );")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#F8F8F2"}},"}")])])])],-1),T6={__name:"27",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/other.md"};return K(se),(s,o)=>{const l=Jt;return E(),te(Ne,Oe(Te(t)),{default:W(()=>[S6,E6,A6,$6,j(l,Ke({},{ranges:["4,11"]}),{default:W(()=>[R6]),_:1},16)]),_:1},16)}}},I6=oe(T6,[["__file","/@slidev/slides/27.md"]]),H6=n("h1",null,"Custom Hooks",-1),O6=n("p",null,"约定：",-1),P6=n("li",null,[u("以 "),n("code",null,"use"),u(" 开头并以"),n("strong",null,"小驼峰"),u("的方式命名，比如 "),n("code",null,"useState"),u(" (内置) 或 "),n("code",null,"useOnlineStatus"),u("；")],-1),L6=n("li",null,[u("可以返回任何值：若返回多个值，建议将返回值作为对象返回，不要学 "),n("code",null,"useState"),u(" 的返回方式；")],-1),B6={class:"text-highlight"},M6=n("p",null,[n("em",null,"❗️不提倡单纯地为了自定义 hook 而去自定义。")],-1),D6=[M6],j6=n("p",null,[n("em",null,"❗️自定义 hook 仅共享了逻辑，并不共享状态。")],-1),N6=[j6],V6={href:"https://stackblitz.com/edit/react-ts-thmkaf?ctl=1&embed=1&file=App.tsx",target:"_blank"},U6={__name:"28",setup(e){const t={srcSequence:"./pages/lesson_2/index.md,./custom-hooks.md"};return K(se),(s,o)=>{const l=Ls("click");return E(),te(Ne,Oe(Te(t)),{default:W(()=>[H6,O6,n("ul",null,[P6,L6,n("li",null,[u("只要是使用了 React 内置的 hooks，那么必须在组件的顶层作用域调用，不可放到分支或循环中。"),Qe((E(),q("span",B6,[u("?")])),[[l,2]])])]),Qe((E(),q("div",null,D6)),[[l,1]]),Qe((E(),q("div",null,N6)),[[l,3]]),n("p",null,[n("em",null,[Qe((E(),q("a",V6,[u("Show me the code")])),[[l,4]])])])]),_:1},16)}}},J6=oe(U6,[["__file","/@slidev/slides/28.md"]]),q6=n("h1",null,"Thinking",-1),z6=n("p",null,"What is update between React 17 and 18?",-1),X6={__name:"29",setup(e){const t={hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./what-is-update-in-17-and-18.md"};return K(se),(s,o)=>(E(),te(Ne,Oe(Te(t)),{default:W(()=>[q6,z6]),_:1},16))}},W6=oe(X6,[["__file","/@slidev/slides/29.md"]]),K6=[{path:"1",name:"page-1",component:jb,meta:{css:"unocss",class:"text-center",hideInToc:!0,transition:"slide-left",title:"React Shared",theme:"dracula",favicon:"./public/images/logo-react.ico",drawings:{enabled:!1,persist:!1},routerMode:"hash",lineNumbers:!1,highlighter:"shiki",srcSequence:"./pages/welcome-to-react.md",slide:{raw:null,title:'<span class="font-semibold text-[48px]">Welcome to <span class="font-bold text-gradient-red text-[72px]">React</span></span>',level:1,content:`<mdi-react class="text-[#4EC5D4] animate-spin-slow text-[100px] -mt-[100px] mb-6" />

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
`,id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:tx,meta:{title:"Schedule",hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./schedule.md",slide:{raw:`---
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
`,title:"Lesson One",level:1,content:"# Lesson One",frontmatter:{},index:1,start:13,end:19},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/schedule.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:ax,meta:{layout:"center",srcSequence:"./pages/lesson_1/index.md",slide:{raw:`---
layout: 'center'
---

# <span class="text-[60px]">Lesson 1</span>
`,title:'<span class="text-[60px]">Lesson 1</span>',level:1,content:'# <span class="text-[60px]">Lesson 1</span>',frontmatter:{layout:"center",srcSequence:"./pages/lesson_1/index.md"},index:2,start:7,end:13,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",raw:`---
layout: 'center'
---

# <span class="text-[60px]">Lesson 1</span>
`,title:'<span class="text-[60px]">Lesson 1</span>',level:1,content:'# <span class="text-[60px]">Lesson 1</span>',frontmatter:{layout:"center"},index:1,start:7,end:13},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/index.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Lx,meta:{clicks:9,layout:"two-cols",transition:"slide-up",title:"What is React?",srcSequence:"./pages/lesson_1/index.md,./what-is-react.md",slide:{raw:`---
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
`,id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Nx,meta:{title:"What is JSX?",srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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

那么在用 React 实现这个需求之前，我先给大家介绍一下 React 中核心点之一的 JSX。
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

那么在用 React 实现这个需求之前，我先给大家介绍一下 React 中核心点之一的 JSX。`,index:4,start:0,end:44,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
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

那么在用 React 实现这个需求之前，我先给大家介绍一下 React 中核心点之一的 JSX。
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

那么在用 React 实现这个需求之前，我先给大家介绍一下 React 中核心点之一的 JSX。`,index:0,start:0,end:44},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:`<p>React 的特点之一就是 JSX，那什么是 JSX 呢，它对我们开发人员有什么帮助呢？</p>
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
<p>那么在用 React 实现这个需求之前，我先给大家介绍一下 React 中核心点之一的 JSX。</p>
`,id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Wx,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
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
`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:aw,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
hideInToc: true
---

# React JSX vs Vue Template

<span class="text-gray-400">下表为 React JSX 和 Vue Template 的异同。</span>


| 对比                                                             | React                                                                        | Vue                                               |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| 组件调用                                                         | 大驼峰                                                                       | 大驼峰、小驼峰、短横线均可                        |
| 原生标签                                                         | **必须**闭合（包括自闭合）                                                   | 与 HTML 无异                                            |
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
| 原生标签                                                         | **必须**闭合（包括自闭合）                                                   | 与 HTML 无异                                            |
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
| 原生标签                                                         | **必须**闭合（包括自闭合）                                                   | 与 HTML 无异                                            |
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
| 原生标签                                                         | **必须**闭合（包括自闭合）                                                   | 与 HTML 无异                                            |
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
<\/script>`,frontmatter:{hideInToc:!0},index:2,start:96,end:133},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:dw,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md",slide:{raw:`---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

对于右侧的页面，左边的 App.tsx 就是所有的代码。

和刚才一样，我们先把所有的方法折叠起来，逐一地为大家解释。

首先，从整体来看，最主要的部分就是声明了名字为 App 的函数，并且使用默认导出将它暴露出去。这个 App 的函数实际上就是页面的根组件。

（将 function App 展开）我们将它展开后，先忽略这些 hooks，我们直接来到 40 行 return 语句（展开 return 语句展开）。

return 语句里就是用 jsx 实现的页面结构，一个 ul 和用大括号包裹的三元表达式；

第 42 行就是动态渲染，这里用了三元表达式，用来判断如果页面加载中显示 loading 组件，loading 结束判断是否获取到了数据，如果有 heros 的数据，则遍历展示，如果没有则显示 empty 组件。

这段代码如果用 Vue 的 template 模板语法翻译过来的话，就是：

（打开 line_42.vue 文件）如果繁琐一些写的话，就是上面这部分 template，大家可以看到我们需要写很多 template 用来做逻辑判断；即使是简洁的写法，仍然要写很多。

当然对于 Vue 来说，构建页面的 template 语法仅支持 v-if 的逻辑判断，而对于 React 来说，它就是 JS 的语法，所以它支持三元运算。

而我们可以直接使用 ES6 或 TS 的 map 方法来遍历数组循环创建多个子组件，heros.map 实际上也等价于 vue 的 v-for。

-->`,title:"Heros with JSX",level:1,content:`# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />`,frontmatter:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./what-is-jsx.md"},note:`有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

对于右侧的页面，左边的 App.tsx 就是所有的代码。

和刚才一样，我们先把所有的方法折叠起来，逐一地为大家解释。

首先，从整体来看，最主要的部分就是声明了名字为 App 的函数，并且使用默认导出将它暴露出去。这个 App 的函数实际上就是页面的根组件。

（将 function App 展开）我们将它展开后，先忽略这些 hooks，我们直接来到 40 行 return 语句（展开 return 语句展开）。

return 语句里就是用 jsx 实现的页面结构，一个 ul 和用大括号包裹的三元表达式；

第 42 行就是动态渲染，这里用了三元表达式，用来判断如果页面加载中显示 loading 组件，loading 结束判断是否获取到了数据，如果有 heros 的数据，则遍历展示，如果没有则显示 empty 组件。

这段代码如果用 Vue 的 template 模板语法翻译过来的话，就是：

（打开 line_42.vue 文件）如果繁琐一些写的话，就是上面这部分 template，大家可以看到我们需要写很多 template 用来做逻辑判断；即使是简洁的写法，仍然要写很多。

当然对于 Vue 来说，构建页面的 template 语法仅支持 v-if 的逻辑判断，而对于 React 来说，它就是 JS 的语法，所以它支持三元运算。

而我们可以直接使用 ES6 或 TS 的 map 方法来遍历数组循环创建多个子组件，heros.map 实际上也等价于 vue 的 v-for。`,index:7,start:133,end:170,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",raw:`---
hideInToc: true
---

# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />

<!-- 

有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

对于右侧的页面，左边的 App.tsx 就是所有的代码。

和刚才一样，我们先把所有的方法折叠起来，逐一地为大家解释。

首先，从整体来看，最主要的部分就是声明了名字为 App 的函数，并且使用默认导出将它暴露出去。这个 App 的函数实际上就是页面的根组件。

（将 function App 展开）我们将它展开后，先忽略这些 hooks，我们直接来到 40 行 return 语句（展开 return 语句展开）。

return 语句里就是用 jsx 实现的页面结构，一个 ul 和用大括号包裹的三元表达式；

第 42 行就是动态渲染，这里用了三元表达式，用来判断如果页面加载中显示 loading 组件，loading 结束判断是否获取到了数据，如果有 heros 的数据，则遍历展示，如果没有则显示 empty 组件。

这段代码如果用 Vue 的 template 模板语法翻译过来的话，就是：

（打开 line_42.vue 文件）如果繁琐一些写的话，就是上面这部分 template，大家可以看到我们需要写很多 template 用来做逻辑判断；即使是简洁的写法，仍然要写很多。

当然对于 Vue 来说，构建页面的 template 语法仅支持 v-if 的逻辑判断，而对于 React 来说，它就是 JS 的语法，所以它支持三元运算。

而我们可以直接使用 ES6 或 TS 的 map 方法来遍历数组循环创建多个子组件，heros.map 实际上也等价于 vue 的 v-for。

-->`,title:"Heros with JSX",level:1,content:`# Heros with JSX

接下来我们看看如何用 JSX 来实现获取“英雄列表”的功能。

<iframe src="https://stackblitz.com/edit/lesson-one-jsx?ctl=1&embed=1&file=index.tsx&hideNavigation=1&theme=dark" class="w-full h-[calc(100%-55px)]" />`,frontmatter:{hideInToc:!0},note:`有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。

我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx => App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。

对于右侧的页面，左边的 App.tsx 就是所有的代码。

和刚才一样，我们先把所有的方法折叠起来，逐一地为大家解释。

首先，从整体来看，最主要的部分就是声明了名字为 App 的函数，并且使用默认导出将它暴露出去。这个 App 的函数实际上就是页面的根组件。

（将 function App 展开）我们将它展开后，先忽略这些 hooks，我们直接来到 40 行 return 语句（展开 return 语句展开）。

return 语句里就是用 jsx 实现的页面结构，一个 ul 和用大括号包裹的三元表达式；

第 42 行就是动态渲染，这里用了三元表达式，用来判断如果页面加载中显示 loading 组件，loading 结束判断是否获取到了数据，如果有 heros 的数据，则遍历展示，如果没有则显示 empty 组件。

这段代码如果用 Vue 的 template 模板语法翻译过来的话，就是：

（打开 line_42.vue 文件）如果繁琐一些写的话，就是上面这部分 template，大家可以看到我们需要写很多 template 用来做逻辑判断；即使是简洁的写法，仍然要写很多。

当然对于 Vue 来说，构建页面的 template 语法仅支持 v-if 的逻辑判断，而对于 React 来说，它就是 JS 的语法，所以它支持三元运算。

而我们可以直接使用 ES6 或 TS 的 map 方法来遍历数组循环创建多个子组件，heros.map 实际上也等价于 vue 的 v-for。`,index:3,start:133,end:170},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/what-is-jsx.md",noteHTML:`<p>有了以上对于 JSX 的初步了解，我们看看用 React 是如何来实现的。</p>
<p>我们所有的注意力只需要集中在 App.tsx 即可。首先，React 约定了所有使用了 JSX 的文件，都要以 jsx 或者 tsx 作为文件后缀。假如我现在把 App.tsx 改为 App.ts（直接修改 App.tsx =&gt; App.ts），大家可以看到，修改之后会直接报错，而且编辑器插件也会报错。</p>
<p>对于右侧的页面，左边的 App.tsx 就是所有的代码。</p>
<p>和刚才一样，我们先把所有的方法折叠起来，逐一地为大家解释。</p>
<p>首先，从整体来看，最主要的部分就是声明了名字为 App 的函数，并且使用默认导出将它暴露出去。这个 App 的函数实际上就是页面的根组件。</p>
<p>（将 function App 展开）我们将它展开后，先忽略这些 hooks，我们直接来到 40 行 return 语句（展开 return 语句展开）。</p>
<p>return 语句里就是用 jsx 实现的页面结构，一个 ul 和用大括号包裹的三元表达式；</p>
<p>第 42 行就是动态渲染，这里用了三元表达式，用来判断如果页面加载中显示 loading 组件，loading 结束判断是否获取到了数据，如果有 heros 的数据，则遍历展示，如果没有则显示 empty 组件。</p>
<p>这段代码如果用 Vue 的 template 模板语法翻译过来的话，就是：</p>
<p>（打开 line_42.vue 文件）如果繁琐一些写的话，就是上面这部分 template，大家可以看到我们需要写很多 template 用来做逻辑判断；即使是简洁的写法，仍然要写很多。</p>
<p>当然对于 Vue 来说，构建页面的 template 语法仅支持 v-if 的逻辑判断，而对于 React 来说，它就是 JS 的语法，所以它支持三元运算。</p>
<p>而我们可以直接使用 ES6 或 TS 的 map 方法来遍历数组循环创建多个子组件，heros.map 实际上也等价于 vue 的 v-for。</p>
`,id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:kw,meta:{title:"Components",clicks:4,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
title: Components
clicks: 4
---

# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2" v-show="$slidev.nav.clicks !== 4">

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

<div :class="{ 'w-full': $slidev.nav.clicks === 4, 'w-1/2': $slidev.nav.clicks !== 4 }">

### <span v-show="$slidev.nav.clicks === 4">🎉</span> Function Component <span v-show="$slidev.nav.clicks === 4">🎉</span> 

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
和 Vue 类似，React 也是以组件的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

React.Fragment 和 空标签 与 vue 中的 template 很相似，都是表示一段页面结构且不会在 DOM 文档流中渲染出来。

React.Fragment 要比空标签具备的功能会更多一点，比如空标签什么属性都无法添加的，React.Fragment 和 vue 的 template 可以为循环组件添加 key 属性，甚至 template 可以做的更多。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，该函数返回 JSX 用以渲染页面；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。
 -->
`,title:"Components",level:1,content:`# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2" v-show="$slidev.nav.clicks !== 4">

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

<div :class="{ 'w-full': $slidev.nav.clicks === 4, 'w-1/2': $slidev.nav.clicks !== 4 }">

### <span v-show="$slidev.nav.clicks === 4">🎉</span> Function Component <span v-show="$slidev.nav.clicks === 4">🎉</span> 

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

</div>`,frontmatter:{title:"Components",clicks:4,srcSequence:"./pages/lesson_1/index.md,./components.md"},note:`和 Vue 类似，React 也是以组件的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

React.Fragment 和 空标签 与 vue 中的 template 很相似，都是表示一段页面结构且不会在 DOM 文档流中渲染出来。

React.Fragment 要比空标签具备的功能会更多一点，比如空标签什么属性都无法添加的，React.Fragment 和 vue 的 template 可以为循环组件添加 key 属性，甚至 template 可以做的更多。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，该函数返回 JSX 用以渲染页面；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。`,index:8,start:0,end:82,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
title: Components
clicks: 4
---

# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2" v-show="$slidev.nav.clicks !== 4">

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

<div :class="{ 'w-full': $slidev.nav.clicks === 4, 'w-1/2': $slidev.nav.clicks !== 4 }">

### <span v-show="$slidev.nav.clicks === 4">🎉</span> Function Component <span v-show="$slidev.nav.clicks === 4">🎉</span> 

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
和 Vue 类似，React 也是以组件的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

React.Fragment 和 空标签 与 vue 中的 template 很相似，都是表示一段页面结构且不会在 DOM 文档流中渲染出来。

React.Fragment 要比空标签具备的功能会更多一点，比如空标签什么属性都无法添加的，React.Fragment 和 vue 的 template 可以为循环组件添加 key 属性，甚至 template 可以做的更多。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，该函数返回 JSX 用以渲染页面；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。
 -->
`,title:"Components",level:1,content:`# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2" v-show="$slidev.nav.clicks !== 4">

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

<div :class="{ 'w-full': $slidev.nav.clicks === 4, 'w-1/2': $slidev.nav.clicks !== 4 }">

### <span v-show="$slidev.nav.clicks === 4">🎉</span> Function Component <span v-show="$slidev.nav.clicks === 4">🎉</span> 

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

</div>`,frontmatter:{title:"Components",clicks:4},note:`和 Vue 类似，React 也是以组件的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

React.Fragment 和 空标签 与 vue 中的 template 很相似，都是表示一段页面结构且不会在 DOM 文档流中渲染出来。

React.Fragment 要比空标签具备的功能会更多一点，比如空标签什么属性都无法添加的，React.Fragment 和 vue 的 template 可以为循环组件添加 key 属性，甚至 template 可以做的更多。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，该函数返回 JSX 用以渲染页面；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。`,index:0,start:0,end:82},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>和 Vue 类似，React 也是以组件的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。</p>
<p>React.Fragment 和 空标签 与 vue 中的 template 很相似，都是表示一段页面结构且不会在 DOM 文档流中渲染出来。</p>
<p>React.Fragment 要比空标签具备的功能会更多一点，比如空标签什么属性都无法添加的，React.Fragment 和 vue 的 template 可以为循环组件添加 key 属性，甚至 template 可以做的更多。</p>
<p>声明 React 组件主要有两种方式：</p>
<ul>
<li>（click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，该函数返回 JSX 用以渲染页面；</li>
<li>（click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；</li>
</ul>
<p>两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；</p>
<p>实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。</p>
<p>不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。</p>
`,id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Cw,meta:{hideInToc:!0,srcSequence:"./pages/lesson_1/index.md,./components.md",slide:{raw:`---
hideInToc: true
---

 # Review components *<a class="text-base" href="https://stackblitz.com/edit/lesson-one-jsx-gxyk2q?file=App.tsx" target="_blank">Link to Code</a>*

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

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既可以把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 语法来将它实例化。

（click）在这里 renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。

（click link）接下来我们看看如何把 renderHero 当做组件来实例化它。

 -->
`,title:'Review components *<a class="text-base" href="https://stackblitz.com/edit/lesson-one-jsx-gxyk2q?file=App.tsx" target="_blank">Link to Code</a>*',level:1,content:`# Review components *<a class="text-base" href="https://stackblitz.com/edit/lesson-one-jsx-gxyk2q?file=App.tsx" target="_blank">Link to Code</a>*

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

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既可以把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 语法来将它实例化。

（click）在这里 renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。

（click link）接下来我们看看如何把 renderHero 当做组件来实例化它。`,index:9,start:82,end:125,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",raw:`---
hideInToc: true
---

 # Review components *<a class="text-base" href="https://stackblitz.com/edit/lesson-one-jsx-gxyk2q?file=App.tsx" target="_blank">Link to Code</a>*

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

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既可以把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 语法来将它实例化。

（click）在这里 renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。

（click link）接下来我们看看如何把 renderHero 当做组件来实例化它。

 -->
`,title:'Review components *<a class="text-base" href="https://stackblitz.com/edit/lesson-one-jsx-gxyk2q?file=App.tsx" target="_blank">Link to Code</a>*',level:1,content:`# Review components *<a class="text-base" href="https://stackblitz.com/edit/lesson-one-jsx-gxyk2q?file=App.tsx" target="_blank">Link to Code</a>*

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

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既可以把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 语法来将它实例化。

（click）在这里 renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。

（click link）接下来我们看看如何把 renderHero 当做组件来实例化它。`,index:1,start:82,end:125},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/components.md",noteHTML:`<p>再次回到之前的用 React 写的“英雄列表”</p>
<p>之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既可以把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 语法来将它实例化。</p>
<p>（click）在这里 renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。</p>
<p>（click link）接下来我们看看如何把 renderHero 当做组件来实例化它。</p>
`,id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:zw,meta:{title:"Lifecycle",clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md",slide:{raw:`---
title: Lifecycle
clicks: 2
---

# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 \`v16.3\` 是 React 生命周期变更的分界线；

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
对于类组件来说，v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期

而对于函数式组件，新生命周期称为 hooks 钩子；同比 Vue2 和 Vue3 的生命周期的变更，我们也可以将 Vue3 的新生命周期称为 hooks。

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 类组件的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数初始化 -> getDerivedStateFromProps 从即将更新的 props 来更新 state 状态，当然包括初始 props -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate 在组件更新之前调用，可以控制组件是否进行更新， 返回 true 时组件更新， 返回 false 则不更新 -> render -> getSnapshotBeforeUpdate 这个生命周期可以忽略，能使用到的场景非常非常少 -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount

 -->`,title:"Lifecycle",level:1,content:`# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 \`v16.3\` 是 React 生命周期变更的分界线；

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

<a href="https://juejin.cn/post/6914112105964634119" target="_blank">https://juejin.cn/post/6914112105964634119</a>`,frontmatter:{title:"Lifecycle",clicks:2,srcSequence:"./pages/lesson_1/index.md,./lifecycle.md"},note:`对于类组件来说，v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期

而对于函数式组件，新生命周期称为 hooks 钩子；同比 Vue2 和 Vue3 的生命周期的变更，我们也可以将 Vue3 的新生命周期称为 hooks。

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 类组件的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数初始化 -> getDerivedStateFromProps 从即将更新的 props 来更新 state 状态，当然包括初始 props -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate 在组件更新之前调用，可以控制组件是否进行更新， 返回 true 时组件更新， 返回 false 则不更新 -> render -> getSnapshotBeforeUpdate 这个生命周期可以忽略，能使用到的场景非常非常少 -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount`,index:10,start:0,end:59,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/lifecycle.md",raw:`---
title: Lifecycle
clicks: 2
---

# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 \`v16.3\` 是 React 生命周期变更的分界线；

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
对于类组件来说，v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期

而对于函数式组件，新生命周期称为 hooks 钩子；同比 Vue2 和 Vue3 的生命周期的变更，我们也可以将 Vue3 的新生命周期称为 hooks。

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 类组件的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数初始化 -> getDerivedStateFromProps 从即将更新的 props 来更新 state 状态，当然包括初始 props -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate 在组件更新之前调用，可以控制组件是否进行更新， 返回 true 时组件更新， 返回 false 则不更新 -> render -> getSnapshotBeforeUpdate 这个生命周期可以忽略，能使用到的场景非常非常少 -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount

 -->`,title:"Lifecycle",level:1,content:`# Lifecycle

React 的**类组件**有生命周期，而**函数式组件**的生命周期是 *hooks*。

版本 \`v16.3\` 是 React 生命周期变更的分界线；

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

<a href="https://juejin.cn/post/6914112105964634119" target="_blank">https://juejin.cn/post/6914112105964634119</a>`,frontmatter:{title:"Lifecycle",clicks:2},note:`对于类组件来说，v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期

而对于函数式组件，新生命周期称为 hooks 钩子；同比 Vue2 和 Vue3 的生命周期的变更，我们也可以将 Vue3 的新生命周期称为 hooks。

这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 类组件的生命周期和变动。

旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。

那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段

挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数初始化 -> getDerivedStateFromProps 从即将更新的 props 来更新 state 状态，当然包括初始 props -> render -> componentDidMount

更新阶段首先会执行 getDerivedStateFromProps -> shouldComponentUpdate 在组件更新之前调用，可以控制组件是否进行更新， 返回 true 时组件更新， 返回 false 则不更新 -> render -> getSnapshotBeforeUpdate 这个生命周期可以忽略，能使用到的场景非常非常少 -> componentDidUpdate

销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount`,index:0,start:0,end:59},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/lifecycle.md",noteHTML:`<p>对于类组件来说，v16.3 版本以下称为旧生命周期；而 v16.3 版本及以上称之为新生命周期</p>
<p>而对于函数式组件，新生命周期称为 hooks 钩子；同比 Vue2 和 Vue3 的生命周期的变更，我们也可以将 Vue3 的新生命周期称为 hooks。</p>
<p>这两张图我是直接从掘金 copy 过来的，因为这部分并不是我们的重点，只是想让大家了解 React 类组件的生命周期和变动。</p>
<p>旧生命周期在这里就不赘述了，大家如果感兴趣可以去了解下，具体文章的地址我放在了下面。</p>
<p>那我们主要来聚焦新生命周期（放大），和 Vue 类似，分为挂载阶段、更新阶段和销毁阶段</p>
<p>挂载阶段也是初始化阶段，从这个张里可以看出来，会先执行 constructor 函数初始化 -&gt; getDerivedStateFromProps 从即将更新的 props 来更新 state 状态，当然包括初始 props -&gt; render -&gt; componentDidMount</p>
<p>更新阶段首先会执行 getDerivedStateFromProps -&gt; shouldComponentUpdate 在组件更新之前调用，可以控制组件是否进行更新， 返回 true 时组件更新， 返回 false 则不更新 -&gt; render -&gt; getSnapshotBeforeUpdate 这个生命周期可以忽略，能使用到的场景非常非常少 -&gt; componentDidUpdate</p>
<p>销毁阶段也叫卸载阶段，只会执行一个生命周期：componentWillUnmount</p>
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:hC,meta:{title:"Hooks",srcSequence:"./pages/lesson_1/index.md,./hooks.md",slide:{raw:'---\ntitle: Hooks\n---\n\n# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link to="17">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link to="18">上下文 Hooks</Link> - `useContext`；\n- (2) <Link to="19">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link to="20">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link to="21">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link to="22">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。\n\n<!-- \n\n -->',title:"Hooks",level:1,content:'# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link to="17">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link to="18">上下文 Hooks</Link> - `useContext`；\n- (2) <Link to="19">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link to="20">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link to="21">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link to="22">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。',frontmatter:{title:"Hooks",srcSequence:"./pages/lesson_1/index.md,./hooks.md"},note:"",index:11,start:0,end:25,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",raw:'---\ntitle: Hooks\n---\n\n# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link to="17">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link to="18">上下文 Hooks</Link> - `useContext`；\n- (2) <Link to="19">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link to="20">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link to="21">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link to="22">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。\n\n<!-- \n\n -->',title:"Hooks",level:1,content:'# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link to="17">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link to="18">上下文 Hooks</Link> - `useContext`；\n- (2) <Link to="19">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link to="20">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link to="21">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link to="22">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。',frontmatter:{title:"Hooks"},note:"",index:0,start:0,end:25},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/hooks.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:$C,meta:{title:"Ant Design",srcSequence:"./pages/lesson_1/index.md,./ant-design.md",slide:{raw:`---
title: Ant Design
---

# Ant Design

https://ant.design/index-cn

Antd pro: https://preview.pro.ant.design/dashboard/analysis

<div class="mt-[24px]" />

# Material UI

https://mui.com/

<div class="mt-[24px]" />

# Semi Design

https://semi.design/zh-CN/

<div class="mt-[24px]" />

# Fluent UI

https://developer.microsoft.com/en-us/fluentui#/controls/web

https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html

<!--
接下来给大家介绍几个 UI 组件库，目前在业内使用比较多的，风格也比较不同。

第一个就是国内使用较多且维护的较好的组件库 - Ant Design，遵照的是蚂蚁的设计风格，它有一套开源的管理控制端 - ant design pro;

第二个就是遵照 google 的设计风格的 React 组件库 Material UI，对比 Antd 它的组件没有那么丰富，但是足够日常开发使用，文档是英文的，国外项目会用的比较多；

第三个是 Semi Design，它来自于字节跳动由抖音团队维护，目前 github star 是将近 7000；

第四个是 Fluent UI，它是来自于微软，下面的链接是它部分风格；

这四个组件库都配套有设计资源，比如 Figma 或 sketch 设计工具的组件库，可以帮助设计人员直接使用对应组件进行页面设计。

大家有兴趣可以点击链接去了解下。
-->
`,title:"Ant Design",level:1,content:`# Ant Design

https://ant.design/index-cn

Antd pro: https://preview.pro.ant.design/dashboard/analysis

<div class="mt-[24px]" />

# Material UI

https://mui.com/

<div class="mt-[24px]" />

# Semi Design

https://semi.design/zh-CN/

<div class="mt-[24px]" />

# Fluent UI

https://developer.microsoft.com/en-us/fluentui#/controls/web

https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html`,frontmatter:{title:"Ant Design",srcSequence:"./pages/lesson_1/index.md,./ant-design.md"},note:`接下来给大家介绍几个 UI 组件库，目前在业内使用比较多的，风格也比较不同。

第一个就是国内使用较多且维护的较好的组件库 - Ant Design，遵照的是蚂蚁的设计风格，它有一套开源的管理控制端 - ant design pro;

第二个就是遵照 google 的设计风格的 React 组件库 Material UI，对比 Antd 它的组件没有那么丰富，但是足够日常开发使用，文档是英文的，国外项目会用的比较多；

第三个是 Semi Design，它来自于字节跳动由抖音团队维护，目前 github star 是将近 7000；

第四个是 Fluent UI，它是来自于微软，下面的链接是它部分风格；

这四个组件库都配套有设计资源，比如 Figma 或 sketch 设计工具的组件库，可以帮助设计人员直接使用对应组件进行页面设计。

大家有兴趣可以点击链接去了解下。`,index:12,start:0,end:46,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",raw:`---
title: Ant Design
---

# Ant Design

https://ant.design/index-cn

Antd pro: https://preview.pro.ant.design/dashboard/analysis

<div class="mt-[24px]" />

# Material UI

https://mui.com/

<div class="mt-[24px]" />

# Semi Design

https://semi.design/zh-CN/

<div class="mt-[24px]" />

# Fluent UI

https://developer.microsoft.com/en-us/fluentui#/controls/web

https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html

<!--
接下来给大家介绍几个 UI 组件库，目前在业内使用比较多的，风格也比较不同。

第一个就是国内使用较多且维护的较好的组件库 - Ant Design，遵照的是蚂蚁的设计风格，它有一套开源的管理控制端 - ant design pro;

第二个就是遵照 google 的设计风格的 React 组件库 Material UI，对比 Antd 它的组件没有那么丰富，但是足够日常开发使用，文档是英文的，国外项目会用的比较多；

第三个是 Semi Design，它来自于字节跳动由抖音团队维护，目前 github star 是将近 7000；

第四个是 Fluent UI，它是来自于微软，下面的链接是它部分风格；

这四个组件库都配套有设计资源，比如 Figma 或 sketch 设计工具的组件库，可以帮助设计人员直接使用对应组件进行页面设计。

大家有兴趣可以点击链接去了解下。
-->
`,title:"Ant Design",level:1,content:`# Ant Design

https://ant.design/index-cn

Antd pro: https://preview.pro.ant.design/dashboard/analysis

<div class="mt-[24px]" />

# Material UI

https://mui.com/

<div class="mt-[24px]" />

# Semi Design

https://semi.design/zh-CN/

<div class="mt-[24px]" />

# Fluent UI

https://developer.microsoft.com/en-us/fluentui#/controls/web

https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html`,frontmatter:{title:"Ant Design"},note:`接下来给大家介绍几个 UI 组件库，目前在业内使用比较多的，风格也比较不同。

第一个就是国内使用较多且维护的较好的组件库 - Ant Design，遵照的是蚂蚁的设计风格，它有一套开源的管理控制端 - ant design pro;

第二个就是遵照 google 的设计风格的 React 组件库 Material UI，对比 Antd 它的组件没有那么丰富，但是足够日常开发使用，文档是英文的，国外项目会用的比较多；

第三个是 Semi Design，它来自于字节跳动由抖音团队维护，目前 github star 是将近 7000；

第四个是 Fluent UI，它是来自于微软，下面的链接是它部分风格；

这四个组件库都配套有设计资源，比如 Figma 或 sketch 设计工具的组件库，可以帮助设计人员直接使用对应组件进行页面设计。

大家有兴趣可以点击链接去了解下。`,index:0,start:0,end:46},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/ant-design.md",noteHTML:`<p>接下来给大家介绍几个 UI 组件库，目前在业内使用比较多的，风格也比较不同。</p>
<p>第一个就是国内使用较多且维护的较好的组件库 - Ant Design，遵照的是蚂蚁的设计风格，它有一套开源的管理控制端 - ant design pro;</p>
<p>第二个就是遵照 google 的设计风格的 React 组件库 Material UI，对比 Antd 它的组件没有那么丰富，但是足够日常开发使用，文档是英文的，国外项目会用的比较多；</p>
<p>第三个是 Semi Design，它来自于字节跳动由抖音团队维护，目前 github star 是将近 7000；</p>
<p>第四个是 Fluent UI，它是来自于微软，下面的链接是它部分风格；</p>
<p>这四个组件库都配套有设计资源，比如 Figma 或 sketch 设计工具的组件库，可以帮助设计人员直接使用对应组件进行页面设计。</p>
<p>大家有兴趣可以点击链接去了解下。</p>
`,id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:DC,meta:{title:"UmiJS",srcSequence:"./pages/lesson_1/index.md,./umijs.md",slide:{raw:`---
title: UmiJS
---

# 📦 UmiJS

https://umijs.org/

<div class="mt-[36px]" />

# NextJs

https://www.nextjs.cn/

<div class="mt-[36px]" />

# Create React App

https://create-react-app.dev/docs/getting-started

<!--
接下来给大家介绍下 React 的一些成熟的开发脚手架；

第一个是 UmiJS，它的扩展性很好，同时 Umi 做了很多更贴地气的功能，比如配置式的路由、补丁方案、antd 的接入、微前端、国际化、权限等，适合开箱即用。它也是作为我们这个系列分享的主要的脚手架。

第二个是 NextJS，它主要用来做 SSR，如果你的项目想要做服务端渲染，那么它是非常好的选择；

第三个是 Create React App，也成为 CRA，它是一个高度封装的脚手架，它比较纯净，除了 React 和 CSS 以外，其他的三方库都需要自己安装，如果用于项目的话，还需要自己安装和配置一些基础库。
 -->
`,title:"UmiJS",level:1,content:`# 📦 UmiJS

https://umijs.org/

<div class="mt-[36px]" />

# NextJs

https://www.nextjs.cn/

<div class="mt-[36px]" />

# Create React App

https://create-react-app.dev/docs/getting-started`,frontmatter:{title:"UmiJS",srcSequence:"./pages/lesson_1/index.md,./umijs.md"},note:`接下来给大家介绍下 React 的一些成熟的开发脚手架；

第一个是 UmiJS，它的扩展性很好，同时 Umi 做了很多更贴地气的功能，比如配置式的路由、补丁方案、antd 的接入、微前端、国际化、权限等，适合开箱即用。它也是作为我们这个系列分享的主要的脚手架。

第二个是 NextJS，它主要用来做 SSR，如果你的项目想要做服务端渲染，那么它是非常好的选择；

第三个是 Create React App，也成为 CRA，它是一个高度封装的脚手架，它比较纯净，除了 React 和 CSS 以外，其他的三方库都需要自己安装，如果用于项目的话，还需要自己安装和配置一些基础库。`,index:13,start:0,end:30,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",raw:`---
title: UmiJS
---

# 📦 UmiJS

https://umijs.org/

<div class="mt-[36px]" />

# NextJs

https://www.nextjs.cn/

<div class="mt-[36px]" />

# Create React App

https://create-react-app.dev/docs/getting-started

<!--
接下来给大家介绍下 React 的一些成熟的开发脚手架；

第一个是 UmiJS，它的扩展性很好，同时 Umi 做了很多更贴地气的功能，比如配置式的路由、补丁方案、antd 的接入、微前端、国际化、权限等，适合开箱即用。它也是作为我们这个系列分享的主要的脚手架。

第二个是 NextJS，它主要用来做 SSR，如果你的项目想要做服务端渲染，那么它是非常好的选择；

第三个是 Create React App，也成为 CRA，它是一个高度封装的脚手架，它比较纯净，除了 React 和 CSS 以外，其他的三方库都需要自己安装，如果用于项目的话，还需要自己安装和配置一些基础库。
 -->
`,title:"UmiJS",level:1,content:`# 📦 UmiJS

https://umijs.org/

<div class="mt-[36px]" />

# NextJs

https://www.nextjs.cn/

<div class="mt-[36px]" />

# Create React App

https://create-react-app.dev/docs/getting-started`,frontmatter:{title:"UmiJS"},note:`接下来给大家介绍下 React 的一些成熟的开发脚手架；

第一个是 UmiJS，它的扩展性很好，同时 Umi 做了很多更贴地气的功能，比如配置式的路由、补丁方案、antd 的接入、微前端、国际化、权限等，适合开箱即用。它也是作为我们这个系列分享的主要的脚手架。

第二个是 NextJS，它主要用来做 SSR，如果你的项目想要做服务端渲染，那么它是非常好的选择；

第三个是 Create React App，也成为 CRA，它是一个高度封装的脚手架，它比较纯净，除了 React 和 CSS 以外，其他的三方库都需要自己安装，如果用于项目的话，还需要自己安装和配置一些基础库。`,index:0,start:0,end:30},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/umijs.md",noteHTML:`<p>接下来给大家介绍下 React 的一些成熟的开发脚手架；</p>
<p>第一个是 UmiJS，它的扩展性很好，同时 Umi 做了很多更贴地气的功能，比如配置式的路由、补丁方案、antd 的接入、微前端、国际化、权限等，适合开箱即用。它也是作为我们这个系列分享的主要的脚手架。</p>
<p>第二个是 NextJS，它主要用来做 SSR，如果你的项目想要做服务端渲染，那么它是非常好的选择；</p>
<p>第三个是 Create React App，也成为 CRA，它是一个高度封装的脚手架，它比较纯净，除了 React 和 CSS 以外，其他的三方库都需要自己安装，如果用于项目的话，还需要自己安装和配置一些基础库。</p>
`,id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:ZC,meta:{transition:"slide-up",title:"Thinking",srcSequence:"./pages/lesson_1/index.md,./thinking.md",slide:{raw:`---
transition: slide-up
---

# Thinking

为什么目前主流框架像 React、Vue 和 Angular 都要用 prop 来传递数据？

<v-click>

**维持单向数据流，让组件之间的关系变得简单且可预测。**

</v-click>

<div class="flex gap-x-4">

<v-click>

<div class="bg-gray-100 p-4">
    <img src="/public/images/think_1.png" class="h-[260px]" />
</div>

</v-click>

<v-click>

<div class="bg-gray-100 p-4">
    <img src="/public/images/think_2.png" class="h-[260px]" />
</div>

</v-click>

</div>

<v-click>

*如何解决这种情况？共有哪些方式？*

</v-click>

<!--
这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

简单给大家两分钟时间思考下；

OK，那我现在公布答案哈，（click）为什么呢？因为要维持单向数据流，大家都知道，实际我们最终渲染的页面是树形结构，树形结构就会有根节点和叶子节点，
那么这个单向数据流的方向是从组件根节点流向叶子节点，且为单向，也就是不允许数据从叶子节点传递到父节点。

那么这种单向数据流的好处对于 React 来说，就是让组件之间的关系简单纯净，同时对于组件的变化是可预测的，因为能影响到子组件变化的只能是父组件传给他的 props。
那么对于 Angular 来说，实际上还有其他的好处，大家有兴趣的话可以去了解下。

下面给大家看个图，对于大家的理解可能比较直观：
  
这是一个我们自己构造的组件树，以改变主题为例。

根节点是 App 组件，它里面有 Toolbar 和 Main 组件，Toolbar 组件下有一个 ThemeButton 组件，这个组件主要是用来改变当前主题的。

Main 和 Content 组件下面的子组件都会根据传入的 theme 属性来变更当前的显示主题，也就是说它们会透传 theme prop 但是不会消费它，而 Side bar、Search Box、Table 和 Footer 组件会消费 theme prop。

大家可以看下黑色的实线，除 App 组件外，每个组件都接受一个 prop 为 theme，那么数据流向就是自上而下的，而且组件之间的依赖关系一目了然。

当我们改变主题时，从 ThemeButton 组件触发 onClick 事件，类似于事件冒泡，将 changeTheme 这个事件传递到 App 组件，在其组件内部我们更新 theme 状态变量。

（click）那么 App 组件的所有子组件的 theme prop 属性都会被更新，数据再一次单向地从根组件流向到叶子组件。

如右侧的图所展示的，红色方块都是消费 theme 属性的组件，蓝色方它们负责透传 theme prop 给它们的子组件。

大家会发现，实际上只有 Theme Button, Sidebar, Search Box, Table 和 Footer 会根据 theme prop 变化而变化，而且目前页面结构相对简单，如果真的用于实际场景，类似这么透传属性就会变得十分的繁琐和复杂了。

那么有什么好的办法呢？这个留给大家在会后自行了解。

今天的分享就到这里了，谢谢大家
 -->
`,title:"Thinking",level:1,content:`# Thinking

为什么目前主流框架像 React、Vue 和 Angular 都要用 prop 来传递数据？

<v-click>

**维持单向数据流，让组件之间的关系变得简单且可预测。**

</v-click>

<div class="flex gap-x-4">

<v-click>

<div class="bg-gray-100 p-4">
    <img src="/public/images/think_1.png" class="h-[260px]" />
</div>

</v-click>

<v-click>

<div class="bg-gray-100 p-4">
    <img src="/public/images/think_2.png" class="h-[260px]" />
</div>

</v-click>

</div>

<v-click>

*如何解决这种情况？共有哪些方式？*

</v-click>`,frontmatter:{transition:"slide-up",title:"Thinking",srcSequence:"./pages/lesson_1/index.md,./thinking.md"},note:`这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

简单给大家两分钟时间思考下；

OK，那我现在公布答案哈，（click）为什么呢？因为要维持单向数据流，大家都知道，实际我们最终渲染的页面是树形结构，树形结构就会有根节点和叶子节点，
那么这个单向数据流的方向是从组件根节点流向叶子节点，且为单向，也就是不允许数据从叶子节点传递到父节点。

那么这种单向数据流的好处对于 React 来说，就是让组件之间的关系简单纯净，同时对于组件的变化是可预测的，因为能影响到子组件变化的只能是父组件传给他的 props。
那么对于 Angular 来说，实际上还有其他的好处，大家有兴趣的话可以去了解下。

下面给大家看个图，对于大家的理解可能比较直观：
  
这是一个我们自己构造的组件树，以改变主题为例。

根节点是 App 组件，它里面有 Toolbar 和 Main 组件，Toolbar 组件下有一个 ThemeButton 组件，这个组件主要是用来改变当前主题的。

Main 和 Content 组件下面的子组件都会根据传入的 theme 属性来变更当前的显示主题，也就是说它们会透传 theme prop 但是不会消费它，而 Side bar、Search Box、Table 和 Footer 组件会消费 theme prop。

大家可以看下黑色的实线，除 App 组件外，每个组件都接受一个 prop 为 theme，那么数据流向就是自上而下的，而且组件之间的依赖关系一目了然。

当我们改变主题时，从 ThemeButton 组件触发 onClick 事件，类似于事件冒泡，将 changeTheme 这个事件传递到 App 组件，在其组件内部我们更新 theme 状态变量。

（click）那么 App 组件的所有子组件的 theme prop 属性都会被更新，数据再一次单向地从根组件流向到叶子组件。

如右侧的图所展示的，红色方块都是消费 theme 属性的组件，蓝色方它们负责透传 theme prop 给它们的子组件。

大家会发现，实际上只有 Theme Button, Sidebar, Search Box, Table 和 Footer 会根据 theme prop 变化而变化，而且目前页面结构相对简单，如果真的用于实际场景，类似这么透传属性就会变得十分的繁琐和复杂了。

那么有什么好的办法呢？这个留给大家在会后自行了解。

今天的分享就到这里了，谢谢大家`,index:14,start:0,end:74,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/thinking.md",raw:`---
transition: slide-up
---

# Thinking

为什么目前主流框架像 React、Vue 和 Angular 都要用 prop 来传递数据？

<v-click>

**维持单向数据流，让组件之间的关系变得简单且可预测。**

</v-click>

<div class="flex gap-x-4">

<v-click>

<div class="bg-gray-100 p-4">
    <img src="/public/images/think_1.png" class="h-[260px]" />
</div>

</v-click>

<v-click>

<div class="bg-gray-100 p-4">
    <img src="/public/images/think_2.png" class="h-[260px]" />
</div>

</v-click>

</div>

<v-click>

*如何解决这种情况？共有哪些方式？*

</v-click>

<!--
这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

简单给大家两分钟时间思考下；

OK，那我现在公布答案哈，（click）为什么呢？因为要维持单向数据流，大家都知道，实际我们最终渲染的页面是树形结构，树形结构就会有根节点和叶子节点，
那么这个单向数据流的方向是从组件根节点流向叶子节点，且为单向，也就是不允许数据从叶子节点传递到父节点。

那么这种单向数据流的好处对于 React 来说，就是让组件之间的关系简单纯净，同时对于组件的变化是可预测的，因为能影响到子组件变化的只能是父组件传给他的 props。
那么对于 Angular 来说，实际上还有其他的好处，大家有兴趣的话可以去了解下。

下面给大家看个图，对于大家的理解可能比较直观：
  
这是一个我们自己构造的组件树，以改变主题为例。

根节点是 App 组件，它里面有 Toolbar 和 Main 组件，Toolbar 组件下有一个 ThemeButton 组件，这个组件主要是用来改变当前主题的。

Main 和 Content 组件下面的子组件都会根据传入的 theme 属性来变更当前的显示主题，也就是说它们会透传 theme prop 但是不会消费它，而 Side bar、Search Box、Table 和 Footer 组件会消费 theme prop。

大家可以看下黑色的实线，除 App 组件外，每个组件都接受一个 prop 为 theme，那么数据流向就是自上而下的，而且组件之间的依赖关系一目了然。

当我们改变主题时，从 ThemeButton 组件触发 onClick 事件，类似于事件冒泡，将 changeTheme 这个事件传递到 App 组件，在其组件内部我们更新 theme 状态变量。

（click）那么 App 组件的所有子组件的 theme prop 属性都会被更新，数据再一次单向地从根组件流向到叶子组件。

如右侧的图所展示的，红色方块都是消费 theme 属性的组件，蓝色方它们负责透传 theme prop 给它们的子组件。

大家会发现，实际上只有 Theme Button, Sidebar, Search Box, Table 和 Footer 会根据 theme prop 变化而变化，而且目前页面结构相对简单，如果真的用于实际场景，类似这么透传属性就会变得十分的繁琐和复杂了。

那么有什么好的办法呢？这个留给大家在会后自行了解。

今天的分享就到这里了，谢谢大家
 -->
`,title:"Thinking",level:1,content:`# Thinking

为什么目前主流框架像 React、Vue 和 Angular 都要用 prop 来传递数据？

<v-click>

**维持单向数据流，让组件之间的关系变得简单且可预测。**

</v-click>

<div class="flex gap-x-4">

<v-click>

<div class="bg-gray-100 p-4">
    <img src="/public/images/think_1.png" class="h-[260px]" />
</div>

</v-click>

<v-click>

<div class="bg-gray-100 p-4">
    <img src="/public/images/think_2.png" class="h-[260px]" />
</div>

</v-click>

</div>

<v-click>

*如何解决这种情况？共有哪些方式？*

</v-click>`,frontmatter:{transition:"slide-up",title:"Thinking"},note:`这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？

简单给大家两分钟时间思考下；

OK，那我现在公布答案哈，（click）为什么呢？因为要维持单向数据流，大家都知道，实际我们最终渲染的页面是树形结构，树形结构就会有根节点和叶子节点，
那么这个单向数据流的方向是从组件根节点流向叶子节点，且为单向，也就是不允许数据从叶子节点传递到父节点。

那么这种单向数据流的好处对于 React 来说，就是让组件之间的关系简单纯净，同时对于组件的变化是可预测的，因为能影响到子组件变化的只能是父组件传给他的 props。
那么对于 Angular 来说，实际上还有其他的好处，大家有兴趣的话可以去了解下。

下面给大家看个图，对于大家的理解可能比较直观：
  
这是一个我们自己构造的组件树，以改变主题为例。

根节点是 App 组件，它里面有 Toolbar 和 Main 组件，Toolbar 组件下有一个 ThemeButton 组件，这个组件主要是用来改变当前主题的。

Main 和 Content 组件下面的子组件都会根据传入的 theme 属性来变更当前的显示主题，也就是说它们会透传 theme prop 但是不会消费它，而 Side bar、Search Box、Table 和 Footer 组件会消费 theme prop。

大家可以看下黑色的实线，除 App 组件外，每个组件都接受一个 prop 为 theme，那么数据流向就是自上而下的，而且组件之间的依赖关系一目了然。

当我们改变主题时，从 ThemeButton 组件触发 onClick 事件，类似于事件冒泡，将 changeTheme 这个事件传递到 App 组件，在其组件内部我们更新 theme 状态变量。

（click）那么 App 组件的所有子组件的 theme prop 属性都会被更新，数据再一次单向地从根组件流向到叶子组件。

如右侧的图所展示的，红色方块都是消费 theme 属性的组件，蓝色方它们负责透传 theme prop 给它们的子组件。

大家会发现，实际上只有 Theme Button, Sidebar, Search Box, Table 和 Footer 会根据 theme prop 变化而变化，而且目前页面结构相对简单，如果真的用于实际场景，类似这么透传属性就会变得十分的繁琐和复杂了。

那么有什么好的办法呢？这个留给大家在会后自行了解。

今天的分享就到这里了，谢谢大家`,index:0,start:0,end:74},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_1/thinking.md",noteHTML:`<p>这里有一道思考题，为什么 React、Vue 和 Angular 三大主流框架都要用 prop 和事件来传递数据？</p>
<p>简单给大家两分钟时间思考下；</p>
<p>OK，那我现在公布答案哈，（click）为什么呢？因为要维持单向数据流，大家都知道，实际我们最终渲染的页面是树形结构，树形结构就会有根节点和叶子节点，
那么这个单向数据流的方向是从组件根节点流向叶子节点，且为单向，也就是不允许数据从叶子节点传递到父节点。</p>
<p>那么这种单向数据流的好处对于 React 来说，就是让组件之间的关系简单纯净，同时对于组件的变化是可预测的，因为能影响到子组件变化的只能是父组件传给他的 props。
那么对于 Angular 来说，实际上还有其他的好处，大家有兴趣的话可以去了解下。</p>
<p>下面给大家看个图，对于大家的理解可能比较直观：</p>
<p>这是一个我们自己构造的组件树，以改变主题为例。</p>
<p>根节点是 App 组件，它里面有 Toolbar 和 Main 组件，Toolbar 组件下有一个 ThemeButton 组件，这个组件主要是用来改变当前主题的。</p>
<p>Main 和 Content 组件下面的子组件都会根据传入的 theme 属性来变更当前的显示主题，也就是说它们会透传 theme prop 但是不会消费它，而 Side bar、Search Box、Table 和 Footer 组件会消费 theme prop。</p>
<p>大家可以看下黑色的实线，除 App 组件外，每个组件都接受一个 prop 为 theme，那么数据流向就是自上而下的，而且组件之间的依赖关系一目了然。</p>
<p>当我们改变主题时，从 ThemeButton 组件触发 onClick 事件，类似于事件冒泡，将 changeTheme 这个事件传递到 App 组件，在其组件内部我们更新 theme 状态变量。</p>
<p>（click）那么 App 组件的所有子组件的 theme prop 属性都会被更新，数据再一次单向地从根组件流向到叶子组件。</p>
<p>如右侧的图所展示的，红色方块都是消费 theme 属性的组件，蓝色方它们负责透传 theme prop 给它们的子组件。</p>
<p>大家会发现，实际上只有 Theme Button, Sidebar, Search Box, Table 和 Footer 会根据 theme prop 变化而变化，而且目前页面结构相对简单，如果真的用于实际场景，类似这么透传属性就会变得十分的繁琐和复杂了。</p>
<p>那么有什么好的办法呢？这个留给大家在会后自行了解。</p>
<p>今天的分享就到这里了，谢谢大家</p>
`,id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:eS,meta:{layout:"center",hideInToc:!0,title:'<span class="text-[60px]">Lesson 2</span>',srcSequence:"./pages/lesson_2/index.md",slide:{raw:null,title:'<span class="text-[60px]">Lesson 2</span>',level:1,content:'# <span class="text-[60px]">Lesson 2</span>',frontmatter:{layout:"center",hideInToc:!0,title:'<span class="text-[60px]">Lesson 2</span>',srcSequence:"./pages/lesson_2/index.md"},index:15,start:0,end:7,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/index.md",raw:`---
layout: 'center'
hideInToc: true
---

# <span class="text-[60px]">Lesson 2</span>
`,title:'<span class="text-[60px]">Lesson 2</span>',level:1,content:'# <span class="text-[60px]">Lesson 2</span>',frontmatter:{layout:"center",hideInToc:!0,title:'<span class="text-[60px]">Lesson 2</span>'},index:0,start:0,end:7},inline:{raw:`---
src: ./pages/lesson_2/index.md
---

# Lesson Two`,title:"Lesson Two",level:1,content:"# Lesson Two",frontmatter:{},index:2,start:19,end:24},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/index.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:iS,meta:{title:"Component Definition",srcSequence:"./pages/lesson_2/index.md,./component-definition.md",slide:{raw:`---
title: Component Definition
---

# Component Definition (1/3)

<span class="text-highlight-2">第一步：定义组件并导出</span>

\`\`\`tsx {3|5|all}
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

<span class="text-highlight-2">第一步：定义组件并导出</span>

\`\`\`tsx {3|5|all}
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

<span class="text-highlight-2">第一步：定义组件并导出</span>

\`\`\`tsx {3|5|all}
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

<span class="text-highlight-2">第一步：定义组件并导出</span>

\`\`\`tsx {3|5|all}
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
`,id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:FS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md",slide:{raw:`---
hideInToc: true
---

# Component Definition (2/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-highlight-2">第二步：声明组件接受的属性 props 以及类型</span>

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

<span class="text-highlight-2">第二步：声明组件接受的属性 props 以及类型</span>

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

<span class="text-highlight-2">第二步：声明组件接受的属性 props 以及类型</span>

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

<span class="text-highlight-2">第二步：声明组件接受的属性 props 以及类型</span>

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
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:bS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md",slide:{raw:`---
hideInToc: true
---

# Component Definition (3/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-highlight-2">第三步：组件内返回 JSX</span>

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

<span class="text-highlight-2">第三步：组件内返回 JSX</span>

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

<span class="text-highlight-2">第三步：组件内返回 JSX</span>

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

<span class="text-highlight-2">第三步：组件内返回 JSX</span>

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
`,id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:SS,meta:{hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./component-definition.md",slide:{raw:`---
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
`,id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:qS,meta:{title:"Hooks",srcSequence:"./pages/lesson_2/index.md,./hooks.md",slide:{raw:'---\ntitle: Hooks\n---\n\n# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link :to="$slidev.nav.currentPage + 1">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link :to="$slidev.nav.currentPage + 2">上下文 Hooks</Link> - `useContext`；\n- (2) <Link :to="$slidev.nav.currentPage + 3">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link :to="$slidev.nav.currentPage + 4">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link :to="$slidev.nav.currentPage + 5">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link :to="$slidev.nav.currentPage + 6">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。\n\n<!-- \n\n -->',title:"Hooks",level:1,content:'# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link :to="$slidev.nav.currentPage + 1">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link :to="$slidev.nav.currentPage + 2">上下文 Hooks</Link> - `useContext`；\n- (2) <Link :to="$slidev.nav.currentPage + 3">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link :to="$slidev.nav.currentPage + 4">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link :to="$slidev.nav.currentPage + 5">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link :to="$slidev.nav.currentPage + 6">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。',frontmatter:{title:"Hooks",srcSequence:"./pages/lesson_2/index.md,./hooks.md"},note:"",index:20,start:0,end:25,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks.md",raw:'---\ntitle: Hooks\n---\n\n# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link :to="$slidev.nav.currentPage + 1">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link :to="$slidev.nav.currentPage + 2">上下文 Hooks</Link> - `useContext`；\n- (2) <Link :to="$slidev.nav.currentPage + 3">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link :to="$slidev.nav.currentPage + 4">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link :to="$slidev.nav.currentPage + 5">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link :to="$slidev.nav.currentPage + 6">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。\n\n<!-- \n\n -->',title:"Hooks",level:1,content:'# Hooks\n\n也称钩子，在 React 中 Hooks 分为两类：\n\n- 内置 Built-in hooks；\n- 自定义 Custom hooks；\n\nReact 提供了很多内置 Hooks，主要分为**六种**：\n\n- (2) <Link :to="$slidev.nav.currentPage + 1">状态 Hooks</Link> - `useState` / `useReducer`；\n- (1) <Link :to="$slidev.nav.currentPage + 2">上下文 Hooks</Link> - `useContext`；\n- (2) <Link :to="$slidev.nav.currentPage + 3">引用 Hooks</Link> - `useRef` / `useImperativeHandle`；\n- (2) <Link :to="$slidev.nav.currentPage + 4">副作用 Hooks</Link> - `useEffect` / `useLayoutEffect`；\n- (4) <Link :to="$slidev.nav.currentPage + 5">性能 Hooks</Link> - `useMemo` / `useCallback` / `useTransition` / `useDeferredValue`；\n- (3) <Link :to="$slidev.nav.currentPage + 6">其他 Hooks</Link> - `useId`；\n\n自定义 Hooks 实际上就是将上述的内置的 Hooks 组合再封装后的 hooks。',frontmatter:{title:"Hooks"},note:"",index:0,start:0,end:25},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:e6,meta:{title:"State Hooks",clicks:6,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/state.md",slide:{raw:`---
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

(click arrow-left to back)`,index:21,start:0,end:84,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/state.md",raw:`---
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
`,id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:l6,meta:{title:"Context Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/context.md",slide:{raw:`---
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

-> Panel.tsx/Button.tsx 在子组件中，我们就可以使用 useContext 来获取刚才通过 value 属性传递的对象`,index:22,start:0,end:24,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/context.md",raw:`---
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
`,id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:p6,meta:{title:"Ref Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/ref.md",slide:{raw:`---
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

先讲解 CounterWithState 组件，然后是 CounterWithRef 组件，最后讲解 App.tsx 中的 ref`,index:23,start:0,end:26,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/ref.md",raw:`---
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
`,id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:_6,meta:{title:"Effect Hooks",clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/effect.md",slide:{raw:`---
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

*<a v-click="2" href="https://stackblitz.com/edit/lesson-one-jsx?devToolsHeight=33&embed=1&file=App.tsx" target="_blank">Show me the code</a>*

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

</div>

*<a v-click="2" href="https://stackblitz.com/edit/lesson-one-jsx?devToolsHeight=33&embed=1&file=App.tsx" target="_blank">Show me the code</a>*`,frontmatter:{title:"Effect Hooks",clicks:2,hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/effect.md"},note:`还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。

第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；

如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。

useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。

useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；

useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。`,index:24,start:0,end:73,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/effect.md",raw:`---
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

*<a v-click="2" href="https://stackblitz.com/edit/lesson-one-jsx?devToolsHeight=33&embed=1&file=App.tsx" target="_blank">Show me the code</a>*

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

</div>

*<a v-click="2" href="https://stackblitz.com/edit/lesson-one-jsx?devToolsHeight=33&embed=1&file=App.tsx" target="_blank">Show me the code</a>*`,frontmatter:{title:"Effect Hooks",clicks:2,hideInToc:!0},note:`还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。

第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；

如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。

useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。

useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；

useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。`,index:0,start:0,end:73},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/effect.md",noteHTML:`<p>还是以之前英雄列表的代码来看下 useEffect 的使用，useEffect 只接受两个参数，第一个是处理函数，我们的请求数据的接口调用的逻辑写在这里。</p>
<p>第二个参数是依赖数组，当数组为空是，表示当前 useEffect 钩子不依赖任何状态，那么它只在组件第一次执行时执行一次，之后的组件的重新渲染都不会执行它；</p>
<p>如果数组不为空，那么只有当它依赖的那些状态发生变化时，它才会执行。</p>
<p>useLayoutEffect 和 useEffect 写法相同，二者在写法上没有任何区别，区别是在执行上。</p>
<p>useEffect 是异步方法，也就说，它不会阻断浏览器的渲染过程；</p>
<p>useLayoutEffect 是同步方法，它会阻断浏览器的渲染过程，一般来说，想要获取更新后的 DOM 元素可以使用 useLayoutEffect 钩子。</p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:C6,meta:{title:"Performance Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/performance.md",slide:{raw:`---
title: Performance Hooks
hideInToc: true
---

# Performance Hooks

避免冗余的重新渲染、减少昂贵的计算开销以及降低由其带来的 UI 更新的卡顿等优化钩子。

- [useMemo](https://stackblitz.com/edit/stackblitz-starters-wfafpe?ctl=1&embed=1&file=src%2FApp.tsx)：缓存计算结果（侧重点是值），既可以缓存值，也可以缓存函数（等价于 \`useCallback\`）；
- [useCallback](https://stackblitz.com/edit/react-ts-6zym8d?ctl=1&embed=1&file=App.tsx)：缓存函数，避免由于重新渲染每次讲新函数传递到子组件，导致子组件重新渲染；
- \`useTransition\`：将状态变更标记为非阻塞，并允许其他更新中断它 - 针对状态;
- \`useDeferredValue\`：允许延迟更新 UI 的非关键部分，并让其他部分先更新 - 针对值。

<!-- 
React 给我们提供了一些优化性能的钩子，主要是从避免冗余的重新渲染、减少昂贵的计算开销以及由其带来的 UI 的卡顿这些方面考虑的。

第一个 useMemo 

第二个是 useCallback

第三个和第四个是 React 18 版本新推出来的两个钩子，这两个钩子可以让我们更好地控制数据更新和渲染优先级，二者用其一即可。
这两个钩子的使用场景非常受限和极端，只有在其他优化方式无法满足的情况再考虑。
性能优化的方式非常多，比如懒加载、分页、防抖和节流等等，所以这两个钩子大家如果有兴趣可以自己私下了解下。
 -->`,title:"Performance Hooks",level:1,content:`# Performance Hooks

避免冗余的重新渲染、减少昂贵的计算开销以及降低由其带来的 UI 更新的卡顿等优化钩子。

- [useMemo](https://stackblitz.com/edit/stackblitz-starters-wfafpe?ctl=1&embed=1&file=src%2FApp.tsx)：缓存计算结果（侧重点是值），既可以缓存值，也可以缓存函数（等价于 \`useCallback\`）；
- [useCallback](https://stackblitz.com/edit/react-ts-6zym8d?ctl=1&embed=1&file=App.tsx)：缓存函数，避免由于重新渲染每次讲新函数传递到子组件，导致子组件重新渲染；
- \`useTransition\`：将状态变更标记为非阻塞，并允许其他更新中断它 - 针对状态;
- \`useDeferredValue\`：允许延迟更新 UI 的非关键部分，并让其他部分先更新 - 针对值。`,frontmatter:{title:"Performance Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/performance.md"},note:`React 给我们提供了一些优化性能的钩子，主要是从避免冗余的重新渲染、减少昂贵的计算开销以及由其带来的 UI 的卡顿这些方面考虑的。

第一个 useMemo 

第二个是 useCallback

第三个和第四个是 React 18 版本新推出来的两个钩子，这两个钩子可以让我们更好地控制数据更新和渲染优先级，二者用其一即可。
这两个钩子的使用场景非常受限和极端，只有在其他优化方式无法满足的情况再考虑。
性能优化的方式非常多，比如懒加载、分页、防抖和节流等等，所以这两个钩子大家如果有兴趣可以自己私下了解下。`,index:25,start:0,end:25,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/performance.md",raw:`---
title: Performance Hooks
hideInToc: true
---

# Performance Hooks

避免冗余的重新渲染、减少昂贵的计算开销以及降低由其带来的 UI 更新的卡顿等优化钩子。

- [useMemo](https://stackblitz.com/edit/stackblitz-starters-wfafpe?ctl=1&embed=1&file=src%2FApp.tsx)：缓存计算结果（侧重点是值），既可以缓存值，也可以缓存函数（等价于 \`useCallback\`）；
- [useCallback](https://stackblitz.com/edit/react-ts-6zym8d?ctl=1&embed=1&file=App.tsx)：缓存函数，避免由于重新渲染每次讲新函数传递到子组件，导致子组件重新渲染；
- \`useTransition\`：将状态变更标记为非阻塞，并允许其他更新中断它 - 针对状态;
- \`useDeferredValue\`：允许延迟更新 UI 的非关键部分，并让其他部分先更新 - 针对值。

<!-- 
React 给我们提供了一些优化性能的钩子，主要是从避免冗余的重新渲染、减少昂贵的计算开销以及由其带来的 UI 的卡顿这些方面考虑的。

第一个 useMemo 

第二个是 useCallback

第三个和第四个是 React 18 版本新推出来的两个钩子，这两个钩子可以让我们更好地控制数据更新和渲染优先级，二者用其一即可。
这两个钩子的使用场景非常受限和极端，只有在其他优化方式无法满足的情况再考虑。
性能优化的方式非常多，比如懒加载、分页、防抖和节流等等，所以这两个钩子大家如果有兴趣可以自己私下了解下。
 -->`,title:"Performance Hooks",level:1,content:`# Performance Hooks

避免冗余的重新渲染、减少昂贵的计算开销以及降低由其带来的 UI 更新的卡顿等优化钩子。

- [useMemo](https://stackblitz.com/edit/stackblitz-starters-wfafpe?ctl=1&embed=1&file=src%2FApp.tsx)：缓存计算结果（侧重点是值），既可以缓存值，也可以缓存函数（等价于 \`useCallback\`）；
- [useCallback](https://stackblitz.com/edit/react-ts-6zym8d?ctl=1&embed=1&file=App.tsx)：缓存函数，避免由于重新渲染每次讲新函数传递到子组件，导致子组件重新渲染；
- \`useTransition\`：将状态变更标记为非阻塞，并允许其他更新中断它 - 针对状态;
- \`useDeferredValue\`：允许延迟更新 UI 的非关键部分，并让其他部分先更新 - 针对值。`,frontmatter:{title:"Performance Hooks",hideInToc:!0},note:`React 给我们提供了一些优化性能的钩子，主要是从避免冗余的重新渲染、减少昂贵的计算开销以及由其带来的 UI 的卡顿这些方面考虑的。

第一个 useMemo 

第二个是 useCallback

第三个和第四个是 React 18 版本新推出来的两个钩子，这两个钩子可以让我们更好地控制数据更新和渲染优先级，二者用其一即可。
这两个钩子的使用场景非常受限和极端，只有在其他优化方式无法满足的情况再考虑。
性能优化的方式非常多，比如懒加载、分页、防抖和节流等等，所以这两个钩子大家如果有兴趣可以自己私下了解下。`,index:0,start:0,end:25},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/performance.md",noteHTML:`<p>React 给我们提供了一些优化性能的钩子，主要是从避免冗余的重新渲染、减少昂贵的计算开销以及由其带来的 UI 的卡顿这些方面考虑的。</p>
<p>第一个 useMemo</p>
<p>第二个是 useCallback</p>
<p>第三个和第四个是 React 18 版本新推出来的两个钩子，这两个钩子可以让我们更好地控制数据更新和渲染优先级，二者用其一即可。
这两个钩子的使用场景非常受限和极端，只有在其他优化方式无法满足的情况再考虑。
性能优化的方式非常多，比如懒加载、分页、防抖和节流等等，所以这两个钩子大家如果有兴趣可以自己私下了解下。</p>
`,id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:I6,meta:{title:"Other Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/other.md",slide:{raw:`---
title: Other Hooks
hideInToc: true
---

# Other Hooks

这些 Hooks 对库作者有用，在业务代码中不常用。

- \`useId\`：组件的顶层调用 \`useId\` 以生成唯一 ID；
- \`useDebugValue\`: 在自定义 Hook 的顶层调用 \`useDebugValue\` 以显示 React DevTools 的可读调试值；
- \`useSyncExternalStore\`：在组件的顶层调用 \`useSyncExternalStore\` 以从外部数据存储中读取值。

<br />

\`\`\`tsx {4,11}
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>The password should contain at least 18 characters</p>
    </>
  );
}
\`\`\`

<!-- 
还有一些其他的 React 钩子，这些钩子更多的是对库作者有用，在一般的项目中用不到。在这三个 Hooks 中，第一个 useId 钩子可能应用场景会更多一点。

useId 用来生成唯一 ID。一般可以用来作为标签的 id 的值。比如 label 的 htmlFor 属性和用户交互组件的 id，又或者比如下面这段代码：
用 useId 生成了 passwordHintId（密码提示 ID），将其赋值给 p 标签的 id 属性，然后对 input 标签的辅助描述属性设置同样的 id，那么在屏幕阅读时 input 就可以读取对应 p 标签的内容。
这样做的好处是，如果一个页面用到了多个这个 PasswordField 组件，不需要考虑 id 的是否会重复，因为它生成的唯一 ID。

第二个是 useDebugValue 在自定义 Hook 的顶层调用 \`useDebugValue\` 以显示 React DevTools 的可读调试值；
第三个是 useSyncExternalStore 在组件的顶层调用 \`useSyncExternalStore\` 以从外部数据存储中读取值，这两个 hooks 我们不做详细介绍，有兴趣的同学可以了解下。
 -->`,title:"Other Hooks",level:1,content:`# Other Hooks

这些 Hooks 对库作者有用，在业务代码中不常用。

- \`useId\`：组件的顶层调用 \`useId\` 以生成唯一 ID；
- \`useDebugValue\`: 在自定义 Hook 的顶层调用 \`useDebugValue\` 以显示 React DevTools 的可读调试值；
- \`useSyncExternalStore\`：在组件的顶层调用 \`useSyncExternalStore\` 以从外部数据存储中读取值。

<br />

\`\`\`tsx {4,11}
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>The password should contain at least 18 characters</p>
    </>
  );
}
\`\`\``,frontmatter:{title:"Other Hooks",hideInToc:!0,srcSequence:"./pages/lesson_2/index.md,./hooks/other.md"},note:`还有一些其他的 React 钩子，这些钩子更多的是对库作者有用，在一般的项目中用不到。在这三个 Hooks 中，第一个 useId 钩子可能应用场景会更多一点。

useId 用来生成唯一 ID。一般可以用来作为标签的 id 的值。比如 label 的 htmlFor 属性和用户交互组件的 id，又或者比如下面这段代码：
用 useId 生成了 passwordHintId（密码提示 ID），将其赋值给 p 标签的 id 属性，然后对 input 标签的辅助描述属性设置同样的 id，那么在屏幕阅读时 input 就可以读取对应 p 标签的内容。
这样做的好处是，如果一个页面用到了多个这个 PasswordField 组件，不需要考虑 id 的是否会重复，因为它生成的唯一 ID。

第二个是 useDebugValue 在自定义 Hook 的顶层调用 \`useDebugValue\` 以显示 React DevTools 的可读调试值；
第三个是 useSyncExternalStore 在组件的顶层调用 \`useSyncExternalStore\` 以从外部数据存储中读取值，这两个 hooks 我们不做详细介绍，有兴趣的同学可以了解下。`,index:26,start:0,end:42,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/other.md",raw:`---
title: Other Hooks
hideInToc: true
---

# Other Hooks

这些 Hooks 对库作者有用，在业务代码中不常用。

- \`useId\`：组件的顶层调用 \`useId\` 以生成唯一 ID；
- \`useDebugValue\`: 在自定义 Hook 的顶层调用 \`useDebugValue\` 以显示 React DevTools 的可读调试值；
- \`useSyncExternalStore\`：在组件的顶层调用 \`useSyncExternalStore\` 以从外部数据存储中读取值。

<br />

\`\`\`tsx {4,11}
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>The password should contain at least 18 characters</p>
    </>
  );
}
\`\`\`

<!-- 
还有一些其他的 React 钩子，这些钩子更多的是对库作者有用，在一般的项目中用不到。在这三个 Hooks 中，第一个 useId 钩子可能应用场景会更多一点。

useId 用来生成唯一 ID。一般可以用来作为标签的 id 的值。比如 label 的 htmlFor 属性和用户交互组件的 id，又或者比如下面这段代码：
用 useId 生成了 passwordHintId（密码提示 ID），将其赋值给 p 标签的 id 属性，然后对 input 标签的辅助描述属性设置同样的 id，那么在屏幕阅读时 input 就可以读取对应 p 标签的内容。
这样做的好处是，如果一个页面用到了多个这个 PasswordField 组件，不需要考虑 id 的是否会重复，因为它生成的唯一 ID。

第二个是 useDebugValue 在自定义 Hook 的顶层调用 \`useDebugValue\` 以显示 React DevTools 的可读调试值；
第三个是 useSyncExternalStore 在组件的顶层调用 \`useSyncExternalStore\` 以从外部数据存储中读取值，这两个 hooks 我们不做详细介绍，有兴趣的同学可以了解下。
 -->`,title:"Other Hooks",level:1,content:`# Other Hooks

这些 Hooks 对库作者有用，在业务代码中不常用。

- \`useId\`：组件的顶层调用 \`useId\` 以生成唯一 ID；
- \`useDebugValue\`: 在自定义 Hook 的顶层调用 \`useDebugValue\` 以显示 React DevTools 的可读调试值；
- \`useSyncExternalStore\`：在组件的顶层调用 \`useSyncExternalStore\` 以从外部数据存储中读取值。

<br />

\`\`\`tsx {4,11}
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>The password should contain at least 18 characters</p>
    </>
  );
}
\`\`\``,frontmatter:{title:"Other Hooks",hideInToc:!0},note:`还有一些其他的 React 钩子，这些钩子更多的是对库作者有用，在一般的项目中用不到。在这三个 Hooks 中，第一个 useId 钩子可能应用场景会更多一点。

useId 用来生成唯一 ID。一般可以用来作为标签的 id 的值。比如 label 的 htmlFor 属性和用户交互组件的 id，又或者比如下面这段代码：
用 useId 生成了 passwordHintId（密码提示 ID），将其赋值给 p 标签的 id 属性，然后对 input 标签的辅助描述属性设置同样的 id，那么在屏幕阅读时 input 就可以读取对应 p 标签的内容。
这样做的好处是，如果一个页面用到了多个这个 PasswordField 组件，不需要考虑 id 的是否会重复，因为它生成的唯一 ID。

第二个是 useDebugValue 在自定义 Hook 的顶层调用 \`useDebugValue\` 以显示 React DevTools 的可读调试值；
第三个是 useSyncExternalStore 在组件的顶层调用 \`useSyncExternalStore\` 以从外部数据存储中读取值，这两个 hooks 我们不做详细介绍，有兴趣的同学可以了解下。`,index:0,start:0,end:42},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/hooks/other.md",noteHTML:`<p>还有一些其他的 React 钩子，这些钩子更多的是对库作者有用，在一般的项目中用不到。在这三个 Hooks 中，第一个 useId 钩子可能应用场景会更多一点。</p>
<p>useId 用来生成唯一 ID。一般可以用来作为标签的 id 的值。比如 label 的 htmlFor 属性和用户交互组件的 id，又或者比如下面这段代码：
用 useId 生成了 passwordHintId（密码提示 ID），将其赋值给 p 标签的 id 属性，然后对 input 标签的辅助描述属性设置同样的 id，那么在屏幕阅读时 input 就可以读取对应 p 标签的内容。
这样做的好处是，如果一个页面用到了多个这个 PasswordField 组件，不需要考虑 id 的是否会重复，因为它生成的唯一 ID。</p>
<p>第二个是 useDebugValue 在自定义 Hook 的顶层调用 <code>useDebugValue</code> 以显示 React DevTools 的可读调试值；
第三个是 useSyncExternalStore 在组件的顶层调用 <code>useSyncExternalStore</code> 以从外部数据存储中读取值，这两个 hooks 我们不做详细介绍，有兴趣的同学可以了解下。</p>
`,id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:J6,meta:{title:"Custom Hooks",srcSequence:"./pages/lesson_2/index.md,./custom-hooks.md",slide:{raw:`---
title: Custom Hooks
---

# Custom Hooks

约定：
- 以 \`use\` 开头并以**小驼峰**的方式命名，比如 \`useState\` (内置) 或 \`useOnlineStatus\`；
- 可以返回任何值：若返回多个值，建议将返回值作为对象返回，不要学 \`useState\` 的返回方式；
- 只要是使用了 React 内置的 hooks，那么必须在组件的顶层作用域调用，不可放到分支或循环中。<span v-click="2" class="text-highlight">?</span>

<div v-click="1">

_❗️不提倡单纯地为了自定义 hook 而去自定义。_

</div>

<div v-click="3">

_❗️自定义 hook 仅共享了逻辑，并不共享状态。_

</div>

*<a v-click="4" href="https://stackblitz.com/edit/react-ts-thmkaf?ctl=1&embed=1&file=App.tsx" target="_blank">Show me the code</a>*

<!-- 
之前介绍了 React 内置的一些 hooks，大家可以发现这些 hooks 都是比较基础的。

但是通常我们希望可以将业务中的某些逻辑抽离出来进行封装，在组件之间共享逻辑，同时在使用它的时候代码更简洁，迭代更方便。

在开始给大家演示如何去编写自定义 hook 之前，我们需要先明确 React 对于自定义 hook 的一些约定：

（按照 PPT 内容读）

……不可放到分之或循环中（click）。

当然我们并不提倡将一切组件内的逻辑都封装成自定义 hook，对于不具备复用性的特定逻辑，直接写再在组件里是最好的选择。（click）

还有需要注意的是，自定义 hook 只是共享了状态变更的逻辑，但是状态不会共享。

这里留个问题给各位同学，为什么 React 要求的内置的 hooks 必须要在组件的顶层作用域中调用？

那么接下来根据代码给大家讲解下如何声明自定义 hook。（click link）
 -->`,title:"Custom Hooks",level:1,content:`# Custom Hooks

约定：
- 以 \`use\` 开头并以**小驼峰**的方式命名，比如 \`useState\` (内置) 或 \`useOnlineStatus\`；
- 可以返回任何值：若返回多个值，建议将返回值作为对象返回，不要学 \`useState\` 的返回方式；
- 只要是使用了 React 内置的 hooks，那么必须在组件的顶层作用域调用，不可放到分支或循环中。<span v-click="2" class="text-highlight">?</span>

<div v-click="1">

_❗️不提倡单纯地为了自定义 hook 而去自定义。_

</div>

<div v-click="3">

_❗️自定义 hook 仅共享了逻辑，并不共享状态。_

</div>

*<a v-click="4" href="https://stackblitz.com/edit/react-ts-thmkaf?ctl=1&embed=1&file=App.tsx" target="_blank">Show me the code</a>*`,frontmatter:{title:"Custom Hooks",srcSequence:"./pages/lesson_2/index.md,./custom-hooks.md"},note:`之前介绍了 React 内置的一些 hooks，大家可以发现这些 hooks 都是比较基础的。

但是通常我们希望可以将业务中的某些逻辑抽离出来进行封装，在组件之间共享逻辑，同时在使用它的时候代码更简洁，迭代更方便。

在开始给大家演示如何去编写自定义 hook 之前，我们需要先明确 React 对于自定义 hook 的一些约定：

（按照 PPT 内容读）

……不可放到分之或循环中（click）。

当然我们并不提倡将一切组件内的逻辑都封装成自定义 hook，对于不具备复用性的特定逻辑，直接写再在组件里是最好的选择。（click）

还有需要注意的是，自定义 hook 只是共享了状态变更的逻辑，但是状态不会共享。

这里留个问题给各位同学，为什么 React 要求的内置的 hooks 必须要在组件的顶层作用域中调用？

那么接下来根据代码给大家讲解下如何声明自定义 hook。（click link）`,index:27,start:0,end:44,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/custom-hooks.md",raw:`---
title: Custom Hooks
---

# Custom Hooks

约定：
- 以 \`use\` 开头并以**小驼峰**的方式命名，比如 \`useState\` (内置) 或 \`useOnlineStatus\`；
- 可以返回任何值：若返回多个值，建议将返回值作为对象返回，不要学 \`useState\` 的返回方式；
- 只要是使用了 React 内置的 hooks，那么必须在组件的顶层作用域调用，不可放到分支或循环中。<span v-click="2" class="text-highlight">?</span>

<div v-click="1">

_❗️不提倡单纯地为了自定义 hook 而去自定义。_

</div>

<div v-click="3">

_❗️自定义 hook 仅共享了逻辑，并不共享状态。_

</div>

*<a v-click="4" href="https://stackblitz.com/edit/react-ts-thmkaf?ctl=1&embed=1&file=App.tsx" target="_blank">Show me the code</a>*

<!-- 
之前介绍了 React 内置的一些 hooks，大家可以发现这些 hooks 都是比较基础的。

但是通常我们希望可以将业务中的某些逻辑抽离出来进行封装，在组件之间共享逻辑，同时在使用它的时候代码更简洁，迭代更方便。

在开始给大家演示如何去编写自定义 hook 之前，我们需要先明确 React 对于自定义 hook 的一些约定：

（按照 PPT 内容读）

……不可放到分之或循环中（click）。

当然我们并不提倡将一切组件内的逻辑都封装成自定义 hook，对于不具备复用性的特定逻辑，直接写再在组件里是最好的选择。（click）

还有需要注意的是，自定义 hook 只是共享了状态变更的逻辑，但是状态不会共享。

这里留个问题给各位同学，为什么 React 要求的内置的 hooks 必须要在组件的顶层作用域中调用？

那么接下来根据代码给大家讲解下如何声明自定义 hook。（click link）
 -->`,title:"Custom Hooks",level:1,content:`# Custom Hooks

约定：
- 以 \`use\` 开头并以**小驼峰**的方式命名，比如 \`useState\` (内置) 或 \`useOnlineStatus\`；
- 可以返回任何值：若返回多个值，建议将返回值作为对象返回，不要学 \`useState\` 的返回方式；
- 只要是使用了 React 内置的 hooks，那么必须在组件的顶层作用域调用，不可放到分支或循环中。<span v-click="2" class="text-highlight">?</span>

<div v-click="1">

_❗️不提倡单纯地为了自定义 hook 而去自定义。_

</div>

<div v-click="3">

_❗️自定义 hook 仅共享了逻辑，并不共享状态。_

</div>

*<a v-click="4" href="https://stackblitz.com/edit/react-ts-thmkaf?ctl=1&embed=1&file=App.tsx" target="_blank">Show me the code</a>*`,frontmatter:{title:"Custom Hooks"},note:`之前介绍了 React 内置的一些 hooks，大家可以发现这些 hooks 都是比较基础的。

但是通常我们希望可以将业务中的某些逻辑抽离出来进行封装，在组件之间共享逻辑，同时在使用它的时候代码更简洁，迭代更方便。

在开始给大家演示如何去编写自定义 hook 之前，我们需要先明确 React 对于自定义 hook 的一些约定：

（按照 PPT 内容读）

……不可放到分之或循环中（click）。

当然我们并不提倡将一切组件内的逻辑都封装成自定义 hook，对于不具备复用性的特定逻辑，直接写再在组件里是最好的选择。（click）

还有需要注意的是，自定义 hook 只是共享了状态变更的逻辑，但是状态不会共享。

这里留个问题给各位同学，为什么 React 要求的内置的 hooks 必须要在组件的顶层作用域中调用？

那么接下来根据代码给大家讲解下如何声明自定义 hook。（click link）`,index:0,start:0,end:44},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/custom-hooks.md",noteHTML:`<p>之前介绍了 React 内置的一些 hooks，大家可以发现这些 hooks 都是比较基础的。</p>
<p>但是通常我们希望可以将业务中的某些逻辑抽离出来进行封装，在组件之间共享逻辑，同时在使用它的时候代码更简洁，迭代更方便。</p>
<p>在开始给大家演示如何去编写自定义 hook 之前，我们需要先明确 React 对于自定义 hook 的一些约定：</p>
<p>（按照 PPT 内容读）</p>
<p>……不可放到分之或循环中（click）。</p>
<p>当然我们并不提倡将一切组件内的逻辑都封装成自定义 hook，对于不具备复用性的特定逻辑，直接写再在组件里是最好的选择。（click）</p>
<p>还有需要注意的是，自定义 hook 只是共享了状态变更的逻辑，但是状态不会共享。</p>
<p>这里留个问题给各位同学，为什么 React 要求的内置的 hooks 必须要在组件的顶层作用域中调用？</p>
<p>那么接下来根据代码给大家讲解下如何声明自定义 hook。（click link）</p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:W6,meta:{hideInToc:!0,title:"Thinking",srcSequence:"./pages/lesson_2/index.md,./what-is-update-in-17-and-18.md",slide:{raw:`---
hideInToc: true
---

# Thinking

What is update between React 17 and 18?

<!--

-->
`,title:"Thinking",level:1,content:`# Thinking

What is update between React 17 and 18?`,frontmatter:{hideInToc:!0,title:"Thinking",srcSequence:"./pages/lesson_2/index.md,./what-is-update-in-17-and-18.md"},note:"",index:28,start:0,end:12,source:{filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/what-is-update-in-17-and-18.md",raw:`---
hideInToc: true
---

# Thinking

What is update between React 17 and 18?

<!--

-->
`,title:"Thinking",level:1,content:`# Thinking

What is update between React 17 and 18?`,frontmatter:{hideInToc:!0,title:"Thinking"},note:"",index:0,start:0,end:12},filepath:"/home/runner/work/react-shared-ppt/react-shared-ppt/pages/lesson_2/what-is-update-in-17-and-18.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",component:Eb,meta:{layout:"end"}}],We=K6,lo=[{name:"play",path:"/",component:Z0,children:[...We]},{name:"print",path:"/print",component:wb},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!oo.remote||oo.remote===t.query.password)return!0;if(oo.remote&&t.query.password===void 0){const s=prompt("Enter password");if(oo.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};lo.push({path:"/presenter/print",component:()=>Fl(()=>import("./PresenterPrint-57fd6da4.js"),["assets/PresenterPrint-57fd6da4.js","assets/NoteDisplay-f209d2bb.js"])}),lo.push({name:"notes",path:"/notes",component:()=>Fl(()=>import("./NotesView-29a8feec.js"),["assets/NotesView-29a8feec.js","assets/NoteDisplay-f209d2bb.js"]),beforeEnter:e}),lo.push({name:"presenter",path:"/presenter/:no",component:()=>Fl(()=>import("./Presenter-8cdeac70.js"),["assets/Presenter-8cdeac70.js","assets/NoteDisplay-f209d2bb.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),lo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const yt=H1({history:I8("/react-shared-ppt/"),routes:lo});function Y6(e,t,{mode:s="replace"}={}){return R({get(){const o=yt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){nt(()=>{yt[x(s)]({query:{...yt.currentRoute.value.query,[e]:o}})})}})}const wf=z(0);nt(()=>{yt.afterEach(async()=>{await nt(),wf.value+=1})});const Cf=z(0),Pt=R(()=>yt.currentRoute.value),dn=R(()=>Pt.value.query.print!==void 0),Z6=R(()=>Pt.value.query.print==="clicks"),Nn=R(()=>Pt.value.query.embedded!==void 0),Ct=R(()=>Pt.value.path.startsWith("/presenter")),G6=R(()=>Pt.value.path.startsWith("/notes")),Fo=R(()=>dn.value&&!Z6.value),Ca=R(()=>Pt.value.query.password),Q6=R(()=>!Ct.value&&(!Se.remote||Ca.value===Se.remote)),bu=Y6("clicks","0"),Sf=R(()=>We.length-1),eE=R(()=>Pt.value.path),qe=R(()=>parseInt(eE.value.split(/\//g).slice(-1)[0])||1);R(()=>nr(qe.value));const ut=R(()=>We.find(e=>e.path===`${qe.value}`));R(()=>{var e,t,s;return(s=(t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});R(()=>{var e,t;return((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.layout)||(qe.value===1?"cover":"default")});const Ar=R(()=>We.find(e=>e.path===`${Math.min(We.length,qe.value+1)}`)),tE=R(()=>We.find(e=>e.path===`${Math.max(1,qe.value-1)}`)),nE=R(()=>{var e,t;return wf.value,((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ht=R({get(){if(Fo.value)return 99999;let e=+(bu.value||0);return isNaN(e)&&(e=0),e},set(e){bu.value=e.toString()}}),Pl=R(()=>{var e,t;return+(((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.clicks)??nE.value.length)}),sE=R(()=>qe.value<We.length-1||Ht.value<Pl.value),oE=R(()=>qe.value>1||Ht.value>0),lE=R(()=>We.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(vi(e,t),e),[])),rE=R(()=>_i(lE.value,ut.value));R(()=>ki(rE.value));const aE=R(()=>dE(Cf.value,ut.value,tE.value));me(ut,(e,t)=>{Cf.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function In(){Pl.value<=Ht.value?Oo():Ht.value+=1}async function Hn(){Ht.value<=0?await Po():Ht.value-=1}function nr(e){return Ct.value?`/presenter/${e}`:`/${e}`}function Oo(){const e=Math.min(We.length,qe.value+1);return Ds(e)}async function Po(e=!0){const t=Math.max(1,qe.value-1);await Ds(t),e&&Pl.value&&yt.replace({query:{...Pt.value.query,clicks:Pl.value}})}function Ds(e,t){return yt.push({path:nr(e),query:{...Pt.value.query,clicks:t}})}function iE(e){const t=z(0),{direction:s,distanceX:o,distanceY:l}=Kv(e,{onSwipeStart(r){r.pointerType==="touch"&&(To.value||(t.value=ua()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||To.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===un.LEFT?In():Hn():(i/window.innerHeight>.4||i>200)&&(s.value===un.DOWN?Po():Oo())}})}async function Sa(){const{saveAs:e}=await Fl(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(Sd(Se.download)?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/react-shared-ppt/slidev-exported.pdf",`${Se.title}.pdf`)}async function cE(e){var t,s;if(e==null){const o=(s=(t=ut.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function vi(e,t,s=1){var l,r,a,i,c;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&e.length>0?vi(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function _i(e,t,s=!1,o){return e.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:s};return r.children.length>0&&(r.children=_i(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ki(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:ki(s.children,t+1)}))}const uE={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function pE(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:uE[e.name]||e.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=t?l:o}if(s)return{...e,name:s}}function dE(e,t,s){var l,r;let o=e>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return o||(o=Se.transition),pE(o,e<0)}function fE(){const e=Se.titleTemplate.replace("%s",Se.title||"Slidev");ri({title:e}),Sg(Se.htmlAttrs),Dg(`${e} - shared`),Ug(`${e} - drawings`);const t=`${location.origin}_${Ig()}`;function s(){G6.value||!Ct.value&&!Tg.includes(location.host.split(":")[0])||(Ct.value?(Ws("page",+qe.value),Ws("clicks",Ht.value)):(Ws("viewerPage",+qe.value),Ws("viewerClicks",Ht.value)),Ws("lastUpdate",{id:t,type:Ct.value?"presenter":"viewer",time:new Date().getTime()}))}yt.afterEach(s),me(Ht,s),jg(o=>{var r;yt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+qe.value||+Ht.value!=+o.clicks)&&yt.replace({path:nr(o.page),query:{...yt.currentRoute.value.query,clicks:o.clicks||0}})})}const hE=Ce({__name:"App",setup(e){return K(se),fE(),(t,s)=>{const o=Ps("RouterView"),l=Ps("StarportCarrier");return E(),q(Ae,null,[j(o),j(l)],64)}}}),FE=oe(hE,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/App.vue"]]);function $r(e){return e!==null&&typeof e=="object"}function Ea(e,t,s=".",o){if(!$r(t))return Ea(e,{},s,o);const l=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:$r(a)&&$r(l[r])?l[r]=Ea(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function mE(e){return(...t)=>t.reduce((s,o)=>Ea(s,o,"",e),{})}const yE=mE(),Ef=1/60*1e3,gE=typeof performance<"u"?()=>performance.now():()=>Date.now(),Af=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(gE()),Ef);function vE(e){let t=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,p=!1,d=!1)=>{const f=d&&l,h=f?t:s;return p&&a.add(c),h.indexOf(c)===-1&&(h.push(c),f&&l&&(o=t.length)),c},cancel:c=>{const p=s.indexOf(c);p!==-1&&s.splice(p,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let p=0;p<o;p++){const d=t[p];d(c),a.has(d)&&(i.schedule(d),e())}l=!1,r&&(r=!1,i.process(c))}};return i}const _E=40;let Aa=!0,Lo=!1,$a=!1;const Hs={delta:0,timestamp:0},Xo=["read","update","preRender","render","postRender"],sr=Xo.reduce((e,t)=>(e[t]=vE(()=>Lo=!0),e),{}),Ra=Xo.reduce((e,t)=>{const s=sr[t];return e[t]=(o,l=!1,r=!1)=>(Lo||xE(),s.schedule(o,l,r)),e},{}),kE=Xo.reduce((e,t)=>(e[t]=sr[t].cancel,e),{});Xo.reduce((e,t)=>(e[t]=()=>sr[t].process(Hs),e),{});const bE=e=>sr[e].process(Hs),$f=e=>{Lo=!1,Hs.delta=Aa?Ef:Math.max(Math.min(e-Hs.timestamp,_E),1),Hs.timestamp=e,$a=!0,Xo.forEach(bE),$a=!1,Lo&&(Aa=!1,Af($f))},xE=()=>{Lo=!0,Aa=!0,$a||Af($f)},Rf=()=>Hs;function Tf(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(s[o[l]]=e[o[l]]);return s}var bi=function(){},Bo=function(){};bi=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Bo=function(e,t){if(!e)throw new Error(t)};const Ta=(e,t,s)=>Math.min(Math.max(s,e),t),Rr=.001,wE=.01,xu=10,CE=.05,SE=1;function EE({duration:e=800,bounce:t=.25,velocity:s=0,mass:o=1}){let l,r;bi(e<=xu*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=Ta(CE,SE,a),e=Ta(wE,xu,e/1e3),a<1?(l=p=>{const d=p*a,f=d*e,h=d-s,F=Ia(p,a),m=Math.exp(-f);return Rr-h/F*m},r=p=>{const f=p*a*e,h=f*s+s,F=Math.pow(a,2)*Math.pow(p,2)*e,m=Math.exp(-f),g=Ia(Math.pow(p,2),a);return(-l(p)+Rr>0?-1:1)*((h-F)*m)/g}):(l=p=>{const d=Math.exp(-p*e),f=(p-s)*e+1;return-Rr+d*f},r=p=>{const d=Math.exp(-p*e),f=(s-p)*(e*e);return d*f});const i=5/e,c=$E(l,r,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(c,2)*o;return{stiffness:p,damping:a*2*Math.sqrt(o*p),duration:e}}}const AE=12;function $E(e,t,s){let o=s;for(let l=1;l<AE;l++)o=o-e(o)/t(o);return o}function Ia(e,t){return e*Math.sqrt(1-t*t)}const RE=["duration","bounce"],TE=["stiffness","damping","mass"];function wu(e,t){return t.some(s=>e[s]!==void 0)}function IE(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!wu(e,TE)&&wu(e,RE)){const s=EE(e);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function xi(e){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:l}=e,r=Tf(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:p,velocity:d,duration:f,isResolvedFromDuration:h}=IE(r),F=Cu,m=Cu;function g(){const v=d?-(d/1e3):0,w=s-t,k=c/(2*Math.sqrt(i*p)),b=Math.sqrt(i/p)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-t)/100,.4)),k<1){const C=Ia(b,k);F=T=>{const P=Math.exp(-k*b*T);return s-P*((v+k*b*w)/C*Math.sin(C*T)+w*Math.cos(C*T))},m=T=>{const P=Math.exp(-k*b*T);return k*b*P*(Math.sin(C*T)*(v+k*b*w)/C+w*Math.cos(C*T))-P*(Math.cos(C*T)*(v+k*b*w)-C*w*Math.sin(C*T))}}else if(k===1)F=C=>s-Math.exp(-b*C)*(w+(v+b*w)*C);else{const C=b*Math.sqrt(k*k-1);F=T=>{const P=Math.exp(-k*b*T),V=Math.min(C*T,300);return s-P*((v+k*b*w)*Math.sinh(V)+C*w*Math.cosh(V))/C}}}return g(),{next:v=>{const w=F(v);if(h)a.done=v>=f;else{const k=m(v)*1e3,b=Math.abs(k)<=o,C=Math.abs(s-w)<=l;a.done=b&&C}return a.value=a.done?s:w,a},flipTarget:()=>{d=-d,[t,s]=[s,t],g()}}}xi.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Cu=e=>0,If=(e,t,s)=>{const o=t-e;return o===0?1:(s-e)/o},wi=(e,t,s)=>-s*e+s*t+e,Hf=(e,t)=>s=>Math.max(Math.min(s,t),e),mo=e=>e%1?Number(e.toFixed(5)):e,Mo=/(-)?([\d]*\.?[\d])+/g,Ha=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,HE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Wo(e){return typeof e=="string"}const Ko={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},yo=Object.assign(Object.assign({},Ko),{transform:Hf(0,1)}),il=Object.assign(Object.assign({},Ko),{default:1}),Ci=e=>({test:t=>Wo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Vn=Ci("deg"),go=Ci("%"),Fe=Ci("px"),Su=Object.assign(Object.assign({},go),{parse:e=>go.parse(e)/100,transform:e=>go.transform(e*100)}),Si=(e,t)=>s=>!!(Wo(s)&&HE.test(s)&&s.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(s,t)),Of=(e,t,s)=>o=>{if(!Wo(o))return o;const[l,r,a,i]=o.match(Mo);return{[e]:parseFloat(l),[t]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Gn={test:Si("hsl","hue"),parse:Of("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+go.transform(mo(t))+", "+go.transform(mo(s))+", "+mo(yo.transform(o))+")"},OE=Hf(0,255),Tr=Object.assign(Object.assign({},Ko),{transform:e=>Math.round(OE(e))}),En={test:Si("rgb","red"),parse:Of("red","green","blue"),transform:({red:e,green:t,blue:s,alpha:o=1})=>"rgba("+Tr.transform(e)+", "+Tr.transform(t)+", "+Tr.transform(s)+", "+mo(yo.transform(o))+")"};function PE(e){let t="",s="",o="",l="";return e.length>5?(t=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),l=e.substr(7,2)):(t=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),l=e.substr(4,1),t+=t,s+=s,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Oa={test:Si("#"),parse:PE,transform:En.transform},Ft={test:e=>En.test(e)||Oa.test(e)||Gn.test(e),parse:e=>En.test(e)?En.parse(e):Gn.test(e)?Gn.parse(e):Oa.parse(e),transform:e=>Wo(e)?e:e.hasOwnProperty("red")?En.transform(e):Gn.transform(e)},Pf="${c}",Lf="${n}";function LE(e){var t,s,o,l;return isNaN(e)&&Wo(e)&&((s=(t=e.match(Mo))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((l=(o=e.match(Ha))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Bf(e){typeof e=="number"&&(e=`${e}`);const t=[];let s=0;const o=e.match(Ha);o&&(s=o.length,e=e.replace(Ha,Pf),t.push(...o.map(Ft.parse)));const l=e.match(Mo);return l&&(e=e.replace(Mo,Lf),t.push(...l.map(Ko.parse))),{values:t,numColors:s,tokenised:e}}function Mf(e){return Bf(e).values}function Df(e){const{values:t,numColors:s,tokenised:o}=Bf(e),l=t.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?Pf:Lf,i<s?Ft.transform(r[i]):mo(r[i]));return a}}const BE=e=>typeof e=="number"?0:e;function ME(e){const t=Mf(e);return Df(e)(t.map(BE))}const Yo={test:LE,parse:Mf,createTransformer:Df,getAnimatableNone:ME},DE=new Set(["brightness","contrast","saturate","opacity"]);function jE(e){let[t,s]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=s.match(Mo)||[];if(!o)return e;const l=s.replace(o,"");let r=DE.has(t)?1:0;return o!==s&&(r*=100),t+"("+r+l+")"}const NE=/([a-z-]*)\(.*?\)/g,Pa=Object.assign(Object.assign({},Yo),{getAnimatableNone:e=>{const t=e.match(NE);return t?t.map(jE).join(" "):e}});function Ir(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function Eu({hue:e,saturation:t,lightness:s,alpha:o}){e/=360,t/=100,s/=100;let l=0,r=0,a=0;if(!t)l=r=a=s;else{const i=s<.5?s*(1+t):s+t-s*t,c=2*s-i;l=Ir(c,i,e+1/3),r=Ir(c,i,e),a=Ir(c,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const VE=(e,t,s)=>{const o=e*e,l=t*t;return Math.sqrt(Math.max(0,s*(l-o)+o))},UE=[Oa,En,Gn],Au=e=>UE.find(t=>t.test(e)),$u=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,jf=(e,t)=>{let s=Au(e),o=Au(t);Bo(!!s,$u(e)),Bo(!!o,$u(t));let l=s.parse(e),r=o.parse(t);s===Gn&&(l=Eu(l),s=En),o===Gn&&(r=Eu(r),o=En);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=VE(l[c],r[c],i));return a.alpha=wi(l.alpha,r.alpha,i),s.transform(a)}},JE=e=>typeof e=="number",qE=(e,t)=>s=>t(e(s)),Nf=(...e)=>e.reduce(qE);function Vf(e,t){return JE(e)?s=>wi(e,t,s):Ft.test(e)?jf(e,t):Jf(e,t)}const Uf=(e,t)=>{const s=[...e],o=s.length,l=e.map((r,a)=>Vf(r,t[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},zE=(e,t)=>{const s=Object.assign(Object.assign({},e),t),o={};for(const l in s)e[l]!==void 0&&t[l]!==void 0&&(o[l]=Vf(e[l],t[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function Ru(e){const t=Yo.parse(e),s=t.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?r++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:r}}const Jf=(e,t)=>{const s=Yo.createTransformer(t),o=Ru(e),l=Ru(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Nf(Uf(o.parsed,l.parsed),s):(bi(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:e}`)},XE=(e,t)=>s=>wi(e,t,s);function WE(e){if(typeof e=="number")return XE;if(typeof e=="string")return Ft.test(e)?jf:Jf;if(Array.isArray(e))return Uf;if(typeof e=="object")return zE}function KE(e,t,s){const o=[],l=s||WE(e[0]),r=e.length-1;for(let a=0;a<r;a++){let i=l(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=Nf(c,i)}o.push(i)}return o}function YE([e,t],[s]){return o=>s(If(e,t,o))}function ZE(e,t){const s=e.length,o=s-1;return l=>{let r=0,a=!1;if(l<=e[0]?a=!0:l>=e[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>l||c===o);c++);r=c-1}const i=If(e[r],e[r+1],l);return t[r](i)}}function qf(e,t,{clamp:s=!0,ease:o,mixer:l}={}){const r=e.length;Bo(r===t.length,"Both input and output ranges must be the same length"),Bo(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=KE(t,o,l),i=r===2?YE(e,a):ZE(e,a);return s?c=>i(Ta(e[0],e[r-1],c)):i}const or=e=>t=>1-e(1-t),Ei=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,GE=e=>t=>Math.pow(t,e),zf=e=>t=>t*t*((e+1)*t-e),QE=e=>{const t=zf(e);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},Xf=1.525,e9=4/11,t9=8/11,n9=9/10,Wf=e=>e,Ai=GE(2),s9=or(Ai),Kf=Ei(Ai),Yf=e=>1-Math.sin(Math.acos(e)),Zf=or(Yf),o9=Ei(Zf),$i=zf(Xf),l9=or($i),r9=Ei($i),a9=QE(Xf),i9=4356/361,c9=35442/1805,u9=16061/1805,Ll=e=>{if(e===1||e===0)return e;const t=e*e;return e<e9?7.5625*t:e<t9?9.075*t-9.9*e+3.4:e<n9?i9*t-c9*e+u9:10.8*e*e-20.52*e+10.72},p9=or(Ll),d9=e=>e<.5?.5*(1-Ll(1-e*2)):.5*Ll(e*2-1)+.5;function f9(e,t){return e.map(()=>t||Kf).splice(0,e.length-1)}function h9(e){const t=e.length;return e.map((s,o)=>o!==0?o/(t-1):0)}function F9(e,t){return e.map(s=>s*t)}function vl({from:e=0,to:t=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=F9(o&&o.length===a.length?o:h9(a),l);function c(){return qf(i,a,{ease:Array.isArray(s)?s:f9(a,s)})}let p=c();return{next:d=>(r.value=p(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),p=c()}}}function m9({velocity:e=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:t};let i=s*e;const c=t+i,p=r===void 0?c:r(c);return p!==c&&(i=p-t),{next:d=>{const f=-i*Math.exp(-d/o);return a.done=!(f>l||f<-l),a.value=a.done?p:p+f,a},flipTarget:()=>{}}}const Tu={keyframes:vl,spring:xi,decay:m9};function y9(e){if(Array.isArray(e.to))return vl;if(Tu[e.type])return Tu[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?vl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?xi:vl}function Gf(e,t,s=0){return e-t-s}function g9(e,t,s=0,o=!0){return o?Gf(t+-e,t,s):t-(e-t)+s}function v9(e,t,s,o){return o?e>=t+s:e<=-s}const _9=e=>{const t=({delta:s})=>e(s);return{start:()=>Ra.update(t,!0),stop:()=>kE.update(t)}};function Qf(e){var t,s,{from:o,autoplay:l=!0,driver:r=_9,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:h,onRepeat:F,onUpdate:m}=e,g=Tf(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=g,w,k=0,b=g.duration,C,T=!1,P=!0,V;const $=y9(g);!((s=(t=$).needsInterpolation)===null||s===void 0)&&s.call(t,o,v)&&(V=qf([0,100],[o,v],{clamp:!1}),o=0,v=100);const D=$(Object.assign(Object.assign({},g),{from:o,to:v}));function G(){k++,c==="reverse"?(P=k%2===0,a=g9(a,b,p,P)):(a=Gf(a,b,p),c==="mirror"&&D.flipTarget()),T=!1,F&&F()}function ie(){w.stop(),h&&h()}function X(Ie){if(P||(Ie=-Ie),a+=Ie,!T){const ze=D.next(Math.max(0,a));C=ze.value,V&&(C=V(C)),T=P?ze.done:a<=0}m==null||m(C),T&&(k===0&&(b??(b=a)),k<i?v9(a,b,p,P)&&G():ie())}function ce(){d==null||d(),w=r(X),w.start()}return l&&ce(),{stop:()=>{f==null||f(),w.stop()}}}function eh(e,t){return t?e*(1e3/t):0}function k9({from:e=0,velocity:t=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:h,onStop:F}){let m;function g(b){return s!==void 0&&b<s||o!==void 0&&b>o}function v(b){return s===void 0?o:o===void 0||Math.abs(s-b)<Math.abs(o-b)?s:o}function w(b){m==null||m.stop(),m=Qf(Object.assign(Object.assign({},b),{driver:d,onUpdate:C=>{var T;f==null||f(C),(T=b.onUpdate)===null||T===void 0||T.call(b,C)},onComplete:h,onStop:F}))}function k(b){w(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},b))}if(g(e))k({from:e,velocity:t,to:v(e)});else{let b=l*t+e;typeof p<"u"&&(b=p(b));const C=v(b),T=C===s?-1:1;let P,V;const $=D=>{P=V,V=D,t=eh(D-P,Rf().delta),(T===1&&D>C||T===-1&&D<C)&&k({from:D,to:C,velocity:t})};w({type:"decay",from:e,velocity:t,timeConstant:r,power:l,restDelta:c,modifyTarget:p,onUpdate:g(b)?$:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const th=(e,t)=>1-3*t+3*e,nh=(e,t)=>3*t-6*e,sh=e=>3*e,Bl=(e,t,s)=>((th(t,s)*e+nh(t,s))*e+sh(t))*e,oh=(e,t,s)=>3*th(t,s)*e*e+2*nh(t,s)*e+sh(t),b9=1e-7,x9=10;function w9(e,t,s,o,l){let r,a,i=0;do a=t+(s-t)/2,r=Bl(a,o,l)-e,r>0?s=a:t=a;while(Math.abs(r)>b9&&++i<x9);return a}const C9=8,S9=.001;function E9(e,t,s,o){for(let l=0;l<C9;++l){const r=oh(t,s,o);if(r===0)return t;const a=Bl(t,s,o)-e;t-=a/r}return t}const _l=11,cl=1/(_l-1);function A9(e,t,s,o){if(e===t&&s===o)return Wf;const l=new Float32Array(_l);for(let a=0;a<_l;++a)l[a]=Bl(a*cl,e,s);function r(a){let i=0,c=1;const p=_l-1;for(;c!==p&&l[c]<=a;++c)i+=cl;--c;const d=(a-l[c])/(l[c+1]-l[c]),f=i+d*cl,h=oh(f,e,s);return h>=S9?E9(a,f,e,s):h===0?f:w9(a,i,i+cl,e,s)}return a=>a===0||a===1?a:Bl(r(a),t,o)}const Hr={};class $9{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(t,s,o)}clear(){this.subscriptions.clear()}}const Iu=e=>!isNaN(parseFloat(e));class R9{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new $9,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=Rf();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Ra.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ra.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Iu(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Iu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?eh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function T9(e){return new R9(e)}const{isArray:I9}=Array;function H9(){const e=z({}),t=o=>{const l=r=>{e.value[r]&&(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};o?I9(o)?o.forEach(l):l(o):Object.keys(e.value).forEach(l)},s=(o,l,r)=>{if(e.value[o])return e.value[o];const a=T9(l);return a.onChange(i=>r[o]=i),e.value[o]=a,a};return sv(t),{motionValues:e,get:s,stop:t}}const O9=e=>Array.isArray(e),Un=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Or=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),P9=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Pr=()=>({type:"keyframes",ease:"linear",duration:300}),L9=e=>({type:"keyframes",duration:800,values:e}),Hu={default:P9,x:Un,y:Un,z:Un,rotate:Un,rotateX:Un,rotateY:Un,rotateZ:Un,scaleX:Or,scaleY:Or,scale:Or,backgroundColor:Pr,color:Pr,opacity:Pr},lh=(e,t)=>{let s;return O9(t)?s=L9:s=Hu[e]||Hu.default,{to:t,...s(t)}},Ou={...Ko,transform:Math.round},rh={color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,borderWidth:Fe,borderTopWidth:Fe,borderRightWidth:Fe,borderBottomWidth:Fe,borderLeftWidth:Fe,borderRadius:Fe,radius:Fe,borderTopLeftRadius:Fe,borderTopRightRadius:Fe,borderBottomRightRadius:Fe,borderBottomLeftRadius:Fe,width:Fe,maxWidth:Fe,height:Fe,maxHeight:Fe,size:Fe,top:Fe,right:Fe,bottom:Fe,left:Fe,padding:Fe,paddingTop:Fe,paddingRight:Fe,paddingBottom:Fe,paddingLeft:Fe,margin:Fe,marginTop:Fe,marginRight:Fe,marginBottom:Fe,marginLeft:Fe,rotate:Vn,rotateX:Vn,rotateY:Vn,rotateZ:Vn,scale:il,scaleX:il,scaleY:il,scaleZ:il,skew:Vn,skewX:Vn,skewY:Vn,distance:Fe,translateX:Fe,translateY:Fe,translateZ:Fe,x:Fe,y:Fe,z:Fe,perspective:Fe,transformPerspective:Fe,opacity:yo,originX:Su,originY:Su,originZ:Fe,zIndex:Ou,filter:Pa,WebkitFilter:Pa,fillOpacity:yo,strokeOpacity:yo,numOctaves:Ou},Ri=e=>rh[e],ah=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function B9(e,t){let s=Ri(e);return s!==Pa&&(s=Yo),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const M9={linear:Wf,easeIn:Ai,easeInOut:Kf,easeOut:s9,circIn:Yf,circInOut:o9,circOut:Zf,backIn:$i,backInOut:r9,backOut:l9,anticipate:a9,bounceIn:p9,bounceInOut:d9,bounceOut:Ll},Pu=e=>{if(Array.isArray(e)){const[t,s,o,l]=e;return A9(t,s,o,l)}else if(typeof e=="string")return M9[e];return e},D9=e=>Array.isArray(e)&&typeof e[0]!="number",Lu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Yo.test(t)&&!t.startsWith("url("));function j9(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function N9({ease:e,times:t,delay:s,...o}){const l={...o};return t&&(l.offset=t),e&&(l.ease=D9(e)?e.map(Pu):Pu(e)),s&&(l.elapsed=-s),l}function V9(e,t,s){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),j9(t),U9(e)||(e={...e,...lh(s,t.to)}),{...t,...N9(e)}}function U9({delay:e,repeat:t,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function J9(e,t){return e[t]||e.default||e}function q9(e,t,s,o,l){const r=J9(o,e);let a=r.from===null||r.from===void 0?t.get():r.from;const i=Lu(e,s);a==="none"&&i&&typeof s=="string"&&(a=B9(e,s));const c=Lu(e,a);function p(f){const h={from:a,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:F=>t.set(F)};return r.type==="inertia"||r.type==="decay"?k9({...h,...r}):Qf({...V9(r,h,e),onUpdate:F=>{h.onUpdate(F),r.onUpdate&&r.onUpdate(F)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function d(f){return t.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?d:p}function z9(){const{motionValues:e,stop:t,get:s}=H9();return{motionValues:e,stop:t,push:(l,r,a,i={},c)=>{const p=a[l],d=s(l,p,a);if(i&&i.immediate){d.set(r);return}const f=q9(l,d,r,i,c);d.start(f)}}}function X9(e,t={},{motionValues:s,push:o,stop:l}=z9()){const r=x(t),a=z(!1);me(s,f=>{a.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([h,F])=>{if(h!=="transition")return new Promise(m=>o(h,F,e,f.transition||lh(h,f[h]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const h=ca(f)?f:i(f);Object.entries(h).forEach(([F,m])=>{F!=="transition"&&o(F,m,e,{immediate:!0})})},leave:async f=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){f();return}await c(h),f()},stop:l}}const Ti=typeof window<"u",W9=()=>Ti&&window.onpointerdown===null,K9=()=>Ti&&window.ontouchstart===null,Y9=()=>Ti&&window.onmousedown===null;function Z9({target:e,state:t,variants:s,apply:o}){const l=x(s),r=z(!1),a=z(!1),i=z(!1),c=R(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),p=R(()=>{const d={};Object.assign(d,t.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),i.value&&l.focused&&Object.assign(d,l.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});l.hovered&&(ke(e,"mouseenter",()=>r.value=!0),ke(e,"mouseleave",()=>{r.value=!1,a.value=!1}),ke(e,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(Y9()&&(ke(e,"mousedown",()=>a.value=!0),ke(e,"mouseup",()=>a.value=!1)),W9()&&(ke(e,"pointerdown",()=>a.value=!0),ke(e,"pointerup",()=>a.value=!1)),K9()&&(ke(e,"touchstart",()=>a.value=!0),ke(e,"touchend",()=>a.value=!1))),l.focused&&(ke(e,"focus",()=>i.value=!0),ke(e,"blur",()=>i.value=!1)),me(p,o)}function G9({set:e,target:t,apply:s,variants:o,variant:l}){const r=x(o);me(()=>t,()=>{r&&(r.initial&&e("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function Q9({state:e,apply:t}){me(e,s=>{s&&t(s)},{immediate:!0})}function eA({target:e,variants:t,variant:s}){const o=x(t);o&&(o.visible||o.visibleOnce)&&zv(e,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function tA(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&G9(e),t.syncVariants&&Q9(e),t.visibilityHooks&&eA(e),t.eventListeners&&Z9(e)}function ih(e={}){const t=Ve({...e}),s=z({});return me(t,()=>{const o={};for(const[l,r]of Object.entries(t)){const a=Ri(l),i=ah(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}function Ii(e,t){me(()=>St(e),s=>{s&&t(s)},{immediate:!0})}const nA={x:"translateX",y:"translateY",z:"translateZ"};function ch(e={},t=!0){const s=Ve({...e}),o=z("");return me(s,l=>{let r="",a=!1;if(t&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(Fe.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const p=Ri(i),d=ah(c,p);r+=`${nA[i]||i}(${d}) `}t&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const sA=["","X","Y","Z"],oA=["perspective","translate","scale","rotate","skew"],uh=["transformPerspective","x","y","z"];oA.forEach(e=>{sA.forEach(t=>{const s=e+t;uh.push(s)})});const lA=new Set(uh);function Hi(e){return lA.has(e)}const rA=new Set(["originX","originY","originZ"]);function ph(e){return rA.has(e)}function aA(e){const t={},s={};return Object.entries(e).forEach(([o,l])=>{Hi(o)||ph(o)?t[o]=l:s[o]=l}),{transform:t,style:s}}function dh(e){const{transform:t,style:s}=aA(e),{transform:o}=ch(t),{style:l}=ih(s);return o.value&&(l.value.transform=o.value),l.value}function iA(e,t){let s,o;const{state:l,style:r}=ih();return Ii(e,a=>{o=a;for(const i of Object.keys(rh))a.style[i]===null||a.style[i]===""||Hi(i)||ph(i)||(l[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),t&&t(l)}),me(r,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function cA(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=c.length===1?c[0]:c;return{...o,[r]:p}},{})}function uA(e,t){Object.entries(cA(t)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>e[r]=0);return}o.forEach((r,a)=>e[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){e.x=o;return}if(s==="translateY"){e.y=o;return}if(s==="translateZ"){e.z=o;return}e[s]=o})}function pA(e,t){let s,o;const{state:l,transform:r}=ch();return Ii(e,a=>{o=a,a.style.transform&&uA(l,a.style.transform),s&&(a.style.transform=s),t&&t(l)}),me(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function dA(e,t){const s=Ve({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:l}=iA(e,o),{transform:r}=pA(e,o);return me(s,a=>{Object.entries(a).forEach(([i,c])=>{const p=Hi(i)?r:l;p[i]&&p[i]===c||(p[i]=c)})},{immediate:!0,deep:!0}),Ii(e,()=>t&&o(t)),{motionProperties:s,style:l,transform:r}}function fA(e={}){const t=x(e),s=z();return{state:R(()=>{if(s.value)return t[s.value]}),variant:s}}function fh(e,t={},s){const{motionProperties:o}=dA(e),{variant:l,state:r}=fA(t),a=X9(o,t),i={target:e,variant:l,variants:t,state:r,motionProperties:o,...a};return tA(i,s),i}const hA=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],FA=(e,t)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&ca(s.variants)&&(t.value={...t.value,...s.variants}),hA.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Kg(s[o])){const l=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&ca(s[o])&&(t.value[o]=s[o])}))},Lr=e=>({created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Hr[r]&&Hr[r].stop();const a=z(e||{});typeof o.value=="object"&&(a.value=o.value),FA(l,a);const i=fh(s,a);s.motionInstance=i,r&&(Hr[r]=i)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=x(l);const r=yE((e==null?void 0:e.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:dh(r)}}}),mA={initial:{opacity:0},enter:{opacity:1}},yA={initial:{opacity:0},visible:{opacity:1}},gA={initial:{opacity:0},visibleOnce:{opacity:1}},vA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},_A={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},kA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},bA={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},xA={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},wA={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},CA={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},SA={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},EA={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},AA={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},$A={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},RA={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},TA={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},IA={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},HA={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},OA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},PA={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},LA={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},BA={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},MA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},DA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},jA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},NA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},VA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},UA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},JA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},qA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},La={__proto__:null,fade:mA,fadeVisible:yA,fadeVisibleOnce:gA,pop:vA,popVisible:_A,popVisibleOnce:kA,rollBottom:TA,rollLeft:bA,rollRight:CA,rollTop:AA,rollVisibleBottom:IA,rollVisibleLeft:xA,rollVisibleOnceBottom:HA,rollVisibleOnceLeft:wA,rollVisibleOnceRight:EA,rollVisibleOnceTop:RA,rollVisibleRight:SA,rollVisibleTop:$A,slideBottom:UA,slideLeft:OA,slideRight:BA,slideTop:jA,slideVisibleBottom:JA,slideVisibleLeft:PA,slideVisibleOnceBottom:qA,slideVisibleOnceLeft:LA,slideVisibleOnceRight:DA,slideVisibleOnceTop:VA,slideVisibleRight:MA,slideVisibleTop:NA},zA=Ce({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const t=Wm(),s=Ve({});if(!e.is&&!t.default)return()=>Ge("div",{});const o=R(()=>{let c;return e.preset&&(c=La[e.preset]),c}),l=R(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=R(()=>{const c={...l.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=R(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Zu(c)&&(c=Ps(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var f,h,F;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(h=p.variants)!=null&&h.visible&&p.apply("visible"),(F=p.variants)!=null&&F.visibleOnce&&p.apply("visibleOnce")},10)};Yl(()=>Object.entries(s).forEach(([p,d])=>c(d)))}return{slots:t,component:a,motionConfig:r,instances:s}},render({slots:e,motionConfig:t,instances:s,component:o}){var i;const l=dh(t.initial||{}),r=(c,p)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:d})=>{const f=fh(d,t);s[p]=f},c);if(o){const c=Ge(o,void 0,e);return r(c,0),c}return(((i=e.default)==null?void 0:i.call(e))||[]).map((c,p)=>r(c,p))}});function XA(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const WA={install(e,t){if(e.directive("motion",Lr()),e.component("Motion",zA),!t||t&&!t.excludePresets)for(const s in La){const o=La[s];e.directive(`motion-${XA(s)}`,Lr(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,e.directive(`motion-${s}`,Lr(o))}}};var Bu;const vo=typeof window<"u",KA=Object.prototype.toString,YA=e=>KA.call(e)==="[object Object]";vo&&((Bu=window==null?void 0:window.navigator)!=null&&Bu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ZA(e){return Va()?(rp(e),!0):!1}function GA(e){var t;const s=x(e);return(t=s==null?void 0:s.$el)!=null?t:s}const QA=vo?window:void 0,Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Du="__vueuse_ssr_handlers__";Mu[Du]=Mu[Du]||{};function e$(e,t={}){const{immediate:s=!0,window:o=QA}=t,l=z(!1);let r=null;function a(){!l.value||!o||(e(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),ZA(c),{isActive:l,pause:c,resume:i}}var ju;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ju||(ju={}));const lr="vue-starport-injection",hh="vue-starport-options",t$={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Fh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var n$=Object.defineProperty,Ml=Object.getOwnPropertySymbols,mh=Object.prototype.hasOwnProperty,yh=Object.prototype.propertyIsEnumerable,Nu=(e,t,s)=>t in e?n$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,s$=(e,t)=>{for(var s in t||(t={}))mh.call(t,s)&&Nu(e,s,t[s]);if(Ml)for(var s of Ml(t))yh.call(t,s)&&Nu(e,s,t[s]);return e},Vu=(e,t)=>{var s={};for(var o in e)mh.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Ml)for(var o of Ml(e))t.indexOf(o)<0&&yh.call(e,o)&&(s[o]=e[o]);return s};const o$=Ce({name:"StarportProxy",props:s$({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Fh),setup(e,t){const s=K(lr),o=R(()=>s.getInstance(e.port,e.component)),l=z(),r=o.value.generateId(),a=z(!1);return o.value.isVisible||(o.value.land(),a.value=!0),fs(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await nt(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${e.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Uo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await nt(),await nt(),!o.value.el&&s.dispose(o.value.port))}),me(()=>e,async()=>{o.value.props&&await nt();const i=e,{props:c}=i,p=Vu(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:p}=i,d=Vu(i,["initialProps","mountedProps"]),f=Ke(d,(a.value?p:c)||{});return Ge("div",Ke(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?Ge(t.slots.default):void 0)}}});var l$=Object.defineProperty,r$=Object.defineProperties,a$=Object.getOwnPropertyDescriptors,Uu=Object.getOwnPropertySymbols,i$=Object.prototype.hasOwnProperty,c$=Object.prototype.propertyIsEnumerable,Ju=(e,t,s)=>t in e?l$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u$=(e,t)=>{for(var s in t||(t={}))i$.call(t,s)&&Ju(e,s,t[s]);if(Uu)for(var s of Uu(t))c$.call(t,s)&&Ju(e,s,t[s]);return e},p$=(e,t)=>r$(e,a$(t));const d$=Ce({name:"Starport",inheritAttrs:!0,props:Fh,setup(e,t){const s=z(!1);return fs(()=>{if(s.value=!0,!K(lr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!YA(r)||Qt(r))&&(r={render(){return o}}),Ge(o$,p$(u$({},e),{key:e.port,component:Jl(r),props:l.props}))}}});function f$(e){const t=Ve({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=vo?document.documentElement||document.body:void 0;function o(){if(!vo)return;const i=GA(e);if(!i)return;const{height:c,width:p,left:d,top:f}=i.getBoundingClientRect(),h=window.getComputedStyle(i),F=h.margin,m=h.padding;Object.assign(t,{height:c,width:p,left:d,top:s.scrollTop+f,margin:F,padding:m})}const l=e$(o,{immediate:!1});function r(){vo&&(o(),l.resume())}function a(){l.pause()}return t}let h$=(e,t=21)=>(s=t)=>{let o="",l=s;for(;l--;)o+=e[Math.random()*e.length|0];return o};const qu=h$("abcdefghijklmnopqrstuvwxyz",5);function zu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function F$(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var m$=Object.defineProperty,Xu=Object.getOwnPropertySymbols,y$=Object.prototype.hasOwnProperty,g$=Object.prototype.propertyIsEnumerable,Wu=(e,t,s)=>t in e?m$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Br=(e,t)=>{for(var s in t||(t={}))y$.call(t,s)&&Wu(e,s,t[s]);if(Xu)for(var s of Xu(t))g$.call(t,s)&&Wu(e,s,t[s]);return e};function v$(e,t,s={}){const o=F$(t),l=zu(o)||qu(),r=z(),a=z(null),i=z(!1),c=z(!1),p=Oh(!0),d=z({}),f=R(()=>Br(Br(Br({},t$),s),d.value)),h=z(0);let F;p.run(()=>{F=f$(r),me(r,async w=>{w&&(c.value=!0),await nt(),r.value||(c.value=!1)})});const m=zu(e);function g(){return`starport-${l}-${m}-${qu()}`}const v=g();return Ve({el:r,id:v,port:e,props:a,rect:F,scope:p,isLanded:i,isVisible:c,options:f,liftOffTime:h,component:t,componentName:o,componentId:l,generateId:g,setLocalOptions(w={}){d.value=JSON.parse(JSON.stringify(w))},elRef(){return r},liftOff(){i.value&&(i.value=!1,h.value=Date.now(),F.listen())},land(){i.value||(i.value=!0,F.pause())}})}function _$(e){const t=Ve(new Map);function s(l,r){let a=t.get(l);return a||(a=v$(l,r,e),t.set(l,a)),a.component=r,a}function o(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:s}}var k$=Object.defineProperty,b$=Object.defineProperties,x$=Object.getOwnPropertyDescriptors,Ku=Object.getOwnPropertySymbols,w$=Object.prototype.hasOwnProperty,C$=Object.prototype.propertyIsEnumerable,Yu=(e,t,s)=>t in e?k$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,S$=(e,t)=>{for(var s in t||(t={}))w$.call(t,s)&&Yu(e,s,t[s]);if(Ku)for(var s of Ku(t))C$.call(t,s)&&Yu(e,s,t[s]);return e},E$=(e,t)=>b$(e,x$(t));const A$=Ce({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=K(lr);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=R(()=>t.getInstance(e.port,e.component)),o=R(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=R(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,p={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?E$(S$({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),p)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Ge("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Ge(Om,{to:a?`#${o.value}`:"body",disabled:!a},Ge(s.value.component,Ke(r,s.value.props))))}}}),$$=Ce({name:"StarportCarrier",setup(e,{slots:t}){const s=_$(K(hh,{}));return $t().appContext.app.provide(lr,s),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(s.portMap.entries()).map(([r,{component:a}])=>Ge(A$,{key:r,port:r,component:a}))]}}});function R$(e={}){return{install(t){t.provide(hh,e),t.component("Starport",d$),t.component("StarportCarrier",$$)}}}function T$(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(WA),e.app.use(R$({keepAlive:!0}))}function kt(e,t,s){var o;return((o=e.instance)==null?void 0:o.$).provides[t]??s}function I$(){return{install(e){e.directive("click",{name:"v-click",mounted(t,s){var d,f,h,F,m,g;if(Fo.value||(d=kt(s,uo))!=null&&d.value)return;const o=kt(s,Wn),l=kt(s,co),r=kt(s,aa),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,p=i?Rg:gr;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(t))&&o.value.push(t),s.value==null&&(s.value=(F=o==null?void 0:o.value)==null?void 0:F.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[t]);else if(!((g=r==null?void 0:r.value.get(s.value))!=null&&g.includes(t))){const v=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[t].concat(v))}t==null||t.classList.toggle(zn,!0),l&&me(l,()=>{const v=(l==null?void 0:l.value)??0,w=s.value!=null?v>=s.value:v>c;t.classList.contains(vr)||t.classList.toggle(p,!w),a!==!1&&a!==void 0&&t.classList.toggle(p,w),t.classList.toggle(Xs,!1);const k=r==null?void 0:r.value.get(v);k==null||k.forEach((b,C)=>{b.classList.toggle(rl,!1),C===k.length-1?b.classList.toggle(Xs,!0):b.classList.toggle(rl,!0)}),t.classList.contains(Xs)||t.classList.toggle(rl,w)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(zn,!1);const o=kt(s,Wn);o!=null&&o.value&&ia(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,s){var i,c;if(Fo.value||(i=kt(s,uo))!=null&&i.value)return;const o=kt(s,Wn),l=kt(s,co),r=kt(s,aa),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),r!=null&&r.value.has(s.value)?(c=r==null?void 0:r.value.get(s.value))==null||c.push(t):r==null||r.value.set(s.value,[t]),t==null||t.classList.toggle(zn,!0),l&&me(l,()=>{const p=(l.value??0)>=(s.value??a??0);t.classList.contains(vr)||t.classList.toggle(gr,!p),t.classList.toggle(Xs,!1),t.classList.contains(Xs)||t.classList.toggle(rl,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(zn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,s){var a,i,c;if(Fo.value||(a=kt(s,uo))!=null&&a.value)return;const o=kt(s,Wn),l=kt(s,co),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(zn,!0),l&&me(l,()=>{const p=(l==null?void 0:l.value)??0,d=s.value!=null?p>=s.value:p>r;t.classList.toggle(gr,d),t.classList.toggle(vr,d)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(zn,!1);const o=kt(s,Wn);o!=null&&o.value&&ia(o.value,t)}})}}}function H$(e,t){const s=gf(e),o=vf(t,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Se,themeConfigs:R(()=>Se.themeConfig)}}function O$(){return{install(e){const t=H$(Pt,Ht);e.provide(se,Ve(t))}}}const Ns=Ty(FE);Ns.use(yt);Ns.use(Eg());Ns.use(I$());Ns.use(O$());T$({app:Ns,router:yt});Ns.mount("#app");export{W0 as $,d0 as A,z as B,B$ as C,ut as D,He as E,Ae as F,S_ as G,iE as H,Ht as I,Pl as J,sE as K,Ar as L,fs as M,Ve as N,P$ as O,M$ as P,me as Q,W as R,af as S,$e as T,ct as U,D_ as V,MF as W,DF as X,To as Y,Cr as Z,oe as _,se as a,Fi as a0,mi as a1,U0 as a2,qe as a3,Z_ as a4,ri as b,Se as c,Ce as d,FF as e,q as f,n as g,x as h,K as i,We as j,Sf as k,u as l,j as m,dt as n,E as o,ye as p,ii as q,Jo as r,Ut as s,as as t,L$ as u,R as v,_r as w,te as x,Qd as y,y0 as z};
