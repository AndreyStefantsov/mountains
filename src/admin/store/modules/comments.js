import {errorHandler} from "../../helpers/erorrs";

export default {
    namespaced: true,
    state: {
        comments: []
    },
    mutations: {
        SET_COMMENTS(state, comments) {
            state.comments = comments
        },
        ADD_COMMENT(state, newComment) {
            state.comments.unshift(newComment)
        },
        EDIT_COMMENT(state, editedComment) {
            state.comments = state.comments.map(comments => {
                if (comments.id === editedComment.id) {
                    Object.keys(editedComment).forEach(key => comments[key] = editedComment[key])
                }
                return comments
            })
        },
        REMOVE_COMMENT(state, removedComment) {
            state.comments = state.comments.filter(comments => {
                if (comments.id !== removedComment) {
                    return comments
                }
            })
        }
    },
    getters: {},
    actions: {
        async setComments(store) {
            try {
               const {data: {user: {id}}} = await this.$axios.get('/user');                
               const {data} = await this.$axios.get(`/reviews/${id}`);
               store.commit("SET_COMMENTS", data)
            } catch (error) {
                errorHandler(error)
            }
        },
        async addComment(store, newComment) {
            const formData = new FormData()
            Object.keys(newComment).forEach(key => formData.append(`${key}`, newComment[key]))       
            try { 
                const {data} = await this.$axios.post("/reviews", formData);
                store.commit("ADD_COMMENT", data)
            } catch (error) {
                errorHandler(error)
            }
        },
        async editComment(store, editedComment) {         
            const formData = new FormData()
            Object.keys(editedComment).forEach(key => formData.append(`${key}`, editedComment[key]))       
            try { 
                const {data} = await this.$axios.post(`/reviews/${editedComment.id}`, formData);
                store.commit("EDIT_COMMENT", data.review)
            } catch (error) {
                errorHandler(error)
            }
        },
        async removeComment(store, commentId) {         
            try { 
                const data = await this.$axios.delete(`/reviews/${commentId}`);
                store.commit("REMOVE_COMMENT", commentId)
            } catch (error) {
                errorHandler(error)
            }
        },
    },
}