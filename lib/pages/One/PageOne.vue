<template>
    <div>
        <h1>
            Module One 
        </h1>
        <p>
            Module one's body
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
@import "@/";

</style>