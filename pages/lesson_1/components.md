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

（click）renderHero 函数的调用方法和 Empty 一样，都是函数调用，当然我们也可以把 renderHero 当做组件来实例化它，但是需要做些修改；

接下来，我为大家讲下如何去创建一个组件。
 -->

---
hideInToc: true
---

# Component Definition (1/3)

<span class="text-gradient-red">第一步：定义组件并导出</span>

```tsx {none|3|5|all}
// HeroItem.tsx

const HeroItem = () => {}

export default HeroItem;
```

```tsx {none|7|6} {at:2}
import HeroItem from './HeroItem'

export default App() {
  return (
    <ul id="user-list">
      {/* 我们可以在需要用到 Hero 组件的地方使用标签写法来实例化 */} <== 这是注释 
      {heros.map(h => <HeroItem key={h.id} />)}
    </ul>
  );
}
```

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gray-600">第三步：组件内返回 JSX</span>

<!-- 
第一步，我们需要定义组件并且将它导出给别的组件使用；

（click）首先我们声明一个名字为 HeroItem 的函数，实际上，一个空函数也是一个组件；

（click）然后将 HeroItem 函数默认导出

（click）在需要用到 HeroItem 的组件，也就是 App 组件内部，用 JSX 标签写法实例化它。

（click）需要注意的是，在 JSX 中如果需要进行注释的话，需要对注释加上大括号
 -->

---
hideInToc: true
---

# Component Definition (2/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gradient-red">第二步：声明组件接受的属性 props 以及类型</span>

```tsx {all|4-10|2,13|12}
// HeroItem.tsx
import type { FunctionComponentFactory as FC } from 'react'

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {}
const HeroItem: FC<Props> = (props) => {}

export default HeroItem;
```

<span class="text-gray-600">第三步：组件内返回 JSX</span>

<!-- 
第二步，声明组件接受的属性 props 并且定义它的类型

首先要确定 HeroItem 这个组件需要什么参数，（回到 Review Component），从这段代码中我们可以看出来，需要一个 item 对象，里面有 id/name/skills 三个属性

（再次回到 Component Definition 2/3）既然知道了 props 的结构，（click）那我们可以把 Props 的类型声明出来

（click）然后我们使用 React 提供给我的泛型 FunctionComponentFactory 来对 HeroItem 声明类型

（click）将 props 只需要作为函数的参数声明即可，（click）同时支持参数解构的方式

接下来就是最后一步了
 -->

---
hideInToc: true
---

# Component Definition (3/3)

<span class="text-gray-600">第一步：定义组件并导出</span>

<span class="text-gray-600">第二步：确定组件接受的属性 props</span>

<span class="text-gradient-red">第三步：组件内返回 JSX</span>

```tsx {all|5-9}
// HeroItem.tsx

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}
```

<div v-click class="mt-[-335px]">

```tsx
// HeroItem.tsx
import * as React from 'react';
import type { FunctionComponentFactory as FC } from 'react';

type Props = {
  item: {
    id?: string;
    name: string;
    skills: string[]
  }
}

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.skills.join(', ')}</span>
    </li>
  )
}

export default HeroItem;
```

</div>

<!-- 
最后，我们需要在组件内部返回 JSX

我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。

至此，我们的组件就创建完成了，最后这是全部代码：（click）

OK，到这块为止，大家有什么问题吗？（waiting 2min）
 -->
