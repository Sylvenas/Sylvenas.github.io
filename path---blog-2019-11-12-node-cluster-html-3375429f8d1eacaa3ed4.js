webpackJsonp([99047659125544],{548:function(s,n){s.exports={data:{markdownRemark:{html:'<h2 id="基本用法"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>基本用法</h2>\n<p>Node.js默认单进程运行，对于32位系统最高可使用<code class="gatsby-code-text">512MB</code>内存，对于64位最高可以使用1GB内存。对于多核CPU的计算机来说，这样做效率很低，因为只有一个核在运行，其他核都在闲置。<code class="gatsby-code-text">cluster</code>模块就是为了解决这个问题而提出的。</p>\n<p><code class="gatsby-code-text">cluster</code>模块允许设立一个主进程和若干个worker进程，由主进程监控和协调worker进程的运行。worker之间采用进程间通讯交换消息，<code class="gatsby-code-text">cluster</code>模块内置一个负载均衡器，采用<code class="gatsby-code-text">Round-robin</code>算法协调各个worker进程之间的负载。运行时，所有新建立的链接都由主进程完成，然后主进程再把TCP链接分配给指定的worker进程。</p>\n<blockquote>\n<p>cluster模块实际上就是<code class="gatsby-code-text">child_process</code>模块跟其它模块的组合，更方便的创建集群，实际原理和<code class="gatsby-code-text">child_process</code>是一样的</p>\n<p>Round-robin算法的基本原理会在后面章节仔细说明</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'http\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> cluster <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'cluster\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> os <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'os\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cpuLen <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>isMaster<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cpuLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> pid <span class="token operator">=</span> process<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`hello world from process: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3232</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>然后我们多刷新几次浏览器，就会发现可能得到的结果不一样，这也就说明了我们的服务被不同的worker进程处理了。</p>\n<p>上面代码先判断当前进程是否为主进程（<code class="gatsby-code-text">cluster.isMaster</code>），如果是的，就按照CPU的核数，新建若干个worker进程；如果不是，说明当前进程是worker进程，则在该进程启动一个服务器程序。</p>\n<p>上面这段代码有一个缺点，就是一旦work进程挂了，主进程无法知道。为了解决这个问题，可以在主进程部署<a href="https://nodejs.org/dist/latest-v12.x/docs/api/cluster.html#cluster_event_online">online事件</a>和<a href="https://nodejs.org/dist/latest-v12.x/docs/api/cluster.html#cluster_event_exit_1">exit事件</a>的监听函数，在某个worker进程exit之后，就会立即重新启动一个新的worker进程。此处不在编写相关代码，可以查询<a href="https://nodejs.org/dist/latest-v12.x/docs/api/cluster.html">相关Node.js资料</a>。</p>\n<p>说到这里，HTML5 提出的 <code class="gatsby-code-text">Web Worker</code> ，方式大同小异，解决了 JavaScript 主线程与 UI 渲染线程互斥，所引发的长时间执行 JavaScript 导致 UI 停顿不响应的问题。</p>\n<p>另外申明一点：<code class="gatsby-code-text">fork</code> 线程开销是比较大的，要谨慎使用，并且我们 <code class="gatsby-code-text">fork</code> 进程是为了利用 CPU 资源，跟高并发没啥大关系。</p>\n<blockquote>\n<p>另外一种创建Node.js服务集群的方案是<a href="/blog/2018/10/22/node-process-stability.html#%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F">通过代理</a>的方式，但是由于缺陷明显，采用很少</p>\n</blockquote>\n<h3 id="进程之间通信"><a href="#%E8%BF%9B%E7%A8%8B%E4%B9%8B%E9%97%B4%E9%80%9A%E4%BF%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>进程之间通信</h3>\n<p><code class="gatsby-code-text">cluster.fork()</code>会返回一个<a href="https://nodejs.org/dist/latest-v12.x/docs/api/cluster.html#cluster_class_worker">Worker的实例</a>，借助send函数，我们可以从Master进程像每个worker进程发送消息，worker进程通过监听<code class="gatsby-code-text">process.on(&#39;message&#39;)</code>来接收消息，修改上面的示例代码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// ...</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>isMaster<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cpuLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> worker <span class="token operator">=</span> cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    workers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    worker<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">\'[master] \'</span> <span class="token operator">+</span> <span class="token string">\'send msg \'</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">\' to worker \'</span> <span class="token operator">+</span> worker<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'get worker log:\'</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>以上代码打印结果如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-log"><code class="gatsby-code-log">get worker log: [master] send msg 0 to worker 1\nget worker log: [master] send msg 2 to worker 3\nget worker log: [master] send msg 3 to worker 4\nget worker log: [master] send msg 1 to worker 2\nget worker log: [master] send msg 5 to worker 6\nget worker log: [master] send msg 4 to worker 5\nget worker log: [master] send msg 7 to worker 8\nget worker log: [master] send msg 6 to worker 7</code></pre>\n      </div>\n<p>如果反过来，worker进程向Master进发送消息，道理是同样的，通过process.send发送消息，然后worker监听message事件。</p>\n<p>同样我们可以通过监听worker进程的<code class="gatsby-code-text">exit</code>事件，在工作进程因为各种原因挂掉的时候通知Master重新开启一个工作进程。</p>\n<p>还有一种多进程之间通信必须做的是：<code class="gatsby-code-text">session保存与共享</code>，我们一般在服务端使用<code class="gatsby-code-text">session</code>来保存用户的登录状态和用户信息，举个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">user<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">\'/login\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> userInfo <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">,</span>\n    data<span class="token punctuation">;</span>\n  User<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> docs<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>docs<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 需要引入express-session</span>\n        <span class="token comment">// 往session中存入信息同样会往浏览器cookie中写入数据，作为对应和标记(如果没有写入cookie,则要检查请求，代理等操作是否允许写入)</span>\n        req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user <span class="token operator">=</span> docs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          data <span class="token operator">=</span> <span class="token punctuation">{</span>\n            code<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n            msg<span class="token punctuation">:</span> <span class="token string">\'login successfully\'</span>\n          <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        data <span class="token operator">=</span> <span class="token punctuation">{</span>\n          code<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span>\n          msg<span class="token punctuation">:</span> <span class="token string">\'Incorrect username or password.\'</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>上述操作仅仅在当前进程记录了登录状态，但是如果另一个请求是被别的进程处理的，别的进程是不知道用户已经登录的，会重定向到登录页面，这样很明显是不对的，所以多个进程之间必须保持同步登录的状态，这个时候我们可以借助<code class="gatsby-code-text">Mongo DB</code>等<code class="gatsby-code-text">NOSQL</code>来完成：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> expressSession <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'express-session\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> MongoStore <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'connect-mongo\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>expressSession<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">expressSession</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  secret<span class="token punctuation">:</span> config<span class="token punctuation">.</span>sessionSecret<span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'username\'</span><span class="token punctuation">,</span>\n  saveUninitialized<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  resave<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  cookie<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    httpOnly<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    maxAge<span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  store<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">MongoStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> config<span class="token punctuation">.</span>sessionMongoUrl <span class="token comment">//mongo db connect url</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="nodejs-集群管理"><a href="#nodejs-%E9%9B%86%E7%BE%A4%E7%AE%A1%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js 集群管理</h2>\n<h3 id="pm2"><a href="#pm2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PM2</h3>\n<p>上面介绍的Node.js集群是基于基础的API来实现的，我们可以发现各种错误处理，消息传递等等很是翻落，庆幸的是现在已有的成熟方案挺多的，比如<a href="https://github.com/Unitech/pm2">PM2</a>；\n举个很常见的例子：\n我们需要在Node.js进程发生错误退出的时候，快速重启不影响别的用户使用，同时在我们部署更新文件的时候，能够不停机的去部署应用，这个时候我们只要借助PM2就可以很快速的完成这些任务：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-sh"><code class="gatsby-code-sh">pm2 start index.js --watch</code></pre>\n      </div>\n<p>其他具体的使用方式我们就不再继续讲述，直接看文档即可。</p>\n<h3 id="systemd"><a href="#systemd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>systemd</h3>\n<p>另一种方案是使用<code class="gatsby-code-text">systemd</code>运行<code class="gatsby-code-text">Node.js</code>。我不是很了解（或者说根本不知道<code class="gatsby-code-text">systemd</code>，我已经把这句话弄错过一次了，所以我会用 Tierney大佬自己的原话来表述：</p>\n<blockquote>\n<p>“只有在部署中访问 Linux 并控制 Node 在服务级别上启动的方式时，才有可能实现此选项。如果你在一个长时间运行的 Linux 虚拟机中运行 node.js 进程，比如说 Azure 虚拟机，那么使用 systemd 运行 node.js 是个不错的选择。如果你只是将文件部署到类似于 Azure AppService 或 Heroku 的服务中，或者运行在类似于 Azure 容器实例的容器化环境中，那么你可以避开此选项。”</p>\n</blockquote>\n<p>关于 systemd与Node.js的相关文介绍可以参考：</p>\n<ul>\n<li><a href="https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/">Running Your Node.js App With Systemd - Part 1</a></li>\n</ul>\n<h2 id="题外话-nginx"><a href="#%E9%A2%98%E5%A4%96%E8%AF%9D-nginx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>题外话 Nginx</h2>\n<p>说到集群怎么会没有Nginx的份呢，在一般的应用中不会直接用Node做负载均衡，而是会使用Nginx来转做，具体来说就是：</p>\n<ul>\n<li>对于前端打过来的所有请求，在Nginx这里做请求的分发，打到Node.js集群的某个机器上。</li>\n<li>健康检测，Node.js集群的及其同样有可能挂掉，所以会采用Nginx进行检测，发现挂了的及其，会干掉重启，保证其群的高可用。检测有两种机制，被动检测跟主动检测。</li>\n</ul>\n<h3 id="nginx-是什么？"><a href="#nginx-%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nginx 是什么？</h3>\n<p>Nginx 作为一个基于C实现的高性能<code class="gatsby-code-text">Web服务器</code>，可以通过系列算法解决上述的负载均衡问题。并且由于它具有高并发、高可靠性、高扩展性、开源等特点，<code class="gatsby-code-text">成为开发人员常用的反向代理工具</code>。</p>\n<h3 id="nginx正向代理"><a href="#nginx%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nginx正向代理</h3>\n<p>正向代理（Forward Proxy）最大的特点是，客户端非常明确要访问的服务器地址，它代理客户端，替客户端发出请求。比如：科学上网，俗称翻墙（警告⚠️：翻墙操作违反相关法律规定，本文只是为了解释正向代理向读者举个例子，仅供学习参考，切勿盲目翻墙）。</p>\n<p><img src="https://p1.music.126.net/njI6cPNv8JMBRnVGwJRT2w==/109951164880556480.png" alt="Nginx正向代理"></p>\n<p>假设客户端想要访问Google，它明确知道待访问的服务器地址是<code class="gatsby-code-text">www.google.com</code>，但由于条件限制，它找… Google 的”朋友”：<code class="gatsby-code-text">代理服务器</code>。客户端把请求发给<code class="gatsby-code-text">代理服务器</code>，由<code class="gatsby-code-text">代理服务器</code>代替它请求Google，最终再将响应返回给客户端。这便是一次正向代理的过程，该过程中Google服务器并不知道真正发出请求的是谁。</p>\n<h3 id="nginx反向代理"><a href="#nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nginx反向代理</h3>\n<p>那么，随着请求量的爆发式增长，服务器觉得自己一个人始终是应付不过来，需要<code class="gatsby-code-text">兄弟服务器(集群)</code>们帮忙，于是它喊来了自己的兄弟以及代理服务器朋友。 此时，来自不同客户端的所有请求<code class="gatsby-code-text">实际上都发到了代理服务器处</code>，再由代理服务器<code class="gatsby-code-text">按照一定的规则将请求分发给各个服务器</code>。</p>\n<p>这就是<strong>反向代理</strong>（Reverse Proxy），反向代理隐藏了服务器的信息，<code class="gatsby-code-text">反向代理代理的是服务器端，代其接收请求</code>。换句话说，反向代理的过程中，客户端并不知道具体是哪台服务器处理了自己的请求。如此一来，既提高了访问速度，又为安全性提供了保证。</p>\n<p><img src="https://p1.music.126.net/n6yXcG9nvdYDp8V4H16sjQ==/109951164880567008.png" alt="反向代理"></p>\n<p>在这之中，反向代理需要考虑的问题是，如何进行均衡分工，控制流量，避免出现局部节点负载过大的问题。通俗的讲，就是如何为每台服务器合理的分配请求，使其整体具有更高的工作效率和资源利用率。</p>\n<h3 id="负载均衡常用算法介绍"><a href="#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%B8%B8%E7%94%A8%E7%AE%97%E6%B3%95%E4%BB%8B%E7%BB%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>负载均衡常用算法介绍</h3>\n<h4 id="轮询（round-robin）"><a href="#%E8%BD%AE%E8%AF%A2%EF%BC%88round-robin%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>轮询（round-robin）</h4>\n<p>Round-robin(轮询调度)算法的原理是每一个把来自用户的请求轮流分配给内部中的服务器，从1开始，直到N(内部服务器个数)，然后重新开始循环。该算法的优点是及其简洁，它无需记录当前所有连接的状态，所以是一种无状态调度。</p>\n<p>轮询调度算法假设所有服务器的处理性能都相同，不关心每台服务器的当前连接数和响应速度。当请求服务间隔时间变化比较大时，轮询调度算法容易导致服务器间的负载不平衡。所以此种均衡算法适合于服务器组中的所有服务器都有相同的软硬件配置并且平均服务请求相对均衡的情况。</p>\n<h4 id="加权轮询"><a href="#%E5%8A%A0%E6%9D%83%E8%BD%AE%E8%AF%A2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>加权轮询</h4>\n<p>为了避免普通轮询带来的弊端，加权轮询应运而生。在加权轮询中，每个服务器会有各自的<code class="gatsby-code-text">weight</code>。一般情况下，<code class="gatsby-code-text">weight</code>的值越大意味着该服务器的性能越好，可以承载更多的请求。该算法中，客户端的请求按权值比例分配，当一个请求到达时，优先为其分配权值最大的服务器。</p>\n<p>特点：加权轮询可以应用于服务器性能不等的集群中，使资源分配更加合理化，其核心思想是，遍历各服务器节点，并计算节点权值，计算规则为<code class="gatsby-code-text">current_weight</code>与其对应的 <code class="gatsby-code-text">effective_weight</code>之和，每轮遍历中选出权值最大的节点作为最优服务器节点。</p>\n<h4 id="ip-哈希（ip-hash）"><a href="#ip-%E5%93%88%E5%B8%8C%EF%BC%88ip-hash%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>IP 哈希（IP hash）</h4>\n<p><code class="gatsby-code-text">ip_hash</code>依据发出请求的客户端<code class="gatsby-code-text">IP</code>的<code class="gatsby-code-text">hash</code>值来分配服务器，该算法可以保证同<code class="gatsby-code-text">IP</code>发出的请求映射到同一服务器，或者具有相同<code class="gatsby-code-text">hash</code>值的不同<code class="gatsby-code-text">IP</code>映射到同一服务器。\n特点：该算法在一定程度上解决了集群部署环境下<code class="gatsby-code-text">Session</code>不共享的问题。</p>\n<blockquote>\n<p><code class="gatsby-code-text">Session</code>不共享问题是说，假设用户已经登录过，此时发出的请求被分配到了<code class="gatsby-code-text">A</code>服务器，但<code class="gatsby-code-text">A</code>服务器突然宕机，用户的请求则会被转发到<code class="gatsby-code-text">B</code>服务器。但由于<code class="gatsby-code-text">Session</code>不共享，<code class="gatsby-code-text">B</code>无法直接读取用户的登录信息来继续执行其他操作。</p>\n</blockquote>\n<p>实际应用中，我们可以利用<code class="gatsby-code-text">ip_hash</code>，将一部分<code class="gatsby-code-text">IP</code>下的请求转发到运行新版本服务的服务器，另一部分转发到旧版本服务器上，实现灰度发布。再者，如遇到文件过大导致请求超时的情况，也可以利用<code class="gatsby-code-text">ip_hash</code>进行文件的分片上传，它可以保证同客户端发出的文件切片转发到同一服务器，利于其接收切片以及后续的文件合并操作。</p>\n<h4 id="最小连接数（least-connections）"><a href="#%E6%9C%80%E5%B0%8F%E8%BF%9E%E6%8E%A5%E6%95%B0%EF%BC%88least-connections%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>最小连接数（Least Connections）</h4>\n<p>假设共有<code class="gatsby-code-text">M</code>台服务器，当有新的请求出现时，遍历服务器节点列表并选取其中连接数最小的一台服务器来响应当前请求。连接数可以理解为当前处理的请求数。</p>',frontmatter:{title:"Node.js 集群",img:"./img/2018-03-06.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"November 11, 2019",path:"blog/node/2019-11-12-node-cluster.md",slug:"/blog/2019/11/12/node-cluster.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}}]}},pathContext:{slug:"/blog/2019/11/12/node-cluster.html"}}}});