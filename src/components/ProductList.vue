<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>Price: {{ product.price }}</p>
        <p>AverageRate: {{ averageRate(product.reviews) }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products'],
  methods: {
    averageRate (res) {
      let sum = 0
      const count = res.length
      for (const one in res) {
        sum += res[one].rating
      }
      // console.log(sum)
      return sum / count
    }
  }
}
</script>
