<template lang="pug">
    .container-skills
        section.section-skills
            .skills-info
                span.skills-info__title Блок &#171;{{sectionTitle}}&#187;
                a.add-group
                    span.add-group__link +
                    span.add-group__text Добавить группу
            div.groups
                ul.groups__list
                    li.groups__item(v-for="item in skills" :key="item.id")
                        <skill-group :skillsArr="item.skills" :skillTitle="item.title" :skillId="item.id" @addSkill="(newSkillValue, newPercentValue, itemId) => $emit('addSkill', newSkillValue, newPercentValue, itemId)"></skill-group>
                
</template>
    
<script>
    import skillGroup from './skill-group.vue'
    export default {
        name: 'sectionSkills',
        data: () => ({
        }),
        components: {
            skillGroup
        },
        props: {
            sectionTitle: String,
            skills: Array
        }
    }
    
</script>  

<style lang="pcss">
    .container-skills {
        background: url("../../images/content/mountain_baloon.jpg"), rgba(#fff, .9) no-repeat;
        background-size: cover;
        background-blend-mode: lighten;
        padding-top: 60px;
        padding-bottom: 30px;
    }

    .section-skills {
        margin: 0 5%;
    }

    .skills-info {
        display: flex;
        margin-bottom: 60px;
    }
    .skills-info__title {
        color: #464d62;
        font-weight: $bold;
        font-size: 21px;
        margin-right: 60px;
    }
    .add-group {
        display: flex;
        align-items: center;
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

    .groups__list {
        display: flex;
        flex-flow: wrap;
        
    }

    .groups__item {
        margin-bottom: 30px;
        margin-right: 30px;

        &:nth-child(even) {
            margin-right: 0;
        }
    }

    
</style>