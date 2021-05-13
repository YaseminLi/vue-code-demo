<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <TplDemo/>
    <ComputedDemo/>
    <WatchDemo/> -->
    <!-- <ConditionDemo/> -->
    <!-- <EventDemo/> -->

    <!-- <ComponentDemo/>˜ -->

    <AdvancedUse propname='xiaoming' age='18'/>

    <!-- <CartDemo/> -->
    <!-- <FormDemo /> -->
    <!-- <ListDemo
      v-for="(item,index) in arr"
      :key="index"
    />
    <ListDemo
      v-for="(item,index) in arr"
      :key="Math.random()"
    />
    <button @click="arr.push('hahha')"/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import TplDemo from './components/BaseUse/TplDemo'
// import ComputedDemo from './components/BaseUse/ComputedDemo'
// import WatchDemo from './components/BaseUse/WatchDemo'
// import FormDemo from './components/BaseUse/FormDemo'
// import ListDemo from './components/BaseUse/ListDemo'
// import ConditionDemo from './components/BaseUse/ConditionDemo'
// import EventDemo from './components/BaseUse/EventDemo'

// import ComponentDemo from './components/ComponentsDemo/index'

import AdvancedUse from './components/AdvancedUse/index'

// import CartDemo from './components/Cart/index'

export default {
  name: 'app',
  components: {
    // TplDemo,
    // ComputedDemo,
    // WatchDemo,
    // FormDemo,
    // ListDemo
    // HelloWorld
    // EventDemo
    // ComponentDemo
    AdvancedUse
    // CartDemo
  },
  data () {
    return {
      arr: ['item', 'kjdh']
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
