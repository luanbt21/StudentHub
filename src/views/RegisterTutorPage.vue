<template>
  <div class="tw-min-h-screen tw-p-3">
    <div class="row tw-p-3 tw-mt-3">
      <div class="col-9">
        <p class="tw-antialiased tw-text-3xl">Register Tutor Form</p>
      </div>
    </div>

    <div class="tw-border-2 tw-rounded-xl tw-p-4">
      <div class="q-pa-md q-gutter-sm tw-text-center">
        <q-img :src="url" spinner-color="white" style="height: 200px; max-width: 160px" />
        <br />
        <img id="output" />
        <input id="fileUpload" type="file" @change="UpLoadImg" hidden />
        <q-btn type="file" push color="teal" label="Change avatar" @click="chooseFiles()" />
      </div>
      <h5>Experiences</h5>
      <q-input aria-rowcount="5" outlined v-model="Experiences" :dense="dense" />
      <br />
      <h5>Education</h5>
      <q-input outlined v-model="Education" :dense="dense" />
      <!-- <TextEditor title="About you" btnLabel="Send your register form" /> -->
      <br />
      <h5>About you</h5>
      <q-editor
        ref="editorRef"
        @paste="onPaste"
        v-model="comment"
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
      <br />
      <h5>Linkedin</h5>
      <q-input aria-rowcount="5" outlined v-model="Linkedin" :dense="dense" />
      <q-btn color="primary" class="tw-ml-2 tw-mt-2" label="Send your register form" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TextEditor from '@/components/TextEditor.vue'
import { computed, onMounted, ref } from 'vue'
import { auth } from '@/firebase/firebaseConfig'
import { getDownloadURL, getStorage, ref as reff, uploadBytes } from 'firebase/storage'
import { QEditor } from 'quasar'

const dense = ref(false)
const Experiences = ref('')
const Education = ref('')
const Linkedin = ref('')

const url = ref(auth.currentUser?.photoURL?.toString())
let img1 = ref()
const chooseFiles = () => {
  document.getElementById('fileUpload')?.click()
}
async function UpLoadImg(event: any) {
  url.value = event.target.files[0]
  let reader = new FileReader()
  reader.readAsDataURL(event.target.files[0])

  reader.onload = e => {
    img1.value = e.target?.result
    computed(() => {
      img1.value
    })
  }
  const storage = getStorage()
  const storageRef = reff(storage, event.target.files[0].name)
  console.log(storageRef)

  await uploadBytes(storageRef, event.target.files[0])
  await getDownloadURL(reff(storage, event.target.files[0].name)).then(urll => {
    url.value = urll
  })
}

// text editor
withDefaults(defineProps<{ sending: boolean }>(), { sending: false })

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

onMounted(async () => {
  console.log(auth.currentUser?.getIdToken())
})
</script>
