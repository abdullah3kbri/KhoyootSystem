import { ref } from 'vue'


const counter = ref(0)
export default function useCounter() {
function increment() {
counter.value++
}
return { count: counter, increment }
}