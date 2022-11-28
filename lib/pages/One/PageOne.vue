<template>
    <div id="one-main-container">
        <h1>
            Module One 
        </h1>
        <p>
            Module one's body (should be blue)
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
            bodyString: 'string from data'
        }
    }
}
</script>

<style lang="scss">
p {
    color: blue;
}

#one-main-container {
    border: 5px solid orchid;
}
</style>