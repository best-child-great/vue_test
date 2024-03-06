<template>
  <div class="card">
    <div v-for="obj in objs" :key="obj.groupId">
      <div>{{ obj.name }}</div>
      <div>{{ obj.email }}</div>
      <div>{{ obj.role }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['objs']
}
</script>
