webpackJsonp([0x9325e85f9977],{487:function(n,s){n.exports={data:{markdownRemark:{html:'<p>所谓<code>Semigroup</code>(半群)，其实就是含有concat方法的数据类型，典型的如字符串和数组，看代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> resStr <span class="token operator">=</span> <span class="token string">\'a\'</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span> \n<span class="token comment" spellcheck="true">// => \'abc\'</span>\n\n<span class="token keyword">const</span> resArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// => [1,2,3,4,5,6]</span>\n</code></pre>\n      </div>\n<p>实际上，我们还可以发现一个规律<code>Semigroup</code>是可以随意的合并操作的，什么意思呢？</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> resStr <span class="token operator">=</span> <span class="token string">\'a\'</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// => \'abc\'</span>\n\n<span class="token keyword">const</span> resArr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// => [1,2,3,4,5,6]</span>\n</code></pre>\n      </div>\n<p>无论前后的顺序如何，或者无论怎么组合，得到的结果是一致的。\n完全类似于数据的加法运算：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> \n<span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span>\n<span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>但是我们却不能直接使用<code>1.concat(2).concat(3)</code>这样的代码，因为number并没有实现<code>concat</code>方法，但是我们可以自己简单实现一个Sum的<code>Semigroup</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> Sum <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">Sum</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`Sum(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nSum<span class="token punctuation">.</span>empty <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>现在就可以直接这样使用Sum了：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>Sum<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// => Sum(6)</span>\n<span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// => Sum(6)</span>\n</code></pre>\n      </div>\n<p>Sum的使用场景不是很多，仅仅是为了学习而建立的，下面看几个使用场景比较多的<code>Semigroup</code></p>\n<ul>\n<li>\n<p>All:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span>  <span class="token comment" spellcheck="true">// true</span>\n<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment" spellcheck="true">// false</span>\n<span class="token punctuation">{</span>\n<span class="token keyword">const</span> All <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">All</span><span class="token punctuation">(</span>x <span class="token operator">&amp;&amp;</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`All(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nAll<span class="token punctuation">.</span>empty <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">All</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">All</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">All</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>All<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>First:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n<span class="token keyword">const</span> First <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> _ <span class="token operator">=></span>\n        <span class="token function">First</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`First(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">First</span><span class="token punctuation">(</span><span class="token string">\'bob\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token string">\'smith\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>Max &#x26; Min</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n<span class="token keyword">const</span> Max <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">Max</span><span class="token punctuation">(</span>x <span class="token operator">></span> y <span class="token operator">?</span> x <span class="token punctuation">:</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`Max(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nMax<span class="token punctuation">.</span>empty <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Max</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> Min <span class="token operator">=</span> x <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    x<span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token function">Min</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y <span class="token operator">?</span> x <span class="token punctuation">:</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token template-string"><span class="token string">`Min(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nMin<span class="token punctuation">.</span>empty <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Min</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>Either</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> Right <span class="token operator">=</span> x <span class="token operator">=></span>\n<span class="token punctuation">(</span><span class="token punctuation">{</span>\n    chain<span class="token punctuation">:</span> f <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    ap<span class="token punctuation">:</span> other <span class="token operator">=></span> other<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    traverse<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">of</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>Right<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    map<span class="token punctuation">:</span> f <span class="token operator">=></span> <span class="token function">Right</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    fold<span class="token punctuation">:</span> <span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">g</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    concat<span class="token punctuation">:</span> o <span class="token operator">=></span>\n        o<span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span>_ <span class="token operator">=></span> <span class="token function">Right</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            y <span class="token operator">=></span> <span class="token function">Right</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    inspect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token string">`Right(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n<p>const Left = x =>\n({\nchain: f => Left(x),\nap: other => Left(x),\ntraverse: (of, f) => of(Left(x)),\nmap: f => Left(x),\nfold: (f, g) => f(x),\nconcat: o =>\no.fold(_ => Left(x),\ny => o),\ninspect: () => <code>Left(${x})</code>\n})</p>\n<p>const fromNullable = x =>\nx != null ? Right(x) : Left(null)</p>\n<p>const tryCatch = f => {\ntry {\nreturn Right(f())\n} catch (e) {\nreturn Left(e)\n}\n}</p>\n<p>// List from <a href="https://github.com/DrBoolean/immutable-ext">https://github.com/DrBoolean/immutable-ext</a>\nconst stats = List.of({page:‘home’, view: 40},\n{page:‘about’, view: 40},\n{page:‘blog’})\nstate.foldMap(x =>\nfromNullable(x.views).map(Sum),\nRight(Sum.empty()))</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code></code></pre>\n      </div>',frontmatter:{title:"FP18：Semigroup",img:"./img/2018-12-13.jpeg",author:["Sylvenas"],excerpt:"所谓`Semigroup`(半群)，其实就是含有concat方法的数据类型，典型的如字符串和数组...",catalogue:null},fields:{date:"December 12, 2018",path:"blog/functional/2018-12-13-FP18-Semigroup.md",slug:"/blog/2018/12/13/FP18-Semigroup.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"FP13：IO - keep code pure"},fields:{slug:"/blog/2018/08/08/FP13-IO.html"}}},{node:{frontmatter:{title:"FP12：Either:Left or Right"},fields:{slug:"/blog/2018/08/03/FP12-Either.html"}}},{node:{frontmatter:{title:"FP11：Schrödinger's Maybe"},fields:{slug:"/blog/2018/08/02/FP11-Maybe.html"}}}]}},pathContext:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}}});