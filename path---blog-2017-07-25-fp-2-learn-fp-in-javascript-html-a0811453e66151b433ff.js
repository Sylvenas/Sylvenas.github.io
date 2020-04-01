webpackJsonp([0xb9770b93dce2],{485:function(a,t){a.exports={data:{markdownRemark:{html:'<p>请忘掉你认为你知道的有关JavaScript的任何东西，以初学者的心态来接触这份资料。为帮助你这样做，我们打算从头开始复习JavaScript的基础知识，就像你以前从来没有看到过JavaScript一样。如果你是已经熟悉JavaScript或者纯函数式语言的老手，也许你会认为用JavaScript来探究函数式编程就是个笑话。请把你的这些想法放一边，尝试用新的心态来接触这份博客。你可能会发现这是另一种思路的JavaScript编程。</p>\n<p>既然本文是称为”组合软件”，而函数式编程是组合软件的显而易见的方式(使用函数组合、高阶函数等等)，你可能会想知道为什么不使用Hasskell,而是JavaScript。</p>\n<p>JavaScript有函数式编程所需的最重要的特性：</p>\n<ul>\n<li>1.<strong>函数是一等公民</strong>：即将函数用作数据值的能力：传递函数作为参数、返回函数以及将函数复制给变量和对象属性。这个特性允许高阶函数的存在，从而能够使用偏应用、柯里化和函数组合。</li>\n<li>2.<strong>匿名函数和简洁的<code class="gatsby-code-text">lambda</code>语法</strong>:<code class="gatsby-code-text">x =&gt; x * 2</code> 在 JavaScript 中是有效的函数表达式。简洁的 Lambda 让它更容易与高阶函数配合。</li>\n<li>3.<strong>闭包</strong>：闭包是函数与其词法环境捆绑在一起。闭包是在函数创建时创建的。当一个函数被定义在另一个函数内部时，它可以访问外层函数中绑定的变量，即使在外层函数退出之后，也可以访问。闭包是偏应用获取其固定参数的技术原理。固定参数是一个绑定在一个被返回的函数的闭包作用域中的参数。才<code class="gatsby-code-text">add(1)(2)</code>中，<code class="gatsby-code-text">1</code>就是被<code class="gatsby-code-text">add(1)</code>执行完毕之后返回的新函数中的固定参数。</li>\n</ul>\n<h3 id="what-javascript-is-missing"><a href="#what-javascript-is-missing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What JavaScript is Missing</h3>\n<p>JavaScript支持多种不同类型的编程范式，也就是它支持多种不同风格的编程。JavaScript支持的编程范式包括过程式(命令式)编程(像C一样，函数代表可以被反复重用和组织的指令子程序)，面向对象编程(对象是基本的构造单元)，当然还有函数式编程。多范式编程语言的缺点在于，命令式和面向对象编程趋向于暗示所有的东西都是需要可变的。</p>\n<p>可变(Mutation)是指发生在原地的对数据结构的改变。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\n  bar<span class="token punctuation">:</span> <span class="token string">\'baz\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nfoo<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">\'qux\'</span><span class="token punctuation">;</span> <span class="token comment">// mutation</span></code></pre>\n      </div>\n<p>对象通常需要时可修改的,这样起属性就可以通过方法来修改。在命令式编程中，大多数数据结构都是可修改的，以保证高效的对象和数组的直接操作。</p>\n<p>如下是一些函数式编程语言所有吗，而JavaScript没有的特性：</p>\n<ul>\n<li>1.<strong>纯度</strong>：在一些函数是编程语言中，纯度是通过语言强制的。带有副作用的表达式是被禁止的。</li>\n<li>2.<strong>不可变性</strong>：一些函数式编程语言禁用了可变性。表达式被求值为新的数据结构，而不是直接修改原数据结构，比如数组或者对象。这可能听起来效率底下，不过很多函数式编程语言在幕后使用字典数据结构，而字典树这种结构是以结构共享为特征：这意味着旧对象和新对象共享引用相同的数据。</li>\n<li>3.<strong>递归</strong>：递归是函数为迭代引用自身的能力。在很多函数式编程语言中，递归式迭代的唯一方法。没有像<code class="gatsby-code-text">for</code>,<code class="gatsby-code-text">while</code>,<code class="gatsby-code-text">do</code>这样的循环语句。</li>\n</ul>\n<p><strong>纯度</strong>：在JavaScript中，纯度必须按约定实现。如果不是通过组合纯函数来创建大多数应用程序，就不是用函数式风格编程。很不幸的是，在JavaScript中偶然创建和使用非纯函数很容易偏离轨道。</p>\n<p><strong>不可变性</strong>：在纯函数语言中，不可变性通常是被强制的。JavaScript缺乏被大多数函数式语言所用的高效的、不可变的给予字典数的数据结构，不过有些库可以帮助实现，包括<a href="https://facebook.github.io/immutable-js/">Immutable.js</a>和<a href="https://github.com/swannodette/mori">Mori</a>。</p>\n<p><strong>递归</strong>：JavaScript从技术上讲是完全支持递归的，不过大多数函数式编程语言又一个称为尾调用优化的特性。尾调用优化是让递归函数能重用递归调用的栈帧。关于更多的<a href="http://www.ruanyifeng.com/blog/2015/04/tail-call.html">尾调用</a>可以看看这篇博客。对于大的迭代，使用递归依然是不安全的 - 即使你很小心在尾位置调用函数。</p>\n<h3 id="what-javascript-has-that-pure-functional-languages-lack"><a href="#what-javascript-has-that-pure-functional-languages-lack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What JavaScript Has that Pure Functional Languages Lack</h3>\n<p>语言纯正癖者会告诉你，JavaScript的可变性是其主要缺陷，这是真的。不过副作用和可变性有时候是有好处的。实际上，创建大多数有用的现代应用程序要想没有副作用是不可能的。像 Haskell 这种纯函数式语言也要用到副作用，只不过是使用称为 Monads 的盒子将副作用伪装成纯函数，从而让程序保持纯，即使被 monad 表示的副作用是不纯的。</p>\n<p>虽然 JavaScript 对于每种编程风格可能都不是完全理想，但是它无可争辩的是一种被设计用来可以被不同编程风格和背景的不同人群所使用的通用语言。</p>\n<p>根据 <a href="https://brendaneich.com/2008/04/popularity/">Brendan Eich</a> 所言，这从一开始就是有意而为之的。那时，网景必须支持两类程序员：</p>\n<blockquote>\n<p>“…组件程序员，他们用 C++ 或者（我们希望的）Java 编写组件；以及业余或者专业的脚本编写者，他们编写的代码要直接嵌入到 HTML 中。”</p>\n</blockquote>\n<p>最初，网景的意图是要支持两种不同的语言，而脚本语言可能会类似于 Scheme（一种 Lisp 的方言）。Brendan Eich 又说：</p>\n<blockquote>\n<p>“我被招募进网景是他们答应我可以在浏览器中玩 Scheme。”</p>\n</blockquote>\n<p>然而，JavaScript 必须是一门新语言：</p>\n<blockquote>\n<p>来自高层工程管理人员的命令是：这门语言必须看起来像 Java。这实际上就已经把 Perl、Python、Tcl 以及 Scheme 排除在外。”</p>\n</blockquote>\n<p>所以，从一个开始，Brendan Eich 脑子中的想法就是：</p>\n<ul>\n<li>1.浏览器中的Scheme。</li>\n<li>\n<p>2.看起来像Java。\n它最终就成了一个大杂烩：</p>\n<blockquote>\n<p>“我并非骄傲，只不过是很高兴我选择 Scheme 式的一等函数以及 Self 式（尽管很怪异）的原型作为主要因素。至于 Java 的影响，主要是把数据分成基本类型和对象类型两种（比如字符串和 String 对象），以及引入了Y2K 日期问题，这真是不幸。 ”</p>\n</blockquote>\n</li>\n</ul>\n<p>我把最终进入 JavaScript 中的一些”不幸“类似 Java 的特性加入到如下列表中：</p>\n<ul>\n<li>1.构造器函数和 <code class="gatsby-code-text">new</code> 关键字，从工厂函数有不同的调用方式和用法语义。</li>\n<li>2.<code class="gatsby-code-text">class</code> 关键字加上单一祖先的 <code class="gatsby-code-text">extend</code> 作为主要的继承机制。</li>\n<li>3.用户的偏好是把一个 <code class="gatsby-code-text">class</code> 当作是一个静态类型（实际上它不是）。</li>\n</ul>\n<p>我的建议是：尽可能避免这些玩意。</p>\n<p>幸运的是，JavaScript 已经结束了成为这样一种包罗万象的语言，因为事实证明脚本的方式已经完胜“组件”的方式（今天，Java、Flash 和 ActiveX 插件已经不被大多数安装了的浏览器所支持）。</p>\n<p>最终只有一种语言直接被浏览器所支持：JavaScript。</p>\n<p>作为 Web 平台上唯一的标准通用编程语言的地位，让 JavaScript 顺势成为软件历史上最流行的语言：</p>\n<p>App 赢得了世界，web 赢得了 app，而 JavaScript 赢得了 web。</p>',frontmatter:{title:"FP2：Why Learn FP in JavaScript?",img:"./img/2017-12-24.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"July 24, 2017",path:"blog/functional/2017-07-25-FP2-learn-FP-in-javascript.md",slug:"/blog/2017/07/25/FP2-learn-FP-in-javascript.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/02/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒 - Functor"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}}]}},pathContext:{slug:"/blog/2017/07/25/FP2-learn-FP-in-javascript.html"}}}});