<script setup>
    import {useRoute,RouterView} from 'vue-router';
    import cars from '../data/Cars.json';

    const route =useRoute();
    // console.log(route.params);

    // it will find the data associated with that id
    const car = cars.find(car=> car.id===parseInt(route.params.id));
</script>

<template>

    <h1>Contact View</h1>
    <p>{{ car.contact.name }}</p>
    <p>{{ car.contact.number }}</p>
</template>