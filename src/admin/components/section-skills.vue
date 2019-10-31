<template lang="pug">
    .main-wrap
        section.main-section
            .main-info
                span.main-info__title Блок &#171;{{sectionTitle}}&#187;
                a.add-group.add-group_top(@click="addNewGroup")
                    span.add-group__link &#43;
                    span.add-group__text Добавить группу
            div.groups
                ul.groups__list-skills
                    li.groups__item-skills(v-if="showGroup")
                        add-skill
                    li.groups__item-skills(v-for="item in skills" :key="item.id")
                        skill-group(:skillsArr="item.skills" :skillTitle="item.title" :skillId="item.id" @addSkill="(newSkillValue, newPercentValue, itemId) => $emit('addSkill', newSkillValue, newPercentValue, itemId)")
                
</template>
    
<script>
    import skillGroup from './skill-group.vue'
    import addSkill from './add-skill.vue'
    import skillsArr from '../../data/skills.json'
    
    export default {
        name: 'sectionSkills',
        data: () => ({
            showGroup: false,
            sectionTitle: 'Обо мне',
            skills: [],
        }),
        components: {
            skillGroup, addSkill
        },
        props: {
            /*skills: Array,
            showGroup: Boolean*/
        },
        created() {
            this.skills=skillsArr
        },
        methods: {
        /*newValues: function() {
            this.$emit('addSkill', this.newSkill, this.newPercent, this.skillId)
            },*/

        addNewGroup() {
            this.showGroup = !this.showGroup
        }
        },
    }

    
</script>  

<style lang="pcss">

    .add-group {
        display: flex;
        align-items: center;


    }

    .add-group_top {
        @media screen and (max-width: $bp-phones) {
            margin-bottom: 30px;
            margin-left: 30px
        }
    }
    
    .add-group__link {
        color: #fff;
        width: 21px;
        height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #1b5ae3;
        background: -moz-linear-gradient(left,  #1b5ae3 0%, #433acc 100%);
        background: -webkit-linear-gradient(left,  #1b5ae3 0%,#433acc 100%);
        background: linear-gradient(to right,  #1b5ae3 0%,#433acc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1b5ae3', endColorstr='#433acc',GradientType=1 );
    }
    .add-group__link__link-in-group {
        font-size: 30px;
        width: 40px;
        height: 40px;
    }

    .add-group__text {
        color: #383bcf;
        margin-left: 13px;
    }

    .groups__list-skills {
        display: flex;
        flex-flow: wrap;
        
        @media screen and (max-width: $bp-desktop) {
            justify-content: center;
        }

        @media screen and (max-width: $bp-tablets) {
            //justify-content: flex-start;
        }
        
    }

    .groups__item-skills {
        margin-bottom: 30px;
        margin-right: 30px;

        @media screen and (max-width: $bp-desktop) {
            margin-right: 0;
        }

        @media screen and (max-width: $bp-tablets) {
            margin-right: 20px;
        }

        @media screen and (max-width: $bp-phones) {
            margin-right: 0;
        }

        &:nth-child(even) {
            margin-right: 0;
        }
    }

    
</style>