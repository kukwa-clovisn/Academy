"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[443],{2730:function(e,s,a){a.r(s),a.d(s,{default:function(){return P}});var n=a(6252),r=a(9963),l=a(3577),t=a(4185);const i=e=>((0,n.dD)("data-v-0f07d7d8"),e=e(),(0,n.Cn)(),e),o=i((()=>(0,n._)("div",{class:"c1"},[(0,n._)("img",{src:t,alt:"BTC"})],-1))),u={class:"content"},d=i((()=>(0,n._)("h2",null,"sign in",-1))),c={class:"form"},m=i((()=>(0,n._)("h1",null,"sign in",-1))),p={class:"input"},_=i((()=>(0,n._)("label",{for:"username"},"Name:",-1))),g={class:"input"},w=i((()=>(0,n._)("label",{for:"password"},"password:",-1))),v={key:0,class:"errormsg"},f=i((()=>(0,n._)("button",{type:"submit"},"sign in",-1))),h={class:"forget-password"},k=(0,n.Uk)("forget password?"),y=(0,n.Uk)("home"),b={class:"login"},T={class:"welcome"},q=i((()=>(0,n._)("h1",null,"welcome again",-1))),C=i((()=>(0,n._)("h3",null,"advanced crypto & forex trading community",-1))),U=i((()=>(0,n._)("p",null,"Crypto and Forex learning made easy and interesting.",-1))),x=(0,n.Uk)("sign up"),H={class:"response-div"},D={key:0,class:"done"},E=i((()=>(0,n._)("i",{class:"fa-solid fa-circle-check"},null,-1))),W={key:1,class:"error"},z=i((()=>(0,n._)("i",{class:"fa-solid fa-circle-exclamation"},null,-1)));function S(e,s,a,t,i,S){const j=(0,n.up)("Header"),V=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("main",null,[o,(0,n.Wm)(j),(0,n._)("div",u,[d,(0,n._)("div",c,[(0,n._)("form",{onSubmit:s[2]||(s[2]=(0,r.iM)(((...e)=>t.signin&&t.signin(...e)),["prevent"]))},[m,(0,n._)("div",p,[_,(0,n.wy)((0,n._)("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>t.user.username=e),placeholder:"Enter username....",required:""},null,512),[[r.nr,t.user.username]])]),(0,n._)("div",g,[w,(0,n.wy)((0,n._)("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=e=>t.user.password=e),placeholder:"Enter Password....",required:""},null,512),[[r.nr,t.user.password]])]),t.user.errormsg?((0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("p",null,(0,l.zw)(t.user.msg),1)])):(0,n.kq)("",!0),f,(0,n._)("div",h,[(0,n._)("span",null,[(0,n.Wm)(V,{to:"/forget_password",class:"route"},{default:(0,n.w5)((()=>[k])),_:1})]),(0,n._)("span",null,[(0,n.Wm)(V,{to:"/",class:"route"},{default:(0,n.w5)((()=>[y])),_:1})])])],32),(0,n._)("div",b,[(0,n._)("div",T,[q,C,U,(0,n._)("button",null,[(0,n.Wm)(V,{to:"/signup",class:"route"},{default:(0,n.w5)((()=>[x])),_:1})])])])]),(0,n._)("div",H,[t.user.success?((0,n.wg)(),(0,n.iD)("div",D,[E,(0,n._)("span",null,(0,l.zw)(t.user.msg),1)])):(0,n.kq)("",!0),t.user.failed?((0,n.wg)(),(0,n.iD)("div",W,[z,(0,n._)("span",null,(0,l.zw)(t.user.msg),1)])):(0,n.kq)("",!0)])])])}var j=a(9669),V=a.n(j),Z=a(2262),B=a(2119),I=a(3920),F={name:"Sign_in",components:{Header:I.Z},setup(){const e=(0,B.tv)(),s=(0,B.yj)();let a=(0,Z.iH)(""),n=(0,Z.iH)(""),r=(0,Z.qj)({username:s.params.username,password:"",msg:"",success:!1,failed:!1});const l=()=>{V().post("api/signin",{username:r.username,password:r.password},{headers:{"Content-type":"application/json"}}).then((e=>{localStorage.setItem("accessToken",e.data.accessToken),V().defaults.headers.common.Authorization=`Bearer ${e.data.accessToken}`,a.value=e.data.username,n.value=e.data.accessToken,r.success=!0,r.msg=e.data.msg,setTimeout(t,3e3)})).catch((e=>{r.msg=e.response.data.msg,r.failed=!0,setTimeout(i,3e3)}))};function t(){r.success=!1,e.push({name:"Course_intro",params:{courseUser:a.value,accessToken:n.value}})}function i(){r.failed=!1}return{user:r,signin:l}}},M=a(3744);const N=(0,M.Z)(F,[["render",S],["__scopeId","data-v-0f07d7d8"]]);var P=N},9264:function(e,s,a){a.r(s),a.d(s,{default:function(){return N}});var n=a(6252),r=a(9963),l=a(3577),t=a(4185);const i=e=>((0,n.dD)("data-v-01c7524e"),e=e(),(0,n.Cn)(),e),o=i((()=>(0,n._)("div",{class:"c1"},[(0,n._)("img",{src:t,alt:"BTC"})],-1))),u={class:"content"},d=i((()=>(0,n._)("h2",null,"sign up now!",-1))),c={class:"form"},m={class:"login"},p={class:"welcome"},_=i((()=>(0,n._)("h1",null,"welcome again",-1))),g=i((()=>(0,n._)("h3",null,"advanced crypto & forex trading community",-1))),w=i((()=>(0,n._)("p",null,"Crypto and Forex learning made easy and interesting.",-1))),v=(0,n.Uk)("sign in"),f=(0,n.Uk)("home"),h=i((()=>(0,n._)("h1",null,"sign up",-1))),k={class:"input"},y=i((()=>(0,n._)("label",{for:"username"},"Name:",-1))),b={class:"input"},T=i((()=>(0,n._)("label",{for:"email"},"email:",-1))),q={class:"input"},C=i((()=>(0,n._)("label",{for:"password"},"password:",-1))),U=i((()=>(0,n._)("button",{type:"submit"},"sign up",-1))),x={class:"response-div"},H={key:0,class:"done"},D=i((()=>(0,n._)("i",{class:"fa-solid fa-circle-check"},null,-1))),E={key:1,class:"error"},W=i((()=>(0,n._)("i",{class:"fa-solid fa-circle-exclamation"},null,-1)));function z(e,s,a,t,i,z){const S=(0,n.up)("Header"),j=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("main",null,[o,(0,n.Wm)(S),(0,n._)("div",u,[d,(0,n._)("div",c,[(0,n._)("div",m,[(0,n._)("div",p,[_,g,w,(0,n._)("button",null,[(0,n.Wm)(j,{to:"/login",class:"route"},{default:(0,n.w5)((()=>[v])),_:1})]),(0,n.Wm)(j,{to:"/",class:"hroute"},{default:(0,n.w5)((()=>[f])),_:1})])]),(0,n._)("form",{onSubmit:s[3]||(s[3]=(0,r.iM)(((...e)=>t.signup&&t.signup(...e)),["prevent"]))},[h,(0,n._)("div",k,[y,(0,n.wy)((0,n._)("input",{type:"text",name:"username","onUpdate:modelValue":s[0]||(s[0]=e=>t.data.username=e),id:"username",placeholder:"Enter username....",required:""},null,512),[[r.nr,t.data.username]])]),(0,n._)("div",b,[T,(0,n.wy)((0,n._)("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=e=>t.data.email=e),placeholder:"Enter Email address....",required:""},null,512),[[r.nr,t.data.email]])]),(0,n._)("div",q,[C,(0,n.wy)((0,n._)("input",{type:"password",name:"password","onUpdate:modelValue":s[2]||(s[2]=e=>t.data.password=e),id:"password",placeholder:"Enter Password....",required:""},null,512),[[r.nr,t.data.password]])]),U],32)]),(0,n._)("div",x,[t.success?((0,n.wg)(),(0,n.iD)("div",H,[D,(0,n._)("span",null,(0,l.zw)(t.data.msg),1)])):(0,n.kq)("",!0),t.postError?((0,n.wg)(),(0,n.iD)("div",E,[W,(0,n._)("span",null,(0,l.zw)(t.data.msg),1)])):(0,n.kq)("",!0)])])])}var S=a(9669),j=a.n(S),V=a(2119),Z=a(2262),B=a(3920),I={name:"Sign_up",components:{Header:B.Z},setup(){const e=(0,V.tv)();let s=(0,Z.qj)({username:"",password:"",email:"",msg:""}),a=(0,Z.iH)(!1),n=(0,Z.iH)(!1),r=(0,Z.iH)("");function l(){a.value=!1,e.push({name:"Sign_in",params:{username:`${r.value}`}})}function t(){n.value=!1}function i(){""!=s.username&&s.password.length>4?j().post("/api/signup",{username:s.username,email:s.email,password:s.password},{Headers:{"Content-Type":"application/json"}}).then((e=>{s.msg="pending....",a.value=!0,console.log(e),"OK"===e.statusText&&(a.value=!0,s.msg=e.data.msg,r.value=e.data.username,setTimeout(l,3e3))})).catch((e=>{if(e)return console.log("err",e),n.value=!0,s.msg=e.response.data.msg,setTimeout(t,3e3);console.log(e)})):(n.value=!0,s.msg="invalid input(s)",setTimeout(t,3e3)),s.username="",s.email="",s.password=""}return{postError:n,success:a,data:s,signup:i}}},F=a(3744);const M=(0,F.Z)(I,[["render",z],["__scopeId","data-v-01c7524e"]]);var N=M},4185:function(e,s,a){e.exports=a.p+"img/bitcoin.90f7f7ee.png"}}]);
//# sourceMappingURL=about.b3ca089a.js.map