<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">HOME</b-navbar-brand>
    </b-navbar>
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
    this.$store.dispatch('fetchColleges')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
