<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Home</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="/favorites">Favorites</b-nav-item>
      </b-navbar-nav>
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
