---
# aaa
<h1 class="bd-title" id="content">按钮</h1>

---

可作为按钮使用的标签或元素

为 `a` ,`button` 或 `input` 元素添加按钮类（button class）即可使用 Bootstrap 提供的样式。


:::demo
```html
<p>普通</p>
<input type="checkbox" id="checkbox-8-2" class="checkbox-switch-input" checked="">
<label for="checkbox-8-2" class="checkbox-switch-indicator"></label>
<input type="checkbox" id="checkbox-8-4" class="checkbox-switch-input switch-big">
<label for="checkbox-8-4" class="checkbox-switch-indicator"></label>

<p>过渡</p>
<input type="checkbox" id="checkbox-8-1" class="checkbox-switch-input ease-in">
<label for="checkbox-8-1" class="checkbox-switch-indicator"></label>
<input type="checkbox" id="checkbox-8-3" class="checkbox-switch-input switch-big ease-in">
<label for="checkbox-8-3" class="checkbox-switch-indicator"></label>
```
:::

## 内容

* [例子](#aaa)


## 预定义样式

使用下面列出的类可以快速创建一个带有预定义样式的按钮。

:::demo
```html
<!-- Standard button -->
<button type="button" class="btn btn-default">（默认样式）Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">（首选项）Primary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">（成功）Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">（一般信息）Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">（警告）Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">（危险）Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">（链接）Link</button>
```
:::



## 按钮标签

`.btn`类被设计为与`<button>`元素一起使用。但是，您也可以在`<a>`或`<input>`元素上使用这些类（尽管有些浏览器可能会使用稍微不同的渲染）。

当在用于触发页内功能（例如折叠内容）的`<a>`元素上使用按钮类时，而不是链接到当前页面中的新页面或部分，这些链接应该被赋予"role =" 按钮"适当地传达他们的目的，以帮助屏幕阅读器等技术。

:::demo
```html

<button class="btn btn-primary" type ="submit">按钮</button>
<input class="btn btn-primary" type ="button" value ="Input">
<input class="btn btn-primary" type ="submit" value ="Submit">
<input class="btn btn-primary" type ="reset" value ="Reset">
```
:::

## 大纲按钮

需要一个按钮，而不是他们带来的巨大的背景颜色？用`.btn-outline- *`替换默认修饰符类，以删除任何按钮上的所有背景图像和颜色。

:::demo
```html
<button type ="button" class ="btn btn-outline-primary" > Primary </ button>
<button type ="button" class ="btn btn-outline-secondary" > Secondary </ button>
<button type ="button" class ="btn btn-outline-success" >成功</ button>
<button type ="button" class ="btn btn-outline-info" >信息</ button>
<button type ="button" class ="btn btn-outline-warning" >警告</ button>
<button type ="button" class ="btn btn-outline-danger" >危险</ button>
```
:::


## 尺码

花式更大或更小的按钮？添加`.btn-lg`或`.btn-sm'以获得更多的大小。

:::demo
```html
<button type ="button" class ="btn btn-primary btn-lg" >大按钮</ button>
<button type ="button" class ="btn btn-secondary btn-lg" >大按钮</ button>
```
:::

:::demo
```html
<button type ="button" class ="btn btn-primary btn-sm" >小按钮</ button>
<button type ="button" class ="btn btn-secondary btn-sm" >小按钮</ button>
```
:::

通过添加`.btn-block'创建块级别按钮（跨越父级的全宽）。

:::demo
```html
<button type ="button" class ="btn btn-primary btn-lg btn-block" >块级别按钮</ button>
<button type ="button" class ="btn btn-secondary btn-lg btn-block" >块级别按钮</ button>
```
:::

## 活动状态

激活时，按钮将出现按压（背景较暗，边框较暗，插入阴影）。
**没有必要在`<button>`添加一个类，因为它们使用伪类**。
但是，如果需要以编程方式复制状态，则仍然可以使用 ".active" （并包括<code> aria-pressed ="true" </code>属性）强制使用相同的活动外观。

:::demo
```html
<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">主要链接</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">链接</a>
```
:::

## 禁用状态

通过将`disabled`布尔属性添加到任何`<button>`元素，使按钮看起来处于非活动状态。

:::demo
```html
<button type ="button" class ="btn btn-lg btn-primary" disabled>主按钮</ button>
<button type ="button" class ="btn btn-secondary btn-lg" disabled>按钮</ button>
```
:::

使用"<a>" 元素的禁用按钮行为有所不同：

- `<a>`不支持`disabled`属性，所以你必须添加`.disabled`类，使它在视觉上看起来被禁用。
- 包括一些未来友好的样式，以禁用锚点按钮上的所有"指针事件" 。在支持该属性的浏览器中，您根本看不到禁用的光标。
- 禁用按钮应包含`"aria-disabled =" true"`属性来指示辅助技术的元素的状态。

:::demo
```html
<a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">主要链接</a>
<a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">链接</a>
```
:::

#### 链接功能警告

`.disabled`类使用"pointer-events：none" 来尝试禁用"<a>" 的链接功能，但该CSS属性尚未标准化。此外，即使在支持"指针事件：无" 的浏览器中，键盘导航仍然不受影响，这意味着瞄准的键盘用户和辅助技术的用户仍然可以激活这些链接。为了安全起见，在这些链接上添加一个`tabindex =" - 1" `属性（以防止它们接受键盘焦点），并使用自定义JavaScript来禁用它们的功能。

## 按钮插件

用更多的按钮。控制按钮指定或创建更多组件（如工具栏）的按钮组。

### 切换状态

添加`data-toggle ='按钮"`来切换按钮的" 活动"状态。
如果您预先切换按钮，则必须手动将`".active"`类**和**`"aria-pressed =" true"`添加到`<button>`中。


### 方法

| 方法 | 说明 |
| ---  | --- |
| `$().button('toggle')` |切换推送状态。 给按钮激活它的外观。|
