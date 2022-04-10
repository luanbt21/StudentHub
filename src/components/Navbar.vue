<template>
  <router-link to="/welcome">
    <q-toolbar-title :shrink="true" class="text-grey-8">
      <q-avatar>
        <img :src="logo" />
      </q-avatar>
      <span class="text-weight-bold tw-hidden md:tw-inline"> Student Hub </span>
    </q-toolbar-title>
  </router-link>

  <q-space />

  <div style="flex-grow: 1">
    <q-input
      class="!tw-hidden md:!tw-block"
      dense
      outlined
      v-model="text"
      placeholder="Search..."
      bg-color="white"
      clearable
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>

  <q-space />

  <div class="q-gutter-sm">
    <q-btn v-if="!isLogin" to="/login" color="secondary" label="Log in" />
    <q-btn v-if="!isLogin" color="primary" label="Sign up" />

    <div v-if="isLogin" class="q-pa-xs">
      <q-avatar rounded>
        <img :src="store.state.auth.image" />
        <q-menu>
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-btn to="/profile" icon="manage_accounts">Profile</q-btn>
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img :src="store.state.auth.image" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">{{ store.state.auth.displayName }}</div>

              <q-btn @click="handleClick" color="primary" label="Logout" push size="sm" v-close-popup />
            </div>
          </div>
        </q-menu>
      </q-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/5920.jpg'
import { useStore } from '@/store/index'
import { computed, onMounted, onUpdated, ref } from 'vue'
import axios from 'axios'
import { __baseURL } from '@/constant'
const store = useStore()
const handleClick = () => {
  store.dispatch('auth/logout')
}
const isLogin = computed(() => store.state.auth.user)

onUpdated(async () => {
  if (isLogin.value) {
    const token = computed(() => store.state.auth.token)
    // console.log(token.value)
    const headers = {
      Authorization: `Bearer ${token.value}`
    }
    await axios.post(
      '/users/login',
      {
        uid: 'string',
        reputation: 0,
        description: ' My job is an engineer',
        joiningDate: ' 2022-03-11T00:00:00.000Z',
        displayName: 'hanguyenthu',
        photoURL: null,
        phoneNumber: null,
        email: 'hanguyen@gmail13211.com'
      },
      {
        headers
      }
    )
  }
})
const text = ref('')
const Profile = ref('')
const History = ref('')
</script>
