<template lang="pug">
    .group
        div.main
            input.input.input_title(v-model="newGroup.title" :class="{'active-item': editMode}" placeholder="Название новой группы")
            .button(v-if="editMode == false")
                a.button__pencil.button__pencil_title(@click.prevent="changeEditMode")
            .button(v-else="editMode == true")
                a.button__tick(@click.prevent="addGroup")
                a.button__cross(@click.prevent="changeEditMode")  
            .error(v-if="isErrorMainTitle") {{errorMessage}}
        .skills
            ul.skills__list
                li.skills__item(v-for="skill in newGroup.skills" :key="skill.id")
                    edit-skill(:skillItem="skill" @changeSkill="changeSkill" @removeSkill="removeSkill")
        div.add-skill
            .add-skill__wrap
                input.input.input_new-skill(placeholder="Новый навык" v-model="newTitle")
                .error(v-if="isErrorTitle") {{errorMessage}}
            .percent-wrap.percent-wrap_add-skill
                input.input.input_new-percent(placeholder="100" maxlength="3" v-model="newPercent")
                .error(v-if="isErrorPercent") {{errorMessage}}
            a.add-group(@click.prevent="checkNewValues")
                span.add-group__link.add-group__link__link-in-group &#43;
</template>

<script>
    import addInput from './input.vue'
    import editSkill from './edit-skill.vue'

let skillId = 0

    export default {
        name: 'addSkill',
        data() {
            return {
                newGroup: {
                    id: '',
                    title: '',
                    skills: []
                },
                newTitle:'',
                newPercent:'',
                editMode: false,
                errorMessage: 'Это поле должно быть заполнено',
                isErrorMainTitle: false,
                isErrorTitle: false,
                isErrorPercent: false,
                editedSkills: [...this.skills]
            }   
        },
        props: {
            skills: Array
        },
        created() {
           this.newGroup.id =  this.editedSkills.length
        },
        components: {
            addInput, editSkill
        },
        methods: {
            newValues() {
                if ((this.newSkill==undefined) || (this.newSkill=='')) {
                    this.isErrorTitle = true;
                    setTimeout(() => this.isErrorTitle = false, 2000);
                } else if ((this.newPercent==undefined) || (this.newPercent=='')) {
                    this.isErrorPercent = true;
                    setTimeout(() => this.isErrorPercent = false, 2000);
                } else {

                }
            },
            changeEditMode() {
                this.editMode= !this.editMode
            },
            addGroup() {
                if ((this.newGroup.title==undefined) || (this.newGroup.title=='')) {
                    this.isErrorMainTitle = true;
                    setTimeout(() => this.isErrorMainTitle = false, 2000);
                } else {
                    this.editedSkills.push(this.newGroup) 
                    this.editMode= !this.editMode;
                    console.log(this.editedSkills)
                }
               
            },
            changeSkill(editSkill) {
                this.newGroup.skills[editSkill.id].title = editSkill.newSkillTitle;
                this.newGroup.skills[editSkill.id].percent = editSkill.newSkillPercent;
            },
            removeSkill(skillId) {
                this.newGroup.skills = this.newGroup.skills.filter(skill => skill.id !== skillId)
            },
            addNewSkill() {
                let newSkill = {
                    id: skillId,
                    title: this.newTitle,
                    percent: this.newPercent
                }
                this.newGroup.skills.push(newSkill);
                this.newTitle = '';
                this.newPercent = '';
                skillId++;
            },
            checkNewValues() {
                if ((this.newTitle==undefined) || (this.newTitle=='')) {
                    this.isErrorTitle = true;
                    setTimeout(() => {
                        this.isErrorTitle = false
                    }, 2000);
                } else if ((this.newPercent==undefined) || (this.newPercent=='')) {
                    this.isErrorPercent = true;
                    setTimeout(() => {
                        this.isErrorPercent = false
                    }, 2000);   
                } else this.addNewSkill()
            },
        },
        

    }
</script>  

<style scoped lang="postcss">
    @import "../styles/mixins.pcss";
    .group {
        min-height: 390px;
        margin-bottom: 30px;
        justify-content: space-between;

        @include phones {
            margin-bottom: 0;
        }
    }

    .main {
        position: relative;
    }

    .skills {
        flex: 1;
    }

    .skills__item {
        display: flex;
        margin-bottom: 20px;
    }

    .input_new-skill {
        color: #464d62;
    }

    .active-item {
        pointer-events: all;
    }
</style>


