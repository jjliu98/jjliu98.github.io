import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as s,a as t}from"./app-CrB9mOEy.js";const e={},p=t(`<h1 id="必应每日壁纸-api" tabindex="-1"><a class="header-anchor" href="#必应每日壁纸-api"><span>必应每日壁纸 api</span></a></h1><p>采用 golang 编写，每日定时爬取 <a href="https://cn.bing.com" target="_blank" rel="noopener noreferrer">https://cn.bing.com</a> 当日的 7 张壁纸，并将链接固定下来进行 302 重定向。 idx 参数分别对应 当日壁纸数组 的序号，<code>idx=1</code> 时则返回当天壁纸。</p><p>支持 <code>http</code> 以及 <code>https</code> 。</p><h2 id="html-和-markdown-使用" tabindex="-1"><a class="header-anchor" href="#html-和-markdown-使用"><span>HTML 和 Markdown 使用</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//file.mo7.cc/api/public/bz<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//file.mo7.cc/api/public/bz?idx=3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>![](//file.mo7.cc/api/public/bz?idx=1)
![](//file.mo7.cc/api/public/bz?idx=3)
![](//file.mo7.cc/api/public/bz)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="//file.mo7.cc/api/public/bz?idx=1" alt="" loading="lazy"><br><img src="//file.mo7.cc/api/public/bz?idx=3" alt="" loading="lazy"><br><img src="//file.mo7.cc/api/public/bz" alt="" loading="lazy"></p><blockquote><p>当 <code>idx</code> 参数小于 1 时，则会随机返回一张壁纸</p></blockquote><h2 id="api-接口返回当日-json-数据" tabindex="-1"><a class="header-anchor" href="#api-接口返回当日-json-数据"><span>api 接口返回当日 json 数据</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;//file.mo7.cc/api/public/url&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> imgList <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Data<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>imgList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API 完整地址:<br><a href="https://file.mo7.cc/api/public/url" target="_blank" rel="noopener noreferrer">https://file.mo7.cc/api/public/url</a></p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>程序采用 golang 编写，采用 302 重定向返回图片，流量消耗可以忽略不计。程序定时爬取数据并缓存在内存中，因此可以支持极高的并发。欢迎食用 ~</p></div>`,12),o=[p];function i(c,l){return s(),n("div",null,o)}const d=a(e,[["render",i],["__file","bing-img-api.html.vue"]]),m=JSON.parse('{"path":"/favorite/photos/bing-img-api.html","title":"必应每日壁纸 api","lang":"zh-CN","frontmatter":{"date":"2023-07-21T00:00:00.000Z","icon":"bing","pageInfo":["Author","PageView"],"article":false,"timeline":false,"description":"必应每日壁纸 api 采用 golang 编写，每日定时爬取 https://cn.bing.com 当日的 7 张壁纸，并将链接固定下来进行 302 重定向。 idx 参数分别对应 当日壁纸数组 的序号，idx=1 时则返回当天壁纸。 支持 http 以及 https 。 HTML 和 Markdown 使用 当 idx 参数小于 1 时，则会随机返...","head":[["meta",{"property":"og:url","content":"https://jjliu98.github.io/favorite/photos/bing-img-api.html"}],["meta",{"property":"og:site_name","content":"十⁸⁹"}],["meta",{"property":"og:title","content":"必应每日壁纸 api"}],["meta",{"property":"og:description","content":"必应每日壁纸 api 采用 golang 编写，每日定时爬取 https://cn.bing.com 当日的 7 张壁纸，并将链接固定下来进行 302 重定向。 idx 参数分别对应 当日壁纸数组 的序号，idx=1 时则返回当天壁纸。 支持 http 以及 https 。 HTML 和 Markdown 使用 当 idx 参数小于 1 时，则会随机返..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://jjliu98.github.io//file.mo7.cc/api/public/bz?idx=1"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"十⁸⁹"}],["meta",{"property":"article:published_time","content":"2023-07-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"必应每日壁纸 api\\",\\"description\\":\\"必应每日壁纸 api 采用 golang 编写，每日定时爬取 https://cn.bing.com 当日的 7 张壁纸，并将链接固定下来进行 302 重定向。 idx 参数分别对应 当日壁纸数组 的序号，idx=1 时则返回当天壁纸。 支持 http 以及 https 。 HTML 和 Markdown 使用 当 idx 参数小于 1 时，则会随机返...\\"}"]]},"headers":[{"level":2,"title":"HTML 和 Markdown 使用","slug":"html-和-markdown-使用","link":"#html-和-markdown-使用","children":[]},{"level":2,"title":"api 接口返回当日 json 数据","slug":"api-接口返回当日-json-数据","link":"#api-接口返回当日-json-数据","children":[]}],"git":{},"readingTime":{"minutes":0.75,"words":224},"filePathRelative":"favorite/photos/bing-img-api.md","localizedDate":"2023年7月21日","excerpt":"\\n<p>采用 golang 编写，每日定时爬取 <a href=\\"https://cn.bing.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://cn.bing.com</a> 当日的 7 张壁纸，并将链接固定下来进行 302 重定向。 idx 参数分别对应 当日壁纸数组 的序号，<code>idx=1</code> 时则返回当天壁纸。</p>\\n<p>支持 <code>http</code> 以及 <code>https</code> 。</p>\\n<h2>HTML 和 Markdown 使用</h2>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>img</span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>//file.mo7.cc/api/public/bz<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>img</span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>//file.mo7.cc/api/public/bz?idx=3<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,m as data};
