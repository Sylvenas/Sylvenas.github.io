webpackJsonp([0x76ab077dc7e2],{645:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="event-loop"><a href="#event-loop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Event Loop</h3>\n<h4 id="单线程"><a href="#%E5%8D%95%E7%BA%BF%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>单线程</h4>\n<p>我们常说“JavaScript是单线程的”。</p>\n<p>所谓单线程，是指在JS引擎中负责解释和执行JavaScript代码的线程只有一个。不妨叫它<strong>主线程</strong>。</p>\n<p>但是实际上还存在其他的线程。例如：处理AJAX请求的线程、处理DOM事件的线程、定时器线程、读写文件的线程(例如在Node.js中)等等。这些线程可能存在于JS引擎之内，也可能存在于JS引擎之外，在此我们不做区分。不妨叫它们<strong>工作线程</strong>。</p>\n<h4 id="同步与异步"><a href="#%E5%90%8C%E6%AD%A5%E4%B8%8E%E5%BC%82%E6%AD%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>同步与异步</h4>\n<p>假设存在一个函数A：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token constant">A</span><span class="token punctuation">(</span>args<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>同步</strong>：如果在函数A返回的时候，调用者就能够得到预期结果(即拿到了预期的返回值或者看到了预期的效果)，那么这个函数就是同步的。</p>\n<p>例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Hi\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>\n<p>第一个函数返回时，就拿到了预期的返回值：2的平方根。</p>\n</li>\n<li>\n<p>第二个函数返回时，就看到了预期的效果：在控制台打印了一个字符串。</p>\n</li>\n</ul>\n<p>所以这两个函数都是同步的。</p>\n<p><strong>异步</strong>：如果在函数A返回的时候，调用者还不能够得到预期结果，而是需要在将来通过一定的手段得到，那么这个函数就是异步的。\n例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">\'foo.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'utf8\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>在上面的代码中，我们希望通过<code class="gatsby-code-text">fs.readFile</code>函数读取文件<code class="gatsby-code-text">foo.txt</code>中的内容，并打印出来。\n但是在<code class="gatsby-code-text">fs.readFile</code>函数返回时，我们期望的结果并不会发生，而是要等到文件全部读取完成之后。如果文件很大的话可能要很长时间。</p>\n<p>下面以AJAX请求为例，来看一下同步和异步的区别：</p>\n<ul>\n<li>\n<p>异步AJAX：</p>\n<ul>\n<li>\n<p>主线程：“你好，AJAX线程。请你帮我发个HTTP请求吧，我把请求地址和参数都给你了。”</p>\n</li>\n<li>\n<p>AJAX线程：“好的，主线程。我马上去发，但可能要花点儿时间呢，你可以先去忙别的。”</p>\n</li>\n<li>\n<p>主线程：：“谢谢，你拿到响应后告诉我一声啊。”</p>\n</li>\n<li>\n<p>(接着，主线程做其他事情去了。一顿饭的时间后，它收到了响应到达的通知。)</p>\n</li>\n</ul>\n</li>\n<li>\n<p>同步AJAX：</p>\n<ul>\n<li>\n<p>主线程：“你好，AJAX线程。请你帮我发个HTTP请求吧，我把请求地址和参数都给你了。”</p>\n</li>\n<li>\n<p>AJAX线程：“…”</p>\n</li>\n<li>\n<p>主线程：：“喂，AJAX线程，你怎么不说话？”</p>\n</li>\n<li>\n<p>AJAX线程：“…”</p>\n</li>\n<li>\n<p>主线程：：“喂！喂喂喂！”</p>\n</li>\n<li>\n<p>AJAX线程：“…”</p>\n</li>\n<li>\n<p>(一炷香的时间后)</p>\n</li>\n<li>\n<p>主线程：：“喂！求你说句话吧！”</p>\n</li>\n<li>\n<p>AJAX线程：“主线程，不好意思，我在工作的时候不能说话。你的请求已经发完了，拿到响应数据了，给你。”</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>正是由于JavaScript是单线程的，而异步容易实现非阻塞，所以在JavaScript中对于耗时的操作或者时间不确定的操作，使用异步就成了必然的选择。</p>\n<p>任何时候，只要把一段代码包装成一个函数，并指定它在响应某个事件(定时器、鼠标点击、Ajax响应等)时执行，你就是在代码中创建了一个<code class="gatsby-code-text">将来</code>执行得块，那么实际上就是程序中引入了<code class="gatsby-code-text">异步机制</code>。</p>\n<h4 id="异步过程的构成要素"><a href="#%E5%BC%82%E6%AD%A5%E8%BF%87%E7%A8%8B%E7%9A%84%E6%9E%84%E6%88%90%E8%A6%81%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>异步过程的构成要素</h4>\n<p>从上文可以看出，异步函数实际上很快就调用完成了。但是后面还有工作线程执行异步任务、通知主线程、主线程调用回调函数等很多步骤。我们把整个过程叫做异步过程。异步函数的调用在整个异步过程中，只是一小部分。</p>\n<p>总结一下，一个异步过程通常是这样的：</p>\n<p><strong>主线程发起一个异步请求，相应的工作线程接收请求并告知主线程已收到(异步函数返回)；主线程可以继续执行后面的代码，同时工作线程执行异步任务；工作线程完成工作后，通知主线程；主线程收到通知后，执行一定的动作(调用回调函数)。</strong></p>\n<p>异步函数通常具有以下的形式：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token constant">A</span><span class="token punctuation">(</span>args<span class="token operator">...</span><span class="token punctuation">,</span> callbackFn<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>它可以叫做异步过程的<code class="gatsby-code-text">发起函数</code>，或者叫做<code class="gatsby-code-text">异步任务注册函数</code>。args是这个函数需要的参数。callbackFn也是这个函数的参数，但是它比较特殊所以单独列出来。</p>\n<p>所以，从主线程的角度看，一个异步过程包括下面两个要素：</p>\n<ul>\n<li>\n<p>发起函数(或叫注册函数)A</p>\n</li>\n<li>\n<p>回调函数callbackFn</p>\n</li>\n</ul>\n<p>它们都是在主线程上调用的，其中<strong>注册函数用来发起异步过程，回调函数用来处理结果</strong>。</p>\n<p>举个具体的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>其中的setTimeout就是异步过程的发起函数，fn是回调函数。</p>\n<p>注意：前面说的形式A(args…, callbackFn)只是一种抽象的表示，并不代表回调函数一定要作为发起函数的参数，例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nxhr<span class="token punctuation">.</span>onreadystatechange <span class="token operator">=</span> xxx<span class="token punctuation">;</span> <span class="token comment">// 添加回调函数</span>\nxhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">\'GET\'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>\nxhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 发起函数</span></code></pre>\n      </div>\n<p>发起函数和回调函数就是分离的。</p>\n<h4 id="消息队列和事件循环"><a href="#%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%92%8C%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>消息队列和事件循环</h4>\n<p>现在让我们澄清一件事情(可能令人震惊)：尽管你显然能够编写异步JavaScript代码，但是直到ES6的出现，JavaScript才真正内建有直接的异步概念。</p>\n<p>什么?！这种说法似乎很疯狂，对不对？但事实就是这样。JavaScript引擎本身所做的只不过在需要的时候，在给定的任意时刻执行程序中的单个代码块。</p>\n<p>需要？谁的需要？这正是关键所在！</p>\n<p>JavaScript引擎并不是独立运行的，它运行在<code class="gatsby-code-text">宿主环境</code>中，对多数开发者来说就是web浏览器和node.js(实际上JavaScript现在已经嵌入到了从机器人到电灯泡等各种各样的设备中)。</p>\n<p>但是所有的这些环境都有一个共同的“点”，即他们都提供可一种机制来处理程序中的多个块的执行，并且执行每块时调用JavaScript引擎来执行代码，这种机制被称为<strong>事件循环</strong>。</p>\n<p>换句话说，JavaScript引擎本身并没有时间的概念，只是一个按需执行JavaScript任意代码块的工具。“事件”(JavaScript代码执行)调度总是由包含它的环境进行。</p>\n<blockquote>\n<p>前面提到的“直到最近”，是指ES6从本质上改变了在哪里管理事件循环。本来它几乎已经是一种正式的技术模型了，但现在ES6精确指定了事件循环的工作细节，这意味在机上将其纳入了JavaScript引擎的势力范围，而不只是由宿主环境来管理。这个改变的主要原因是ES6中Promise的引入，因为这项技术要求对事件循环队列的调度能够直接进行精细控制。</p>\n</blockquote>\n<p>上文讲到，异步过程中，工作线程在异步操作完成后需要通知主线程。那么这个通知机制是怎样实现的呢？答案是利用消息队列和事件循环。</p>\n<p>用一句话概括：</p>\n<p><strong>工作线程将消息放到消息队列，主线程通过事件循环过程去取消息。</strong></p>\n<ul>\n<li>\n<p><strong>消息队列：</strong>消息队列是一个先进先出的队列，它里面存放着各种消息。</p>\n</li>\n<li>\n<p><strong>事件循环：</strong>事件循环是指主线程重复从消息队列中取消息、执行的过程。</p>\n</li>\n</ul>\n<p>实际上，主线程只会做一件事情，就是从消息队列里面取消息、执行消息，再取消息、再执行。当消息队列为空时，就会等待直到消息队列变成非空。而且主线程只有在将当前的消息执行完成后，才会去取下一个消息。这种机制就叫做<strong>事件循环机制</strong>，<strong>取一个消息并执行的过程叫做一次循环</strong>。</p>\n<p>事件循环用代码表示大概是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> message <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">execute</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>那么，消息队列中放的消息具体是什么东西？消息的具体结构当然跟具体的实现有关，但是为了简单起见，我们可以认为：</p>\n<p><strong>消息就是注册异步任务时添加的回调函数。</strong></p>\n<p>再次以异步AJAX为例，假设存在如下的代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">\'http://segmentfault.com\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'我是响应：\'</span><span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 其他代码</span>\n<span class="token operator">...</span>\n<span class="token operator">...</span>\n<span class="token operator">...</span></code></pre>\n      </div>\n<p>主线程在发起AJAX请求后，会继续执行其他代码。AJAX线程负责请求segmentfault.com，拿到响应后，它会把响应封装成一个JavaScript对象，然后构造一条消息：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 消息队列中的消息就长这个样子</span>\n<span class="token keyword">var</span> <span class="token function-variable function">message</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">callbackFn</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>其中的callbackFn就是前面代码中得到成功响应时的回调函数。\n主线程在执行完当前循环中的所有代码后，就会到消息队列取出这条消息(也就是message函数)，并执行它。到此为止，就完成了工作线程对主线程的通知，回调函数也就得到了执行。如果一开始主线程就没有提供回调函数，AJAX线程在收到HTTP响应后，也就没必要通知主线程，从而也没必要往消息队列放消息。</p>\n<p>用图表示这个过程就是：\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/event-loop-4592d4c138246cd3d8739e410ec117bb-103bb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 649px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.62403697996918%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAB40lEQVQoz4VQXWvbMBTN39sP6FP/xmCvexslj82adJSmGdue9lAYG22WFkbTjsGgdGmyJE79kcSOZVuWXcuybNnSJJzRpzFxEPdK53DPPQ0uhETJRSUhtqBFgUmGU8LKqn4pOU8zmuA0wUSSudQI0RC8FEWqSlEKwQRnkozjwNQmjrUoaKIeBeNVHvmONrnbrAzF5ZUSj62geTruXYPOwNo/W7TOH1pnDwd9/c3l8vBi2RmY7a/mQd94fa63B6roDcHJEDS/WAjnjZxxSIQTZkuQyMLHFSQ8piJMGUxLByaWG3kxRaTSlm5EuSRI6CCVGzVE7ZixjNTmlaW1648101htbu/nt6PJaKabK0dfA4ge671qohJTSufz+Ww2QwjJtsjSF+9/7bbvn3+Y7rTuXn0ydvZHLz9OnzV/7p3+9l0bhuhJLHOWMYYIVVylSDLqQxSgeG27mm46wPNhFITRfGHECa6qOult2tIDp5TAwFNjKQkDjxKcpUkUBht7HUehbAl+lF9qUCWTZzTPlVhz4lbfOLxcdi6s7pV79M0+vnJ7N37vxnv73X/3A8pb1hIn11536HaH4HgI9j7XaRfMBhDGGMB4ujAtG2RM/Au03AKlubTf+OufRyh0Nw4MfP601H/OH1B1WMp/o2onAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="page-unresponsive"\n        title=""\n        src="/static/event-loop-4592d4c138246cd3d8739e410ec117bb-103bb.png"\n        srcset="/static/event-loop-4592d4c138246cd3d8739e410ec117bb-f4ee9.png 210w,\n/static/event-loop-4592d4c138246cd3d8739e410ec117bb-813e2.png 420w,\n/static/event-loop-4592d4c138246cd3d8739e410ec117bb-103bb.png 649w"\n        sizes="(max-width: 649px) 100vw, 649px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>从上文中我们也可以得到这样一个明显的结论，就是：</p>\n<p><strong>异步过程的回调函数，一定不在当前这一轮事件循环中执行。</strong></p>\n<p>每一个消息完整的执行后，其它消息才会被执行。这为程序的分析提供了一些优秀的特性，包括：一个函数执行时，它永远不会被抢占，并且在其他代码运行之前完全运行（且可以修改此函数操作的数据）。这与C语言不同，例如，如果函数在线程中运行，它可能在任何位置被终止，然后在另一个线程中运行其他代码。</p>\n<p>这个模型的一个缺点在于当一个消息需要太长时间才能处理完毕时，Web应用就无法处理用户的交互，例如点击或滚动。浏览器用“程序需要过长时间运行”的对话框来缓解这个问题。一个很好的做法是缩短消息处理，并在可能的情况下将一个消息裁剪成多个消息。</p>\n<p>例如：函数<code class="gatsby-code-text">setTimeout</code>接受两个参数：待加入队列的消息和一个延迟（可选，默认为0）。这个延迟代表了消息被实际加入到队列的<code class="gatsby-code-text">最小延迟时间</code>。也就是说<code class="gatsby-code-text">setTimeout</code>并没有把回调函数直接挂在事件循环队列中，它所做的是设定一个定时器。当定时器到时后，宿主环境会把回调函数放在事件循环队列中。如果队列中没有其它消息，在这段延迟时间过去之后，消息会被马上处理。但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完(通常没有抢占的方式直接将其排到队首，所以它得排到其他项目之后)。因此第二个参数仅仅表示<strong>最少延迟时间，而非确切的等待时间</strong>，这也就解释了为什么<code class="gatsby-code-text">setTimeout</code>定时器的精度可能不高。</p>\n<blockquote>\n<p>一定要清楚，setTimeout(…)并没有直接把你的回调函数挂在事件循环队列中，它所做的时设定一个定时器。当定时器到时后，环境会把你的回调函数放在事件循环中，这样，顺序的排队执行</p>\n</blockquote>\n<h4 id="tasks--microtasks"><a href="#tasks--microtasks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>tasks &#x26; microtasks</h4>\n<p>以上的事件循环过程是一个宏观的表述，实际上因为异步任务之间并不相同，因此他们的执行优先级也有区别。不同的异步任务被分为两类：微任务(micro task)和宏任务(macro task，有时候也被称为task)。</p>\n<p>现在看一个一段代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'script start\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'setTimeout\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'promise1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'promise2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'script end\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>正确答案：<code class="gatsby-code-text">script start</code>, <code class="gatsby-code-text">script end</code>, <code class="gatsby-code-text">promise1</code>, <code class="gatsby-code-text">promise2</code>, <code class="gatsby-code-text">setTimeout</code></p>\n<blockquote>\n<p>可能某些老版本的浏览器执行的结果不是这样的,Microsoft Edge, Firefox 40, iOS Safari and desktop Safari 8.0.8之前的版本可能会先打印setTimeout，然后是<code class="gatsby-code-text">promise1</code>, <code class="gatsby-code-text">promise2</code>，不过现在所有厂商的新版本的浏览器执行的结果都是一样的，测试时间(2018.11.15)</p>\n</blockquote>\n<p>想要知道为什么会产生这样的结果，你需要知道事件循环如何处理tasks和microtasks,可能当你第一次遇到的这个问题的时候，会让你大吃一惊，但是现在我们会慢慢的解开谜题：</p>\n<p><strong>Tasks</strong>通常都是被放进一个队列，按照顺序执行，然后在每个Task执行的间隔区间，浏览器可能会执行更新DOM等等\n<strong>Microtasks</strong>通常被安排在当前正在执行的脚本执行完成之后马上执行，只要没有其他Javascript处于执行中，在每个Task结束的时候，都是顺序执行完成当前全部的microtasks，在microtasks执行期间，如果有其他的microtasks添加到microtasks队列中，也会等到新加入的microtasks执行完成，在执行下一个Task</p>\n<blockquote>\n<p>microtasks 类似于ES6中新增的任务队列(job queue)，主要是在Promise中用到,它是挂在事件循环队列的每个tick之后的一个队列。事件循环类似于一个游乐园游戏：玩过一哥游戏之后，你需要重新到队尾才能再玩一次，而任务队列类似于玩过了游戏之后，插队接着继续玩。但是一个job可能会引起更多的任务被添加到通一个队列末尾。所以理论上来说，任务循环(job loop)可能无限循环(一个任务总是添加另一个任务，以此类推)，进而导致程序的饿死，无法转移到下一个事件循环的tick,从概念上江，这和代码中的无限循环的体验几乎是一样的。</p>\n</blockquote>\n<p>以下事件属于Tasks:</p>\n<ul>\n<li>script全部代码</li>\n<li>setInterval()</li>\n<li>setTimeout()</li>\n<li>ajax</li>\n<li>DOM Event(鼠标、键盘、屏幕拖拽)</li>\n<li>UI render</li>\n</ul>\n<p>以下事件属于Microtasks:</p>\n<ul>\n<li>promiseFullfil</li>\n<li>promiseReject</li>\n<li>new MutaionObserver()</li>\n</ul>\n<p>看看这段代码在执行过程中的Task和Microtask的过程中，两个队列以及call stack的变化情况\n<img src="/d21de5604e9e2edf8e5a61e0d21350a8.gif" alt="event loop &#x26; call stack"></p>\n<h3 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h3>\n<p>事件循环的作用是查看调用栈并确定调用栈是否空闲。如果调用栈空闲，event loop 会查看消息队列是否有待处理的 callback 需要触发。例子中的消息队列只包含一个 callback，当调用栈为空的时候，event loop 会将 callback 推入调用栈中触发 networkRequest 的回调。</p>\n<p>事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。</p>',frontmatter:{title:"How JavaScript Work: Event Loop",img:"./img/2016-11-15.jpeg",author:["Sylvenas"],excerpt:null,catalogue:["单线程","同步与异步","异步过程的构成要素","消息队列和事件循环","tasks--microtasks"]},fields:{date:"November 14, 2016",path:"blog/async/2016-11-15-event-loop.md",slug:"/blog/2016/11/15/event-loop.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"shell intro"},fields:{slug:"/blog/2021/06/02/shell-intro.html"}}},{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}}]}},pathContext:{slug:"/blog/2016/11/15/event-loop.html"}}}});