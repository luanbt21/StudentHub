import { auth } from '../../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { Commit } from 'vuex'
import { store } from '../index'
import axios from 'axios'
import * as firebase from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { stat } from 'fs'

const provider = new GoogleAuthProvider();
// const store = useStore()

export interface Auth {
    authIsReady: boolean

    status: boolean

    user: {}

    token: string

    userid: string

    image: string

    displayName: string

}


const state = () => ({
    status: false,
    authIsReady: false,
    token: '',
    user: {
        accessToken: ''
    },
    userid: '',
    image: '',
    displayName: ''
})

const getters = {
    getToken: (state: Auth) => {
        return state.token
    }
}

const actions = {
    async signup({ commit }: { commit: Commit }, { email, password }: { email: string, password: string }) {
        console.log('signup action')

        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (res) {
            commit('setUser', res.user)
        } else {
            throw new Error('could not complete signup')
        }
    },

    async login({ commit }: { commit: Commit }) {
        console.log('login action')

        const res = await signInWithPopup(auth, provider)
            .then((result) => {
                // const token = GoogleAuthProvider.credentialFromResult(result)?.idToken
                const user = result.user;

                return { user: user }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode)
                console.log(errorMessage)
                console.log(email)
                console.log(credential)
            });
        if (res) {
            const user = res.user
            const token = await res.user.getIdToken(true)
            const userid = user.uid
            let image = user.photoURL
            const displayName = user.displayName
            // console.log(user)
            // console.log(user.uid)
            commit('setUser', { user, token, userid, image, displayName })
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        } else {
            throw new Error('could not complete login')
        }
    },

    async logout({ commit }: { commit: Commit }) {
        console.log('logout action')
        await signOut(auth)
        commit('setUser1', null)
        commit('setAuthIsReady', false)
        commit('setTokenID', null)

    }
}

const mutations = {
    setUser(state: Auth, { user, token, userid, image, displayName }: { user: object, token: string, userid: string, image: string, displayName: string }) {
        state.user = user
        state.token = token
        state.userid = userid
        state.image = image
        state.displayName = displayName
        // console.log('user state changed:', state)
    },
    setUser1(state: Auth, user: object) {
        state.user = user
    },
    setAuthIsReady(state: Auth, { authIsReady, user, token, image, userid, displayName }: {
        authIsReady: boolean, user: Object, token: string, image: string, userid: string, displayName: string
    }) {
        state.authIsReady = authIsReady
        state.user = user
        state.token = token
        state.image = image
        state.userid = userid
        state.displayName = displayName
    },
    setTokenID(state: Auth, token: string) {
        state.token = token
    },
}

// wait until auth is ready
const unsub = onAuthStateChanged(auth, async (user) => {
    let authState = true
    let token = await user?.getIdToken(true)
    let image = user?.photoURL
    let userid = user?.uid
    let displayName = user?.displayName
    // console.log(user);

    store.commit('auth/setAuthIsReady', { authState, user, token, image, userid, displayName })
    // console.log(token);

    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

    unsub()
})

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}