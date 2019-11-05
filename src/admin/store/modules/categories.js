export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        ADD_CATEGORY(state, newCategory) {
            state.categories.push(newCategory)
        },
        EDIT_CATEGORY(state, category) {
            state.categories = state.categories.map(cat => {
                if (cat.id === category.id) {
                    cat.category = category.category;
                }
                return cat
            })
        },
        REMOVE_CATEGORY(state, category) {
            state.categories = state.categories.filter(cat => {
                if (cat.id !== category.id) {
                    return cat
                }
            })
        },
        SET_SKILLS(state, skills) {
        },
        ADD_SKILL(state, newSkill) {       
            state.categories = state.categories.map(cat => {
                if (cat.id === newSkill.category) {
                    cat.skills.push(newSkill)
                    console.log(cat.skills)

                }
                return cat
            })
        }
    },
    actions: {
        async addNewCategory(store, title) {
            try {
                const {data} = await this.$axios.post("/categories", {title})
                store.commit("ADD_CATEGORY", data)
            } catch (error) {
                throw new Error(error.data.error || error.data.message)
            }
        },
        async setCategories(store) {
            try {
               const {data} = await this.$axios.get("/categories")
               store.commit("SET_CATEGORIES", data)
            } catch (error) {
                throw new Error(error.data.error || error.data.message)
            }
        },
        async editCategory(store, category) {
            try {
               const {data} = await this.$axios.post(`/categories/${category.id}`, {title: category.category})
               store.commit("EDIT_CATEGORY", data.category)
            } catch (error) {
                throw new Error(error.data.error || error.data.message)
            }
        },
        async removeCategory(store, category) {
            try {
               await this.$axios.delete(`/categories/${category.id}`)
               store.commit("REMOVE_CATEGORY", category)
            } catch (error) {
                throw new Error(error.data.error || error.data.message)
            }
        },
    }

}