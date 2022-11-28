<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld,
    }

  }
</script>

<style>
body {
  border: 5px solid rgb(116, 255, 179);
}
</style>
