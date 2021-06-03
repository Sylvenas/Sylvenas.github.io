webpackJsonp([0x64cc5dda6e54],{667:function(n,s){n.exports={data:{markdownRemark:{html:'<p>在我们认识纯函数之前，我们来仔细审视一下函数的概念，或许从另外一种角度来观察函数，可以让我么更加容易的理解函数式编程的理念。</p>\n<p><strong>What is a Function?</strong> 函数是一组执行任务和计算值的过程，一个函数由称为函数体的一系列语句组成，函数包括函数的的输入参数(<code class="gatsby-code-text">arguments</code>),计算得出的输出结果(<code class="gatsby-code-text">return value</code>);函数可以有以下用途：</p>\n<ul>\n<li><strong>Mapping</strong>:根据输入参数生成一些输出数据。一个函数将输入值映射到输出值。</li>\n<li><strong>Procedures</strong>:可以调用一个函数来执行一系列的步骤。这个序列被称为一个过程，这种风格的编程模式，被称为面向过程编程。</li>\n<li><strong>I/O</strong>:有些函数可以与系统其他部分通信，比如：数据存储，打印日志，数据请求等等。</li>\n</ul>\n<h3 id="mapping"><a href="#mapping" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mapping</h3>\n<p>纯函数全部都是映射。纯函数把输入参数映射到返回值，意味着每一个输入的参数集，都有一个对应的输出。\n<code class="gatsby-code-text">Math.max()</code>函数的输入参数是一组数字，返回值为最大的数字。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">//8</span></code></pre>\n      </div>\n<p>在这个例子中1，5，8是输入参数，<code class="gatsby-code-text">Math.max()</code>函数的作用是把输入参数里的最大数，作为结果返回，例子中的8是传入的最大的数字，并被作为结果返回。\n函数在计算机和数学领域都是非常重要的，可以帮助我们更好的处理数据。一个好的开发人员应当给函数语义化的命名，方便其他开发人员看到函数名字的时候，就能明白这个函数的作用。\n数学中的函数和JavaScript中的函数工作方式类似，在数学中我们都见过这样的函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-math"><code class="gatsby-code-math">f(x) = 2x;</code></pre>\n      </div>\n<p>上面函数的意思是：命名了一个名为f的函数，并接收一个名为x的参数，并将x乘2作为计算结果。\n如果要使用这个函数，只要给x一个具体的值就可以了。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-math"><code class="gatsby-code-math">f(2)</code></pre>\n      </div>\n<p>在数学中，上面的表达式<code class="gatsby-code-text">f(2)</code>和4是完全相同的，那么在其他你能看到<code class="gatsby-code-text">f(2)</code>的地方都可以用4进行等价替换。\n现在我们用JavaScript的语法重写一下上面的逻辑：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">double</span> <span class="token operator">=</span> x <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>你可以使用<code class="gatsby-code-text">console.log()</code>方法打印上面函数的返回值：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span></code></pre>\n      </div>\n<p>在上面的数学描述中，我们可以使用<code class="gatsby-code-text">4</code>来替换<code class="gatsby-code-text">f(2)</code>，同样的在JavaScript程序中，我们可以直接使用函数执行的结果<code class="gatsby-code-text">10</code>来替换<code class="gatsby-code-text">double(5)</code>。</p>\n<p>所以，<code class="gatsby-code-text">console.log(double(5))</code>和<code class="gatsby-code-text">console.log(10)</code>是完全相同的。</p>\n<p>上面的替换之所以是成立的，是因为<code class="gatsby-code-text">double</code>函数是一个纯函数，但是如果<code class="gatsby-code-text">double</code>函数有副作用的话，例如：函数内部保存数据到数据库或者打印了日志等等，这种情况下，我们就不再能用<code class="gatsby-code-text">10</code>替换<code class="gatsby-code-text">double(5)</code>,哪怕函数的返回值没有任何变化。</p>\n<blockquote>\n<p>如果一段代码可以替换成它执行所得的结果，而且是在不改变整个程序行为的前提下替换的，那么我们就说这段代码是引用透明(referential transparency)的.</p>\n</blockquote>\n<h3 id="pure-functions"><a href="#pure-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pure Functions</h3>\n<p>在计算机编程中，假如满足下面这两个条件的约束，一个函数可以被描述为一个纯函数(pure function)</p>\n<ul>\n<li>给出相同的参数，那么函数的返回值一定相同。该函数结果值不依赖任何隐藏信息或程序执行处理可能改变的状态，也不能依赖于任何来自I/O的外部输入。</li>\n<li>在对函数返回值的计算过程中，不会产生任何语义上可观察的副作用或输出，例如对象的变化或者输出到I/O的操作。</li>\n</ul>\n<p>如果程序的需求可以通过纯函数来实现，那么我们更建议你优先使用纯函数。纯函数需要一些输入参数并根据输入值返回一些输出。纯函数是一段程序中最简单的可重用代码块，计算机科学中有一条重要的设计理念就是KISS(保持简单，Keep It Simple, Stupid)，毫无疑问，纯函数是一段及其简单的代码块。</p>\n<p>纯函数有很多实用的属性，构成了函数式编程的基础。</p>\n<p>纯函数不依赖于任何外部状态，也不修改任何外部状态。使得纯函数完全独立于外部环境，自然也就避免了共享可变状态所带来的错误。这样的代码便于进行推理计算，不容易出错。这使得代码在移动、重构、重新组织、单元测试和代码调试都变的非常更简单。</p>\n<p>纯函数的不可变性所带来的另一个好处是：由于(多个线程之间)不共享状态，不会造成资源争用(Race condition),也就不需要用锁来保护可变状态，也就不会出现死锁，这样可以更好的处理并发。     </p>\n<p>尤其是在对称多处理器(SMP)架构下能够更好的利用多个处理器(核)提供的并行处理能力。并行代码在服务端 js 环境以及使用了 <code class="gatsby-code-text">web worker</code> 的浏览器那里是非常容易实现的，因为它们使用了线程（thread）。不过出于对非纯函数复杂度的考虑，当前主流观点还是避免使用这种并行。   </p>\n<p>由于纯函数是引用透明的，以及函数式编程不像命令式编程那样关注执行步骤，这个系统提供了优化函数式程序的空间，例如惰性求值(通过延迟执行的方式，把某些数据缓存起来)。    </p>\n<h3 id="the-trouble-with-shared-state"><a href="#the-trouble-with-shared-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Trouble with Shared State</h3>\n<p>几年以前，我正开发一个音乐应用。这个应用允许用户查询音乐家的数据库，并将该艺术家的播放列表加载到一个网页播放器中。当用户输入查询条件时，会调用某个ajax，即时显示搜索结果。也就是基于ajax的自动完成。     </p>\n<p>但是，我们遇到了一个问题是用户的打字的速度常常超过了我们API完成自动查询的速度。这就导致了一些奇怪的bug,它会触发资源争用(Race condition),导致更新的建议会被过时的建议替换。    </p>\n<p>为什么会出现这种事情呢？这是因为每次访问ajax成功处理程序时，都会直接更新显示给用户的建议列表。最慢的那个ajax请求处理函数会直接修改UI,即使有时候被修改的UI是更新UI(更新的建议)。  </p>\n<p>为了解决这个问题，我创建了一个建议管理器—一个唯一的数据来源，来管理查询建议的状态。它知道当前还未完成的ajax请求，当用户输入一些新东西时，在新请求发出之前，未完成的ajax会被取消，这样每次就只有一个响应处理程序会触发UI的更新。   </p>\n<p>所有类型的异步操作或者并发都会导致类似的资源争用。如果输出取决于不可控制的时间顺序(比如：网络、设备延迟、用户输入、随机等)，那么资源争用就会发生。实际上，如果你正使用共享的状态，而该状态依赖于某些不确定的因素，那么，最终的结果将是不可预测的，也就是说，不能正确的预测和完全理解。<br>\n也许你认为既然JS是运行在单线程中，那么它对并行处理的问题应该免疫，所以不会导致资源争用。但是正如刚刚的ajax的示例，单线程的JS引擎并不意味着能够避免并发。相反，在JS中有很多并发的来源。I/O,事件监听，Web Worker,Timeout等等都会在程序中引入不确定性。如果这些和共享状态混合在一起的话，就有可能会导致一些bug.    </p>\n<p>纯函数可以帮你避免这些类型的bug.   </p>\n<h3 id="相同的输入，总会返回相同的输出"><a href="#%E7%9B%B8%E5%90%8C%E7%9A%84%E8%BE%93%E5%85%A5%EF%BC%8C%E6%80%BB%E4%BC%9A%E8%BF%94%E5%9B%9E%E7%9B%B8%E5%90%8C%E7%9A%84%E8%BE%93%E5%87%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>相同的输入，总会返回相同的输出</h3>\n<p>上面例子中的<code class="gatsby-code-text">double</code>函数，你可以直接使用函数的值来替代函数调用，这在程序看来没有任何不一样。也就是说在程序中，不管上下文时什么，不管调用多少次，不管什么时候调用，<code class="gatsby-code-text">double(5)</code>和<code class="gatsby-code-text">10</code>没有任何不一样。<br>\n很明显，这并不适用于所有的函数。有些函数的输出结果依赖于其他信息，而不是传进来的参数。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 0.4011148700956255</span>\nMath<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 0.8533405303023756</span>\nMath<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 0.3550692005082965</span></code></pre>\n      </div>\n<p>即使没有给函数传递任何参数，产生的输出也都不相同，也就是说<code class="gatsby-code-text">Math.random</code>并非是一个纯函数。每次执行<code class="gatsby-code-text">Math.random()</code>,都会生成一个0到1的随机数，所以很显然，你没用发<code class="gatsby-code-text">0.4011148700956255</code>来替换<code class="gatsby-code-text">Math.random()</code>，并且不改变程序的含义。当我们要求计算机生成一个随机数时，通常意味着我们想要的是一个与最后一次的到的数不同的结果。如果骰子的每一边印的都是同样的数字，那么骰子又有什么意义呢？<br>\n有时候我们需要计算机给出当前时间，如下代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">time</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// => "5:15:45 PM"</span></code></pre>\n      </div>\n<p>如果用当<code class="gatsby-code-text">&quot;5:15:45 PM&quot;</code>替换<code class="gatsby-code-text">time()</code>函数调用会发生什么呢？也就是说，它每天只有一次会产生正确的输出，而且只有在函数调用被替换的那一刻才会正确。\n所以很显然，<code class="gatsby-code-text">time()</code>和<code class="gatsby-code-text">double()</code>不一样。     </p>\n<p><strong>一个函数需要满足：只要给出相同输入，总是会产生相同输出的时候</strong>，才是纯函数，你可能还记得数学中的这条规则：相同的输入值总是会映射到相同的输出值。不过，这里的输入值，可以是一个值，也可以时一组值。例如：如下的函数时纯函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">highpass</span> <span class="token operator">=</span> <span class="token punctuation">(</span>cutoff<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">>=</span> cutoff<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>相同的输入值总会映射到相同的输出值：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">highpass</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>\n<span class="token function">highpass</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>\n<span class="token function">highpass</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span></code></pre>\n      </div>\n<h3 id="pure-functions-produce-no-side-effects"><a href="#pure-functions-produce-no-side-effects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pure Functions Produce No Side Effects</h3>\n<p>纯函数不会产生副作用，也就是说他不能改变内核外部的状态。     </p>\n<h4 id="immutability"><a href="#immutability" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Immutability</h4>\n<p>JavaScript函数的参数时按引用传递的，也就是说，如果函数内部修改了对象参数或者数组参数上的属性，那么它就会修改函数外部的状态。然而<strong>纯函数不能修改外部状态</strong>。<br>\n考虑如下<code class="gatsby-code-text">addToCart()</code>函数，该函数时一个非纯函数，会修改外部状态：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 非纯函数的 addToCart 会修改已有的购物车</span>\n<span class="token keyword">const</span> <span class="token function-variable function">addToCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span>cart<span class="token punctuation">,</span> item<span class="token punctuation">,</span> quantity<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  cart<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    item<span class="token punctuation">,</span>\n    quantity\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> cart<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>通过传进一个购物车，商品，商品数量作为参数，然后函数返回同一个购物车，购物车里带有刚刚新增的商品。<br>\n现在会导致的问题是，我们刚刚修改了一些共享的状态。其他函数可能依赖于<code class="gatsby-code-text">addToCart</code>函数被条用之前的该购物车对象的状态，而我们现在已经修改了这个共享的状态，就不得不考虑一下它会对程序逻辑产生什么样的影响。<br>\n现在考虑如下版本：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 纯函数 addToCart() 返回一个新购物车，不会修改原始购物车</span>\n<span class="token keyword">const</span> <span class="token function-variable function">addToCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span>cart<span class="token punctuation">,</span> item<span class="token punctuation">,</span> quantity<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> newCart <span class="token operator">=</span> lodash<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>cart<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  newCart<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    item<span class="token punctuation">,</span> \n    quantity\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> newCart<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>在本例中，有一个数组嵌套在一个对象中，这是为什么我要做神拷贝的原因。在实际情况霞，你可以把它分解成更小的块。   </p>\n<p>例如：redux会让你合并reducer,而不是在每一个reducer中处理整个应用程序的状态。这样做的结果是。你不必在每次只想更新一小部分的时候，为整个应用程序的状态创建一个深拷贝。而是使用非破坏性的<code class="gatsby-code-text">Object.assign()</code>,来更新应用状态的一小部分。</p>',frontmatter:{title:"FP4：Pure function",img:"./img/2017-11-15.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"November 14, 2017",path:"blog/functional/2017-11-15-FP4-Pure-function.md",slug:"/blog/2017/11/15/FP4-Pure-function.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"shell intro"},fields:{slug:"/blog/2021/06/02/shell-intro.html"}}},{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}}]}},pathContext:{slug:"/blog/2017/11/15/FP4-Pure-function.html"}}}});