<template>
<header class="site-header">
<div class="inner">
<h1 class="logo"><NuxtLink to="/">My Nuxt4 App</NuxtLink></h1>
<nav>
<NuxtLink to="/">Home</NuxtLink>
<NuxtLink to="/about">About</NuxtLink>
<NuxtLink to="/users/1">User 1</NuxtLink>
</nav>
</div>
</header>
</template>


<script setup lang="ts">
</script>


<style scoped>
.site-header { background: #f5f5f5; padding: 0.75rem 0; }
.inner { display:flex; align-items:center; justify-content:space-between; max-width:1000px; margin:0 auto; padding: 0 1rem }
.logo { margin:0 }
nav a { margin-left:1rem }
</style>