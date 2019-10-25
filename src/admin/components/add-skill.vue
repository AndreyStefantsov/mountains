<template lang="pug">
    .group
        div.main
            input.input.input_title(v-model="skillTitle" placeholder="Название новой группы")
            .button
                a.button__tick
                a.button__cross

        .skills
            ul.skills__list

        div.add-skill
            input.input.input_new-skill(placeholder="Новый навык" v-model="newSkill")
            .percent-wrap.percent-wrap_add-skill
                input.input.input_new-percent(placeholder="100" maxlength="3" v-model="newPercent")
            a.add-group
                span.add-group__link.add-group__link__link-in-group(@click.prevent="newValues") &#43;
</template>

<script>
    export default {
        name: 'addSkill',
        data: () => ({
            skillTitle:'',
            skillName:'',
            skillPercent:'',
            newSkill:'',
            newPercent:''
        }),
        methods: {
            newValues: function () {
                this.$emit('addSkill')
            }
        },

    }
</script>  

<style scoped lang="pcss">
    .group {
        min-height: 390px;
        margin-bottom: 30px;
        justify-content: space-between;
    }

    .add-skill {
       
    }
</style>
