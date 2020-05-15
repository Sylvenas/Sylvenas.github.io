webpackJsonp([45123342489346],{510:function(s,n){s.exports={data:{markdownRemark:{html:'<p>Parcel是web应用打包工具，主要特点是无须任何配置(<code class="gatsby-code-text">当然是吹牛，对于复杂的应用还是需要一些简单的配置</code>)和速度极快，对于受够了<code class="gatsby-code-text">webpack</code>那些机器复杂的配置项的同学来说是一种解放！在也不想去看<code class="gatsby-code-text">webpack</code>的那一堆一堆的<code class="gatsby-code-text">loader</code>和<code class="gatsby-code-text">plugin</code>了。</p>\n<p>对于<code class="gatsby-code-text">Parcel</code>的简单入门就不再做过多的描述，太简单了，到官网一看便知，下面主要说几种我们在开发中经常遇到的场景，以及配合<code class="gatsby-code-text">Parcel</code>的解决方案。</p>\n<h3 id="接口代理"><a href="#%E6%8E%A5%E5%8F%A3%E4%BB%A3%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>接口代理</h3>\n<p>在前端开发中，现在在开发阶段会自己mock后端接口的数据，当我们开发完成需要和后端连调的时候，就需要做一个接口代理，把我们的请求从mock的数据，转向真正的后端的接口，那就需要一个代理，这个代理如何做呢？\n从<code class="gatsby-code-text">Parcel</code>的零配置，是不太还做到，我们可以换个思路自己做一个服务器，借用<code class="gatsby-code-text">http-proxy-middleware</code>来转发http请求，创建文件<code class="gatsby-code-text">dev.js</code>代码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http-proxy-middleware"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Bundler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"parcel-bundler"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> bundler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bundler</span><span class="token punctuation">(</span><span class="token string">"index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>\n  <span class="token string">"/api"</span><span class="token punctuation">,</span>\n  <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    target<span class="token punctuation">:</span> <span class="token string">"http://localhost:3000"</span><span class="token punctuation">,</span>\n    changeOrigin<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bundler<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">package.json</code>文件<code class="gatsby-code-text">scripts</code>中添加</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token string">"start"</span><span class="token keyword">:</span> <span class="token string">"node dev.js"</span>,</code></pre>\n      </div>\n<p>以后启动项目就可以<code class="gatsby-code-text">npm start</code>来启动了，会自动帮我们启动一个开发服务器和接口代理。</p>\n<h3 id="代码路径简写"><a href="#%E4%BB%A3%E7%A0%81%E8%B7%AF%E5%BE%84%E7%AE%80%E5%86%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>代码路径简写</h3>\n<p>相信大家看到<code class="gatsby-code-text">../../../../../img/a.jpeg</code>这样的代码都是非常让人讨厌的，这路径谁也不想看，那么我们能不能用一个虚拟路径<code class="gatsby-code-text">img</code>来替<code class="gatsby-code-text">../../../../../img</code>呢，答案是肯定的，因为在我们把代码编译打包的时候，实际上是<code class="gatsby-code-text">babel</code>在做这个工作，那么我们用<code class="gatsby-code-text">babel-plugin-module-resolver</code>来帮我们做路径替换，我们首先要安装<code class="gatsby-code-text">babel-plugin-module-resolver</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add babel-plugin-module-resolver --dev</code></pre>\n      </div>\n<p>然后添加配置<code class="gatsby-code-text">.babelrc</code></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-babelrc"><code class="gatsby-code-babelrc">{\n  &quot;plugins&quot;: [\n    [\n      &quot;module-resolver&quot;,\n      {\n        &quot;root&quot;: [&quot;./src&quot;],\n        &quot;alias&quot;: {\n          &quot;img&quot;: &quot;./src/imgs&quot;\n        }\n      }\n    ]\n  ]\n}</code></pre>\n      </div>\n<p>这样以后就可以用<code class="gatsby-code-text">img</code>来替换<code class="gatsby-code-text">../../../../../img/a.jpeg</code>这样的路径了。</p>\n<h3 id="react代码切割"><a href="#react%E4%BB%A3%E7%A0%81%E5%88%87%E5%89%B2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React代码切割</h3>\n<p>代码拆分这一段本不该写在这里的，但是遇到的人太多，类似的需求场景也很多，所以还是简单的写一下，我们可以借助<code class="gatsby-code-text">react-loadable</code>库来实现，首先安装，代码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add react-loadable</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> Loadable <span class="token keyword">from</span> <span class="token string">"react-loadable"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> Loading <span class="token keyword">from</span> <span class="token string">"../components/loading/loading"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> AsyncHome <span class="token operator">=</span> <span class="token function">Loadable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/home/home"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  loading<span class="token punctuation">:</span> Loading<span class="token punctuation">,</span>\n  delay<span class="token punctuation">:</span> <span class="token number">300</span> <span class="token comment">// 0.3 seconds</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>在使用中如果遇到了其他的常见需求场景，会继续补充。</p>',frontmatter:{title:"Parcel简介",img:"./img/2018-01-29.jpeg",author:["Sylvenas"],excerpt:"Parcel是web应用打包工具，主要特点是无须任何配置和速度极快",catalogue:null},fields:{date:"January 28, 2018",path:"blog/bundlers/2018-01-29-parcel.md",slug:"/blog/2018/01/29/parcel.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}}]}},pathContext:{slug:"/blog/2018/01/29/parcel.html"}}}});