webpackJsonp([0xb1efe8af55be],{515:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="lazy-loading"><a href="#lazy-loading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lazy loading</h3>\n<p>几乎所有的懒加载都是通过JavaScript来实现的</p>\n<h4 id="scroll-listeners-and-relayout"><a href="#scroll-listeners-and-relayout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scroll Listeners and relayout</h4>\n<p>我们一般会通过监听元素的<code class="gatsby-code-text">scroll</code>事件，来检查图像的占位符是否位于当前可是区域内，如果是，则开始加载，这是目前我们大多数人采用的思路，但是<code class="gatsby-code-text">scroll</code>事件可能会对页面性能产生负面影响，在滚动期间，浏览器会多次触发<code class="gatsby-code-text">scroll</code>事件，并加载我们即将要被加载的图像，这会导致浏览器的重新布局，这是一个很影响性能的操作，可以尽量给scroll监听的事件添加<code class="gatsby-code-text">防抖</code>来降低触发频率，或者我们可以缓存某些元素的位置，这样可以防止反弹的发生，类似于<code class="gatsby-code-text">Quora</code>的解决方案</p>\n<p>首先回忆几个基本概念：</p>\n<ul>\n<li>\n<p>clientHeight:clientHeight描述的是可见内容的高度，不包括由垂直滚动条引起的隐藏内容。并且要去除掉水平滚动条和border和margin的大小，因为他们不是实际可见内容。<br>\n所以 <code class="gatsby-code-text">clientHeight = visible content + padding</code></p>\n</li>\n<li>\n<p>scrollHeight:描述的是内容的总高度。包括可见内容的高度和填充(padding);由于垂直滚动条导致的隐藏的内容和padding的高度。 注意这里不包括border和margin,以为这两个也不是真正的内容。<br>\n所以 <code class="gatsby-code-text">scrollHright = entier content + padding</code></p>\n</li>\n<li>\n<p>offsetHeight:描述的是元素在html页面中占用的空间量。包括一下内容：可见内容的高度和可见的填充(不包括由垂直滚动条引起的隐藏内容高度)；顶部和底部的边框；如果有水平滚动条的情况下，还应该包括水平滚动条的高度。注意这里也不包括margin,因为margin看作是该元素和它的邻居之间的距离，而不是它本身所占据的空间。<br>\n所以 <code class="gatsby-code-text">offsetHeight = visible content + padding + border + horizontal scrollbar</code></p>\n</li>\n</ul>\n<p><a href="http://usefulangle.com/post/40/javascript-client-height-vs-offset-height-vs-scroll-height">详细图解</a></p>\n<ul>\n<li>\n<p>scrollTop:代表有滚动条时，滚动条向下滚动的距离，也就是元素顶部被遮挡住的高度，在没有滚动条的时候scrollTop===0,可读可设置。</p>\n</li>\n<li>\n<p>offsetTop:当前元素顶部距离最近父元素顶部的距离，和有没有滚动条没有关系，是只读属性。</p>\n</li>\n</ul>\n<p><a href="https://www.imooc.com/article/17571">详细图解</a></p>\n<p>根据以上概念，判断滚动条即将(eg.500px)滚动到底部的逻辑如下:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">/**\n * 判断滚动条即将滚动到底部\n * @param {Event} event scroll 事件\n */</span>\n<span class="token keyword">function</span> <span class="token function">handleDocScroll</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> htmlHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>\n\n    <span class="token comment">//clientHeight是网页在浏览器中的可视高度，</span>\n    <span class="token keyword">var</span> clientHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>\n\n    <span class="token comment">//scrollTop是浏览器滚动条的top位置，</span>\n    <span class="token keyword">var</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>\n\n    <span class="token comment">//通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>scrollTop <span class="token operator">+</span> clientHeight <span class="token operator">>=</span> htmlHeight <span class="token operator">-</span> <span class="token number">600</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'即将滚动到底部\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>上面的<code class="gatsby-code-text">handleDocScroll</code>函数在页面滚动的时候会频繁触发，而我们想要的是在用户滚动结束之后，执行该监听函数，这个时候就需要<code class="gatsby-code-text">防抖</code>，</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">/**\n * 函数防抖，滚动事件结束之后，在执行\n * @param {Function} fn \n * @param {Number} wait \n * @returns {Function}\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span>fn<span class="token punctuation">,</span> wait<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> wait<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>判断元素是否在可是区域内</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">/**\n* @params {HTMLElement} el\n*/</span>\n<span class="token keyword">function</span> <span class="token function">isElementInViewport</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> rect <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    rect<span class="token punctuation">.</span>top <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>\n    rect<span class="token punctuation">.</span>left <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>\n    rect<span class="token punctuation">.</span>bottom <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n    rect<span class="token punctuation">.</span>right <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="passive-event-listeners"><a href="#passive-event-listeners" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>passive event listeners</h4>\n<p>DOM2.0中<code class="gatsby-code-text">addEventListeners</code>函数,可以接收三个参数，其中第三个参数是用来控制监听器是在事件捕获阶段执行还是事件冒泡阶段执行，<code class="gatsby-code-text">true</code>为捕获阶段，<code class="gatsby-code-text">false</code>为冒泡阶段，默认值为<code class="gatsby-code-text">false(冒泡阶段)</code>，因为传<code class="gatsby-code-text">true</code>的情况太少了</p>\n<div style="text-align:center;margin-top:20px" align="center">\n  \n  <a class="gatsby-resp-image-link" href="/static/capture-bubble-49f48c734ad38d8779ac7892c8d3fdb5-9fb2e.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 640px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 53.59375000000001%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB23ZFAYv/xAAXEAEAAwAAAAAAAAAAAAAAAAARACAh/9oACAEBAAEFAtWNP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABUQAQEAAAAAAAAAAAAAAAAAACAx/9oACAEBAAY/Aqv/xAAcEAEAAgEFAAAAAAAAAAAAAAABABARITFRYaH/2gAIAQEAAT8hQaMnueOYB2pr/9oADAMBAAIAAwAAABDfD//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EIf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAdEAEAAwABBQAAAAAAAAAAAAABABEhQRAxUXGB/9oACAEBAAE/EAFCbvPgS18g1dUkBtWeTpx9w7T/2Q==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="capture bubble" title="" src="/static/capture-bubble-49f48c734ad38d8779ac7892c8d3fdb5-9fb2e.jpg" srcset="/static/capture-bubble-49f48c734ad38d8779ac7892c8d3fdb5-94804.jpg 210w,\n/static/capture-bubble-49f48c734ad38d8779ac7892c8d3fdb5-3f4d9.jpg 420w,\n/static/capture-bubble-49f48c734ad38d8779ac7892c8d3fdb5-9fb2e.jpg 640w" sizes="(max-width: 640px) 100vw, 640px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>  \n<p>此过程被称为事件传播，会以此执行捕获阶段的监听函数和冒泡阶段的监听函数(注意<code class="gatsby-code-text">触发事件元素本身的监听函数，会按照监听顺序执行，而不是先执行捕获阶段的，后执行冒泡阶段的</code>，因为目标本身只有一个，自己本身没有捕获和冒泡,自然会按照监听的顺序执行)。在捕获过程中最外层的祖先元素最先响应，然后依次向目标元素捕获；而在冒泡过程中，子元素最先响应，然后依次向父元素冒泡。</p>\n<p>在事件处理函数中，会传递<code class="gatsby-code-text">Event</code>对象作为参数，而这个参数最常用的2个方法就是：</p>\n<ul>\n<li>event.stopPaopagation()   阻止事件传播</li>\n<li>event.preventDefault()    阻止事件的默认行为</li>\n</ul>\n<p>我们可以使用如下代码绑定事件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">div<span class="token punctuation">.</span><span class="token function">addEventListeners</span><span class="token punctuation">(</span><span class="token string">"touchstart"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 逻辑代码</span>\n    <span class="token comment">// e.preventDefault()  浏览器在没有执行上面的逻辑代码的时候不知道这里会有阻止默认事件的方法</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>由于<code class="gatsby-code-text">touchstart</code>事件对象的<code class="gatsby-code-text">cancelable</code>属性为<code class="gatsby-code-text">true</code>，也就是说它的默认行为可以被监听器通过<code class="gatsby-code-text">e.preventDefault()</code>方法阻止，那它的默认行为是什么呢，通常来说就是滚动当前页面（还可能是缩放页面），如果它的默认行为被阻止了，页面就必须静止不动。但浏览器无法预先知道一个监听器会不会调用<code class="gatsby-code-text">e.preventDefault()</code>，它能做的只有等监听器执行完后再去执行默认行为，而监听器执行是要耗时的，有些甚至耗时很明显，这样就会导致页面卡顿。视频里也说了，即便监听器是个空函数，也会产生一定的卡顿，毕竟空函数的执行也会耗时。</p>\n<p>统计发现，有<code class="gatsby-code-text">80%</code>的滚动事件监听器是不会阻止默认行为的，也就是说大部分情况下，浏览器是白等了。所以，<code class="gatsby-code-text">passive监听器</code>诞生了，passive 的意思是“顺从的”，表示它不会对事件的默认行为说 no，浏览器知道了一个监听器是<code class="gatsby-code-text">passive</code>的，它就可以在两个线程里同时执行监听器中的JavaScript代码和浏览器的默认行为了</p>\n<p>这里有一个视频，可以看到<code class="gatsby-code-text">passive监听器</code>和普通监听对页面性能的影响<a href="https://www.webreflection.co.uk/blog/2016/04/17/new-dom4-standards">视频地址</a>，现在大部分的浏览器都支持<code class="gatsby-code-text">passive</code>,我们可以用起来了，不过也要做好回退的方案。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> passiveEventSupported <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> opts <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'passive\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            passiveEventSupported <span class="token operator">=</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'test\'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> passiveEvent <span class="token operator">=</span> passiveEventSupported <span class="token operator">?</span> <span class="token punctuation">{</span> capture<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> passive<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">:</span> <span class="token boolean">false</span>\n\ndiv<span class="token punctuation">.</span><span class="token function">addEventListeners</span><span class="token punctuation">(</span><span class="token string">"touchstart"</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>passiveEvent<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>如果我们在<code class="gatsby-code-text">passive</code>监听器中调用了<code class="gatsby-code-text">e.preventDefault</code>函数会如何呢？不用担心，这个时候<code class="gatsby-code-text">e.preventDefault</code>函数将不会起作用，并且浏览器会发出警告。</p>\n<h4 id="intersectionobserver"><a href="#intersectionobserver" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>IntersectionObserver</h4>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">IntersectionObserver</a>是一个处于试验阶段的api,可以直接监听image元素进入可视区域内，并触发回调函数,由于目前只有较新版本的浏览器支持，就不在做讲解，如果感兴趣可以去看一下文档，不过这个可能也是未来的发展方向，可以保持关注</p>\n<p><a href="https://jmperezperez.com/high-performance-lazy-loading/">lazy-load &#x26; IntersectionObserver的react案例</a></p>',frontmatter:{title:"web image 加载优化方案--lazy-load",img:"./img/2018-03-08.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"March 07, 2018",path:"blog/performance/2018-03-08-lazy-loading.md",slug:"/blog/2018/03/08/lazy-loading.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}}]}},pathContext:{slug:"/blog/2018/03/08/lazy-loading.html"}}}});