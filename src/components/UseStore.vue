<template>
  <button @click="store.counter++">
    {{ store.counter }}
  </button>
</template>

<script lang="ts" setup>
import { useStore } from "../store";

const store = useStore();
</script>
