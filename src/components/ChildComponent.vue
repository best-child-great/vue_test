<template>
  <card-component :objs="userData"> </card-component>
  <button type="update" @click='clickUpdate'>更新</button>
</template>

<script>
import CardComponent from './CardComponent.vue'

export default {
  components: {
    CardComponent
  },
  emits: ['updateData'],
  props: ['userData'],
  methods: {
    clickUpdate () {
      this.$emit('updateData')
    }
  }
}
</script>
