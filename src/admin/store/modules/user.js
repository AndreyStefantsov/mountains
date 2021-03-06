import {errorHandler} from "../../helpers/erorrs";

export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user;
        },
        LOGOUT_USER: state => (state.user = {})
    },
    getters: {
        isLogged: state => {
            const user = state.user;
            const userIsEmpty =  Object.keys(user).length === 0 && user.constructor === Object;
            return userIsEmpty === false;
        }
    },
    actions: {
        async login(state, user) { 
            try {
                const response = await this.$axios.post('/login', user);
                const token = response.data.token;
                localStorage.setItem("token", token);
                this.$axios.defaults.headers["Authorization"] = `Bearer ${token}`;
            }
            catch(error) {
                errorHandler(error)
            }
        },
        async logout({ commit }) {
            try {
                await this.$axios.post('/logout');
                commit("LOGOUT_USER");
                localStorage.removeItem("token")
            }
            catch(error) {
                errorHandler(error)
            }
        }
    }

}