<template>
  <div>
    <el-table :data="userdata"  :default-sort="{ prop: 'date', order: 'descending' }">
      <el-table-column prop="username" label="username"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="date" label="date" sortable></el-table-column>
      <el-table-column prop="status" label="status"></el-table-column>
      <el-table-column label="按钮">
        <template #default="props">
          <el-button link type="primary" size="small" @click="editClick">编辑</el-button>
          <el-button link type="primary" size="small" @click="switchClick(props.row)">禁用/启用</el-button>
          <el-button link type="primary" size="small" @click="deleteClick(props.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getData, updateData, deleteData } from '@/api/askForData'
export default {
  data () {
    return {
      userdata: []
    }
  },
  mounted () {
    this.changeMessage()
  },
  methods: {
    changeMessage () {
      getData().then((res) => {
        this.userdata = res.map((item) => {
          const { _id, username, email, registrationDate, status } = item
          const date = new Date(registrationDate)
          return {
            _id,
            username,
            email,
            date: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
            status: status.description
          }
        })
      })
    },
    editClick () {
      // do edit
    },
    switchClick (user) {
      console.log(user)
      updateData(user)
    },
    deleteClick (id) {
      console.log(id)
      deleteData(id)
    }

  }
}
</script>
