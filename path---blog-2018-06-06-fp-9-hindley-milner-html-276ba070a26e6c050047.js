webpackJsonp([79387333201259],{523:function(s,a){s.exports={data:{markdownRemark:{html:'<h2 id="初识类型"><a href="#%E5%88%9D%E8%AF%86%E7%B1%BB%E5%9E%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>初识类型</h2>\n<p>刚接触函数式编程的人很容易深陷类型签名(type signatures)的泥淖。类型(type)是让所有不同背景的人都能高效沟通的元语言。很大程度上，类型签名是以 “Hindley-Milner” 系统写就的，本章我们将一起探究下这个系统。</p>\n<p>类型签名在写纯函数时所起的作用非常大，大到英语都不能望其项背。这些签名轻轻诉说着函数最不可告人的秘密。短短一行，就能暴露函数的行为和目的。类型签名还衍生出了 “自由定理(free theorems)” 的概念。因为类型是可以推断的，所以明确的类型签名并不是必要的；不过你完全可以写精确度很高的类型签名，也可以让它们保持通用、抽象。类型签名不但可以用于编译时检测(compile time checks)，还是最好的文档。所以类型签名在函数式编程中扮演着非常重要的角色——重要程度远远超出你的想象。</p>\n<p>JavaScript 是一种动态类型语言，但这并不意味着要一味否定类型。我们还是要和字符串、数值、布尔值等等类型打交道的；只不过，语言层面上没有相关的集成让我们时刻谨记各种数据的类型罢了。别担心，既然我们可以用类型签名生成文档，也可以用注释来达到区分类型的目的。</p>\n<p>JavaScript 也有一些类型检查工具，比如 <a href="http://flowtype.org/">Flow</a>，或者它的静态类型方言 <a href="http://www.typescriptlang.org/">TypeScript</a> 。由于本书的目标是让读者能够熟练使用各种工具去书写函数式代码，所以我们将选择所有函数式语言都遵循的标准类型系统。</p>\n<h2 id="神秘的传奇故事"><a href="#%E7%A5%9E%E7%A7%98%E7%9A%84%E4%BC%A0%E5%A5%87%E6%95%85%E4%BA%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>神秘的传奇故事</h2>\n<p>从积尘已久的数学书，到浩如烟海的学术论文；从每周必读的博客文章，到源代码本身，我们都能发现 Hindley-Milner 类型签名的身影。Hindley-Milner 并不是一个复杂的系统，但还是需要一些解释和练习才能完全掌握这个小型语言的要义。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  capitalize :: String -> String</span>\n<span class="token keyword">var</span> <span class="token function-variable function">capitalize</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token function">head</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token function">tail</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">capitalize</span><span class="token punctuation">(</span><span class="token string">"smurf"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//=> "Smurf"</span></code></pre>\n      </div>\n<p>这里，<code class="gatsby-code-text">capitalize</code> 接受一个 <code class="gatsby-code-text">String</code> 并返回了一个 <code class="gatsby-code-text">String</code>。先别管实现，我们感兴趣的是它的类型签名。</p>\n<p>在 Hindley-Milner 系统中，函数都写成类似 <code class="gatsby-code-text">a -&gt; b</code> 这个样子，其中 <code class="gatsby-code-text">a</code> 和<code class="gatsby-code-text">b</code> 是任意类型的变量。因此，<code class="gatsby-code-text">capitalize</code> 函数的类型签名可以理解为“一个接受 <code class="gatsby-code-text">String</code> 返回 <code class="gatsby-code-text">String</code> 的函数”。换句话说，它接受一个 <code class="gatsby-code-text">String</code> 类型作为输入，并返回一个 <code class="gatsby-code-text">String</code> 类型的输出。</p>\n<p>再来看一些函数签名：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  strLength :: String -> Number</span>\n<span class="token keyword">var</span> <span class="token function-variable function">strLength</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//  join :: String -> [String] -> String</span>\n<span class="token keyword">var</span> join <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>what<span class="token punctuation">,</span> xs<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> xs<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>what<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//  match :: Regex -> String -> [String]</span>\n<span class="token keyword">var</span> match <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//  replace :: Regex -> String -> String -> String</span>\n<span class="token keyword">var</span> replace <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> sub<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> sub<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">strLength</code> 和 <code class="gatsby-code-text">capitalize</code> 类似：接受一个 <code class="gatsby-code-text">String</code> 然后返回一个 <code class="gatsby-code-text">Number</code>。</p>\n<p>至于其他的，第一眼看起来可能会比较疑惑。不过在还不完全了解细节的情况下，你尽可以把最后一个类型视作返回值。那么 <code class="gatsby-code-text">match</code> 函数就可以这么理解：它接受一个 <code class="gatsby-code-text">Regex</code> 和一个 <code class="gatsby-code-text">String</code>，返回一个 <code class="gatsby-code-text">[String]</code>。但是，这里有一个非常有趣的地方，请允许我稍作解释。</p>\n<p>对于 <code class="gatsby-code-text">match</code> 函数，我们完全可以把它的类型签名这样分组：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  match :: Regex -> (String -> [String])</span>\n<span class="token keyword">var</span> match <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>是的，把最后两个类型包在括号里就能反映更多的信息了。现在我们可以看出 <code class="gatsby-code-text">match</code> 这个函数接受一个 <code class="gatsby-code-text">Regex</code> 作为参数，返回一个从 <code class="gatsby-code-text">String</code> 到 <code class="gatsby-code-text">[String]</code> 的函数。因为 curry，造成的结果就是这样：给 <code class="gatsby-code-text">match</code> 函数一个 <code class="gatsby-code-text">Regex</code>，得到一个新函数，能够处理其 <code class="gatsby-code-text">String</code> 参数。当然了，我们并非一定要这么看待这个过程，但这样思考有助于理解为何最后一个类型是返回值。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  match :: Regex -> (String -> [String])</span>\n\n<span class="token comment">//  onHoliday :: String -> [String]</span>\n<span class="token keyword">var</span> onHoliday <span class="token operator">=</span> <span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/holiday/ig</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>每传一个参数，就会弹出类型签名最前面的那个类型。所以 <code class="gatsby-code-text">onHoliday</code> 就是已经有了 <code class="gatsby-code-text">Regex</code> 参数的 <code class="gatsby-code-text">match</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  replace :: Regex -> (String -> (String -> String))</span>\n<span class="token keyword">var</span> replace <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> sub<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> sub<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>但是在这段代码中，就像你看到的那样，为 <code class="gatsby-code-text">replace</code> 加上这么多括号未免有些多余。所以这里的括号是完全可以省略的，如果我们愿意，可以一次性把所有的参数都传进来；所以，一种更简单的思路是：<code class="gatsby-code-text">replace</code> 接受三个参数，分别是 <code class="gatsby-code-text">Regex</code>、<code class="gatsby-code-text">String</code> 和另一个 <code class="gatsby-code-text">String</code>，返回的还是一个 <code class="gatsby-code-text">String</code>。</p>\n<p>最后几点：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  id :: a -> a</span>\n<span class="token keyword">var</span> <span class="token function-variable function">id</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token comment">//  map :: (a -> b) -> [a] -> [b]</span>\n<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> xs<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> xs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>这里的 <code class="gatsby-code-text">id</code> 函数接受任意类型的 <code class="gatsby-code-text">a</code> 并返回同一个类型的数据。和普通代码一样，我们也可以在类型签名中使用变量。把变量命名为 <code class="gatsby-code-text">a</code> 和 <code class="gatsby-code-text">b</code> 只是一种约定俗成的习惯，你可以使用任何你喜欢的名称。对于相同的变量名，其类型也一定相同。这是非常重要的一个原则，所以我们必须重申：<code class="gatsby-code-text">a -&gt; b</code> 可以是从任意类型的 <code class="gatsby-code-text">a</code> 到任意类型的 <code class="gatsby-code-text">b</code>，但是 <code class="gatsby-code-text">a -&gt; a</code> 必须是同一个类型。例如，<code class="gatsby-code-text">id</code> 可以是 <code class="gatsby-code-text">String -&gt; String</code>，也可以是 <code class="gatsby-code-text">Number -&gt; Number</code>，但不能是 <code class="gatsby-code-text">String -&gt; Bool</code>。</p>\n<p>相似地，<code class="gatsby-code-text">map</code> 也使用了变量，只不过这里的 <code class="gatsby-code-text">b</code> 可能与 <code class="gatsby-code-text">a</code> 类型相同，也可能不相同。我们可以这么理解：<code class="gatsby-code-text">map</code> 接受两个参数，第一个是从任意类型 <code class="gatsby-code-text">a</code> 到任意类型 <code class="gatsby-code-text">b</code> 的函数；第二个是一个数组，元素是任意类型的 <code class="gatsby-code-text">a</code>；<code class="gatsby-code-text">map</code> 最后返回的是一个类型 <code class="gatsby-code-text">b</code> 的数组。</p>\n<p>类型签名的美妙令人印象深刻，希望你已经被它深深折服。类型签名简直能够一字一句地告诉我们函数做了什么事情。比如 <code class="gatsby-code-text">map</code> 函数就是这样：给定一个从 <code class="gatsby-code-text">a</code> 到 <code class="gatsby-code-text">b</code> 的函数和一个 <code class="gatsby-code-text">a</code> 类型的数组作为参数，它就能返回一个 <code class="gatsby-code-text">b</code> 类型的数组。<code class="gatsby-code-text">map</code> 唯一的明智之举就是使用其函数参数调用每一个 <code class="gatsby-code-text">a</code>，其他所有操作都是噱头。</p>\n<p>辨别类型和它们的含义是一项重要的技能，这项技能可以让你在函数式编程的路上走得更远。不仅论文、博客和文档等更易理解，类型签名本身也基本上能够告诉你它的函数性(functionality)。要成为一个能够熟练读懂类型签名的人，你得勤于练习；不过一旦掌握了这项技能，你将会受益无穷，不读手册也能获取大量信息。</p>\n<p>这里还有一些例子，你可以自己试试看能不能理解它们。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">//  head :: [a] -> a</span>\n<span class="token keyword">var</span> <span class="token function-variable function">head</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>xs<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> xs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token comment">//  filter :: (a -> Bool) -> [a] -> [a]</span>\n<span class="token keyword">var</span> filter <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> xs<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> xs<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//  reduce :: (b -> a -> b) -> b -> [a] -> b</span>\n<span class="token keyword">var</span> reduce <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> x<span class="token punctuation">,</span> xs<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> xs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">reduce</code> 可能是以上签名里让人印象最为深刻的一个，同时也是最复杂的一个了，所以如果你理解起来有困难的话，也不必气馁。为了满足你的好奇心，我还是试着解释一下吧；尽管我的解释远远不如你自己通过类型签名理解其含义来得有教益。</p>\n<p>不保证解释完全正确…(译者注：此处原文是“here goes nothing”，一般用于人们在做没有把握的事情之前说的话。)注意看 <code class="gatsby-code-text">reduce</code> 的签名，可以看到它的第一个参数是个函数，这个函数接受一个 <code class="gatsby-code-text">b</code> 和一个 <code class="gatsby-code-text">a</code> 并返回一个 <code class="gatsby-code-text">b</code>。那么这些 <code class="gatsby-code-text">a</code> 和 <code class="gatsby-code-text">b</code> 是从哪来的呢？很简单，签名中的第二个和第三个参数就是 <code class="gatsby-code-text">b</code> 和元素为 <code class="gatsby-code-text">a</code> 的数组，所以唯一合理的假设就是这里的 <code class="gatsby-code-text">b</code> 和每一个 <code class="gatsby-code-text">a</code> 都将传给前面说的函数作为参数。我们还可以看到，<code class="gatsby-code-text">reduce</code> 函数最后返回的结果是一个 <code class="gatsby-code-text">b</code>，也就是说，<code class="gatsby-code-text">reduce</code> 的第一个参数函数的输出就是 <code class="gatsby-code-text">reduce</code> 函数的输出。知道了 <code class="gatsby-code-text">reduce</code> 的含义，我们才敢说上面关于类型签名的推理是正确的。</p>\n<h2 id="缩小可能性范围"><a href="#%E7%BC%A9%E5%B0%8F%E5%8F%AF%E8%83%BD%E6%80%A7%E8%8C%83%E5%9B%B4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缩小可能性范围</h2>\n<p>一旦引入一个类型变量，就会出现一个奇怪的特性叫做 <em>parametricity</em>(<a href="http://en.wikipedia.org/wiki/Parametricity">http://en.wikipedia.org/wiki/Parametricity</a> )。这个特性表明，函数将会<em>以一种统一的行为作用于所有的类型</em>。我们来研究下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// head :: [a] -> a</span></code></pre>\n      </div>\n<p>注意看 <code class="gatsby-code-text">head</code>，可以看到它接受 <code class="gatsby-code-text">[a]</code> 返回 <code class="gatsby-code-text">a</code>。我们除了知道参数是个<code class="gatsby-code-text">数组</code>，其他的一概不知；所以函数的功能就只限于操作这个数组上。在它对 <code class="gatsby-code-text">a</code> 一无所知的情况下，它可能对 <code class="gatsby-code-text">a</code> 做什么操作呢？换句话说，<code class="gatsby-code-text">a</code> 告诉我们它不是一个<code class="gatsby-code-text">特定</code>的类型，这意味着它可以是<code class="gatsby-code-text">任意</code>类型；那么我们的函数对<em>每一个</em>可能的类型的操作都必须保持统一。这就是 <em>parametricity</em> 的含义。要让我们来猜测 <code class="gatsby-code-text">head</code> 的实现的话，唯一合理的推断就是它返回数组的第一个，或者最后一个，或者某个随机的元素；当然，<code class="gatsby-code-text">head</code> 这个命名应该能给我们一些线索。</p>\n<p>再看一个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// reverse :: [a] -> [a]</span></code></pre>\n      </div>\n<p>仅从类型签名来看，<code class="gatsby-code-text">reverse</code> 可能的目的是什么？再次强调，它不能对 <code class="gatsby-code-text">a</code> 做任何特定的事情。它不能把 <code class="gatsby-code-text">a</code> 变成另一个类型，或者引入一个 <code class="gatsby-code-text">b</code>；这都是不可能的。那它可以排序么？答案是不能，没有足够的信息让它去为每一个可能的类型排序。它能重新排列么？可以的，我觉得它可以，但它必须以一种可预料的方式达成目标。另外，它也有可能删除或者重复某一个元素。重点是，不管在哪种情况下，类型 <code class="gatsby-code-text">a</code> 的多态性(polymorphism)都会大幅缩小 <code class="gatsby-code-text">reverse</code> 函数可能的行为的范围。</p>\n<p>这种“可能性范围的缩小”(narrowing of possibility)允许我们利用类似 <a href="https://www.haskell.org/hoogle">Hoogle</a> 这样的类型签名搜索引擎去搜索我们想要的函数。类型签名所能包含的信息量真的非常大。</p>\n<h2 id="自由定理"><a href="#%E8%87%AA%E7%94%B1%E5%AE%9A%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>自由定理</h2>\n<p>类型签名除了能够帮助我们推断函数可能的实现，还能够给我们带来<em>自由定理</em>(free theorems)。下面是两个直接从 <a href="http://ttic.uchicago.edu/~dreyer/course/papers/wadler.pdf">Wadler 关于此主题的论文</a> 中随机选择的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// head :: [a] -> a</span>\n<span class="token function">compose</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> head<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">compose</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// filter :: (a -> Bool) -> [a] -> [a]</span>\n<span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token function">compose</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token function">filter</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">map</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>不用写一行代码你也能理解这些定理，它们直接来自于类型本身。第一个例子中，等式左边说的是，先获取数组的<code class="gatsby-code-text">头部</code>(译者注：即第一个元素)，然后对它调用函数 <code class="gatsby-code-text">f</code>；等式右边说的是，先对数组中的每一个元素调用 <code class="gatsby-code-text">f</code>，然后再取其返回结果的<code class="gatsby-code-text">头部</code>。这两个表达式的作用是相等的，但是前者要快得多。</p>\n<p>你可能会想，这不是常识么。但根据我的调查，计算机是没有常识的。实际上，计算机必须要有一种形式化方法来自动进行类似的代码优化。数学提供了这种方法，能够形式化直观的感觉，这无疑对死板的计算机逻辑非常有用。</p>\n<p>第二个例子 <code class="gatsby-code-text">filter</code> 也是一样。等式左边是说，先组合 <code class="gatsby-code-text">f</code> 和 <code class="gatsby-code-text">p</code> 检查哪些元素要过滤掉，然后再通过 <code class="gatsby-code-text">map</code> 实际调用 <code class="gatsby-code-text">f</code>(别忘了 <code class="gatsby-code-text">filter</code> 是不会改变数组中元素的，这就保证了 <code class="gatsby-code-text">a</code> 将保持不变)；等式右边是说，先用 <code class="gatsby-code-text">map</code> 调用 <code class="gatsby-code-text">f</code>，然后再根据 <code class="gatsby-code-text">p</code> 过滤元素。这两者也是相等的。</p>\n<p>以上只是两个例子，但它们传达的定理却是普适的，可以应用到所有的多态性类型签名上。在 JavaScript 中，你可以借助一些工具来声明重写规则，也可以直接使用 <code class="gatsby-code-text">compose</code> 函数来定义重写规则。总之，这么做的好处是显而易见且唾手可得的，可能性则是无限的。</p>\n<h1 id="类型约束"><a href="#%E7%B1%BB%E5%9E%8B%E7%BA%A6%E6%9D%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>类型约束</h1>\n<p>最后要注意的一点是，签名也可以把类型约束为一个特定的接口(interface)。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// sort :: Ord a => [a] -> [a]</span></code></pre>\n      </div>\n<p>胖箭头左边表明的是这样一个事实：<code class="gatsby-code-text">a</code> 一定是个 <code class="gatsby-code-text">Ord</code> 对象。也就是说，<code class="gatsby-code-text">a</code> 必须要实现 <code class="gatsby-code-text">Ord</code> 接口。<code class="gatsby-code-text">Ord</code> 到底是什么？它是从哪来的？在一门强类型语言中，它可能就是一个自定义的接口，能够让不同的值排序。通过这种方式，我们不仅能够获取关于 <code class="gatsby-code-text">a</code> 的更多信息，了解 <code class="gatsby-code-text">sort</code> 函数具体要干什么，而且还能限制函数的作用范围。我们把这种接口声明叫做<em>类型约束</em>(type constraints)。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// assertEqual :: (Eq a, Show a) => a -> a -> Assertion</span></code></pre>\n      </div>\n<p>这个例子中有两个约束：<code class="gatsby-code-text">Eq</code> 和 <code class="gatsby-code-text">Show</code>。它们保证了我们可以检查不同的 <code class="gatsby-code-text">a</code> 是否相等，并在有不相等的情况下打印出其中的差异。</p>\n<p>我们将会在后面的章节中看到更多类型约束的例子，其含义也会更加清晰。</p>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<p>Hindley-Milner 类型签名在函数式编程中无处不在，它们简单易读，写起来也不复杂。但仅仅凭签名就能理解整个程序还是有一定难度的，要想精通这个技能就更需要花点时间了。从这开始，我们将给每一行代码都加上类型签名。</p>',frontmatter:{title:"FP9：Hindley-Milner",img:"./img/2018-06-06.jpeg",author:["Sylvenas"],excerpt:null,catalogue:null},fields:{date:"June 05, 2018",path:"blog/functional/2018-06-06-FP9-Hindley-Milner.md",slug:"/blog/2018/06/06/FP9-Hindley-Milner.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"被讨厌的勇气"},fields:{slug:"/blog/2020/05/14/被讨厌的勇气.html"}}},{node:{frontmatter:{title:"加法是自然之道 - Monoid"},fields:{slug:"/blog/2020/03/02/加法是自然之道.html"}}},{node:{frontmatter:{title:"俄罗斯套娃娃 - Monad"},fields:{slug:"/blog/2020/02/12/俄罗斯套娃娃.html"}}},{node:{frontmatter:{title:"纪念刘和珍君"},fields:{slug:"/blog/2020/02/07/记念刘和珍君.html"}}},{node:{frontmatter:{title:"应用函子 - Applicative"},fields:{slug:"/blog/2020/02/05/应用函子.html"}}},{node:{frontmatter:{title:"动物庄园"},fields:{slug:"/blog/2020/02/01/动物庄园.html"}}},{node:{frontmatter:{title:"薛定谔的 Maybe - IO"},fields:{slug:"/blog/2020/01/30/薛定谔的Maybe.html"}}},{node:{frontmatter:{title:"Abort-Controller"},fields:{slug:"/blog/2020/01/18/abort-controller.html"}}},{node:{frontmatter:{title:"Catch React Error"},fields:{slug:"/blog/2020/01/02/catch-react-error.html"}}},{node:{frontmatter:{title:"Node.js 集群"},fields:{slug:"/blog/2019/11/12/node-cluster.html"}}}]}},pathContext:{slug:"/blog/2018/06/06/FP9-Hindley-Milner.html"}}}});