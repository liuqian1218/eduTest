import Vue from 'vue'
import Vuex from 'vuex'
import list from '../assets/questions'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        results:[],
        list,
        types:[],
        qsList:[],
    },
    mutations:{
        updateTypes(state,payload){
            state.types = payload ;
        },
        updateQsList(state,payload){
            state.qsList = payload;
        },
        updateRes(state,payload){
            state.results.push(payload);
        }
    },
    actions:{},
    getters:{},
})

export default store ;