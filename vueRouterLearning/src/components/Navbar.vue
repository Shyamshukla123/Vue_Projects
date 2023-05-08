<script setup>
    import {RouterLink} from 'vue-router';
</script>



<template>
    <div>
        <!-- anchor tag also works here but it will refresh the page and rerender the page which is not good  -->
        <!-- so when we will be going to use the anchor tag, the use case is when we are linking some different webpage with our app -->
        <!-- <a href="/">Home</a>
        <a href="/about">About</a> -->

            <!-- "active-class is inbuilt functionality to add style to active link" -->
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <br>
        <RouterLink active-class="active" to="/about">About</RouterLink>

    </div>
</template>

<style scoped>
    .active{
        font-weight: 900;
        color: rgb(179, 130, 39);
        text-decoration: none;
    }
</style>