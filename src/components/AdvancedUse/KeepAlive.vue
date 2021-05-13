<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <!-- 和动态组件搭配 -->
    <!-- <keep-alive>
      <component :is="'KeepAliveStage'+state" />
    </keep-alive> -->

    <!-- <keep-alive> -->
    <KeepAliveStageA v-show="state === 'A'" /> 
    <KeepAliveStageB v-show="state === 'B'" />
    <KeepAliveStageC v-show="state === 'C'" />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import KeepAliveStageA from './KeepAliveStateA'
import KeepAliveStageB from './KeepAliveStateB'
import KeepAliveStageC from './KeepAliveStateC'

export default {
  components: {
    KeepAliveStageA,
    KeepAliveStageB,
    KeepAliveStageC
  },
  data () {
    return {
      state: 'A'
    }
  },
  methods: {
    changeState (state) {
      this.state = state
    }
  },
}
</script>