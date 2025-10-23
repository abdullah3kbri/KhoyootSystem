<template>
<div>
<TheHeader />
<main class="page-container">
<slot />
</main>
<TheFooter />
</div>
</template>


<script setup lang="ts">
</script>


<style scoped>
.page-container {
max-width: 1000px;
margin: 2rem auto;
padding: 0 1rem;
}
</style>