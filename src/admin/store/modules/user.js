export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user;
        },
        LOGOUT_USER: (state) => {
            state.user = () => ({})
        }
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
                //commit("SET_USER", user)
            }
            catch(error) {
                throw new Error(error.response.data.error || error.response.data.message)
            }
        },
        async logout(state) {
            try {
                const user = state.user;
                await this.$axios.post('/logout', user);
                //store.commit("LOGOUT_USER")
                //this.$axios.setHeader('Authorization', null)
                localStorage.removeItem("token")
                
            }
            catch(error) {
                throw new Error(error.response.data.message)
            }
        }
    }

}