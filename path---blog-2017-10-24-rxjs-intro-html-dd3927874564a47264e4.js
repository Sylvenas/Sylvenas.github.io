webpackJsonp([4928131371014],{475:function(n,s){n.exports={data:{markdownRemark:{html:'<p>在介绍Rxjs之前，先通过一个简单的输入框示例的演化来了解一下Rxjs的核心思想。\n<img src="/input-example-f6a1002d5d5fcfeadf1b99ddea1dac14.gif" alt="example"><br>\n这是input输入框的示例非常简单，就是在input输入的时候，实时更新下面的文字，程序的逻辑看起来是这样的：\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/data-model-f1224f33dd0f39d91eb2820500544850-d9aab.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 46.13050075872535%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAHqboGTqCX/xAAZEAADAAMAAAAAAAAAAAAAAAABAgMQEhP/2gAIAQEAAQUCDU6vuEkXK5//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIh/9oACAEDAQE/AZwbP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AQn/xAAaEAACAwEBAAAAAAAAAAAAAAABEQAhIiBR/9oACAEBAAY/AksvyFWZsXx//8QAGxAAAQQDAAAAAAAAAAAAAAAAAQARIVEgMWH/2gAIAQEAAT8hlm5NEZzkhFRYdTYf/9oADAMBAAIAAwAAABB/z//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8QRvulHYf/xAAXEQADAQAAAAAAAAAAAAAAAAABEBEh/9oACAECAQE/EI6TV//EABwQAQACAgMBAAAAAAAAAAAAAAERIQAxIEGRcf/aAAgBAQABPxBshQlA2hnzBxK4End18x6BMBuIOveH/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="example"\n        title=""\n        src="/static/data-model-f1224f33dd0f39d91eb2820500544850-a6b71.jpeg"\n        srcset="/static/data-model-f1224f33dd0f39d91eb2820500544850-1839a.jpeg 210w,\n/static/data-model-f1224f33dd0f39d91eb2820500544850-6c621.jpeg 420w,\n/static/data-model-f1224f33dd0f39d91eb2820500544850-a6b71.jpeg 840w,\n/static/data-model-f1224f33dd0f39d91eb2820500544850-c5125.jpeg 1260w,\n/static/data-model-f1224f33dd0f39d91eb2820500544850-d9aab.jpeg 1318w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br>\n从上面的实例中我们可以梳理处三个基本的概念：       </p>\n<ul>\n<li>\n<p>Provider/数据的提供者<br>\n在这个示例中<strong>数据的提供者</strong>就是input的输入内容，每当输入一个字符的时候都会生成新的数据value。       </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">var</span> value <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n<li>data/数据<br>\n这个实例中的<strong>数据</strong>就是输入框输入的内容</li>\n<li>\n<p>Consumer/数据的消费者<br>\n在这个小程序中<strong>数据的消费者</strong>就是一个简单的界面，根据<strong>数据</strong>来更新h1标签的内容。         </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'h1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nh1<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> data<span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n</ul>\n<h3 id="观察者模式"><a href="#%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>观察者模式</h3>\n<p>现在我们使用观察者模式来重写这个例子：<br>\n在观察者模式中，我们总结出的三个基本概念都有了正式的定义：   </p>\n<ul>\n<li>数据提供者：可观察对象／Observable</li>\n<li>数据：通知／Notification</li>\n<li>数据消费者：观察者／Observer     </li>\n</ul>\n<p>除此之外观察者模式明确定义了<strong>可观察对象</strong>和<strong>观察者</strong>之前的契约：每当<strong>可观察对象</strong>生成新的数据的时候，就调用<strong>观察者预定义的数据接收接口</strong>，然后观察者调用<strong>自身的数据消费逻辑</strong>。\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/pub-sub-007edf97f366b2a7598138b3b9035032-89918.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 38.179148311306896%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAdOwywl//8QAGBAAAwEBAAAAAAAAAAAAAAAAAgMSEwH/2gAIAQEAAQUCDW2acFVx/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAECIf/aAAgBAwEBPwGmJf/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AQn/xAAWEAADAAAAAAAAAAAAAAAAAAAAIjH/2gAIAQEABj8CaC0en//EABoQAAICAwAAAAAAAAAAAAAAAAARATEhQYH/2gAIAQEAAT8hnuWtEMm2OzP/2gAMAwEAAgADAAAAEHwP/8QAGBEBAQADAAAAAAAAAAAAAAAAAQARcYH/2gAIAQMBAT8Q67llW//EABYRAQEBAAAAAAAAAAAAAAAAAAEQYf/aAAgBAgEBPxAjZ//EABsQAAIDAQEBAAAAAAAAAAAAAAExABEhQVFh/9oACAEBAAE/ECaLoAfFs0tV0UTXXnkIm6MAGuLJ/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="example"\n        title=""\n        src="/static/pub-sub-007edf97f366b2a7598138b3b9035032-a6b71.jpeg"\n        srcset="/static/pub-sub-007edf97f366b2a7598138b3b9035032-1839a.jpeg 210w,\n/static/pub-sub-007edf97f366b2a7598138b3b9035032-6c621.jpeg 420w,\n/static/pub-sub-007edf97f366b2a7598138b3b9035032-a6b71.jpeg 840w,\n/static/pub-sub-007edf97f366b2a7598138b3b9035032-c5125.jpeg 1260w,\n/static/pub-sub-007edf97f366b2a7598138b3b9035032-89918.jpeg 1362w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n      </p>\n<ul>\n<li>\n<p>1.Observer/观察者          </p>\n<ul>\n<li>1.1出于扩展的考虑，我们将<strong>数据的消费逻辑</strong>封装到一个函数中：</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> <span class="token function-variable function">Observer</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>consumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_consumer <span class="token operator">=</span> consumer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>1.2观察者要实现一个<strong>数据接收的接口</strong>，例如：onNotify，<strong>可观察对象</strong>要调用这个接口来传递数据     </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Observer<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onNotify</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//调用真正的消费逻辑</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_consumer<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n<li>\n<p>2.Observable 可观察对象</p>\n<ul>\n<li>2.1一个<strong>可观察对象要能生成数据</strong>，我们把生成数据的逻辑封装到一个函数中，调用这个函数生成器，就能生成新的数据。    </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> <span class="token function-variable function">Observable</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>generator<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//先保存生成器，当观测者连接时再执行</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_generator <span class="token operator">=</span> generator<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>2.2<strong>可观察对象还需要提供一个方法供观察者连接</strong>，当连接契约建立的时候，将观察者传入数据生成器。     </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Observable<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">subscribe</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//将观察者传入数据生成器</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_generator<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<blockquote>\n<p>在数据生成器中调用观察者的onNotify方法，把新的数据传递给观察者.</p>\n</blockquote>\n</li>\n<li>\n<p>3.现在我们可以使用Observable类和Observer类来重写我们的input的示例</p>\n<ul>\n<li>3.1 定义可观察对象     </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> <span class="token function-variable function">generator</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> value <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n        observer<span class="token punctuation">.</span><span class="token function">onNotify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> inputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span>generator<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>3.2 定义观察者    </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> <span class="token function-variable function">consumer</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        h1<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> data<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> uiRefresher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>consumer<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>3.3 建立连接契约    </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">inputStream<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>uiRefresher<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n</ul>\n<p><strong>上面基于观察者模式实现的示例，全部的代码在完整的代码在<a href="https://jsbin.com/gopurogile/1/edit?html,js,output">jsbin</a></strong></p>\n<h3 id="rxjs"><a href="#rxjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rxjs</h3>\n<p>现在我们使用Rxjs来重写这个示例：<br>\n首先简单介绍一下Rxjs,Rxjs的全名为：<strong>Reactive Extensions for JavaScript</strong>,RxJS is a reactive streams library that allows you to work with <em>asynchronous data streams</em>. RxJS can be used both in the browser or in the server-side using Node.js.<br>\nRxjs隶属是庞大的<a href="http://reactivex.io/">ReactiveX</a>家族的一员,同样有RxJava,RxSwift等等。\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ReactiveX-42f115c953d4c9973fc43af02a09c9ff-f8d87.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 37.802907915993536%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHJuTAX/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAECERL/2gAIAQEAAQUClMw5k//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAACEDFB/9oACAEBAAY/AsKWP//EABkQAQACAwAAAAAAAAAAAAAAAAEAEVFx4f/aAAgBAQABPyGgUPcFxlOWf//aAAwDAQACAAMAAAAQfB//xAAVEQEBAAAAAAAAAAAAAAAAAAAQMf/aAAgBAwEBPxCn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAAMAAwAAAAAAAAAAAAAAAQARITFBYf/aAAgBAQABPxC0AaVuMSzOqtOIvsOM/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ReactiveX"\n        title=""\n        src="/static/ReactiveX-42f115c953d4c9973fc43af02a09c9ff-a6b71.jpeg"\n        srcset="/static/ReactiveX-42f115c953d4c9973fc43af02a09c9ff-1839a.jpeg 210w,\n/static/ReactiveX-42f115c953d4c9973fc43af02a09c9ff-6c621.jpeg 420w,\n/static/ReactiveX-42f115c953d4c9973fc43af02a09c9ff-a6b71.jpeg 840w,\n/static/ReactiveX-42f115c953d4c9973fc43af02a09c9ff-f8d87.jpeg 1238w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>Rx.Observable.fromEvent()<br>\nRxjs提供了Rx.Observable.fromEvent()方法让我们从一个DOM事件，来实例化一个<strong>Observable/可观察对象</strong>。    </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> observable <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>Observer<br>\n在Rxjs中<strong>Observer/观察者</strong>是一个由回调函数组成的对象，键名分别为<code class="gatsby-code-text">next</code>,<code class="gatsby-code-text">error</code>,<code class="gatsby-code-text">complete</code>, 值分别为三个函数，这三个属性并不是全部必须的。   </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'h1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token punctuation">{</span>\n    next<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> value <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n        h1<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> value<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>subscribe()<br>\n和我们的示例一样，调用可观察对象的<code class="gatsby-code-text">subscribe</code>方法，来建立可观察对象和观察者之间契约。    </li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">observable<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>短短几行代码，实现了和上面一样的逻辑，希望通过这个简单的例子，能让大家对Rxjs的核心思路有个基本的概念，上面的Rxjs实现的完整的例子在<a href="https://jsbin.com/rasesupapa/edit?html,js,output">jsbin</a></strong></p>',frontmatter:{title:"Rxjs intro",img:"./img/2017-10-24.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"October 23, 2017",path:"blog/rxjs/2017-10-24-Rxjs-intro.md",slug:"/blog/2017/10/24/Rxjs-intro.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"黑珍珠号的诅咒"},fields:{slug:"/blog/2019/09/10/黑珍珠号的诅咒.html"}}},{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}}]}},pathContext:{slug:"/blog/2017/10/24/Rxjs-intro.html"}}}});