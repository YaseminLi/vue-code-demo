<template>
  <!-- 例如：vue 颜色选择 -->
  <!-- <input type="text"
        :value="text1"
        @input="$emit('change1', $event.target.value)"
    > -->
  <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
  <!-- <input :checked="checked" @change="$emit('change1',$event.target.checked)" type="checkbox"/> -->

  <!-- <input
    :checked="checked"
    @change="$emit('change1',$event.target.checked)"
    type="radio"
  /> -->
  <select
    :value="selected"
    @change="$emit('select',$event.target.value)"
  >
    <option
      disabled
      value=""
    >请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

</template>

<script>
export default {
  // model: {
  //     prop: 'text1', // 对应 props text1
  //     event: 'change1'
  // },
  // props: {
  //     text1: String,
  //     default() {
  //         return ''
  //     }
  // }
  //   model: {
  //     prop: 'checked', // 对应 props text1
  //     event: 'change1'
  //   },
  //   props: {
  //     checked: Boolean,
  //     default () {
  //       return false
  //     }
  //   },
  model: {
    prop: 'selected', // 对应 props text1
    event: 'select'
  },
  props: {
    selected: String,
    default () {
      return ''
    }
  },
}
</script>




