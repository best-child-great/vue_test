<template>
  <productList
    :products="data"
  ></productList>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
export default {
  components: { ProductList },
  data () {
    return {
      data: [
        {
          id: 1,
          name: 'Product 1',
          description: 'Description for Product 1',
          price: 99.99,
          category: {
            id: 1,
            name: 'Electronics'
          },
          images: ['image1.jpg', 'image2.jpg'],
          reviews: [
            {
              id: 1,
              rating: 4,
              comment: 'Great product!',
              author: 'John Doe'
            }
            // 更多评论...
          ]
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'Description for Product 1',
          price: 88.99,
          category: {
            id: 1,
            name: 'Electronics'
          },
          images: ['image1.jpg', 'image2.jpg'],
          reviews: [
            {
              id: 1,
              rating: 4,
              comment: 'Great product!',
              author: 'John Doe'
            },
            {
              id: 2,
              rating: 3,
              comment: 'Great product!',
              author: 'John Doe'
            }
            // 更多评论...
          ]
        }
      ]
    }
  }
}
</script>

<style></style>
