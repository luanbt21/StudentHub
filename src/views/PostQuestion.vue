<template>
  <div class="tw-min-h-screen tw-p-3">
    <div class="row tw-p-3 tw-mt-3">
      <div class="col-9">
        <p class="tw-antialiased tw-text-3xl">Ask Public Question</p>
      </div>
    </div>

    <div class="tw-border-2 tw-rounded-xl tw-p-4">
      <div class="tw-font-bold tw-text-lg">Title</div>
      <q-input rounded filled v-model="text" label="eg: How to compute GDP?" />

      <div class="tw-font-bold tw-mt-4 tw-text-lg">Body</div>
      <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
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
      </form>
      <!-- <q-btn
        :loading="sending"
        size="sm"
        color="primary"
        outline
        rounded
        class="tw-ml-2 tw-mt-2"
        label="sent"
        icon-right="comment"
        @click="uploadIt"
      /> -->

      <div class="tw-mt-3 flex">
        <div class="tw-font-bold tw-text-lg">Tag</div>
        <div class="q-pa-md">
          <q-select
            filled
            v-model="tags"
            use-input
            use-chips
            multiple
            input-debounce="0"
            @new-value="createValue"
            :options="filterOptions"
            @filter="filterFn"
            style="width: 250px"
          />
        </div>
      </div>
    </div>
    <div class="tw-h-7 tw-mt-4">
      <q-btn @click="handlePost()" size="md" class="tw-w-14" color="primary" label="Post question" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, h } from 'vue'
import { QEditor, QSelect, useQuasar } from 'quasar'
import { Question as QuestionBase } from '@/models/Question'
import { getQuestion, postQuestion } from '@/api/Question'
import { auth } from '@/firebase/firebaseConfig'
import router from '@/router'

const text = ref('')

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

const tags = ref<String[]>([])
const stringOptions = ref<String[]>([])
const filterOptions = ref(stringOptions.value)
const createValue = (
  val: string,
  done: (item?: any, mode?: 'add' | 'add-unique' | 'toggle' | undefined) => void
): void => {
  if (val.length > 0) {
    if (!stringOptions.value.includes(val)) {
      stringOptions.value.push(val)
    }
    done(val, 'toggle')
  }
}

const filterFn = (
  val: string,
  doneFn: (callbackFn: () => void, afterFn?: ((ref: QSelect) => void) | undefined) => void,
  abortFn: () => void
): void => {
  doneFn(() => {
    if (val === '') {
      filterOptions.value = stringOptions.value
    } else {
      const needle = val.toLowerCase()
      filterOptions.value = stringOptions.value.filter(v => v.toLowerCase().indexOf(needle) > -1)
    }
  })
}

const questions = ref<QuestionBase[]>([])
const questionss = ref<QuestionBase[]>([])
onMounted(async () => {
  questions.value = await getQuestion()
  questions.value.map(question => {
    question.TagsOnQuestions.map(tag => {
      stringOptions.value.push(tag.Tag.name)
    })
  })

  // console.log(typeof tags.value)

  // console.log(await searchQuestionByTags(undefined, 'python'))
})

const q = useQuasar()
const handlePost = async () => {
  if (!auth.currentUser) {
    q.notify({ color: 'negative', position: 'top', message: 'You need login first', icon: 'report_problem' })
    return
  }
  try {
    // sendingComment.value = true
    // const comments = await postQuestion(`${text.value}`,`${comment.value}`,[""])
    let tagArr: string[] = []
    tags.value.forEach(tag => {
      tagArr.push(`${tag}`)
    })
    console.log(tagArr)

    const question = await postQuestion(`${text.value}`, `${comment.value}`, tagArr)
    router.push(`/questions/${question.id}`)
  } catch (error) {
    q.notify('Failed to sent comment')
  }
}
</script>
