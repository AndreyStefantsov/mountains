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
                errorHandler(error)
            }
        },
        async editSkill(store, editedSkill) {
            try { 
                const {data} = await this.$axios.post(`/skills/${editedSkill.id}`, editedSkill)
                store.commit("categories/EDIT_SKILL", data.skill, {root: true})
            } catch (error) {
                errorHandler(error)

            }
        },
        async removeSkill(store, removedSkill) {
            try { 
                await this.$axios.delete(`/skills/${removedSkill.id}`)
                store.commit("categories/REMOVE_SKILL", removedSkill, {root: true})
            } catch (error) {
                errorHandler(error)
            }
        }
    },
}