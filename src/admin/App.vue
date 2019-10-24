<template>
  <div>
    <header-admin></header-admin>
    <section-skills :sectionTitle="sectionTitle" :skills ="skills" @addSkill="addNewSkill"></section-skills>
  </div>
</template>

<script>
  import headerAdmin from './components/header-admin.vue'
  import sectionSkills from './components/section-skills.vue'
  import skillsArr from '../data/skills.json'
  export default {
    components: {
      headerAdmin, sectionSkills
    },
    data: () => ({
      sectionTitle: "Обо мне",
      skills: []
    }),
    created() {
      this.skills=skillsArr
    },
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
        let  skillsList = this.skills[itemId].skills
        skillsList[newSkillValue] = newPercentValue;
        this.skills[itemId].skills = skillsList
        console.log(this.skills)
        //window.localStorage.setItem('newskillsarray', this.skills)
        /*let skillsList = JSON.stringify(this.skills[itemId].skills).split(',');
        skillsList.push(`${newSkillValue}:${newPercentValue}`)
        console.log(skillsList)
        
        JSON.parse(skillsList)
        console.log(JSON.parse(skillsList))*/
        
        
        //console.log(this.skills)
        /*console.log(newSkillValue)
        console.log(newPercentValue)
        console.log(itemId)*/
      }
    }
  } 
</script>

<style lang="pcss">
  .maincontent {
    max-width: 1200px;
    margin: 0 auto;
  }

</style>

