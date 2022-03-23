export interface ID_expert {

    id: string

}

const state = () => ({
    id: ''
})

const getters = {
    getID: (state: ID_expert) => {
        console.log(state.id)
        return state.id
    }
}

const actions = {

}

const mutations = {
    setID(state: ID_expert, id: string) {
        // state.id = id
        // console.log('user state changed:', state.id)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}