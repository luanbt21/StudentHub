<template>
  <q-layout view="hhh Lpr fff">
    <q-header elevated class="bg-white text-white">
      <q-toolbar>
        <Navbar />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md tw-bg-white">
        <div class="row">
          <div class="col-8">
            <div class="q-pa-md">
              <q-parallax :height="500" :speed="0.5">
                <template v-slot:media>
                  <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
                </template>

                <h1 class="text-white">Docks</h1>
              </q-parallax>
            </div>
          </div>
          <div class="col-4">
            <div class="col-4 tw-bg-white">
              <h1 class="tw-text-center tw-text-6xl tw-font-semibold tw-text-sky-600 tw-mt-[60px]">Login</h1>
              <div class="q-pa-md" style="max-width: 500px">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                  <q-input
                    filled
                    v-model="name"
                    label="Email *"
                    hint="ntgiang@gmail.com"
                    lazy-rules
                    :rules="[val => (val && val.length > 0) || 'Please type something']"
                  />

                  <q-input
                    filled
                    type="password"
                    v-model="age"
                    label="Password *"
                    lazy-rules
                    :rules="[val => (val && val.length > 0) || 'Please type something']"
                  />

                  <q-toggle v-model="accept" label="I accept the license and terms" />

                  <div>
                    <q-btn @submit.prevent="handleSubmit" label="Submit" type="submit" color="primary" />
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                  </div>
                </q-form>
                <div class="tw-text-center tw-mt-3">
                  <q-btn @click="handleSubmit" type="submit" color="red" icon="mail" label="Sign in with Google" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { ref } from 'vue'

import { useStore } from '@/store/index'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const error = ref('')

const handleSubmit = async () => {
  try {
    await store.dispatch('auth/login')
    router.push('/')
  } catch (err) {
    error.value = 'oop! có lỗi xảy ra'
  }
}

const name = ref('')
const age = ref('')
const accept = ref(false)

const onSubmit = () => {}
const onReset = () => {}
</script>
