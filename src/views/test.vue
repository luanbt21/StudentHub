<template>
  <h1>{{ state.count }}</h1>
  <button>sfa</button>
  <button class="tw-bg-slate-400" @click="double">dasda</button>
</template>

<script setup lang="ts">
import { reactive, ref, unref } from 'vue'

const state = reactive({ count: 0 })

let a = ref(0)

const double = () => {
  a.value = unref(a) + 1
  console.log(a.value + ' ' + unref(a))
}



</script>
