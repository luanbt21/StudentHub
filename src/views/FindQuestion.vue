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
            v-model="model"
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
          <q-btn size="md" class="tw-w-14" color="primary" label="Find question" />
        </div>
      </div>
    </div>

    <div class="row tw-border-2 tw-p-2 tw-mt-8 tw-rounded">
      <div align="center" class="col col-md-2">
        <q-card align="center" dark bordered class="bg-white my-card text-light-green-6 tw-w-24">
          <q-card-section>
            <div class="text-h6">200</div>
          </q-card-section>

          <q-separator size="3px" color="green-3" dark inset />

          <div class="text-subtitle2">vote</div>
        </q-card>
      </div>
      <div class="col-6 col-md-10">
        <p class="tw-text-[#0074CC] tw-text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum temporibus fugit porro ullam voluptas
          atque, cum add odio aspernatur ea qui, dolore quo assumenda
        </p>
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
            <span>answered at 1/8/2022, 10:18:01 PM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QSelect } from 'quasar'
import { onUpdated, ref } from 'vue'

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

const filterOptions = ref(stringOptions)

const text = ref('')

const model = ref(null)

const createValue = (
  val: string,
  done: (item?: any, mode?: 'add' | 'add-unique' | 'toggle' | undefined) => void
): void => {
  if (val.length > 0) {
    if (!stringOptions.includes(val)) {
      stringOptions.push(val)
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
      filterOptions.value = stringOptions
    } else {
      const needle = val.toLowerCase()
      filterOptions.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
    }
  })
}

const showChannel = () => {
  console.log(model.value)
}
</script>
