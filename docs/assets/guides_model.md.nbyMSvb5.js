import{_ as r,c as p,J as l,w as o,a5 as n,m as e,a as t,E as s,o as c}from"./chunks/framework.Bx0JrJuv.js";const V=JSON.parse('{"title":"ChatGPT 模型指南：参数概念与应用","description":"了解 ChatGPT 模型的不同版本及参数概念，包括 temperature、top_p、presence_penalty 和 frequency_penalty。","frontmatter":{"title":"ChatGPT 模型指南：参数概念与应用","description":"了解 ChatGPT 模型的不同版本及参数概念，包括 temperature、top_p、presence_penalty 和 frequency_penalty。","tags":["ChatGPT","模型指南","参数概念","LLM","生成模型"]},"headers":[],"relativePath":"guides/model.md","filePath":"guides/model.md","lastUpdated":1716183374000}'),i={name:"guides/model.md"},d=n('<h1 id="模型指南" tabindex="-1">模型指南 <a class="header-anchor" href="#模型指南" aria-label="Permalink to &quot;模型指南&quot;">​</a></h1><h2 id="chatgpt" tabindex="-1">ChatGPT <a class="header-anchor" href="#chatgpt" aria-label="Permalink to &quot;ChatGPT&quot;">​</a></h2><ul><li><strong>gpt-3.5-turbo</strong>：目前最生成速度最快的 chatgpt 模型更快，但可能会牺牲一些生成文本的质量，上下文长度为 4k。</li><li><strong>gpt-3.5-turbo-16k</strong>：同 gpt-4，上下文限制增加到 16k token，同时费率更高。</li><li><strong>gpt-4</strong>：ChatGPT 4.0 在语言理解和生成能力方面相对于 3.5 有所提升。它可以更好地理解上下文和语境，并生成更准确、自然的回答。这得益于 GPT-4 模型的改进，包括更好的语言建模和更深入的语义理解，但它的速度可能比其他模型慢，上下文长度为 8k。</li><li><strong>gpt-4-32k</strong>：同 gpt-4，上下文限制增加到 32k token，同时费率更高。</li></ul><h2 id="模型参数概念" tabindex="-1">模型参数概念 <a class="header-anchor" href="#模型参数概念" aria-label="Permalink to &quot;模型参数概念&quot;">​</a></h2><p>LLM 看似很神奇，但本质还是一个概率问题，神经网络根据输入的文本，从预训练的模型里面生成一堆候选词，选择概率高的作为输出，相关的参数，大多都是跟采样有关（也就是要如何从候选词里选择输出）。</p><h3 id="temperature" tabindex="-1"><code>temperature</code> <a class="header-anchor" href="#temperature" aria-label="Permalink to &quot;`temperature`&quot;">​</a></h3><p>用于控制模型输出的结果的随机性，这个值越大随机性越大。一般我们多次输入相同的 prompt 之后，模型的每次输出都不一样。</p><ul><li>设置为 0，对每个 prompt 都生成固定的输出</li><li>较低的值，输出更集中，更有确定性</li><li>较高的值，输出更随机（更有创意 ）</li></ul>',8),_=e("br",null,null,-1),u=e("h3",{id:"top-p",tabindex:"-1"},[e("code",null,"top_p"),t(),e("a",{class:"header-anchor",href:"#top-p","aria-label":'Permalink to "`top_p`"'},"​")],-1),h=e("p",null,"核采样 top_p 也是采样参数，跟 temperature 不一样的采样方式。模型在输出之前，会生成一堆 token，这些 token 根据质量高低排名，核采样模式中候选词列表是动态的，从 tokens 里按百分比选择候选词。 top_p 为选择 token 引入了随机性，让其他高分的 token 有被选择的机会，不会总是选最高分的。",-1),m=e("br",null,null,-1),P=e("h3",{id:"presence-penalty",tabindex:"-1"},[e("code",null,"presence_penalty"),t(),e("a",{class:"header-anchor",href:"#presence-penalty","aria-label":'Permalink to "`presence_penalty`"'},"​")],-1),y=e("p",null,"Presence Penalty 参数可以看作是对生成文本中重复内容的一种惩罚。当该参数设置较高时，生成模型会尽量避免产生重复的词语、短语或句子。相反，如果 Presence Penalty 参数较低，则生成的文本可能会包含更多重复的内容。通过调整 Presence Penalty 参数的值，可以实现对生成文本的原创性和多样性的控制。参数的重要性主要体现在以下几个方面：",-1),f=e("ul",null,[e("li",null,"提高生成文本的独创性和多样性：在某些应用场景下，如创意写作、生成新闻标题等，需要生成的文本具有较高的独创性和多样性。通过增加 Presence Penalty 参数的值，可以有效减少生成文本中的重复内容，从而提高文本的独创性和多样性。"),e("li",null,"防止生成循环和无意义的内容：在某些情况下，生成模型可能会产生循环、重复的文本，这些文本通常无法传达有效的信息。通过适当增加 Presence Penalty 参数的值，可以降低生成这类无意义内容的概率，提高生成文本的可读性和实用性。")],-1),g=n('<br><h3 id="frequency-penalty" tabindex="-1"><code>frequency_penalty</code> <a class="header-anchor" href="#frequency-penalty" aria-label="Permalink to &quot;`frequency_penalty`&quot;">​</a></h3><p>是一种机制，通过对文本中频繁出现的新词汇施加惩罚，以减少模型重复同一词语的可能性，值越大，越有可能降低重复字词。</p><ul><li><code>-2.0</code> 当早间新闻开始播出，我发现我家电视现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在现在 <em>（频率最高的词是 “现在”，占比 44.79%）</em></li><li><code>-1.0</code> 他总是在清晨看新闻，在电视前看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看看 <em>（频率最高的词是 “看”，占比 57.69%）</em></li><li><code>0.0</code> 当清晨的阳光洒进小餐馆时，一名疲倦的邮递员出现在门口，他的手中提着一袋信件。店主热情地为他准备了一份早餐，他在享用早餐的同时开始整理邮件。<strong>（频率最高的词是 “的”，占比 8.45%）</strong></li><li><code>1.0</code> 一个深度睡眠的女孩被一阵温暖的阳光唤醒，她看到了早晨的第一缕阳光，周围是鸟语花香，一切都充满了生机。<em>（频率最高的词是 “的”，占比 5.45%）</em></li><li><code>2.0</code> 每天早上，他都会在阳台上坐着吃早餐。在柔和的夕阳照耀下，一切看起来都非常宁静。然而有一天，当他准备端起早餐的时候，一只乐观的小鸟飞过，给他带来了一天的好心情。 <em>（频率最高的词是 “的”，占比 4.94%）</em></li></ul>',4);function T(k,b,q,C,x,G){const a=s("Callout");return c(),p("div",null,[d,l(a,null,{default:o(()=>[t(" 一般来说，prompt 越长，描述得越清楚，模型生成的输出质量就越好，置信度越高，这时可以适当调高 temperature 的值；反过来，如果 prompt 很短，很含糊，这时再设置一个比较高的 temperature 值，模型的输出就很不稳定了。 ")]),_:1}),_,u,h,l(a,null,{default:o(()=>[t(" top_p 与随机性类似，一般来说不建议和随机性 temperature 一起更改 ")]),_:1}),m,P,y,f,l(a,null,{default:o(()=>[t(" 值得注意的是，Presence Penalty 参数与其他参数（如 Temperature 和 top-p）共同影响着生成文本的质量。对比其他参数，Presence Penalty 参数主要关注文本的独创性和重复性，而 Temperature 和 top-p 参数则更多地影响着生成文本的随机性和确定性。通过合理地调整这些参数，可以实现对生成文本质量的综合控制 ")]),_:1}),g])}const N=r(i,[["render",T]]);export{V as __pageData,N as default};
