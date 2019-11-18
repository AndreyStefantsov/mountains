import {errorHandler} from "../../helpers/erorrs";
const userId = 195

export default {
    namespaced: true,
    state: {
        projects: []
    },
    mutations: {
        SET_PROJECTS(state, projects) {
            state.projects = projects
        },
        ADD_PROJECT(state, newProject) {
            state.projects.unshift(newProject)
        },
        EDIT_PROJECT(state, editedProject) {
            state.projects = state.projects.map(project => {
                if (project.id === editedProject.id) {
                    Object.keys(editedProject).forEach(key => project[key] = editedProject[key])
                }
                return project
            })
        },
        REMOVE_PROJECT(state, removedProject) {
            state.projects = state.projects.filter(project => {
                if (project.id !== removedProject) {
                    return project
                }
            })
        }
    },
    getters: {},
    actions: {
        async setProjects(store) {
            try {
                //const {data: {user: {id}}} = await this.$axios.get('/user');                 
                const {data} = await this.$axios.get(`/works/${userId}`);
                store.commit("SET_PROJECTS", data)
            } catch (error) {
                errorHandler(error)
            }
        },
        async addProject(store, newProject) {
            const formData = new FormData()
            Object.keys(newProject).forEach(key => formData.append(`${key}`, newProject[key]))       
            try { 
                const {data} = await this.$axios.post("/works", formData);
                store.commit("ADD_PROJECT", data)
            } catch (error) {
                errorHandler(error)
            }
        },
        async editProject(store, editedProject) {         
            const formData = new FormData()
            Object.keys(editedProject).forEach(key => formData.append(`${key}`, editedProject[key]))       
            try { 
                const {data} = await this.$axios.post(`/works/${editedProject.id}`, formData);
                store.commit("EDIT_PROJECT", data.work)
            } catch (error) {
                errorHandler(error)
            }
        },
        async removeProject(store, projectId) {         
            try { 
                const data = await this.$axios.delete(`/works/${projectId}`);
                store.commit("REMOVE_PROJECT", projectId)
            } catch (error) {
                errorHandler(error)
            }
        },
    },
}