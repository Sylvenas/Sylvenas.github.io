webpackJsonp([66583963097476],{504:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="old-mcdonald-had-effects"><a href="#old-mcdonald-had-effects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Old McDonald Had Effects…</h3>\n<p>在关于纯函数的的那一章（即第 3 章）里，有一个很奇怪的例子。这个例子中的函数会产生副作用，但是我们通过把它包裹在另一个函数里的方式把它变得看起来像一个纯函数。这里还有一个类似的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  getFromStorage :: String -> (_ -> String)</span>\n<span class="token keyword">var</span> <span class="token function-variable function">getFromStorage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> localStorage<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>要是我们没把<code class="gatsby-code-text">getFromStorage</code>包在另一个函数里，它的输出值就是不定的，会随外部环境变化而变化。有了这个结实的包裹函数（wrapper），同一个输入就总能返回同一个输出：一个从<code class="gatsby-code-text">localStorage</code>里取出某个特定的元素的函数。就这样（也许再高唱几句赞美圣母的赞歌）我们洗涤了心灵，一切都得到了宽恕。</p>\n<p>然而，这并没有多大的用处，你说是不是。就像是你收藏的全新未拆封的玩偶，不能拿出来玩有什么意思。所以要是能有办法进到这个容器里面，拿到它藏在那儿的东西就好了…办法是有的，请看 IO：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">IO</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">\'IO Usage:function required\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>effect <span class="token operator">=</span> effect\n    <span class="token punctuation">}</span>\n    <span class="token keyword">static</span> <span class="token keyword">of</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">IO</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> a<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">static</span> <span class="token keyword">from</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">IO</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">IO</span><span class="token punctuation">(</span><span class="token function">compose</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>effect<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">IO</code>跟之前的<code class="gatsby-code-text">functor</code>不同的地方在于，它的<code class="gatsby-code-text">$value</code>(在这里叫<code class="gatsby-code-text">effect</code>)总是一个函数。不过我们不把它当作一个函数——实现的细节我们最好先不管。这里发生的事情跟我们在<code class="gatsby-code-text">getFromStorage</code>那里看到的一模一样：<code class="gatsby-code-text">IO</code>把非纯执行动作（impure action）捕获到包裹函数里，目的是延迟执行这个非纯动作。就这一点而言，我们认为<code class="gatsby-code-text">IO</code>包含的是被包裹的执行动作的返回值，而不是包裹函数本身。这在<code class="gatsby-code-text">of</code>函数里很明显<code class="gatsby-code-text">IO(function(){ return x })</code> 仅仅是为了延迟执行，其实我们得到的是<code class="gatsby-code-text">IO(x)</code>。</p>\n<blockquote>\n<p>IO和Maybe、Either不太一样，它包装的是effect函数，而不是一个值。但是，一个函数完全可以看作一个等待计算的惰性的值，不是吗</p>\n</blockquote>\n<p>来用用看：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// ioWindow :: IO Window</span>\n<span class="token keyword">const</span> ioWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IO</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nioWindow<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>win <span class="token operator">=></span> win<span class="token punctuation">.</span>innerWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// IO(1430)</span>\n\nioWindow\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'location\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'href\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// IO(() => [\'http:\', \'\', \'localhost:8000\', \'blog\', \'posts\'])</span>\n\n\n<span class="token comment">// $ :: String -> IO [DOM]</span>\n<span class="token keyword">const</span> <span class="token function-variable function">$</span> <span class="token operator">=</span> selector <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">IO</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'#myDiv\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>div <span class="token operator">=></span> div<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// IO(() => \'I am some inner html\')</span></code></pre>\n      </div>\n<p>这里，<code class="gatsby-code-text">io_window</code>是一个真正的<code class="gatsby-code-text">IO</code>，我们可以直接对它使用<code class="gatsby-code-text">map</code>。至于<code class="gatsby-code-text">$</code>，则是一个函数，调用后会返回一个<code class="gatsby-code-text">IO</code>。我把这里的返回值都写成了概念性的，这样就更加直观；不过实际的返回值是<code class="gatsby-code-text">{ effect: [Function] }</code>。当调用<code class="gatsby-code-text">IO</code>的 <code class="gatsby-code-text">map</code>的时候，我们把传进来的函数放在了<code class="gatsby-code-text">map</code>函数里的组合的最末端（也就是最左边），反过来这个函数就成为了新的<code class="gatsby-code-text">IO</code> 的新<code class="gatsby-code-text">effect</code>，并继续下去。传给<code class="gatsby-code-text">map</code>的函数并没有运行，我们只是把它们压到一个<strong>运行栈</strong>的最末端而已，一个函数紧挨着另一个函数，就像小心摆放的多米诺骨牌一样，让人不敢轻易推倒。这种情形很容易叫人联想起“四人帮”（《设计模式》一书作者）提出的命令模式（command pattern）或者队列（queue）。</p>\n<p>好了，我们已经把野兽关进了笼子。但是，在某一时刻还是要把它放出来。因为对 IO 调用 map 已经积累了太多不纯的操作，最后再运行它无疑会打破平静。问题是在哪里，什么时候打开笼子的开关？而且有没有可能我们只运行 IO 却不让不纯的操作弄脏双手？答案是可以的，只要把责任推到调用者身上就行了。我们的纯代码，尽管阴险狡诈诡计多端，但是却始终保持一副清白无辜的模样，反而是实际运行 IO 并产生了作用的调用者，背了黑锅。来看一个具体的例子。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">ioWindow\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'location\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'href\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>在没有执行<code class="gatsby-code-text">run</code>函数之前，我们所有的代码都是<code class="gatsby-code-text">纯的</code>,我们最后让<code class="gatsby-code-text">run</code>函数来背黑锅。</p>\n<p>IO 会成为一个忠诚的伴侣，帮助我们驯化那些狂野的非纯操作</p>\n<blockquote>\n<p>也可以说IO相当于一定程度上的lazy Box</p>\n</blockquote>\n<h3 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h3>\n<p>我们已经认识了几个不同的 functor，但它们的数量其实是无限的。有一些值得注意的可迭代数据类型（iterable data structure）我们没有介绍，像 tree、list、map 和 pair 等，以及所有你能说出来的。eventstream 和 observable 也都是 functor。</p>\n<p>用多个 functor 参数调用一个函数怎么样呢？处理一个由不纯的或者异步的操作组成的有序序列怎么样呢？要应对这个什么都装在盒子里的世界，目前我们工具箱里的工具还不全。下一章，我们将直奔 monad 而去。</p>',frontmatter:{title:"FP13：IO - keep code pure",img:"./img/2018-08-08.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"August 07, 2018",path:"blog/functional/2018-08-08-FP13-IO.md",slug:"/blog/2018/08/08/FP13-IO.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}}]}},pathContext:{slug:"/blog/2018/08/08/FP13-IO.html"}}}});