<template>
  <div id="app">
    <nav class="teal">
      <router-link to="/">Home</router-link> | 
      <router-link to="/admin">Admin</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
  nav { text-align: right; padding-right: 20px;}
  nav { font-weight: bold; color: white;}
</style>