import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from './modules/skills'
import user from './modules/user'
import categories from './modules/categories'
import projects from './modules/projects'
import comments from './modules/comments'


export default new Vuex.Store({
    modules: {
        skills, user, categories, projects, comments
    }
})
