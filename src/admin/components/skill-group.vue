
<template lang="pug">
    .group
        div.main
            input.input.input_title(v-model="skillTitle")
            .button
                a.button__pencil.button__pencil_title
        .skills
            ul.skills__list
                li.skills_item(v-for="(skillPercent, skillName) in skillsArr" )
                    input.input.input_skill-text(:value="skillName" )
                    .percent-wrap
                        input.input.input_skill-percent(:value="skillPercent" maxlength="3")
                    .button
                        a.button__pencil
                        a.button__remove
        div.add-skill
            input.input.input_new-skill(placeholder="Новый навык" v-model="newSkill")
            .percent-wrap.percent-wrap_add-skill
                input.input.input_new-percent(placeholder="100" maxlength="3" v-model="newPercent")
            a.add-group
                span.add-group__link.add-group__link__link-in-group(@click.prevent="newValues") &#43;
</template>

<script>
    //import tickIcon from ''
    export default {
        name: 'skillGroup',
        data: () => ({
            //tick: require('images/icons/tick.svg'),
            newSkill: '',
            newPercent: ''
        }),
        props: {
            skillsArr: Object,
            skillTitle: String,
            skillId: String
        },
        methods: {
            newValues: function () {
                this.$emit('addSkill', this.newSkill, this.newPercent, this.skillId)
            }
        },
        watch: {
            newSkill() {
                //this.newSkill = this.$refs.newSkillValue.value
                //console.log(this.newSkill)
            }
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
        
    }

    .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 45px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: -9px;
            width: 485px;
            height: 1px;
            background: #dedee0;
        }
    }

    .input {
        background: transparent;
        border: none;
        width: 275px;  
        color: #464d62;

        &:focus {
            outline: none;
            border-bottom: 1px solid #383bcf;
        }
    }

    .input_title {
        color: #464d62;
        font-size: 18px;
        font-weight: $semibold;
        padding-bottom: 15px;
        pointer-events:none;
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
        pointer-events: none;
    }

    .input_skill-text {
        padding-bottom: 10px;
        margin-right: 20px;
    }

    .percent-wrap {
        position: relative;
        margin-right: 50px;

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
    }

    .add-skill {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .input_new-skill {
        padding-left: 20px;
        padding-bottom: 16px;
        margin-right: 10px;
        color: rgba(#464d62, 0.5);
        width: 218px;
        border-bottom: 1px solid #000;
    }

    .percent-wrap_add-skill {
        margin-right: 30px;
    }

    .input_new-percent {
        padding-bottom: 16px;
        padding-left: 10px;
        width: 74px;
        border-bottom: 1px solid #000;
    }

    .active-item {
        pointer-events: all;

        & input {
            border-bottom: 1px solid #000;
        }
    }
</style>