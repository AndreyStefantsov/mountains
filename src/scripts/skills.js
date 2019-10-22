import Vue from "vue"

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
    components: {skillsItem},
    props: ["skillArr"]
}

new Vue({
    el: "#skills-container",
    template: '#skills-block',
    data: () => ({
        skills: []
    }),
    components: {skillsList},
    created() {
        this.skills = require('../data/skills.json');
    } 
})