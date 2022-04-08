<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        keep-alive
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="auto"
        class="bg-brown-5 shadow-1 rounded-borders"
      >
        <q-carousel-slide name="first4" class="column wrap flex-center">
          <h5>Top Tutor</h5>
          <div class="row flex-center tw-w-full">
            <TutorCard v-for="user in first4" :key="user.uid" :user="user" class="col-sm-10 col-md-5" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="next4" class="column wrap flex-center">
          <h5>Top Tutor</h5>
          <div class="row flex-center tw-w-full">
            <TutorCard v-for="user in next4" :key="user.uid" :user="user" class="col-sm-10 col-md-5" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import TutorCard from '../TutorCard.vue'
import { User } from '@/models/User'
import { getUsers } from '@/api/User'

const slide = ref('first4')

const users = ref<User[]>()

const first4 = computed(() => {
  return users.value?.slice(0, 4)
})

const next4 = computed(() => {
  return users.value?.slice(4, 8)
})

onMounted(async () => {
  users.value = await getUsers()
})
</script>
