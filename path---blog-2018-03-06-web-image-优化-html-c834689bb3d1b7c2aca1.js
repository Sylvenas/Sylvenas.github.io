webpackJsonp([7472626407853],{487:function(e,t){e.exports={data:{markdownRemark:{html:'<h3 id="优化方案"><a href="#%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>优化方案</h3>\n<p>根据统计，用户打开网站，最满意的时间是1-2秒，如果超出了1-2秒，用户就会感觉卡顿，如果超过10秒以上，98%的用户会选择直接关闭这个网站，任何大于两秒的下载时间都将会使你的用户失去耐心，而现在网站中大部分的需要下载的资源都是<code class="gatsby-code-text">image</code>，那么优化<code class="gatsby-code-text">image</code>的加载速度就是重点部分，</p>\n<p>错误格式的图片，或者是没有压缩的图片，还有就是图片太大的时候这些情况会极大地影响你的页面的初始化速度。</p>\n<p>面对大小、格式、压缩等级等多样选择，到底应该从何处下手，PNG,JPG,SVG,内联的base64编码的字符串，webp等等到底有什么细节的区别？</p>\n<p>随着硬件的进步，现代显示器，已经普遍达到了2k,4k的分辨率；越来越多的web页面运行在移动端，移动端的dip,dp,px,dpi,density等等概念又那么的令人容易误解,下面我们从硬件和逻辑像素入手逐一了解这些概念</p>\n<h3 id="硬件和逻辑像素"><a href="#%E7%A1%AC%E4%BB%B6%E5%92%8C%E9%80%BB%E8%BE%91%E5%83%8F%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>硬件和逻辑像素</h3>\n<ul>\n<li><strong>屏幕尺寸</strong>：屏幕的对角线的长度，电脑，电视，手机等等都是</li>\n<li><strong>屏幕比例</strong>：只确定了对角线的长度，2个边的长度还是无法确定，所以有了<code class="gatsby-code-text">4:3</code>，<code class="gatsby-code-text">16:9</code>这种屏幕宽高比，这样就可以计算出屏幕的两个边长了</li>\n<li><strong>分辨率</strong>：纵横2个方向的像素点的数量，常见的取值有<code class="gatsby-code-text">480 x 800</code>,<code class="gatsby-code-text">320 x 480</code>等</li>\n<li><strong>dpi</strong>：dots per inch,直接来说就是一英寸的距离中有多少个像素点，常见的取值是120，160，240。又被称为像素密度</li>\n<li><strong>density</strong>:像素密度因子，一平方英寸中含有的像素点数量</li>\n</ul>\n<p>那么反映到电脑上，举个例子，13寸的MacBook Pro的屏幕图像宽度为1280px,但是retina屏的实际分辨率为2560 x 1600，这是为什么？因为其像素密度因子为2。</p>\n<p>以前的显示器的像素密度因子为1，但是近年来屏幕分辨率的增加，硬件像素不再等于逻辑或CSS像素。</p>\n<p>硬件像素和CSS像素之间的关系可由一下公式描述：   </p>\n<p><strong>CSS像素 = 硬件像素 / 像素密度</strong>    </p>\n<p>因此，2560像素的硬件分辨率转换为retina屏上的1280个CSS像素。</p>\n<p>现在，移动设备上像素密度因子有3，甚至4已经开始普及</p>\n<h3 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h3>\n<p>图片优化从一下几个方面来思考：</p>\n<ul>\n<li><a href="/blog/2018/03/07/webp.html"><strong>webp</strong></a>:webp格式的图片可以极大的缩小文件的体积，可以大幅度缩小网络传输时间</li>\n<li><a href="/blog/2018/03/08/lazy-loading.html"><strong>懒加载</strong></a>:首先加载首屏内的图片，其他的部分可以做<code class="gatsby-code-text">预加载</code>或者滚动到了再加载的<code class="gatsby-code-text">懒加载</code>,注意使用<code class="gatsby-code-text">passive event listeners</code>和<code class="gatsby-code-text">节流</code>技术来优化<code class="gatsby-code-text">scroll</code>事件的频繁触发</li>\n<li><a href="/blog/2018/03/09/placeholder.html"><strong>placeholder</strong></a>:先加载一个很小的<code class="gatsby-code-text">blur-up</code>的图片作为占位符，让用户首先感知到这里是一张图片，然后加载大的图片，大图片加载完成之后使用过度的动画效果，隐藏占位图，显示大图</li>\n<li><a href="/blog/2018/03/10/responsive-img.html"><strong>响应式</strong></a>：使用响应式图片(图片格式，大小，分辨率)，在不同的终端，不同的像素密度因子的屏幕上，显示最合适的图片，可以很明显的节约我们的网络加载时间</li>\n</ul>',frontmatter:{title:"web image 加载优化方案",img:"./img/2018-03-06.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"March 05, 2018",path:"blog/performance/2018-03-06-web-image-优化.md",slug:"/blog/2018/03/06/web-image-优化.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"移动端适配方案rem & vh、vw"},fields:{slug:"/blog/2019/05/27/mobile-css.html"}}},{node:{frontmatter:{title:"移动端开发基础知识"},fields:{slug:"/blog/2019/05/24/mobile.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 内存管理/垃圾收集/内存泄漏"},fields:{slug:"/blog/2019/02/05/menory-management.html"}}},{node:{frontmatter:{title:"前端资源加载优先级"},fields:{slug:"/blog/2019/01/12/load-priority.html"}}},{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"How JavaScript Work: 引擎、运行时、调用栈概述"},fields:{slug:"/blog/2018/11/12/overview-of-the-engine-the-runtime-the-call-stack.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}}]}},pathContext:{slug:"/blog/2018/03/06/web-image-优化.html"}}}});