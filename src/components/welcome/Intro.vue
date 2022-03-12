<template>
  <div class="row tw-rounded-md">
    <div class="col-xs-12 col-md-6 tw-mx-auto" v-for="item in data" :key="item.content">
      <IntroCard v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroCard from '@/components/welcome/IntroCard.vue'
import intro1 from '@/assets/intro1.png'
import intro2 from '@/assets/intro2.png'

interface Prop {
  className: string
  img: string
  title: string
  content: string
  link: string
}

const data: Prop[] = [ 
  {
    className: 'tw-bg-[#C1DBD8]',
    img: intro1,
    title: 'Kết nối gia sư',
    content: 'Mất phương hướng muốn tìm người hướng dẫn',
    link: ''
  },
  {
    className: 'tw-bg-[#D7CFBB]',
    img: intro2,
    title: 'Q&As',
    content: 'Một cộng đồng rộng lớn giúp trao đổi kiến thức',
    link: ''
  }
]
</script>
