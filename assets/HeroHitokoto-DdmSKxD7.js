import{a as v}from"./axios-B6xwUs71.js";import{f as k,A as x,L as p,g,r as y,o as E,M as T,w as H,b as I}from"./app-CrB9mOEy.js";import{_ as w}from"./plugin-vue_export-helper-DlAUqK2U.js";const B=I("div",{class:"none"},"一言插件",-1),C=k({__name:"HeroHitokoto",setup(M){let h="https://v1.hitokoto.cn";const _=e=>{const t=window;clearInterval(t.Timer);const o=document.getElementsByClassName("vp-blog-hero-description");if(o.length>0){const d=o[0];d.id="hotWord"}const m=document.getElementById("hotWord");if(!m)return;m.innerHTML=`
<div class="word">
  <div class="left">『</div>
    <span id="hitokoto_text"></span>
  <div class="right">』</div>
</div>
<div class="author" id="hitokoto_author"> ——「${e.from}」</div>
  `;const i=document.getElementById("hitokoto_author"),u=document.getElementById("hitokoto_text");if(!u||!i)return;i.style.opacity="0";const c=e.hitokoto.split("");let n=0,s=0,f=60,r=!1,l="";t.Timer=setInterval(()=>{const d=c[n];if(l.length<4?i.style.opacity="0":i.style.opacity="1",s!=0){s--,l.length==0&&s==0&&clearInterval(t.Timer);return}r?clearInterval(t.Timer):l+=d,r?n--:n++,n>=c.length&&(r=!0,n=c.length,s=f),n<0&&(r=!1,n=0,s=f),u.innerHTML=l},200)},a=e=>{let t=window.location.pathname;e&&(t=e),t=="/"&&v({method:"get",url:h,params:{}}).then(o=>{_(o.data)}).catch(o=>{h="https://international.v1.hitokoto.cn",a()})};return x(()=>{p(()=>{a()}),g().beforeEach(t=>{p(()=>{a(t.fullPath)})})}),(e,t)=>{const o=y("ClientOnly");return E(),T(o,null,{default:H(()=>[B]),_:1})}}}),N=w(C,[["__file","HeroHitokoto.vue"]]);export{N as default};
