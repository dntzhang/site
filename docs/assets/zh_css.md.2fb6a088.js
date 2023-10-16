import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fd3ec232.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/css.md","filePath":"zh/css.md"}'),p={name:"zh/css.md"},o=l(`<h2 id="css-基础能力" tabindex="-1">CSS 基础能力 <a class="header-anchor" href="#css-基础能力" aria-label="Permalink to &quot;CSS 基础能力&quot;">​</a></h2><p>可以直接使用字符串来为 html 写样式，他不会污染全局样式：</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Component, h } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;omi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">tag</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-element&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyElement</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 局部作用域的 css</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">css</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;h1 { color: red }&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello, world!&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Component, h } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;omi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#6F42C1;">tag</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-element&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyElement</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 局部作用域的 css</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">css</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;h1 { color: red }&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;Hello, world!&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>当然你可以通过 vite，导入资源的字符串，这样你的 css 就可以在 css 文件里面写。</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> cssString </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./xxx.css?raw&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">tag</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-element&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyElement</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 局部作用域的 css</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">css</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cssString</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> cssString </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./xxx.css?raw&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#6F42C1;">tag</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-element&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyElement</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 局部作用域的 css</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">css</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cssString</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span></code></pre></div><h2 id="共享样式" tabindex="-1">共享样式 <a class="header-anchor" href="#共享样式" aria-label="Permalink to &quot;共享样式&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { render, tag, Component, h, css } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;omi&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 定义共享样式</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">css</span><span style="color:#9ECBFF;">\`p { color: green; }\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">tag</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;el-a&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line highlighted"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ElA</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">css</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [style]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;ElA&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;I am green.&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">tag</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;el-b&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ElB</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 可以覆盖和叠加共享样式</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">css</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [style, </span><span style="color:#9ECBFF;">&#39;h3 { color: red; }&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;ElB&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;I am green.&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { render, tag, Component, h, css } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;omi&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 定义共享样式</span></span>
<span class="line highlighted"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">style</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">css</span><span style="color:#032F62;">\`p { color: green; }\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#6F42C1;">tag</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;el-a&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line highlighted"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ElA</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">css</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [style]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;ElA&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;I am green.&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#6F42C1;">tag</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;el-b&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ElB</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Component</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 可以覆盖和叠加共享样式</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#E36209;">css</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [style, </span><span style="color:#032F62;">&#39;h3 { color: red; }&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">      &lt;&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;ElB&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;I am green.&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在这个例子中，我们定义了一个共享样式，使所有的 <code>&lt;p&gt;</code> 元素变为绿色。然后我们将这个样式应用到两个组件，ElA 和 ElB。在 ElB 中，我们还添加了另一个样式，使所有的 <code>&lt;h3&gt;</code> 元素变为红色，展示了如何覆盖和叠加共享样式。</p>`,8),e=[o];function t(c,r,E,y,i,h){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};
