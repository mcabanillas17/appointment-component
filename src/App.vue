<template>
  <div id="app">
    <AppointmentComponent />
  </div>
</template>

<script>
import AppointmentComponent from '@/components/AppointmentComponent'

export default {
  name: 'App',
  components: {
    AppointmentComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    background: rgb(212, 209, 209);
}
</style>
