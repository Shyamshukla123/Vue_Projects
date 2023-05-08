<script setup>
    // => useRoute is use to extract information about current path that we are in
    // => "useRoute " is use for taking params value which is send through api(link);
    // To make use of that params value use ".params" to see or use
    import {useRoute,useRouter,RouterView} from 'vue-router';
    import cars from '../data/Cars.json';

    const route =useRoute();
    // console.log(route.params);
   
    // => The useRouter is used for adding path with push method And this can be done by run time 
    const router =useRouter();

    const carId =parseInt(route.params.id);
    // it will find the data associated with that id
    const car = cars.find(car=> car.id===carId);



</script>
<template>
    <div v-if="car">
        <h1>Cars View</h1>
        <p>{{ car.id }}</p>
        <p>{{ car.name }}</p>
        <p>{{ car.price }}</p>
        <!-- if we want that client should press button then only contact router should display the data
        then we need use "useRouter to add link on button instead of "RouterView -->
        <button @click="router.push(`/cars/${carId}/contact`)">Click For Contact Information</button>
       <RouterView/>
    </div>
    <div v-else>
      <h1>No Cars available for this </h1>
    </div>
</template>

