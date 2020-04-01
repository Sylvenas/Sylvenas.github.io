webpackJsonp([0xc8555e39456e],{484:function(n,s){n.exports={data:{markdownRemark:{html:'<p>在我高中第一节程序设计课上，我被告知软件开发是”将复杂问题转化为较小问题，并组合简单的解决方案并形成完整的解决方案以解决复杂的问题的行为”。</p>\n<p>我感觉这些年最大的遗憾之一就是未能早日理解这句话的意思。我太晚才弄明白软件设计的本质。</p>\n<p>我接触过不少的开发人员，在和他们的交流中我了解到我并非个例。很少有现职软件开发人员很好地掌握了软件开发的本质。他们不知道手头现有的最重要的工具，或者如何善加利用它们。所有人一直在努力回答软件开发领域中最重要的两个问题：</p>\n<ul>\n<li>什么是函数组合</li>\n<li>什么是对象组合</li>\n</ul>\n<p>在工作中，就算你不知道上面的两个概念，你也不可能避开他们，并且你一直在做上面的两件事情-不过做的很糟糕。或许你编写的代码有更多的bug，或许让其他开发人员很难理解。这是个大问题，代价非常昂贵，很多时候维护软件所花费的时间，比重新开发他们还要多。</p>\n<h3 id="you-compose-software-every-day"><a href="#you-compose-software-every-day" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>You Compose Software Every Day</h3>\n<p>如果你是软件开发人员，无论你知道与否，其实你每天都在组合函数和数据结构。你要么有意识的做，要么在漫不经心的修修补补。</p>\n<p>软件开发过程就是将大问题分解成较小的问题，创建解决这些小问题的组件，然后将这些小组件组合在一起，形成一个完整的应用程序。</p>\n<h4 id="函数组合"><a href="#%E5%87%BD%E6%95%B0%E7%BB%84%E5%90%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>函数组合</h4>\n<p>函数组合是将一个函数应用到另一个函数输出的过程。在数学中，假设两个函数：<code class="gatsby-code-text">f</code>和<code class="gatsby-code-text">g</code>,<code class="gatsby-code-text">(f·g)(x) = f(g(x))</code>。这个圆点就是组合运算符。它通常被念成为”…与…组合”或者”…组合…之后”。你可以直接说”f与g组合等于x的g的f”,我们在<code class="gatsby-code-text">g</code>之后说<code class="gatsby-code-text">f</code>，是因为<code class="gatsby-code-text">g</code>先被求值，然后其输出作为一个参数传递给<code class="gatsby-code-text">f</code>。</p>\n<p>每次像这样编写代码时，就是在组合函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">doStuff</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> afterG <span class="token operator">=</span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> afterF <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>afterG<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> afterF<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span></code></pre>\n      </div>\n<p>每次使用<code class="gatsby-code-text">promise</code>的时候，就是在组合函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">wait</span> <span class="token operator">=</span> time <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    time\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">wait</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">20</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>value <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 42</span></code></pre>\n      </div>\n<p>同样，每次链接数组方法调用、lodash方法、observable(Rxjs等)，都是组合函数。如果你正在使用方法链，就是在组合函数。如果将返回值传递给其他函数，那么就是在组合。如果在一个序列中调用两个方法，就是使用<code class="gatsby-code-text">this</code>为输入数据来组合。</p>\n<p>如果我们能有意识的去组合函数，我们可以做的更好，我们可以将<code class="gatsby-code-text">doStuff()</code>函数改进为一行搞定：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> n <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">doStuffBetter</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">doStuffBetter</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span></code></pre>\n      </div>\n<p>对这种形式的一个常见的异议是，它更难调试。例如，我们如何使用函数组合的方式来写这个方法呢？</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">doStuff</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> afterG <span class="token operator">=</span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`after g: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> afterG <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> afterF <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>afterG<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`after f: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> afterF <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> afterF<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =></span>\n<span class="token comment">/*\n"after g: 21"\n"after f: 42"\n*/</span></code></pre>\n      </div>\n<p>首先，我们来把log<code class="gatsby-code-text">after f</code>,<code class="gatsby-code-text">after g</code>的操作抽象待一个<code class="gatsby-code-text">trace</code>的小工具中：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">trace</span> <span class="token operator">=</span> label <span class="token operator">=></span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> label <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> value <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>那么我们现在可以这样来使用：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">doStuff</span> <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> afterG <span class="token operator">=</span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">\'after g\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>afterG<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> afterF <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span>afterG<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">\'after f\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>afterF<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> afterF<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =></span>\n<span class="token comment">/*\n"after g: 21"\n"after f: 42"\n*/</span></code></pre>\n      </div>\n<p>如果使用lodash和ramda等热门的函数式编程库，可以让函数组合刚方便。你可以使用lodash的<code class="gatsby-code-text">pipe</code>方法来组合函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> pipe <span class="token keyword">from</span> <span class="token string">\'lodash/fp/flow\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> doStuffBetter <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>\n  g<span class="token punctuation">,</span>\n  <span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">\'after g\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  f<span class="token punctuation">,</span>\n  <span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">\'after f\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">doStuffBetter</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =></span>\n<span class="token comment">/*\n"after g: 21"\n"after f: 42"\n*/</span></code></pre>\n      </div>\n<p>如果你不想引入lodash，你可以这样定义<code class="gatsby-code-text">pipe</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// pipe(...fns: [...Function]) => x => y</span>\n<span class="token keyword">const</span> <span class="token function-variable function">pipe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">pipe()</code>创建一个函数的管道，把一个函数的输出传递给另一个函数作为输入，当使用pipe的时候，最大的特点是不需要中间变量。编写不涉及中间变量的代码的风格叫做<code class="gatsby-code-text">point-free style</code>，减少了中间变量也就减少了很多不必要的复杂性。</p>\n<p>减少复杂性的几个好处：</p>\n<ul>\n<li>工作记忆\n人脑平均只有少量共享资源用于<a href="http://www.nature.com/neuro/journal/v17/n3/fig_tab/nn.3655_F2.html">工作记忆(Working Memeory)</a>中的离散量子，而每个变量潜在地消耗这些量子之一。随着更多变量的添加，我们精确回忆每个变量含义的能力就会降低。工作记忆模型通常涉及4-7个离散量子。超过这些数字的话，错误率就会显着增加。</li>\n</ul>\n<p>使用管道的形式，我们消除了3个变量 - 腾出几乎一半的可用工作记忆去做其他事情。这显著降低了我们的认知负担。在将数据分割成工作记忆方面，软件开发人员趋向于比普通人做得更好一些，不过也不是好很多，因为分割会削弱贮存的重要性。</p>\n<ul>\n<li>信噪比\n简洁的代码也提高了代码的信噪比。就像收听收音机一样 - 当收音机没有正确调到电台时，会产生很多干扰噪音，更难听到音乐。当将其调到正确的电台时，噪点就消失，会得到更强的音乐信号。</li>\n</ul>\n<p>代码是一样的。更简洁的代码表达可以提高理解能力。有些代码给了我们有用的信息，有些代码只占用空间。如果你可以减少所用代码量，而不会减少它传输的含义，那么可以使代码更容易被其它需要读它的人解​​析和理解。</p>\n<ul>\n<li>减少bug\n看看函数前后。看起来好像函数在节食减肥一样。这很重要，因为额外的代码意味着额外的可能产生的bug。</li>\n</ul>\n<blockquote>\n<p>较少的代码=较少的可能产生bug的地方=较少的bug</p>\n</blockquote>\n<h3 id="组合对象"><a href="#%E7%BB%84%E5%90%88%E5%AF%B9%E8%B1%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>组合对象</h3>\n<p>如下都是基础数据类型：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token string">\'Claude\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> lastName <span class="token operator">=</span> <span class="token string">\'Debussy\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>而如下是一个符合数据类型：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token punctuation">{</span>\n  firstName<span class="token punctuation">,</span>\n  lastName\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>同样，所有<code class="gatsby-code-text">Array</code>,<code class="gatsby-code-text">Set</code>,<code class="gatsby-code-text">Map</code>,<code class="gatsby-code-text">WeakMap</code>,<code class="gatsby-code-text">TypedArray</code>等都是符合数据类型。任何时候，只要你构建任何非基础类型数据结构，就是在执行某种对象组合。</p>\n<p>类继承可以用于构造组合对象，但它是一种有限制性和脆弱的模式。更建议使用更加灵活的方式来组合对象构建，而不是用死板的、紧耦合的类继承方式。</p>\n<blockquote>\n<p>“组合对象是通过将对象放在一起，使得后者是前者的一部分而形成的。” ~<a href="https://www.amazon.com/Categorical-Methods-Computer-Science-Topology/dp/0387517227/ref=as_li_ss_tl?ie=UTF8&#x26;qid=1495077930&#x26;sr=8-3&#x26;keywords=Categorical+Methods+in+Computer+Science:+With+Aspects+from+Topology&#x26;linkCode=ll1&#x26;tag=eejs-20&#x26;linkId=095afed5272832b74357f63b41410cb7">《计算机科学中的分类方法：从拓扑学角度》</a>。</p>\n</blockquote>\n<p>类继承只是组合对象的一种方式。所有类都生成组合对象，但并非所有组合对象都是由类或者类继承生成的。“对象组合由于类继承”意味着你应该从小组件生成组合对象，而不是从类层次结构中祖先继承所有的属性。后者会导致面向对象程序设计中众多众所周知的问题：</p>\n<ul>\n<li><strong>紧耦合问题</strong>：由于派生类完全依赖于基类的实现，所以类继承是面向对象设计中可用的最紧密的耦合。</li>\n<li><strong>脆弱的基类问题</strong>：由于紧耦合，对基类的更改会潜在破坏大量后代类，尤其是在引用第三方的类库的时候，作者并不会考虑我们怎么根据他的代码做了多少扩展。</li>\n<li><strong>层级不灵活的问题</strong>：对于单祖先分类法，加以足够的时间和演化，所有类别分类法最终对新的用例都是错的。</li>\n<li><strong>重复的必要性问题</strong>：由于层级不灵活，新的用例通常是通过重复而不是扩展来实现，导致很多个类似的类的出现。一旦出现重复，那么新的派生类不知道应该从哪里继承，或者为什么选择这个。</li>\n<li><strong>大猩猩/香蕉问题</strong>：“…面向对象语言的问题是它们总是可以得到语言运行环境的所有的隐藏信息。你想要一个香蕉，但是你所得到的却是一只拿着香蕉的大猩猩和整座森林。“~<a href="http://www.amazon.com/gp/product/1430219483?ie=UTF8&#x26;camp=213733&#x26;creative=393185&#x26;creativeASIN=1430219483&#x26;linkCode=shr&#x26;tag=eejs-20&#x26;linkId=3MNWRRZU3C4Q4BDN">《编程人生》</a> by Joe。</li>\n</ul>\n<p>最常见的对象组合方式称为<code class="gatsby-code-text">mixin</code>组合。很类似鸡尾酒，可以先拿一种你喜欢的酒，然后再添加各种你喜欢的饮料、汽水、果汁等等。</p>\n<p>使用类继承创建组合：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">\'a\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">\'b\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> myBar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: \'a\', b: \'b\'}</span></code></pre>\n      </div>\n<p>使用mixin组合创建对象：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token punctuation">:</span> <span class="token string">\'a\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>\n  b<span class="token punctuation">:</span> <span class="token string">\'b\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">,</span> <span class="token operator">...</span>b<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// {a: \'a\', b: \'b\'}</span></code></pre>\n      </div>\n<p>稍后我们会继续探讨其他风格的对象组合。现在，你应该理解的是：</p>\n<ul>\n<li>1.能做到这一点的方法不止一种。</li>\n<li>2.有些方法比其他方法更好。</li>\n<li>3.为你手头的工作选择最简单、最灵活的方式</li>\n</ul>\n<h3 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h3>\n<p>本文并非讨论函数式编程(FP)对面向对象编程(OOP)或一种语言对另外一种语言。组件可以采取函数、数据结构、类等形式…不同的编程语言倾向于为组件提供不同的原子元素。Java提供对象，haskell提供函数等…但是不论你喜欢什么编程语言和什么样的范式，你都不能摆脱函数组合和数据结构。</p>\n<p>我们将多讨论函数式编程，因为函数是JavaScript中用于组合的最简单的事情，函数式编程社区已经投入了大量的时间和精力来规范化函数组合技术。</p>\n<p>我们不会说函数式编程比面向对象编程更好，或者建议你使用哪一种。OOP和和FP是一种假对立。我所见过的所有优秀的JavaScript应用程序或者类库，都充分利用和广泛混合了FP和OOP。</p>\n<p>我们将使用对象组合来生成函数式编程的数据类型，而用函数式编程来生成OOP的对象。</p>\n<p>无论你如果编写软件，都应该很好的组合。</p>\n<blockquote>\n<p>软件开发的本质是组合</p>\n</blockquote>\n<p>不了解组合的软件开发人员就像一个不了解螺栓或钉子的室内建筑师。创建软件而不知道组合就像室内建筑师把墙壁用胶带和疯狂的胶水粘在一起一样。</p>\n<p>现在是时候简化了，而简化的最简单的方法就是触及本质。</p>',frontmatter:{title:"FP1：Composing software introduction",img:"./img/2017-12-10.jpg",author:["Sylvenas"],excerpt:'在我高中第一节程序设计课上，我被告知软件开发是"将复杂问题转化为较小问题，并组合简单的解决方案并形成完整的解决方案以解决复杂的问题的行为"。',catalogue:null},fields:{date:"July 19, 2017",path:"blog/functional/2017-07-20-FP1-composing-software-intro.md",slug:"/blog/2017/07/20/FP1-composing-software-intro.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/02/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}}]}},pathContext:{slug:"/blog/2017/07/20/FP1-composing-software-intro.html"}}}});