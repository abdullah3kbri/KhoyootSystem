<template>
<footer class="site-footer">
<div class="inner">© <span>{{ year }}</span> My Nuxt4 App</div>
</footer>
</template>


<script setup lang="ts">
const year = new Date().getFullYear()
</script>


<style scoped>
.site-footer { text-align:center; padding:1rem 0; color:#666 }
</style>