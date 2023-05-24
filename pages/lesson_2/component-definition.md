---
title: Component Definition
---

# Component Definition (1/3)

<span class="text-gradient-red">第一步：定义组件并导出</span>

```tsx {3|5|all}
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

<!-- 
最后，我们需要在组件内部返回 JSX

我们可以在直接在 return 中写类似于 HTML 的语法，然后如果是动态值，需要放到大括号里。

至此，我们的组件就创建完成了。
 -->

---
hideInToc: true
---

# Review `HeroItem.tsx`

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


<!-- 
OK，最后这是全部 HeroItem 的代码。

到这块为止，大家有什么问题吗？（waiting 2min）
 -->