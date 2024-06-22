import{r as u,f as R,o as w,c as y,k as H,b as s,l as p,v as h}from"./index-5c3425ef.js";class x{constructor(t=0,o="Network Error"){this.status=t,this.text=o}}const q=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:q()},k=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},F=(e,t="https://api.emailjs.com")=>{if(!e)return;const o=k(e);i.publicKey=o.publicKey,i.blockHeadless=o.blockHeadless,i.storageProvider=o.storageProvider,i.blockList=o.blockList,i.limitRate=o.limitRate,i.origin=o.origin||t},_=async(e,t,o={})=>{const l=await fetch(i.origin+e,{method:"POST",headers:o,body:t}),a=await l.text(),d=new x(l.status,a);if(l.ok)return d;throw d},j=(e,t,o)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},B=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},L=e=>e.webdriver||!e.languages||e.languages.length===0,S=()=>new x(451,"Unavailable For Headless Browser"),M=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},C=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},E=(e,t)=>e instanceof FormData?e.get(t):e[t],P=(e,t)=>{if(C(e))return!1;M(e.list,e.watchVariable);const o=E(t,e.watchVariable);return typeof o!="string"?!1:e.list.includes(o)},T=()=>new x(403,"Forbidden"),U=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},K=async(e,t,o)=>{const l=Number(await o.get(e)||0);return t-Date.now()+l},N=async(e,t,o)=>{if(!t.throttle||!o)return!1;U(t.throttle,t.id);const l=t.id||e;return await K(l,t.throttle,o)>0?!0:(await o.set(l,Date.now().toString()),!1)},V=()=>new x(429,"Too Many Requests"),O=async(e,t,o,l)=>{const a=k(l),d=a.publicKey||i.publicKey,m=a.blockHeadless||i.blockHeadless,b=i.storageProvider||a.storageProvider,f={...i.blockList,...a.blockList},v={...i.limitRate,...a.limitRate};return m&&L(navigator)?Promise.reject(S()):(j(d,e,t),B(o),o&&P(f,o)?Promise.reject(T()):await N(location.pathname,v,b)?Promise.reject(V()):_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:d,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"}))},D=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},A=e=>typeof e=="string"?document.querySelector(e):e,W=async(e,t,o,l)=>{const a=k(l),d=a.publicKey||i.publicKey,m=a.blockHeadless||i.blockHeadless,b=i.storageProvider||a.storageProvider,f={...i.blockList,...a.blockList},v={...i.limitRate,...a.limitRate};if(m&&L(navigator))return Promise.reject(S());const g=A(o);j(d,e,t),D(g);const c=new FormData(g);return P(f,c)?Promise.reject(T()):await N(location.pathname,v,b)?Promise.reject(V()):(c.append("lib_version","4.3.3"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",d),_("/api/v1.0/email/send-form",c))},J={init:F,send:O,sendForm:W,EmailJSResponseStatus:x},Y={id:"content-container",class:"w-full bg-white"},Z=s("div",{id:"contact-info"},[s("h3",{class:"text-4xl font-bold"},"Stevens Custom Crushing & Gravel"),s("address",null,"Cascade MT"),s("a",{class:"text-blue-500 underline",href:"tel:406-920-0740"},"406-920-0740"),s("br"),s("a",{class:"text-blue-500 underline",href:"mailto:Zack@StevenCrushing.com"},"Zack@StevenCrushing.com")],-1),G={class:"mb-4 text-xl"},I=s("label",{for:"subject",class:"block text-3xl font-medium text-gray-600"},"Subject",-1),X={class:"mb-4 text-xl"},$=s("label",{for:"message",class:"block text-3xl font-medium text-gray-600"},"Message",-1),z={class:"mb-4 text-xl"},Q=s("label",{for:"email",class:"block text-3xl font-medium text-gray-600"},"Email",-1),ee={class:"mb-4 text-xl"},te=s("label",{for:"firstName",class:"block text-3xl font-medium text-gray-600"},"First Name",-1),se={class:"mb-4 text-xl"},oe=s("label",{for:"lastName",class:"block text-3xl font-medium text-gray-600"},"Last Name",-1),ae={class:"mb-4 text-xl"},re=s("label",{for:"phone",class:"block text-3xl font-medium text-gray-600"},"Phone Number",-1),le={class:"mb-4 text-xl"},ie=s("label",{for:"address",class:"block text-3xl font-medium text-gray-600"},"Address",-1),ne={class:"mb-4 hidden"},de=s("label",{for:"middle-name",class:"block text-3xl font-medium text-gray-600"},null,-1),ce=["disabled"],ue={key:1,class:"w-full flex justify-center"},me=s("div",{class:"bg-green-100 p-6 rounded-md shadow-md w-1/2 m-48"},[s("div",{class:"flex items-center space-x-3"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})]),s("div",null,[s("h2",{class:"text-6xl font-semibold text-green-700"},"Success!"),s("p",{class:"text-2xl text-green-600"}," Your message has been sent. We'll get back to you soon! ")])])],-1),be=[me],fe=s("div",{class:"mt-24 w-full h-8"},null,-1),he={__name:"ContactView",setup(e){const t=u(null),o=u(""),l=u(""),a=u(""),d=u(""),m=u(""),b=u(""),f=u(""),v=u(""),g=async()=>{if(v.value===""){try{J.sendForm("service_num0ioa","template_8a9kabr",t.value,"WfyseC3f3dX2Odrir",{firstName:l.value,lastName:a.value,email:o.value,message:d.value,subject:f.value,phone:m.value,address:b.value})}catch(c){console.log({error:c})}l.value="",a.value="",o.value="",d.value="",f.value="",m.value="",b.value=""}};return R(()=>{window.scrollTo(0,0)}),(c,r)=>(w(),y("div",Y,[Z,c.messageStatus?(w(),y("div",ue,be)):(w(),y("form",{key:0,ref_key:"form",ref:t,onSubmit:r[8]||(r[8]=H(n=>g(),["prevent"])),class:"bg-white p-6 rounded-md shadow-md mt-24"},[s("div",G,[I,p(s("input",{"onUpdate:modelValue":r[0]||(r[0]=n=>f.value=n),type:"subject",name:"subject",id:"subject",placeholder:"Subject",required:"",class:"mt-1 p-2 w-full border rounded-md"},null,512),[[h,f.value]])]),s("div",X,[$,p(s("textarea",{"onUpdate:modelValue":r[1]||(r[1]=n=>d.value=n),id:"message",name:"message",rows:"4",placeholder:"Your message...",required:"",class:"mt-1 p-2 w-full border rounded-md"},null,512),[[h,d.value]])]),s("div",z,[Q,p(s("input",{"onUpdate:modelValue":r[2]||(r[2]=n=>o.value=n),type:"email",name:"email",id:"email",placeholder:"example@example.com",required:"",class:"mt-1 p-2 w-full border rounded-md"},null,512),[[h,o.value]])]),s("div",ee,[te,p(s("input",{"onUpdate:modelValue":r[3]||(r[3]=n=>l.value=n),id:"firstName",name:"firstName",placeholder:"John",required:"",class:"mt-1 p-2 w-full border rounded-md"},null,512),[[h,l.value]])]),s("div",se,[oe,p(s("input",{"onUpdate:modelValue":r[4]||(r[4]=n=>a.value=n),id:"lastName",name:"lastName",placeholder:"Doe",required:"",class:"mt-1 p-2 w-full border rounded-md"},null,512),[[h,a.value]])]),s("div",ae,[re,p(s("input",{"onUpdate:modelValue":r[5]||(r[5]=n=>m.value=n),id:"phone",name:"phone",placeholder:"555-555-5555",required:"",class:"mt-1 p-2 w-full border rounded-md"},null,512),[[h,m.value]])]),s("div",le,[ie,p(s("input",{"onUpdate:modelValue":r[6]||(r[6]=n=>b.value=n),id:"address",name:"address",placeholder:"123 Airport Drive",required:"",class:"mt-1 p-2 w-full border rounded-md"},null,512),[[h,b.value]])]),s("div",ne,[de,p(s("textarea",{"onUpdate:modelValue":r[7]||(r[7]=n=>v.value=n),id:"middleName",rows:"4",placeholder:"Your message...",class:"mt-1 p-2 w-full border rounded-md"},null,512),[[h,v.value]])]),s("button",{disabled:c.processingRequest,type:"submit",class:"bg-black hover:bg-gray-500 hover:text-black text-3xl text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300"}," Submit ",8,ce)],544)),fe]))}};export{he as default};
