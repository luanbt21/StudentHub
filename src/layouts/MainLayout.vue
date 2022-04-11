<template>
  <q-layout view="hhh Lpr fff">
    <q-header reveal :reveal-offset="10000" elevated class="bg-white text-white">
      <q-toolbar>
        <q-btn v-show="leftDrawerOpen == false" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <Navbar />

        <q-btn v-show="rightDrawerOpen == false" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      style="width: 240px !important; margin-left: 60px; border: 1px solid #ece6e6"
      class="tw-bg-[#ece6e6]"
      q-ml-md
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <q-item to="/home" clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">All questions</span></q-item-label>
        </q-item-section>
      </q-item>

      <q-item to="/askQuestion" clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Ask Question</span></q-item-label>
        </q-item-section>
      </q-item>
      <q-item :to="`/questions/1`" clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Find a tutor</span></q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/FindQuestion" clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Find question</span></q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Request</span></q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/Users" clickable v-ripple class="tw-bg-white tw-text-center">
        <q-item-section>
          <q-item-label><span class="tw-text-lg">Users</span></q-item-label>
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-drawer class="q-pa-sm" show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <div v-show="store.state.auth.displayName">
        <q-card class="my-card">
          <q-card-section class="bg-grey-4 text-white row">
            <div class="text-h6 text-grey-10">Interested Tags</div>
            <q-btn class="q-ml-lg" rounded color="primary" size="sm">edit</q-btn>
          </q-card-section>

          <q-separator />

          <q-card-actions class="tw-flex" align="right">
            <div v-for="(tag, index) in stringOptions.slice(0, 7)">
              <div :id="index.toString()" class="">
                <q-btn @click="handleclick(index.toString())" flat>{{ tag }}</q-btn>
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-black">
      <AppFooter />
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
import Navbar from '@/components/Navbar.vue'
import { useStore } from '@/store/index'
import { getQuestion } from '@/api/Question'
import { Question as QuestionBase } from '@/models/Question'
const store = useStore()

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const handleclick = (id: string) => {
  document.getElementById(id)?.classList.add('tw-hidden')
}
const stringOptions = ref<String[]>([])
const questions = ref<QuestionBase[]>([])
onMounted(async () => {
  questions.value = await getQuestion()
  questions.value.map(question => {
    question.TagsOnQuestions.map(tag => {
      stringOptions.value.push(tag.Tag.name)
    })
  })
})
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
