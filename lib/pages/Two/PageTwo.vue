<template>
    <div id="two-main-container">
        <h1>
            Module Two 
        </h1>
        <p>
            Module two's body (should be green)
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
            bodyString: 'page two body string'
        }
    }
}
</script>

<style lang="scss">
p {
    color: green;
}

#one-main-container {
    border: 5px solid rgb(94, 255, 174);
}
</style>