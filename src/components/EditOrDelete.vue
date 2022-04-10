<template>
  <div v-if="store.state.auth.userid == userId">
    <q-btn flat dense no-caps label="Edit" />
    <q-btn flat dense no-caps color="negative" label="Delete" @click="confirm" />
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useStore } from '@/store'

const store = useStore()

defineProps<{ userId: string }>()
const emit = defineEmits<{
  (e: 'edit', value: string): void
  (e: 'delete'): void
}>()
const $q = useQuasar()

const confirm = () => {
  $q.dialog({
    title: 'Confirm',
    message: 'Would you like to delete it?',
    ok: {
      push: true,
      color: 'negative'
    },
    cancel: {
      push: true,
      color: 'black'
    }
  }).onOk(() => {
    emit('delete')
  })
}
</script>
