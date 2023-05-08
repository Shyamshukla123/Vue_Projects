<script setup>

import {RouterView} from "vue-router"
import Navbar from "./components/Navbar.vue";



</script>
<template>
    <Navbar/>
    
    <!-- <router-link to="/about">Go to About</router-link> -->
   
    <RouterView/>
</template>
