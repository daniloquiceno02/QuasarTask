import{Q as y,a as _}from"./QForm.82f95399.js";import{a as h}from"./axios.37d53be1.js";import{I as m,B as p}from"./ButtonComp.91b4f5eb.js";import{u as x}from"./auth-store.4d5072fb.js";import{d as V,r as o,o as w,c as L,a as e,e as t,w as k}from"./index.6001c1b9.js";import"./QBtn.b025d511.js";import"./use-dark.7699e1e3.js";const B={class:"items-center justify-center bg-image q-pa-md full-height"},C={class:"q-pa-md row items-center justify-center"},E=e("div",{class:"col-12 column items-center"},[e("img",{src:"https://cdn-icons-png.flaticon.com/256/3237/3237472.png",alt:"Logo",class:"logo"})],-1),F={class:"row justify-center"},I=e("div",{class:"col-12 col-xl-7 col-lg-8 col-md-10"},[e("div",{class:"text-h4",style:{opacity:"0.4"}},"Iniciar sesion")],-1),U={class:"col-12 col-xl-7 col-lg-8 col-md-10"},q={class:"col-12 col-xl-7 col-lg-8 col-md-10"},j={class:"col-12 col-xl-7 col-lg-8 col-md-10"},Q={class:"col-12 col-xl-7 col-lg-8 col-md-10"},G=V({name:"LoginPage",__name:"LoginPage",setup(S){const n=o({label:"Usuario",model:""}),a=o({label:"Contrase\xF1a",model:"",type:"password"}),d=o({label:"Iniciar sesion",type:"submit",disabled:""}),r=o({label:"Registrar",type:"submit",to:"/register"}),v=o(),i=o(!1),u=o([]),g=x();async function f(){try{const l=await h.get("https://quasartask.onrender.com/users");u.value.push(...l.data)}catch(l){console.error("Error fetching users:",l)}}const b=()=>{i.value!==!0?console.log("Acepta la licencia y los t\xE9rminos."):u.value!=null&&u.value.forEach(l=>{l.username===n.value.model&&l.password===a.value.model?g.updateState(l):console.log("Usuario o contrase\xF1a Incorrectos")})};return f(),(l,s)=>(w(),L("div",B,[e("div",C,[E,t(y,{onSubmit:b,ref_key:"LoginForm",ref:v,class:"q-gutter-md"},{default:k(()=>[e("div",F,[I,e("div",U,[t(m,{modelValue:n.value.model,"onUpdate:modelValue":s[0]||(s[0]=c=>n.value.model=c),label:n.value.label},null,8,["modelValue","label"])]),e("div",q,[t(m,{modelValue:a.value.model,"onUpdate:modelValue":s[1]||(s[1]=c=>a.value.model=c),label:a.value.label,type:a.value.type},null,8,["modelValue","label","type"])]),e("div",j,[t(_,{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=c=>i.value=c),label:"Acepto la licencia y los t\xE9rminos."},null,8,["modelValue"])]),e("div",Q,[t(p,{label:d.value.label,type:d.value.type},null,8,["label","type"]),t(p,{label:r.value.label,type:r.value.type,to:r.value.to},null,8,["label","type","to"])])])]),_:1},512)])]))}});export{G as default};
