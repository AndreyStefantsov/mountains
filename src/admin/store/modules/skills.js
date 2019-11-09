import {errorHandler} from "../../helpers/erorrs";

export default {
    namespaced: true,
    mutations: {},
    getters: {},
    actions: {
        async addSkill(store, newSkill) {
            try { 
                const {data} = await this.$axios.post("/skills", newSkill)
                store.commit("categories/ADD_SKILL", data, {root: true})
            } catch (error) {
                //throw new Error(error.error || error.message)
            }
        },
        async editSkill(store, editedSkill) {
            try { 
                const {data} = await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill)
                store.commit("categories/EDIT_SKILL", data.skill, {root: true})
            } catch (error) {
                errorHandler(error)
                //console.log(error.response.data.message)
                //console.log(error.response.data.errors.percent[0])
                //throw new Error(error.response.data.message || error.response.data.error)
            }
        },
        async removeSkill(store, removedSkill) {
            try { 
                await this.$axios.delete(`/skills/${removedSkill.id}`)
                store.commit("categories/REMOVE_SKILL", removedSkill, {root: true})
            } catch (error) {
                //throw new Error(error.error || error.message)
            }
        }
    },
}