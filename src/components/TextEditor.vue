<template>
  <div class="tw-mt-3">
    <h5 v-if="title">{{ title }}</h5>
    <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
      <q-editor
        ref="editorRef"
        @paste="onPaste"
        v-model="text"
        :dense="$q.screen.lt.md"
        :toolbar="[
          [
            {
              label: $q.lang.editor.align,
              icon: $q.iconSet.editor.align,
              fixedLabel: true,
              list: 'only-icons',
              options: ['left', 'center', 'right', 'justify']
            }
          ],
          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
          ['link'],
          [
            {
              label: $q.lang.editor.defaultFont,
              icon: $q.iconSet.editor.font,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'default_font',
                'arial',
                'arial_black',
                'comic_sans',
                'courier_new',
                'impact',
                'lucida_grande',
                'times_new_roman',
                'verdana'
              ]
            },
            'removeFormat'
          ]
        ]"
        :fonts="{
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana'
        }"
      />
    </form>
    <q-btn :loading="sending" color="primary" class="tw-ml-2 tw-mt-2" :label="btnLabel" @click="uploadIt" />
  </div>
</template>

<script setup lang="ts">
import { QEditor } from 'quasar'
import { ref } from 'vue'

interface Props {
  title?: string
  sending: boolean
  btnLabel: string
}

withDefaults(defineProps<Props>(), { sending: false })
const emit = defineEmits<{
  (e: 'send', value: string): void
}>()

const editorRef = ref<QEditor>()
const text = ref('')

const uploadIt = () => {
  emit('send', text.value)
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
