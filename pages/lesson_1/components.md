---
title: Components
clicks: 3
---

# Components

和 Vue 类似，React 也是以**组件**的形式构建页面。

<div class="flex gap-x-4">

<div class="w-1/2">

### Class Component

```tsx {all|10,15|all|0}
import { Component, createRef } from "react";

export default class AlertButton extends Component {
  inputRef = createRef();

  handleClick = () => this.inputRef.current.focus();

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>
          Focus the input
        </button>
      </>
    );
  }
}
```

</div>

<div class="w-1/2">

### Function Component

```tsx {all|8,13|0|all} {at: 0}
import * as React from "react";

export default function AlertButton() {
  const inputRef = React.useRef();
  const handleClick = inputRef.current.focus();

  return (
    <React.Fragment>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </React.Fragment>
  );
}
```

</div>

</div>

<!-- 
和 Vue 类似，React 也是以 组件 的形式来构建页面。比如下面代码中的 AlertButton、input 和 button 都是组件，（click）即使是空标签，对于 React 来说也是组件。

声明 React 组件主要有两种方式：
- （click）第一种是左边的 class component，类组件，它是通过声明一个类，这个类需要继承 React 的 Component 类，然后在类组件中需要声明 render 函数，用以渲染 JSX；
- （click）第二种就是右边的 function component，函数式组件，在之前的讲解中大家都见过这形式的组件，很单纯的函数，返回 JSX；

两种组件形式可以相互使用，既可以类组件中包含函数式组件，也可以函数式组件嵌套类组件；

实际上，在 React 16.8 之前，函数式组件是无状态的，也就是说在函数组件内部，我们无法使用状态，也无法控制它的渲染，一般这种组件也叫受控组件。

不过比较幸运的是，在 16.8 版本之后，React 推出了 Hooks，正是因为 hooks 促使了目前组件开发的最佳实践是函数式组件。
 -->

---
hideInToc: true
---

 # Review components

```tsx {all|3,19|4,18|9-14}
import * as React from 'react';

const Empty = () => 'No Heros.';
const Loading = () => 'Loading, fetching heros...' as unknown as JSX.Element;

export default function App() {
  const [heros, setHeros] = React.useState([]);

  const renderHero = (item) => (
    <li key={item.id}>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  );

  return (
    <ul id="user-list">
      {loading ? <Loading /> : heros.length ? 
        heros.map(renderHero) : Empty()}
    </ul>
  );
}

```

<!-- 
再次回到之前的用 React 写的“英雄列表”

之前提到过，React 对于函数式组件的使用是比较宽松的，（click）我们既把 Empty 当做函数去执行它，（click）也可以把 Loading 使用 JSX 实例化它。

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它。
 -->
