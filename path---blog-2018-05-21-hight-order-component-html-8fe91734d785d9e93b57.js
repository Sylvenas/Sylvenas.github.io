webpackJsonp([0xe20292cfd8e0],{494:function(n,s){n.exports={data:{markdownRemark:{html:'<p>在函数式编程中，有一个概念叫做<a href="">高阶函数</a>,高阶函数通常意义上来说会对传入的函数进行增强，返回一个添加了额外功能的新函数。</p>\n<p>当高阶函数的概念应用到React组件上的时候，被称为高阶组件，首先来看一下高阶组件长什么样子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">hoc</span> <span class="token operator">=</span> InnerComponent <span class="token operator">=></span> EnhancedComponent</code></pre>\n      </div>\n<p>高阶组件其实就是一个函数，它接收组件作为参数，对组件进行增强后返回。</p>\n<blockquote>\n<p>个人觉得其实应该叫<code class="gatsby-code-text">组件工厂</code>更为合理</p>\n</blockquote>\n<p>具体看一下高阶组件的实现方法：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token constant">HOC</span><span class="token punctuation">(</span>InnerComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n\tstate <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// ... some state</span>\n\t<span class="token punctuation">}</span>  \n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      \n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InnerComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">state</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>    \n    <span class="token punctuation">}</span>  \n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>其实<code class="gatsby-code-text">HOC</code>就是接收一个组件作为参数,然后新生成一个组件，不管这个新的组件内做了什么操作，获取了什么数据，统统通过<code class="gatsby-code-text">props</code>传递给<code class="gatsby-code-text">InnerComponent</code>,并返回新生成的组件</p>\n<blockquote>\n<p>这里也可以理解为 props proxy</p>\n</blockquote>\n<h3 id="高阶组件的主要用途"><a href="#%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6%E7%9A%84%E4%B8%BB%E8%A6%81%E7%94%A8%E9%80%94" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>高阶组件的主要用途</h3>\n<h4 id="操作props"><a href="#%E6%93%8D%E4%BD%9Cprops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>操作props</h4>\n<p>由于<code class="gatsby-code-text">InnerComponent</code>的所有的<code class="gatsby-code-text">props</code>都是由<code class="gatsby-code-text">HOC</code>函数返回的新组件所提供的，所以我们可以通过高阶组件自由的操作传递给<code class="gatsby-code-text">InnerComponent</code>的<code class="gatsby-code-text">props</code>。</p>\n<p>可以对props执行编辑、删除、新增等等操作,下面的例子展示了把state转换为props传给给InnerComponent,也可以对原有的props,进行新增一个属性之后传递给InnerComponent。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token constant">HOC</span><span class="token punctuation">(</span>InnerComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n\tstate <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// ... some state</span>\n\t<span class="token punctuation">}</span>  \n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t  <span class="token keyword">const</span> newProps<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span> a <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InnerComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">state</span><span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">newProps</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>    \n    <span class="token punctuation">}</span>  \n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4 id="在高阶组件中处理数据逻辑以及partial-applocation的使用"><a href="#%E5%9C%A8%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6%E4%B8%AD%E5%A4%84%E7%90%86%E6%95%B0%E6%8D%AE%E9%80%BB%E8%BE%91%E4%BB%A5%E5%8F%8Apartial-applocation%E7%9A%84%E4%BD%BF%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>在高阶组件中处理数据逻辑以及partial applocation的使用</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">withData</span> <span class="token operator">=</span> url <span class="token operator">=></span> InnerComponent <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Component <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n        data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>InnerComponent<span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> endPoint <span class="token operator">=</span> <span class="token keyword">typeof</span> url <span class="token operator">===</span> <span class="token string">\'function\'</span>\n        <span class="token operator">?</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span>\n        <span class="token punctuation">:</span> url<span class="token punctuation">;</span>\n\n      <span class="token function">fetch</span><span class="token punctuation">(</span>endPoint<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          data\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">List</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token punctuation">:</span> gists<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>gists<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>gist <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gist<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>gist<span class="token punctuation">.</span>updated_at<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n\n<span class="token keyword">const</span> withGists <span class="token operator">=</span> <span class="token function">withData</span><span class="token punctuation">(</span>props <span class="token operator">=></span> <span class="token template-string"><span class="token string">`https://api.github.com/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/gists`</span></span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> ListWithGists <span class="token operator">=</span> <span class="token function">withGists</span><span class="token punctuation">(</span>List<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> ListWithGists</code></pre>\n      </div>\n<h4 id="在高阶组件中处理ref指向不符合预期"><a href="#%E5%9C%A8%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6%E4%B8%AD%E5%A4%84%E7%90%86ref%E6%8C%87%E5%90%91%E4%B8%8D%E7%AC%A6%E5%90%88%E9%A2%84%E6%9C%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>在高阶组件中处理ref指向不符合预期</h4>\n<p>有时候我们想要使用ref来获取实例或者DOM节点，看下面的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Input</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    state <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">\'init-value\'</span> <span class="token punctuation">}</span>\n    <span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> target <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>input1<span class="token punctuation">\'</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">state</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onchange<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token constant">HOC</span><span class="token punctuation">(</span>InnerComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">const</span> <span class="token punctuation">{</span> props <span class="token punctuation">}</span><span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InnerComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> InputHoc <span class="token operator">=</span> <span class="token constant">HOC</span><span class="token punctuation">(</span>Input<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>\n\ttextRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputHoc</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>textRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\t<span class="token punctuation">}</span>\n\t<span class="token function">componentDidMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textRef<span class="token punctuation">)</span> \n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>这个时候我们会发现实际上我们获取到的<code class="gatsby-code-text">this.textRef</code>并不是指向原本的我们想要获取的<code class="gatsby-code-text">InnerComponent</code>的实例，而是指向了<code class="gatsby-code-text">HOC</code>函数返回的新的包装组件。</p>\n<p>而这就是所说的高阶组件会导致<code class="gatsby-code-text">ref</code>指向不符合预期的问题，那么如何解决这个问题呢？</p>\n<p>我们只要在<code class="gatsby-code-text">HOC</code>函数中添加一个新的<code class="gatsby-code-text">ref</code>属性，来指向我们的目标<code class="gatsby-code-text">InnerComponent</code>即可，看代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token constant">HOC</span><span class="token punctuation">(</span>InnerComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n        innerRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> props <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>\n                <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span>\n                <span class="token punctuation">{</span> ref<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>innerRef <span class="token punctuation">}</span>\n            <span class="token punctuation">)</span>\n            <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InnerComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>此时在<code class="gatsby-code-text">Test</code>组件中，我们使用<code class="gatsby-code-text">this.textRef.current.innerRef</code>即可指向我们的<code class="gatsby-code-text">InnerComponent</code>组件的<code class="gatsby-code-text">ref</code></p>\n<h3 id="solution"><a href="#solution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>solution</h3>\n<p>高阶组件在React工具链中使用的比较多，最为典型的就是React-Redux库提供的<a href="https://github.com/reduxjs/react-redux/blob/master/src/connect/connect.js">connect</a>方法,其实和我们上面例子中的<code class="gatsby-code-text">withData</code>思路类似，只不过接收的参数不是url,而是<code class="gatsby-code-text">mapStateToProps</code>、<code class="gatsby-code-text">mapDispatchToProps</code>等参数</p>\n<p>高阶组件还有一种方式实现，就是新创建的组件继承<code class="gatsby-code-text">InnerComponent</code>,简单的代码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token constant">HOC</span><span class="token punctuation">(</span>InnerComponent<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> InnerComponent<span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>loading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span><span class="token punctuation">/></span></span>\n      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>这种使用方式甚至可以通过<code class="gatsby-code-text">super.render()</code>获取到<code class="gatsby-code-text">InnerComponent</code>的<code class="gatsby-code-text">element tree</code>,配合<code class="gatsby-code-text">React.cloneElement</code>方法，继而可以对tree进行编辑，删除等等(注意不要修改共享状态，尽量使用纯函数)，不过这种实现高阶组件的方式，在React社区不是特别的流行，不做过多介绍</p>',frontmatter:{title:"higher-order component(HOC)",img:"./img/2017-07-11.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"May 20, 2018",path:"blog/react/2018-05-21-hight-order-component.md",slug:"/blog/2018/05/21/hight-order-component.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}}]}},pathContext:{slug:"/blog/2018/05/21/hight-order-component.html"}}}});