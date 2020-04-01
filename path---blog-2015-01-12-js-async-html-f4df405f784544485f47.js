webpackJsonp([87567455114222],{437:function(n,a){n.exports={data:{markdownRemark:{html:'<p>事实上，程序中<code class="gatsby-code-text">现在运行</code>的部门和<code class="gatsby-code-text">将来运行</code>的部分之间的关系就是异步编程的核心，毫无疑问，从一开始，Javascript就是涉及到异步编程，但是多数JavaScript开发者从来没有认真思考过自己程序中的异步到底是如何出现的，以及其为什么会出现，页没有探索过处理异步的方法。因为一直以来，低调的回调函数就算是足够好的方法了，但是随着异步应用越来越广泛，对多个异步的管理也越来越复杂，诸如：<code class="gatsby-code-text">回调地狱</code>等问题，这迫切的需要更强大，更合理的异步编程的方法。</p>\n<blockquote>\n<p>任何时候主要把一段代码包装成一个函数，并指定它在将来的某个事件(定时器，鼠标点击，ajax响应等)时执行，你就是在代码中创建了一个将来执行的块，也就由此在这个程序中引入了异步机制。</p>\n</blockquote>\n<p>对JavaScript有个很模糊的印象，它是单线程异步的。本文主要来说说JavaScript到底是怎么运行的。但在这之前，让我们先理一下这些概念（现学现卖）。</p>\n<h3 id="基本概念"><a href="#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>基本概念</h3>\n<h4 id="线程与进程"><a href="#%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>线程与进程</h4>\n<p>进程(Process)是系统资源分配和调度的单元。一个运行着的程序就对应了一个进程。一个进程包括了运行中的程序和程序所使用到的内存和系统资源。如果是单核CPU的话，在同一时间内，有且只有一个进程在运行。</p>\n<p>但是，单核CPU也能实现多任务同时运行，比如你边听网易云音乐的每日推荐歌曲，边在网易有道云笔记上写博文。这算开了两个进程（多进程），那运行的机制就是一会儿播放一下歌，一会儿响应一下你的打字，但由于CPU切换的速度很快，你根本感觉不到，以至于你认为这两个进程是在同时运行的。进程之间是资源隔离的。</p>\n<p>那线程(Thread)是什么？线程是进程下的执行者，一个进程至少会开启一个线程（主线程），也可以开启多个线程。比如网易云音乐一边播放音频，一边显示歌词。多进程的运行其实也就是通过进程中的线程来执行的。一个进程下的线程是共享资源的。当多个线程同时操作同一个资源的时候，就出现资源争抢的问题。这又是另外一个问题了。</p>\n<h4 id="并行与并发"><a href="#%E5%B9%B6%E8%A1%8C%E4%B8%8E%E5%B9%B6%E5%8F%91" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>并行与并发</h4>\n<p>并行(Parallelism)是指程序的运行状态，在同一个时间内有几件事情并行在处理。由于一个线程在同一时间只能处理一件事情，所以并行需要多个线程在同一时间执行多件事情。</p>\n<p>而并发(Concurrency)是指程序的设计结构，在同一时间内多件事情能被交替地处理。重点是，在某个时间内只有一件事情在执行。比如单核CPU能实现多任务运行的过程就是并发的。</p>\n<h4 id="同步与异步"><a href="#%E5%90%8C%E6%AD%A5%E4%B8%8E%E5%BC%82%E6%AD%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>同步与异步</h4>\n<p>同步异步是指程序的行为。同步(Synchronous)是程序发出调用的时候，一直等待直到返回结果，没有结果之前不会返回。也就是说，同步是调用者主动等待调用过程。</p>\n<p>异步(Asynchronous)是发出调用之后，马上返回，但是不会马上返回结果。调用者不必主动等待，当被调用者得到结果之后会主动通知调用者。</p>\n<p>举个例子，去奶茶店买饮料。同步就是，一个顾客说出需求（请求），然后一直等着服务员做好饮料，顾客拿到自己点的饮料之后才离开；然后下一个顾客继续重复上述过程。异步就是，顾客先排队点单，点完之后拿着单子在一边，等服务员做好之后会叫号，叫到你了你去拿就好。</p>\n<p>所以线程跟同步异步没有直接的关系，单线程也是可以实现异步的。至于实现的方式，下面会具体说到。</p>\n<blockquote>\n<p>异步和并行常常被混为一谈，但实际上他们的意义完全不同。记住，异步是关于<code class="gatsby-code-text">现在和将来</code>的时间间隙，而并行是关于<code class="gatsby-code-text">能够同时发生的事情</code>.</p>\n<p><code class="gatsby-code-text">并行</code>类似与《彗星来前那一夜》中的平行宇宙，而<code class="gatsby-code-text">异步</code>类似于《明日边缘》中未来可能发生的事情</p>\n</blockquote>\n<p>并行计算最常见的工具就是<code class="gatsby-code-text">进程</code>与<code class="gatsby-code-text">线程</code>，进程与线程独立运行，并可能同时运行：在不同的处理器上，甚至在不同的计算机上，但多个线程能够共享单个进程的内存。</p>\n<p>与之相对的是，事件循环把自身的工作分成一个个任务并顺利执行，不允许对共享内存的并行访问和修改。</p>\n<p>多线程编程是非常复杂的。因为如果不通过特殊的步骤来防止这种中断和交错运行的话，可能会得到出乎意料的、不确定的行为，这通常让人头疼。</p>\n<p>JavaScript从不跨线程共享数据，这意味着不需要考虑这一层次的不确定性。但是这并不意味着JavaScript总是确定性的。例如：两个Ajax的callBack都操作通一个变量，永远无法确定，到底是哪一个先操作，哪一个是后操作，这被称为<code class="gatsby-code-text">竞态条件(race condition)</code>,详见<a href="/blog/2017/11/15/FP4-Pure-function.html#the-trouble-with-shared-state">函数式编程篇章</a></p>\n<h4 id="阻塞与非阻塞"><a href="#%E9%98%BB%E5%A1%9E%E4%B8%8E%E9%9D%9E%E9%98%BB%E5%A1%9E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>阻塞与非阻塞</h4>\n<p>阻塞与非阻塞是指等待状态。阻塞(Blocking)是指调用在等待的过程中线程被“挂起”（CPU资源被分配到其他地方去了）。</p>\n<p>非阻塞(Non-blocking)是指等待的过程CPU资源还在该线程中，线程还能做其他的事情。</p>\n<p>以刚才排队买饮料的例子，阻塞就是你在等待的时候什么事情也做不了，而非阻塞是你在等待的时候可以管自己先做其他的事情。</p>\n<p>所以，同步可以阻塞也可以非阻塞，异步可以阻塞也可以非阻塞。</p>\n<h3 id="单线程的js"><a href="#%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84js" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>单线程的JS</h3>\n<p>大概理清楚上述概念之后呢，就知道单线程和异步是没有矛盾的。那JS是如何执行的呢？JS其实就是一门语言，说是单线程还是多线程得结合具体运行环境。JS的运行通常是在浏览器中进行的，具体由JS引擎去解析和运行。下面我们来具体了解一下浏览器。</p>\n<h4 id="浏览器"><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>浏览器</h4>\n<p>目前最为流行的浏览器为：Chrome，IE，Safari，FireFox，Opera。浏览器的内核是多线程的。一个浏览器通常由以下几个常驻的线程：</p>\n<ul>\n<li>渲染引擎线程：顾名思义，该线程负责页面的渲染</li>\n<li>JS引擎线程：负责JS的解析和执行</li>\n<li>定时触发器线程：处理定时事件，比如setTimeout, setInterval</li>\n<li>事件触发线程：处理DOM事件</li>\n<li>异步http请求线程：处理http请求</li>\n</ul>\n<p>需要注意的是，渲染线程和JS引擎线程是不能同时进行的。渲染线程在执行任务的时候，JS引擎线程会被挂起。因为JS可以操作DOM，若在渲染中JS处理了DOM，浏览器可能就不知所措了。</p>\n<h4 id="js引擎"><a href="#js%E5%BC%95%E6%93%8E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JS引擎</h4>\n<p>通常讲到浏览器的时候，我们会说到两个引擎：渲染引擎和JS引擎。渲染引擎就是如何渲染页面，Chrome／Safari／Opera用的是Webkit引擎，IE用的是Trident引擎，FireFox用的是Gecko引擎。不同的引擎对同一个样式的实现不一致，就导致了经常被人诟病的浏览器样式兼容性问题。这里我们不做具体讨论。</p>\n<p>JS引擎可以说是JS虚拟机，负责JS代码的解析和执行。通常包括以下几个步骤：</p>\n<ul>\n<li>词法分析：将源代码分解为有意义的分词</li>\n<li>语法分析：用语法分析器将分词解析成语法树</li>\n<li>代码生成：生成机器能运行的代码</li>\n<li>代码执行</li>\n</ul>\n<p>不同浏览器的JS引擎也各不相同，Chrome用的是V8，FireFox用的是SpiderMonkey，Safari用的是JavaScriptCore，IE用的是Chakra。</p>\n<p>回到JS是单线程这句话，本质上来说，是浏览器在运行时只开启了一个JS引擎线程来解析和执行JS。那为什么只有一个引擎呢？如果同时有两个线程去操作DOM，浏览器是不是又要不知所措了？！</p>\n<h3 id="js运行机制"><a href="#js%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JS运行机制</h3>\n<p>说了这么多之后，终于我们要说到JS的整个运行过程了。</p>\n<h4 id="同步执行"><a href="#%E5%90%8C%E6%AD%A5%E6%89%A7%E8%A1%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>同步执行</h4>\n<p>我们先看下JS同步执行过程是怎么做到的？这就涉及到了一个很重要的概念——执行上下文。</p>\n<p>执行上下文记录了代码运行时的环境，当前运行状态下有且有一个执行上下文在起作用。那执行上下文到底记录了什么呢？大概有词法环境，变量环境等。举个简单的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> z <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>代码运行，首先进入全局上下文。然后执行<code class="gatsby-code-text">foo()</code>的时候，就进入了<code class="gatsby-code-text">foo上下文</code>，当然此时全局上下文还在。当执行<code class="gatsby-code-text">bar()</code>的时候，又进入了<code class="gatsby-code-text">bar上下文</code>。执行完毕<code class="gatsby-code-text">bar()</code>，回到<code class="gatsby-code-text">foo上下文</code>。执行完<code class="gatsby-code-text">foo()</code>，又回到全局上下文。所以，执行过程执行上下文会形成一个调用栈(Call stack)，先进后出。</p>\n<p>在JS执行过程中，有且仅有一个执行上下文在起作用。因为JS是单线程的，一次只能做一件事。</p>\n<p>以上的过程都是同步执行的。 </p>\n<h4 id="异步执行事件循环"><a href="#%E5%BC%82%E6%AD%A5%E6%89%A7%E8%A1%8C%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>异步执行——事件循环</h4>\n<p>我们回顾一下JS中自带了哪些原生的异步事件：</p>\n<ul>\n<li>setTimeout</li>\n<li>setInterval</li>\n<li>事件监听</li>\n<li>Ajax请求</li>\n</ul>\n<p>JS异步的效果得益于浏览器的执行环境。实际上，浏览器又开了线程来处理这些BOM事件。举例：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>按照上一节的分析，首先进入全局上下文，运行至<code class="gatsby-code-text">foo()</code>，进入了<code class="gatsby-code-text">foo上下文环境</code>；执行<code class="gatsby-code-text">console.log(1)</code>，控制台输出1；foo上下文环境出栈，运行至<code class="gatsby-code-text">setTimeout</code>，交给浏览器的定时处理线程；运行至<code class="gatsby-code-text">bar()</code>，进入了<code class="gatsby-code-text">bar上下文环境</code>；执行<code class="gatsby-code-text">console.log(2)</code>，控制台输出2；foo上下文环境出栈；等到浏览器线程执行完<code class="gatsby-code-text">setTimeout</code>，返回<code class="gatsby-code-text">cb()</code>回调函数至当前任务队列；当发现执行栈为空时，浏览器的JS引擎会执行一次循环，将事件队列的队首出队至JS执行栈中；执行<code class="gatsby-code-text">cb()</code>，进入<code class="gatsby-code-text">cb上下文环境</code>；执行<code class="gatsby-code-text">console.log(3)</code>，控制台输出3；事件队列为空，全局上下文出栈。</p>\n<p>以上就是JS引擎的事件循环机制，是实现异步的一种机制。主要涉及到浏览器线程，任务队列以及JS引擎。所以，我们可以看出，JS的异步请求，借助了而它所在的运行环境浏览器来处理并且返回结果。而且，这也解释了为什么那些回调函数的this指向window，因为这些异步的代码都是在全局上下文环境下执行的。</p>',frontmatter:{title:"JS单线程异步",img:"./img/2013-09-12.jpg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"January 11, 2015",path:"blog/async/2015-01-12-js-async.md",slug:"/blog/2015/01/12/js-async.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}}]}},pathContext:{slug:"/blog/2015/01/12/js-async.html"}}}});