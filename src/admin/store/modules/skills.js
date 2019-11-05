export default {
    namespaced: true,
    mutations: {},
    getters: {},
    actions: {
        /*async setCategories(store) {
            try {
               const {data} = await this.$axios.get("/categories")
               store.commit("categories/SET_SKILLS", data, {root: true})
            } catch (error) {
                throw new Error(error.response.data.error || error.response.data.message)
            }
        },*/
        async addSkill(store, newSkill) {
            try {
                /*const skill = {
                    title: newSkill.title,
                    percent: newSkill.percent,
                    category: newSkill.categoryId
                }*/
                // const response = await this.$axios.get('/skills/195');
				// console.log(response);
                
                const {data} = await this.$axios.post("/skills", newSkill)
                store.commit("categories/ADD_SKILL", data, {root: true})
            } catch (error) {
                //throw new Error(error.error || error.message)
            }
        },
    },
}