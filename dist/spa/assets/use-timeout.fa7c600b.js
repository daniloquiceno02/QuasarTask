import{a as Y,u as F}from"./use-dark.19a4f461.js";import{c as Q,l as I,v as O}from"./QBtn.ab13d010.js";import{f as p,h as R,g as q,v as W,a3 as C,q as M,k as _,n as z,C as v,O as d,s as j,a4 as K,i as G}from"./index.f80d0101.js";import{b as J,a as N,h as Z}from"./scroll.3ab2f286.js";const ee={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},T={xs:2,sm:4,md:8,lg:16,xl:24};var ae=Q({name:"QSeparator",props:{...Y,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=q(),r=F(e,t.proxy.$q),l=p(()=>e.vertical===!0?"vertical":"horizontal"),i=p(()=>` q-separator--${l.value}`),c=p(()=>e.inset!==!1?`${i.value}-${ee[e.inset]}`:""),s=p(()=>`q-separator${i.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(r.value===!0?" q-separator--dark":"")),n=p(()=>{const a={};if(e.size!==void 0&&(a[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const g=e.spaced===!0?`${T.md}px`:e.spaced in T?`${T[e.spaced]}px`:e.spaced,u=e.vertical===!0?["Left","Right"]:["Top","Bottom"];a[`margin${u[0]}`]=a[`margin${u[1]}`]=g}return a});return()=>R("hr",{class:s.value,style:n.value,"aria-orientation":l.value})}});function ue(e,t,r){let l;function i(){l!==void 0&&(C.remove(l),l=void 0)}return W(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>r.value===!0,handler:t},C.add(l)}}}const ce={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},de=["beforeShow","show","beforeHide","hide"];function fe({showing:e,canShow:t,hideOnRouteChange:r,handleShow:l,handleHide:i,processOnMount:c}){const s=q(),{props:n,emit:a,proxy:g}=s;let u;function X(o){e.value===!0?b(o):E(o)}function E(o){if(n.disable===!0||o!==void 0&&o.qAnchorHandled===!0||t!==void 0&&t(o)!==!0)return;const m=n["onUpdate:modelValue"]!==void 0;m===!0&&(a("update:modelValue",!0),u=o,z(()=>{u===o&&(u=void 0)})),(n.modelValue===null||m===!1)&&H(o)}function H(o){e.value!==!0&&(e.value=!0,a("beforeShow",o),l!==void 0?l(o):a("show",o))}function b(o){if(n.disable===!0)return;const m=n["onUpdate:modelValue"]!==void 0;m===!0&&(a("update:modelValue",!1),u=o,z(()=>{u===o&&(u=void 0)})),(n.modelValue===null||m===!1)&&P(o)}function P(o){e.value!==!1&&(e.value=!1,a("beforeHide",o),i!==void 0?i(o):a("hide",o))}function $(o){n.disable===!0&&o===!0?n["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):o===!0!==e.value&&(o===!0?H:P)(u)}M(()=>n.modelValue,$),r!==void 0&&I(s)===!0&&M(()=>g.$route.fullPath,()=>{r.value===!0&&e.value===!0&&b()}),c===!0&&_(()=>{$(n.modelValue)});const x={show:E,hide:b,toggle:X};return Object.assign(g,x),x}let w=0,S,V,h,L=!1,k,B,A,f=null;function te(e){oe(e)&&j(e)}function oe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=K(e),r=e.shiftKey&&!e.deltaX,l=!r&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=r||l?e.deltaY:e.deltaX;for(let c=0;c<t.length;c++){const s=t[c];if(Z(s,l))return l?i<0&&s.scrollTop===0?!0:i>0&&s.scrollTop+s.clientHeight===s.scrollHeight:i<0&&s.scrollLeft===0?!0:i>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function U(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){L!==!0&&(L=!0,requestAnimationFrame(()=>{L=!1;const{height:t}=e.target,{clientHeight:r,scrollTop:l}=document.scrollingElement;(h===void 0||t!==window.innerHeight)&&(h=r-t,document.scrollingElement.scrollTop=l),l>h&&(document.scrollingElement.scrollTop-=Math.ceil((l-h)/8))}))}function D(e){const t=document.body,r=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(t);S=J(window),V=N(window),k=t.style.left,B=t.style.top,A=window.location.href,t.style.left=`-${S}px`,t.style.top=`-${V}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,v.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,d.passiveCapture),window.visualViewport.addEventListener("scroll",y,d.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",U,d.passiveCapture))}v.is.desktop===!0&&v.is.mac===!0&&window[`${e}EventListener`]("wheel",te,d.notPassive),e==="remove"&&(v.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",y,d.passiveCapture),window.visualViewport.removeEventListener("scroll",y,d.passiveCapture)):window.removeEventListener("scroll",U,d.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=k,t.style.top=B,window.location.href===A&&window.scrollTo(S,V),h=void 0)}function le(e){let t="add";if(e===!0){if(w++,f!==null){clearTimeout(f),f=null;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(t="remove",v.is.ios===!0&&v.is.nativeMobile===!0){f!==null&&clearTimeout(f),f=setTimeout(()=>{D(t),f=null},100);return}}D(t)}function me(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,le(t))}}}function ve(){let e=null;const t=q();function r(){e!==null&&(clearTimeout(e),e=null)}return G(r),W(r),{removeTimeout:r,registerTimeout(l,i){r(),O(t)===!1&&(e=setTimeout(()=>{e=null,l()},i))}}}export{ae as Q,de as a,ve as b,fe as c,ue as d,me as e,ce as u};
