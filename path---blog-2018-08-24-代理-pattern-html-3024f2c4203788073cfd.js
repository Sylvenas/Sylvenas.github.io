webpackJsonp([0x9f185974b5e6],{460:function(n,s){n.exports={data:{markdownRemark:{html:'<h3 id="模仿类"><a href="#%E6%A8%A1%E4%BB%BF%E7%B1%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>模仿类</h3>\n<p>多年以来，JavaScript中有一种奇怪的行为一直在被无耻地滥用，那就是<code>模仿类</code>。我们会仔细分析这种方法。\n这种奇怪的“类似类”的行为利用了函数的一种特殊特性:所有的函数默认都会拥有一个名为<code>prototype</code>的公有并且不可枚举的属性，它会指向另一个对象:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span>\nFoo<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// { }</span>\n\n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nObject<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span> <span class="token operator">===</span> Foo<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// true</span>\n</code></pre>\n      </div>\n<p>这个对象通常被称为<code>Foo的原型</code>，因为我们通过名为<code>Foo.prototype</code>的属性引用来访问它。</p>\n<p>调用<code>new Foo()</code>时会创建<code>a</code>，其中的一步就是给<code>a</code>一个内部的<code>[[Prototype]]</code>链接，关联到<code>Foo.prototype</code>指向的那个对象。\n下面是<code>new</code>操作符的具体实现，也就是假如没有<code>new</code>操作符的时候，我们该怎么实现<code>new</code>呢？</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">newObject</span><span class="token punctuation">(</span>Constructor<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Constructor<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在面向类的语言中，类可以被复制(或者说实例化)多次，就像用模具制作东西一样。之所以会这样是因为实例化(或者继承)一个类就意味着“把类的行为复制到物理对象中”，对于每一个新实例来说都会重复这个过程。\n但是在JavaScript中，并没有类似的复制机制。你不能创建一个类的多个实例，只能创建多个对象，它们<code>[[Prototype]]</code>关联的是同一个对象。但是在默认情况下并不会进行复制， 因此这些对象之间并不会完全失去联系，它们是互相关联的。</p>\n<p><code>new Foo()</code>会生成一个新对象(我们称之为a)，这个新对象的内部链接<code>[[Prototype]]</code>关联的是<code>Foo.prototype</code>对象。</p>\n<p>最后我们得到了两个对象，它们之间互相关联，就是这样。</p>\n<p>我们并没有初始化一个类，实际上我们并没有从“类”中复制任何行为到一个对象中，只是让两个对象互相关联。</p>\n<p>继承意味着复制操作，JavaScript(默认)并不会复制对象属性。</p>\n<p>相反，JavaScript会在两个对象之间创建一个关联，这样一个对象就可以通过委托访问另一个对象的属性和函数。</p>\n<p><code>Object.create(..)</code> 是一个大英雄，现在是时候来弄明白为 什么了:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\nsomething<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">"Tell me something good..."</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> bar <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span> foo <span class="token punctuation">)</span><span class="token punctuation">;</span> bar<span class="token punctuation">.</span><span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Tell me something good...</span>\n</code></pre>\n      </div>\n<p><code>Object.create(..)</code> 会创建一个新对象(<code>bar</code>)并把它关联到我们指定的对象(<code>foo</code>)，这样 我们就可以充分发挥<code>[[Prototype]]</code>机制的威力(委托)并且避免不必要的麻烦(比如使用<code>new</code>的构造函数调用会生成<code>.prototype</code> 和<code>.constructor</code>引用)。</p>\n<p>换句话说JavaScript中这个原型链机制的本质就是对象之间的关联关系，对象之间从未存在过“继承”这种东西</p>',frontmatter:{title:"代理模式",img:"./img/2018-01-16.jpeg",author:["Sylvenas"]},fields:{date:"August 23, 2018",path:"blog/javascript/2018-08-24-代理-pattern.md",slug:"/blog/2018/08/24/代理-pattern.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"What is 'this' in JavaScript"},fields:{slug:"/blog/2018/06/24/this.html"}}},{node:{frontmatter:{title:"react 性能优化：arrow function in react"},fields:{slug:"/blog/2018/06/15/arrow-in-react.html"}}},{node:{frontmatter:{title:"react 条件渲染"},fields:{slug:"/blog/2018/05/26/react-if.html"}}},{node:{frontmatter:{title:"higher-order component(HOC)"},fields:{slug:"/blog/2018/05/21/hight-order-component.html"}}},{node:{frontmatter:{title:"arrow function this"},fields:{slug:"/blog/2018/03/16/arrow-function-this.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--responsive-image"},fields:{slug:"/blog/2018/03/10/responsive-img.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--placeholder"},fields:{slug:"/blog/2018/03/09/placeholder.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--lazy-load"},fields:{slug:"/blog/2018/03/08/lazy-loading.html"}}}]}},pathContext:{slug:"/blog/2018/08/24/代理-pattern.html"}}}});