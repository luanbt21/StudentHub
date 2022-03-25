<template>
  <div class="row tw-p-3 tw-mt-3">
    <div class="col-9">
      <p class="tw-antialiased tw-text-3xl">Interested Question</p>
    </div>
    <div class="col-3 tw-p-1">
      <q-btn class="" color="primary" icon="help_outline" label="Ask Question" />
    </div>
  </div>
  <hr />
  <!--  frag -->
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum temporibus fugit porro ullam voluptas
        atque, cum add odio aspernatur ea qui, dolore quo assumenda?
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum temporibus fugit porro ullam voluptas
        atque, cum add odio aspernatur ea qui, dolore quo assumenda?
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
</template>

<script lang="ts" setup></script>

<style>
.q-card {
  border: 3px solid #67c23a;
  border-radius: 20px;
}
</style>
