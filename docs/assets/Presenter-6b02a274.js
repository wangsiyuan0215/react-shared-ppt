import{o as d,f as k,g as e,B as w,C as I,v,d as B,i as P,a as H,D as S,x as y,E as z,h as t,_ as D,G as R,H as A,c as b,b as E,I as $,J as L,K as q,L as F,M as O,N as U,O as W,P as Z,Q as j,m as u,t as G,n as g,R as N,S as V,p as T,T as J,U as x,V as K,F as Q,W as X,X as Y,w as ee,Y as te,Z as se,q as M,$ as oe,a0 as ne,a1 as ae,a2 as le,a3 as re,k as ie,a4 as ce}from"./index-062db930.js";import{N as ue}from"./NoteDisplay-839770f5.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),_e=[pe];function me(n,l){return d(),k("svg",de,_e)}const ve={name:"carbon-renew",render:me},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(n,l){return d(),k("svg",he,xe)}const Se={name:"carbon-time",render:we},ye="/react-shared-ppt/assets/logo-title-horizontal-96c3c915.png";function ke(){const n=w(Date.now()),l=I({interval:1e3}),p=v(()=>{const s=(l.value-n.value)/1e3,a=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${a}`});function _(){n.value=l.value}return{timer:p,resetTimer:_}}const Ce=B({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(n){const l=n;P(H);const p=v(()=>{var s,a,o;return(o=(a=(s=S.value)==null?void 0:s.meta)==null?void 0:a.slide)==null?void 0:o.note}),_=v(()=>{var s,a,o;return(o=(a=(s=S.value)==null?void 0:s.meta)==null?void 0:a.slide)==null?void 0:o.noteHTML});return(s,a)=>(d(),y(ue,{class:z(l.class),note:t(p),"note-html":t(_)},null,8,["class","note","note-html"]))}}),be=D(Ce,[["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/NoteStatic.vue"]]),h=n=>(X("data-v-574fd206"),n=n(),Y(),n),$e={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},Ve={class:"grid-section top flex"},Te=h(()=>e("img",{src:ye,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Me=h(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=h(()=>e("div",{class:"context"}," current ",-1)),He=h(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},De={class:"grid-section bottom"},Ie={class:"progress-bar"},Re=B({__name:"Presenter",setup(n){P(H);const l=w();R(),A(l);const p=b.titleTemplate.replace("%s",b.title||"Slidev");E({title:`Presenter - ${p}`});const{timer:_,resetTimer:s}=ke(),a=w([]),o=v(()=>$.value<L.value?{route:S.value,clicks:$.value+1}:q.value?{route:F.value,clicks:0}:null);return O(()=>{const C=l.value.querySelector("#slide-content"),i=U(W()),f=Z();j(()=>{if(!f.value||te.value||!se.value)return;const c=C.getBoundingClientRect(),r=(i.x-c.left)/c.width*100,m=(i.y-c.top)/c.height*100;if(!(r<0||r>100||m<0||m>100))return{x:r,y:m}},c=>{ee.cursor=c})}),(C,i)=>{const f=Se,c=ve;return d(),k(Q,null,[e("div",$e,[e("div",Ne,[e("div",Ve,[Te,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...r)=>t(s)&&t(s)(...r))},[u(f,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,G(t(_)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:g(t(M))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:g(t(M))},[t(o)?(d(),y(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var r;return[u(t(ae),{is:(r=t(o).route)==null?void 0:r.component,"clicks-elements":a.value,"onUpdate:clicksElements":i[1]||(i[1]=m=>a.value=m),clicks:t(o).clicks,"clicks-disabled":!1,class:z(t(ne)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):T("v-if",!0),He],4),e("div",ze,[(d(),y(be,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",De,[u(le,{persist:!0})]),T("v-if",!0)]),e("div",Ie,[e("div",{class:"progress h-2px bg-primary transition-all",style:g({width:`${(t(re)-1)/(t(ie)-1)*100}%`})},null,4)])]),u(ce),u(K,{modelValue:t(x),"onUpdate:modelValue":i[2]||(i[2]=r=>J(x)?x.value=r:null)},null,8,["modelValue"])],64)}}});const Le=D(Re,[["__scopeId","data-v-574fd206"],["__file","/home/runner/work/react-shared-ppt/react-shared-ppt/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};