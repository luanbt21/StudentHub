<template>
  <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
    <q-editor
      ref="editorRef"
      @paste="onPaste"
      v-model="comment"
      :definitions="{
        upload: {
          tip: 'Upload to cloud',
          icon: 'cloud_upload',
          label: 'Upload',
          handler: uploadIt
        }
      }"
      :toolbar="[['bold', 'italic', 'strike', 'underline', 'link'], ['upload']]"
    />
  </form>
  <div></div>
</template>

<script setup lang="ts">
import { QEditor } from 'quasar'
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'comment', value: string): void
}>()

const editorRef = ref<QEditor>()
const comment = ref('')

const uploadIt = () => {
  emit('comment', comment.value)
}

const onPaste = (evt: any) => {
  let text, onPasteStripFormattingIEPaste
  evt.preventDefault()
  evt.stopPropagation()
  if (!editorRef.value) {
    return
  }
  if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
    text = evt.originalEvent.clipboardData.getData('text/plain')
    editorRef.value.runCmd('insertText', text)
  } else if (evt.clipboardData && evt.clipboardData.getData) {
    text = evt.clipboardData.getData('text/plain')
    editorRef.value.runCmd('insertText', text)
    // @ts-expect-error
  } else if (window.clipboardData && window.clipboardData.getData) {
    if (!onPasteStripFormattingIEPaste) {
      onPasteStripFormattingIEPaste = true
      editorRef.value.runCmd('ms-pasteTextOnly', text)
    }
    onPasteStripFormattingIEPaste = false
  }
}
</script>
