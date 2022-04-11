<template>
  <div v-if="store.state.auth.userid == userId">
    <q-btn flat dense no-caps @click="showEditor = !showEditor" label="Edit" />
    <q-btn flat dense no-caps color="negative" label="Delete" @click="confirm" />
    <TextEditor v-if="showEditor" :sending="sending" btnLabel="Save" @send="send" />
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useStore } from '@/store'
import TextEditor from './TextEditor.vue'
import { ref } from 'vue'

const props = defineProps<{ userId: string; put: (value: string) => Promise<any> }>()
const emit = defineEmits<{
  (e: 'edited', data: any): void
  (e: 'delete'): void
}>()
const $q = useQuasar()
const store = useStore()

const showEditor = ref(false)
const sending = ref(false)

const send = async (value: string) => {
  try {
    sending.value = true
    const data = await props.put(value)
    emit('edited', data)
    setTimeout(() => {
      showEditor.value = false
    })
  } catch (error) {
    $q.notify('Failed to put')
  } finally {
    sending.value = false
  }
}

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
