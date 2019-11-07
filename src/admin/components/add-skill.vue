<template lang="pug">
    .group
        div.main
            input.input.input_title(v-model="newTitle" :class="{'active-item': editMode}" placeholder="Название новой группы")
            .button(v-if="editMode == false")
                a.button__pencil.button__pencil_title(@click.prevent="changeEditMode")
            .button(v-else="editMode == true")
                a.button__tick(@click.prevent="addNewGroup")
                a.button__cross(@click.prevent="changeEditMode")  
            .error(v-if="isErrorMainTitle") {{errorMessage}}
        div.add-skill.blocked
            .add-skill__wrap
                input.input.input_new-skill(placeholder="Новый навык")
                .error(v-if="isErrorTitle") {{errorMessage}}
            .percent-wrap.percent-wrap_add-skill
                input.input.input_new-percent(placeholder="100" maxlength="3")
                .error(v-if="isErrorPercent") {{errorMessage}}
            a.add-group()
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
            }   
        },

        components: {
            addInput, editSkill
        },
        methods: {
            changeEditMode() {
                this.editMode= !this.editMode
            },
            addNewGroup() {
                if ((this.newTitle==undefined) || (this.newTitle=='')) {
                    this.isErrorMainTitle = true;
                    setTimeout(() => this.isErrorMainTitle = false, 2000);
                } else {
                    this.editMode= !this.editMode;
                    this.$emit('addNewGroup', this.newTitle);
                    this.newTitle = '';
                }
               
            }
        }

    }
</script>  

<style scoped lang="postcss">
    @import "../styles/mixins.pcss";
    .group {
        min-height: 390px;
        margin-bottom: 30px;
        justify-content: space-between;

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
            margin-bottom: 0;
		}

        /*@include phones {
            margin-bottom: 0;
        }*/
    }

    .main {
        position: relative;

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

    .blocked {
        pointer-events: none;
        user-select: none;
        filter: grayscale(100%)
    }
</style>


