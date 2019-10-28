
<template lang="pug">
    .group
        div.main
            //input.input.input_title(v-model="skillTitle")
            addInput(classMod="input_title" v-model="skillTitle" :class="{'active-item': editedMode}")
            .button(v-if="editedMode == false")
                a.button__pencil.button__pencil_title(@click.prevent="changeEditedMode")
            .button(v-else="editedMode == true")
                a.button__tick
                a.button__cross(@click.prevent="changeEditedMode")    
        .skills
            ul.skills__list
                li.skills_item(v-for="skillPercent, skillName in skillsArr" :key="skillName")
                    //input.input.input_skill-text(:value="skillName" )
                    .inputs-wrap(:class="{'active-item': editedMode}")
                        addInput(classMod="input_skill-text" v-model="skillName")
                        .percent-wrap
                            //input.input.input_skill-percent(:value="skillPercent" maxlength="3")
                            addInput(classMod="input_skill-percent" v-model="skillsArr[skillPercent]" maxlength="3")
                    .button(v-if="editedMode == false")
                        a.button__pencil(@click.prevent="changeEditedMode")
                        a.button__remove
                    .button(v-else="editedMode == true")
                        a.button__tick
                        a.button__cross(@click.prevent="changeEditedMode") 
        div.add-skill
            .add-skill__wrap
                input.input.input_new-skill(placeholder="Новый навык" v-model="newSkill")
                //addInput(classMod="input_new-skill" v-model="newSkill" placeholder="Новый навык")
                .error(v-if="isErrorTitle") {{errorMessage}}
            .percent-wrap.percent-wrap_add-skill
                input.input.input_new-percent(placeholder="100" maxlength="3" v-model="newPercent")
                //addInput(classMod="input_new-percent" v-model="newPercent" placeholder="100" maxlength="3")
                .error(v-if="isErrorPercent") {{errorMessage}}
            a.add-group(@click.prevent="newValues")
                span.add-group__link.add-group__link__link-in-group &#43;
</template>

<script>
    //import tickIcon from ''
    import addInput from './input.vue'
    export default {
        name: 'skillGroup',
        data: () => ({
            //tick: require('images/icons/tick.svg'),
            newSkill: '',
            newPercent: '',
            classMod:'',
            editedMode: false,
            errorMessage: 'Это поле должно быть заполнено',
            isErrorTitle: false,
            isErrorPercent: false
            //skillTitlte: ''
        }),
        components: {
            addInput
        },
        props: {
            skillsArr: Object,
            skillTitle: String,
            skillId: String
        },
        computed: {
            /*checkString() {
                if ((this.newSkill==undefined) || (this.newSkill=='')) {
                    this.isError = true;
                    setTimeout(() => {
                        this.isError = false
                    }, 2000);
                    return 
                } this.checkString = this.newSkill
                
            }*/
        },
        methods: {
            newValues: function () {
                //console.log(this.newSkill)
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
        watch: {
            newSkill(value) {
                //console.log(value)
                //(value=='') = 
            },

        }
    }
</script>  

<style lang="pcss">
    .group {
        width: 525px;
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 30px;
        padding-bottom: 35px;

        @media screen and (max-width: $bp-tablets) {
            width: 345px;
            padding: 25px;
        }

        @media screen and (max-width: $bp-phones) {
            width: 320px;
            padding-left: 20px;
            align-items: flex-start;

        }
        
    }

    .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
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

            @media screen and (max-width: $bp-tablets) {
                width: 315px;
            }

            @media screen and (max-width: $bp-phones) {
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

        @media screen and (max-width: $bp-tablets) {
            margin-right: 25px;

        }
    }

    .input_title {
        /*color: #464d62;
        font-size: 18px;
        font-weight: $semibold;*/
        padding-bottom: 15px;
        pointer-events:none;
        margin-right: 20px;
        width: 370px;  

        @media screen and (max-width: $bp-tablets) {
            width: 230px;
        }

        @media screen and (max-width: $bp-phones) {
            font-size: 16px;
        }
    }

    .button {
        display: flex;
    }
    
    .button__tick {
        margin-right: 20px;
        background: svg-load("tick.svg", fill=#00d70a) no-repeat center;
        width: 15px;
        height: 12px;
    }

    .button__cross {
        display: block;
        background: svg-load("cross.svg", fill=#bf2929) no-repeat center;
        width: 14px;
        height: 12px;
    }

    .button__pencil {
        background: svg-load("pencil.svg", fill=#888) no-repeat center;
        width: 16px;
        height: 15px;
        margin-right: 20px;

        &_title {
            margin-right: 0;
        }
    }

    .button__remove {
        background: svg-load("trash.svg", fill=#888) no-repeat center;
        width: 13px;
        height: 15px;
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
        //pointer-events: none;
    }

    .input_skill-text {
        padding-bottom: 10px;
        margin-right: 20px;

        @media screen and (max-width: $bp-tablets) {
            margin-right: 0;
            width: 150px;
        }

        @media screen and (max-width: $bp-phones) {
            font-size: 14px;
        }
    }

    .percent-wrap {
        position: relative;
        //width: 75px;



        &:after {
            content: '%';
            position: absolute;
            top: 0;
            right: 10px;
            color: rgba(#464d62, 0.7)
        }
    }

    .input_skill-percent {
        padding-bottom: 10px;
        padding-left: 10px;
        width: 74px;

        @media screen and (max-width: $bp-tablets) {
            width: 65px;
        }

        @media screen and (max-width: $bp-phones) {
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
        

        @media screen and (max-width: $bp-tablets) {
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

        @media screen and (max-width: $bp-tablets) {
            width: 65px;
        }
    }

    .active-item {
        pointer-events: all;

        /*& input {
            border-bottom: 1px solid #000;
        }*/
    }


</style>