<template>
  <q-layout view="hhh lpR fff">
    <q-header elevated class="bg-grey-5 q-px-lg transparent">
      <q-toolbar>
        <Navbar />
      </q-toolbar>
    </q-header>

    <div class="tw-relative">
      <q-img :src="homeImage" />
      <div class="tw-max-w-5xl tw-text-[#4f3535] tw-absolute tw-top-1/4 tw-left-[10%]">
        <h1 class="tw-mb-2 tw-text-2xl tw-font-bold md:tw-text-6xl lg:tw-text-8xl">
          Find the best answer to your question
        </h1>
        <q-btn rounded outline size="lg" color="secondary" label="Get Start" />
      </div>
    </div>

    <body class="-tw-translate-y-10 md:-tw-translate-y-24">
      <Ads />
      <Intro />
      <CarouselSlide />
    </body>
  </q-layout>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import homeImage from '@/assets/homeImage.jpg'
import Ads from '../components/welcome/Ads.vue'
import Intro from '@/components/welcome/Intro.vue'
import CarouselSlide from '@/components/welcome/CarouselSlide.vue'
</script>
