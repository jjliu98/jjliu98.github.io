import{u as U,f as se,g as te,h as Y,i as ae,P as le,t as re,j as ue,k as F,l as b,m as ie,n as M,p as t,q as oe,R as j,s as ne,v as ce,x as ve,C as pe,y as he,z as de,A as ye,B as me,D as fe,E as ge,F as He,G as I,H as _,I as ke,J as q,K as Re}from"./app-CrB9mOEy.js";const we=["/","/about/guestbook.html","/about/me.html","/about/","/about/website.html","/favorite/","/favorite/links/document.html","/favorite/links/friend.html","/favorite/links/","/favorite/links/tools.html","/favorite/movies/","/favorite/movies/the-grandmaster.html","/favorite/music/","/favorite/music/%E7%BD%91%E6%98%93%E4%BA%91%E6%AD%8C%E5%8D%95.html","/favorite/photos/bing-img-api.html","/favorite/photos/","/404.html","/category/","/tag/","/article/","/star/","/timeline/"],Qe="SEARCH_PRO_QUERY_HISTORY",f=U(Qe,[]),be=()=>{const{queryHistoryCount:a}=q,l=a>0;return{enabled:l,queryHistory:f,addQueryHistory:r=>{l&&(f.value=Array.from(new Set([r,...f.value.slice(0,a-1)])))},removeQueryHistory:r=>{f.value=[...f.value.slice(0,r),...f.value.slice(r+1)]}}},P=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:B}=q,g=U(qe,[]),xe=()=>{const a=B>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,B-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},Ce=a=>{const l=pe(),r=Y(),x=he(),i=F(0),R=b(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:C}=me(),H=ke(c=>{const k=c.join(" "),{searchFilter:D=h=>h,splitWord:E,suggestionsFilter:O,...m}=l.value;k?(i.value+=1,y(c.join(" "),r.value,m).then(h=>D(h,k,r.value,x.value)).then(h=>{i.value-=1,d.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(d.value=[])})):d.value=[]},q.searchDelay-q.suggestDelay);M([a,r],([c])=>H(c),{immediate:!0}),fe(()=>{C()})}),{isSearching:R,results:d}};var Ee=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),x=Y(),i=ae(le),{enabled:R,addQueryHistory:d,queryHistory:y,removeQueryHistory:C}=be(),{enabled:H,resultHistory:c,addResultHistory:k,removeResultHistory:D}=xe(),E=R||H,O=re(a,"queries"),{results:m,isSearching:h}=Ce(O),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),T=b(()=>E&&(y.value.length>0||c.value.length>0)),S=b(()=>m.value.length>0),A=b(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=A.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<A.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},L=e=>e.map(s=>Re(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[o,Q=""]=He(s)?s[x.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",L([o,...n,Q])))}return e.display.map(s=>t("div",L(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>R?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(I,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[t(I,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>L(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),D(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(S.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=A.value.contents[p.value];d(a.queries.join(" ")),k(s),r.push(P(s)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!S.value:!T.value}],id:"search-pro-results"},a.queries.length?h.value?t(oe,{hint:i.value.searching}):S.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const Q=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:Q}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const $=Q&&p.value===ee;return t(j,{to:P(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{d(a.queries.join(" ")),k(n),w()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:E?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ee as default};
