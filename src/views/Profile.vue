<template>
  <div class="row tw-p-4">
    <div class="col-6 col-md-3">
      <q-avatar size="200px" rounded>
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </div>
    <div class="col-6 col-md-6 tw-mt-6">
      <span class="tw-uppercase tw-text-2xl tw-font-semibold">nguyen thuy giang</span>
      <div class="tw-mt-6">
        <div class="tw-flex">
          <p class="tw-text-[#9199A1] tw-w-[100px]">Join</p>
          <p class="">30/3/2022</p>
        </div>
        <div class="tw-flex">
          <p class="tw-text-[#9199A1] tw-w-[100px]">Accout name</p>
          <p class="">nguyenthuygiang@gmail.com</p>
        </div>
        <div class="tw-flex">
          <p class="tw-text-[#9199A1] tw-w-[100px]">Email/Phone</p>
          <p class="">nguyenthuygiang@gmail.com</p>
        </div>
      </div>
    </div>
    <div align="right" class="col-6 col-md-3">
      <q-btn class="" color="primary" icon="help_outline" label="Ask Question" />
    </div>
  </div>
  <!--  -->
  <q-btn class="tw-m-5" rounded color="primary" size="md" label="Activate" />
  <!--  -->
  <p class="tw-uppercase tw-ml-2 tw-text-xl tw-font-semibold">Question(4)</p>
  <div class="q-ma-md">
    <q-scroll-area style="height: 600px" id="scroll-area-with-virtual-scroll-1">
      <q-virtual-scroll scroll-target="#scroll-area-with-virtual-scroll-1 > .scroll" :items="heavyList" separator>
        <template v-slot="{ item, index }">
          <q-item :key="index" dense>
            <!--  -->
            <div class="row tw-border-2 tw-p-2">
              <div align="center" class="col col-md-2">
                <q-card align="center" dark bordered class="bg-white my-card text-light-green-6 tw-w-24">
                  <q-card-section>
                    <div class="text-h6">3</div>
                  </q-card-section>

                  <q-separator size="3px" color="green-3" dark inset />

                  <div class="text-subtitle2">Answers</div>
                </q-card>
              </div>
              <div class="col-6 col-md-10">
                <p class="tw-text-[#0074CC] tw-text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum temporibus fugit porro ullam
                  voluptas atque, cum add odio aspernatur ea qui, dolore quo assumenda?
                </p>
                <div class="row">
                  <div class="col-8">
                    <q-btn rounded color="light-blue-1" size="sm">
                      <span class="tw-text-sky-800">tag</span>
                    </q-btn>
                  </div>
                  <div class="col-4">
                    <span>asked at 1/8/2022, 10:18:01 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
          </q-item>
        </template>
      </q-virtual-scroll>
    </q-scroll-area>
  </div>
  <!-- answer -->
  <!--  -->
  <p class="tw-uppercase tw-ml-2 tw-text-xl tw-font-semibold">Answer(4)</p>
  <div class="q-ma-md">
    <q-scroll-area style="height: 600px" id="scroll-area-with-virtual-scroll-1">
      <q-virtual-scroll scroll-target="#scroll-area-with-virtual-scroll-1 > .scroll" :items="heavyList" separator>
        <template v-slot="{ item, index }">
          <q-item :key="index" dense>
            <!--  -->
            <div class="row tw-border-2 tw-p-2">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum temporibus fugit porro ullam
                  voluptas atque, cum add odio aspernatur ea qui, dolore quo assumenda
                </p>
                <div class="row">
                  <div class="col-8"></div>
                  <div class="col-4">
                    <span>answered at 1/8/2022, 10:18:01 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
          </q-item>
        </template>
      </q-virtual-scroll>
    </q-scroll-area>
  </div>
</template>

<script lang="ts" setup>
const heavyList = [
  {
    label: 'ahii'
  },
  {
    label: '3'
  },
  {
    label: '4'
  },
  {
    label: '4'
  },
  {
    label: '4'
  },
  {
    label: '4'
  },
  {
    label: '4'
  },
  {
    label: '4'
  },
  {
    label: '4'
  }
]
</script>

<style></style>
