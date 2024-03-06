<template>
  <el-table :data="userData" style='width: 100%'>
    <el-table-column prop="groupId" label='groupId'> </el-table-column>
    <el-table-column prop="groupName" label='groupName'> </el-table-column>
    <el-table-column type="expand">
      <!-- 二层 -->
      <template #default="props">
        <div m="3">
          <!-- <h3>zhang yue</h3> -->
          <el-table :data='props.row.users'>
            <el-table-column lable='Name' prop='name'  />
            <el-table-column prop='email' lable='Email' />
            <el-table-column prop='role' lable='Role' />
            <el-table-column>
              <template #default="propsUser">
                <p>{{ chageFormat(propsUser.row.createdAt) }}</p>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import { format } from 'date-fns';
import { ElTAble, ElTableColumn } from 'element-plus'
export default {
  components: [ElTAble, ElTableColumn],
  data () {
    return {
      userData: [
        {
          groupId: 1,
          groupName: 'Admin Group',
          users: [
            {
              id: 1,
              name: 'John Doe',
              email: 'john.doe@example.com',
              role: 'admin',
              createdAt: '2023-01-01T00:00:00Z'
            }
            // 更多用户...
          ]
        },
        {
          groupId: 2,
          groupName: 'Editor Group',
          users: [
            // ...
          ]
        }
        // 更多用户组...
      ]

    }
  },
  methods: {
    chageFormat (dateString) {
      const date = new Date(dateString)
      return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日 ${date.getHours()}时`
    }
  }
}
</script>
