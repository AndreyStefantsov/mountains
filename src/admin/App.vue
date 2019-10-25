<template lang="pug">
  .div
    header-admin
    .content-wrap
      router-view
      <!--<section-skills :sectionTitle="sectionTitle" :showGroup="showGroup" :skills="skills" @addSkill="addNewSkill" @addGroup="addNewGroup"></section-skills>
      <section-projects></section-projects>-->
</template>

<script>
  import headerAdmin from './components/header-admin.vue'
  import sectionSkills from './components/section-skills.vue'
  import sectionProjects from './components/section-projects.vue'

  export default {
    components: {
      headerAdmin, sectionSkills, sectionProjects
    },
    data: () => ({
      sectionTitle: "Обо мне",

      showGroup: false
    }),

    /*mounted() {
      if (localStorage.skills) {
        this.skills = localStorage.skills;
      }
    },
    watch: {
      skills(newSkills) {
        localStorage.skills = newSkills;
      }
    },*/
    methods: {
      addNewSkill(newSkillValue, newPercentValue, itemId) {
        /*let  skillsList = this.skills[itemId].skills
        skillsList[newSkillValue] = newPercentValue;
        this.skills[itemId].skills = skillsList
        console.log(this.skills)*/
        //window.localStorage.setItem('newskillsarray', this.skills)
        /*let skillsList = JSON.stringify(this.skills[itemId].skills).split(',');
        skillsList.push(`${newSkillValue}:${newPercentValue}`)
        console.log(skillsList)
        
        JSON.parse(skillsList)
        console.log(JSON.parse(skillsList))*/
        
        
        //console.log(this.skills)
        console.log(newSkillValue)
        console.log(newPercentValue)
        console.log(itemId)
      },
      
    }
  } 
</script>

<style lang="pcss">
  .maincontent {
    width: 100%;
  }

  .content-wrap {
    background: url("../images/content/mountain_baloon.jpg"), rgba(#fff, .9) no-repeat;
    background-size: cover;
    background-blend-mode: lighten;
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .main-section {
    margin: 0 5%;
    display: flex;
    flex-direction: column;
  }
  .main-wrap {
    margin: 0 auto;
    max-width: 1200px;
  }
  
  .main-info {
    display: flex;
    margin-bottom: 60px;
  }
  
  .main-info__title {
    color: #464d62;
    font-weight: $bold;
    font-size: 21px;
    margin-right: 60px;
  }
</style>

