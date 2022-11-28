<template>
    <div id="three-main-container">
        <h1>
            Module Three 
        </h1>
        <p>
            Module three's body (no color)
        </p>
        <p>
            {{ bodyString }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bodyString: 'page three body string'
        }
    }
}
</script>

<style lang="scss">

#one-main-container {
    border: 5px solid rgb(26, 86, 250);
}
</style>