webpackJsonp([0x793221dc8e7f],{519:function(s,n){s.exports={data:{markdownRemark:{html:'<p>ES6中值得称赞的特性之一就是提供函数表达式缩写定义的箭头函数语法。你很难发现关于ES6（或者甚至甚少与其相关的）的一篇文章、会议演讲或者书都没有首要介绍<code class="gatsby-code-text">=&gt;</code>是新的<code class="gatsby-code-text">function</code>。</p>\n<p>其中有一点是最让人困惑的，就是箭头函数内的<code class="gatsby-code-text">this</code>到底指向哪里？举个例子来说：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"id:"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nfoo<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// id: 42</span></code></pre>\n      </div>\n<p>这里的<code class="gatsby-code-text">=&gt;</code>箭头函数似乎绑定了它的<code class="gatsby-code-text">this</code>到父函数<code class="gatsby-code-text">foo()</code>的this上,不过也仅仅是看上去如此罢了，那么到底是怎么回事呢？，我们把上面的代码稍微修改一下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n   <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"id:"</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nfoo<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// id: 42</span></code></pre>\n      </div>\n<blockquote>\n<p>变量名self是一个绝对可怕的，有误导的名字。它意味着this是函数本身的引用。但它从来没有。var that = this语义上同样无益，尤其当有多个作用域生效的时候（that1,that2,…）。如果你想要一个恰当的名字，使用var context = this，因为那就是this真正的含义：一个动态的上下文</p>\n</blockquote>\n<p>在上面这个片段中，你可以看到我们甚至没有在内部函数使用<code class="gatsby-code-text">this</code>。相反，我们回退到一个更可预见性的机制：词法变量。我们在外部函数声明一个变量<code class="gatsby-code-text">self</code>，然后简单的在内部函数引用它。</p>\n<p>这种完全消除了<code class="gatsby-code-text">this</code>绑定规则（对于内部函数，也是）。取而代之的是仅仅依赖<code class="gatsby-code-text">词法作用域</code>规则，实际上是闭包。</p>\n<p>最终的结果似乎和<code class="gatsby-code-text">=&gt;</code>箭头函数一样，换句话说，这里的（不严谨的）含义是<code class="gatsby-code-text">=&gt;</code>箭头函数有一个了类似词法环境/闭包机制的方式的“词法this”行为</p>\n<p>在看一个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"id:"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nfoo<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// id: 42</span></code></pre>\n      </div>\n<p>正如你看到的.bind(this)，这里的内部函数被强制绑定到外部函数的this，也意味着不管setTimeout(…)如何调用函数，调用函数始终使用foo()函数使用的this。</p>\n<p>是的，这个版本有着和先前两个代码片段同样可观察到的行为。因此，它更精确吗？很多人认为这就是<code class="gatsby-code-text">=&gt;</code>箭头函数实际上运行原理。</p>\n<p><strong>然而上面的结论应该都是错误的，就像是高中的时候，虽然一个题我们得到了最终的结果，但是老师会提出我们的整个计算过程都是错误的！</strong></p>\n<p>关于箭头函数内的<code class="gatsby-code-text">this</code>的指向，正确的解释应该是：<code class="gatsby-code-text">=&gt;</code>从不绑定自己的<code class="gatsby-code-text">this</code>,而是直接获取当前<code class="gatsby-code-text">词法作用域</code>上下文作为自己的this，换句话说就是既然箭头函数没有自己的<code class="gatsby-code-text">this</code>,但是当你在箭头函数内部使用<code class="gatsby-code-text">this</code>的时候，普通<code class="gatsby-code-text">词法作用域</code>的规则是生效的,引用被解析为包含最近的外部作用域定义的this。\n看这段代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n         <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"id:"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nfoo<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// id: 42</span></code></pre>\n      </div>\n<p>在这个片段中，你认为有多少个<code class="gatsby-code-text">this</code>绑定？大多数可能认为是4个，每个函数一个。\n准确无误的来说，只有一个，是在<code class="gatsby-code-text">foo()</code>函数中。\n相继嵌套的<code class="gatsby-code-text">=&gt;</code>箭头函数没有声明自己的this，因此<code class="gatsby-code-text">this.id</code>简单的沿着作用域链解析直到找到<code class="gatsby-code-text">foo()</code>，第一个确切绑定<code class="gatsby-code-text">this</code>的函数。</p>\n<p>和其他的普通的词法变量的处理方式是一样的。</p>\n<p>如果你含糊不清地解释<code class="gatsby-code-text">=&gt;</code>对this的行为，你最终认为<code class="gatsby-code-text">箭头函数仅仅是function的语法糖……</code>,这是非常危险的，它们显然不是，也不是<code class="gatsby-code-text">var self = this</code>或者<code class="gatsby-code-text">.bind(this)</code>的语法糖。</p>\n<p>事实上，<code class="gatsby-code-text">=&gt;</code>箭头函数不绑定<code class="gatsby-code-text">this</code>、<code class="gatsby-code-text">arguments</code>、<code class="gatsby-code-text">super(ES6)</code>或者<code class="gatsby-code-text">new.target(ES6)</code>。\n看下面的代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"args:"</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">foo</span><span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// args: [2, 4, 6, 8]</span></code></pre>\n      </div>\n<p>在这个片段中，<code class="gatsby-code-text">arguments</code>没有被<code class="gatsby-code-text">=&gt;</code>限定，因此它被解析到<code class="gatsby-code-text">foo()</code>函数的<code class="gatsby-code-text">arguments</code>。<code class="gatsby-code-text">super</code>和<code class="gatsby-code-text">new.target</code>也是同样的结果。</p>\n<p>所以为什么对箭头函数<code class="gatsby-code-text">.bind({...})</code>不能得到我们想要的修改函数内部<code class="gatsby-code-text">this</code>指向的结果呢？</p>\n<p>如果你对<code class="gatsby-code-text">=&gt;</code>箭头函数的this有不准确的理解，你不得不假设可以这样解释：<code class="gatsby-code-text">在arrow function 中 this是不可改变的</code>，虽然结论是正确的，但是思考过程确实错误的。</p>\n<p>简单正确的答案是既然<code class="gatsby-code-text">=&gt;</code>没有this，当然<code class="gatsby-code-text">.bind(obj)</code>没有什么可以操作！类似地，<code class="gatsby-code-text">=&gt;</code>不能被<code class="gatsby-code-text">new</code>操作符调用。既然没有<code class="gatsby-code-text">this</code>，<code class="gatsby-code-text">new</code>没有东西可以绑定。</p>',frontmatter:{title:"arrow function this",img:"./img/2016-08-21.jpeg",author:["sylvenas"],excerpt:null,catalogue:null},fields:{date:"March 15, 2018",path:"blog/javascript/2018-03-16-arrow-function-this.md",slug:"/blog/2018/03/16/arrow-function-this.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}}]}},pathContext:{slug:"/blog/2018/03/16/arrow-function-this.html"}}}});