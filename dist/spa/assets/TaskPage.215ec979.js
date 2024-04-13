import{Q as D,a as Z}from"./QCard.7f14530e.js";import{u as Le,a as Me,b as Ie,c as Ke,d as ze,e as Ae,Q as Ne}from"./use-timeout.da5fbea5.js";import{c as G,o as He,p as Oe,a as he,v as Re,q as L,r as Ue,j as je,e as F}from"./QBtn.b025d511.js";import{f as y,h as _,i as Ge,v as ge,n as We,g as be,a5 as ee,r as p,Y as Ye,y as Je,a6 as Xe,C as ke,K as ye,q as te,T as oe,d as Ze,o as R,c as U,a as q,e as c,a1 as ne,a0 as et,w as g,$ as le,_ as j,a7 as ae,I as se}from"./index.6001c1b9.js";import{r as ie,c as tt,b as ot,I as re,B as nt,Q as ue}from"./ButtonComp.91b4f5eb.js";import{a as V}from"./axios.37d53be1.js";import"./use-dark.7699e1e3.js";import"./scroll.6c0b919d.js";var ce=G({name:"QCardActions",props:{...He,vertical:Boolean},setup(e,{slots:t}){const o=Oe(e),a=y(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>_("div",{class:a.value},he(t.default))}});function lt(){let e;const t=be();function o(){e=void 0}return Ge(o),ge(o),{removeTick:o,registerTick(a){e=a,We(()=>{e===a&&(Re(t)===!1&&e(),e=void 0)})}}}const at={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function st(e,t=()=>{},o=()=>{}){return{transitionProps:y(()=>{const a=`q-transition--${e.transitionShow||t()}`,s=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${a}-enter-from`,enterActiveClass:`${a}-enter-active`,enterToClass:`${a}-enter-to`,leaveFromClass:`${s}-leave-from`,leaveActiveClass:`${s}-leave-active`,leaveToClass:`${s}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let it=1,rt=document.body;function ut(e,t){const o=document.createElement("div");if(o.id=t!==void 0?`q-portal--${t}--${it++}`:e,ee.globalNodes!==void 0){const a=ee.globalNodes.class;a!==void 0&&(o.className=a)}return rt.appendChild(o),o}function ct(e){e.remove()}const M=[];function dt(e){return M.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ft(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return L(e)}else if(e.__qPortal===!0){const o=L(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=L(e)}while(e!=null)}function mt(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=ft(e,t);continue}e.hide(t)}e=L(e)}}const vt=G({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function pt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ht(e,t,o,a){const s=p(!1),d=p(!1);let r=null;const h={},v=a==="dialog"&&pt(e);function m(k){if(k===!0){ie(h),d.value=!0;return}d.value=!1,s.value===!1&&(v===!1&&r===null&&(r=ut(!1,a)),s.value=!0,M.push(e.proxy),tt(h))}function b(k){if(d.value=!1,k!==!0)return;ie(h),s.value=!1;const w=M.indexOf(e.proxy);w!==-1&&M.splice(w,1),r!==null&&(ct(r),r=null)}return Ye(()=>{b(!0)}),e.proxy.__qPortal=!0,Je(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:b,portalIsActive:s,portalIsAccessible:d,renderPortal:()=>v===!0?o():s.value===!0?[_(Xe,{to:r},_(vt,o))]:void 0}}const E=[];let x;function gt(e){x=e.keyCode===27}function bt(){x===!0&&(x=!1)}function kt(e){x===!0&&(x=!1,ye(e,27)===!0&&E[E.length-1](e))}function _e(e){window[e]("keydown",gt),window[e]("blur",bt),window[e]("keyup",kt),x=!1}function yt(e){ke.is.desktop===!0&&(E.push(e),E.length===1&&_e("addEventListener"))}function de(e){const t=E.indexOf(e);t!==-1&&(E.splice(t,1),E.length===0&&_e("removeEventListener"))}const C=[];function we(e){C[C.length-1](e)}function _t(e){ke.is.desktop===!0&&(C.push(e),C.length===1&&document.body.addEventListener("focusin",we))}function fe(e){const t=C.indexOf(e);t!==-1&&(C.splice(t,1),C.length===0&&document.body.removeEventListener("focusin",we))}let Q=0;const wt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},me={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var qt=G({name:"QDialog",inheritAttrs:!1,props:{...Le,...at,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Me,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:a}){const s=be(),d=p(null),r=p(!1),h=p(!1);let v=null,m=null,b,k;const w=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:T}=Ae(),{registerTimeout:u}=Ie(),{registerTick:l,removeTick:i}=lt(),{transitionProps:I,transitionStyle:$}=st(e,()=>me[e.position][0],()=>me[e.position][1]),qe=y(()=>$.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:W,hidePortal:Y,portalIsAccessible:Ee,renderPortal:Ce}=ht(s,d,Qe,"dialog"),{hide:S}=Ke({showing:r,hideOnRouteChange:w,handleShow:Be,handleHide:De,processOnMount:!0}),{addToHistory:xe,removeFromHistory:Pe}=ze(r,S,w),Te=y(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${wt[e.position]}`+(h.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),B=y(()=>r.value===!0&&e.seamless!==!0),$e=y(()=>e.autoClose===!0?{onClick:Fe}:{}),Se=y(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${B.value===!0?"modal":"seamless"}`,a.class]);te(()=>e.maximized,n=>{r.value===!0&&A(n)}),te(B,n=>{T(n),n===!0?(_t(N),yt(z)):(fe(N),de(z))});function Be(n){xe(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,A(e.maximized),W(),h.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),l(P)):i(),u(()=>{if(s.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:f,bottom:H}=document.activeElement.getBoundingClientRect(),{innerHeight:X}=window,O=window.visualViewport!==void 0?window.visualViewport.height:X;f>0&&H>O/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-O,H>=X?1/0:Math.ceil(document.scrollingElement.scrollTop+H-O/2))),document.activeElement.scrollIntoView()}k=!0,d.value.click(),k=!1}W(!0),h.value=!1,o("show",n)},e.transitionDuration)}function De(n){i(),Pe(),J(!0),h.value=!0,Y(),m!==null&&(((n&&n.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),u(()=>{Y(!0),h.value=!1,o("hide",n)},e.transitionDuration)}function P(n){ot(()=>{let f=d.value;f===null||f.contains(document.activeElement)===!0||(f=(n!==""?f.querySelector(n):null)||f.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function K(n){n&&typeof n.focus=="function"?n.focus({preventScroll:!0}):P(),o("shake");const f=d.value;f!==null&&(f.classList.remove("q-animate--scale"),f.classList.add("q-animate--scale"),v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,d.value!==null&&(f.classList.remove("q-animate--scale"),P())},170))}function z(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&K():(o("escapeKey"),S()))}function J(n){v!==null&&(clearTimeout(v),v=null),(n===!0||r.value===!0)&&(A(!1),e.seamless!==!0&&(T(!1),fe(N),de(z))),n!==!0&&(m=null)}function A(n){n===!0?b!==!0&&(Q<1&&document.body.classList.add("q-body--dialog"),Q++,b=!0):b===!0&&(Q<2&&document.body.classList.remove("q-body--dialog"),Q--,b=!1)}function Fe(n){k!==!0&&(S(n),o("click",n))}function Ve(n){e.persistent!==!0&&e.noBackdropDismiss!==!0?S(n):e.noShake!==!0&&K()}function N(n){e.allowFocusOutside!==!0&&Ee.value===!0&&Ue(d.value,n.target)!==!0&&P('[tabindex]:not([tabindex="-1"])')}Object.assign(s.proxy,{focus:P,shake:K,__updateRefocusTarget(n){m=n||null}}),ge(J);function Qe(){return _("div",{role:"dialog","aria-modal":B.value===!0?"true":"false",...a,class:Se.value},[_(oe,{name:"q-transition--fade",appear:!0},()=>B.value===!0?_("div",{class:"q-dialog__backdrop fixed-full",style:qe.value,"aria-hidden":"true",tabindex:-1,onClick:Ve}):null),_(oe,I.value,()=>r.value===!0?_("div",{ref:d,class:Te.value,style:$.value,tabindex:-1,...$e.value},he(t.default)):null)])}return Ce}});function ve(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var pe=je({name:"close-popup",beforeMount(e,{value:t}){const o={depth:ve(t),handler(a){o.depth!==0&&setTimeout(()=>{const s=dt(e);s!==void 0&&mt(s,a,o.depth)})},handlerKey(a){ye(a,13)===!0&&o.handler(a)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=ve(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const Et={class:"row"},Ct={class:"col-12 col-sm-4 q-pa-sm"},xt={class:"col-12 col-sm-4 q-pa-sm"},Pt={class:"col-12 col-sm-4 q-pa-sm"},Tt={class:"q-pa-md row items-start q-gutter-md"},$t={class:"text-h6"},St=q("div",{class:"text-h6"},"Editar",-1),Kt=Ze({name:"PanelPage",__name:"TaskPage",setup(e){const t=p(!1),o=p(""),a=p(""),s=p(""),d=p({label:"Titulo",model:""}),r=p({label:"Descripcion",model:""}),h=p({label:"Crear tarea",color:"primary"}),v=p([]);async function m(){try{const u=await V.get("https://quasartask.onrender.com/task");v.value={...u.data}}catch(u){console.error("Error fetching users:",u)}}const b=()=>{const u={id:Math.floor(Math.random()*1e3).toString(),tittle:d.value.model,description:r.value.model};console.log(u);try{V.post("https://quasartask.onrender.com/task",u).then(()=>{m()}).catch(l=>{console.error("Error eliminando la tarea:",l)})}catch(l){console.error("Error fetching users:",l)}d.value.model="",r.value.model=""},k=async()=>{const u={id:o.value,tittle:a.value,description:s.value};try{const l=await V.put("https://quasartask.onrender.com/task/"+u.id,u);l.status===200?(m(),console.log("Elemento actualizado correctamente")):console.error("Error al actualizar el elemento:",l.statusText)}catch{console.error("Error al actualizar el elemento:")}},w=u=>{try{V.delete("https://quasartask.onrender.com/task/"+u).then(()=>{m()}).catch(l=>{console.error("Error eliminando la tarea:",l)})}catch(l){console.error("Error fetching users:",l)}},T=u=>{t.value=!0,o.value=u.id,a.value=u.tittle,s.value=u.description};return m(),(u,l)=>(R(),U(ne,null,[q("div",Et,[q("div",Ct,[c(re,{modelValue:d.value.model,"onUpdate:modelValue":l[0]||(l[0]=i=>d.value.model=i),label:d.value.label},null,8,["modelValue","label"])]),q("div",xt,[c(re,{modelValue:r.value.model,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value.model=i),label:r.value.label},null,8,["modelValue","label"])]),q("div",Pt,[c(nt,{label:h.value.label,onClick:b,color:h.value.color},null,8,["label","color"])])]),q("div",Tt,[(R(!0),U(ne,null,et(v.value,(i,I)=>(R(),U("div",{class:"col-12 col-md-3",key:I},[c(Z,{class:"my-card bg-grey-9 text-white"},{default:g(()=>[c(D,null,{default:g(()=>[q("div",$t,le(i.tittle),1)]),_:2},1024),c(D,null,{default:g(()=>[j(le(i.description),1)]),_:2},1024),c(Ne),c(ce,{vertical:""},{default:g(()=>[c(F,{onClick:$=>T(i),flat:""},{default:g(()=>[j("Editar")]),_:2},1032,["onClick"]),c(F,{onClick:$=>w(i.id),flat:""},{default:g(()=>[j("Eliminar")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]))),128))]),c(qt,{modelValue:t.value,"onUpdate:modelValue":l[7]||(l[7]=i=>t.value=i),persistent:""},{default:g(()=>[c(Z,{style:{"min-width":"350px"}},{default:g(()=>[c(D,null,{default:g(()=>[St]),_:1}),c(D,{class:"q-pt-none"},{default:g(()=>[c(ue,{dense:"",modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=i=>a.value=i),autofocus:"",onKeyup:l[3]||(l[3]=ae(i=>t.value=!1,["enter"]))},null,8,["modelValue"]),c(ue,{dense:"",modelValue:s.value,"onUpdate:modelValue":l[4]||(l[4]=i=>s.value=i),autofocus:"",onKeyup:l[5]||(l[5]=ae(i=>t.value=!1,["enter"]))},null,8,["modelValue"])]),_:1}),c(ce,{align:"right",class:"text-primary"},{default:g(()=>[se(c(F,{flat:"",label:"Cancel"},null,512),[[pe]]),se(c(F,{flat:"",label:"Add address",onClick:l[6]||(l[6]=i=>k())},null,512),[[pe]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});export{Kt as default};