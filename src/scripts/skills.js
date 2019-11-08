import Vue from "vue"
import {mapState, mapActions} from 'vuex';
import store from '@/store'
import axios from '@/requests'

store.$axios = axios;

const skillsItem = {
    template: '#skills-item',
    props: ["skillTitle", "skillPercent"],
    methods: {
        fillProgress() {
            const cirlce = this.$refs['progress'] 
            const dashArray = parseInt(getComputedStyle(cirlce).getPropertyValue('stroke-dasharray'))
            const percent = (-dashArray*(100-this.skillPercent))/100
            cirlce.style.strokeDashoffset = percent
        }
    },
    mounted() {
        this.fillProgress()
    }
}

const skillsList = {
    template: '#skills-list',
    components: {
        skillsItem
    },
    props: ["skillArr"]
}

new Vue({
    el: "#skills-container",
    store,
    template: '#skills-block',
    data: () => ({

    }),
    components: {
        skillsList
    },
    computed: {
        ...mapState("categories", {
            categories: state => state.categories
        }),
    },
    methods: {
        ...mapActions("categories", ["setCategories"]),
    },
    created() {
        this.setCategories()
    } 
})
