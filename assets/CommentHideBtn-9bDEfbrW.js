import{m}from"./tools-B9TDRQ4Q.js";import{f as l,A as d,L as a,g as u,r as p,o as C,M as f,w,b as h}from"./app-CrB9mOEy.js";import{_ as y}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";const _=h("div",{class:"none"},"评论区隐藏按钮",-1),B=l({__name:"CommentHideBtn",setup(E){const s=()=>{const e=document.querySelector(".waline-wrapper");e&&(e.classList.add("show"),e.classList.remove("hide"),m.set("CommentIsDisplay",!0))},r=()=>{const e=document.querySelector(".waline-wrapper");e&&(e.classList.add("hide"),e.classList.remove("show"),m.set("CommentIsDisplay",!1))},c=()=>{const e=document.querySelector(".waline-wrapper");if(!e)return;m.get("CommentIsDisplay")?s():r(),e.style.opacity="1"},i=()=>{const e=document.querySelector(".waline-wrapper");if(!e)return;if(!document.getElementById("ShowComment")){const t=document.createElement("button");t.id="ShowComment",t.innerHTML="显示评论区",e.appendChild(t)}if(!document.getElementById("HideComment")){const t=document.createElement("button");t.id="HideComment",t.innerHTML="隐藏评论区",e.appendChild(t)}const n=document.getElementById("ShowComment"),o=document.getElementById("HideComment");n&&o&&(n.onclick=s,o.onclick=r)};return d(()=>{a(()=>{i(),c()}),u().beforeEach(n=>{a(()=>{setTimeout(()=>{i(),c()},500)})})}),(e,n)=>{const o=p("ClientOnly");return C(),f(o,null,{default:w(()=>[_]),_:1})}}}),L=y(B,[["__file","CommentHideBtn.vue"]]);export{L as default};
