import Vue from "vue";
import Vuex from "vuex"
import Tab from "@/store/tab";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Tab
    }
})