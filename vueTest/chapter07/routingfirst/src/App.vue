<template>
  <div id="app">
    <nav class="teal">
      <router-link to="/">Home</router-link> | 
      <router-link to="/admin">Admin</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  nav { text-align: right; padding-right: 20px;}
  nav { font-weight: bold; color: white;}
</style>