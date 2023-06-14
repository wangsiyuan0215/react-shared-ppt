---
title: React Event
---

# React Event

> React 实现了一套自己的事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等，虽然和原生的是两码事，但也是基于浏览器的事件机制。

- 原生标签：React 对 JSX 中的原生标签（如 `div`、`input`）实现了一系列的的**合成事件**与用户进行交互。
- 自定义组件：与声明组件 prop 相同，也称为自定义事件。请参照下面代码：
  
```tsx {1-2|3-4|11-12}
// 在声明 Button 组件的 props 时，声明以 `on` 为开头，小驼峰命名方式的事件名称
const Button = ({ onClick, children }) => (
  // 当用户点击 button 时调用 props.onClick 事件，❗️此 onClick 为 React 的合成事件
  <button onClick={onClick}>{children}</button>
);

function PlayButton({ movieName }) {
  const handlePlayClick = () => alert(`Playing ${movieName}!`);

  return (
    {/* 在 Button 组件外将事件处理函数 handlePlayClick 传入到 onClick 自定义事件 */}
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}
```

<!-- 
在声明组件之后，实际上还尚未达到我们的需求，还缺少我们与用户的交互。交互就是用户点击了页面上的加入购物车按钮，也可能是用户在搜索栏中输入一段文字。

实际上，这些交互场景都是以浏览器事件机制为依托，通过预设好的业务逻辑，最终达到用户的预期。

React 就为我们提供了一套事件机制，不过它与浏览器原生事件机制不同，但却仍然基于浏览器。

在 JSX 中的原生标签，比如 div、button、input 也称为原生组件，这些组件 React 实习了一套事件机制，也称为合成事件，这些事件有很多，比如点击事件、input 事件、focus 和 blur 事件以及拖拽等等；

在自定义组件中，声明事件和声明组件的属性没什么区别，都是在 props 中声明，具体声明方式请大家参照下面的代码：

首先，Button 是我们一个自定义组件，同时我们声明了一个 onClick 事件，这里需要注意的是，React 约定在进行事件声明时需要以 `on` 为开头并以小驼峰的方式命名。

（click）在 Button 组件内部，将声明自定义事件 onClick 传入到 button 原生组件的合成点击事件中，这里需要注意的，不要在大括号内执行自定义事件 onClick，只需要传递函数本身即可。

（click）在 Button 组件外部父组件内，将 handlePlayClick 方法传入到自定义事件 onClick 中即可。

到此，我们已经基本实现了简单的按钮事件交互。
-->

---
title: Synthetic Event
clicks: 2
---

# React 合成事件

React 基于**浏览器事件机制**实现的一套自己的事件系统。

<div flex="~" class="gap-x-2">

<div class="w-1/2">

<div v-click class="mt-2">

<div class="text-highlight-2 mb-2">❓ 为什么 React 要实现这么一套事件机制：</div>

- 抹平不同浏览器之间兼容性的差异；
- 更多的自定义事件，如 `onChange`、`onCopy`;
- 跨平台，比如 React Native；
- 更多的优化：事件委托；

</div>

<div v-click class="mt-4">

<div class="text-highlight-2 mb-2">❓ React 是如何实现合成事件的：</div>

- 事件池（建立映射）；
- 事件委托到 root（v16 委托到 document）；
- 事件冒泡；
- 从 target DOM 获取 target react node;
- 向上 travel 父组件，找到的事件回调存于队列；
- 根据事件类型，顺序执行队列中的回调；

</div>

</div>

<div v-click="2" class="flex-1 w-1/2">

<div class="mt-2 p-6 bg-gray-200 rounded">
    <img src="/public/images/lesson_2_synthetic_event.png" class="w-auto h-80" />
</div>

</div>

</div>

<!-- 
React 合成事件就是 React 基于浏览器事件机制实现的一套自己的事件系统。

React 的合成事件原理解释起来比较复杂，在这里简单的和大家介绍下：

首先一个问题：为什么 React 要实现这么一套事件机制？（click）

- 首先就是为了抹平不同浏览器的兼容性带来的差异，比如 IE 和其他浏览器在事件绑定和事件 event 对象的差异等等；
- 其次是为了可以提供更多 React 内置的自定义事件，比如 onChange 事件等；
- 第三点就是为了可以跨平台；
- 第四点是可以在 React 针对事件机制可以做更多的优化，比如事件委托，React 17 之前所有的事件都被委托到了 document，减少 DOM 事件处理逻辑，减少内存的开销。

React 是如何实现它自己的合成事件的呢？主要有这么以下五点（Click）

大家可以借助右侧的图来理解，首先我们就先以 React 17 版本为例，它和 16 版本的区别就是事件委托的目标不同，16 是 document，17 是 React 应用的根节点 Root。

首先看下黑色的框和黑色的线，根节点 root 和在 div 上绑定一个 onFocus 事件，两个 button 上绑定了 onClick 事件。
此时，React 会将 onFocus 和 onClick 事件放到 Events Bank（事件池）以组件 ID 为 key 建立映射关系。组件 ID 是唯一的。
然后橘黄色的线可以看出，所有的组件的事件都会被委托到 Root 根节点，也就是说对于 div 和 button 组件来说，它们本身不会处理事件逻辑。
到这里，准备阶段已经完成了。

当某一个时刻，用户点击了最下面的 button 按钮，想要触发 onClick 事件。此时事件会按照浏览器的事件机制向上冒泡到根节点然后执行事件委托，大家可以看下绿色的线。
当根节点的委托事件执行时，会再次找到被用户点击的那个 button 按钮的 DOM 并获取到与之对应的 React Node 节点。
从这个 React Node 节点开始向上遍历直到根节点，这条链路上的所有事件都会被放到事件队列中。
然后根据触发的事件类型 —— onClick 事件，执行对应的事件回调。
-->

---
title: Events in Vue3
---

# Events in Vue3

React 与 Vue3 的 events 对比，_以 input 标签的 change 事件为例_。

<br />

|            | React                             | Vue3                                    |
| ---------- | --------------------------------- | --------------------------------------- |
| 事件声明   | 在 Props 中声明，`{ onChange }`   | `const emits = defineEmits(['change'])` |
| 组件内调用 | `props.onChange(data)`            | `emits('change', data)`                 |
| 组件外赋值 | `<input onChange={handleChange}>` | `<input @change="handleChange">`        |
| 事件修饰符 | -                                 | `@click.stop` / `@click.prevent`...     |
| 按键修饰符 | -                                 | `@keyup.enter` / `@keyup.tab`...        |
| 鼠标修饰符 | -                                 | `@click.right` / `@click.middle`        |

<!-- 
我将 React 与 Vue3 的事件进行了大概的对比。
主要是六个方面：
事件声明，React 只需要在 props 声明即可，Vue3 需要定义 emits；
组件内调用，React 可以用 props.onChange 就行，或者是解构出来再执行，Vue3 需要调用 emits('change');
组件外赋值，React 和赋值 props 是一样，用大括号传递函数本身，Vue3 需要使用 v-on 或 @ 符号
事件、按键和鼠标修饰符，React 是不支持的，需要自己实现，Vue3 则给我们提供了很多方便的修饰符。
-->