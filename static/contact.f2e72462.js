import{I as _,_ as i,c as p,q as o,a as t,j as e,o as r,J as m,K as F}from"./index.01cc0584.js";import{E as h,a as A}from"./el-col.2a2fb4b2.js";import{_ as l}from"./appnav.54a6feea.js";import{t as v}from"./txt.27bdb742.js";import"./index.d02049d2.js";let C="/pc/contact-us/get";function E(){return _({url:C,method:"post",data:{},headers:{"Content-Type":"application/json"}})}const B={components:{appnav:l},data(){return{ContactData:[],addressData:[]}},methods:{getContactUs(){E().then(s=>{console.log("\u8054\u7CFB\u6211\u4EECres\uFF1A",s,"222"),this.ContactData=s.data.data})},getContactAddress(){v({k:"contact-address"}).then(c=>{console.log("\u8054\u7CFB\u5730\u5740\uFF1A",c),this.addressData=c.data.data})}},mounted(){this.getContactUs(),this.getContactAddress()}},a=s=>(m("data-v-75dca9ba"),s=s(),F(),s),f={class:"contact"},g={class:"containers"},x={class:"main"},D={class:"child child-2"},X=a(()=>t("h3",{class:"title-1"},"\u8054\u7CFB\u6211\u4EEC",-1)),k=a(()=>t("div",{class:"tem tem1"},[t("p",null,"\u96C6\u56E2\u4E1A\u52A1")],-1)),y=a(()=>t("div",{class:"tem tem2"},[t("div",{class:"block"},[t("p",null,"\u8054\u7CFB\u7535\u8BDD\uFF1A1699999993"),t("p",null,"\u90AE\u7BB1\uFF1Axxxx@gmail.com"),t("p",null,"\u5FAE\u4FE1\uFF1Aaserty")])],-1)),b=a(()=>t("div",{class:"tem tem1"},[t("p",null,"\u9500\u552E\u4E1A\u52A1")],-1)),w=a(()=>t("div",{class:"tem tem2"},[t("div",{class:"block"},[t("p",null,"\u8054\u7CFB\u7535\u8BDD\uFF1A796666666"),t("p",null,"\u90AE\u7BB1\uFF1AXXXXX@outlook.com"),t("p",null,"\u5FAE\u4FE1\uFF1Atryryr")])],-1)),I=a(()=>t("div",{class:"tem tem1"},[t("p",null,"\u6280\u672F\u652F\u6301")],-1)),U=a(()=>t("div",{class:"tem tem2"},[t("div",{class:"block"},[t("p",null,"\u8054\u7CFB\u7535\u8BDD\uFF1A796666666"),t("p",null,"\u90AE\u7BB1\uFF1AXXXXX@outlook.com"),t("p",null,"\u5FAE\u4FE1\uFF1Acngixchn")])],-1)),$=a(()=>t("div",{class:"child child-3"},[t("div",{class:"txt"}," Copyright by artplanet 2013-2025 aspnet.cn \u6CAAICP\u5907086532961870")],-1));function S(s,c,j,N,V,q){const n=l,u=h,d=A;return r(),p("div",f,[o(n),t("div",g,[t("div",x,[t("div",D,[X,o(d,{class:"rows row1"},{default:e(()=>[o(u,{span:8,class:"col18"},{default:e(()=>[k,y]),_:1}),o(u,{span:8,class:"col18"},{default:e(()=>[b,w]),_:1}),o(u,{span:8,class:"col18"},{default:e(()=>[I,U]),_:1})]),_:1})]),$])])])}var z=i(B,[["render",S],["__scopeId","data-v-75dca9ba"]]);export{z as default};
