<template>
<section>
<h2 class="main-title">Welcome to the Nuxt 4 starter</h2>
<h1>السلام عليكم ورحمه الله وبركاته</h1>
<p class="para">This is the app main page (pages/index.vue).</p>


<div class="card">
<p>Counter from composable: {{ count }}</p>
<button @click="increment">Increment</button>
</div>


<div class="api-card">
<h3>Server API example</h3>
<button @click="callApi">Call /api/hello</button>
<pre v-if="apiResult">{{ apiResult }}</pre>
</div>
</section>
</template>


<script setup>
import { ref } from 'vue'
// import useCounter from '../composables/useCounter'


const { count, increment } = useCounter()
const apiResult = ref('')


async function callApi() {
const res = await fetch('/api/hello')
apiResult.value = await res.json()
}
</script>


<style scoped>
.card { margin: 1rem 0 }
.api-card { margin-top: 1.5rem }
</style>