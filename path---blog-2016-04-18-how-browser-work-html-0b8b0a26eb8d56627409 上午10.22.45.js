webpackJsonp([0xd926ba21fb02],{427:function(e,a){e.exports={data:{markdownRemark:{html:'<p>关于浏览器的工作原理，一直存有好奇却又无从下手的状态，最近看到了一篇绝对棒的文章（<a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork">原文链接</a>），具体讲解了主流浏览器的工作原理，部分摘抄如下：</p>\n<h3 id="简介"><a href="#%E7%AE%80%E4%BB%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>简介</h3>\n<p>网络浏览器很可能是使用最广的软件。在这篇入门文章中，我将会介绍它们的幕后工作原理。我们会了解到，从您在地址栏输入<code>google.com</code>直到您在浏览器屏幕上看到Google首页的整个过程中都发生了些什么。</p>\n<h3 id="浏览器的主要功能"><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E4%B8%BB%E8%A6%81%E5%8A%9F%E8%83%BD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>浏览器的主要功能</h3>\n<p>浏览器的主要功能就是向服务器发出请求，在浏览器窗口中展示您选择的网络资源。这里所说的资源一般是指<code>HTML</code>文档，也可以是<code>PDF</code>、<code>图片</code>或其他的类型。资源的位置由用户使用<code>URI</code>（统一资源标示符）指定。</p>\n<p>浏览器解析并显示<code>HTML</code>文件的方式是在<code>HTML</code>和<code>CSS</code>规范中指定的。这些规范由网络标准化组织<code>W3C</code>（万维网联盟）进行维护。\n多年以来，各浏览器都<code>没有完全</code>遵从这些规范，同时还在开发自己独有的扩展程序，这给网络开发人员带来了严重的兼容性问题。如今，大多数的浏览器都是或多或少地遵从规范。</p>\n<p>浏览器的用户界面有很多彼此相同的元素，其中包括：</p>\n<ul>\n<li>用来输入<code>URI</code>的地址栏</li>\n<li>前进和后退按钮</li>\n<li>书签设置选项</li>\n<li>用于刷新和停止加载当前文档的刷新和停止按钮</li>\n<li>用于返回主页的主页按钮\n奇怪的是，浏览器的用户界面并没有任何正式的规范，这是多年来的最佳实践自然发展以及彼此之间相互模仿的结果。HTML5也没有定义浏览器必须具有的用户界面元素，但列出了一些通用的元素，例如地址栏、状态栏和工具栏等。当然，各浏览器也可以有自己独特的功能，比如 Firefox 的下载管理器。</li>\n</ul>\n<h3 id="浏览器的高层结构"><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E9%AB%98%E5%B1%82%E7%BB%93%E6%9E%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>浏览器的高层结构</h3>\n<p>浏览器的主要组件为 (1.1)：</p>\n<ul>\n<li>用户界面 - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面。</li>\n<li>浏览器引擎 - 在用户界面和呈现引擎之间传送指令。</li>\n<li>呈现引擎 - 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。</li>\n<li>网络 - 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。</li>\n<li>用户界面后端 - 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。</li>\n<li>JavaScript解释器 - 用于解析和执行 JavaScript 代码。</li>\n<li>数据存储 - 这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库。</li>\n</ul>\n<html><head></head><body><div style="text-align:center;margin-top:20px" align="center">\n  \n  <a class="gatsby-resp-image-link" href="/static/7ba7cd1c25f87aa6bacc9cc57edd9689-38f05.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 67.80000000000001%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADfUlEQVQ4y5WTW2hbdRzHD4h42dAKIg6GeKky0Ole3NPEPvgwBEV01icf9EHwURRcXXFdh+uQikm2YjebXmbqunZNWkyTNPE015NLmzQ9PSc9J81pkpOkSds0l3OSk5Lm8vOflITCnvzBh9/v//39+ML/hhVstg9qNB2u0vRuLUCn/gf7VWrdFhwa7gD6tydrNtmVOjWnxaR/5j8Hi0UCqwXAYj7CZoX0/BzsaNSQnJ2F2Mw0CDpdU2/PEA6om5eC/O3hU0DcfKZmV+DA6ABLyH9/VVCO9Iqjyv68cqRNQfnn1aRq+s7evUmZOHK3r6WjuWtovj8zNj6499fkTwPYC4+BV/Fs21C/LZ705w8v+LIHXf58+f0WVLFyQc9mvsTD+U9JofxeSyfFSpdzV3p3kuA7HXTuLIYCnLKOtqElfXBprQgSKQH4CwCoBiIpIPLg3BHBsZ0Dz34J9eqwhvqBMoBXqHG6UPYb82r+jaahW9FRtSnwvGcasPuJ0mfaDEgLWQCUQYvyw4QED6J5mIkXYCqchdltqak3+noRYG6vyo96U79M6MJfKzShrul54kN0Kca4+R5g31sCT1x1MGf7XJvv9DmDbXqdzJsyW+SLQXv4Yi/BvHWsd+4yvn5mQE2/rPOKR1v2KDoqVjmetKkA06qWn9rmxAHELYSiRZIT5dxGdizC5u4mt0R5W98Sb0fZ3A2XO9V9nxDPHBneahrySxOALT7wn45QgsgHChChBYgGRPBaQ+AwUuD8N9DMK2i96U9DlBYhzhSBI7PZFeeOYgjPvdY6w4bhruNvwFTypefcet7jWozH3YZY0K2PMSgzSGOQFkE116hbmmcxHib0sdUFdejHYav0+iO33IoxU7xr0pp+GjsW46b4uXFj/KXjmsq8c2rEwJ//bph8/o5RePsRw0yFvbx/yPQE9zYUqRL1Qx0sJ9Yih5c2EpUez6Y06ONKNym+/K0vWu+k/J5On5+6vuxnZFSA7feR7A3/GnkRXD0n2oarYX2djBnByy0AXyRgszjzysoW4Ha6ADqCB9NyCixkPu0OQzdDr3azLIt+qgXsdju4XK7KOkVpYBR7HL3DxaZh8EAjBEuaAiupiwFxJs1Vr52espfVSl2iPDQbLPwxxx2Mm3ZDUx74yKB9+LHBYCjjOF5sYDKZMlqtdqKxbd3Pn5w0/frVi/8BB/EhHy0p2zoAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="browser layers" title="" src="/static/7ba7cd1c25f87aa6bacc9cc57edd9689-38f05.png" srcset="/static/7ba7cd1c25f87aa6bacc9cc57edd9689-23e95.png 210w,\n/static/7ba7cd1c25f87aa6bacc9cc57edd9689-a78cd.png 420w,\n/static/7ba7cd1c25f87aa6bacc9cc57edd9689-38f05.png 500w" sizes="(max-width: 500px) 100vw, 500px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>  </body></html>\n<p>值得注意的是，和大多数浏览器不同，Chrome 浏览器的每个标签页都分别对应一个呈现引擎实例。每个标签页都是一个独立的进程。</p>\n<h3 id="呈现引擎"><a href="#%E5%91%88%E7%8E%B0%E5%BC%95%E6%93%8E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>呈现引擎</h3>\n<p>呈现引擎的作用嘛…当然就是”呈现”了，也就是在浏览器的屏幕上显示请求的内容。</p>\n<p>默认情况下，呈现引擎可显示HTML和XML文档与图片。通过插件（或浏览器扩展程序），还可以显示其他类型的内容；例如，使用 PDF 查看器插件就能显示 PDF 文档。但是在本章中，我们将集中介绍其主要用途：显示使用 CSS 格式化的 HTML 内容和图片。</p>\n<p>本文所讨论的浏览器（Firefox、Chrome 浏览器和 Safari）是基于两种呈现引擎构建的。Firefox 使用的是 Gecko，这是 Mozilla 公司“自制”的呈现引擎。而 Safari 和 Chrome 浏览器使用的都是 WebKit。</p>\n<p>WebKit 是一种开放源代码呈现引擎，起初用于 Linux 平台，随后由 Apple 公司进行修改，从而支持苹果机和 Windows。有关详情，请参阅 webkit.org。</p>\n<h4 id="主流程"><a href="#%E4%B8%BB%E6%B5%81%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>主流程</h4>\n<p>呈现引擎一开始会从网络层获取请求文档的内容，内容的大小一般限制在 8000 个块以内。</p>\n<p>然后进行如下所示的基本流程：</p>\n<html><head></head><body><div style="text-align:center;margin-top:20px" align="center">\n  \n  <a class="gatsby-resp-image-link" href="/static/71f429bba5ef6fb7bd2221f8082ba20a-1e9b4.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 600px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 10.999999999999998%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAArUlEQVQI1wGiAF3/AMfT4PPR19/30Nbe98bU5rKnwusVxtbqkdLY3/fT2eH33ePr93CZzTBwmcwy2d/n99Xb4vfR19/3xNXpkKfB6RnI1uev09ng99DW3vfO2efzANHX3/vV1dX/1dXV/9Da58Stw+lNz9ztp+np6f/q6ur/8vLy/42s2V2Jqthc9fX1/+jo6P/s7Oz/0N3uqazC6VHa5PC+6Ojo/+np6f/j6fD7yeiDSn665w0AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="browser flow" title="" src="/static/71f429bba5ef6fb7bd2221f8082ba20a-1e9b4.png" srcset="/static/71f429bba5ef6fb7bd2221f8082ba20a-1cd08.png 210w,\n/static/71f429bba5ef6fb7bd2221f8082ba20a-9b07a.png 420w,\n/static/71f429bba5ef6fb7bd2221f8082ba20a-1e9b4.png 600w" sizes="(max-width: 600px) 100vw, 600px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div></body></html>\n<p>呈现引擎将开始解析 HTML 文档，并将各标记逐个转化成 <strong>内容树</strong> 上的 DOM 节点。同时也会解析外部 CSS 文件以及样式元素中的样式数据。HTML 中这些带有视觉指令的样式信息将用于创建另一个树结构：<strong>呈现树</strong>。</p>\n<p>呈现树包含多个带有视觉属性（如颜色和尺寸）的矩形。这些矩形的排列顺序就是它们将在屏幕上显示的顺序。</p>\n<p>呈现树构建完毕之后，进入 <strong>布局</strong> 处理阶段，也就是为每个节点分配一个应出现在屏幕上的确切坐标。下一个阶段是 <strong>绘制</strong> - 呈现引擎会遍历呈现树，由用户界面后端层将每个节点绘制出来。</p>\n<p>需要着重指出的是，这是一个渐进的过程。为达到更好的用户体验，呈现引擎会力求尽快将内容显示在屏幕上。它不必等到整个 HTML 文档解析完毕之后，就会开始构建呈现树和设置布局。在不断接收和处理来自网络的其余内容的同时，呈现引擎会将部分内容解析并显示出来。\n下面是WebKit内核浏览器的主流程示例：</p>\n<html><head></head><body><div style="text-align:center;margin-top:20px" align="center">\n  \n  <a class="gatsby-resp-image-link" href="/static/85a66640e7f1d9b94421884d454cad12-124a2.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 624px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 46.31410256410256%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVQoz2NgwAK01PTYJjQvnDGja+WbGV2rDsSGpEszUAN0Ny9JzIov5SZJ06VLDKH37zOkVU2pV5i641jatN2n/UM6TzFtPb7JZc6GpdX7zm9LcU7rZV508mbkqov3+mbuv6SD18Br1xh2377NsLds6kT/uQdOv5y17+zO0Kr5GkeubP+07fDSP8eubl8JUjfvyKWa6btPnJtz+KotyV5tWXuKc9LOczpl8w+69209rQwSW7htjWL93NXei3as0wipWcoMkgfh5pWH+PaeMpI8ekFLZ+8pAxWsBk7be8Fi5dlr/1ecufp/+Zkb59K6Vhgfu7zxy66ji/8fvrJ9hU/ZEr01F2+B5Xu3nk1//Zbr2rNnDP+/fWf6i9XAklnbObo3nVTJnbbLvnXNEdlFOzcJAsPUHIRX7d8slDrtFBNIHoSbVh3j3n7MQmTfaQOVrYfNZBlOXVaZcPa60tLe5fF2i45fWQoMq1k+tTtE95ze0L/pwLI1+y9sbSEpvG7eZvt95x7H3wmLPWxm7z+zcube03M7Fy7QPXxp094dx1bs3Xtuazgp5gEAMijcAil4iEAAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="browser webkitflow" title="" src="/static/85a66640e7f1d9b94421884d454cad12-124a2.png" srcset="/static/85a66640e7f1d9b94421884d454cad12-83e3c.png 210w,\n/static/85a66640e7f1d9b94421884d454cad12-258e1.png 420w,\n/static/85a66640e7f1d9b94421884d454cad12-124a2.png 624w" sizes="(max-width: 624px) 100vw, 624px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div></body></html>\n<h4 id="解析的基本流程"><a href="#%E8%A7%A3%E6%9E%90%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%B5%81%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>解析的基本流程</h4>\n<p>解析文档是指将文档转化成为有意义的结构，也就是可让代码理解和使用的结构。</p>\n<p>解析得到的结果通常是代表了文档结构的节点树，它称作解析树或者语法树。</p>\n<p>解析的过程可以分成两个子过程：<code>词法分析</code>和<code>语法分析</code>。</p>\n<p><code>词法分析</code>是将输入内容分割成大量标记的过程。标记是语言中的词汇，即构成内容的单位。在人类语言中，它相当于语言字典中的单词。</p>\n<p><code>语法分析</code>是应用语言的语法规则的过程。\n解析器通常将解析工作分给以下两个组件来处理：<code>词法分析器</code>（有时也称为标记生成器），负责将输入内容分解成一个个有效标记；而<code>解析器</code>负责根据语言的语法规则分析文档的结构，从而构建<code>解析树</code>。词法分析器知道如何将无关的字符（比如空格和换行符）分离出来。</p>\n<html><head></head><body><div style="text-align:center;margin-top:20px" align="center">\n  \n  <a class="gatsby-resp-image-link" href="/static/175e3c1dd7246701c39c7ad7f841ddc4-17094.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 101px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 297.029702970297%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,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&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="browser lexical" title="" src="/static/175e3c1dd7246701c39c7ad7f841ddc4-17094.png" srcset="/static/175e3c1dd7246701c39c7ad7f841ddc4-17094.png 101w" sizes="(max-width: 101px) 100vw, 101px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div></body></html>\n<p>解析是一个迭代的过程。通常，解析器会向词法分析器请求一个新标记，并尝试将其与某条语法规则进行匹配。如果发现了匹配规则，解析器会将一个对应于该标记的节点添加到解析树中，然后继续请求下一个标记。</p>\n<p>如果没有规则可以匹配，<code>解析器</code>就会将标记存储到内部，并继续请求标记，直至找到可与所有内部存储的标记匹配的规则。如果找不到任何匹配规则，解析器就会引发一个异常。这意味着文档无效，包含语法错误。</p>\n<p>很多时候，<code>解析树</code>还不是最终产品。解析通常是在<code>翻译</code>过程中使用的，而<code>翻译</code>是指将输入文档转换成另一种格式。编译就是这样一个例子。编译器可将源代码编译成机器代码，具体过程是<code>首先将源代码解析成解析树，然后将解析树翻译成机器代码文档</code>。</p>\n<html><head></head><body><div style="text-align:center;margin-top:20px" align="center">\n  \n  <a class="gatsby-resp-image-link" href="/static/adedd28fadec708cb4e0c8dd5d24448c-5b51f.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 104px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 384.6153846153846%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,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&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="browser translate" title="" src="/static/adedd28fadec708cb4e0c8dd5d24448c-5b51f.png" srcset="/static/adedd28fadec708cb4e0c8dd5d24448c-5b51f.png 104w" sizes="(max-width: 104px) 100vw, 104px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div></body></html>\n<h4 id="处理脚本和样式表的顺序"><a href="#%E5%A4%84%E7%90%86%E8%84%9A%E6%9C%AC%E5%92%8C%E6%A0%B7%E5%BC%8F%E8%A1%A8%E7%9A%84%E9%A1%BA%E5%BA%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>处理脚本和样式表的顺序</h4>\n<h5 id="脚本"><a href="#%E8%84%9A%E6%9C%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>脚本</h5>\n<p>网络的模型是同步的。网页作者希望解析器遇到<code>&#x3C;script></code>标记时立即解析并执行脚本。文档的解析将停止，直到脚本执行完毕。如果脚本是外部的，那么解析过程会停止，直到从网络同步抓取资源完成后再继续。此模型已经使用了多年，也在 HTML4 和 HTML5 规范中进行了指定。作者也可以将脚本标注为<code>defer</code>，这样它就不会停止文档解析，而是等到解析结束才执行。HTML5 新增了<code>async</code>属性可将脚本标记为异步，以便由其他线程解析和执行。</p>\n<p>当浏览器碰到<code>scrip</code> 脚本的时候：     </p>\n<ul>\n<li>\n<p><code>&#x3C;script src="script.js">&#x3C;/script></code>\n没有<code>defer</code>或<code>async</code>，浏览器会立即加载并执行指定的脚本，<code>立即</code>指的是在渲染该<code>script</code>标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。</p>\n</li>\n<li>\n<p><code>&#x3C;script async src="script.js">&#x3C;/script></code>\n有<code>async</code>，加载和渲染后续文档元素的过程将和<code>script.js</code>的加载与执行并行进行(异步)，<code>async</code>的执行，并不会按着<code>script</code>在页面中的顺序来执行，而是谁先加载完谁执行。     </p>\n</li>\n<li>\n<p><code>&#x3C;script defer src="myscript.js">&#x3C;/script></code><br>\n如果<code>script</code>标签设置了该属性，则浏览器会异步的下载该文件并且不会影响到后续DOM的渲染；如果有多个设置了<code>defer</code>的script标签存在，则会按照顺序执行所有的script；<code>defer</code>脚本会在文档渲染完毕后，<code>DOMContentLoaded</code>事件调用前执行。、</p>\n</li>\n</ul>\n<html><head></head><body><div style="text-align:center;margin-top:20px" align="center">\n  \n  <a class="gatsby-resp-image-link" href="/static/244a0c3246f534e96ce88124e3978261-d3fcf.jpeg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 496px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 16.25544267053701%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdwRRH//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAEFAn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAXEAEAAwAAAAAAAAAAAAAAAAABABAx/9oACAEBAAE/ITY1/9oADAMBAAIAAwAAABCIL//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABkQAQACAwAAAAAAAAAAAAAAAAEAEBEhcf/aAAgBAQABPxBadY3JX//Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="script async" title="" src="/static/244a0c3246f534e96ce88124e3978261-d3fcf.jpeg" srcset="/static/244a0c3246f534e96ce88124e3978261-0439a.jpeg 210w,\n/static/244a0c3246f534e96ce88124e3978261-ae9e9.jpeg 420w,\n/static/244a0c3246f534e96ce88124e3978261-d3fcf.jpeg 689w" sizes="(max-width: 496px) 100vw, 496px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div></body></html>\n<p>蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。</p>\n<h5 id="预解析"><a href="#%E9%A2%84%E8%A7%A3%E6%9E%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>预解析</h5>\n<p>WebKit和Firefox都进行了这项优化。在执行脚本时，其他线程会解析文档的其余部分，找出并加载需要通过网络加载的其他资源。通过这种方式，资源可以在并行连接上加载，从而提高总体速度。请注意，预解析器不会修改DOM树，而是将这项工作交由主解析器处理；预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用。</p>\n<h5 id="样式表"><a href="#%E6%A0%B7%E5%BC%8F%E8%A1%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>样式表</h5>\n<p>另一方面，样式表有着不同的模型。理论上来说，应用样式表不会更改DOM树，因此似乎没有必要等待样式表并停止文档解析。但这涉及到一个问题，就是脚本在文档解析阶段会请求样式信息。如果当时还没有加载和解析样式，脚本就会获得错误的回复，这样显然会产生很多问题。这看上去是一个非典型案例，但事实上非常普遍。Firefox 在样式表加载和解析的过程中，会禁止所有脚本。而对于WebKit而言，仅当脚本尝试访问的样式属性可能受尚未加载的样式表影响时，它才会禁止该脚本。</p>\n<h3 id="构建呈现树"><a href="#%E6%9E%84%E5%BB%BA%E5%91%88%E7%8E%B0%E6%A0%91" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>构建呈现树</h3>\n<p>在 DOM 树构建的同时，浏览器还会构建另一个树结构：呈现树。这是由可视化元素按照其显示顺序而组成的树，也是文档的可视化表示。它的作用是让您按照正确的顺序绘制内容。</p>\n<p>Firefox 将呈现树中的元素称为“框架”。WebKit 使用的术语是呈现器或呈现对象。\n呈现器知道如何布局并将自身及其子元素绘制出来。</p>\n<h4 id="呈现树和dom树的关系"><a href="#%E5%91%88%E7%8E%B0%E6%A0%91%E5%92%8Cdom%E6%A0%91%E7%9A%84%E5%85%B3%E7%B3%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>呈现树和DOM树的关系</h4>\n<p>呈现器是和 DOM 元素相对应的，但并非一一对应。非可视化的 DOM 元素不会插入呈现树中，例如“head”元素。如果元素的 display 属性值为“none”，那么也不会显示在呈现树中（但是 visibility 属性值为“hidden”的元素仍会显示）。\n有一些 DOM 元素对应多个可视化对象。它们往往是具有复杂结构的元素，无法用单一的矩形来描述。例如，“select”元素有 3 个呈现器：一个用于显示区域，一个用于下拉列表框，还有一个用于按钮。如果由于宽度不够，文本无法在一行中显示而分为多行，那么新的行也会作为新的呈现器而添加。\n另一个关于多呈现器的例子是格式无效的 HTML。根据 CSS 规范，inline 元素只能包含 block 元素或 inline 元素中的一种。如果出现了混合内容，则应创建匿名的 block 呈现器，以包裹 inline 元素。</p>\n<p>有一些呈现对象对应于 DOM 节点，但在树中所在的位置与 DOM 节点不同。浮动定位和绝对定位的元素就是这样，它们处于正常的流程之外，放置在树中的其他地方，并映射到真正的框架，而放在原位的是占位框架。</p>\n<html><head></head><body><div style="text-align:center;margin-top:20px" align="center">\n  \n  <a class="gatsby-resp-image-link" href="/static/a43a99a924a135f54b9ccd937b6c5de5-6248f.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 731px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 54.17236662106703%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAB9ElEQVQoz12RzWsTQRiH84d4ELx48ehVUfCk4FEKgicFDwVFD4oWaQ9+hFIRhKKgoHiqikgPGpSYUiQtTZvspqnJZnaynWR3dmc3yWR3dtmd3UQnptE0D8PAvO8878D8Ur8n8MDqr7dnpOUTpRcn8fdZUUmShFLa/YuJTOuhtXNvRyyyTEQ3NSn3+0nXkL4VVhpwDcGaEFzXHQwGo27MY5zBpYVSNV3t7HamZcGSrh+TpHMQyrJMCOlO0Ov1SJ4UF4pwEfqGfyDbnM/p+t1Wq9hscs61KJpVlAcY1w1jysfrOHc/Jz+W/8vdOE4bxryqiiniaIhZ9fpTjDv+kEmZZMjG9Q1wC/j7YxkEwVEAjgAg+8NSFMfHFeV8q2VZFj0M+Uo2r22CG8DXxjJjFWCt7KI3jMk9zrOOky+XpVrtvabZ7fboTUdQdnABa5JWWavQPcoaLBWGhm1f2do6raqnKL38pVmYgVBMdDk/C6Gk68IMwzDwguqjavZ2Fn1C8CXMz+XRK3Tw25y3bfuOLF9S1QuU3owizfOeq+qMql6k9Gq7vUpMAp/B7fQ2yzP6mZaWSvZHOzVOuO/7Ocd5rSiLjGWSJAyCPc97B8ATxj5EkTUM+Qe2flrBfkAlirLILbvTOUdRdCgbjBuNBkJI7KZp/gt8dPkPcm4/a031FfcAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="browser renderTree" title="" src="/static/a43a99a924a135f54b9ccd937b6c5de5-6248f.png" srcset="/static/a43a99a924a135f54b9ccd937b6c5de5-bf5c9.png 210w,\n/static/a43a99a924a135f54b9ccd937b6c5de5-81203.png 420w,\n/static/a43a99a924a135f54b9ccd937b6c5de5-6248f.png 731w" sizes="(max-width: 731px) 100vw, 731px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div></body></html>\n<h3 id="布局"><a href="#%E5%B8%83%E5%B1%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>布局</h3>\n<p>呈现器在创建完成并添加到呈现树时，并不包含位置和大小信息。计算这些值的过程称为<code>布局</code>或<code>重排</code>。</p>\n<p>HTML采用基于流的布局模型，这意味着大多数情况下只要一次遍历就能计算出几何信息。处于流中靠后位置元素通常不会影响靠前位置元素的几何特征，因此布局可以按从左至右、从上至下的顺序遍历文档。但是也有例外情况，比如 HTML 表格的计算就需要不止一次的遍历 (3.5)。</p>\n<p>坐标系是相对于根框架而建立的，使用的是<code>上坐标和左坐标</code>。</p>\n<p>布局是一个递归的过程。它从根呈现器（对应于 HTML 文档的 <html> 元素）开始，然后递归遍历部分或所有的框架层次结构，为每一个需要计算的呈现器计算几何信息。</p>\n<p>根呈现器的位置左边是 0,0，其尺寸为视口（也就是浏览器窗口的可见区域）。\n所有的呈现器都有一个“layout”或者“reflow”方法，每一个呈现器都会调用其需要进行布局的子代的 layout 方法。</p>\n<h4 id="全局布局和增量布局"><a href="#%E5%85%A8%E5%B1%80%E5%B8%83%E5%B1%80%E5%92%8C%E5%A2%9E%E9%87%8F%E5%B8%83%E5%B1%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>全局布局和增量布局</h4>\n<p>全局布局是指触发了整个呈现树范围的布局，触发原因可能包括：</p>\n<ul>\n<li>影响所有呈现器的全局样式更改，例如字体大小更改。</li>\n<li>屏幕大小调整。\n布局可以采用增量方式，也就是只对 dirty 呈现器进行布局（这样可能存在需要进行额外布局的弊端）。\n当呈现器为 dirty 时，会异步触发增量布局。例如，当来自网络的额外内容添加到 DOM 树之后，新的呈现器附加到了呈现树中。</li>\n</ul>\n<h4 id="异步布局和同步布局"><a href="#%E5%BC%82%E6%AD%A5%E5%B8%83%E5%B1%80%E5%92%8C%E5%90%8C%E6%AD%A5%E5%B8%83%E5%B1%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>异步布局和同步布局</h4>\n<p>增量布局是异步执行的。Firefox 将增量布局的“reflow 命令”加入队列，而调度程序会触发这些命令的批量执行。WebKit 也有用于执行增量布局的计时器：对呈现树进行遍历，并对 dirty 呈现器进行布局。\n请求样式信息（例如“offsetHeight”）的脚本可同步触发增量布局。\n全局布局往往是同步触发的。\n有时，当初始布局完成之后，如果一些属性（如滚动位置）发生变化，布局就会作为回调而触发。</p>\n<h3 id="绘制"><a href="#%E7%BB%98%E5%88%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>绘制</h3>\n<p>在绘制阶段，系统会遍历呈现树，并调用呈现器的“paint”方法，将呈现器的内容显示在屏幕上。绘制工作是使用用户界面基础组件完成的。</p>\n<h4 id="全局绘制和增量绘制"><a href="#%E5%85%A8%E5%B1%80%E7%BB%98%E5%88%B6%E5%92%8C%E5%A2%9E%E9%87%8F%E7%BB%98%E5%88%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>全局绘制和增量绘制</h4>\n<p>和布局一样，绘制也分为全局（绘制整个呈现树）和增量两种。在增量绘制中，部分呈现器发生了更改，但是不会影响整个树。更改后的呈现器将其在屏幕上对应的矩形区域设为无效，这导致 OS 将其视为一块“dirty 区域”，并生成“paint”事件。OS 会很巧妙地将多个区域合并成一个。在 Chrome 浏览器中，情况要更复杂一些，因为 Chrome 浏览器的呈现器不在主进程上。Chrome 浏览器会在某种程度上模拟 OS 的行为。展示层会侦听这些事件，并将消息委托给呈现根节点。然后遍历呈现树，直到找到相关的呈现器，该呈现器会重新绘制自己（通常也包括其子代）。</p>\n<h4 id="绘制顺序"><a href="#%E7%BB%98%E5%88%B6%E9%A1%BA%E5%BA%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>绘制顺序</h4>\n<p>CSS2 规范定义了绘制流程的顺序。绘制的顺序其实就是元素进入堆栈样式上下文的顺序。这些堆栈会从后往前绘制，因此这样的顺序会影响绘制。块呈现器的堆栈顺序如下：</p>\n<ul>\n<li>背景颜色</li>\n<li>背景图片</li>\n<li>边框</li>\n<li>子代</li>\n<li>轮廓</li>\n</ul>\n<h4 id="firefox-显示列表"><a href="#firefox-%E6%98%BE%E7%A4%BA%E5%88%97%E8%A1%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Firefox 显示列表</h4>\n<p>Firefox 遍历整个呈现树，为绘制的矩形建立一个显示列表。列表中按照正确的绘制顺序（先是呈现器的背景，然后是边框等等）包含了与矩形相关的呈现器。这样等到重新绘制的时候，只需遍历一次呈现树，而不用多次遍历（绘制所有背景，然后绘制所有图片，再绘制所有边框等等）。\nFirefox 对此过程进行了优化，也就是不添加隐藏的元素，例如被不透明元素完全遮挡住的元素。</p>\n<h4 id="webkit-矩形存储"><a href="#webkit-%E7%9F%A9%E5%BD%A2%E5%AD%98%E5%82%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WebKit 矩形存储</h4>\n<p>在重新绘制之前，WebKit 会将原来的矩形另存为一张位图，然后只绘制新旧矩形之间的差异部分。\n<strong>动态变化</strong><br>\n在发生变化时，浏览器会尽可能做出最小的响应。因此，元素的颜色改变后，只会对该元素进行重绘。元素的位置改变后，只会对该元素及其子元素（可能还有同级元素）进行布局和重绘。添加 DOM 节点后，会对该节点进行布局和重绘。一些重大变化（例如增大“html”元素的字体）会导致缓存无效，使得整个呈现树都会进行重新布局和绘制。</p>',
frontmatter:{title:"how browser work",img:"./img/2016-04-18.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"April 17, 2016",path:"blog/http/2016-04-18-how-browser-work.md",slug:"/blog/2016/04/18/how-browser-work.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"FP18：Semigroup"},fields:{slug:"/blog/2018/12/13/FP18-Semigroup.html"}}},{node:{frontmatter:{title:"FP17：Transform Naturally"},fields:{slug:"/blog/2018/12/11/FP17-Transform-Naturally.html"}}},{node:{frontmatter:{title:"FP16：Applicative Functor"},fields:{slug:"/blog/2018/11/07/FB16-Applicative-Functor.html"}}},{node:{frontmatter:{title:"FP15：Monad-2"},fields:{slug:"/blog/2018/09/11/FB15-Monad-2.html"}}},{node:{frontmatter:{title:"FP14：Monad-1"},fields:{slug:"/blog/2018/09/02/FP14-Monad-1.html"}}},{node:{frontmatter:{title:"代理模式"},fields:{slug:"/blog/2018/08/24/代理-pattern.html"}}},{node:{frontmatter:{title:"'类'模式"},fields:{slug:"/blog/2018/08/24/class-pattern.html"}}},{node:{frontmatter:{title:"FP13：IO - keep code pure"},fields:{slug:"/blog/2018/08/08/FP13-IO.html"}}},{node:{frontmatter:{title:"FP12：Either:Left or Right"},fields:{slug:"/blog/2018/08/03/FP12-Either.html"}}},{node:{frontmatter:{title:"FP11：Schrödinger's Maybe"},fields:{slug:"/blog/2018/08/02/FP11-Maybe.html"}}}]}},pathContext:{slug:"/blog/2016/04/18/how-browser-work.html"}}}});