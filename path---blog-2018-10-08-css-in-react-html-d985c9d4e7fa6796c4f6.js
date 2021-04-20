webpackJsonp([0xf1475b72ebcd],{549:function(s,a){s.exports={data:{markdownRemark:{html:'<p>在传统的大型css代码库中存在一下几个问题：</p>\n<ul>\n<li>全局命名空间 - css中的所有的选择器都是全局的。无论怎样使用命名空间或者BEM命名法组织css代码，最终都会污染全局命名空间，从长远来看，代码的可维护性会越来越差</li>\n<li>依赖 - 现在往往使用css预处理器将css代码分割成子模块，但最终为浏览器生成的还是一个很大的全局css文件，很难清晰的声明某个特定组件依赖某段特定的css代码，并且这段代码要在样式应用前加载完毕</li>\n<li>无用代码移除 - 因为很难快速的判断某些样式属于哪个组件，所以删除代码时就会非常棘手，再加上由于css的层叠特性，删除一个选择器或者规则都能在浏览器中引发预料之外的后果</li>\n<li>压缩 - css因为要和html强关联在一起，这就造成了css选择器名称的压缩和优化成了难题</li>\n<li>常量共享 - css很难做到在样式和js之间共享常量，举例来说就是，我们通常需要获取页头的高度，以计算依赖它的其他元素的位置</li>\n<li>解析方式不确定 - css规则的顺序非常重要，如果是按需加载css,则完全无法预测多个css之间的解析的顺序，进而导致错误的样式应用于元素，而且后续加载的css又完全可能会影响到之前的文档</li>\n<li>样式隔离 - 几乎不可能在文件或组件间实现恰当的css隔离，选择器都是全局的，可以被轻易的覆盖。想通过元素上的类名预测其最终样式会非常困难，因为其他部分的规则可以很轻易的影响不相关的元素</li>\n</ul>\n<h3 id="行内样式"><a href="#%E8%A1%8C%E5%86%85%E6%A0%B7%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>行内样式</h3>\n<p>React官方文档推荐开发者在React组件上使用行内样式，这听起来有点离经叛道，因为多年以来，我们都在宣扬关注点分离的概念，为何React组件要反其道而行之\nReact试图改变关注点分离这一概念，使其从技术分离向组件分离转变。标记、样式、逻辑在React组件中耦合的很紧，应用缺少其中任何一个都无法工作，这种情况下将他们独立的放入不同的文件只是假象上的分离，虽然这样有助于保持项目目录结构的清晰，但是没有带来任何实质的收益。</p>\n<p>React将组件作为应用的基础单元，通过组合组件来创建应用。我们可以将组件放到任何位置，他们豆浆渲染出相同的UI和逻辑。</p>\n<p>这就是将样式放入组件内部的原因。</p>\n<p>看一下行内样式的基本用法：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  fontSize<span class="token punctuation">:</span> <span class="token number">16</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>要在React组件中使用行内样式，只要创建一个对象，它的属性名就是CSS规则名，属性值就是常规的CSS属性值。</p>\n<p>唯一的区别在于，为了符合JavaScript语法，<code class="gatsby-code-text">连字符式</code>的CSS规则名必须改为<code class="gatsby-code-text">驼峰式</code>，另外其属性值是字符串，因此必须用引号包裹起来。</p>\n<p>数字值也有例外：可以不带引号或者度量单位书写它们，默认单位为像素，例如上面例子中的<code class="gatsby-code-text">fontSize: 16</code>转换为CSS代码就是<code class="gatsby-code-text">font-size:16px</code></p>\n<p>在浏览器厂商前缀方面也有一些特殊，举例来说，我们想要定义<code class="gatsby-code-text">webkit</code>内核的渐变，应该使用<code class="gatsby-code-text">WebkitTransition</code>属性，其中<code class="gatsby-code-text">webkit</code>前缀以大些字母开头，这项规则对除了<code class="gatsby-code-text">ms</code>之外的所有的浏览器厂商前缀有效，但是<code class="gatsby-code-text">ms</code>的浏览器前缀要以小些开头。</p>\n<p>行内样式可以做到常规CSS很难实现的需求，举例来说，可以在客户端运行时计算某些CSS值，保存到state中，方便后面的重复使用和根据这个值做计算。</p>\n<h4 id="行内样式的缺陷"><a href="#%E8%A1%8C%E5%86%85%E6%A0%B7%E5%BC%8F%E7%9A%84%E7%BC%BA%E9%99%B7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>行内样式的缺陷</h4>\n<p>行内样式无法使用伪类(例如<code class="gatsby-code-text">:hover</code>)和伪元素(如<code class="gatsby-code-text">:after</code>)，这种局限在创建包含交互与动画的UI时非常显著，在行内样式中伪类就必须使用JavaScript事件来模拟，而伪元素只能使用真实的元素来模拟。</p>\n<p>媒体查询也同理不能在行内样式中使用，这会使得开发响应式的web应用变得困难。</p>\n<p>因为样式是使用JavaScript对象来模拟的，所以也无法使用样式回退，JavaScript对象不能包含两个同名属性，例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>\n  display<span class="token punctuation">:</span>WebkitFlex<span class="token punctuation">;</span>\n  display<span class="token punctuation">:</span>flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>CSS的动画特性也无法使用行内样式来模拟，对此只能全局定义动画，然后在元素的样式属性中使用。</p>\n<p>行内样式还有一个严重的缺陷在于开发人员调试CSS的时候，一是所有的css代码都会直接使用行内的方式插入在HTML中，如果有大量的这样的代码的话，HTML会显得非常混乱不堪，另外一个是如果我们修改了其中的一个CSS的样式，这并不会影响到其他的同类元素的样式，除非自己一个一个的修改。</p>\n<p>如果在服务端渲染的时候使用行内样式，将CSS代码完全嵌入到标记中，反而会让页面的体积变得很大，那么发送给客户端的文件就会很大，这回降低web应用的呈现速度</p>\n<p>综上所述，事实证明行内样式虽然一部分解决了传统CSS面临的问题，但是却引发了更多的问题。</p>\n<p>出于这个原因，社区中出现了不同的工具来试图解决行内样式带来的问题，同时将样式保留在组件中，或者让样式只能作用域局部组件，以获得双赢。</p>\n<p>其中比较出名的是<a href="https://github.com/FormidableLabs/radium">Radium</a>，Radium的原理就是通过高阶组件来包装一下普通的组件，同时使用使用JavaScript来为触发伪类行为的每个事件添加监听器，来动态的修改伪类，也就是这些事件一旦被处罚，Radium就会改变组件的状态，然后组件就会根据状态中正确样式重新渲染。这种做法一开始让人感觉到奇怪，不过没有什么实质缺陷，而且性能方面也没有很明显的差别。</p>\n<blockquote>\n<p>Radium也解决不了行内样式调试困难的问题，同时也不能使用浏览器styles面板选中伪类来调试相应的结果</p>\n</blockquote>\n<h3 id="css-module"><a href="#css-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS Module</h3>\n<p>借助webpack这类工具可以将应用拆分成小型模块，以便按需导入，webpack有一个加载器的概念，webpack理论上可以加载任何依赖，只要有对应的加载器即可。\n其中css-loader允许你在JavaScript模块中导入CSS文件，并且启用modules标记，这样所有的类名只作用域于导入他们的模块。</p>\n<p>举例说明CSS Modules的基本用法：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.btn</span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span>red\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./index.css\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>btn<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>CSS Modules,还有更高级的<code class="gatsby-code-text">composes</code>组合class,<code class="gatsby-code-text">:global</code>声明全局样式，webpack配置自定义类名等等，具体的可以查看<a href="https://github.com/css-modules/css-modules">GitHub文档</a></p>\n<p>这种做法非常的强大，这样我们即拥有了CSS的完整能力及表现性，又结合了局部作用域类名与显式依赖的优点。</p>\n<p>在组件内显式导入CSS依赖能够帮助我们搞清楚组件和CSS的关系，这在移除无用代码的时候非常有用，因为删除某个组件的时候能够迅速而准确的找到其所用到你的CSS文件。</p>\n<h3 id="原子级css模块"><a href="#%E5%8E%9F%E5%AD%90%E7%BA%A7css%E6%A8%A1%E5%9D%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>原子级CSS模块</h3>\n<p>原子级CSS又称为函数式CSS，是CSS的一种使用方式，即每个类只有一条规则。\n例如：可以创建一个类来设置底部外边距为0:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.mb0</span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>可以用另一个类设置font-weight属性为600:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-css"><code class="gatsby-code-css"><span class="token selector">.fw6</span><span class="token punctuation">{</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span>600<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>然后将这些原子类应用在元素上</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>mb0 fw6<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>hello react<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>这种技巧存在争议，但很高效，要决定使用它们并不容易，因为这样会导致标记上有太多的类名，进而导致很难预测最终的结果。这在一定程度上和行内样式很类似，因为一个类只有一个规则，只不过规则换成了短一些的类名而已。</p>\n<p>不过另一方面，当开始接受原子级的CSS的时候，我们发现这样可以超快速的搭建原型，其实只要规则定义好，将这些类应用于元素或者用它们生成新的样式都非常快，另外一个很大的优点在于，这样可以大大的缩小CSS文件的大小，因为几乎所有的样式都是可以复用的，不需要编写新的样式，这对性能以及服务端渲染是大有好处的。</p>\n<p>结合上一小节的CSS Module来使用的话，可以在一定程度上解决原子级CSS类名太多的问题。</p>\n<p>本质上来说就是，以创建基础CSS类开始，接着用CSS模块将他们组合成占位符，而不是将他们逐个</p>',frontmatter:{title:"css in react",img:"./img/2016-08-21.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"October 07, 2018",path:"blog/react/2018-10-08-css-in-react.md",slug:"/blog/2018/10/08/css-in-react.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}}]}},pathContext:{slug:"/blog/2018/10/08/css-in-react.html"}}}});