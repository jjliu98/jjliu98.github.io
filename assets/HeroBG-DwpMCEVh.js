import{a as I}from"./axios-B6xwUs71.js";import{m as i,L as v}from"./tools-B9TDRQ4Q.js";import{f as L,A as _,L as B,g as k,r as b,o as x,M as y,w as E,b as w}from"./app-CrB9mOEy.js";import{_ as N}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";const C=w("div",{class:"none"},"Bing壁纸",-1),M=L({__name:"HeroBG",setup(S){const g=()=>{var l,m,c,u,f;let a=window.location.pathname,e=i.get("BingImgIndex");const t=i.get("BingImgList");(!e||e<0)&&(e=0),e>t.length-1&&(e=t.length-1),i.set("BingImgIndex",e);const s=document.querySelector(".vp-blog-mask");e==0&&((l=document.getElementById("leftNav"))==null||l.classList.add("disabled")),e==t.length-1&&((m=document.getElementById("rightNav"))==null||m.classList.add("disabled")),e>0&&e<t.length-1&&((c=document.getElementById("leftNav"))==null||c.classList.remove("disabled"),(u=document.getElementById("rightNav"))==null||u.classList.remove("disabled"));let o=t[e];a.includes("/en")&&(o=o.EN);const r=document.getElementById("bingLink_text");r&&(r.innerHTML=o.Title),(f=document.getElementById("bingLink"))==null||f.setAttribute("href",o.CopyrightLink);const n=o.Path;s.style.background="",s.style.backgroundImage=`url(${n})`;const p=document.querySelector(".vp-footer-wrapper");p.style.backgroundImage=`url(${n})`},d=a=>{var r;const e=document.querySelector(".vp-blog-mask");if(!e)return;const t=i.get("BingImgList");if(t&&t.length<1)return;if(!document.getElementById("BingSwitchWrapper")){const n=document.createElement("div");n.id="BingSwitchWrapper",n.innerHTML=`
<a href="" target="_Blank" id="bingLink">
  <div class="bingLink_icon"><svg class="mapPin" height="16" width="16" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path d="M0 0h12v12h-12z" fill="none"></path><path d="M6.5 3a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm0-3a4.5 4.5 0 0 0-4.5 4.5 5.607 5.607 0 0 0 .087.873c.453 2.892 2.951 5.579 3.706 6.334a1 1 0 0 0 1.414 0c.755-.755 3.253-3.442 3.706-6.334a5.549 5.549 0 0 0 .087-.873 4.5 4.5 0 0 0-4.5-4.5zm3.425 5.218c-.36 2.296-2.293 4.65-3.425 5.782-1.131-1.132-3.065-3.486-3.425-5.782a4.694 4.694 0 0 1-.075-.718 3.5 3.5 0 0 1 7 0 4.634 4.634 0 0 1-.075.718z"></path></svg></div>
  <div id="bingLink_text"></div>
</a>
<div id="leftNav"></div>
<div id="rightNav"></div>`,(r=e.parentElement)==null||r.insertBefore(n,e)}const s=document.getElementById("leftNav"),o=document.getElementById("rightNav");s&&o&&(g(),s.onclick=()=>{let n=i.get("BingImgIndex");n--,i.set("BingImgIndex",n),g()},o.onclick=()=>{let n=i.get("BingImgIndex");n++,i.set("BingImgIndex",n),g()})},h=()=>{I({method:"get",url:"//file.mo7.cc/api/public/url",params:{}}).then(a=>{const e=a.data.Data;if(!(e&&e.length<1)){for(const t of e)v(t.Path);i.set("BingImgList",e),d()}})};return _(()=>{B(()=>{h()}),k().beforeEach(e=>{B(()=>{setTimeout(()=>{d()},50)})})}),(a,e)=>{const t=b("ClientOnly");return x(),y(t,null,{default:E(()=>[C]),_:1})}}}),q=N(M,[["__file","HeroBG.vue"]]);export{q as default};