import{a as i,o as s,c as a,b as e,t as l,F as c,h as r,n as d,d as m,e as u}from"./index-f8b62758.js";const f={class:"border border-black shadow-xl aspect-[13/16] relative"},_=["src","alt"],g={class:"p-4"},h={class:"text-base md:text-lg lg:text-base font-bold"},b={class:"absolute bottom-2 right-2"},y={key:0,class:"flex flex-row justify-between items-center border-black p-2"},p=e("div",{class:"mr-4"}," Learn More ",-1),B={__name:"CardComponent",props:{name:{type:String,default:""},details:{type:Array,default:[]},imageSource:{type:String,default:""},isLink:{type:Boolean,default:!1},isBulletStyle:{type:Boolean,default:!0}},setup(t){return(x,v)=>{const o=i("font-awesome-icon");return s(),a("div",f,[e("img",{src:t.imageSource,alt:t.name+" image",class:"w-full"},null,8,_),e("div",g,[e("div",null,[e("h3",h,l(t.name),1),(s(!0),a(c,null,r(t.details,n=>(s(),a("ul",{class:d([{"list-disc list-inside":t.isBulletStyle}])},[e("li",null,l(n),1)],2))),256))]),e("div",b,[t.isLink?(s(),a("div",y,[p,e("div",null,[m(o,{icon:["fas","circle-chevron-right"],class:"text-2xl text-gray-500"})])])):u("",!0)])])])}}},S="/assets/compressed_products_main-79f30792.jpg";export{S as P,B as _};
