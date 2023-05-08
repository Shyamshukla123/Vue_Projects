<script setup>
import {RouterLink} from 'vue-router'
import cars from'../data/Cars.json';

</script>



<template lang="">

        <h1>Home view</h1>
        <div class="cars">
                <RouterLink :to="`cars/${car.id}`" v-for="car in cars" ::key="car.id">
                        {{car.name}}
                </RouterLink>
        </div>
        
</template>

<style scoped>

        .cars{
                display: flex;
                width: 300px;
        }
        .cars a{
                width:100%;
                text-decoration: none;
                margin: 15px;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.146);
                color: black;
        }


</style>