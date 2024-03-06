<template>
  <child-component :userData='userdata' @updateData="updateData"></child-component>
</template>

<script>
import { getTableData, dataUpdateApi } from '@/api/table'
import ChildComponent from '@/components/ChildComponent.vue'
export default {
  components: { ChildComponent },
  data () {
    return {
      userdata: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      getTableData().then((res) => {
        this.userdata = res.data
      })
    },
    updateData () {
      dataUpdateApi().then((res) => {
        if (res.status === 'success') {
          // 模拟数据发生了变化
          this.userdata.push(this.userdata[0])
        }
      })
    }
  }

}
</script>
