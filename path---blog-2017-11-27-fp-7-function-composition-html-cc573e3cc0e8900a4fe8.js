webpackJsonp([0x9b98c1a433d1],{473:function(n,s){n.exports={data:{markdownRemark:{html:'<p><strong>函数组合</strong> 就是组合两到多个函数来生成一个新函数的过程。将函数组合在一起，就像将一连串管道扣合在一起，让数据流过一样。</p>\n<p>简而言之，函数<code class="gatsby-code-text">f</code>和<code class="gatsby-code-text">g</code>的组合可以被定义为<code class="gatsby-code-text">f(g(x))</code>,从内到外(从又向左)求值。也就是说，求值顺序是：  </p>\n<ol>\n<li><code class="gatsby-code-text">x</code></li>\n<li><code class="gatsby-code-text">g</code></li>\n<li><code class="gatsby-code-text">f</code></li>\n</ol>\n<p>下面我们在代码中近距离观察一下这个概念。想象一个场景，你想把一个人的全名转换为URL Slug，给每个用户一个个人信息页面。为了实现此需求，你需要经历一连串的操作：</p>\n<ol>\n<li>将姓名用空格分隔(<code class="gatsby-code-text">split</code>)到一个数组中</li>\n<li>将姓名映射(<code class="gatsby-code-text">map</code>)为小写</li>\n<li>用破折号连接(<code class="gatsby-code-text">join</code>)</li>\n<li>编码URI</li>\n</ol>\n<p>如下是一个简单的实现：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">toSlug</span> <span class="token operator">=</span> input <span class="token operator">=></span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>\n  input\n  <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>str <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>还不错…但是我们想要可读性更强一点会怎么样呢？</p>\n<p>假设每个操作都有一个对应的可组合的函数。上述代码可以这样写：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">toSlug</span> <span class="token operator">=</span> input <span class="token operator">=></span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>\n  <span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\n    <span class="token function">map</span><span class="token punctuation">(</span>toLowerCase<span class="token punctuation">)</span><span class="token punctuation">(</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\n        input\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toSlug</span><span class="token punctuation">(</span><span class="token string">\'JS Cheerleader\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'js-cheerleader\'</span></code></pre>\n      </div>\n<p>这看起来比第一个版本更加晦涩难懂，但是先忍一下，我们就要解决。</p>\n<p>为了实现上述的代码，我们将组合几种常用的工具，比如：<code class="gatsby-code-text">split()</code>、<code class="gatsby-code-text">join()</code>和<code class="gatsby-code-text">map()</code>,如下为实现：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//const curry = fn => (...args) => fn.bind(null, ...args);</span>\n<span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> fn<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> join <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">toLowerCase</span> <span class="token operator">=</span> str <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> split <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>splitOn<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>splitOn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>除了<code class="gatsby-code-text">toLowerCase</code>外，所有这些函数都可以从loadsh/fp中直接获取到。可以向这样使用它们：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> curry<span class="token punctuation">,</span> map<span class="token punctuation">,</span> join<span class="token punctuation">,</span> split <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'lodash/fp\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>这里我们偷个懒，直接使用这个简写版本，注意这里<code class="gatsby-code-text">curry</code>并不是一个真正的柯里化函数，而是一个偏应用。关于柯里化和偏应用请查看<a href="">Partial Application And Curry</a>。</p>\n<p>回到我们的<code class="gatsby-code-text">toSlug</code>实现，这里有些东西让我真的很不喜欢：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">toSlug</span> <span class="token operator">=</span> input <span class="token operator">=></span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>\n  <span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\n    <span class="token function">map</span><span class="token punctuation">(</span>toLowerCase<span class="token punctuation">)</span><span class="token punctuation">(</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\n        input\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toSlug</span><span class="token punctuation">(</span><span class="token string">\'JS Cheerleader\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'js-cheerleader\'</span></code></pre>\n      </div>\n<p>对我来说嵌套太多了，这段代码不是特别让人难以弄懂。我们可以用一个自动组合函数的函数来扁平话嵌套，就是说，这个函数会从一个函数得到输出，经过计算之后，把值传递给下一个函数，以此类推…</p>\n<p>细想一下，好像JavaScript数组中有个函数可以做差不多的事情。这个函数就是<code class="gatsby-code-text">reduce()</code>,它用一系列值作为参数，对每个值应用一个函数，最后累加成一个结果。值本身也可以是函数。但是<code class="gatsby-code-text">reduce()</code>是从左向右进行叠加，为了匹配上面的组合行为，我们需要一个从右向左之行的函数—<code class="gatsby-code-text">reduceRight()</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>和<code class="gatsby-code-text">reduce()</code>一样,<code class="gatsby-code-text">reduceRight</code>方法带有一个<code class="gatsby-code-text">reducer</code>函数和一个初始值(<code class="gatsby-code-text">x</code>)为参数。我们可以用它从右向左迭代数组，将函数依次应用到每个数组元素上，最后得到累加值(<code class="gatsby-code-text">v</code>)</p>\n<p>用<code class="gatsby-code-text">compose</code>，我们就可以不需要嵌套来重写上面的组合：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> toSlug <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>\n  encodeURIComponent<span class="token punctuation">,</span>\n  <span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">map</span><span class="token punctuation">(</span>toLowerCase<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>可以使用lodash提供的<code class="gatsby-code-text">compose()</code>方法：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> compose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'lodash/fp\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>当以数学形式的组合从内到外的角度来思考时，<code class="gatsby-code-text">compose(..)</code>是不错的。不过，我们完全也可以从左向右的顺序来思考，这种形式通常被称为<code class="gatsby-code-text">pipe()</code>. lodash称之为<code class="gatsby-code-text">flow()</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">pipe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">fn1</span> <span class="token operator">=</span> s <span class="token operator">=></span> s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> s <span class="token operator">=></span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">fn3</span> <span class="token operator">=</span> s <span class="token operator">=></span> s <span class="token operator">+</span> <span class="token string">\'!\'</span>\n\n<span class="token keyword">const</span> newFunc <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>fn1<span class="token punctuation">,</span> fn2<span class="token punctuation">,</span> fn3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">newFunc</span><span class="token punctuation">(</span><span class="token string">\'Time\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// emit!</span></code></pre>\n      </div>\n<p>可以看到，这个实现与<code class="gatsby-code-text">compose()</code>几乎完全一样。唯一不同之处是，这里使用<code class="gatsby-code-text">.reduce()</code>,而不是<code class="gatsby-code-text">.reduceRight()</code>,即从左向右累加！</p>\n<p>下面我们看一下用<code class="gatsby-code-text">pipe()</code>实现的<code class="gatsby-code-text">toSlug()</code>函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> toSlug <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token function">map</span><span class="token punctuation">(</span>toLowerCase<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      encodeURIComponent\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toSlug</span><span class="token punctuation">(</span><span class="token string">\'JS Cheerleader\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'js-cheerleader\'</span></code></pre>\n      </div>\n<p>这个版本，看起来简单清爽多了。</p>\n<p>精通函数式编程的开发人员会使用大量的函数组合，而我经常使用函数组合来消除临时变量。仔细查看<code class="gatsby-code-text">pipe()</code>版本的<code class="gatsby-code-text">toSlug()</code>,你会发现一些特殊之处。</p>\n<p>在命令式编程中，在一些变量上执行转换时，在转换的每个步骤中都会找到对变量的引用。而上面的<code class="gatsby-code-text">pipe()</code>是采用<strong>points-free(无值)</strong>的风格写的，就是说完全找不到它要操作的参数。</p>\n<p>我经常将<code class="gatsby-code-text">pipe</code>用在单元测试和Redux状态reducer这类事情上，用来消除中间变量。中间变量的存在只用来保存一个操作到下一个操作之间的临时值。</p>\n<p>这玩意听起来比较古怪，不过对着你不断的熟悉和应用函数式编程，你会发现在函数式编程中，你是在和相当抽象、广义的函数打交道，而在这样的函数中，事物的名字并没有那么重要，重要的是数据流，名称只会碍事。</p>\n<p>现在你应该对函数式编程是什么样子，以及怎么利用<code class="gatsby-code-text">partial application</code>和<code class="gatsby-code-text">curry</code>如何与<code class="gatsby-code-text">函数组合</code>协作来帮助你编写可读性更强的程序有点感觉了。</p>',frontmatter:{title:"FP7：What is Function Composition?",img:"./img/2017-11-27.jpeg",author:["Sylvenas"],excerpt:"函数组合就是组合两到多个函数来生成一个新函数的过程。将函数组合在一起，就像将一连串管道扣合在一起，让数据流过一样。",catalogue:null},fields:{date:"November 26, 2017",path:"blog/functional/2017-11-27-FP7-function-composition.md",slug:"/blog/2017/11/27/FP7-function-composition.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}}]}},pathContext:{slug:"/blog/2017/11/27/FP7-function-composition.html"}}}});