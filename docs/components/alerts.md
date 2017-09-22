# 提示框 alert

* 通过少量可用和灵活的警报消息为典型用户操作提供上下文反馈消息。

## 例子

警报可用于任何长度的文本，以及可选的关闭按钮。对于正确的样式，请使用四个必需的上下文类之一（例如，.alert-success）。对于内联解雇，请使用警报jQuery插件。

:::demo
```html
<div class="alert alert-success" role="alert">
  <strong>做得好！</strong> 您已成功阅读此重要警报消息。
</div>
<div class="alert alert-info" role="alert">
  <strong>小心！</strong> 这个警报需要你的注意，但这并不重要。
</div>
<div class="alert alert-warning" role="alert">
  <strong>警告！</strong> 更好的检查自己，你看起来不太好。
</div>
<div class="alert alert-danger" role="alert">
  <strong>失败！</strong> 更改几项，然后再次尝试提交。
</div>
```
:::



### Link color

使用.alert-link实用程序类快速提供任何警报中匹配的彩色链接。

:::demo
```html
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</div>
```
:::

### 附加内容

警报还可以包含其他HTML元素，如标题和段落。

:::demo
```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">做得好！</h4>
  <p>嗯，你成功地阅读了这个重要的警报信息。此示例文本将运行一段时间，以便您可以看到警报中的间距如何与此类内容配合使用。</p>
  <p class="mb-0">每当你需要，一定要使用保证金工具来保持好东西和整洁。</p>
</div>
```
:::


### 关联取消

使用警报JavaScript插件，可以内联关闭任何警报。就是这样：

- 确保你加载了警告插件，或编译的Bootstrap JavaScript。
- 添加一个关闭按钮和.alert-dismissible类，它增加了额外的填充在警报的右边，并定位`.close`按钮。 
- 在关闭按钮上，添加`data-dismiss="alert"` 触发JavaScript功能的属性。确保使用该`<button>` 元素在所有设备上正确的行为。
- 要在关闭警报时生成警报，请确保添加 `.fade` 和 `.show` 选择器。

您可以通过现场演示看到这一点：

:::demo
```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>输入警告！</strong> 您应该检查以下某些字段。
</div>
```
:::

## JavaScript行为

### 触发器

通过JavaScript解除警报：

```js
$(".alert").alert()
```

或者在警报中 `data` 按钮上的属性，如上所示：

```html
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

请注意，关闭警报会将其从DOM中删除。

### 方法

| 方法 | 描述 |
| --- | --- |
| `$().alert()` | 发出警报，侦听具有该 `data-dismiss="alert"` 属性的后代元素上的点击事件。（使用data-api的自动初始化时不需要）|
| `$().alert('close')` | 通过将其从DOM中删除来关闭警报。如果元素中存在 `.fade` 和 `.show` 选择器，则在删除之前警报将淡出。 |


```js
$(".alert").alert('close')
```

### 事件

Bootstrap的警报插件暴露了一些事件挂钩到警报功能。

| 事件 | 描述 |
| --- | --- |
| `close.bs.alert` | 当 <code>close</code> 调用实例方法时，此事件会立即触发。 |
| `closed.bs.alert` | 警报关闭后，会触发此事件（等待CSS转换完成）​​。 |

```js
$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})
```
