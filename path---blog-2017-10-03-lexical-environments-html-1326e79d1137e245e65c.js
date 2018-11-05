webpackJsonp([76048864908282],{426:function(n,a){n.exports={data:{markdownRemark:{html:'<p>尽管通常认为JavaScript是一门“动态”或者“解释执行”的语言，但是事实上JavaScript是一门“编译”语言。而在传统的编译语言的流程中，编译主要分为一下三个步骤：</p>\n<ul>\n<li>词法分析 - 这个过程会将由字符组成的字符串分解成有意义的代码块，这些代码块被称为词法单元。例如：<code>var a = 2</code>。这段程序通常会被分解成下面这些词法单元：<code>var</code>,<code>a</code>,<code>=</code>,<code>2</code>。</li>\n<li>语法分析 — 这个过程是将词法单元流转换成一个由元素主机嵌套所组成的代表了程序语法结构的树，这个树被称为“抽象语法书”</li>\n<li>代码生成 - 就是将语言代码，转换为机器能够理解并执行的代码，抛开细节，简单来说，例如：<code>var a = 2</code>,就是创建一个叫做<code>a</code>的变量(包括分配内存等)，并将一个值2储存在a中。</li>\n</ul>\n<p>对于JavaScript来说，任何代码在执行之前都要进行编译，大部分情况下比编译发生在代码执行之前的几微秒(甚至更短！)的时间内，因此，JavaScript编译器首先会对<code>var a = 2</code>,这段代码进行编译，然后做好执行它的准备，并且通常马上就回执行它。</p>\n<h3 id="lexical-environment"><a href="#lexical-environment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>lexical environment</h3>\n<p><code>词法环境</code>（Lexical Environments）是一种规范类型，用于根据ECMAScript代码的词法嵌套结构来定义标识符与特定变量和函数的关联。词法环境由一个<code>环境记录</code>（Environment Record）和一个可能为空的<code>外部词法环境</code>（outer Lexical Environment）引用组成。通常，词法环境与ECMAScript代码的特定语法结构相关联，例如FunctionDeclaration，BlockStatement或TryStatement的Catch子句，并且每次执行这样的代码时都会创建新的词法环境。</p>\n<p>环境记录记录了在其关联的词法环境作用域内创建的标识符绑定。它被称为词法环境的环境记录。环境记录也是一种规范类型。规范类型对应于在算法中用来描述ECMAScript语言结构和ECMAScript语言类型的语义的元值。</p>\n<p>全局环境是一个没有外部环境的词法环境。全局环境的外部环境引用为null。\n模块环境是一个包含模块顶层声明绑定的词法环境。模块环境的外部环境是一个全局环境。\n函数环境是一个对应于ECMAScript函数对象调用的词法环境。</p>\n<p>上面的描述是官方文档的翻译，是在是有点晦涩难懂，举个例子来说明一下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> a1<span class="token punctuation">,</span>b1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>看上面这段简单的代码,JavaScript在执行上面的这段代码的时候，做了如下操作：</p>\n<ul>\n<li>创建了一个词法环境我把它记为<code>LE1</code>（这里的<code>LE1</code>其实是一个<code>global environment</code>）。</li>\n<li>确定<code>LE1</code>的环境记录（我在这不细说环境记录，只知道它里面包含了<code>{a，b，foo}</code>标识符的记录，我会在之后详细介绍）。</li>\n<li>设置外部词法环境引用，因为<code>LE1</code>已经在最外面了，于是外部词法环境引用就是<code>null</code>，到此<code>LE1</code>就确立完毕了。</li>\n<li>接着执行代码，当执行到<code>foo()</code>这句话时，js调用了foo函数。此时foo函数是一个<code>FunctionDeclaration</code>，于是js开始执行foo函数。</li>\n<li>创建了一个新的词法环境记为<code>LE2</code>.</li>\n<li>设置<code>LE2</code>的外部词法环境引用，很明显<code>LE2</code>的外部词法环境引用就是<code>LE1</code>。</li>\n<li>确定<code>LE2</code>的环境记录<code>{a1,b1}</code> 。</li>\n<li>最后继续执行<code>foo</code>函数，直到函数执行完毕。</li>\n</ul>\n<blockquote>\n<p>注意：所有创建词法环境以及环境记录都是不可见的，编译器内部实现。</p>\n</blockquote>\n<p>简单的用图来表示一下<code>LE1</code>和<code>LE2</code>的关系\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/2c154a5e08b94d7129f77c838a266146-d14e4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 329px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.465753424657535%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA30lEQVQoz6VQ2YqEQAz0///KJ0FRwQMRBVFEEU9UPFCopcIqM+487LIF1dpJpZK0gm9omoa2bfEbmKaJOI4/5hQeNBrH8QcZtywLqqrC933ouo5lWT5qL96GVVUhSRIpbJpG2HUdzvPEuq6Y5xn7vqOua2EYhkL+M0fchiykGRlFkdxZzO8TLNq2DXmeI8sy9H0v2jdDJm3bhmEYMhnByRh/rlSWpcQdx4HneWL42kwM2YmTua6Loiju4lfxhWmaRBMEgazMBpeeGynPdY7jwH/wZsjHHYYBaZreD/1XfAERkGXYafwFFAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="词法环境"\n        title=""\n        src="/static/2c154a5e08b94d7129f77c838a266146-d14e4.png"\n        srcset="/static/2c154a5e08b94d7129f77c838a266146-33acf.png 210w,\n/static/2c154a5e08b94d7129f77c838a266146-74fc5.png 420w,\n/static/2c154a5e08b94d7129f77c838a266146-d14e4.png 438w"\n        sizes="(max-width: 329px) 100vw, 329px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="emvironment-record"><a href="#emvironment-record" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Emvironment Record</h3>\n<p>环境记录是一个抽象类，它具有三个具体的子类，分别是声明式环境记录，对象环境记录和全局环境记录。其中全局环境记录在逻辑上是单个记录，但是它被指定为封装对象环境记录和声明性环境记录的组合。</p>\n<h4 id="对象环境记录（object-environment-record）"><a href="#%E5%AF%B9%E8%B1%A1%E7%8E%AF%E5%A2%83%E8%AE%B0%E5%BD%95%EF%BC%88object-environment-record%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对象环境记录（Object Environment Record）</h4>\n<p>每个对象环境记录都与一个对象联系在一起，这个对象被称为<code>绑定对象</code>(binding object)。一个对象环境记录绑定一组字符串标识符名称，直接对应于其绑定对象的属性名称。无论绑定对象自己的和继承的属性的[[Enumerable]]设置如何，它们都包含在集合中。由于可以动态地从对象中添加和删除属性，因此对象环境记录绑定的一组标识符可能会因为任何添加或删除对象属性操作的副作用而改变。即使相应属性的<code>Writable</code>的值为false。因此由于这种副作用而创建的任何绑定都将被视为可变绑定。对象环境记录不存在不可变的绑定。\nwith语句用到的就是对象环境记录，我们看一下简单的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> withObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n    a<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>\n    foo<span class="token punctuation">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">with</span><span class="token punctuation">(</span>withObject<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment" spellcheck="true">//2</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在js代码执行到with语句的时候，</p>\n<ul>\n<li>创建新的词法环境。</li>\n<li>接着创建了一个对象环境记录即为OER，OER包含withObject这个绑定对象，OER中的字符串标识符名称列表为withObject中的属性«a,foo»，在with语句中的变量操作默认在绑定对象中的属性中优先查找。</li>\n<li>为OER设置外部词法环境引用。</li>\n</ul>\n<h4 id="声明性环境记录（declarative-environment-record）"><a href="#%E5%A3%B0%E6%98%8E%E6%80%A7%E7%8E%AF%E5%A2%83%E8%AE%B0%E5%BD%95%EF%BC%88declarative-environment-record%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>声明性环境记录（Declarative Environment Record）</h4>\n<p>每个声明性环境记录都与包含变量，常量，let，class，module，import和/或function的声明的ECMAScript程序作用域相关联。声明性环境记录绑定了包含在其作用域内声明定义的标识符集。这句话很好理解，举个例子如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> x <span class="token keyword">from</span> <span class="token string">\'***\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// 这时声明性环境记录中就有了«x,a,b,c,foo,Bar»这样一组标识符，当然实际存放的结构肯定不是这个样子的，还要复杂。</span>\n</code></pre>\n      </div>\n<h4 id="函数环境记录（function-environment-record）"><a href="#%E5%87%BD%E6%95%B0%E7%8E%AF%E5%A2%83%E8%AE%B0%E5%BD%95%EF%BC%88function-environment-record%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>函数环境记录（Function Environment Record）</h4>\n<p>函数环境记录是一个声明性环境记录，它用来表示function中的顶级作用域，此外如果函数不是一个箭头函数（ArrowFunction），则为这个函数提供一个this绑定。如果一个函数不是一个ArrowFunction函数并引用了super，则它的函数环境记录还包含从该函数内执行super方法调用的状态。\n函数环境记录有下列附加的字段:</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th>字段名称</th>\n<th>值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>[\n[\nThisValue\n]\n]</td>\n<td>Any</td>\n<td>用于该函数调用的this值</td>\n</tr>\n<tr>\n<td>[\n[\nThisBindingStatus\n]\n]</td>\n<td>“lexical” ，“initialized” ，“uninitialized”</td>\n<td>如果值是“lexical”，这是一个ArrowFunction，并且没有一个本地的this值。</td>\n</tr>\n<tr>\n<td>[\n[\nFunctionObject\n]\n]</td>\n<td>Object</td>\n<td>一个函数对象，它的调用导致创建该环境记录</td>\n</tr>\n<tr>\n<td>[\n[\nHomeObject\n]\n]</td>\n<td>Object或者undefined</td>\n<td>如果关联的函数具有super属性访问权限，并且不是一个ArrowFunction，则[\n[\nHomeObject\n]\n]是该函数作为方法绑定的对象。 [\n[\nHomeObject\n]\n]的默认值是undefined。</td>\n</tr>\n<tr>\n<td>[\n[\nNewTarget\n]\n]</td>\n<td>Object或者undefined</td>\n<td>如果该环境记录是由[\n[\nConstruct\n]\n]的内部方法创建的，则[\n[\nNewTarget\n]\n]就是[\n[\nConstruct\n]\n]的newTarget参数的值。否则，它的值是undefined。</td>\n</tr>\n</tbody>\n</table>\n<p>简单介绍一下这些字段，<code>[[ThisValue]]</code>这个字段的值就是<code>函数中的this对象</code>，<code>[[ThisBindingStatus]]</code>中”initialized” ，“uninitialized”看字面意思也知道了，主要是<code>lexical</code>这个状态为什么是代表<code>ArrowFunction</code>，我的理解是ArrowFunction中是没有一个本地的this值，所以ArrowFunction中的this引用不是指向调用该函数的对象，而是根据<code>词法环境</code>进行查找，本地没有就向外部词法环境中查找this值，不断向外查找，直到查到this值，所以[[ThisBindingStatus]]的值是<code>lexical</code>。看下面例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">\'global.a\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n    a<span class="token punctuation">:</span><span class="token string">\'obj1.a\'</span><span class="token punctuation">,</span>\n    foo<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n    a<span class="token punctuation">:</span><span class="token string">\'obj2.a\'</span><span class="token punctuation">,</span>\n    arrow<span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>\n     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nobj1<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                  <span class="token comment" spellcheck="true">// obj1.a</span>\nobj2<span class="token punctuation">.</span><span class="token function">arrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                <span class="token comment" spellcheck="true">// global.a不是obj2.a</span>\nobj1<span class="token punctuation">.</span>foo<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment" spellcheck="true">// obj2.a</span>\nobj2<span class="token punctuation">.</span>arrow<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment" spellcheck="true">// global.a  强制绑定对ArrowFunction没有作用</span>\n</code></pre>\n      </div>\n<p>对ArrowFunction中this的有趣的说法就是：我没有this，你送我个this我也不要，我就喜欢拿别人的this用，this还是别人的好。</p>\n<p>[[FunctionObject]]：在上一个例子中指得就是obj1.foo、obj1.arrow。\n[[HomeObject]]：只有函数有super访问权限且不是ArrowFunction才有值。看个MDN上的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"method 1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nObject<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nobj2<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                          <span class="token comment" spellcheck="true">//method 1</span>\n\n<span class="token comment" spellcheck="true">//在这里obj2就是[[HomeObject]]</span>\n<span class="token comment" spellcheck="true">//注意不能这么写：</span>\n<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  foo<span class="token punctuation">:</span><span class="token keyword">function</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment" spellcheck="true">//error,function定义下不能出现super关键字，否则报错。</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>                 \n</code></pre>\n      </div>\n<p>[[NewTarget]]：构造函数才有[[Construct]]这个内部方法，如用new关键词调用的函数就会有[[Construct]]，newTarget参数我们可以通过new.target在函数中看到。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">newTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">newTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment" spellcheck="true">//undefined</span>\n<span class="token keyword">new</span> <span class="token class-name">newTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment" spellcheck="true">/*function newTarget(){\n                              console.log(new.target);\n                        }\n                        new.target指代函数本身*/</span>\n</code></pre>\n      </div>\n<h3 id="全局环境记录（global-environment-records）"><a href="#%E5%85%A8%E5%B1%80%E7%8E%AF%E5%A2%83%E8%AE%B0%E5%BD%95%EF%BC%88global-environment-records%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>全局环境记录（Global Environment Records）</h3>\n<p>全局环境记录用于表示在共同领域（Realms）中处理所有共享最外层作用域的ECMAScript Script元素。全局环境记录提供了内置全局绑定，全局对象的属性以及所有在脚本中发生的顶级声明。\n全局环境记录有下表额外的字段。</p>\n<table>\n<thead>\n<tr>\n<th>字段名称</th>\n<th>值</th>\n<th>含义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>[\n[\nObjectRecord\n]\n]</td>\n<td>Object Environment Record</td>\n<td>绑定对象是一个全局对象。它包含全局内置绑定以及关联领域的全局代码中FunctionDeclaration，GeneratorDeclaration，AsyncFunctionDeclaration和VariableDeclaration绑定。</td>\n</tr>\n<tr>\n<td>[\n[\nGlobalThisValue\n]\n]</td>\n<td>Object</td>\n<td>在全局作用域内返回的this值。宿主可以提供任何ECMAScript对象值。</td>\n</tr>\n<tr>\n<td>[\n[\nDeclarativeRecord\n]\n]</td>\n<td>Declarative Environment Record</td>\n<td>包含在关联领域的全局代码中除了FunctionDeclaration，GeneratorDeclaration，AsyncFunctionDeclaration和VariableDeclaration绑定之外的所有声明的绑定</td>\n</tr>\n<tr>\n<td>[\n[\nVarNames\n]\n]</td>\n<td>List of String</td>\n<td>关联领域的全局代码中的FunctionDeclaration，GeneratorDeclaration，AsyncFunctionDeclaration和VariableDeclaration声明绑定的字符串名称。</td>\n</tr>\n</tbody>\n</table>\n<p>这里提一下FunctionDeclaration，GeneratorDeclaration，AsyncFunctionDeclaration和VariableDeclaration不在Declarative Environment Record中，而是在Object Environment Record中，这也解释了为什么在全局代码中用var、function声明的变量自动的变为全局对象的属性而let、const、class等声明的变量却不会成为全局对象的属性。</p>',frontmatter:{title:"lexical environment",img:"./img/2017-10-03.jpeg",author:["sylvenas"]},fields:{date:"October 02, 2017",path:"blog/javascript/2017-10-03-lexical-environments.md",slug:"/blog/2017/10/03/lexical-environments.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"What is 'this' in JavaScript"},fields:{slug:"/blog/2018/06/24/this.html"}}},{node:{frontmatter:{title:"react 性能优化：arrow function in react"},fields:{slug:"/blog/2018/06/15/arrow-in-react.html"}}},{node:{frontmatter:{title:"react 条件渲染"},fields:{slug:"/blog/2018/05/26/react-if.html"}}},{node:{frontmatter:{title:"higher-order component(HOC)"},fields:{slug:"/blog/2018/05/21/hight-order-component.html"}}},{node:{frontmatter:{title:"arrow function this"},fields:{slug:"/blog/2018/03/16/arrow-function-this.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--responsive-image"},fields:{slug:"/blog/2018/03/10/responsive-img.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--placeholder"},fields:{slug:"/blog/2018/03/09/placeholder.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--lazy-load"},fields:{slug:"/blog/2018/03/08/lazy-loading.html"}}}]}},pathContext:{slug:"/blog/2017/10/03/lexical-environments.html"}}}});