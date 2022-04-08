<template>
  <div class="tw-min-h-screen tw-p-3">
    <div class="row tw-p-3 tw-mt-3">
      <div class="col-9">
        <p class="tw-antialiased tw-text-3xl">Find Question</p>
      </div>
    </div>

    <div class="tw-border-2 tw-rounded-xl tw-p-4">
      <div class="tw-font-bold tw-text-lg">Search</div>
      <q-input bg-color="white" v-model="text" label="what do you want to find?">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
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
            @update:model-value="showChannel()"
          />
        </div>
        <div class="tw-h-7 tw-pt-8">
          <q-btn @click="handleSearch()" size="md" class="tw-w-14" color="primary" label="Find question" />
        </div>
      </div>
    </div>
    <div id="questionSearch" class="tw-mt-9 tw-hidden">
      <QuestionItem class="" :questions="questionss" />
    </div>
    <div align="center" id="fail" class="tw-mt-9 tw-text-lg tw-italic tw-hidden">
      <span>not found</span>
    </div>
    <div align="center" id="typesomething" class="tw-mt-9 tw-text-lg tw-italic tw-hidden">
      <span>type something to search</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QSelect } from 'quasar'
import { onMounted, ref } from 'vue'
import { QuestionBase, searchQuestionByTags } from '@/api/Question'
import { getQuestion } from '@/api/Question'
import QuestionItem from '@/components/question/questionItem.vue'

const stringOptions = ref<String[]>([])

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

const questions = ref<QuestionBase[]>([])
const questionss = ref<QuestionBase[]>([])

// const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

const filterOptions = ref(stringOptions.value)

const text = ref('')

const tags = ref<String[]>([])

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

const showChannel = () => {
  console.log(tags.value)
}
const handleSearch = async () => {
  let tagArr = ''
  tags.value.forEach(tag => {
    tagArr = tagArr + tag + ','
  })

  if (text.value != '' && tagArr != '') {
    questionss.value = await searchQuestionByTags(`${text.value}`, `${tagArr}`)
    document.getElementById('questionSearch')?.classList.remove('tw-hidden')
  } else if (text.value == '' && tagArr != '') {
    questionss.value = await searchQuestionByTags(undefined, `${tagArr}`)
    document.getElementById('questionSearch')?.classList.remove('tw-hidden')
  } else if (text.value != '' && tagArr == '') {
    questionss.value = await searchQuestionByTags(`${text.value}`, undefined)
    document.getElementById('questionSearch')?.classList.remove('tw-hidden')
  } else {
    document.getElementById('typesomething')?.classList.remove('tw-hidden')
  }
}
</script>
