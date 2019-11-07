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
            newCategory.skills = []            
            state.categories.unshift(newCategory)       
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
        ADD_SKILL(state, newSkill) {       
            state.categories = state.categories.map(cat => {
                if (cat.id === newSkill.category) {
                    cat.skills.push(newSkill)
                }
                return cat
            })
        },
        EDIT_SKILL(state, editedSkill) {            
            state.categories = state.categories.map(cat => {
                if (cat.id === editedSkill.category) {
                    if (cat.skills.id === editedSkill.id) {
                        cat.skills.title = editedSkill.skill.title;
                        cat.skills.percent = editedSkill.skill.percent
                    }
                }             
                return cat
            })
        },
        REMOVE_SKILL(state, removedSkill) {
            state.categories = state.categories.map(cat => {
                if (cat.id === removedSkill.category) {
                    cat.skills = cat.skills.filter(skill => {
                        if (skill.id !== removedSkill.id) {
                            return skill
                        }
                    })
                }             
                return cat
            })
        }
    },
    actions: {
        async addNewCategory(store, title) {
            try {
                const {data} = await this.$axios.post("/categories/", {title})
                store.commit("ADD_CATEGORY", data)
            } catch (error) {
                throw new Error(error.data.error || error.data.message)
            }
        },
        async setCategories(store) {
            try {
               const {data: {user: {id}}} = await this.$axios.get('/user');                
               const {data} = await this.$axios.get(`/categories/${id}`);
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