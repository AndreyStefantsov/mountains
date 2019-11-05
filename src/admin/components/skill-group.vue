
<template lang="pug">
    .group
        div.main
            input.input.input_title(v-model="editedCategory.category" :class="{'active-item': editMode}")
            .button(v-if="editMode == false")
                a.button__pencil.button__pencil_title(@click.prevent="changeEditMode")
            .button(v-else="editMode == true")
                a.button__tick(@click.prevent="changeCategoryName")
                a.button__cross(@click.prevent="removeExistedCategory")    
        .skills
            ul.skills__list
                li.skills_item(v-for="skill in category.skills" :key="skill.id")

                    //- edit-skill(:skill="skill" @changeSkill="changeSkill" @removeSkill="removeSkill")
        div.add-skill
            .add-skill__wrap
                input.input.input_new-skill(placeholder="Новый навык" v-model="newSkill.title")
                .error(v-if="isErrorTitle") {{errorMessage}}
            .percent-wrap.percent-wrap_add-skill
                input.input.input_new-percent(placeholder="100" maxlength="3" v-model="newSkill.percent")
                .error(v-if="isErrorPercent") {{errorMessage}}
            a.add-group(@click.prevent="checkNewValues")
                span.add-group__link.add-group__link__link-in-group &#43;
</template>

<script>
    import addInput from './input.vue'
    import editSkill from './edit-skill.vue'
    export default {
        name: 'skillGroup',
        data() {
            return {
                newSkill: {
                    title: '',
                    percent: '',  
                    category: this.category.id
                },
                editMode: false,
                errorMessage: 'Это поле должно быть заполнено',
                isErrorTitle: false,
                isErrorPercent: false,
                editedSkills: {...this.category.skills},
                editedCategory: {...this.category}
            }
        },
        computed: {

        },
        components: {
            addInput, editSkill
        },
        props: {
            /*skillsArr: Array,
            skillTitle: String,
            skillId: String,*/
            //skills: Object,
            /*skills: {
                type: Array,
                default: () => ({}),
                required: true 
            },*/
            category: {
                type: Object,
                default: () => ({}),
                required: true 
            }
        },
        // mouted() {
        //     this.skillTitle = skillItem.title
        // },

        methods: {
            addNewSkill() {
                /*let newSkill = {
                    title: this.newTitle,
                    percent: this.newPercent
                }*/
                this.$emit('addNewSkill', this.newSkill);
                /*this.newSkill.title = '';
                this.newSkill.percent = '';*/
            },
            /*async checkNewValues() {
                let checkValues = new Promise((resolve) => {
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
                resolve()
                })
                await checkValues;
            },*/
            checkNewValues() {
                if ((this.newSkill.title==undefined) || (this.newSkill.title=='')) {
                    this.isErrorTitle = true;
                    setTimeout(() => {
                        this.isErrorTitle = false
                    }, 2000);
                } else if ((this.newSkill.percent==undefined) || (this.newSkill.percent=='')) {
                    this.isErrorPercent = true;
                    setTimeout(() => {
                        this.isErrorPercent = false
                    }, 2000);   
                } else this.addNewSkill()
            },
            changeEditMode() {
                this.editMode= !this.editMode
            },
            changeSkill(editSkill) {
                this.editedSkills.skills[editSkill.id].title = editSkill.newSkillTitle;
                this.editedSkills.skills[editSkill.id].percent = editSkill.newSkillPercent;
            },
            removeSkill(skillId) {
                this.editedSkills.skills = this.editedSkills.skills.filter(skill => skill.id !== skillId)
            },
            editTitle() {
                if (this.editedSkills.title !== this.editedSkills.title) {
                    this.editedSkills.title = this.editedSkills.title;
                } 
                this.editMode= !this.editMode;
            },
            changeCategoryName() {
                /*if (this.editedCategory.category !== this.editedCategory.category) {
                    this.editedSkills.title = this.editedSkills.title;
                }*/
                this.editMode= !this.editMode;
                this.$emit('changeCategoryName', this.editedCategory)
                
            },
            removeExistedCategory() {
                this.editMode= !this.editMode;
                this.$emit('removeExistedCategory', this.editedCategory)
            }
        }

        //@changeSkill="(editSkill) => $emit('editSkill')"

    }
</script>  

<style lang="postcss">

	@import "../../styles/mixins.pcss";

    .group {
        width: 525px;
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 30px;
        padding-bottom: 35px;

        @include tablets {
			width: 345px;
            padding: 25px;
		}

        @include phones {
			width: 320px;
            padding-left: 20px;
            align-items: flex-start;
		}
        
    }

    .main {
        display: flex;
        justify-content: space-between;
        margin-bottom: 45px;
        position: relative;
        width: 100%;

        &:after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: -10px;
            width: 485px;
            height: 1px;
            background: #dedee0;

            @include tablets {
                width: 315px;
		    }

            @include phones {
                width: 320px;
                left: -20px;
            }

        }
    }

    /*.input {
        background: transparent;
        border: none;
        width: 275px;  
        color: #464d62;

        @media screen and (max-width: $bp-tablets) {
            width: 145px;
        }

        &:focus {
            outline: none;
            border-bottom: 1px solid #383bcf;
        }


    }*/

    .inputs-wrap {
        display: flex;
        margin-right: 50px;
        justify-content: space-between;
        width: 100%;
        pointer-events: none;

        @include tablets {
            margin-right: 25px;
        }
    }

    .input_title {
        padding-bottom: 15px;
        pointer-events:none;
        margin-right: 20px;
        width: 370px;  

        @include tablets {
            width: 230px;
        }

        @include phones {
            font-size: 16px;
        }

    }

    .button {
        display: flex;
        transform: translate(0, 5px);
    }
    
    .button__tick {
        margin-right: 20px;
        background: svg-load("tick.svg", fill=#00d70a) no-repeat center;
        width: 15px;
        height: 15px;
       
        &:hover {
            background: svg-load("tick.svg", fill=#08a337) no-repeat center;
        }

        &:active {
            outline:none;
        }
    }

    .button__cross {
        display: block;
        background: svg-load("cross.svg", fill=#bf2929) no-repeat center;
        width: 15px;
        height: 15px;

        &:hover {
            background: svg-load("cross.svg", fill=#e01b1b) no-repeat center;
        }
    }

    .button__pencil {
        background: svg-load("pencil.svg", fill=#888) no-repeat center;
        width: 15px;
        height: 15px;
        margin-right: 20px;
        background-size: 15px;

        &_title {
            margin-right: 0;
        }

        &:hover {
            background: svg-load("pencil.svg", fill=#1b5ae3) no-repeat center;
            background-size: 15px;
        }
    }

    .button__remove {
        background: svg-load("trash.svg", fill=#888) no-repeat center;
        width: 15px;
        height: 15px;
        background-size: 15px;

        &:hover {
            background: svg-load("trash.svg", fill=#bf2929) no-repeat center;
            background-size: 15px;
        }
    }


    .skills {
        margin-bottom: 75px;
    }

    .skills__list {
        display: flex;
        flex-direction: column;
    }

    .skills_item {
        display: flex;
        margin-bottom: 20px;
    }

    .input_skill-text {
        padding-bottom: 10px;
        margin-right: 20px;

        @include tablets {
            margin-right: 0;
            width: 150px;
        }


        @include phones {
            font-size: 14px;
        }

    }

    .percent-wrap {
        position: relative;

        &:after {
            content: '%';
            position: absolute;
            top: 1px;
            right: 10px;
            color: rgba(#464d62, 0.7)
        }
    }

    .input_skill-percent {
        padding-bottom: 10px;
        padding-left: 10px;
        width: 74px;

        @include tablets {
            width: 65px;
        }

        @include phones {
            font-size: 16px;
        }
    }

    .add-skill {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .add-skill__wrap {
        display: flex;
        position: relative;
    }

    .input_new-skill {
        padding-left: 20px;
        padding-bottom: 16px;
        margin-right: 10px;
        color: rgba(#464d62, 0.5);
        width: 218px;
        border-bottom: 1px solid #000 !important;
        
        @include tablets {
            width: 145px;
        }

    }

    .percent-wrap_add-skill {
        margin-right: 30px;
    }

    .input_new-percent {
        padding-bottom: 16px;
        padding-left: 10px;
        width: 74px;
        border-bottom: 1px solid #000 !important;

        @include tablets {
            width: 65px;
        }

    }

    .active-item {
        pointer-events: all;
    }


</style>