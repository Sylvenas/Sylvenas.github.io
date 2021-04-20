webpackJsonp([0x80a4056c9f13],{471:function(n,s){n.exports={data:{markdownRemark:{html:'<p>在JavaScript代码中，回调是编写和处理JavaScript程序异步逻辑的最常用的方式，甚至可以说回调是JavaScript中最基础的异步模式，回调函数作为异步的主力军，并且他们不辱使命的完成了自己的任务。</p>\n<p>但是回调函数也不是没有缺点。</p>\n<h3 id="嵌套回调"><a href="#%E5%B5%8C%E5%A5%97%E5%9B%9E%E8%B0%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>嵌套回调</h3>\n<p>考虑代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">\'http://some.url.com\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>response <span class="token operator">===</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">doOtherthing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>我们很经常见到这样的代码，这里我们三个函数嵌套在一起构成链，其中每个函数代表异步序列(任务)中的一个步骤。</p>\n<p>这种代码常常被称为回调地狱(callback hell),有时候也被称为毁灭金字塔(pyramid of doom,得名于嵌套锁紧的横向三角形)。</p>\n<p>但实际上<strong>回调地狱与嵌套和锁紧几乎没有什么关系</strong>，它引起的问题要比这些严重的多。</p>\n<h3 id="链式回调"><a href="#%E9%93%BE%E5%BC%8F%E5%9B%9E%E8%B0%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>链式回调</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span>\n<span class="token comment">//监听按钮点击事件</span>\nbtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n<span class="token function">debounceFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//去抖动</span>\n<span class="token keyword">const</span> debounceFun <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n<span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>\n<span class="token comment">//ajax 请求</span>\n<span class="token keyword">const</span> <span class="token function-variable function">ajax</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\naxios<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'https://easy-mock.com/mock/5b0525349ae34e7a89352191/example/mock\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"ajax返回成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    myData <span class="token operator">=</span> data<span class="token punctuation">.</span>data\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myData<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"ajax返回失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>我相信很多人都会通过这种链式回调的方式处理异步回调，因为可读性比嵌套回调要搞，但是维护的成本可能要高很多\n上面的栗子，三个异步函数之间只有执行顺序上的关联，并没有数据上的关联，但是实际开发中的情况要比这个复杂,</p>\n<h3 id="回调函数参数校验"><a href="#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E6%A0%A1%E9%AA%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>回调函数参数校验</h3>\n<p>看个简单的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> girlName <span class="token operator">=</span> <span class="token string">"裘千尺"</span>\n\n<span class="token keyword">function</span> <span class="token function">hr</span><span class="token punctuation">(</span>callBack<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    girlName <span class="token operator">=</span> <span class="token string">"黄蓉"</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'我是黄蓉\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">callBack</span><span class="token punctuation">(</span>girlName<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">gj</span><span class="token punctuation">(</span>love<span class="token punctuation">)</span> <span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>girlName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">你好，我是郭靖，认识一下吧，我喜欢</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>love<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">hr</span><span class="token punctuation">(</span>gj<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>gj作为hr的回调函数，并且hr将自己的一个变量传递给gj，gj在hr的回调中执行，\n仔细看这种写法并不严谨，\n如果gj并不只是一个function类型会怎么样？\n如果love的实参并不存在会怎么样？\n况且这只是一个简单的栗子\n所以回调函数中，参数的校验是很有必要的，回调函数链拉的越长，校验的条件就会越多，代码量就会越多，随之而来的问题就是可读性和可维护性就会降低。</p>\n<h3 id="安全性"><a href="#%E5%AE%89%E5%85%A8%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安全性</h3>\n<p>但我们引用了第三方的插件或库的时候，有时候难免要出现异步回调的情况，一个栗子：\nxx支付，当用户发起支付后，我们将自己的一个回调函数，传递给xx支付，xx支付比较耗时，执行完之后，理论上它会去执行我们传递给他的回调函数，是的理论上是这样的，我们把回调的执行权交给了第三方，隐患随之而来\n第三方支付，多次调用我们的回调函数怎么办？\n第三方支付，不调用我们的回调函数怎么办？\n当我们把回调函数的执行权交给别人时，我们也要考虑各种场景可能会发生的问题</p>',frontmatter:{title:"Call Back",img:"./img/2015-02-03.jpeg",author:["Sylvenas"],excerpt:null,catalogue:["嵌套回调","链式回调","回调函数参数校验","安全性"]},fields:{date:"February 02, 2015",path:"blog/async/2015-02-03-call-back.md",slug:"/blog/2015/02/03/call-back.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}}]}},pathContext:{slug:"/blog/2015/02/03/call-back.html"}}}});