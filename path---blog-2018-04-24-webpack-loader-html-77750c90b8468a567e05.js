webpackJsonp([0xefad456c19ec],{690:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="webpack原理"><a href="#webpack%E5%8E%9F%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Webpack原理</h3>\n<p>本质上来说webpack是运行在node.js之上的一个JavaScript程序,通过配置文件指令程序应当从哪里入手、遇到各种文件应当怎么处理、遇到导入的文件，怎么根据路径加载，以及在处理各种文件的过程中，做各种优化和处理;</p>\n<p>一切文件：JavaScript、CSS、SCSS、图片、模板，在 Webpack 眼中都是一个个模块，这样的好处是能清晰的描述出各个模块之间的依赖关系，以方便 Webpack对模块进行组合和打包。 经过Webpack的处理，最终会输出浏览器能使用的静态资源。</p>\n<h4 id="webpack的核心概念"><a href="#webpack%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack的核心概念</h4>\n<ul>\n<li><code class="gatsby-code-text">entry</code>: 一个可执行模块或库的入口文件</li>\n<li><code class="gatsby-code-text">chunk</code>:多个文件组成的一个代码块，例如把一个可执行模块和它所有依赖的模块组合和成一个chunk，这体现了webpack的打包机制</li>\n<li><code class="gatsby-code-text">loader</code>:文件转换器，例如把ES6转换为ES5，SCSS转换为CSS</li>\n<li><code class="gatsby-code-text">plugin</code>:插件，用于扩展webpack的功能，在webpack构建生命周期的节点上加入扩展hook为webpack加入功能。</li>\n</ul>\n<h4 id="webpack构建流程"><a href="#webpack%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack构建流程</h4>\n<p>从启动webpack构建到输出结果经历了一系列过程，它们是：</p>\n<ul>\n<li>解析webpack配置参数，合并从<code class="gatsby-code-text">shell</code>传入和<code class="gatsby-code-text">webpack.config.js</code>文件里配置的参数，生产最后的配置结果</li>\n<li>注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应</li>\n<li>从配置的<code class="gatsby-code-text">entry</code>入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。</li>\n<li>在解析文件递归的过程中根据<code class="gatsby-code-text">文件类型</code>和<code class="gatsby-code-text">loader</code>配置找出合适的loader用来对文件进行转换。</li>\n<li>递归完后得到每个文件的最终结果，根据entry配置生成代码块<code class="gatsby-code-text">chunk</code>。</li>\n<li>输出所有<code class="gatsby-code-text">chunk</code>到文件系统。</li>\n</ul>\n<p>需要注意的是，在构建生命周期中有一系列插件在合适的时机做了合适的事情，eg:<code class="gatsby-code-text">UglifyJsPlugin</code>会在loader转换递归完后对结果再使用<code class="gatsby-code-text">UglifyJs</code>压缩覆盖之前的结果。</p>\n<h3 id="webpack-loader"><a href="#webpack-loader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack-loader</h3>\n<p>Loader 就像是一个流水工厂，能把源文件经过转化后输出新的结果，并且一个文件还可以链式的经过多个工厂加工</p>\n<p>以处理 SCSS 文件为例：</p>\n<ul>\n<li>SCSS 源代码会先交给<code class="gatsby-code-text">sass-loader</code>把SCSS转换成CSS；</li>\n<li>把<code class="gatsby-code-text">sass-loader</code>输出的CSS交给<code class="gatsby-code-text">css-loader</code>处理，找出CSS中依赖的资源、压缩CSS等；</li>\n<li>把<code class="gatsby-code-text">css-loader</code>输出的 CSS 交给<code class="gatsby-code-text">style-loader</code>处理，转换成通过脚本加载的 JavaScript 代码；</li>\n</ul>\n<p>可以看出以上的处理过程需要有顺序的链式执行，先<code class="gatsby-code-text">sass-loader</code>再<code class="gatsby-code-text">css-loader</code>再<code class="gatsby-code-text">style-loader</code>。</p>\n<blockquote>\n<p>loader有点类似RxJs的管道机制，同时透露着函数式编程的理念</p>\n</blockquote>\n<h4 id="loader的职责"><a href="#loader%E7%9A%84%E8%81%8C%E8%B4%A3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>loader的职责</h4>\n<p>由上面的例子可以看出：</p>\n<ul>\n<li>一个 Loader 的职责是单一的，只需要完成一种转换。</li>\n<li>如果一个源文件需要经历多步转换才能正常使用，就通过多个 Loader 去转换。</li>\n<li>在调用多个 Loader 去转换一个文件时，每个 Loader 会链式的顺序执行，</li>\n<li>第一个 Loader 将会拿到需处理的原内容，上一个 Loader 处理后的结果会传给下一个接着处理，最后的 Loader 将处理后的最终结果返回给 Webpack。</li>\n</ul>\n<p>所以，在你开发一个 <code class="gatsby-code-text">Loader</code> 时，请保持其职责的单一性，你只需关心输入和输出。</p>\n<h3 id="writing-a-loader"><a href="#writing-a-loader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing A Loader</h3>\n<p>从上面的介绍可以看出loader就是一个Node.js的模块，这个模块需要导出一个函数，而这个函数的作用就是对接收的内容进行处理，并把处理的结果返回给下一个模块。\n那么一个最简单的loader的内容就是：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// source 为 compiler 传递给 Loader 的一个文件的原内容</span>\n  <span class="token comment">// 该函数需要返回处理后的内容，这里简单起见，直接把原内容返回了，相当于该 Loader 没有做任何转换,仅仅是打印了source</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> source<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>使用一个具体的例子来说：\n如果我们想把某个txt文件中的<code class="gatsby-code-text">{{name}}</code>替换为某个具体的人名，可以这样写,代码很简单</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"loader-utils"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./name-options.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> validateOptions <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"schema-utils"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 获取options配置项</span>\n    <span class="token keyword">const</span> options <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">// 校验配置项是否符合规则</span>\n    <span class="token function">validateOptions</span><span class="token punctuation">(</span>schema<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token string">"name Loader"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 替换字符串</span>\n    <span class="token keyword">const</span> result <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/{{name}}/</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\n    <span class="token comment">// 拼接结果返回给webpack</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`module.exports = \'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\'`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<blockquote>\n<p>最后的结果要手动拼接module.exports的原因是：loader最后会创建为一个模块，而当我们require一个模块的时候，我们需要实际上加载的时候最后镜多loader处理之后的那个模块，而<strong>return <code class="gatsby-code-text">module.exports = &#39;${result}&#39;</code></strong>就是为了创建这个供其他应用程序require的模块，只不过和我们平时写的模块的唯一区别就是需要我们手动拼接创建</p>\n</blockquote>\n<p>现在<code class="gatsby-code-text">name-loader</code>已经开发完成，接下来只要按照<a href="https://webpack.js.org/contribute/writing-a-loader/">官方文档</a>的说明的使用方法，加载一下这个loader就可以了:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token regex">/\\.tpl$/</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./picture-loader/name-loader.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                name<span class="token punctuation">:</span> <span class="token string">\'James\'</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>接下来我们测试一下在实际项目中怎么使用<code class="gatsby-code-text">.tpl</code>格式的文件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-tpl"><code class="gatsby-code-tpl">Hello,I am {{name}}.</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> tpl <span class="token keyword">from</span> <span class="token string">\'./test-name.tpl\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>tpl<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>现在在项目中已经具体使用我们的loader了</p>\n<h3 id="loader的常用api"><a href="#loader%E7%9A%84%E5%B8%B8%E7%94%A8api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>loader的常用API</h3>\n<h4 id="获取loader的options"><a href="#%E8%8E%B7%E5%8F%96loader%E7%9A%84options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>获取loader的options</h4>\n<p>借助webpack提供的<code class="gatsby-code-text">loader-utils</code>工具包可以通过<code class="gatsby-code-text">getOptions</code>方法直接获取到用户设置的options</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'loader-utils\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> options <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h4 id="处理二进制数据"><a href="#%E5%A4%84%E7%90%86%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%95%B0%E6%8D%AE" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>处理二进制数据</h4>\n<p>webpack默认的传递给loader的内容是UTF-8格式编码的字符串，但是有些场景下loader是处理二进制的文件的，例如图片，那么我们就需要告诉webpack,传递给loader二进制的数据给我们的loader,实现方式为<code class="gatsby-code-text">module.exporst.raw = true</code></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  source <span class="token keyword">instanceof</span> <span class="token class-name">Buffer</span> <span class="token operator">===</span> <span class="token boolean">true</span>\n  <span class="token keyword">return</span> source\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exporst<span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>\n      </div>\n<h4 id="异步与同步"><a href="#%E5%BC%82%E6%AD%A5%E4%B8%8E%E5%90%8C%E6%AD%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>异步与同步</h4>\n<p>上面的介绍和例子中，我们的loader都是同步处理数据的，但是JavaScript中异步才是绝大多数情况，例如:某个loader需要读写硬盘才能得到结果，如果采用同步的方式，则会阻塞整个构建，导致构建非常缓慢，webpack提供了异步处理结果的方式：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 告诉 Webpack 本次转换是异步的，Loader 会在 callback 中回调结果</span>\n    <span class="token keyword">var</span> loaderCallback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">someAsyncOperation</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> result<span class="token punctuation">,</span> sourceMaps<span class="token punctuation">,</span> ast<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 通过 callback 返回异步执行后的结果</span>\n        <span class="token function">loaderCallback</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> result<span class="token punctuation">,</span> sourceMaps<span class="token punctuation">,</span> ast<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<blockquote>\n<p>由于node.js的单线程，建议尽量都把loader写成异步的方式，避免长时间的同步的计算</p>\n</blockquote>\n<h4 id="缓存"><a href="#%E7%BC%93%E5%AD%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缓存</h4>\n<p>某些情况下，某些转换操作需要大奖的极端非常耗时，如果每次构建都要重复执行转换，这样效率非常低下，所以可以尽量使用缓存：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cacheable <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cacheable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="emitfile"><a href="#emitfile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>emitFile</h4>\n<p>在dev环境下往memory中写入一个文件，在prod环境下，向磁盘写入文件，这个功能在file-loader和图片处理中非常的常见</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emitFile</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> string<span class="token punctuation">,</span> content<span class="token punctuation">:</span> Buffer<span class="token operator">|</span>string<span class="token punctuation">,</span> sourceMap<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h4 id="请求路径"><a href="#%E8%AF%B7%E6%B1%82%E8%B7%AF%E5%BE%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>请求路径</h4>\n<p>如果我们想要获取资源在请求的时候的原路径，可以使用<code class="gatsby-code-text">this.resource</code>属性获取，并且包含资源的<code class="gatsby-code-text">query</code>\n请求：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> girl <span class="token keyword">from</span> <span class="token string">\'./girl.jpg?size=360\'</span></code></pre>\n      </div>\n<p>在loader中获取请求的路径：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> resource <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resource\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>相对而言options是一个基础的统一的配置项，query可以定制请求的资源的配置项，eg:responsive image中请求不同大小的图片</p>\n</blockquote>\n<h3 id="summary"><a href="#summary" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Summary</h3>\n<p>一个loader从本质上来说就做了以下三件事：</p>\n<ul>\n<li>将源文件的内容转换为JavaScript值，可能是字符串，eg:name-loader，把模块的内容转换为字符串</li>\n<li>将引用的具体的文件，转换为对文件的请求，eg:url-loader把对图片的请求转换为对图片路径</li>\n<li>将构建的结果，手动拼接为JavaScript的模块，并导出提供给应用程序的其他部分使用</li>\n</ul>',frontmatter:{title:"webpack loader",img:"./img/2015-03-25.jpg",author:["Sylvenas"],excerpt:"webpack loader实现的基本原理",catalogue:["webpack原理","webpack的核心概念","webpack构建流程","webpack-loader","Writing A Loader","loader的常用API","Summary"]},fields:{date:"April 23, 2018",path:"blog/bundlers/2018-04-24-webpack-loader.md",slug:"/blog/2018/04/24/webpack-loader.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"shell intro"},fields:{slug:"/blog/2021/06/02/shell-intro.html"}}},{node:{frontmatter:{title:"React Hooks 原理及实现"},fields:{slug:"/blog/2021/03/30/react-hooks.html"}}},{node:{frontmatter:{title:"npm package依赖管理"},fields:{slug:"/blog/2021/03/03/npm-package.html"}}},{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"自然变换 - Natural Transformation"},fields:{slug:"/blog/2020/05/02/自然变换.html"}}},{node:{frontmatter:{title:"遍历与队列 - Traversable"},fields:{slug:"/blog/2020/04/25/遍历与队列.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}}]}},pathContext:{slug:"/blog/2018/04/24/webpack-loader.html"}}}});