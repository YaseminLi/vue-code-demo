当需要一个新的data,它和组件中已有的data有一定关系。

如fullName=firstName+lastName

有以下几种方式：
1. js表达式
```html
姓名：<span>{{firstlName}}{{lastlName}}</span>
```
缺点：在模版中不便于阅读

2. computed计算属性
```html
<div id='app'>
	姓：<input v-model='firstName'/>
	名：<input v-model='lastName'/>
	姓名：<span>{{fullName}}</span>
</div>
<script>
	new Vue({
		el: '#app',
		data: {
			firstName:'',
			lastName:''
		},
		computed:{
			fullName(){
				return this.firstName+' '+this.lastName
			}
		}
		})
</script>
```
特点：
- 计算属性是基于响应式依赖进行缓存，依赖发生改变时才会重新计算，否则即使多次访问计算属性也是取缓存的值，不用再次计算
- computed高级应用之：get、set，计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter 
```js
computed: {
  fullName: {
    // getter,根据其它值计算出自己的值
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter，根据自己的值来设置其它值
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```
现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。

3. 方法
```js
姓名：<span>fullName()</span>
```
缺点：每当触发重新渲染时，调用方法将总会再次执行函数，不会缓存

4. 侦听器

需要在数据变化时执行异步或开销较大的操作时，如限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态


总结：
1. 如果一个数据依赖于其他数据，那么把这个数据设计为computed的
2. 如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化：watch属性强调自身值得改变前后的动作，所以才有回调xxx(newVal,oldVal)
