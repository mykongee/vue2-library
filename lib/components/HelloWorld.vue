<template>
  <div>
    <h1>Base page (should be red)</h1>
    <p>
      Props: {{msg}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
h1 {
  color: red;
}
</style>