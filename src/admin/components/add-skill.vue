<template lang="pug">
    .group
        div.main
            //input.input.input_title(v-model="skillTitle" placeholder="Название новой группы")
            addInput(classMod="input_title" v-model="skillTitle" placeholder="Название новой группы")
            .button(v-if="editedMode == false")
                a.button__pencil.button__pencil_title(@click.prevent="changeEditedMode")
            .button(v-else="editedMode == true")
                a.button__tick
                a.button__cross(@click.prevent="changeEditedMode")  
        .skills
            ul.skills__list

        div.add-skill
            .add-skill__wrap
                input.input.input_new-skill(placeholder="Новый навык" v-model="newSkill")
                //addInput(classMod="input_new-skill" placeholder="Новый навык" v-model="newSkill")
                .error(v-if="isErrorTitle") {{errorMessage}}
            .percent-wrap.percent-wrap_add-skill
                input.input.input_new-percent(placeholder="100" maxlength="3" v-model="newPercent")
                //addInput(classMod="input_new-percent" placeholder="100" maxlength="3" v-model="newPercent")
                .error(v-if="isErrorPercent") {{errorMessage}}
            a.add-group(@click.prevent="newValues")
                span.add-group__link.add-group__link__link-in-group &#43;
</template>

<script>
    import addInput from './input.vue'
    export default {
        name: 'addSkill',
        data: () => ({
            skillTitle:'',
            skillName:'',
            skillPercent:'',
            newSkill:'',
            newPercent:'',
            editedMode: false,
            errorMessage: 'Это поле должно быть заполнено',
            isErrorTitle: false,
            isErrorPercent: false
        }),
        components: {
            addInput
        },
        methods: {
            newValues() {
                if ((this.newSkill==undefined) || (this.newSkill=='')) {
                    this.isErrorTitle = true;
                    setTimeout(() => {
                        this.isErrorTitle = false
                    }, 2000);
                } else if ((this.newPercent==undefined) || (this.newPercent=='')) {
                    this.isErrorPercent = true;
                    setTimeout(() => {
                        this.isErrorPercent = false
                    }, 2000);
                }
            },
            changeEditedMode() {
                this.editedMode= !this.editedMode
            }
        },
        

    }
</script>  

<style scoped lang="pcss">
    .group {
        min-height: 390px;
        margin-bottom: 30px;
        justify-content: space-between;

        @media screen and (max-width: $bp-phones) {
            margin-bottom: 0;
        }
    }

    .add-skill {
       
    }

    .input_new-skill {
        color: #464d62;
    }
</style>
