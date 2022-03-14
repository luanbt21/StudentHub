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
        arrows
        height="auto"
        class="bg-brown-5 shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column wrap flex-center">
          <h5>Top Tutor</h5>
          <div class="row flex-center">
            <TutorCard v-for="i in 4" :key="'k' + i" class="col-sm-10 col-md-5" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="style" class="column wrap flex-center">
          <h5>Top Tutor</h5>
          <div class="row flex-center">
            <TutorCard v-for="i in 4" :key="'none' + i" class="col-sm-10 col-md-5" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TutorCard from '../TutorCard.vue'

const slide = ref('style')
const lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
</script>
