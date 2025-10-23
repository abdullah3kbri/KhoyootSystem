<template>
<section>
<h2>User {{ id }}</h2>
<p>This page demonstrates a dynamic parameter.</p>
<NuxtLink to="/">Back home</NuxtLink>
</section>
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>