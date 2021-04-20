webpackJsonp([0xf3ddf2cada43],{508:function(n,s){n.exports={data:{markdownRemark:{html:'<p>要讲<code class="gatsby-code-text">闭包</code>,就必须先理解JavaScript中的<a href="">词法环境</a>的概念；词法环境简单来说就是包括环境记录()和对外部词法环境的引用。</p>\n<h3 id="环境记录初始化"><a href="#%E7%8E%AF%E5%A2%83%E8%AE%B0%E5%BD%95%E5%88%9D%E5%A7%8B%E5%8C%96" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>环境记录初始化</h3>\n<p>一段JS代码执行之前，会对环境记录进行初始化（声明提前），即将函数的形参、函数声明和变量先放入函数的环境记录中，特别需要注意的是：</p>\n<p>形参会在初始化的时候定义值，但是函数内部定义的变量只声明不不赋值；</p>\n<p>以下面这段代码为例，解析环境记录初始化和代码执行的过程：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> z  <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z <span class="token operator">+</span> q<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> bar<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>\n<p>初始化全局环境</p>\n<table>\n<thead><tr>\n<th colspan="2">全局环境</th>\n</tr></thead>\n<tbody>\n<tr>\n<td rowspan="3">环境记录(record)</td>\n <td>foo: &lt;function&gt;</td>\n</tr>\n<tr>\n<td>x: undefined（声明变量而非定义变量）</td>\n</tr>\n<tr>\n<td>bar: undefined（声明变量而非定义变量）</td>\n</tr>\n<tr>\n<td>外部环境(outer)</td>\n <td>null</td>\n</tr>\n</tbody>\n</table>\n</li>\n<li>\n<p>执行 <code class="gatsby-code-text">x = 10</code></p>\n<table>\n<thead><tr>\n<th colspan="2">全局环境</th>\n</tr></thead>\n<tbody>\n<tr>\n<td rowspan="3">环境记录(record)</td>\n<td>foo: &lt;function&gt;</td>\n</tr>\n<tr>\n<td>x: 10（）</td>\n</tr>\n<tr>\n<td>bar: undefined（声明变量而非定义变量）</td>\n</tr>\n<tr>\n<td>外部环境(outer)</td>\n<td>null</td>\n</tr>\n</tbody>\n</table>\n</li>\n<li>\n<p>执行var bar = foo(20)语句之前，将foo函数的环境记录初始化</p>\n<table>\n<thead><tr>\n<th colspan="2">foo 环境</th>\n</tr></thead>\n<tbody>\n<tr>\n<td rowspan="3">环境记录(record)</td>\n<td><strong>y: 20（定义形参）</strong></td>\n</tr>\n<tr>\n<td>bar: &lt;function&gt;</td>\n</tr>\n<tr>\n<td>z: undefined（声明变量而非定义变量）</td>\n</tr>\n<tr>\n<td>外部环境(outer)</td>\n<td>全局环境</td>\n</tr>\n</tbody>\n</table>\n</li>\n<li>\n<p>执行var bar = foo(20)语句，变量bar接收foo函数中返回的bar函数</p>\n<table>\n<thead><tr>\n<th colspan="2">foo 环境</th>\n</tr></thead>\n<tbody>\n<tr>\n<td rowspan="3">环境记录(record)</td>\n<td><strong>y: 20</strong></td>\n</tr>\n<tr>\n<td>bar: &lt;function&gt;</td>\n</tr>\n<tr>\n<td><strong>z: 30（定义z）</strong></td>\n</tr>\n<tr>\n<td>外部环境(outer)</td>\n<td>全局环境</td>\n</tr>\n</tbody>\n</table>\n</li>\n<li>\n<p>执行bar函数之前，初始化bar的词法环境</p>\n<table>\n<thead><tr>\n<th colspan="2">bar环境</th>\n</tr></thead>\n<tbody>\n<tr>\n<td>环境记录(record)</td>\n<td><strong>q: 40（定义形参q）</strong></td>\n</tr>\n<tr>\n<td>外部环境(outer)</td>\n<td>foo环境</td>\n</tr>\n</tbody>\n</table>\n</li>\n<li>\n<p>在foo函数内执行bar函数\n<code class="gatsby-code-text">x + y + z + q = 10 + 20 + 30 + 40 = 100</code></p>\n</li>\n</ul>\n<h3 id="声明提升"><a href="#%E5%A3%B0%E6%98%8E%E6%8F%90%E5%8D%87" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>声明提升</h3>\n<p>在上面词法分析的过程中我们可以看到任何的变量和函数总是会被提前声明但不赋值，赋值的代码还是留在代码编写的原地，等待赋值！</p>\n<p>在一段代码中如果有同名的函数和变量，那么函数优先，函数声明会覆盖掉变量声明。</p>\n<blockquote>\n<p>切记，函数表达式的中的函数不会提升</p>\n</blockquote>\n<p>词法分析的过程也就是变量、函数声明提升的过程。</p>\n<h3 id="词法作用域"><a href="#%E8%AF%8D%E6%B3%95%E4%BD%9C%E7%94%A8%E5%9F%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>词法作用域</h3>\n<p>上面进行环境记录的过程，就是相当于确定了词法作用域的过程，也就说词法作用域（静态作用域）是在书写代码或者说定义时确定的，后期是无法修改的，也就说词法作用域关注代码直接的位置关系,例如：互相嵌套，定义先后顺序等等；所以词法作用域也被成为静态作用域。</p>\n<p>在JavaScript内部，作用域确实和对象很类似，可见的标识符都是它的属性，但是作用域“对象”无法通过JavaScript代码访问，它仅存在于JavaScript引擎内部。</p>\n<p>举个例子来说明一下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> b <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">bar</span><span class="token punctuation">(</span>b <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 4 12</span></code></pre>\n      </div>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/lexical-scope-977a364ef0d288481ca6f17dbc921571-d27cf.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.20994475138121%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAADIjAAAyIwHN55PYAAACL0lEQVQoz2XQXU/aUBgHcD7Z7na97HL7CItX3uxiyXY5L2bisuzOEDMXJUwd6kSgtCAMeSuvRUoLPX07py2ltOVFmKjtWmbmwpJfTv43/zzPeQJ5rvGjgCfruWg1l2LqZ2S2VDi95JqVPt8eq5SFVjSGkPtlnBXxja0PAdaW6aHEmJKq1CHII3A5YmK6WFDFkiqVBqgyVKp/6TK5GHeCwa2nz58N56MAY8mMDXuWuOCTKLdrVA/GV6eT1vGIOh6Q4Rl94gDstnt+14t5FmzUVdLFk88bb17xhuyXO5bslec8YdSPjEZErx2Oqcht57veOBEaMYc/cxTchQkXYUuJt2svtzdfT93rh3LXFG+EFCqGhMs9rRTC4wfvt/fWP+2vB7GdSPTLaSKcyoewTJjIHWXJJy/WPm6+m9yPHidfc8mZtxVKu4hgqczX+MUBljpMpvcSFzvHUa+8j2VCeO5bpnxeIG0pr037j+UZT9x0Y46I3wHMkTBXJVyELyVdf23MDzDp7y/HbwQMTfRAx5Qe/gywXirIEsFBJWzWD4XsrncnB8TvuSWwtAwOiC14TPHKNdhpG0J3hKDeBnyZEypIaSK1yQmkolFav6Vq1ApNo+R+C04HAUrjPC0dULpAW7A1EFuG2DZlT1MX2hakbfS/KwvCqREoAipaILw3362XAFXmqRJoFnuNPFv7SZP0gO/aMmtJKzqm6Jelqc7YMmNB/3KmxNp++OPfvII2peF8/BtmOlm4EF9cyQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="词法作用域"\n        title=""\n        src="/static/lexical-scope-977a364ef0d288481ca6f17dbc921571-acf85.png"\n        srcset="/static/lexical-scope-977a364ef0d288481ca6f17dbc921571-c1418.png 210w,\n/static/lexical-scope-977a364ef0d288481ca6f17dbc921571-5d5d8.png 420w,\n/static/lexical-scope-977a364ef0d288481ca6f17dbc921571-acf85.png 840w,\n/static/lexical-scope-977a364ef0d288481ca6f17dbc921571-d27cf.png 905w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>作用域气泡由其对应的作用域块代码写在哪里决定，它们是逐级包含的:</p>\n<ul>\n<li>\n<p>气泡1 包含着整个全局作用域，其中只有一个标识符：foo</p>\n</li>\n<li>\n<p>气泡2 包含着foo所创建的作用域，其中有三个标识符：a、bar和b</p>\n</li>\n<li>\n<p>气泡3 包含着bar所创建的作用域，其中只有一个标识符：c</p>\n</li>\n</ul>\n<p>作用域气泡的结构和互相之间的位置关系给引擎提供了足够的位置信息，引擎用这些信息来查找标识符的位置</p>\n<p>在代码片段中，引擎执行console.log(…)声明，并查找a、b和c三个变量的引用。它首先从最内部的作用域，也就是<code class="gatsby-code-text">bar(...)函数</code>的作用域开始查找。引擎无法在这里找到a，因此会去上一级到所嵌套的<code class="gatsby-code-text">foo(...)</code>的作用域中继续查找。在这里找到了a，因此引擎使用了这个引用。对b来讲也一样。而对c来说，引擎在bar(…)中找到了它。</p>\n<p><strong>遮蔽</strong><br>\n作用域查找从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见第一个匹配的标识符为止</p>\n<p>在多层的嵌套作用域中可以定义同名的标识符，这叫作“遮蔽效应”，内部的标识符“遮蔽”了外部的标识符</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1</span>\n<span class="token punctuation">}</span>\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>全局变量会自动为全局对象的属性，因此可以不直接通过全局对象的词法名称，而是间接地通过对全局对象属性的引用来对其进行访问</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//0</span>\n<span class="token punctuation">}</span>\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>通过这种技术可以访问那些被同名变量所遮蔽的全局变量。但非全局的变量如果被遮蔽了，无论如何都无法被访问到。</p>\n<h3 id="动态作用域"><a href="#%E5%8A%A8%E6%80%81%E4%BD%9C%E7%94%A8%E5%9F%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>动态作用域</h3>\n<p>javascript使用的是词法作用域，它最重要的特征是它的定义过程发生在代码的书写阶段</p>\n<p>那为什么要介绍动态作用域呢？实际上动态作用域是javascript另一个重要机制<a href="&#x27;http&#x27;">this</a>的表亲。作用域混乱多数是因为词法作用域和this机制相混淆，傻傻分不清楚</p>\n<p>动态作用域并不关心函数和作用域是如何声明以及在任何处声明的，只关心它们从何处调用。换句话说，作用域链是基于调用栈的，而不是代码中的作用域嵌套</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>\n<p>如果处于词法作用域，也就是现在的javascript环境。变量a首先在foo()函数中查找，没有找到。于是顺着作用域链到全局作用域中查找，找到并赋值为2。所以控制台输出2</p>\n</li>\n<li>\n<p>如果处于动态作用域，同样地，变量a首先在foo()中查找，没有找到。这里会顺着调用栈在调用foo()函数的地方，也就是bar()函数中查找，找到并赋值为3。所以控制台输出3</p>\n</li>\n</ul>\n<p>两种作用域的区别，简而言之，词法作用域是在定义时确定的，而动态作用域是在运行时确定的;词法作用域规则查找一个变量声明时依赖的是源程序中块之间的静态关系；而动态作用域规则依赖的是程序执行时的函数调用顺序。</p>\n<h3 id="闭包"><a href="#%E9%97%AD%E5%8C%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>闭包</h3>\n<p>看下面这个代码的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Mozilla"</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> displayName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> myFunc <span class="token operator">=</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>第一眼看上去，也许不能直观的看出这段代码能够正常运行。在一些编程语言中，函数中的局部变量仅在函数的执行期间可用。一旦<code class="gatsby-code-text">makeFunc()</code>执行完毕，我们会认为<code class="gatsby-code-text">name</code>变量将不能被访问。然而，因为代码运行得没问题，所以很显然在JavaScript中并不是这样的。</p>\n<p>这个谜题的答案是，JavaScript中的函数会形成闭包。<code class="gatsby-code-text">**闭包是由函数以及创建该函数的词法环境组合而成**</code>。这个环境包含了<code class="gatsby-code-text">这个闭包创建时所能访问的所有局部变量</code>。在我们的例子中，<code class="gatsby-code-text">myFunc</code>是执行<code class="gatsby-code-text">makeFunc</code>时创建的<code class="gatsby-code-text">displayName</code>函数实例的引用，而<code class="gatsby-code-text">displayName</code>实例仍可访问其词法作用域中的变量，即可以访问到<code class="gatsby-code-text">name</code>。由此，当<code class="gatsby-code-text">myFunc</code>被调用时，<code class="gatsby-code-text">name</code>仍可被访问，其值<code class="gatsby-code-text">Mozilla</code>就被传递到alert中。</p>\n<p>简而言之，<strong>闭包</strong> 是函数和声明该函数的<a href="">词法环境</a>(lexical environment)的组合;</p>\n<ul>\n<li>这个环境包含了这个闭包创建时所能访问的所有局部变量；</li>\n<li>闭包就是允许一个内部函数有权限访问外部函数作用域中的变量(又称为自由变量)，即使外部函数已执行完毕；</li>\n<li>在JavaScript中，在任意一个函数被创建的时候，都会形成闭包。</li>\n</ul>\n<blockquote>\n<p>“在JavaScript中，在任意一个函数被创建的时候，都会形成闭包” 这句话有部分人不认同，他们的观点是只有函数在脱离当前词法环境运行的时候，才会形成闭包。这种观点我也是赞同的，只不过是更严格的说法。</p>\n</blockquote>\n<p>要使用闭包，只需要简单的把一个函数定义在另一个函数内部，并将它暴露出来。要暴露一个函数，可以将它返回或者传递给其他函数。</p>\n<h3 id="using-closures-examples"><a href="#using-closures-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Closures (Examples)</h3>\n<ul>\n<li>\n<p>创建私有变量\n在JavaScript中，闭包是用来实现数据私有的原生机制。当你使用闭包来实现数据私有时，被封装的变量只能在闭包容器函数(外部函数)作用域中使用。你不能在外部作用域中访问这些被包装的变量，除非你使用对象的<strong>特权方法</strong>。\n任何定义在闭包作用域病暴露到外部的函数，都属于特权方法。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">getSecret</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">let</span> secret <span class="token operator">=</span> data<span class="token punctuation">;</span>\n<span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token keyword">get</span><span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> secret<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">getSecret</span><span class="token punctuation">(</span><span class="token string">\'hello world\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello world</span></code></pre>\n      </div>\n<p>在上面的例子里，<code class="gatsby-code-text">get()</code>方法定义在<code class="gatsby-code-text">getSecret()</code>作用域下，这让它可以访问到任何<code class="gatsby-code-text">getSecret</code>方法内的变量，于是<code class="gatsby-code-text">get()</code>就是一个被授权的方法。在这个例子里，它可以访问参数<code class="gatsby-code-text">secret</code>。</p>\n</li>\n</ul>\n<p>上面的例子还有一个常见的陷阱，在上面例子的基础上追加一些代码:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">obj<span class="token punctuation">.</span><span class="token function-variable function">addData</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>newData<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> secret <span class="token operator">+=</span> newData\n<span class="token punctuation">}</span>\nobj<span class="token punctuation">.</span><span class="token function">addData</span><span class="token punctuation">(</span><span class="token string">\'nihao\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>这个时候，很多人会误以为,<code class="gatsby-code-text">obj.addData(&#39;nihao&#39;)</code>表达式的返回值会是<code class="gatsby-code-text">&#39;hello world nihao&#39;</code>,但是实际上，这个表达式根本不能正确的执行下去，反而会报错(<code class="gatsby-code-text">secret is not defined</code>),有些人会很奇怪为何啊，我不是明明创建闭包的时候，已经添加了对<code class="gatsby-code-text">secret</code>的引用了吗？</p>\n<p>事实并非如此，<code class="gatsby-code-text">get</code>函数在创建的时候，添加了对<code class="gatsby-code-text">secret</code>变量的引用(或者说对自由变量的捕获是在闭包创建的时候)，而<code class="gatsby-code-text">addData</code>函数在创建的时候，完全没有添加对<code class="gatsby-code-text">secret</code>的引用。仔细考虑一下，对不对！</p>\n<p>闭包还有一个常见的陷阱，看个简单的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">showObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> obj\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> showO <span class="token operator">=</span> <span class="token function">showObject</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">showO</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// {a:1}</span></code></pre>\n      </div>\n<p>上面的代码看上去没有任何问题，对不对？考虑到我们添加如下代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">o<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n<span class="token function">showO</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// {a:6}</span></code></pre>\n      </div>\n<p>这个时候，再次调用<code class="gatsby-code-text">showO()</code>函数的时候，返回值竟然发生了变化，上面还明明在说闭包可以创建私有变量的啊！</p>\n<p>这是因为<code class="gatsby-code-text">o</code>的引用同时存在与闭包的内部和外部，它的变化可以跨越看似私有的界限。这很容易导致混乱，所以通常情况下我们应当最大限度的减少捕获全局作用域的变量，来作为闭包的私有变量。</p>\n<ul>\n<li>在函数式编程中，闭包经常用于偏应用和柯里化\n为了说明这个，我们先定义一些概念：</li>\n</ul>\n<p><strong>函数应用</strong>：将参数传给一个函数，并获得函数的返回值的过程。</p>\n<p><strong>偏应用</strong>：先传递给某个函数一部分的参数，然后返回一个新函数，该函数等待接收剩余的全部参数。</p>\n<p>偏应用就是通过闭包作用于来进行提前赋予参数。关于偏应用和柯里化可以查看 <a href="blog/2017/11/23/Curry-and-PartialApplication.html">partial application and curry</a></p>',frontmatter:{title:"FP5：What is a Closure?",img:"./img/2017-11-25.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"November 19, 2017",path:"blog/functional/2017-11-20-FP5-closure.md",slug:"/blog/2017/11/20/FP5-closure.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}}]}},pathContext:{slug:"/blog/2017/11/20/FP5-closure.html"}}}});