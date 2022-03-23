import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import expert_id, { ID_expert } from './modules/expert_id'
import auth, { Auth } from './modules/auth'

const strict = process.env.NODE_ENV !== 'production'

export interface State {

  expert_id: ID_expert,
  auth: Auth

}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  modules: {

    expert_id,
    auth
  },
  strict
})

export function useStore() {
  return baseUseStore(key)
}