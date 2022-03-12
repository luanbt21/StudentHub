<template>
  <div class="row q-mx-lg q-pa-lg tw-rounded-[44px] tw-bg-[#F6ECF6]">
    <div class="col-xs-12 col-md-6 col-lg-4 tw-mx-auto" v-for="item in data" :key="item.content">
      <AdsCard v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AdsCard from '@/components/welcome/AdsCard.vue'

import iconHat from '@/assets/iconHat.png'
import iconRocket from '@/assets/iconRocket.png'

interface Prop {
  icon: string
  title: string
  content: string
  link: string
}

const data: Prop[] = [
  {
    icon: iconHat,
    title: 'Kết nối gia sư',
    content: 'Bạn có gặp khó khăn trong các môn học?',
    link: ''
  },
  {
    icon: iconHat,
    title: 'Q&As',
    content: 'Hỏi đáp những vấn đề bạn chưa biết',
    link: ''
  },
  {
    icon: iconRocket,
    title: 'Khám phá',
    content: 'Tìm hiểu hơn về sứ mệnh của chúng tôi',
    link: ''
  }
]
</script>
