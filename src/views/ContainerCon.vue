<template>
    <div class="main">
      <div class="container">
      container
      <div class="content">
        content
      </div>
    </div>
    </div>
  <!-- </div> -->
</template>

<script>
// import router from '@/router'
export default {

}
</script>

<style>
  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* .box{height: 100vh;} */
  .container{
    display: flex;
    width: 80%;
    max-height: 80vh;
    background-color:lightgrey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .content{
    display: flex;
    justify-content: center;
    align-items: center;
      color: #aeffac;
      height: auto;
      transition: 1s;
      height: 500px;
    }
</style>
