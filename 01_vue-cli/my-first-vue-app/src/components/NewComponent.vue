<template>
<div>
    <h2>New Component1!</h2>
    <h2>New Component2!</h2>
    <h2>{{ message }}</h2>
</div>

</template>

<script>
export default {
    name: "NewComponent",
    props: {
        message: String,
    }
}
</script>

<style>

</style>