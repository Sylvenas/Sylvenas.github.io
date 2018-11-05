webpackJsonp([0x839eea312f9a],{404:function(n,s){n.exports={data:{markdownRemark:{html:'<p>JavaScript有很多个内置对象，像是String,Number这类，我们深入了解一下内置对象，下面列出JS中常见的内置对象。</p>\n<ul>\n<li>String</li>\n<li>Boolean</li>\n<li>Number</li>\n<li>Object</li>\n<li>Function</li>\n<li>Array</li>\n<li>Date</li>\n<li>Error</li>\n<li>RegExp</li>\n<li>Symbol   // ES6\n如果在浏览器中,还有各类的HTMLDomElement,ES6中也有许多新的内置对象。</li>\n</ul>\n<p>这些内置对象怎么这么像函数呢？其实你可以把他们理解为构造函数。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">\'I am a String\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">typeof</span> s<span class="token punctuation">;</span>              <span class="token comment" spellcheck="true">//=> \'object\'</span>\ns <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">//=> true</span>\n</code></pre>\n      </div>\n<p>我们使用之前用过<code>typeof</code>检查一下，发现<code>s</code>是一个<code>object</code>,可以认为内置对象也是<code>Object</code>的子类型，<code>typeof</code>只能显示值的类型，因此只能显示<code>object</code>,<code>function</code>,<code>symbol</code>等。</p>\n<h3 id="class属性"><a href="#class%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>[[Class]]属性</h3>\n<p>既然<code>typeof</code>无能为力，那如何确定其他内置对象的类型呢。这些内置对象都有一个内置的隐藏属性<code>[[Class]]</code>,需要用<code>Object.prototype.toString()</code>方法来判断。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// "[object Array]"</span>\n</code></pre>\n      </div>\n<p>返回值中的’Array’就是<code>[[Class]]</code>的属性了，但是这个方法一样有些奇怪的地方。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>undefined<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment" spellcheck="true">//=> "[object Undefined]"</span>\nObject<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment" spellcheck="true">//=> "[object Null ]"</span>\nObject<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment" spellcheck="true">//=> "[object Number]"</span>\nObject<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">\'build-in type\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">//=> "[object String]"</span>\n</code></pre>\n      </div>\n<p><code>WTF</code>…JavaScript这个语言中检测方法怎么都不按照基本法则啊！<code>1</code>和<code>\'build-in type\'</code>明明是内置类型，怎么也成<code>object</code>了？？那是因为内置类型会被装箱(Boxing Wrappers),那么什么是装箱呢？</p>\n<h3 id="boxing-wrappers"><a href="#boxing-wrappers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Boxing Wrappers</h3>\n<p>前面我们看到在检查内置类型的时候，它们变成了对象，这种行为就叫装箱。那装箱有什么用呢？我猜你可能使用过这个功能但全然没注意过这个问题。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token string">\'abc\'</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>          <span class="token comment" spellcheck="true">// 3</span>\n<span class="token string">\'lower\'</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \'LOWER\'</span>\n</code></pre>\n      </div>\n<p>我们要知道JS中的所有内置方法都保存在某个<code>构造函数的prototype对象</code>中，但是像 <code>\'abc\'</code>,<code>1</code> 这种内置类型并不是对象，没有属性也没有方法，自然也没有<code>[[proto]](__proto__)</code>，不能依靠原型链向上调用方法，因此在执行某些方法时，JS会把内置类型装箱成对象，让其获取调用原型链上的方法的能力。</p>\n<p>看到这里你一定想到了一个好主意，就是如果你须要在一个<code>for</code>循环中 使用<code>\'abc\'.length</code>，那JS不是每次都要进行装箱，你可以预先构造一个<code>new String(\'abc\')</code> 对象，这样是不是可以加速运行代码了？有趣的问题，你可千万不要这么做，因为这个问题早期的开发者早就想到了，因此他们已经做了优化，而如果你想来个预优化处理很可能适得其反。所以建议你不要使用构造函数创建一个内置类型对应的内置对象，而是让JS自己去装箱。</p>\n<h3 id="unboxing"><a href="#unboxing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unboxing</h3>\n<p>既然能装箱，必然也有拆箱的方法，那就是调用<code>valueOf()</code>这个函数，可以将一个内置对象的primitive值取出。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">\'abc\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \'abc\'</span>\n</code></pre>\n      </div>\n<p>这是一种显式的拆箱方法。</p>',frontmatter:{title:"JS内置对象理解",img:"./img/2014-04-03.jpg",author:["sylvenas"]},fields:{date:"April 02, 2014",path:"blog/javascript/2014-04-03-js-natives.md",slug:"/blog/2014/04/03/js-natives.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"What is 'this' in JavaScript"},fields:{slug:"/blog/2018/06/24/this.html"}}},{node:{frontmatter:{title:"react 性能优化：arrow function in react"},fields:{slug:"/blog/2018/06/15/arrow-in-react.html"}}},{node:{frontmatter:{title:"react 条件渲染"},fields:{slug:"/blog/2018/05/26/react-if.html"}}},{node:{frontmatter:{title:"higher-order component(HOC)"},fields:{slug:"/blog/2018/05/21/hight-order-component.html"}}},{node:{frontmatter:{title:"arrow function this"},fields:{slug:"/blog/2018/03/16/arrow-function-this.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--responsive-image"},fields:{slug:"/blog/2018/03/10/responsive-img.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--placeholder"},fields:{slug:"/blog/2018/03/09/placeholder.html"}}},{node:{frontmatter:{title:"web image 加载优化方案--lazy-load"},fields:{slug:"/blog/2018/03/08/lazy-loading.html"}}}]}},pathContext:{slug:"/blog/2014/04/03/js-natives.html"}}}});