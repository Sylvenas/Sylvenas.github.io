webpackJsonp([0xa528b5c12512],{662:function(n,s){n.exports={data:{markdownRemark:{html:'<p>之前一直知道React中<code class="gatsby-code-text">setState</code>是一个异步的操作，如果我们再一个函数内有两个<code class="gatsby-code-text">setState</code>,那么他们会合并，只执行最后一个<code class="gatsby-code-text">setState</code>,例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// assume it is 0</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>两个<code class="gatsby-code-text">setState</code>都是异步的，第一个<code class="gatsby-code-text">setState</code>不会修改<code class="gatsby-code-text">this.state.count</code>,然后我们得到的结果是<code class="gatsby-code-text">this.state.count === 1</code>.Right?</p>\n<p>但是有一种情况，当<code class="gatsby-code-text">setState</code>在React生命周期之外被调用的时候，例如：JavaScript原声的DOM listener(通过addEventListener添加)、setTimeout、setInterval、requestAnimationFrame以及ajax callbacks.这是因为React大部分时间都处于闲置状态，当调用<code class="gatsby-code-text">setState</code>的时候，React首先会检查是否有批量更新更在进行，如果有那就添加到批量更新中，如果没有，React就会继续执行更新.</p>\n<p>看一下下面的这个例子，当我们点击页面的时候，我们最直接的想法是，state将会从0变成1，但是实际上，它是从0变成了2.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        Click on anywhere<span class="token punctuation">.</span> The current state is <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">" "</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>在大部分情况下，同步的<code class="gatsby-code-text">setState</code>也不是什么坏事，很多的初学者对异步的<code class="gatsby-code-text">setState</code>感到非常的困惑，不过如果你想在React生命周期之外也能够合并<code class="gatsby-code-text">setState</code>，可以使用<code class="gatsby-code-text">react-dom</code>中一个隐藏的API，<code class="gatsby-code-text">unstable_batchedUpdates</code>,这个api又一个<code class="gatsby-code-text">unstable</code>(不稳定)的前缀，不过现在还是可以使用的，以后在升级的时候，注意这个问题就好了。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_batchedUpdates<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span>\n\n<span class="token function">unstable_batchedUpdates</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',frontmatter:{title:"setState Might Be Synchronous",img:"./img/2017-10-23.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"October 22, 2017",path:"blog/react/2017-10-23-set-state.md",slug:"/blog/2017/10/23/set-state.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}}]}},pathContext:{slug:"/blog/2017/10/23/set-state.html"}}}});